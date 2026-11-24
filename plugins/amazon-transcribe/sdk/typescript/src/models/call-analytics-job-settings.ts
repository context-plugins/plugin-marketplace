import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { contentRedactionSchema, type ContentRedaction } from "./content-redaction.js";
import { languageIdSettingsSchema, type LanguageIdSettings } from "./language-id-settings.js";
import { languageOptionSchema, type LanguageOption } from "./language-option.js";
import { summarizationSchema, type Summarization } from "./summarization.js";
import { vocabularyFilterMethodSchema, type VocabularyFilterMethod } from "./vocabulary-filter-method.js";

export type CallAnalyticsJobSettings = {
  /**
   * The name of the custom vocabulary you want to include in your Call Analytics transcription
   * request. Custom vocabulary names are case sensitive.
   */
  vocabularyName?: string;
  /**
   * The name of the custom vocabulary filter you want to include in your Call Analytics
   * transcription request. Custom vocabulary filter names are case sensitive. Note that if you
   * include VocabularyFilterName in your request, you must also include VocabularyFilterMethod.
   */
  vocabularyFilterName?: string;
  /**
   * Specify how you want your custom vocabulary filter applied to your transcript. To replace words
   * with ***, choose mask. To delete words, choose remove. To flag words without changing them,
   * choose tag.
   */
  vocabularyFilterMethod?: VocabularyFilterMethod;
  /**
   * The name of the custom language model you want to use when processing your Call Analytics job.
   * Note that custom language model names are case sensitive. The language of the specified custom
   * language model must match the language code that you specify in your transcription request. If
   * the languages do not match, the custom language model isn't applied. There are no errors or
   * warnings associated with a language mismatch.
   */
  languageModelName?: string;
  contentRedaction?: ContentRedaction;
  /**
   * You can specify two or more language codes that represent the languages you think may be
   * present in your media. Including more than five is not recommended. If you're unsure what
   * languages are present, do not include this parameter. Including language options can improve
   * the accuracy of language identification. For a list of languages supported with Call Analytics,
   * refer to the Supported languages table. To transcribe speech in Modern Standard Arabic (ar-SA)
   * in Amazon Web Services GovCloud (US) (US-West, us-gov-west-1), Amazon Web Services GovCloud
   * (US) (US-East, us-gov-east-1), Canada (Calgar
   */
  languageOptions?: LanguageOption[];
  /**
   * If using automatic language identification in your request and you want to apply a custom
   * language model, a custom vocabulary, or a custom vocabulary filter, include LanguageIdSettings
   * with the relevant sub-parameters (VocabularyName, LanguageModelName, and VocabularyFilterName).
   * LanguageIdSettings supports two to five language codes. Each language code you include can have
   * an associated custom language model, custom vocabulary, and custom vocabulary filter. The
   * language codes that you specify must match the languages of the associated custom language
   * models, custom vocabularies, and custom vo
   */
  languageIdSettings?: Record<string, LanguageIdSettings>;
  summarization?: Summarization;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const callAnalyticsJobSettingsSchema: Schema<CallAnalyticsJobSettings> =
  s.object<CallAnalyticsJobSettings>(
    {
      vocabularyName: s.optional(s.string()),
      vocabularyFilterName: s.optional(s.string()),
      vocabularyFilterMethod: s.optional(s.lazy(() => vocabularyFilterMethodSchema)),
      languageModelName: s.optional(s.string()),
      contentRedaction: s.optional(s.lazy(() => contentRedactionSchema)),
      languageOptions: s.optional(s.array(s.lazy(() => languageOptionSchema))),
      languageIdSettings: s.optional(
        s.record(
          s.string(),
          s.lazy(() => languageIdSettingsSchema),
        ),
      ),
      summarization: s.optional(s.lazy(() => summarizationSchema)),
      _keysMap: {
        vocabularyName: "VocabularyName",
        vocabularyFilterName: "VocabularyFilterName",
        vocabularyFilterMethod: "VocabularyFilterMethod",
        languageModelName: "LanguageModelName",
        contentRedaction: "ContentRedaction",
        languageOptions: "LanguageOptions",
        languageIdSettings: "LanguageIdSettings",
        summarization: "Summarization",
      },
    },
    { additionalProperties: s.json() },
  );
