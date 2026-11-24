import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { inputDataConfigSchema, type InputDataConfig } from "./input-data-config.js";
import { outputDataConfigSchema, type OutputDataConfig } from "./output-data-config.js";
import { tagSchema, type Tag } from "./tag.js";
import { vpcConfigSchema, type VpcConfig } from "./vpc-config.js";

export type StartTopicsDetectionJobRequest = {
  inputDataConfig: InputDataConfig;
  outputDataConfig: OutputDataConfig;
  /**
   * The Amazon Resource Name (ARN) of the IAM role that grants Amazon Comprehend read access to
   * your input data. For more information, see Role-based permissions.
   */
  dataAccessRoleArn: string;
  /** The identifier of the job. */
  jobName?: string;
  /** The number of topics to detect. */
  numberOfTopics?: number;
  /**
   * A unique identifier for the request. If you do not set the client request token, Amazon
   * Comprehend generates one.
   */
  clientRequestToken?: string;
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
   * Tags to associate with the topics detection job. A tag is a key-value pair that adds metadata
   * to a resource used by Amazon Comprehend. For example, a tag with "Sales" as the key might be
   * added to a resource to indicate its use by the sales department.
   */
  tags?: Tag[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const startTopicsDetectionJobRequestSchema: Schema<StartTopicsDetectionJobRequest> =
  s.object<StartTopicsDetectionJobRequest>(
    {
      inputDataConfig: inputDataConfigSchema,
      outputDataConfig: outputDataConfigSchema,
      dataAccessRoleArn: s.string(),
      jobName: s.optional(s.string()),
      numberOfTopics: s.optional(s.int()),
      clientRequestToken: s.optional(s.string()),
      volumeKmsKeyId: s.optional(s.string()),
      vpcConfig: s.optional(s.lazy(() => vpcConfigSchema)),
      tags: s.optional(s.array(s.lazy(() => tagSchema))),
      _keysMap: {
        inputDataConfig: "InputDataConfig",
        outputDataConfig: "OutputDataConfig",
        dataAccessRoleArn: "DataAccessRoleArn",
        jobName: "JobName",
        numberOfTopics: "NumberOfTopics",
        clientRequestToken: "ClientRequestToken",
        volumeKmsKeyId: "VolumeKmsKeyId",
        vpcConfig: "VpcConfig",
        tags: "Tags",
      },
    },
    { additionalProperties: s.json() },
  );
