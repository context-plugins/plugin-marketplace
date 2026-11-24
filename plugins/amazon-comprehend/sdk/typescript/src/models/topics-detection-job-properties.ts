import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { inputDataConfigSchema, type InputDataConfig } from "./input-data-config.js";
import { jobStatus8Schema, type JobStatus8 } from "./job-status8.js";
import { outputDataConfigSchema, type OutputDataConfig } from "./output-data-config.js";
import { vpcConfigSchema, type VpcConfig } from "./vpc-config.js";

export type TopicsDetectionJobProperties = {
  /** The identifier assigned to the topic detection job. */
  jobId?: string;
  /**
   * The Amazon Resource Name (ARN) of the topics detection job. It is a unique, fully qualified
   * identifier for the job. It includes the Amazon Web Services account, Amazon Web Services
   * Region, and the job ID. The format of the ARN is as follows:
   * arn::comprehend:::topics-detection-job/ The following is an example job ARN:
   * arn:aws:comprehend:us-west-2:111122223333:topics-detection-job/1234abcd12ab34cd56ef1234567890ab
   */
  jobArn?: string;
  /** The name of the topic detection job. */
  jobName?: string;
  /**
   * The current status of the topic detection job. If the status is Failed, the reason for the
   * failure is shown in the Message field.
   */
  jobStatus?: JobStatus8;
  /** A description for the status of a job. */
  message?: string;
  /** The time that the topic detection job was submitted for processing. */
  submitTime?: Date;
  /** The time that the topic detection job was completed. */
  endTime?: Date;
  inputDataConfig?: InputDataConfig;
  outputDataConfig?: OutputDataConfig;
  /**
   * The number of topics to detect supplied when you created the topic detection job. The default
   * is 10.
   */
  numberOfTopics?: number;
  /**
   * The Amazon Resource Name (ARN) of the IAM role that grants Amazon Comprehend read access to
   * your job data.
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
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const topicsDetectionJobPropertiesSchema: Schema<TopicsDetectionJobProperties> =
  s.object<TopicsDetectionJobProperties>(
    {
      jobId: s.optional(s.string()),
      jobArn: s.optional(s.string()),
      jobName: s.optional(s.string()),
      jobStatus: s.optional(s.lazy(() => jobStatus8Schema)),
      message: s.optional(s.string()),
      submitTime: s.optional(s.dateTime()),
      endTime: s.optional(s.dateTime()),
      inputDataConfig: s.optional(s.lazy(() => inputDataConfigSchema)),
      outputDataConfig: s.optional(s.lazy(() => outputDataConfigSchema)),
      numberOfTopics: s.optional(s.int()),
      dataAccessRoleArn: s.optional(s.string()),
      volumeKmsKeyId: s.optional(s.string()),
      vpcConfig: s.optional(s.lazy(() => vpcConfigSchema)),
      _keysMap: {
        jobId: "JobId",
        jobArn: "JobArn",
        jobName: "JobName",
        jobStatus: "JobStatus",
        message: "Message",
        submitTime: "SubmitTime",
        endTime: "EndTime",
        inputDataConfig: "InputDataConfig",
        outputDataConfig: "OutputDataConfig",
        numberOfTopics: "NumberOfTopics",
        dataAccessRoleArn: "DataAccessRoleArn",
        volumeKmsKeyId: "VolumeKmsKeyId",
        vpcConfig: "VpcConfig",
      },
    },
    { additionalProperties: s.json() },
  );
