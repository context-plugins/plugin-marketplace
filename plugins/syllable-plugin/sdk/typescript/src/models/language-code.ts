import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** BCP 47 codes of languages that Syllable supports. */
export const LanguageCode = {
  YueHk: "yue-HK",
  EnUs: "en-US",
  KoKr: "ko-KR",
  ZhCn: "zh-CN",
  FaIr: "fa-IR",
  EsUs: "es-US",
  ThTh: "th-TH",
  ViVn: "vi-VN",
  BsBa: "bs-BA",
  SwKe: "sw-KE",
  RuRu: "ru-RU",
  HiIn: "hi-IN",
  GuIn: "gu-IN",
  ArXa: "ar-XA",
  FrFr: "fr-FR",
  JaJp: "ja-JP",
  NeNp: "ne-NP",
} as const;
export type LanguageCode = (typeof LanguageCode)[keyof typeof LanguageCode] | (string & {});

export const languageCodeSchema: EnumSchema<LanguageCode> = s.enumOf<LanguageCode>(LanguageCode);
