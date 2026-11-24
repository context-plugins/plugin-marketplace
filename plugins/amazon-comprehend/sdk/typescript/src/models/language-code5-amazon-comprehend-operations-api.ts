import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The language code of the input documents. You can specify any of the following languages
 * supported by Amazon Comprehend: German ("de"), English ("en"), Spanish ("es"), French ("fr"),
 * Italian ("it"), or Portuguese ("pt").
 */
export const LanguageCode5AmazonComprehendOperationsApi = {
  En: "en",
  Es: "es",
  Fr: "fr",
  De: "de",
  It: "it",
  Pt: "pt",
} as const;
export type LanguageCode5AmazonComprehendOperationsApi =
  | (typeof LanguageCode5AmazonComprehendOperationsApi)[keyof typeof LanguageCode5AmazonComprehendOperationsApi]
  | (string & {});

export const languageCode5AmazonComprehendOperationsApiSchema: EnumSchema<LanguageCode5AmazonComprehendOperationsApi> =
  s.enumOf<LanguageCode5AmazonComprehendOperationsApi>(LanguageCode5AmazonComprehendOperationsApi);
