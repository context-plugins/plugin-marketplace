import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The language of the input documents. */
export const LanguageCodeAmazonComprehendOperationsApi = {
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
export type LanguageCodeAmazonComprehendOperationsApi =
  | (typeof LanguageCodeAmazonComprehendOperationsApi)[keyof typeof LanguageCodeAmazonComprehendOperationsApi]
  | (string & {});

export const languageCodeAmazonComprehendOperationsApiSchema: EnumSchema<LanguageCodeAmazonComprehendOperationsApi> =
  s.enumOf<LanguageCodeAmazonComprehendOperationsApi>(LanguageCodeAmazonComprehendOperationsApi);
