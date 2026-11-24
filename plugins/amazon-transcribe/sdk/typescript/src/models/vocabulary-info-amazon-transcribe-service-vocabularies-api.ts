import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { languageCode3Schema, type LanguageCode3 } from "./language-code3.js";
import {
  vocabularyStateAmazonTranscribeServiceVocabulariesApiSchema,
  type VocabularyStateAmazonTranscribeServiceVocabulariesApi,
} from "./vocabulary-state-amazon-transcribe-service-vocabularies-api.js";

export type VocabularyInfoAmazonTranscribeServiceVocabulariesApi = {
  /**
   * A unique name, chosen by you, for your custom vocabulary. This name is case sensitive, cannot
   * contain spaces, and must be unique within an Amazon Web Services account.
   */
  vocabularyName?: string;
  /**
   * The language code used to create your custom vocabulary. Each custom vocabulary must contain
   * terms in only one language. A custom vocabulary can only be used to transcribe files in the
   * same language as the custom vocabulary. For example, if you create a custom vocabulary using US
   * English (en-US), you can only apply this custom vocabulary to files that contain English audio.
   */
  languageCode?: LanguageCode3;
  /**
   * The date and time the specified custom vocabulary was last modified. Timestamps are in the
   * format YYYY-MM-DD'T'HH:MM:SS.SSSSSS-UTC. For example, 2022-05-04T12:32:58.761000-07:00
   * represents 12:32 PM UTC-7 on May 4, 2022.
   */
  lastModifiedTime?: Date;
  /**
   * The processing state of your custom vocabulary. If the state is READY, you can use the custom
   * vocabulary in a StartTranscriptionJob request.
   */
  vocabularyState?: VocabularyStateAmazonTranscribeServiceVocabulariesApi;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const vocabularyInfoAmazonTranscribeServiceVocabulariesApiSchema: Schema<VocabularyInfoAmazonTranscribeServiceVocabulariesApi> =
  s.object<VocabularyInfoAmazonTranscribeServiceVocabulariesApi>(
    {
      vocabularyName: s.optional(s.string()),
      languageCode: s.optional(s.lazy(() => languageCode3Schema)),
      lastModifiedTime: s.optional(s.dateTime()),
      vocabularyState: s.optional(s.lazy(() => vocabularyStateAmazonTranscribeServiceVocabulariesApiSchema)),
      _keysMap: {
        vocabularyName: "VocabularyName",
        languageCode: "LanguageCode",
        lastModifiedTime: "LastModifiedTime",
        vocabularyState: "VocabularyState",
      },
    },
    { additionalProperties: s.json() },
  );
