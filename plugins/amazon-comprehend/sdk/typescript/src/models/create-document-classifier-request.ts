import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  documentClassifierInputDataConfigSchema,
  type DocumentClassifierInputDataConfig,
} from "./document-classifier-input-data-config.js";
import {
  documentClassifierOutputDataConfigSchema,
  type DocumentClassifierOutputDataConfig,
} from "./document-classifier-output-data-config.js";
import { languageCode6Schema, type LanguageCode6 } from "./language-code6.js";
import { modeSchema, type Mode } from "./mode.js";
import { tagSchema, type Tag } from "./tag.js";
import { vpcConfigSchema, type VpcConfig } from "./vpc-config.js";

export type CreateDocumentClassifierRequest = {
  /** The name of the document classifier. */
  documentClassifierName: string;
  /**
   * The version name given to the newly created classifier. Version names can have a maximum of 256
   * characters. Alphanumeric characters, hyphens (-) and underscores (_) are allowed. The version
   * name must be unique among all models with the same classifier name in the Amazon Web Services
   * account/Amazon Web Services Region.
   */
  versionName?: string;
  /**
   * The Amazon Resource Name (ARN) of the IAM role that grants Amazon Comprehend read access to
   * your input data.
   */
  dataAccessRoleArn: string;
  /**
   * Tags to associate with the document classifier. A tag is a key-value pair that adds as a
   * metadata to a resource used by Amazon Comprehend. For example, a tag with "Sales" as the key
   * might be added to a resource to indicate its use by the sales department.
   */
  tags?: Tag[];
  inputDataConfig: DocumentClassifierInputDataConfig;
  outputDataConfig?: DocumentClassifierOutputDataConfig;
  /**
   * A unique identifier for the request. If you don't set the client request token, Amazon
   * Comprehend generates one.
   */
  clientRequestToken?: string;
  /**
   * The language of the input documents. You can specify any of the languages supported by Amazon
   * Comprehend. All documents must be in the same language.
   */
  languageCode: LanguageCode6;
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
   * Indicates the mode in which the classifier will be trained. The classifier can be trained in
   * multi-class (single-label) mode or multi-label mode. Multi-class mode identifies a single class
   * label for each document and multi-label mode identifies one or more class labels for each
   * document. Multiple labels for an individual document are separated by a delimiter. The default
   * delimiter between labels is a pipe (|).
   */
  mode?: Mode;
  /**
   * ID for the KMS key that Amazon Comprehend uses to encrypt trained custom models. The
   * ModelKmsKeyId can be either of the following formats: KMS Key ID:
   * "1234abcd-12ab-34cd-56ef-1234567890ab" Amazon Resource Name (ARN) of a KMS Key:
   * "arn:aws:kms:us-west-2:111122223333:key/1234abcd-12ab-34cd-56ef-1234567890ab"
   */
  modelKmsKeyId?: string;
  /**
   * The resource-based policy to attach to your custom document classifier model. You can use this
   * policy to allow another Amazon Web Services account to import your custom model. Provide your
   * policy as a JSON body that you enter as a UTF-8 encoded string without line breaks. To provide
   * valid JSON, enclose the attribute names and values in double quotes. If the JSON body is also
   * enclosed in double quotes, then you must escape the double quotes that are inside the policy:
   * "{\"attribute\": \"value\", \"attribute\": [\"value\"]}" To avoid escaping quotes, you can use
   * single quotes to enclose the poli
   */
  modelPolicy?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const createDocumentClassifierRequestSchema: Schema<CreateDocumentClassifierRequest> =
  s.object<CreateDocumentClassifierRequest>(
    {
      documentClassifierName: s.string(),
      versionName: s.optional(s.string()),
      dataAccessRoleArn: s.string(),
      tags: s.optional(s.array(s.lazy(() => tagSchema))),
      inputDataConfig: documentClassifierInputDataConfigSchema,
      outputDataConfig: s.optional(s.lazy(() => documentClassifierOutputDataConfigSchema)),
      clientRequestToken: s.optional(s.string()),
      languageCode: languageCode6Schema,
      volumeKmsKeyId: s.optional(s.string()),
      vpcConfig: s.optional(s.lazy(() => vpcConfigSchema)),
      mode: s.optional(s.lazy(() => modeSchema)),
      modelKmsKeyId: s.optional(s.string()),
      modelPolicy: s.optional(s.string()),
      _keysMap: {
        documentClassifierName: "DocumentClassifierName",
        versionName: "VersionName",
        dataAccessRoleArn: "DataAccessRoleArn",
        tags: "Tags",
        inputDataConfig: "InputDataConfig",
        outputDataConfig: "OutputDataConfig",
        clientRequestToken: "ClientRequestToken",
        languageCode: "LanguageCode",
        volumeKmsKeyId: "VolumeKmsKeyId",
        vpcConfig: "VpcConfig",
        mode: "Mode",
        modelKmsKeyId: "ModelKmsKeyId",
        modelPolicy: "ModelPolicy",
      },
    },
    { additionalProperties: s.json() },
  );
