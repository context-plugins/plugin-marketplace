import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { inputDataConfigSchema, type InputDataConfig } from "./input-data-config.js";
import { languageCode23Schema, type LanguageCode23 } from "./language-code23.js";
import { outputDataConfigSchema, type OutputDataConfig } from "./output-data-config.js";
import { tagSchema, type Tag } from "./tag.js";
import { vpcConfigSchema, type VpcConfig } from "./vpc-config.js";

export type StartEntitiesDetectionJobRequest = {
  inputDataConfig: InputDataConfig;
  outputDataConfig: OutputDataConfig;
  /**
   * The Amazon Resource Name (ARN) of the IAM role that grants Amazon Comprehend read access to
   * your input data. For more information, see Role-based permissions.
   */
  dataAccessRoleArn: string;
  /** The identifier of the job. */
  jobName?: string;
  /**
   * The Amazon Resource Name (ARN) that identifies the specific entity recognizer to be used by the
   * StartEntitiesDetectionJob. This ARN is optional and is only used for a custom entity
   * recognition job.
   */
  entityRecognizerArn?: string;
  /**
   * The language of the input documents. All documents must be in the same language. You can
   * specify any of the languages supported by Amazon Comprehend. If custom entities recognition is
   * used, this parameter is ignored and the language used for training the model is used instead.
   */
  languageCode: LanguageCode23;
  /**
   * A unique identifier for the request. If you don't set the client request token, Amazon
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
   * Tags to associate with the entities detection job. A tag is a key-value pair that adds metadata
   * to a resource used by Amazon Comprehend. For example, a tag with "Sales" as the key might be
   * added to a resource to indicate its use by the sales department.
   */
  tags?: Tag[];
  /** The Amazon Resource Number (ARN) of the flywheel associated with the model to use. */
  flywheelArn?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const startEntitiesDetectionJobRequestSchema: Schema<StartEntitiesDetectionJobRequest> =
  s.object<StartEntitiesDetectionJobRequest>(
    {
      inputDataConfig: inputDataConfigSchema,
      outputDataConfig: outputDataConfigSchema,
      dataAccessRoleArn: s.string(),
      jobName: s.optional(s.string()),
      entityRecognizerArn: s.optional(s.string()),
      languageCode: languageCode23Schema,
      clientRequestToken: s.optional(s.string()),
      volumeKmsKeyId: s.optional(s.string()),
      vpcConfig: s.optional(s.lazy(() => vpcConfigSchema)),
      tags: s.optional(s.array(s.lazy(() => tagSchema))),
      flywheelArn: s.optional(s.string()),
      _keysMap: {
        inputDataConfig: "InputDataConfig",
        outputDataConfig: "OutputDataConfig",
        dataAccessRoleArn: "DataAccessRoleArn",
        jobName: "JobName",
        entityRecognizerArn: "EntityRecognizerArn",
        languageCode: "LanguageCode",
        clientRequestToken: "ClientRequestToken",
        volumeKmsKeyId: "VolumeKmsKeyId",
        vpcConfig: "VpcConfig",
        tags: "Tags",
        flywheelArn: "FlywheelArn",
      },
    },
    { additionalProperties: s.json() },
  );
