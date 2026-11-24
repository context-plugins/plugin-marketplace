import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The language code of the input documents. */
export const LanguageCode10 = {
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
export type LanguageCode10 = (typeof LanguageCode10)[keyof typeof LanguageCode10] | (string & {});

export const languageCode10Schema: EnumSchema<LanguageCode10> = s.enumOf<LanguageCode10>(LanguageCode10);
