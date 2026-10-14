// Vocabulary database with 6 chapters and full English definitions
const VOCABULARY_DATA = [
  // บทที่ 1: Entertainment
  {
    id: "c1_01",
    chapter: 1,
    chapterTitle: "Entertainment (ความบันเทิง)",
    chapterShort: "Ch.1 Entertainment",
    english: "actress",
    thai: "นักแสดงหญิง",
    type: "n.",
    definition: "a woman who acts in plays, movies, or television shows"
  },
  {
    id: "c1_02",
    chapter: 1,
    chapterTitle: "Entertainment (ความบันเทิง)",
    chapterShort: "Ch.1 Entertainment",
    english: "ambition",
    thai: "ความทะเยอทะยาน",
    type: "n.",
    definition: "a strong desire to achieve something, such as success, power, or fame"
  },
  {
    id: "c1_03",
    chapter: 1,
    chapterTitle: "Entertainment (ความบันเทิง)",
    chapterShort: "Ch.1 Entertainment",
    english: "attention spans",
    thai: "ช่วงเวลาที่จดจ่อได้",
    type: "n.",
    definition: "the length of time a person can focus on one thing before losing interest"
  },
  {
    id: "c1_04",
    chapter: 1,
    chapterTitle: "Entertainment (ความบันเทิง)",
    chapterShort: "Ch.1 Entertainment",
    english: "binge-watching",
    thai: "การดูรวดเดียวหลายตอน",
    type: "v.",
    definition: "watching many episodes of a TV series one after another in a single session"
  },
  {
    id: "c1_05",
    chapter: 1,
    chapterTitle: "Entertainment (ความบันเทิง)",
    chapterShort: "Ch.1 Entertainment",
    english: "conjure up",
    thai: "นึกภาพขึ้นมา",
    type: "v.",
    definition: "to make an image, idea, or memory appear in your mind"
  },
  {
    id: "c1_06",
    chapter: 1,
    chapterTitle: "Entertainment (ความบันเทิง)",
    chapterShort: "Ch.1 Entertainment",
    english: "conversely",
    thai: "ในทางกลับกัน",
    type: "adv.",
    definition: "in the opposite way; used to introduce an idea that contrasts with the previous one"
  },
  {
    id: "c1_07",
    chapter: 1,
    chapterTitle: "Entertainment (ความบันเทิง)",
    chapterShort: "Ch.1 Entertainment",
    english: "couch potatoes",
    thai: "คนเอาแต่นั่งดูทีวี",
    type: "n.",
    definition: "people who spend a lot of time sitting and watching TV and do little physical activity"
  },
  {
    id: "c1_08",
    chapter: 1,
    chapterTitle: "Entertainment (ความบันเทิง)",
    chapterShort: "Ch.1 Entertainment",
    english: "good at",
    thai: "เก่งเรื่อง",
    type: "adj.",
    definition: "having the skill or ability to do something well"
  },
  {
    id: "c1_09",
    chapter: 1,
    chapterTitle: "Entertainment (ความบันเทิง)",
    chapterShort: "Ch.1 Entertainment",
    english: "influence",
    thai: "อิทธิพล",
    type: "n.",
    definition: "the power to affect how someone thinks, behaves, or develops"
  },
  {
    id: "c1_10",
    chapter: 1,
    chapterTitle: "Entertainment (ความบันเทิง)",
    chapterShort: "Ch.1 Entertainment",
    english: "talents",
    thai: "พรสวรรค์",
    type: "n.",
    definition: "natural abilities or skills that make someone good at doing something"
  },
  {
    id: "c1_11",
    chapter: 1,
    chapterTitle: "Entertainment (ความบันเทิง)",
    chapterShort: "Ch.1 Entertainment",
    english: "unbelievable",
    thai: "เหลือเชื่อ",
    type: "adj.",
    definition: "very difficult to believe; extremely surprising or impressive"
  },

  // บทที่ 2: World Cultures and Cultural Differences
  {
    id: "c2_01",
    chapter: 2,
    chapterTitle: "World Cultures and Cultural Differences (วัฒนธรรมโลกและความแตกต่างทางวัฒนธรรม)",
    chapterShort: "Ch.2 World Cultures",
    english: "ancestor",
    thai: "บรรพบุรุษ",
    type: "n.",
    definition: "a person in your family who lived a long time ago"
  },
  {
    id: "c2_02",
    chapter: 2,
    chapterTitle: "World Cultures and Cultural Differences (วัฒนธรรมโลกและความแตกต่างทางวัฒนธรรม)",
    chapterShort: "Ch.2 World Cultures",
    english: "behave",
    thai: "ประพฤติ",
    type: "v.",
    definition: "to act in a particular way, especially in front of other people"
  },
  {
    id: "c2_03",
    chapter: 2,
    chapterTitle: "World Cultures and Cultural Differences (วัฒนธรรมโลกและความแตกต่างทางวัฒนธรรม)",
    chapterShort: "Ch.2 World Cultures",
    english: "challenge",
    thai: "ความท้าทาย",
    type: "n.",
    definition: "something difficult that tests your ability or determination"
  },
  {
    id: "c2_04",
    chapter: 2,
    chapterTitle: "World Cultures and Cultural Differences (วัฒนธรรมโลกและความแตกต่างทางวัฒนธรรม)",
    chapterShort: "Ch.2 World Cultures",
    english: "cutlery",
    thai: "ช้อนส้อมมีด",
    type: "n.",
    definition: "knives, forks, and spoons used for eating food"
  },
  {
    id: "c2_05",
    chapter: 2,
    chapterTitle: "World Cultures and Cultural Differences (วัฒนธรรมโลกและความแตกต่างทางวัฒนธรรม)",
    chapterShort: "Ch.2 World Cultures",
    english: "disturb",
    thai: "รบกวน",
    type: "v.",
    definition: "to interrupt someone or something and stop them from being calm or continuing what they are doing"
  },
  {
    id: "c2_06",
    chapter: 2,
    chapterTitle: "World Cultures and Cultural Differences (วัฒนธรรมโลกและความแตกต่างทางวัฒนธรรม)",
    chapterShort: "Ch.2 World Cultures",
    english: "diversity",
    thai: "ความหลากหลาย",
    type: "n.",
    definition: "a range of many different people, things, or ideas"
  },
  {
    id: "c2_07",
    chapter: 2,
    chapterTitle: "World Cultures and Cultural Differences (วัฒนธรรมโลกและความแตกต่างทางวัฒนธรรม)",
    chapterShort: "Ch.2 World Cultures",
    english: "explain",
    thai: "อธิบาย",
    type: "v.",
    definition: "to make something clear by giving details or reasons"
  },
  {
    id: "c2_08",
    chapter: 2,
    chapterTitle: "World Cultures and Cultural Differences (วัฒนธรรมโลกและความแตกต่างทางวัฒนธรรม)",
    chapterShort: "Ch.2 World Cultures",
    english: "generosity",
    thai: "ความใจกว้าง",
    type: "n.",
    definition: "the quality of being willing to give money, time, or help freely"
  },
  {
    id: "c2_09",
    chapter: 2,
    chapterTitle: "World Cultures and Cultural Differences (วัฒนธรรมโลกและความแตกต่างทางวัฒนธรรม)",
    chapterShort: "Ch.2 World Cultures",
    english: "lively",
    thai: "มีชีวิตชีวา",
    type: "adj.",
    definition: "full of energy, activity, and excitement"
  },
  {
    id: "c2_10",
    chapter: 2,
    chapterTitle: "World Cultures and Cultural Differences (วัฒนธรรมโลกและความแตกต่างทางวัฒนธรรม)",
    chapterShort: "Ch.2 World Cultures",
    english: "manner",
    thai: "มารยาท, กิริยา",
    type: "n.",
    definition: "the way in which something is done or the way a person behaves"
  },
  {
    id: "c2_11",
    chapter: 2,
    chapterTitle: "World Cultures and Cultural Differences (วัฒนธรรมโลกและความแตกต่างทางวัฒนธรรม)",
    chapterShort: "Ch.2 World Cultures",
    english: "mingle",
    thai: "เข้าสังคมพูดคุย",
    type: "v.",
    definition: "to move around and talk with many different people at an event"
  },
  {
    id: "c2_12",
    chapter: 2,
    chapterTitle: "World Cultures and Cultural Differences (วัฒนธรรมโลกและความแตกต่างทางวัฒนธรรม)",
    chapterShort: "Ch.2 World Cultures",
    english: "reason",
    thai: "เหตุผล",
    type: "n.",
    definition: "a cause or explanation for why something happens or is done"
  },
  {
    id: "c2_13",
    chapter: 2,
    chapterTitle: "World Cultures and Cultural Differences (วัฒนธรรมโลกและความแตกต่างทางวัฒนธรรม)",
    chapterShort: "Ch.2 World Cultures",
    english: "tricky",
    thai: "ยุ่งยาก",
    type: "adj.",
    definition: "difficult to deal with and needing careful attention"
  },

  // บทที่ 3: Fast Fashion
  {
    id: "c3_01",
    chapter: 3,
    chapterTitle: "Fast Fashion (แฟชั่นเร็ว)",
    chapterShort: "Ch.3 Fast Fashion",
    english: "acknowledge",
    thai: "ยอมรับ",
    type: "v.",
    definition: "to accept or admit that something is true or exists"
  },
  {
    id: "c3_02",
    chapter: 3,
    chapterTitle: "Fast Fashion (แฟชั่นเร็ว)",
    chapterShort: "Ch.3 Fast Fashion",
    english: "alternative",
    thai: "ทางเลือก",
    type: "n.",
    definition: "something you can choose instead of another thing"
  },
  {
    id: "c3_03",
    chapter: 3,
    chapterTitle: "Fast Fashion (แฟชั่นเร็ว)",
    chapterShort: "Ch.3 Fast Fashion",
    english: "apparel",
    thai: "เครื่องแต่งกาย",
    type: "n.",
    definition: "clothing, especially clothes that are sold in stores"
  },
  {
    id: "c3_04",
    chapter: 3,
    chapterTitle: "Fast Fashion (แฟชั่นเร็ว)",
    chapterShort: "Ch.3 Fast Fashion",
    english: "capitalize",
    thai: "ฉวยโอกาส",
    type: "v.",
    definition: "to take advantage of a situation in order to gain something"
  },
  {
    id: "c3_05",
    chapter: 3,
    chapterTitle: "Fast Fashion (แฟชั่นเร็ว)",
    chapterShort: "Ch.3 Fast Fashion",
    english: "carbon footprint",
    thai: "รอยเท้าคาร์บอน",
    type: "n.",
    definition: "the amount of carbon dioxide released into the air because of the activities of a person, group, or product"
  },
  {
    id: "c3_06",
    chapter: 3,
    chapterTitle: "Fast Fashion (แฟชั่นเร็ว)",
    chapterShort: "Ch.3 Fast Fashion",
    english: "consequences",
    thai: "ผลที่ตามมา",
    type: "n.",
    definition: "the results or effects of an action or situation, often negative ones"
  },
  {
    id: "c3_07",
    chapter: 3,
    chapterTitle: "Fast Fashion (แฟชั่นเร็ว)",
    chapterShort: "Ch.3 Fast Fashion",
    english: "contamination",
    thai: "การปนเปื้อน",
    type: "n.",
    definition: "the process of making something dirty or harmful by adding a poisonous or unwanted substance"
  },
  {
    id: "c3_08",
    chapter: 3,
    chapterTitle: "Fast Fashion (แฟชั่นเร็ว)",
    chapterShort: "Ch.3 Fast Fashion",
    english: "deforestation",
    thai: "การทำลายป่า",
    type: "n.",
    definition: "the cutting down or removal of trees from a large area"
  },
  {
    id: "c3_09",
    chapter: 3,
    chapterTitle: "Fast Fashion (แฟชั่นเร็ว)",
    chapterShort: "Ch.3 Fast Fashion",
    english: "dramatic",
    thai: "รุนแรง, เห็นได้ชัดมาก",
    type: "adj.",
    definition: "sudden, very noticeable, or surprising"
  },
  {
    id: "c3_10",
    chapter: 3,
    chapterTitle: "Fast Fashion (แฟชั่นเร็ว)",
    chapterShort: "Ch.3 Fast Fashion",
    english: "eco-friendly",
    thai: "เป็นมิตรต่อสิ่งแวดล้อม",
    type: "adj.",
    definition: "not harmful to the environment"
  },
  {
    id: "c3_11",
    chapter: 3,
    chapterTitle: "Fast Fashion (แฟชั่นเร็ว)",
    chapterShort: "Ch.3 Fast Fashion",
    english: "ethical",
    thai: "ถูกต้องตามหลักจริยธรรม",
    type: "adj.",
    definition: "relating to what is morally right and wrong"
  },
  {
    id: "c3_12",
    chapter: 3,
    chapterTitle: "Fast Fashion (แฟชั่นเร็ว)",
    chapterShort: "Ch.3 Fast Fashion",
    english: "harmful",
    thai: "เป็นอันตราย",
    type: "adj.",
    definition: "causing damage or injury to someone or something"
  },
  {
    id: "c3_13",
    chapter: 3,
    chapterTitle: "Fast Fashion (แฟชั่นเร็ว)",
    chapterShort: "Ch.3 Fast Fashion",
    english: "impact",
    thai: "ผลกระทบ",
    type: "n.",
    definition: "a strong effect that something has on a person, thing, or situation"
  },
  {
    id: "c3_14",
    chapter: 3,
    chapterTitle: "Fast Fashion (แฟชั่นเร็ว)",
    chapterShort: "Ch.3 Fast Fashion",
    english: "implement",
    thai: "นำไปปฏิบัติ",
    type: "v.",
    definition: "to put a plan, idea, or system into action"
  },
  {
    id: "c3_15",
    chapter: 3,
    chapterTitle: "Fast Fashion (แฟชั่นเร็ว)",
    chapterShort: "Ch.3 Fast Fashion",
    english: "improper",
    thai: "ไม่เหมาะสม",
    type: "adj.",
    definition: "not correct, suitable, or acceptable"
  },
  {
    id: "c3_16",
    chapter: 3,
    chapterTitle: "Fast Fashion (แฟชั่นเร็ว)",
    chapterShort: "Ch.3 Fast Fashion",
    english: "phenomenon",
    thai: "ปรากฏการณ์",
    type: "n.",
    definition: "something that exists or happens and can be observed, especially something unusual or important"
  },
  {
    id: "c3_17",
    chapter: 3,
    chapterTitle: "Fast Fashion (แฟชั่นเร็ว)",
    chapterShort: "Ch.3 Fast Fashion",
    english: "pollutants",
    thai: "สารมลพิษ",
    type: "n.",
    definition: "substances that make air, water, or soil dirty and harmful"
  },
  {
    id: "c3_18",
    chapter: 3,
    chapterTitle: "Fast Fashion (แฟชั่นเร็ว)",
    chapterShort: "Ch.3 Fast Fashion",
    english: "prioritize",
    thai: "จัดลำดับความสำคัญ",
    type: "v.",
    definition: "to treat something as more important than other things and deal with it first"
  },
  {
    id: "c3_19",
    chapter: 3,
    chapterTitle: "Fast Fashion (แฟชั่นเร็ว)",
    chapterShort: "Ch.3 Fast Fashion",
    english: "repurpose",
    thai: "นำไปใช้ใหม่ในรูปแบบอื่น",
    type: "v.",
    definition: "to use something for a different purpose from the one it was made for"
  },
  {
    id: "c3_20",
    chapter: 3,
    chapterTitle: "Fast Fashion (แฟชั่นเร็ว)",
    chapterShort: "Ch.3 Fast Fashion",
    english: "reutilize",
    thai: "นำกลับมาใช้ซ้ำ",
    type: "v.",
    definition: "to use something again"
  },

  // บทที่ 4: Sustainable Living
  {
    id: "c4_01",
    chapter: 4,
    chapterTitle: "Sustainable Living (การใช้ชีวิตอย่างยั่งยืน)",
    chapterShort: "Ch.4 Sustainable Living",
    english: "sustainable",
    thai: "ยั่งยืน",
    type: "adj.",
    definition: "able to continue over a long time without harming the environment or using up resources"
  },
  {
    id: "c4_02",
    chapter: 4,
    chapterTitle: "Sustainable Living (การใช้ชีวิตอย่างยั่งยืน)",
    chapterShort: "Ch.4 Sustainable Living",
    english: "sustainability",
    thai: "ความยั่งยืน",
    type: "n.",
    definition: "the ability to continue something over a long time without damaging the environment or running out of resources"
  },
  {
    id: "c4_03",
    chapter: 4,
    chapterTitle: "Sustainable Living (การใช้ชีวิตอย่างยั่งยืน)",
    chapterShort: "Ch.4 Sustainable Living",
    english: "renewable",
    thai: "ทดแทนได้",
    type: "adj.",
    definition: "able to be replaced naturally, so it will not run out"
  },
  {
    id: "c4_04",
    chapter: 4,
    chapterTitle: "Sustainable Living (การใช้ชีวิตอย่างยั่งยืน)",
    chapterShort: "Ch.4 Sustainable Living",
    english: "global",
    thai: "ทั่วโลก",
    type: "adj.",
    definition: "relating to the whole world"
  },
  {
    id: "c4_05",
    chapter: 4,
    chapterTitle: "Sustainable Living (การใช้ชีวิตอย่างยั่งยืน)",
    chapterShort: "Ch.4 Sustainable Living",
    english: "endangered",
    thai: "ใกล้สูญพันธุ์",
    type: "adj.",
    definition: "at risk of dying out completely"
  },
  {
    id: "c4_06",
    chapter: 4,
    chapterTitle: "Sustainable Living (การใช้ชีวิตอย่างยั่งยืน)",
    chapterShort: "Ch.4 Sustainable Living",
    english: "domestic",
    thai: "ภายในประเทศ, ในครัวเรือน",
    type: "adj.",
    definition: "relating to a person’s own country or to the home and family"
  },
  {
    id: "c4_07",
    chapter: 4,
    chapterTitle: "Sustainable Living (การใช้ชีวิตอย่างยั่งยืน)",
    chapterShort: "Ch.4 Sustainable Living",
    english: "environmentally",
    thai: "ในด้านสิ่งแวดล้อม",
    type: "adv.",
    definition: "in a way that relates to the natural world and how it is affected"
  },
  {
    id: "c4_08",
    chapter: 4,
    chapterTitle: "Sustainable Living (การใช้ชีวิตอย่างยั่งยืน)",
    chapterShort: "Ch.4 Sustainable Living",
    english: "waste",
    thai: "ขยะ, ของเสีย",
    type: "n.",
    definition: "unwanted material that is thrown away"
  },
  {
    id: "c4_09",
    chapter: 4,
    chapterTitle: "Sustainable Living (การใช้ชีวิตอย่างยั่งยืน)",
    chapterShort: "Ch.4 Sustainable Living",
    english: "resources",
    thai: "ทรัพยากร",
    type: "n.",
    definition: "useful things such as water, land, energy, or money that people can use"
  },
  {
    id: "c4_10",
    chapter: 4,
    chapterTitle: "Sustainable Living (การใช้ชีวิตอย่างยั่งยืน)",
    chapterShort: "Ch.4 Sustainable Living",
    english: "sources",
    thai: "แหล่งที่มา",
    type: "n.",
    definition: "places, people, or things from which something comes or is obtained"
  },
  {
    id: "c4_11",
    chapter: 4,
    chapterTitle: "Sustainable Living (การใช้ชีวิตอย่างยั่งยืน)",
    chapterShort: "Ch.4 Sustainable Living",
    english: "disposal",
    thai: "การกำจัด",
    type: "n.",
    definition: "the act of getting rid of something you do not want"
  },
  {
    id: "c4_12",
    chapter: 4,
    chapterTitle: "Sustainable Living (การใช้ชีวิตอย่างยั่งยืน)",
    chapterShort: "Ch.4 Sustainable Living",
    english: "shortage",
    thai: "การขาดแคลน",
    type: "n.",
    definition: "a situation in which there is not enough of something that people need"
  },
  {
    id: "c4_13",
    chapter: 4,
    chapterTitle: "Sustainable Living (การใช้ชีวิตอย่างยั่งยืน)",
    chapterShort: "Ch.4 Sustainable Living",
    english: "extinct",
    thai: "สูญพันธุ์",
    type: "adj.",
    definition: "no longer existing, because all of its kind have died"
  },
  {
    id: "c4_14",
    chapter: 4,
    chapterTitle: "Sustainable Living (การใช้ชีวิตอย่างยั่งยืน)",
    chapterShort: "Ch.4 Sustainable Living",
    english: "threat",
    thai: "ภัยคุกคาม",
    type: "n.",
    definition: "something that could cause harm or damage"
  },
  {
    id: "c4_15",
    chapter: 4,
    chapterTitle: "Sustainable Living (การใช้ชีวิตอย่างยั่งยืน)",
    chapterShort: "Ch.4 Sustainable Living",
    english: "steadily",
    thai: "อย่างต่อเนื่อง",
    type: "adv.",
    definition: "in a regular, continuous way without sudden changes"
  },
  {
    id: "c4_16",
    chapter: 4,
    chapterTitle: "Sustainable Living (การใช้ชีวิตอย่างยั่งยืน)",
    chapterShort: "Ch.4 Sustainable Living",
    english: "massive",
    thai: "มหาศาล",
    type: "adj.",
    definition: "extremely large in size, amount, or effect"
  },

  // บทที่ 5: Healthy Lifestyle
  {
    id: "c5_01",
    chapter: 5,
    chapterTitle: "Healthy Lifestyle (วิถีชีวิตเพื่อสุขภาพ)",
    chapterShort: "Ch.5 Healthy Lifestyle",
    english: "absorb",
    thai: "ดูดซึม",
    type: "v.",
    definition: "to take in a liquid, gas, or nutrient through the surface or into the body"
  },
  {
    id: "c5_02",
    chapter: 5,
    chapterTitle: "Healthy Lifestyle (วิถีชีวิตเพื่อสุขภาพ)",
    chapterShort: "Ch.5 Healthy Lifestyle",
    english: "adolescent",
    thai: "วัยรุ่น",
    type: "n.",
    definition: "a young person who is developing from a child into an adult"
  },
  {
    id: "c5_03",
    chapter: 5,
    chapterTitle: "Healthy Lifestyle (วิถีชีวิตเพื่อสุขภาพ)",
    chapterShort: "Ch.5 Healthy Lifestyle",
    english: "boost",
    thai: "กระตุ้น, เพิ่มพลัง",
    type: "v.",
    definition: "to increase or improve something"
  },
  {
    id: "c5_04",
    chapter: 5,
    chapterTitle: "Healthy Lifestyle (วิถีชีวิตเพื่อสุขภาพ)",
    chapterShort: "Ch.5 Healthy Lifestyle",
    english: "chronic",
    thai: "เรื้อรัง",
    type: "adj.",
    definition: "lasting for a long time or happening again and again"
  },
  {
    id: "c5_05",
    chapter: 5,
    chapterTitle: "Healthy Lifestyle (วิถีชีวิตเพื่อสุขภาพ)",
    chapterShort: "Ch.5 Healthy Lifestyle",
    english: "consume",
    thai: "บริโภค",
    type: "v.",
    definition: "to eat or drink something"
  },
  {
    id: "c5_06",
    chapter: 5,
    chapterTitle: "Healthy Lifestyle (วิถีชีวิตเพื่อสุขภาพ)",
    chapterShort: "Ch.5 Healthy Lifestyle",
    english: "cope with something or someone",
    thai: "รับมือกับ",
    type: "v. phr.",
    definition: "to deal successfully with a difficult situation or person"
  },
  {
    id: "c5_07",
    chapter: 5,
    chapterTitle: "Healthy Lifestyle (วิถีชีวิตเพื่อสุขภาพ)",
    chapterShort: "Ch.5 Healthy Lifestyle",
    english: "crave",
    thai: "อยากได้มาก",
    type: "v.",
    definition: "to have a very strong desire for something, especially a certain food"
  },
  {
    id: "c5_08",
    chapter: 5,
    chapterTitle: "Healthy Lifestyle (วิถีชีวิตเพื่อสุขภาพ)",
    chapterShort: "Ch.5 Healthy Lifestyle",
    english: "diet",
    thai: "อาหารที่กินเป็นประจำ",
    type: "n.",
    definition: "the food and drink that a person usually eats, or a special plan of eating to control weight or health"
  },
  {
    id: "c5_09",
    chapter: 5,
    chapterTitle: "Healthy Lifestyle (วิถีชีวิตเพื่อสุขภาพ)",
    chapterShort: "Ch.5 Healthy Lifestyle",
    english: "digestive",
    thai: "เกี่ยวกับการย่อยอาหาร",
    type: "adj.",
    definition: "relating to the process of breaking down food in the body"
  },
  {
    id: "c5_10",
    chapter: 5,
    chapterTitle: "Healthy Lifestyle (วิถีชีวิตเพื่อสุขภาพ)",
    chapterShort: "Ch.5 Healthy Lifestyle",
    english: "disrupt",
    thai: "ทำให้ชะงัก",
    type: "v.",
    definition: "to interrupt something and stop it from continuing as normal"
  },
  {
    id: "c5_11",
    chapter: 5,
    chapterTitle: "Healthy Lifestyle (วิถีชีวิตเพื่อสุขภาพ)",
    chapterShort: "Ch.5 Healthy Lifestyle",
    english: "excess",
    thai: "ส่วนเกิน",
    type: "adj.",
    definition: "more than is needed, allowed, or usual"
  },
  {
    id: "c5_12",
    chapter: 5,
    chapterTitle: "Healthy Lifestyle (วิถีชีวิตเพื่อสุขภาพ)",
    chapterShort: "Ch.5 Healthy Lifestyle",
    english: "fatigue",
    thai: "ความเหนื่อยล้า",
    type: "n.",
    definition: "a feeling of being extremely tired"
  },
  {
    id: "c5_13",
    chapter: 5,
    chapterTitle: "Healthy Lifestyle (วิถีชีวิตเพื่อสุขภาพ)",
    chapterShort: "Ch.5 Healthy Lifestyle",
    english: "immune",
    thai: "มีภูมิคุ้มกัน",
    type: "adj.",
    definition: "protected against a disease or not affected by it"
  },
  {
    id: "c5_14",
    chapter: 5,
    chapterTitle: "Healthy Lifestyle (วิถีชีวิตเพื่อสุขภาพ)",
    chapterShort: "Ch.5 Healthy Lifestyle",
    english: "insomnia",
    thai: "อาการนอนไม่หลับ",
    type: "n.",
    definition: "a condition in which a person finds it difficult to fall asleep or stay asleep"
  },
  {
    id: "c5_15",
    chapter: 5,
    chapterTitle: "Healthy Lifestyle (วิถีชีวิตเพื่อสุขภาพ)",
    chapterShort: "Ch.5 Healthy Lifestyle",
    english: "instigate",
    thai: "ก่อให้เกิด, ยุยง",
    type: "v.",
    definition: "to make something start or happen, especially something bad"
  },
  {
    id: "c5_16",
    chapter: 5,
    chapterTitle: "Healthy Lifestyle (วิถีชีวิตเพื่อสุขภาพ)",
    chapterShort: "Ch.5 Healthy Lifestyle",
    english: "metabolic",
    thai: "เกี่ยวกับการเผาผลาญ",
    type: "adj.",
    definition: "relating to the chemical processes in the body that change food into energy"
  },
  {
    id: "c5_17",
    chapter: 5,
    chapterTitle: "Healthy Lifestyle (วิถีชีวิตเพื่อสุขภาพ)",
    chapterShort: "Ch.5 Healthy Lifestyle",
    english: "nutrient",
    thai: "สารอาหาร",
    type: "n.",
    definition: "a substance in food that people, animals, and plants need to live and grow"
  },
  {
    id: "c5_18",
    chapter: 5,
    chapterTitle: "Healthy Lifestyle (วิถีชีวิตเพื่อสุขภาพ)",
    chapterShort: "Ch.5 Healthy Lifestyle",
    english: "relieve",
    thai: "บรรเทา",
    type: "v.",
    definition: "to make pain, worry, or a problem less severe"
  },
  {
    id: "c5_19",
    chapter: 5,
    chapterTitle: "Healthy Lifestyle (วิถีชีวิตเพื่อสุขภาพ)",
    chapterShort: "Ch.5 Healthy Lifestyle",
    english: "stimulant",
    thai: "สารกระตุ้น",
    type: "n.",
    definition: "a substance that makes the body or mind more active and alert"
  },
  {
    id: "c5_20",
    chapter: 5,
    chapterTitle: "Healthy Lifestyle (วิถีชีวิตเพื่อสุขภาพ)",
    chapterShort: "Ch.5 Healthy Lifestyle",
    english: "supplement",
    thai: "อาหารเสริม",
    type: "n.",
    definition: "something added to improve or complete something, such as a vitamin pill added to a diet"
  },
  {
    id: "c5_21",
    chapter: 5,
    chapterTitle: "Healthy Lifestyle (วิถีชีวิตเพื่อสุขภาพ)",
    chapterShort: "Ch.5 Healthy Lifestyle",
    english: "supply",
    thai: "จัดหาให้",
    type: "v.",
    definition: "to give or provide something that is needed"
  },
  {
    id: "c5_22",
    chapter: 5,
    chapterTitle: "Healthy Lifestyle (วิถีชีวิตเพื่อสุขภาพ)",
    chapterShort: "Ch.5 Healthy Lifestyle",
    english: "trigger",
    thai: "ตัวกระตุ้น",
    type: "n.",
    definition: "something that causes a reaction or a condition to start"
  },

  // บทที่ 6: Sports
  {
    id: "c6_01",
    chapter: 6,
    chapterTitle: "Sports (กีฬา)",
    chapterShort: "Ch.6 Sports",
    english: "diabetes",
    thai: "โรคเบาหวาน",
    type: "n.",
    definition: "a serious medical condition in which the body cannot control the amount of sugar in the blood"
  },
  {
    id: "c6_02",
    chapter: 6,
    chapterTitle: "Sports (กีฬา)",
    chapterShort: "Ch.6 Sports",
    english: "ditch",
    thai: "คู, ร่องน้ำ",
    type: "n.",
    definition: "a long narrow channel dug in the ground, usually to carry water away"
  },
  {
    id: "c6_03",
    chapter: 6,
    chapterTitle: "Sports (กีฬา)",
    chapterShort: "Ch.6 Sports",
    english: "expend",
    thai: "ใช้ไป",
    type: "v.",
    definition: "to use or spend energy, time, or money"
  },
  {
    id: "c6_04",
    chapter: 6,
    chapterTitle: "Sports (กีฬา)",
    chapterShort: "Ch.6 Sports",
    english: "management",
    thai: "การจัดการ",
    type: "n.",
    definition: "the process of controlling, organizing, or dealing with something"
  },
  {
    id: "c6_05",
    chapter: 6,
    chapterTitle: "Sports (กีฬา)",
    chapterShort: "Ch.6 Sports",
    english: "option",
    thai: "ตัวเลือก",
    type: "n.",
    definition: "something that you can choose from several possibilities"
  },
  {
    id: "c6_06",
    chapter: 6,
    chapterTitle: "Sports (กีฬา)",
    chapterShort: "Ch.6 Sports",
    english: "posture",
    thai: "ท่าทาง, การทรงตัว",
    type: "n.",
    definition: "the position or way in which you hold your body when standing or sitting"
  },
  {
    id: "c6_07",
    chapter: 6,
    chapterTitle: "Sports (กีฬา)",
    chapterShort: "Ch.6 Sports",
    english: "productive",
    thai: "ได้ผลดี",
    type: "adj.",
    definition: "achieving a lot or producing good results"
  },
  {
    id: "c6_08",
    chapter: 6,
    chapterTitle: "Sports (กีฬา)",
    chapterShort: "Ch.6 Sports",
    english: "radiant",
    thai: "เปล่งประกาย",
    type: "adj.",
    definition: "showing happiness and health in a bright, glowing way"
  },
  {
    id: "c6_09",
    chapter: 6,
    chapterTitle: "Sports (กีฬา)",
    chapterShort: "Ch.6 Sports",
    english: "refreshing",
    thai: "สดชื่น",
    type: "adj.",
    definition: "making you feel less tired or less hot, and more energetic"
  },
  {
    id: "c6_10",
    chapter: 6,
    chapterTitle: "Sports (กีฬา)",
    chapterShort: "Ch.6 Sports",
    english: "tough",
    thai: "แกร่ง, ยากลำบาก",
    type: "adj.",
    definition: "strong enough to deal with difficulty, or very hard to do or deal with"
  },
  {
    id: "c6_11",
    chapter: 6,
    chapterTitle: "Sports (กีฬา)",
    chapterShort: "Ch.6 Sports",
    english: "trigger",
    thai: "กระตุ้น, ทำให้เกิดขึ้น",
    type: "v.",
    definition: "to cause something to start or happen"
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
