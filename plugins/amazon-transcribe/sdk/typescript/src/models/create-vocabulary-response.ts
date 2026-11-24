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

export type CreateVocabularyResponse = {
  /** The name you chose for your custom vocabulary. */
  vocabularyName?: string;
  /** The language code you selected for your custom vocabulary. */
  languageCode?: LanguageCode1AmazonTranscribeServiceVocabulariesApi;
  /**
   * The processing state of your custom vocabulary. If the state is READY, you can use the custom
   * vocabulary in a StartTranscriptionJob request.
   */
  vocabularyState?: VocabularyStateAmazonTranscribeServiceVocabulariesApi;
  /**
   * The date and time you created your custom vocabulary. Timestamps are in the format
   * YYYY-MM-DD'T'HH:MM:SS.SSSSSS-UTC. For example, 2022-05-04T12:32:58.761000-07:00 represents
   * 12:32 PM UTC-7 on May 4, 2022.
   */
  lastModifiedTime?: Date;
  /**
   * If VocabularyState is FAILED, FailureReason contains information about why the custom
   * vocabulary request failed. See also: Common Errors.
   */
  failureReason?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const createVocabularyResponseSchema: Schema<CreateVocabularyResponse> =
  s.object<CreateVocabularyResponse>(
    {
      vocabularyName: s.optional(s.string()),
      languageCode: s.optional(s.lazy(() => languageCode1AmazonTranscribeServiceVocabulariesApiSchema)),
      vocabularyState: s.optional(s.lazy(() => vocabularyStateAmazonTranscribeServiceVocabulariesApiSchema)),
      lastModifiedTime: s.optional(s.dateTime()),
      failureReason: s.optional(s.string()),
      _keysMap: {
        vocabularyName: "VocabularyName",
        languageCode: "LanguageCode",
        vocabularyState: "VocabularyState",
        lastModifiedTime: "LastModifiedTime",
        failureReason: "FailureReason",
      },
    },
    { additionalProperties: s.json() },
  );
