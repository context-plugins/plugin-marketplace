import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The language of the input documents. You can specify any of the primary languages supported by
 * Amazon Comprehend. All documents must be in the same language.
 */
export const LanguageCode = {
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
export type LanguageCode = (typeof LanguageCode)[keyof typeof LanguageCode] | (string & {});

export const languageCodeSchema: EnumSchema<LanguageCode> = s.enumOf<LanguageCode>(LanguageCode);
