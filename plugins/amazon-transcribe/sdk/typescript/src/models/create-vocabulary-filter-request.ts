import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { encryptionConfigurationSchema, type EncryptionConfiguration } from "./encryption-configuration.js";
import {
  languageCodeAmazonTranscribeServiceVocabularyFilterApiSchema,
  type LanguageCodeAmazonTranscribeServiceVocabularyFilterApi,
} from "./language-code-amazon-transcribe-service-vocabulary-filter-api.js";
import { tagSchema, type Tag } from "./tag.js";

export type CreateVocabularyFilterRequest = {
  /**
   * A unique name, chosen by you, for your new custom vocabulary filter. This name is case
   * sensitive, cannot contain spaces, and must be unique within an Amazon Web Services account. If
   * you try to create a new custom vocabulary filter with the same name as an existing custom
   * vocabulary filter, you get a ConflictException error.
   */
  vocabularyFilterName: string;
  /**
   * The language code that represents the language of the entries in your vocabulary filter. Each
   * custom vocabulary filter must contain terms in only one language. A custom vocabulary filter
   * can only be used to transcribe files in the same language as the filter. For example, if you
   * create a custom vocabulary filter using US English (en-US), you can only apply this filter to
   * files that contain English audio. For a list of supported languages and their associated
   * language codes, refer to the Supported languages table.
   */
  languageCode: LanguageCodeAmazonTranscribeServiceVocabularyFilterApi;
  /**
   * Use this parameter if you want to create your custom vocabulary filter by including all desired
   * terms, as comma-separated values, within your request. The other option for creating your
   * vocabulary filter is to save your entries in a text file and upload them to an Amazon S3
   * bucket, then specify the location of your file using the VocabularyFilterFileUri parameter.
   * Note that if you include Words in your request, you cannot use VocabularyFilterFileUri; you
   * must choose one or the other. Each language has a character set that contains all allowed
   * characters for that specific language. If you use u
   */
  words?: string[];
  /**
   * The Amazon S3 location of the text file that contains your custom vocabulary filter terms. The
   * URI must be located in the same Amazon Web Services Region as the resource you're calling.
   * Here's an example URI path: s3://DOC-EXAMPLE-BUCKET/my-vocab-filter-file.txt Note that if you
   * include VocabularyFilterFileUri in your request, you cannot use Words; you must choose one or
   * the other.
   */
  vocabularyFilterFileUri?: string;
  /**
   * Adds one or more custom tags, each in the form of a key:value pair, to a new custom vocabulary
   * filter at the time you create this new vocabulary filter. To learn more about using tags with
   * Amazon Transcribe, refer to Tagging resources.
   */
  tags?: Tag[];
  /**
   * The Amazon Resource Name (ARN) of an IAM role that has permissions to access the Amazon S3
   * bucket that contains your input files (in this case, your custom vocabulary filter). If you
   * include EncryptionConfiguration in your request, this role must also have permissions to access
   * the specified KMS key. If the role that you specify doesn’t have the appropriate permissions,
   * your request fails. IAM role ARNs have the format
   * arn:partition:iam::account:role/role-name-with-path. For example:
   * arn:aws:iam::111122223333:role/Admin. For more information, see IAM ARNs.
   */
  dataAccessRoleArn?: string;
  encryptionConfiguration?: EncryptionConfiguration;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const createVocabularyFilterRequestSchema: Schema<CreateVocabularyFilterRequest> =
  s.object<CreateVocabularyFilterRequest>(
    {
      vocabularyFilterName: s.string(),
      languageCode: languageCodeAmazonTranscribeServiceVocabularyFilterApiSchema,
      words: s.optional(s.array(s.string())),
      vocabularyFilterFileUri: s.optional(s.string()),
      tags: s.optional(s.array(s.lazy(() => tagSchema))),
      dataAccessRoleArn: s.optional(s.string()),
      encryptionConfiguration: s.optional(s.lazy(() => encryptionConfigurationSchema)),
      _keysMap: {
        vocabularyFilterName: "VocabularyFilterName",
        languageCode: "LanguageCode",
        words: "Words",
        vocabularyFilterFileUri: "VocabularyFilterFileUri",
        tags: "Tags",
        dataAccessRoleArn: "DataAccessRoleArn",
        encryptionConfiguration: "EncryptionConfiguration",
      },
    },
    { additionalProperties: s.json() },
  );
