import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { encryptionConfigurationSchema, type EncryptionConfiguration } from "./encryption-configuration.js";
import {
  languageCode4AmazonTranscribeServiceVocabulariesApiSchema,
  type LanguageCode4AmazonTranscribeServiceVocabulariesApi,
} from "./language-code4-amazon-transcribe-service-vocabularies-api.js";

export type UpdateVocabularyRequest = {
  /**
   * The name of the custom vocabulary you want to update. Custom vocabulary names are case
   * sensitive.
   */
  vocabularyName: string;
  /**
   * The language code that represents the language of the entries in the custom vocabulary you want
   * to update. Each custom vocabulary must contain terms in only one language. A custom vocabulary
   * can only be used to transcribe files in the same language as the custom vocabulary. For
   * example, if you create a custom vocabulary using US English (en-US), you can only apply this
   * custom vocabulary to files that contain English audio. For a list of supported languages and
   * their associated language codes, refer to the Supported languages table.
   */
  languageCode: LanguageCode4AmazonTranscribeServiceVocabulariesApi;
  /**
   * Use this parameter if you want to update your custom vocabulary by including all desired terms,
   * as comma-separated values, within your request. The other option for updating your custom
   * vocabulary is to save your entries in a text file and upload them to an Amazon S3 bucket, then
   * specify the location of your file using the VocabularyFileUri parameter. Note that if you
   * include Phrases in your request, you cannot use VocabularyFileUri; you must choose one or the
   * other. Each language has a character set that contains all allowed characters for that specific
   * language. If you use unsupported charac
   */
  phrases?: string[];
  /**
   * The Amazon S3 location of the text file that contains your custom vocabulary. The URI must be
   * located in the same Amazon Web Services Region as the resource you're calling. Here's an
   * example URI path: s3://DOC-EXAMPLE-BUCKET/my-vocab-file.txt Note that if you include
   * VocabularyFileUri in your request, you cannot use the Phrases flag; you must choose one or the
   * other.
   */
  vocabularyFileUri?: string;
  /**
   * The Amazon Resource Name (ARN) of an IAM role that has permissions to access the Amazon S3
   * bucket that contains your input files (in this case, your custom vocabulary). If you include
   * EncryptionConfiguration in your request, this role must also have permissions to access the
   * specified KMS key. If the role that you specify doesn’t have the appropriate permissions, your
   * request fails. IAM role ARNs have the format
   * arn:partition:iam::account:role/role-name-with-path. For example:
   * arn:aws:iam::111122223333:role/Admin. For more information, see IAM ARNs.
   */
  dataAccessRoleArn?: string;
  encryptionConfiguration?: EncryptionConfiguration;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const updateVocabularyRequestSchema: Schema<UpdateVocabularyRequest> =
  s.object<UpdateVocabularyRequest>(
    {
      vocabularyName: s.string(),
      languageCode: languageCode4AmazonTranscribeServiceVocabulariesApiSchema,
      phrases: s.optional(s.array(s.string())),
      vocabularyFileUri: s.optional(s.string()),
      dataAccessRoleArn: s.optional(s.string()),
      encryptionConfiguration: s.optional(s.lazy(() => encryptionConfigurationSchema)),
      _keysMap: {
        vocabularyName: "VocabularyName",
        languageCode: "LanguageCode",
        phrases: "Phrases",
        vocabularyFileUri: "VocabularyFileUri",
        dataAccessRoleArn: "DataAccessRoleArn",
        encryptionConfiguration: "EncryptionConfiguration",
      },
    },
    { additionalProperties: s.json() },
  );
