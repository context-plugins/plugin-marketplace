import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Used with unidirectional glossaries. */
export type LanguageCodePair = {
  /**
   * Required. The ISO-639 language code for translation output, for example, "zh-CN". Expected to
   * be an exact match for GlossaryTerm.language_code.
   */
  targetLanguageCode?: string;
  /**
   * Required. The ISO-639 language code of the input text, for example, "en-US". Expected to be an
   * exact match for GlossaryTerm.language_code.
   */
  sourceLanguageCode?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const languageCodePairSchema: Schema<LanguageCodePair> = s.object<LanguageCodePair>(
  {
    targetLanguageCode: s.optional(s.string()),
    sourceLanguageCode: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
