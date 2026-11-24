import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  entityRecognizerInputDataConfigSchema,
  type EntityRecognizerInputDataConfig,
} from "./entity-recognizer-input-data-config.js";
import { languageCode7Schema, type LanguageCode7 } from "./language-code7.js";
import { tagSchema, type Tag } from "./tag.js";
import { vpcConfigSchema, type VpcConfig } from "./vpc-config.js";

export type CreateEntityRecognizerRequest = {
  /**
   * The name given to the newly created recognizer. Recognizer names can be a maximum of 256
   * characters. Alphanumeric characters, hyphens (-) and underscores (_) are allowed. The name must
   * be unique in the account/Region.
   */
  recognizerName: string;
  /**
   * The version name given to the newly created recognizer. Version names can be a maximum of 256
   * characters. Alphanumeric characters, hyphens (-) and underscores (_) are allowed. The version
   * name must be unique among all models with the same recognizer name in the account/Region.
   */
  versionName?: string;
  /**
   * The Amazon Resource Name (ARN) of the IAM role that grants Amazon Comprehend read access to
   * your input data.
   */
  dataAccessRoleArn: string;
  /**
   * Tags to associate with the entity recognizer. A tag is a key-value pair that adds as a metadata
   * to a resource used by Amazon Comprehend. For example, a tag with "Sales" as the key might be
   * added to a resource to indicate its use by the sales department.
   */
  tags?: Tag[];
  inputDataConfig: EntityRecognizerInputDataConfig;
  /**
   * A unique identifier for the request. If you don't set the client request token, Amazon
   * Comprehend generates one.
   */
  clientRequestToken?: string;
  /**
   * You can specify any of the following languages: English ("en"), Spanish ("es"), French ("fr"),
   * Italian ("it"), German ("de"), or Portuguese ("pt"). If you plan to use this entity recognizer
   * with PDF, Word, or image input files, you must specify English as the language. All training
   * documents must be in the same language.
   */
  languageCode: LanguageCode7;
  /**
   * ID for the Amazon Web Services Key Management Service (KMS) key that Amazon Comprehend uses to
   * encrypt data on the storage volume attached to the ML compute instance(s) that process the
   * analysis job. The VolumeKmsKeyId can be either of the following formats: KMS Key ID:
   * "1234abcd-12ab-34cd-56ef-1234567890ab" Amazon Resource Name (ARN) of a KMS Key:
   * "arn:aws:kms:us-west-2:111122223333:key/1234abcd-12ab-34cd-56ef-1234567890ab"
   */
  volumeKmsKeyId?: string;
  vpcConfig?: VpcConfig;
  /**
   * ID for the KMS key that Amazon Comprehend uses to encrypt trained custom models. The
   * ModelKmsKeyId can be either of the following formats: KMS Key ID:
   * "1234abcd-12ab-34cd-56ef-1234567890ab" Amazon Resource Name (ARN) of a KMS Key:
   * "arn:aws:kms:us-west-2:111122223333:key/1234abcd-12ab-34cd-56ef-1234567890ab"
   */
  modelKmsKeyId?: string;
  /**
   * The JSON resource-based policy to attach to your custom entity recognizer model. You can use
   * this policy to allow another Amazon Web Services account to import your custom model. Provide
   * your JSON as a UTF-8 encoded string without line breaks. To provide valid JSON for your policy,
   * enclose the attribute names and values in double quotes. If the JSON body is also enclosed in
   * double quotes, then you must escape the double quotes that are inside the policy:
   * "{\"attribute\": \"value\", \"attribute\": [\"value\"]}" To avoid escaping quotes, you can use
   * single quotes to enclose the policy and double
   */
  modelPolicy?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const createEntityRecognizerRequestSchema: Schema<CreateEntityRecognizerRequest> =
  s.object<CreateEntityRecognizerRequest>(
    {
      recognizerName: s.string(),
      versionName: s.optional(s.string()),
      dataAccessRoleArn: s.string(),
      tags: s.optional(s.array(s.lazy(() => tagSchema))),
      inputDataConfig: entityRecognizerInputDataConfigSchema,
      clientRequestToken: s.optional(s.string()),
      languageCode: languageCode7Schema,
      volumeKmsKeyId: s.optional(s.string()),
      vpcConfig: s.optional(s.lazy(() => vpcConfigSchema)),
      modelKmsKeyId: s.optional(s.string()),
      modelPolicy: s.optional(s.string()),
      _keysMap: {
        recognizerName: "RecognizerName",
        versionName: "VersionName",
        dataAccessRoleArn: "DataAccessRoleArn",
        tags: "Tags",
        inputDataConfig: "InputDataConfig",
        clientRequestToken: "ClientRequestToken",
        languageCode: "LanguageCode",
        volumeKmsKeyId: "VolumeKmsKeyId",
        vpcConfig: "VpcConfig",
        modelKmsKeyId: "ModelKmsKeyId",
        modelPolicy: "ModelPolicy",
      },
    },
    { additionalProperties: s.json() },
  );
