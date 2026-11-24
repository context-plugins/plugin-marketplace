import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { outputConfigSchema, type OutputConfig } from "./output-config.js";

export type CopyProjectVersionRequest = {
  /** The ARN of the source project in the trusting AWS account. */
  sourceProjectArn: string;
  /**
   * The ARN of the model version in the source project that you want to copy to a destination
   * project.
   */
  sourceProjectVersionArn: string;
  /**
   * The ARN of the project in the trusted AWS account that you want to copy the model version to.
   */
  destinationProjectArn: string;
  /** A name for the version of the model that's copied to the destination project. */
  versionName: string;
  outputConfig: OutputConfig;
  /** The key-value tags to assign to the model version. */
  tags?: Record<string, string>;
  /**
   * The identifier for your AWS Key Management Service key (AWS KMS key). You can supply the Amazon
   * Resource Name (ARN) of your KMS key, the ID of your KMS key, an alias for your KMS key, or an
   * alias ARN. The key is used to encrypt training results and manifest files written to the output
   * Amazon S3 bucket (OutputConfig). If you choose to use your own KMS key, you need the following
   * permissions on the KMS key. kms:CreateGrant kms:DescribeKey kms:GenerateDataKey kms:Decrypt If
   * you don't specify a value for KmsKeyId, images copied into the service are encrypted using a
   * key that AWS owns and manages.
   */
  kmsKeyId?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const copyProjectVersionRequestSchema: Schema<CopyProjectVersionRequest> =
  s.object<CopyProjectVersionRequest>(
    {
      sourceProjectArn: s.string(),
      sourceProjectVersionArn: s.string(),
      destinationProjectArn: s.string(),
      versionName: s.string(),
      outputConfig: outputConfigSchema,
      tags: s.optional(s.record(s.string(), s.string())),
      kmsKeyId: s.optional(s.string()),
      _keysMap: {
        sourceProjectArn: "SourceProjectArn",
        sourceProjectVersionArn: "SourceProjectVersionArn",
        destinationProjectArn: "DestinationProjectArn",
        versionName: "VersionName",
        outputConfig: "OutputConfig",
        tags: "Tags",
        kmsKeyId: "KmsKeyId",
      },
    },
    { additionalProperties: s.json() },
  );
