import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  languageCode1AmazonTranscribeServiceVocabulariesApiSchema,
  type LanguageCode1AmazonTranscribeServiceVocabulariesApi,
} from "./language-code1-amazon-transcribe-service-vocabularies-api.js";
import {
  vocabularyStateAmazonTranscribeServiceVocabulariesApiSchema,
  type VocabularyStateAmazonTranscribeServiceVocabulariesApi,
} from "./vocabulary-state-amazon-transcribe-service-vocabularies-api.js";

export type UpdateVocabularyResponse = {
  /** The name of the updated custom vocabulary. */
  vocabularyName?: string;
  /** The language code you selected for your custom vocabulary. */
  languageCode?: LanguageCode1AmazonTranscribeServiceVocabulariesApi;
  /**
   * The date and time the specified custom vocabulary was last updated. Timestamps are in the
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

export const updateVocabularyResponseSchema: Schema<UpdateVocabularyResponse> =
  s.object<UpdateVocabularyResponse>(
    {
      vocabularyName: s.optional(s.string()),
      languageCode: s.optional(s.lazy(() => languageCode1AmazonTranscribeServiceVocabulariesApiSchema)),
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
