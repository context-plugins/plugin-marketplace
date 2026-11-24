import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { encryptionConfigurationSchema, type EncryptionConfiguration } from "./encryption-configuration.js";
import {
  languageCode1AmazonTranscribeServiceVocabularyFilterApiSchema,
  type LanguageCode1AmazonTranscribeServiceVocabularyFilterApi,
} from "./language-code1-amazon-transcribe-service-vocabulary-filter-api.js";

export type GetVocabularyFilterResponse = {
  /** The name of the custom vocabulary filter you requested information about. */
  vocabularyFilterName?: string;
  /** The language code you selected for your custom vocabulary filter. */
  languageCode?: LanguageCode1AmazonTranscribeServiceVocabularyFilterApi;
  /**
   * The date and time the specified custom vocabulary filter was last modified. Timestamps are in
   * the format YYYY-MM-DD'T'HH:MM:SS.SSSSSS-UTC. For example, 2022-05-04T12:32:58.761000-07:00
   * represents 12:32 PM UTC-7 on May 4, 2022.
   */
  lastModifiedTime?: Date;
  /**
   * The Amazon S3 location where the custom vocabulary filter is stored; use this URI to view or
   * download the custom vocabulary filter.
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

export const getVocabularyFilterResponseSchema: Schema<GetVocabularyFilterResponse> =
  s.object<GetVocabularyFilterResponse>(
    {
      vocabularyFilterName: s.optional(s.string()),
      languageCode: s.optional(s.lazy(() => languageCode1AmazonTranscribeServiceVocabularyFilterApiSchema)),
      lastModifiedTime: s.optional(s.dateTime()),
      downloadUri: s.optional(s.string()),
      dataAccessRoleArn: s.optional(s.string()),
      encryptionConfiguration: s.optional(s.lazy(() => encryptionConfigurationSchema)),
      _keysMap: {
        vocabularyFilterName: "VocabularyFilterName",
        languageCode: "LanguageCode",
        lastModifiedTime: "LastModifiedTime",
        downloadUri: "DownloadUri",
        dataAccessRoleArn: "DataAccessRoleArn",
        encryptionConfiguration: "EncryptionConfiguration",
      },
    },
    { additionalProperties: s.json() },
  );
