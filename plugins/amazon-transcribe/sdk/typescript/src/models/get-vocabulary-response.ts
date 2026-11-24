import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { encryptionConfigurationSchema, type EncryptionConfiguration } from "./encryption-configuration.js";
import {
  languageCode1AmazonTranscribeServiceVocabulariesApiSchema,
  type LanguageCode1AmazonTranscribeServiceVocabulariesApi,
} from "./language-code1-amazon-transcribe-service-vocabularies-api.js";
import {
  vocabularyStateAmazonTranscribeServiceVocabulariesApiSchema,
  type VocabularyStateAmazonTranscribeServiceVocabulariesApi,
} from "./vocabulary-state-amazon-transcribe-service-vocabularies-api.js";

export type GetVocabularyResponse = {
  /** The name of the custom vocabulary you requested information about. */
  vocabularyName?: string;
  /** The language code you selected for your custom vocabulary. */
  languageCode?: LanguageCode1AmazonTranscribeServiceVocabulariesApi;
  /**
   * The processing state of your custom vocabulary. If the state is READY, you can use the custom
   * vocabulary in a StartTranscriptionJob request.
   */
  vocabularyState?: VocabularyStateAmazonTranscribeServiceVocabulariesApi;
  /**
   * The date and time the specified custom vocabulary was last modified. Timestamps are in the
   * format YYYY-MM-DD'T'HH:MM:SS.SSSSSS-UTC. For example, 2022-05-04T12:32:58.761000-07:00
   * represents 12:32 PM UTC-7 on May 4, 2022.
   */
  lastModifiedTime?: Date;
  /**
   * If VocabularyState is FAILED, FailureReason contains information about why the custom
   * vocabulary request failed. See also: Common Errors.
   */
  failureReason?: string;
  /**
   * The Amazon S3 location where the custom vocabulary is stored; use this URI to view or download
   * the custom vocabulary.
   */
  downloadUri?: string;
  /**
   * The Amazon Resource Name (ARN) of the IAM role used to access the Amazon S3 bucket that
   * contains your input files and, if applicable, the KMS key specified in EncryptionConfiguration.
   */
  dataAccessRoleArn?: string;
  encryptionConfiguration?: EncryptionConfiguration;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const getVocabularyResponseSchema: Schema<GetVocabularyResponse> = s.object<GetVocabularyResponse>(
  {
    vocabularyName: s.optional(s.string()),
    languageCode: s.optional(s.lazy(() => languageCode1AmazonTranscribeServiceVocabulariesApiSchema)),
    vocabularyState: s.optional(s.lazy(() => vocabularyStateAmazonTranscribeServiceVocabulariesApiSchema)),
    lastModifiedTime: s.optional(s.dateTime()),
    failureReason: s.optional(s.string()),
    downloadUri: s.optional(s.string()),
    dataAccessRoleArn: s.optional(s.string()),
    encryptionConfiguration: s.optional(s.lazy(() => encryptionConfigurationSchema)),
    _keysMap: {
      vocabularyName: "VocabularyName",
      languageCode: "LanguageCode",
      vocabularyState: "VocabularyState",
      lastModifiedTime: "LastModifiedTime",
      failureReason: "FailureReason",
      downloadUri: "DownloadUri",
      dataAccessRoleArn: "DataAccessRoleArn",
      encryptionConfiguration: "EncryptionConfiguration",
    },
  },
  { additionalProperties: s.json() },
);
