/**
 * VocabLoop Application Logic
 * Supports 100% click-based testing, endless spaced loop rotation,
 * flashcards, matching mini-game, audio synthesis & speech pronunciation.
 */

(function () {
  'use strict';

  // State Management
  const state = {
    currentMode: 'quiz', // 'quiz' | 'flashcard' | 'match' | 'list'
    selectedChapter: 'all', // 'all' | 1 | 2 | 3 | 4 | 5 | 6
    direction: 'eng-thai', // 'eng-thai' | 'thai-eng' | 'mixed'
    autoAdvance: true,
    soundEnabled: true,
    theme: 'minimal-brown',

    // Quiz Endless Queue
    queue: [],
    history: [],
    currentIndex: 0,
    currentRound: 1,
    correctCount: 0,
    wrongCount: 0,
    streak: 0,
    bestStreak: 0,
    isAnswered: false,
    autoAdvanceTimer: null,

    // Flashcard
    fcIndex: 0,
    fcQueue: [],
    fcFlipped: false,

    // Match Game
    matchCards: [],
    firstSelectedCard: null,
    matchedPairsCount: 0,
    isProcessingMatch: false,

    // Performance tracking per word { [id]: { correct: 0, wrong: 0 } }
    wordStats: {}
  };

  // Web Audio Synthesizer
  class SoundFX {
    constructor() {
      this.ctx = null;
    }

    init() {
      if (!this.ctx) {
        const AudioCtx = window.AudioContext || window.webkitAudioContext;
        if (AudioCtx) {
          this.ctx = new AudioCtx();
        }
      }
      if (this.ctx && this.ctx.state === 'suspended') {
        this.ctx.resume();
      }
    }

    playTone(freq, type, duration, startTime = 0, gainLevel = 0.15) {
      if (!state.soundEnabled) return;
      this.init();
      if (!this.ctx) return;

      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = type;
      osc.frequency.setValueAtTime(freq, this.ctx.currentTime + startTime);

      gain.gain.setValueAtTime(gainLevel, this.ctx.currentTime + startTime);
      gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + startTime + duration);

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start(this.ctx.currentTime + startTime);
      osc.stop(this.ctx.currentTime + startTime + duration);
    }

    correct() {
      this.playTone(523.25, 'sine', 0.12, 0, 0.15); // C5
      this.playTone(659.25, 'sine', 0.12, 0.08, 0.15); // E5
      this.playTone(783.99, 'sine', 0.22, 0.16, 0.18); // G5
    }

    wrong() {
      this.playTone(280, 'triangle', 0.15, 0, 0.18);
      this.playTone(220, 'triangle', 0.25, 0.12, 0.2);
    }

    streakBonus() {
      this.playTone(587.33, 'triangle', 0.1, 0, 0.15); // D5
      this.playTone(739.99, 'triangle', 0.1, 0.08, 0.15); // F#5
      this.playTone(880.0, 'triangle', 0.15, 0.16, 0.18); // A5
      this.playTone(1174.66, 'sine', 0.3, 0.24, 0.2); // D6
    }

    click() {
      this.playTone(600, 'sine', 0.04, 0, 0.06);
    }

    flip() {
      this.playTone(400, 'triangle', 0.06, 0, 0.05);
    }
  }

  const sfx = new SoundFX();

  // Speech Pronunciation (Web Speech API)
  function speakEnglish(text, btnElement = null) {
    if (!('speechSynthesis' in window)) return;
    window.speechSynthesis.cancel();

    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'en-US';
    utterance.rate = 0.9;
    utterance.pitch = 1.0;

    if (btnElement) {
      btnElement.classList.add('speaking');
      utterance.onend = () => btnElement.classList.remove('speaking');
      utterance.onerror = () => btnElement.classList.remove('speaking');
    }

    window.speechSynthesis.speak(utterance);
  }

  // DOM Elements
  const elements = {
    // Top Bar
    streakCount: document.getElementById('streakCount'),
    streakBadge: document.getElementById('streakBadge'),
    audioToggleBtn: document.getElementById('audioToggleBtn'),
    audioIcon: document.getElementById('audioIcon'),
    themeToggleBtn: document.getElementById('themeToggleBtn'),
    themeIcon: document.getElementById('themeIcon'),

    // Nav Tabs
    tabs: document.querySelectorAll('.nav-tab'),
    views: document.querySelectorAll('.game-view'),

    // Chapter Pills
    chapterPills: document.getElementById('chapterPills'),

    // Direction Controls & Auto Advance
    directionControl: document.getElementById('directionControl'),
    autoAdvanceCheck: document.getElementById('autoAdvanceCheck'),

    // Speed Quiz
    roundBadge: document.getElementById('roundBadge'),
    currentChapterTag: document.getElementById('currentChapterTag'),
    correctCounter: document.getElementById('correctCounter'),
    wrongCounter: document.getElementById('wrongCounter'),
    accuracyRate: document.getElementById('accuracyRate'),
    progressBarFill: document.getElementById('progressBarFill'),
    posBadge: document.getElementById('posBadge'),
    quizSpeakBtn: document.getElementById('quizSpeakBtn'),
    questionWord: document.getElementById('questionWord'),
    questionSubtext: document.getElementById('questionSubtext'),
    choicesGrid: document.getElementById('choicesGrid'),
    feedbackBanner: document.getElementById('feedbackBanner'),
    feedbackIcon: document.getElementById('feedbackIcon'),
    feedbackTitle: document.getElementById('feedbackTitle'),
    feedbackDesc: document.getElementById('feedbackDesc'),
    btnNextWord: document.getElementById('btnNextWord'),
    btnSkip: document.getElementById('btnSkip'),

    // Flashcard
    flipCard: document.getElementById('flipCard'),
    fcWord: document.getElementById('fcWord'),
    fcPos: document.getElementById('fcPos'),
    fcChapter: document.getElementById('fcChapter'),
    fcTranslation: document.getElementById('fcTranslation'),
    fcOriginal: document.getElementById('fcOriginal'),
    fcChapterBack: document.getElementById('fcChapterBack'),
    fcDef: document.getElementById('fcDef'),
    fcSpeakBtn: document.getElementById('fcSpeakBtn'),
    fcBtnReview: document.getElementById('fcBtnReview'),
    fcBtnMastered: document.getElementById('fcBtnMastered'),
    fcProgressText: document.getElementById('fcProgressText'),

    // Match
    matchGrid: document.getElementById('matchGrid'),
    matchPairsCount: document.getElementById('matchPairsCount'),
    btnRefreshMatch: document.getElementById('btnRefreshMatch'),

    // Word List
    wordSearchInput: document.getElementById('wordSearchInput'),
    wordCardsGrid: document.getElementById('wordCardsGrid'),
    visibleCount: document.getElementById('visibleCount')
  };

  // Helper Utilities
  function shuffle(array) {
    const arr = [...array];
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  }

  function getActiveWords() {
    if (state.selectedChapter === 'all') {
      return [...VOCABULARY_DATA];
    }
    const ch = parseInt(state.selectedChapter, 10);
    return VOCABULARY_DATA.filter(item => item.chapter === ch);
  }

  // ================= ENDLESS QUEUE ENGINE =================
  function initEndlessQueue() {
    const words = getActiveWords();
    // Prioritize words with errors if stats exist
    state.queue = shuffle(words);
    state.currentIndex = 0;
    state.currentRound = 1;
    updateProgressUI();
  }

  function getCurrentWord() {
    if (!state.queue || state.queue.length === 0) {
      initEndlessQueue();
    }
    return state.queue[state.currentIndex];
  }

  function determineDirection() {
    if (state.direction === 'mixed') {
      const modes = ['eng-thai', 'def-eng', 'thai-eng'];
      return modes[Math.floor(Math.random() * modes.length)];
    }
    return state.direction;
  }

  function updateProgressUI() {
    const total = state.queue.length;
    const current = state.currentIndex + 1;
    const percentage = total > 0 ? Math.min(100, Math.round((current / total) * 100)) : 0;

    elements.roundBadge.innerHTML = `<span class="lbl-full">รอบที่ ${state.currentRound} • คำที่ </span><span class="lbl-short">คำที่ </span>${current}/${total}`;
    elements.progressBarFill.style.width = `${percentage}%`;

    elements.correctCounter.textContent = state.correctCount;
    elements.wrongCounter.textContent = state.wrongCount;

    const totalAnswered = state.correctCount + state.wrongCount;
    const accuracy = totalAnswered > 0 ? Math.round((state.correctCount / totalAnswered) * 100) : 100;
    elements.accuracyRate.textContent = `${accuracy}%`;

    elements.streakCount.textContent = state.streak;
  }

  // ================= SPEED QUIZ CONTROLLER =================
  function loadQuestion() {
    if (state.autoAdvanceTimer) {
      clearTimeout(state.autoAdvanceTimer);
      state.autoAdvanceTimer = null;
    }

    state.isAnswered = false;
    elements.feedbackBanner.style.display = 'none';
    elements.feedbackBanner.className = 'feedback-banner';

    const word = getCurrentWord();
    if (!word) {
      initEndlessQueue();
      return loadQuestion();
    }

    // Direction for this question
    const dir = determineDirection();
    state.activeQuestionDirection = dir;

    // Set UI Tags
    if (elements.currentChapterTag) {
      elements.currentChapterTag.textContent = word.chapterTitle;
    }
    elements.posBadge.textContent = word.type || 'v.';

    // Reset is-definition class
    elements.questionWord.classList.remove('is-definition');

    if (dir === 'eng-thai') {
      elements.questionWord.textContent = word.english;
      elements.questionSubtext.textContent = 'เลือกความหมายภาษาไทยที่ถูกต้อง (คลิกช้อยส์)';
      elements.quizSpeakBtn.style.display = 'inline-flex';
      elements.quizSpeakBtn.onclick = () => speakEnglish(word.english, elements.quizSpeakBtn);
    } else if (dir === 'def-eng') {
      elements.questionWord.textContent = word.definition || word.english;
      elements.questionWord.classList.add('is-definition');
      elements.questionSubtext.textContent = 'อ่านคำจำกัดความภาษาอังกฤษ แล้วเลือกคำศัพท์ที่ถูกต้อง';
      elements.quizSpeakBtn.style.display = 'inline-flex';
      elements.quizSpeakBtn.onclick = () => speakEnglish(word.definition || word.english, elements.quizSpeakBtn);
    } else {
      // thai-eng
      elements.questionWord.textContent = word.thai;
      elements.questionSubtext.textContent = 'เลือกคำศัพท์ภาษาอังกฤษที่ถูกต้อง (คลิกช้อยส์)';
      elements.quizSpeakBtn.style.display = 'none';
    }

    // Generate 4 Distinct Choices (1 Correct + 3 Distractors)
    const choices = generateChoices(word, dir);
    renderChoices(choices, word, dir);

    updateProgressUI();
  }

  // Intelligent Distractor Similarity Algorithm (คัดเลือกช้อยส์ลวงที่มีรูปคำและชนิดคำคล้ายกัน)
  function getDistractorSimilarityScore(target, candidate, isThaiChoice) {
    if (target.id === candidate.id) return -999;
    let score = 0;

    // 1. Same Chapter (บริบทกลุ่มคำในเรื่องเดียวกัน)
    if (target.chapter === candidate.chapter) score += 14;

    // 2. Part of Speech match (ชนิดคำเหมือนกัน เช่น n. กับ n., v. กับ v., adj. กับ adj.)
    const posA = (target.type || '').toLowerCase().trim();
    const posB = (candidate.type || '').toLowerCase().trim();
    if (posA && posB && posA === posB) score += 16;

    // 3. English word form & length similarity (รูปคำ ความยาวใกล้เคียงกัน)
    const engA = target.english.toLowerCase();
    const engB = candidate.english.toLowerCase();
    const lenDiff = Math.abs(engA.length - engB.length);
    if (lenDiff <= 1) score += 8;
    else if (lenDiff <= 3) score += 4;

    // 4. Starting letter match (ขึ้นต้นด้วยอักษรตัวเดียวกัน)
    if (engA[0] === engB[0]) score += 7;

    // 5. Common Suffixes (ลงท้ายด้วยปัจจัยคล้ายกัน เช่น -tion, -ing, -able, -ly, -ment, -ive, -ous, -ic)
    const suffixes = ['tion', 'sion', 'ing', 'able', 'ible', 'ment', 'ive', 'ly', 'ous', 'al', 'ic', 'ence', 'ance'];
    for (const sfx of suffixes) {
      if (engA.endsWith(sfx) && engB.endsWith(sfx)) {
        score += 10;
        break;
      }
    }

    // 6. Thai phrasing similarity (กรณีช้อยส์เป็นภาษาไทย ให้รูปคำไทยคล้ายกัน เช่น ขึ้นต้นด้วย การ... หรือ ความ... เหมือนกัน)
    if (isThaiChoice) {
      const thaiA = target.thai.trim();
      const thaiB = candidate.thai.trim();
      if ((thaiA.startsWith('การ') && thaiB.startsWith('การ')) ||
          (thaiA.startsWith('ความ') && thaiB.startsWith('ความ'))) {
        score += 8;
      }
      if (Math.abs(thaiA.length - thaiB.length) <= 3) {
        score += 4;
      }
    }

    return score;
  }

  function generateChoices(correctWord, direction) {
    const allWords = VOCABULARY_DATA;
    const isThaiChoice = direction === 'eng-thai';
    const correctText = isThaiChoice ? correctWord.thai : correctWord.english;

    // Filter candidates (excluding correct answer and duplicate choice texts)
    const candidates = allWords.filter(w => {
      if (w.id === correctWord.id) return false;
      const text = isThaiChoice ? w.thai : w.english;
      return text !== correctText;
    });

    // Score candidates with similarity + small random jitter (0-6) so choices stay varied yet tricky
    const scoredCandidates = candidates.map(w => ({
      wordObj: w,
      text: isThaiChoice ? w.thai : w.english,
      score: getDistractorSimilarityScore(correctWord, w, isThaiChoice) + (Math.random() * 6)
    }));

    // Sort descending by similarity score
    scoredCandidates.sort((a, b) => b.score - a.score);

    const distractors = [];
    const usedTexts = new Set();
    usedTexts.add(correctText);

    for (const item of scoredCandidates) {
      if (!usedTexts.has(item.text)) {
        usedTexts.add(item.text);
        distractors.push({
          wordObj: item.wordObj,
          text: item.text,
          isCorrect: false
        });
        if (distractors.length >= 3) break;
      }
    }

    const correctChoice = {
      wordObj: correctWord,
      text: correctText,
      isCorrect: true
    };

    return shuffle([correctChoice, ...distractors]);
  }

  function renderChoices(choices, currentWord, direction) {
    elements.choicesGrid.innerHTML = '';
    const keyLabels = ['A', 'B', 'C', 'D'];

    choices.forEach((choice, index) => {
      const btn = document.createElement('button');
      btn.className = 'choice-btn';
      btn.id = `choiceBtn_${index}`;
      btn.dataset.correct = choice.isCorrect ? 'true' : 'false';

      btn.innerHTML = `
        <span class="choice-key">${keyLabels[index]}</span>
        <span class="choice-text">${choice.text}</span>
      `;

      btn.addEventListener('click', () => {
        handleChoiceClick(btn, choice, currentWord, direction);
      });

      elements.choicesGrid.appendChild(btn);
    });
  }

  function handleChoiceClick(btn, choice, currentWord, direction) {
    if (state.isAnswered) return;
    state.isAnswered = true;

    // Track word stats
    if (!state.wordStats[currentWord.id]) {
      state.wordStats[currentWord.id] = { correct: 0, wrong: 0 };
    }

    const allButtons = elements.choicesGrid.querySelectorAll('.choice-btn');
    allButtons.forEach(b => {
      b.disabled = true;
      if (b.dataset.correct === 'true') {
        b.classList.add('correct');
      } else if (b === btn) {
        b.classList.add('wrong');
      } else {
        b.classList.add('dimmed');
      }
    });

    if (choice.isCorrect) {
      // Correct Answer!
      state.correctCount++;
      state.streak++;
      state.wordStats[currentWord.id].correct++;

      if (state.streak > state.bestStreak) {
        state.bestStreak = state.streak;
      }

      // Visual pulse on streak
      elements.streakBadge.classList.add('pulsing');
      setTimeout(() => elements.streakBadge.classList.remove('pulsing'), 600);

      // Sound
      if (state.streak > 0 && state.streak % 5 === 0) {
        sfx.streakBonus();
      } else {
        sfx.correct();
      }

      // Voice read
      speakEnglish(currentWord.english);

      // Show Feedback
      elements.feedbackBanner.classList.remove('is-wrong');
      elements.feedbackIcon.innerHTML = '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>';
      elements.feedbackTitle.textContent = state.streak >= 3 ? `ยอดเยี่ยมมาก! สตรีค ${state.streak} ข้อติด` : 'ถูกต้อง! ยอดเยี่ยม';
      
      const defHtml = currentWord.definition ? `<div style="font-size:0.8rem;color:var(--text-muted);font-style:italic;margin-top:3px;">"${currentWord.definition}"</div>` : '';
      elements.feedbackDesc.innerHTML = `<strong>${currentWord.english}</strong> (${currentWord.type}) = ${currentWord.thai}${defHtml}`;
      elements.feedbackBanner.style.display = 'flex';

      // Auto advance or wait for click
      if (state.autoAdvance) {
        state.autoAdvanceTimer = setTimeout(() => {
          advanceToNextWord(true);
        }, 1200);
      }
    } else {
      // Wrong Answer!
      state.wrongCount++;
      state.streak = 0;
      state.wordStats[currentWord.id].wrong++;

      sfx.wrong();
      speakEnglish(currentWord.english);

      // Show Feedback
      elements.feedbackBanner.classList.add('is-wrong');
      elements.feedbackIcon.innerHTML = '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>';
      elements.feedbackTitle.textContent = 'ยังไม่ถูกต้องนะ! จำไว้นะ';
      
      const defHtml = currentWord.definition ? `<div style="font-size:0.8rem;color:var(--text-muted);font-style:italic;margin-top:3px;">"${currentWord.definition}"</div>` : '';
      elements.feedbackDesc.innerHTML = `เฉลย: <strong>${currentWord.english}</strong> (${currentWord.type}) = <span style="color:#2e6c47;font-weight:700;">${currentWord.thai}</span>${defHtml}`;
      elements.feedbackBanner.style.display = 'flex';

      // Intelligent Spaced Repetition: Re-insert this missed word 3-4 steps ahead so it loops back soon!
      requeueMissedWord(currentWord);

      if (state.autoAdvance) {
        state.autoAdvanceTimer = setTimeout(() => {
          advanceToNextWord(false);
        }, 2200);
      }
    }

    updateProgressUI();
  }

  function requeueMissedWord(word) {
    // Insert word 3 to 5 positions ahead randomly so it loops back naturally
    const offset = 3 + Math.floor(Math.random() * 3);
    const targetPos = Math.min(state.currentIndex + offset, state.queue.length);
    state.queue.splice(targetPos, 0, word);
  }

  function advanceToNextWord(wasCorrect = true) {
    if (state.autoAdvanceTimer) {
      clearTimeout(state.autoAdvanceTimer);
      state.autoAdvanceTimer = null;
    }

    state.currentIndex++;

    // If we've reached the end of current cycle, start new loop round with true Fisher-Yates shuffle!
    if (state.currentIndex >= state.queue.length) {
      state.currentRound++;
      const words = getActiveWords();
      // Truly randomize all words with Fisher-Yates shuffle first
      const shuffled = shuffle(words);
      // Prioritize words with errors towards the front while preserving random order
      shuffled.sort((a, b) => {
        const errA = (state.wordStats[a.id]?.wrong || 0);
        const errB = (state.wordStats[b.id]?.wrong || 0);
        return errB - errA;
      });
      state.queue = shuffled;
      state.currentIndex = 0;
    }

    loadQuestion();
  }

  function skipCurrentWord() {
    sfx.click();
    advanceToNextWord(false);
  }

  // ================= FLASHCARD CONTROLLER =================
  function initFlashcardMode() {
    state.fcQueue = shuffle(getActiveWords());
    state.fcIndex = 0;
    state.fcFlipped = false;
    renderFlashcard();
  }

  function renderFlashcard() {
    if (!state.fcQueue || state.fcQueue.length === 0) {
      state.fcQueue = shuffle(getActiveWords());
      state.fcIndex = 0;
    }

    const word = state.fcQueue[state.fcIndex];
    if (!word) return;

    // Reset flip
    state.fcFlipped = false;
    elements.flipCard.classList.remove('is-flipped');

    elements.fcChapter.textContent = word.chapterShort;
    elements.fcChapterBack.textContent = word.chapterShort;
    elements.fcWord.textContent = word.english;
    elements.fcPos.textContent = word.type || 'v.';
    elements.fcTranslation.textContent = word.thai;
    elements.fcOriginal.textContent = `${word.english} (${word.type || ''})`;
    if (elements.fcDef) {
      elements.fcDef.textContent = word.definition ? `"${word.definition}"` : '';
    }
    elements.fcProgressText.textContent = `คำที่ ${state.fcIndex + 1} จากทั้งหมด ${state.fcQueue.length} คำ`;
  }

  function flipFlashcard() {
    sfx.flip();
    state.fcFlipped = !state.fcFlipped;
    elements.flipCard.classList.toggle('is-flipped', state.fcFlipped);
  }

  function handleFlashcardAnswer(mastered) {
    sfx.click();
    const currentWord = state.fcQueue[state.fcIndex];

    if (!mastered) {
      // Requeue soon
      const insertAt = Math.min(state.fcIndex + 4, state.fcQueue.length);
      state.fcQueue.splice(insertAt, 0, currentWord);
    }

    state.fcIndex++;
    if (state.fcIndex >= state.fcQueue.length) {
      state.fcIndex = 0;
      state.fcQueue = shuffle(getActiveWords());
    }

    renderFlashcard();
  }

  // ================= MATCHING GAME CONTROLLER =================
  function initMatchGame() {
    const words = shuffle(getActiveWords()).slice(0, 6); // 6 pairs = 12 cards
    state.matchedPairsCount = 0;
    state.firstSelectedCard = null;
    state.isProcessingMatch = false;

    elements.matchPairsCount.textContent = `0/${words.length}`;

    // Create 12 cards (6 English, 6 Thai)
    const cards = [];
    words.forEach(w => {
      cards.push({
        id: `match_eng_${w.id}`,
        wordId: w.id,
        text: w.english,
        lang: 'EN',
        pronounce: w.english
      });
      cards.push({
        id: `match_thai_${w.id}`,
        wordId: w.id,
        text: w.thai,
        lang: 'TH'
      });
    });

    state.matchCards = shuffle(cards);
    renderMatchGrid();
  }

  function renderMatchGrid() {
    elements.matchGrid.innerHTML = '';

    state.matchCards.forEach(card => {
      const cardEl = document.createElement('div');
      cardEl.className = 'match-card';
      cardEl.id = card.id;
      cardEl.dataset.wordId = card.wordId;
      cardEl.dataset.lang = card.lang;

      cardEl.innerHTML = `
        <span>${card.text}</span>
        <span class="card-lang-tag">${card.lang === 'EN' ? 'English (EN)' : 'ภาษาไทย (TH)'}</span>
      `;

      cardEl.addEventListener('click', () => handleMatchCardClick(cardEl, card));
      elements.matchGrid.appendChild(cardEl);
    });
  }

  function handleMatchCardClick(cardEl, card) {
    if (state.isProcessingMatch || cardEl.classList.contains('matched') || cardEl.classList.contains('selected')) {
      return;
    }

    sfx.click();
    if (card.lang === 'EN') {
      speakEnglish(card.pronounce);
    }

    if (!state.firstSelectedCard) {
      // First card clicked
      state.firstSelectedCard = { el: cardEl, data: card };
      cardEl.classList.add('selected');
    } else {
      // Second card clicked
      const first = state.firstSelectedCard;
      const second = { el: cardEl, data: card };
      second.el.classList.add('selected');

      state.isProcessingMatch = true;

      // Check if match
      if (first.data.wordId === second.data.wordId && first.data.lang !== second.data.lang) {
        // MATCH!
        sfx.correct();
        setTimeout(() => {
          first.el.classList.remove('selected');
          second.el.classList.remove('selected');
          first.el.classList.add('matched');
          second.el.classList.add('matched');

          state.matchedPairsCount++;
          elements.matchPairsCount.textContent = `${state.matchedPairsCount}/6`;
          state.firstSelectedCard = null;
          state.isProcessingMatch = false;

          // If all matched
          if (state.matchedPairsCount >= 6) {
            sfx.streakBonus();
            setTimeout(() => {
              alert('ยินดีด้วย! คุณจับคู่คำศัพท์ครบทั้ง 6 คู่เรียบร้อยแล้ว ระบบกำลังโหลดคำชุดถัดไป');
              initMatchGame();
            }, 500);
          }
        }, 400);
      } else {
        // WRONG MATCH
        sfx.wrong();
        first.el.classList.add('wrong-match');
        second.el.classList.add('wrong-match');

        setTimeout(() => {
          first.el.classList.remove('selected', 'wrong-match');
          second.el.classList.remove('selected', 'wrong-match');
          state.firstSelectedCard = null;
          state.isProcessingMatch = false;
        }, 750);
      }
    }
  }

  // ================= WORD LIST CONTROLLER =================
  function renderWordList(filterQuery = '') {
    const words = getActiveWords();
    const query = filterQuery.trim().toLowerCase();

    const filtered = words.filter(w => {
      if (!query) return true;
      return (
        w.english.toLowerCase().includes(query) ||
        w.thai.toLowerCase().includes(query) ||
        (w.definition && w.definition.toLowerCase().includes(query)) ||
        (w.type && w.type.toLowerCase().includes(query))
      );
    });

    elements.visibleCount.textContent = filtered.length;
    elements.wordCardsGrid.innerHTML = '';

    filtered.forEach(w => {
      const card = document.createElement('div');
      card.className = 'word-item-card';

      card.innerHTML = `
        <div class="word-item-header">
          <div class="word-item-title">
            <span>${w.english}</span>
            <span class="word-item-pos">(${w.type || ''})</span>
          </div>
          <button class="item-speak-btn" title="ฟังการออกเสียง">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/>
              <path d="M15.54 8.46a5 5 0 0 1 0 7.07"/>
            </svg>
          </button>
        </div>
        <div class="word-item-meaning">${w.thai}</div>
        ${w.definition ? `<div class="word-item-def">"${w.definition}"</div>` : ''}
        <div class="word-item-footer">
          <span class="item-chapter">${w.chapterShort}</span>
        </div>
      `;

      const speakBtn = card.querySelector('.item-speak-btn');
      speakBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        sfx.click();
        speakEnglish(w.english, speakBtn);
      });

      elements.wordCardsGrid.appendChild(card);
    });
  }

  // ================= EVENT LISTENERS & SWITCHERS =================
  function setupEventListeners() {
    // Nav Tab Switcher
    elements.tabs.forEach(tab => {
      tab.addEventListener('click', () => {
        sfx.click();
        const mode = tab.dataset.mode;
        switchMode(mode);
      });
    });

    // Chapter Pill Filter
    const pills = elements.chapterPills.querySelectorAll('.pill');
    pills.forEach(pill => {
      pill.addEventListener('click', () => {
        sfx.click();
        pills.forEach(p => p.classList.remove('active'));
        pill.classList.add('active');
        state.selectedChapter = pill.dataset.chapter;

        // Reset and reload current mode
        initEndlessQueue();
        loadQuestion();
        initFlashcardMode();
        initMatchGame();
        renderWordList(elements.wordSearchInput.value);
      });
    });

    // Direction Segments
    const segBtns = elements.directionControl.querySelectorAll('.seg-btn');
    segBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        sfx.click();
        segBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        state.direction = btn.dataset.dir;
        loadQuestion();
      });
    });

    // Auto Advance Check
    elements.autoAdvanceCheck.addEventListener('change', (e) => {
      state.autoAdvance = e.target.checked;
    });

    // Quiz Buttons
    elements.btnNextWord.addEventListener('click', () => {
      sfx.click();
      advanceToNextWord(true);
    });

    elements.btnSkip.addEventListener('click', () => {
      skipCurrentWord();
    });

    // Flashcard Interactions
    elements.flipCard.addEventListener('click', () => flipFlashcard());
    elements.fcSpeakBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      const currentWord = state.fcQueue[state.fcIndex];
      if (currentWord) speakEnglish(currentWord.english, elements.fcSpeakBtn);
    });

    elements.fcBtnReview.addEventListener('click', (e) => {
      e.stopPropagation();
      handleFlashcardAnswer(false);
    });

    elements.fcBtnMastered.addEventListener('click', (e) => {
      e.stopPropagation();
      handleFlashcardAnswer(true);
    });

    // Match Game Refresh
    elements.btnRefreshMatch.addEventListener('click', () => {
      sfx.click();
      initMatchGame();
    });

    // Word Search
    elements.wordSearchInput.addEventListener('input', (e) => {
      renderWordList(e.target.value);
    });

    // Audio Toggle
    elements.audioToggleBtn.addEventListener('click', () => {
      state.soundEnabled = !state.soundEnabled;
      updateAudioIcon();
      localStorage.setItem('vocab_sound_enabled', state.soundEnabled ? '1' : '0');
    });

    // Theme Toggle
    elements.themeToggleBtn.addEventListener('click', () => {
      state.theme = state.theme === 'minimal-brown' ? 'dark-espresso' : 'minimal-brown';
      applyTheme(state.theme);
      localStorage.setItem('vocab_theme', state.theme);
    });

    // Keyboard Shortcuts (1, 2, 3, 4 for choices, Space to Flip, Enter for Next)
    window.addEventListener('keydown', (e) => {
      if (e.target.tagName === 'INPUT') return;

      if (state.currentMode === 'quiz') {
        if (['1', '2', '3', '4'].includes(e.key)) {
          const index = parseInt(e.key, 10) - 1;
          const btn = document.getElementById(`choiceBtn_${index}`);
          if (btn && !btn.disabled) {
            btn.click();
          }
        } else if (e.key === 'Enter') {
          if (state.isAnswered) {
            elements.btnNextWord.click();
          }
        } else if (e.key.toLowerCase() === 's') {
          elements.btnSkip.click();
        }
      } else if (state.currentMode === 'flashcard') {
        if (e.key === ' ' || e.key === 'ArrowUp' || e.key === 'ArrowDown') {
          e.preventDefault();
          flipFlashcard();
        } else if (e.key === 'ArrowLeft') {
          elements.fcBtnReview.click();
        } else if (e.key === 'ArrowRight') {
          elements.fcBtnMastered.click();
        }
      }
    });
  }

  function switchMode(mode) {
    state.currentMode = mode;

    elements.tabs.forEach(tab => {
      tab.classList.toggle('active', tab.dataset.mode === mode);
    });

    elements.views.forEach(view => {
      view.classList.remove('active');
    });

    if (mode === 'quiz') {
      document.getElementById('viewQuiz').classList.add('active');
      loadQuestion();
    } else if (mode === 'flashcard') {
      document.getElementById('viewFlashcard').classList.add('active');
      initFlashcardMode();
    } else if (mode === 'match') {
      document.getElementById('viewMatch').classList.add('active');
      initMatchGame();
    } else if (mode === 'list') {
      document.getElementById('viewList').classList.add('active');
      renderWordList(elements.wordSearchInput.value);
    }
  }

  function updateAudioIcon() {
    if (state.soundEnabled) {
      elements.audioIcon.innerHTML = '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/><path d="M15.54 8.46a5 5 0 0 1 0 7.07"/><path d="M19.07 4.93a10 10 0 0 1 0 14.14"/></svg>';
    } else {
      elements.audioIcon.innerHTML = '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/><line x1="23" y1="9" x2="17" y2="15"/><line x1="17" y1="9" x2="23" y2="15"/></svg>';
    }
  }

  function applyTheme(theme) {
    if (theme === 'dark-espresso') {
      document.body.classList.add('dark-espresso-theme');
      elements.themeIcon.innerHTML = '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg>';
    } else {
      document.body.classList.remove('dark-espresso-theme');
      elements.themeIcon.innerHTML = '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 8h1a4 4 0 0 1 0 8h-1"/><path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"/><line x1="6" y1="1" x2="6" y2="4"/><line x1="10" y1="1" x2="10" y2="4"/><line x1="14" y1="1" x2="14" y2="4"/></svg>';
    }
  }

  function loadPersistedSettings() {
    const savedSound = localStorage.getItem('vocab_sound_enabled');
    if (savedSound !== null) {
      state.soundEnabled = savedSound === '1';
      updateAudioIcon();
    }

    const savedTheme = localStorage.getItem('vocab_theme');
    if (savedTheme) {
      state.theme = savedTheme;
      applyTheme(savedTheme);
    }
  }

  // Application Startup
  function init() {
    loadPersistedSettings();
    setupEventListeners();
    initEndlessQueue();
    loadQuestion();
    renderWordList();
  }

  // Run on DOM ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
