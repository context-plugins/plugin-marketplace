import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The language of the input documents. All documents must be in the same language. Only English
 * ("en") is currently supported.
 */
export const LanguageCode11 = {
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
export type LanguageCode11 = (typeof LanguageCode11)[keyof typeof LanguageCode11] | (string & {});

export const languageCode11Schema: EnumSchema<LanguageCode11> = s.enumOf<LanguageCode11>(LanguageCode11);
