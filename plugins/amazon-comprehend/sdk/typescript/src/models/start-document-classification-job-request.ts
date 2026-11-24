import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { inputDataConfigSchema, type InputDataConfig } from "./input-data-config.js";
import { outputDataConfigSchema, type OutputDataConfig } from "./output-data-config.js";
import { tagSchema, type Tag } from "./tag.js";
import { vpcConfigSchema, type VpcConfig } from "./vpc-config.js";

export type StartDocumentClassificationJobRequest = {
  /** The identifier of the job. */
  jobName?: string;
  /** The Amazon Resource Name (ARN) of the document classifier to use to process the job. */
  documentClassifierArn?: string;
  inputDataConfig: InputDataConfig;
  outputDataConfig: OutputDataConfig;
  /**
   * The Amazon Resource Name (ARN) of the IAM role that grants Amazon Comprehend read access to
   * your input data.
   */
  dataAccessRoleArn: string;
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
   * Tags to associate with the document classification job. A tag is a key-value pair that adds
   * metadata to a resource used by Amazon Comprehend. For example, a tag with "Sales" as the key
   * might be added to a resource to indicate its use by the sales department.
   */
  tags?: Tag[];
  /** The Amazon Resource Number (ARN) of the flywheel associated with the model to use. */
  flywheelArn?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const startDocumentClassificationJobRequestSchema: Schema<StartDocumentClassificationJobRequest> =
  s.object<StartDocumentClassificationJobRequest>(
    {
      jobName: s.optional(s.string()),
      documentClassifierArn: s.optional(s.string()),
      inputDataConfig: inputDataConfigSchema,
      outputDataConfig: outputDataConfigSchema,
      dataAccessRoleArn: s.string(),
      clientRequestToken: s.optional(s.string()),
      volumeKmsKeyId: s.optional(s.string()),
      vpcConfig: s.optional(s.lazy(() => vpcConfigSchema)),
      tags: s.optional(s.array(s.lazy(() => tagSchema))),
      flywheelArn: s.optional(s.string()),
      _keysMap: {
        jobName: "JobName",
        documentClassifierArn: "DocumentClassifierArn",
        inputDataConfig: "InputDataConfig",
        outputDataConfig: "OutputDataConfig",
        dataAccessRoleArn: "DataAccessRoleArn",
        clientRequestToken: "ClientRequestToken",
        volumeKmsKeyId: "VolumeKmsKeyId",
        vpcConfig: "VpcConfig",
        tags: "Tags",
        flywheelArn: "FlywheelArn",
      },
    },
    { additionalProperties: s.json() },
  );
