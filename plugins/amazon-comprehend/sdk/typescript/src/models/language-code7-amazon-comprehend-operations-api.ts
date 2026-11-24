import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The language of the input text. Currently, English is the only supported language. */
export const LanguageCode7AmazonComprehendOperationsApi = {
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
export type LanguageCode7AmazonComprehendOperationsApi =
  | (typeof LanguageCode7AmazonComprehendOperationsApi)[keyof typeof LanguageCode7AmazonComprehendOperationsApi]
  | (string & {});

export const languageCode7AmazonComprehendOperationsApiSchema: EnumSchema<LanguageCode7AmazonComprehendOperationsApi> =
  s.enumOf<LanguageCode7AmazonComprehendOperationsApi>(LanguageCode7AmazonComprehendOperationsApi);
