import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** BCP 47 code of the language */
export const LanguageCode1 = {
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
export type LanguageCode1 = (typeof LanguageCode1)[keyof typeof LanguageCode1] | (string & {});

export const languageCode1Schema: EnumSchema<LanguageCode1> = s.enumOf<LanguageCode1>(LanguageCode1);
