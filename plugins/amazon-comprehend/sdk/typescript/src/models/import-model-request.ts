import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { tagSchema, type Tag } from "./tag.js";

export type ImportModelRequest = {
  /** The Amazon Resource Name (ARN) of the custom model to import. */
  sourceModelArn: string;
  /** The name to assign to the custom model that is created in Amazon Comprehend by this import. */
  modelName?: string;
  /**
   * The version name given to the custom model that is created by this import. Version names can
   * have a maximum of 256 characters. Alphanumeric characters, hyphens (-) and underscores (_) are
   * allowed. The version name must be unique among all models with the same classifier name in the
   * account/Region.
   */
  versionName?: string;
  /**
   * ID for the KMS key that Amazon Comprehend uses to encrypt trained custom models. The
   * ModelKmsKeyId can be either of the following formats: KMS Key ID:
   * "1234abcd-12ab-34cd-56ef-1234567890ab" Amazon Resource Name (ARN) of a KMS Key:
   * "arn:aws:kms:us-west-2:111122223333:key/1234abcd-12ab-34cd-56ef-1234567890ab"
   */
  modelKmsKeyId?: string;
  /**
   * The Amazon Resource Name (ARN) of the IAM role that grants Amazon Comprehend permission to use
   * Amazon Key Management Service (KMS) to encrypt or decrypt the custom model.
   */
  dataAccessRoleArn?: string;
  /**
   * Tags to associate with the custom model that is created by this import. A tag is a key-value
   * pair that adds as a metadata to a resource used by Amazon Comprehend. For example, a tag with
   * "Sales" as the key might be added to a resource to indicate its use by the sales department.
   */
  tags?: Tag[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const importModelRequestSchema: Schema<ImportModelRequest> = s.object<ImportModelRequest>(
  {
    sourceModelArn: s.string(),
    modelName: s.optional(s.string()),
    versionName: s.optional(s.string()),
    modelKmsKeyId: s.optional(s.string()),
    dataAccessRoleArn: s.optional(s.string()),
    tags: s.optional(s.array(s.lazy(() => tagSchema))),
    _keysMap: {
      sourceModelArn: "SourceModelArn",
      modelName: "ModelName",
      versionName: "VersionName",
      modelKmsKeyId: "ModelKmsKeyId",
      dataAccessRoleArn: "DataAccessRoleArn",
      tags: "Tags",
    },
  },
  { additionalProperties: s.json() },
);
