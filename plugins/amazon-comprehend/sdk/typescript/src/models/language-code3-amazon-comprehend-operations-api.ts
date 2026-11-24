import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The language of the input text. Enter the language code for English (en) or Spanish (es). */
export const LanguageCode3AmazonComprehendOperationsApi = {
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
export type LanguageCode3AmazonComprehendOperationsApi =
  | (typeof LanguageCode3AmazonComprehendOperationsApi)[keyof typeof LanguageCode3AmazonComprehendOperationsApi]
  | (string & {});

export const languageCode3AmazonComprehendOperationsApiSchema: EnumSchema<LanguageCode3AmazonComprehendOperationsApi> =
  s.enumOf<LanguageCode3AmazonComprehendOperationsApi>(LanguageCode3AmazonComprehendOperationsApi);
