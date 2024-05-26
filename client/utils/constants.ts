export const MONTHS = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"];

// 차급
// --TODO : 추후에 차급 - 사이즈, 플랫폼으로 나누기 (사이즈: 소형,중형,대형 | 플랫폼: 세단, SUV, 왜건)
export const SEGMENT_LIST = [
  "경차",
  "소형세단",
  "준중형세단",
  "중형세단",
  "준대형세단",
  "대형세단",
  "스포츠카",
  "소형SUV",
  "준중형SUV",
  "중형SUV",
  "준대형SUV",
  "대형SUV",
  "RV/MPV",
  "픽업/벤",
  "쿠페",
  "해치백",
  "왜건",
];

export const SEGMENT_IDS = {
  경차: "11",
  소형세단: "20",
  준중형세단: "21",
  중형세단: "22",
  준대형세단: "23",
  대형세단: "24",
  스포츠카: "25",
  소형SUV: "30",
  준중형SUV: "31",
  중형SUV: "32",
  준대형SUV: "33",
  대형SUV: "34",
  "RV/MPV": "44",
  "픽업/벤": "55",
  해치백: "66",
  왜건: "77",
  쿠페: "88",
  상용차: "99",
};

export const BRAND_IDS = {
  현대: "10",
  기아: "11",
  제네시스: "12",
  르노코리아: "13",
  KGM: "14",
  쉐보레: "15",
};

export const FUELTYPE_LIST = [
  { name: "가솔린", id: "1" },
  { name: "디젤", id: "2" },
  { name: "LPG", id: "3" },
  { name: "하이브리드", id: "4" },
  { name: "전기", id: "5" },
  { name: "수소", id: "6" },
  { name: "바이퓨얼", id: "7" },
];
