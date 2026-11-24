import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The language of the input documents. Enter the language code for English (en) or Spanish (es).
 */
export const LanguageCode26 = {
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
export type LanguageCode26 = (typeof LanguageCode26)[keyof typeof LanguageCode26] | (string & {});

export const languageCode26Schema: EnumSchema<LanguageCode26> = s.enumOf<LanguageCode26>(LanguageCode26);
