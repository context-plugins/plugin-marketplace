import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  languageCode1AmazonTranscribeServiceMedicalVocabularyApiSchema,
  type LanguageCode1AmazonTranscribeServiceMedicalVocabularyApi,
} from "./language-code1-amazon-transcribe-service-medical-vocabulary-api.js";
import { vocabularyStateSchema, type VocabularyState } from "./vocabulary-state.js";

export type GetMedicalVocabularyResponse = {
  /** The name of the custom medical vocabulary you requested information about. */
  vocabularyName?: string;
  /**
   * The language code you selected for your custom medical vocabulary. US English (en-US) is the
   * only language supported with Amazon Transcribe Medical.
   */
  languageCode?: LanguageCode1AmazonTranscribeServiceMedicalVocabularyApi;
  /**
   * The processing state of your custom medical vocabulary. If the state is READY, you can use the
   * custom vocabulary in a StartMedicalTranscriptionJob request.
   */
  vocabularyState?: VocabularyState;
  /**
   * The date and time the specified custom medical vocabulary was last modified. Timestamps are in
   * the format YYYY-MM-DD'T'HH:MM:SS.SSSSSS-UTC. For example, 2022-05-04T12:32:58.761000-07:00
   * represents 12:32 PM UTC-7 on May 4, 2022.
   */
  lastModifiedTime?: Date;
  /**
   * If VocabularyState is FAILED, FailureReason contains information about why the custom medical
   * vocabulary request failed. See also: Common Errors.
   */
  failureReason?: string;
  /**
   * The Amazon S3 location where the specified custom medical vocabulary is stored; use this URI to
   * view or download the custom vocabulary.
   */
  downloadUri?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const getMedicalVocabularyResponseSchema: Schema<GetMedicalVocabularyResponse> =
  s.object<GetMedicalVocabularyResponse>(
    {
      vocabularyName: s.optional(s.string()),
      languageCode: s.optional(s.lazy(() => languageCode1AmazonTranscribeServiceMedicalVocabularyApiSchema)),
      vocabularyState: s.optional(s.lazy(() => vocabularyStateSchema)),
      lastModifiedTime: s.optional(s.dateTime()),
      failureReason: s.optional(s.string()),
      downloadUri: s.optional(s.string()),
      _keysMap: {
        vocabularyName: "VocabularyName",
        languageCode: "LanguageCode",
        vocabularyState: "VocabularyState",
        lastModifiedTime: "LastModifiedTime",
        failureReason: "FailureReason",
        downloadUri: "DownloadUri",
      },
    },
    { additionalProperties: s.json() },
  );
