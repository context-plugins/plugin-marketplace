import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The language code of the input documents. You can specify any of the following languages
 * supported by Amazon Comprehend: German ("de"), English ("en"), Spanish ("es"), French ("fr"),
 * Italian ("it"), or Portuguese ("pt").
 */
export const LanguageCode21 = {
  En: "en",
  Es: "es",
  Fr: "fr",
  De: "de",
  It: "it",
  Pt: "pt",
} as const;
export type LanguageCode21 = (typeof LanguageCode21)[keyof typeof LanguageCode21] | (string & {});

export const languageCode21Schema: EnumSchema<LanguageCode21> = s.enumOf<LanguageCode21>(LanguageCode21);
