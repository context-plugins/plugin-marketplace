import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The language of the input text. Enter the language code for English (en) or Spanish (es). */
export const LanguageCode19 = {
  En: "en",
  Es: "es",
  Fr: "fr",
  De: "de",
  It: "it",
  Pt: "pt",
  Ar: "ar",
  Hi: "hi",
  Ja: "ja",
  Ko: "ko",
  Zh: "zh",
  ZhTw: "zh-TW",
} as const;
export type LanguageCode19 = (typeof LanguageCode19)[keyof typeof LanguageCode19] | (string & {});

export const languageCode19Schema: EnumSchema<LanguageCode19> = s.enumOf<LanguageCode19>(LanguageCode19);
