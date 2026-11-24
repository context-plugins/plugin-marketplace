import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The language of the input documents. You can specify any of the languages supported by Amazon
 * Comprehend. All documents must be in the same language.
 */
export const LanguageCode6 = {
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
export type LanguageCode6 = (typeof LanguageCode6)[keyof typeof LanguageCode6] | (string & {});

export const languageCode6Schema: EnumSchema<LanguageCode6> = s.enumOf<LanguageCode6>(LanguageCode6);
