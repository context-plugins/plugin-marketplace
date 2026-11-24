import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { vpcConfigSchema, type VpcConfig } from "./vpc-config.js";

export type DataSecurityConfig = {
  /**
   * ID for the KMS key that Amazon Comprehend uses to encrypt trained custom models. The
   * ModelKmsKeyId can be either of the following formats: KMS Key ID:
   * "1234abcd-12ab-34cd-56ef-1234567890ab" Amazon Resource Name (ARN) of a KMS Key:
   * "arn:aws:kms:us-west-2:111122223333:key/1234abcd-12ab-34cd-56ef-1234567890ab"
   */
  modelKmsKeyId?: string;
  /** ID for the KMS key that Amazon Comprehend uses to encrypt the volume. */
  volumeKmsKeyId?: string;
  /** ID for the KMS key that Amazon Comprehend uses to encrypt the data in the data lake. */
  dataLakeKmsKeyId?: string;
  vpcConfig?: VpcConfig;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const dataSecurityConfigSchema: Schema<DataSecurityConfig> = s.object<DataSecurityConfig>(
  {
    modelKmsKeyId: s.optional(s.string()),
    volumeKmsKeyId: s.optional(s.string()),
    dataLakeKmsKeyId: s.optional(s.string()),
    vpcConfig: s.optional(s.lazy(() => vpcConfigSchema)),
    _keysMap: {
      modelKmsKeyId: "ModelKmsKeyId",
      volumeKmsKeyId: "VolumeKmsKeyId",
      dataLakeKmsKeyId: "DataLakeKmsKeyId",
      vpcConfig: "VpcConfig",
    },
  },
  { additionalProperties: s.json() },
);
