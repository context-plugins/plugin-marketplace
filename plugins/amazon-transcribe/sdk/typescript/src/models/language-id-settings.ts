import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type LanguageIdSettings = {
  /**
   * The name of the custom vocabulary you want to use when processing your transcription job.
   * Custom vocabulary names are case sensitive. The language of the specified custom vocabulary
   * must match the language code that you specify in your transcription request. If the languages
   * do not match, the custom vocabulary isn't applied. There are no errors or warnings associated
   * with a language mismatch.
   */
  vocabularyName?: string;
  /**
   * The name of the custom vocabulary filter you want to use when processing your transcription
   * job. Custom vocabulary filter names are case sensitive. The language of the specified custom
   * vocabulary filter must match the language code that you specify in your transcription request.
   * If the languages do not match, the custom vocabulary filter isn't applied. There are no errors
   * or warnings associated with a language mismatch. Note that if you include VocabularyFilterName
   * in your request, you must also include VocabularyFilterMethod.
   */
  vocabularyFilterName?: string;
  /**
   * The name of the custom language model you want to use when processing your transcription job.
   * Note that custom language model names are case sensitive. The language of the specified custom
   * language model must match the language code that you specify in your transcription request. If
   * the languages do not match, the custom language model isn't applied. There are no errors or
   * warnings associated with a language mismatch.
   */
  languageModelName?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const languageIdSettingsSchema: Schema<LanguageIdSettings> = s.object<LanguageIdSettings>(
  {
    vocabularyName: s.optional(s.string()),
    vocabularyFilterName: s.optional(s.string()),
    languageModelName: s.optional(s.string()),
    _keysMap: {
      vocabularyName: "VocabularyName",
      vocabularyFilterName: "VocabularyFilterName",
      languageModelName: "LanguageModelName",
    },
  },
  { additionalProperties: s.json() },
);
