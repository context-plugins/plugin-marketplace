import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { inputDataConfigSchema, type InputDataConfig } from "./input-data-config.js";
import { jobStatus2Schema, type JobStatus2 } from "./job-status2.js";
import { languageCode10Schema, type LanguageCode10 } from "./language-code10.js";
import { outputDataConfigSchema, type OutputDataConfig } from "./output-data-config.js";
import { vpcConfigSchema, type VpcConfig } from "./vpc-config.js";

export type EntitiesDetectionJobProperties = {
  /** The identifier assigned to the entities detection job. */
  jobId?: string;
  /**
   * The Amazon Resource Name (ARN) of the entities detection job. It is a unique, fully qualified
   * identifier for the job. It includes the Amazon Web Services account, Amazon Web Services
   * Region, and the job ID. The format of the ARN is as follows:
   * arn::comprehend:::entities-detection-job/ The following is an example job ARN:
   * arn:aws:comprehend:us-west-2:111122223333:entities-detection-job/1234abcd12ab34cd56ef1234567890ab
   */
  jobArn?: string;
  /** The name that you assigned the entities detection job. */
  jobName?: string;
  /**
   * The current status of the entities detection job. If the status is FAILED, the Message field
   * shows the reason for the failure.
   */
  jobStatus?: JobStatus2;
  /** A description of the status of a job. */
  message?: string;
  /** The time that the entities detection job was submitted for processing. */
  submitTime?: Date;
  /** The time that the entities detection job completed */
  endTime?: Date;
  /** The Amazon Resource Name (ARN) that identifies the entity recognizer. */
  entityRecognizerArn?: string;
  inputDataConfig?: InputDataConfig;
  outputDataConfig?: OutputDataConfig;
  /** The language code of the input documents. */
  languageCode?: LanguageCode10;
  /**
   * The Amazon Resource Name (ARN) of the IAM role that grants Amazon Comprehend read access to
   * your input data.
   */
  dataAccessRoleArn?: string;
  /**
   * ID for the Amazon Web Services Key Management Service (KMS) key that Amazon Comprehend uses to
   * encrypt data on the storage volume attached to the ML compute instance(s) that process the
   * analysis job. The VolumeKmsKeyId can be either of the following formats: KMS Key ID:
   * "1234abcd-12ab-34cd-56ef-1234567890ab" Amazon Resource Name (ARN) of a KMS Key:
   * "arn:aws:kms:us-west-2:111122223333:key/1234abcd-12ab-34cd-56ef-1234567890ab"
   */
  volumeKmsKeyId?: string;
  vpcConfig?: VpcConfig;
  /** The Amazon Resource Name (ARN) of the flywheel associated with this job. */
  flywheelArn?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const entitiesDetectionJobPropertiesSchema: Schema<EntitiesDetectionJobProperties> =
  s.object<EntitiesDetectionJobProperties>(
    {
      jobId: s.optional(s.string()),
      jobArn: s.optional(s.string()),
      jobName: s.optional(s.string()),
      jobStatus: s.optional(s.lazy(() => jobStatus2Schema)),
      message: s.optional(s.string()),
      submitTime: s.optional(s.dateTime()),
      endTime: s.optional(s.dateTime()),
      entityRecognizerArn: s.optional(s.string()),
      inputDataConfig: s.optional(s.lazy(() => inputDataConfigSchema)),
      outputDataConfig: s.optional(s.lazy(() => outputDataConfigSchema)),
      languageCode: s.optional(s.lazy(() => languageCode10Schema)),
      dataAccessRoleArn: s.optional(s.string()),
      volumeKmsKeyId: s.optional(s.string()),
      vpcConfig: s.optional(s.lazy(() => vpcConfigSchema)),
      flywheelArn: s.optional(s.string()),
      _keysMap: {
        jobId: "JobId",
        jobArn: "JobArn",
        jobName: "JobName",
        jobStatus: "JobStatus",
        message: "Message",
        submitTime: "SubmitTime",
        endTime: "EndTime",
        entityRecognizerArn: "EntityRecognizerArn",
        inputDataConfig: "InputDataConfig",
        outputDataConfig: "OutputDataConfig",
        languageCode: "LanguageCode",
        dataAccessRoleArn: "DataAccessRoleArn",
        volumeKmsKeyId: "VolumeKmsKeyId",
        vpcConfig: "VpcConfig",
        flywheelArn: "FlywheelArn",
      },
    },
    { additionalProperties: s.json() },
  );
