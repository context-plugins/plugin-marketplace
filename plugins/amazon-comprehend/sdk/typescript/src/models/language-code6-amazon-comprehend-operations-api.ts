import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The language of the input documents. Currently, English is the only supported language. */
export const LanguageCode6AmazonComprehendOperationsApi = {
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
export type LanguageCode6AmazonComprehendOperationsApi =
  | (typeof LanguageCode6AmazonComprehendOperationsApi)[keyof typeof LanguageCode6AmazonComprehendOperationsApi]
  | (string & {});

export const languageCode6AmazonComprehendOperationsApiSchema: EnumSchema<LanguageCode6AmazonComprehendOperationsApi> =
  s.enumOf<LanguageCode6AmazonComprehendOperationsApi>(LanguageCode6AmazonComprehendOperationsApi);
