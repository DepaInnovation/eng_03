// Vocabulary database with 6 chapters
const VOCABULARY_DATA = [
  // บทที่ 1: Entertainment
  {
    id: "c1_01",
    chapter: 1,
    chapterTitle: "Entertainment (ความบันเทิง)",
    chapterShort: "Ch.1 Entertainment",
    english: "actress",
    thai: "นักแสดงหญิง",
    type: "n."
  },
  {
    id: "c1_02",
    chapter: 1,
    chapterTitle: "Entertainment (ความบันเทิง)",
    chapterShort: "Ch.1 Entertainment",
    english: "ambition",
    thai: "ความทะเยอทะยาน",
    type: "n."
  },
  {
    id: "c1_03",
    chapter: 1,
    chapterTitle: "Entertainment (ความบันเทิง)",
    chapterShort: "Ch.1 Entertainment",
    english: "attention spans",
    thai: "ช่วงเวลาที่จดจ่อได้",
    type: "n."
  },
  {
    id: "c1_04",
    chapter: 1,
    chapterTitle: "Entertainment (ความบันเทิง)",
    chapterShort: "Ch.1 Entertainment",
    english: "binge-watching",
    thai: "การดูรวดเดียวหลายตอนต่อเนื่อง",
    type: "n."
  },
  {
    id: "c1_05",
    chapter: 1,
    chapterTitle: "Entertainment (ความบันเทิง)",
    chapterShort: "Ch.1 Entertainment",
    english: "conjure up",
    thai: "นึกภาพขึ้นมา, ทำให้นึกถึง",
    type: "phr.v."
  },
  {
    id: "c1_06",
    chapter: 1,
    chapterTitle: "Entertainment (ความบันเทิง)",
    chapterShort: "Ch.1 Entertainment",
    english: "conversely",
    thai: "ในทางกลับกัน",
    type: "adv."
  },
  {
    id: "c1_07",
    chapter: 1,
    chapterTitle: "Entertainment (ความบันเทิง)",
    chapterShort: "Ch.1 Entertainment",
    english: "couch potatoes",
    thai: "คนที่เอาแต่นั่งดูทีวีอยู่บนโซฟา",
    type: "idiom"
  },
  {
    id: "c1_08",
    chapter: 1,
    chapterTitle: "Entertainment (ความบันเทิง)",
    chapterShort: "Ch.1 Entertainment",
    english: "good at",
    thai: "เก่งเรื่อง",
    type: "adj. phr."
  },
  {
    id: "c1_09",
    chapter: 1,
    chapterTitle: "Entertainment (ความบันเทิง)",
    chapterShort: "Ch.1 Entertainment",
    english: "influence",
    thai: "อิทธิพล",
    type: "n./v."
  },
  {
    id: "c1_10",
    chapter: 1,
    chapterTitle: "Entertainment (ความบันเทิง)",
    chapterShort: "Ch.1 Entertainment",
    english: "talents",
    thai: "พรสวรรค์",
    type: "n."
  },
  {
    id: "c1_11",
    chapter: 1,
    chapterTitle: "Entertainment (ความบันเทิง)",
    chapterShort: "Ch.1 Entertainment",
    english: "unbelievable",
    thai: "เหลือเชื่อ",
    type: "adj."
  },

  // บทที่ 2: World Cultures and Cultural Differences
  {
    id: "c2_01",
    chapter: 2,
    chapterTitle: "World Cultures and Cultural Differences (วัฒนธรรมโลกและความแตกต่างทางวัฒนธรรม)",
    chapterShort: "Ch.2 World Cultures",
    english: "ancestor",
    thai: "บรรพบุรุษ",
    type: "n."
  },
  {
    id: "c2_02",
    chapter: 2,
    chapterTitle: "World Cultures and Cultural Differences (วัฒนธรรมโลกและความแตกต่างทางวัฒนธรรม)",
    chapterShort: "Ch.2 World Cultures",
    english: "behave",
    thai: "ประพฤติ, วางตัว",
    type: "v."
  },
  {
    id: "c2_03",
    chapter: 2,
    chapterTitle: "World Cultures and Cultural Differences (วัฒนธรรมโลกและความแตกต่างทางวัฒนธรรม)",
    chapterShort: "Ch.2 World Cultures",
    english: "challenge",
    thai: "ความท้าทาย",
    type: "n./v."
  },
  {
    id: "c2_04",
    chapter: 2,
    chapterTitle: "World Cultures and Cultural Differences (วัฒนธรรมโลกและความแตกต่างทางวัฒนธรรม)",
    chapterShort: "Ch.2 World Cultures",
    english: "cutlery",
    thai: "ช้อนส้อมมีด",
    type: "n."
  },
  {
    id: "c2_05",
    chapter: 2,
    chapterTitle: "World Cultures and Cultural Differences (วัฒนธรรมโลกและความแตกต่างทางวัฒนธรรม)",
    chapterShort: "Ch.2 World Cultures",
    english: "disturb",
    thai: "รบกวน",
    type: "v."
  },
  {
    id: "c2_06",
    chapter: 2,
    chapterTitle: "World Cultures and Cultural Differences (วัฒนธรรมโลกและความแตกต่างทางวัฒนธรรม)",
    chapterShort: "Ch.2 World Cultures",
    english: "diversity",
    thai: "ความหลากหลาย",
    type: "n."
  },
  {
    id: "c2_07",
    chapter: 2,
    chapterTitle: "World Cultures and Cultural Differences (วัฒนธรรมโลกและความแตกต่างทางวัฒนธรรม)",
    chapterShort: "Ch.2 World Cultures",
    english: "explain",
    thai: "อธิบาย",
    type: "v."
  },
  {
    id: "c2_08",
    chapter: 2,
    chapterTitle: "World Cultures and Cultural Differences (วัฒนธรรมโลกและความแตกต่างทางวัฒนธรรม)",
    chapterShort: "Ch.2 World Cultures",
    english: "generosity",
    thai: "ความใจกว้าง, ความเอื้อเฟื้อ",
    type: "n."
  },
  {
    id: "c2_09",
    chapter: 2,
    chapterTitle: "World Cultures and Cultural Differences (วัฒนธรรมโลกและความแตกต่างทางวัฒนธรรม)",
    chapterShort: "Ch.2 World Cultures",
    english: "lively",
    thai: "มีชีวิตชีวา",
    type: "adj."
  },
  {
    id: "c2_10",
    chapter: 2,
    chapterTitle: "World Cultures and Cultural Differences (วัฒนธรรมโลกและความแตกต่างทางวัฒนธรรม)",
    chapterShort: "Ch.2 World Cultures",
    english: "manner",
    thai: "มารยาท, กิริยาท่าทาง",
    type: "n."
  },
  {
    id: "c2_11",
    chapter: 2,
    chapterTitle: "World Cultures and Cultural Differences (วัฒนธรรมโลกและความแตกต่างทางวัฒนธรรม)",
    chapterShort: "Ch.2 World Cultures",
    english: "mingle",
    thai: "ปะปน, เข้าสังคมพูดคุยกับผู้อื่น",
    type: "v."
  },
  {
    id: "c2_12",
    chapter: 2,
    chapterTitle: "World Cultures and Cultural Differences (วัฒนธรรมโลกและความแตกต่างทางวัฒนธรรม)",
    chapterShort: "Ch.2 World Cultures",
    english: "reason",
    thai: "เหตุผล",
    type: "n."
  },
  {
    id: "c2_13",
    chapter: 2,
    chapterTitle: "World Cultures and Cultural Differences (วัฒนธรรมโลกและความแตกต่างทางวัฒนธรรม)",
    chapterShort: "Ch.2 World Cultures",
    english: "tricky",
    thai: "ยุ่งยาก, ต้องระวัง",
    type: "adj."
  },

  // บทที่ 3: Fast Fashion
  {
    id: "c3_01",
    chapter: 3,
    chapterTitle: "Fast Fashion (แฟชั่นเร็ว)",
    chapterShort: "Ch.3 Fast Fashion",
    english: "acknowledge",
    thai: "ยอมรับ",
    type: "v."
  },
  {
    id: "c3_02",
    chapter: 3,
    chapterTitle: "Fast Fashion (แฟชั่นเร็ว)",
    chapterShort: "Ch.3 Fast Fashion",
    english: "alternative",
    thai: "ทางเลือก",
    type: "n./adj."
  },
  {
    id: "c3_03",
    chapter: 3,
    chapterTitle: "Fast Fashion (แฟชั่นเร็ว)",
    chapterShort: "Ch.3 Fast Fashion",
    english: "apparel",
    thai: "เครื่องแต่งกาย",
    type: "n."
  },
  {
    id: "c3_04",
    chapter: 3,
    chapterTitle: "Fast Fashion (แฟชั่นเร็ว)",
    chapterShort: "Ch.3 Fast Fashion",
    english: "capitalize",
    thai: "ฉวยโอกาส, ใช้ประโยชน์",
    type: "v."
  },
  {
    id: "c3_05",
    chapter: 3,
    chapterTitle: "Fast Fashion (แฟชั่นเร็ว)",
    chapterShort: "Ch.3 Fast Fashion",
    english: "carbon footprint",
    thai: "รอยเท้าคาร์บอน",
    type: "n."
  },
  {
    id: "c3_06",
    chapter: 3,
    chapterTitle: "Fast Fashion (แฟชั่นเร็ว)",
    chapterShort: "Ch.3 Fast Fashion",
    english: "consequences",
    thai: "ผลที่ตามมา",
    type: "n."
  },
  {
    id: "c3_07",
    chapter: 3,
    chapterTitle: "Fast Fashion (แฟชั่นเร็ว)",
    chapterShort: "Ch.3 Fast Fashion",
    english: "contamination",
    thai: "การปนเปื้อน",
    type: "n."
  },
  {
    id: "c3_08",
    chapter: 3,
    chapterTitle: "Fast Fashion (แฟชั่นเร็ว)",
    chapterShort: "Ch.3 Fast Fashion",
    english: "deforestation",
    thai: "การทำลายป่า",
    type: "n."
  },
  {
    id: "c3_09",
    chapter: 3,
    chapterTitle: "Fast Fashion (แฟชั่นเร็ว)",
    chapterShort: "Ch.3 Fast Fashion",
    english: "dramatic",
    thai: "รุนแรง, เห็นได้ชัดมาก",
    type: "adj."
  },
  {
    id: "c3_10",
    chapter: 3,
    chapterTitle: "Fast Fashion (แฟชั่นเร็ว)",
    chapterShort: "Ch.3 Fast Fashion",
    english: "eco-friendly",
    thai: "เป็นมิตรต่อสิ่งแวดล้อม",
    type: "adj."
  },
  {
    id: "c3_11",
    chapter: 3,
    chapterTitle: "Fast Fashion (แฟชั่นเร็ว)",
    chapterShort: "Ch.3 Fast Fashion",
    english: "ethical",
    thai: "ถูกต้องตามหลักจริยธรรม",
    type: "adj."
  },
  {
    id: "c3_12",
    chapter: 3,
    chapterTitle: "Fast Fashion (แฟชั่นเร็ว)",
    chapterShort: "Ch.3 Fast Fashion",
    english: "harmful",
    thai: "เป็นอันตราย",
    type: "adj."
  },
  {
    id: "c3_13",
    chapter: 3,
    chapterTitle: "Fast Fashion (แฟชั่นเร็ว)",
    chapterShort: "Ch.3 Fast Fashion",
    english: "impact",
    thai: "ผลกระทบ",
    type: "n./v."
  },
  {
    id: "c3_14",
    chapter: 3,
    chapterTitle: "Fast Fashion (แฟชั่นเร็ว)",
    chapterShort: "Ch.3 Fast Fashion",
    english: "implement",
    thai: "นำไปปฏิบัติ",
    type: "v."
  },
  {
    id: "c3_15",
    chapter: 3,
    chapterTitle: "Fast Fashion (แฟชั่นเร็ว)",
    chapterShort: "Ch.3 Fast Fashion",
    english: "improper",
    thai: "ไม่เหมาะสม, ไม่ถูกต้อง",
    type: "adj."
  },
  {
    id: "c3_16",
    chapter: 3,
    chapterTitle: "Fast Fashion (แฟชั่นเร็ว)",
    chapterShort: "Ch.3 Fast Fashion",
    english: "phenomenon",
    thai: "ปรากฏการณ์",
    type: "n."
  },
  {
    id: "c3_17",
    chapter: 3,
    chapterTitle: "Fast Fashion (แฟชั่นเร็ว)",
    chapterShort: "Ch.3 Fast Fashion",
    english: "pollutants",
    thai: "สารมลพิษ",
    type: "n."
  },
  {
    id: "c3_18",
    chapter: 3,
    chapterTitle: "Fast Fashion (แฟชั่นเร็ว)",
    chapterShort: "Ch.3 Fast Fashion",
    english: "prioritize",
    thai: "จัดลำดับความสำคัญ",
    type: "v."
  },
  {
    id: "c3_19",
    chapter: 3,
    chapterTitle: "Fast Fashion (แฟชั่นเร็ว)",
    chapterShort: "Ch.3 Fast Fashion",
    english: "repurpose",
    thai: "นำไปใช้ใหม่ในรูปแบบอื่น",
    type: "v."
  },
  {
    id: "c3_20",
    chapter: 3,
    chapterTitle: "Fast Fashion (แฟชั่นเร็ว)",
    chapterShort: "Ch.3 Fast Fashion",
    english: "reutilize",
    thai: "นำกลับมาใช้ซ้ำ",
    type: "v."
  },

  // บทที่ 4: Sustainable Living
  {
    id: "c4_01",
    chapter: 4,
    chapterTitle: "Sustainable Living (การใช้ชีวิตอย่างยั่งยืน)",
    chapterShort: "Ch.4 Sustainable Living",
    english: "sustainable",
    thai: "ยั่งยืน",
    type: "adj."
  },
  {
    id: "c4_02",
    chapter: 4,
    chapterTitle: "Sustainable Living (การใช้ชีวิตอย่างยั่งยืน)",
    chapterShort: "Ch.4 Sustainable Living",
    english: "sustainability",
    thai: "ความยั่งยืน",
    type: "n."
  },
  {
    id: "c4_03",
    chapter: 4,
    chapterTitle: "Sustainable Living (การใช้ชีวิตอย่างยั่งยืน)",
    chapterShort: "Ch.4 Sustainable Living",
    english: "renewable",
    thai: "ทดแทนได้, หมุนเวียนได้",
    type: "adj."
  },
  {
    id: "c4_04",
    chapter: 4,
    chapterTitle: "Sustainable Living (การใช้ชีวิตอย่างยั่งยืน)",
    chapterShort: "Ch.4 Sustainable Living",
    english: "global",
    thai: "ทั่วโลก",
    type: "adj."
  },
  {
    id: "c4_05",
    chapter: 4,
    chapterTitle: "Sustainable Living (การใช้ชีวิตอย่างยั่งยืน)",
    chapterShort: "Ch.4 Sustainable Living",
    english: "endangered",
    thai: "ใกล้สูญพันธุ์",
    type: "adj."
  },
  {
    id: "c4_06",
    chapter: 4,
    chapterTitle: "Sustainable Living (การใช้ชีวิตอย่างยั่งยืน)",
    chapterShort: "Ch.4 Sustainable Living",
    english: "domestic",
    thai: "ภายในประเทศ, ในครัวเรือน",
    type: "adj."
  },
  {
    id: "c4_07",
    chapter: 4,
    chapterTitle: "Sustainable Living (การใช้ชีวิตอย่างยั่งยืน)",
    chapterShort: "Ch.4 Sustainable Living",
    english: "environmentally",
    thai: "อย่างเกี่ยวกับสิ่งแวดล้อม",
    type: "adv."
  },
  {
    id: "c4_08",
    chapter: 4,
    chapterTitle: "Sustainable Living (การใช้ชีวิตอย่างยั่งยืน)",
    chapterShort: "Ch.4 Sustainable Living",
    english: "waste",
    thai: "ขยะ, ของเสีย",
    type: "n."
  },
  {
    id: "c4_09",
    chapter: 4,
    chapterTitle: "Sustainable Living (การใช้ชีวิตอย่างยั่งยืน)",
    chapterShort: "Ch.4 Sustainable Living",
    english: "resources",
    thai: "ทรัพยากร",
    type: "n."
  },
  {
    id: "c4_10",
    chapter: 4,
    chapterTitle: "Sustainable Living (การใช้ชีวิตอย่างยั่งยืน)",
    chapterShort: "Ch.4 Sustainable Living",
    english: "sources",
    thai: "แหล่งที่มา",
    type: "n."
  },
  {
    id: "c4_11",
    chapter: 4,
    chapterTitle: "Sustainable Living (การใช้ชีวิตอย่างยั่งยืน)",
    chapterShort: "Ch.4 Sustainable Living",
    english: "disposal",
    thai: "การกำจัด",
    type: "n."
  },
  {
    id: "c4_12",
    chapter: 4,
    chapterTitle: "Sustainable Living (การใช้ชีวิตอย่างยั่งยืน)",
    chapterShort: "Ch.4 Sustainable Living",
    english: "shortage",
    thai: "การขาดแคลน",
    type: "n."
  },
  {
    id: "c4_13",
    chapter: 4,
    chapterTitle: "Sustainable Living (การใช้ชีวิตอย่างยั่งยืน)",
    chapterShort: "Ch.4 Sustainable Living",
    english: "extinct",
    thai: "สูญพันธุ์",
    type: "adj."
  },
  {
    id: "c4_14",
    chapter: 4,
    chapterTitle: "Sustainable Living (การใช้ชีวิตอย่างยั่งยืน)",
    chapterShort: "Ch.4 Sustainable Living",
    english: "threat",
    thai: "ภัยคุกคาม",
    type: "n."
  },
  {
    id: "c4_15",
    chapter: 4,
    chapterTitle: "Sustainable Living (การใช้ชีวิตอย่างยั่งยืน)",
    chapterShort: "Ch.4 Sustainable Living",
    english: "steadily",
    thai: "อย่างต่อเนื่อง, สม่ำเสมอ",
    type: "adv."
  },
  {
    id: "c4_16",
    chapter: 4,
    chapterTitle: "Sustainable Living (การใช้ชีวิตอย่างยั่งยืน)",
    chapterShort: "Ch.4 Sustainable Living",
    english: "massive",
    thai: "มหาศาล, ขนาดใหญ่มาก",
    type: "adj."
  },

  // บทที่ 5: Healthy Lifestyle
  {
    id: "c5_01",
    chapter: 5,
    chapterTitle: "Healthy Lifestyle (วิถีชีวิตเพื่อสุขภาพ)",
    chapterShort: "Ch.5 Healthy Lifestyle",
    english: "absorb",
    thai: "ดูดซึม",
    type: "v."
  },
  {
    id: "c5_02",
    chapter: 5,
    chapterTitle: "Healthy Lifestyle (วิถีชีวิตเพื่อสุขภาพ)",
    chapterShort: "Ch.5 Healthy Lifestyle",
    english: "adolescent",
    thai: "วัยรุ่น",
    type: "n./adj."
  },
  {
    id: "c5_03",
    chapter: 5,
    chapterTitle: "Healthy Lifestyle (วิถีชีวิตเพื่อสุขภาพ)",
    chapterShort: "Ch.5 Healthy Lifestyle",
    english: "boost",
    thai: "กระตุ้น, เพิ่มพลัง",
    type: "v."
  },
  {
    id: "c5_04",
    chapter: 5,
    chapterTitle: "Healthy Lifestyle (วิถีชีวิตเพื่อสุขภาพ)",
    chapterShort: "Ch.5 Healthy Lifestyle",
    english: "chronic",
    thai: "เรื้อรัง",
    type: "adj."
  },
  {
    id: "c5_05",
    chapter: 5,
    chapterTitle: "Healthy Lifestyle (วิถีชีวิตเพื่อสุขภาพ)",
    chapterShort: "Ch.5 Healthy Lifestyle",
    english: "consume",
    thai: "บริโภค",
    type: "v."
  },
  {
    id: "c5_06",
    chapter: 5,
    chapterTitle: "Healthy Lifestyle (วิถีชีวิตเพื่อสุขภาพ)",
    chapterShort: "Ch.5 Healthy Lifestyle",
    english: "cope with something or someone",
    thai: "รับมือกับสิ่งหรือบุคคล",
    type: "phr.v."
  },
  {
    id: "c5_07",
    chapter: 5,
    chapterTitle: "Healthy Lifestyle (วิถีชีวิตเพื่อสุขภาพ)",
    chapterShort: "Ch.5 Healthy Lifestyle",
    english: "crave",
    thai: "อยากได้มาก, โหยหา",
    type: "v."
  },
  {
    id: "c5_08",
    chapter: 5,
    chapterTitle: "Healthy Lifestyle (วิถีชีวิตเพื่อสุขภาพ)",
    chapterShort: "Ch.5 Healthy Lifestyle",
    english: "diet",
    thai: "อาหารที่กินเป็นประจำ, การควบคุมอาหาร",
    type: "n."
  },
  {
    id: "c5_09",
    chapter: 5,
    chapterTitle: "Healthy Lifestyle (วิถีชีวิตเพื่อสุขภาพ)",
    chapterShort: "Ch.5 Healthy Lifestyle",
    english: "digestive",
    thai: "เกี่ยวกับการย่อยอาหาร",
    type: "adj."
  },
  {
    id: "c5_10",
    chapter: 5,
    chapterTitle: "Healthy Lifestyle (วิถีชีวิตเพื่อสุขภาพ)",
    chapterShort: "Ch.5 Healthy Lifestyle",
    english: "disrupt",
    thai: "รบกวน, ทำให้ชะงัก",
    type: "v."
  },
  {
    id: "c5_11",
    chapter: 5,
    chapterTitle: "Healthy Lifestyle (วิถีชีวิตเพื่อสุขภาพ)",
    chapterShort: "Ch.5 Healthy Lifestyle",
    english: "excess",
    thai: "ส่วนเกิน, มากเกินไป",
    type: "n./adj."
  },
  {
    id: "c5_12",
    chapter: 5,
    chapterTitle: "Healthy Lifestyle (วิถีชีวิตเพื่อสุขภาพ)",
    chapterShort: "Ch.5 Healthy Lifestyle",
    english: "fatigue",
    thai: "ความเหนื่อยล้า",
    type: "n."
  },
  {
    id: "c5_13",
    chapter: 5,
    chapterTitle: "Healthy Lifestyle (วิถีชีวิตเพื่อสุขภาพ)",
    chapterShort: "Ch.5 Healthy Lifestyle",
    english: "immune",
    thai: "มีภูมิคุ้มกัน",
    type: "adj."
  },
  {
    id: "c5_14",
    chapter: 5,
    chapterTitle: "Healthy Lifestyle (วิถีชีวิตเพื่อสุขภาพ)",
    chapterShort: "Ch.5 Healthy Lifestyle",
    english: "insomnia",
    thai: "อาการนอนไม่หลับ",
    type: "n."
  },
  {
    id: "c5_15",
    chapter: 5,
    chapterTitle: "Healthy Lifestyle (วิถีชีวิตเพื่อสุขภาพ)",
    chapterShort: "Ch.5 Healthy Lifestyle",
    english: "instigate",
    thai: "ยุยง, ก่อให้เกิด",
    type: "v."
  },
  {
    id: "c5_16",
    chapter: 5,
    chapterTitle: "Healthy Lifestyle (วิถีชีวิตเพื่อสุขภาพ)",
    chapterShort: "Ch.5 Healthy Lifestyle",
    english: "metabolic",
    thai: "เกี่ยวกับการเผาผลาญ",
    type: "adj."
  },
  {
    id: "c5_17",
    chapter: 5,
    chapterTitle: "Healthy Lifestyle (วิถีชีวิตเพื่อสุขภาพ)",
    chapterShort: "Ch.5 Healthy Lifestyle",
    english: "nutrient",
    thai: "สารอาหาร",
    type: "n."
  },
  {
    id: "c5_18",
    chapter: 5,
    chapterTitle: "Healthy Lifestyle (วิถีชีวิตเพื่อสุขภาพ)",
    chapterShort: "Ch.5 Healthy Lifestyle",
    english: "relieve",
    thai: "บรรเทา",
    type: "v."
  },
  {
    id: "c5_19",
    chapter: 5,
    chapterTitle: "Healthy Lifestyle (วิถีชีวิตเพื่อสุขภาพ)",
    chapterShort: "Ch.5 Healthy Lifestyle",
    english: "stimulant",
    thai: "สารกระตุ้น",
    type: "n."
  },
  {
    id: "c5_20",
    chapter: 5,
    chapterTitle: "Healthy Lifestyle (วิถีชีวิตเพื่อสุขภาพ)",
    chapterShort: "Ch.5 Healthy Lifestyle",
    english: "supplement",
    thai: "อาหารเสริม",
    type: "n."
  },
  {
    id: "c5_21",
    chapter: 5,
    chapterTitle: "Healthy Lifestyle (วิถีชีวิตเพื่อสุขภาพ)",
    chapterShort: "Ch.5 Healthy Lifestyle",
    english: "supply",
    thai: "จัดหาให้, จัดส่ง",
    type: "v."
  },
  {
    id: "c5_22",
    chapter: 5,
    chapterTitle: "Healthy Lifestyle (วิถีชีวิตเพื่อสุขภาพ)",
    chapterShort: "Ch.5 Healthy Lifestyle",
    english: "trigger",
    thai: "ตัวกระตุ้น, สิ่งที่ทำให้เกิดอาการ",
    type: "n."
  },

  // บทที่ 6: Sports
  {
    id: "c6_01",
    chapter: 6,
    chapterTitle: "Sports (กีฬา)",
    chapterShort: "Ch.6 Sports",
    english: "diabetes",
    thai: "โรคเบาหวาน",
    type: "n."
  },
  {
    id: "c6_02",
    chapter: 6,
    chapterTitle: "Sports (กีฬา)",
    chapterShort: "Ch.6 Sports",
    english: "ditch",
    thai: "คู, ร่องน้ำ",
    type: "n."
  },
  {
    id: "c6_03",
    chapter: 6,
    chapterTitle: "Sports (กีฬา)",
    chapterShort: "Ch.6 Sports",
    english: "expend",
    thai: "ใช้ไป, สิ้นเปลือง (เช่น พลังงาน)",
    type: "v."
  },
  {
    id: "c6_04",
    chapter: 6,
    chapterTitle: "Sports (กีฬา)",
    chapterShort: "Ch.6 Sports",
    english: "management",
    thai: "การจัดการ",
    type: "n."
  },
  {
    id: "c6_05",
    chapter: 6,
    chapterTitle: "Sports (กีฬา)",
    chapterShort: "Ch.6 Sports",
    english: "option",
    thai: "ตัวเลือก",
    type: "n."
  },
  {
    id: "c6_06",
    chapter: 6,
    chapterTitle: "Sports (กีฬา)",
    chapterShort: "Ch.6 Sports",
    english: "posture",
    thai: "ท่าทาง, การทรงตัว",
    type: "n."
  },
  {
    id: "c6_07",
    chapter: 6,
    chapterTitle: "Sports (กีฬา)",
    chapterShort: "Ch.6 Sports",
    english: "productive",
    thai: "ได้ผลดี, มีประสิทธิภาพ",
    type: "adj."
  },
  {
    id: "c6_08",
    chapter: 6,
    chapterTitle: "Sports (กีฬา)",
    chapterShort: "Ch.6 Sports",
    english: "radiant",
    thai: "เปล่งประกาย, สดใส",
    type: "adj."
  },
  {
    id: "c6_09",
    chapter: 6,
    chapterTitle: "Sports (กีฬา)",
    chapterShort: "Ch.6 Sports",
    english: "refreshing",
    thai: "สดชื่น",
    type: "adj."
  },
  {
    id: "c6_10",
    chapter: 6,
    chapterTitle: "Sports (กีฬา)",
    chapterShort: "Ch.6 Sports",
    english: "tough",
    thai: "แกร่ง, ยากลำบาก",
    type: "adj."
  },
  {
    id: "c6_11",
    chapter: 6,
    chapterTitle: "Sports (กีฬา)",
    chapterShort: "Ch.6 Sports",
    english: "trigger",
    thai: "กระตุ้น, ทำให้เกิดขึ้น",
    type: "v."
  }
];

const CHAPTER_INFO = [
  { id: 1, name: "Entertainment", thai: "ความบันเทิง", count: 11 },
  { id: 2, name: "World Cultures", thai: "วัฒนธรรมโลกและความแตกต่าง", count: 13 },
  { id: 3, name: "Fast Fashion", thai: "แฟชั่นเร็ว", count: 20 },
  { id: 4, name: "Sustainable Living", thai: "การใช้ชีวิตอย่างยั่งยืน", count: 16 },
  { id: 5, name: "Healthy Lifestyle", thai: "วิถีชีวิตเพื่อสุขภาพ", count: 22 },
  { id: 6, name: "Sports", thai: "กีฬา", count: 11 }
];
