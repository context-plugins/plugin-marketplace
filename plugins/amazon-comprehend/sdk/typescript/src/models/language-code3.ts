import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The language of the input documents. You can specify any of the following languages supported by
 * Amazon Comprehend: German ("de"), English ("en"), Spanish ("es"), French ("fr"), Italian ("it"),
 * or Portuguese ("pt"). All documents must be in the same language.
 */
export const LanguageCode3 = {
  En: "en",
  Es: "es",
  Fr: "fr",
  De: "de",
  It: "it",
  Pt: "pt",
} as const;
export type LanguageCode3 = (typeof LanguageCode3)[keyof typeof LanguageCode3] | (string & {});

export const languageCode3Schema: EnumSchema<LanguageCode3> = s.enumOf<LanguageCode3>(LanguageCode3);
