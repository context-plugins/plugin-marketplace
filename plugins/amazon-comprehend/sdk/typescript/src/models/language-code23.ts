import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The language of the input documents. All documents must be in the same language. You can specify
 * any of the languages supported by Amazon Comprehend. If custom entities recognition is used, this
 * parameter is ignored and the language used for training the model is used instead.
 */
export const LanguageCode23 = {
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
export type LanguageCode23 = (typeof LanguageCode23)[keyof typeof LanguageCode23] | (string & {});

export const languageCode23Schema: EnumSchema<LanguageCode23> = s.enumOf<LanguageCode23>(LanguageCode23);
