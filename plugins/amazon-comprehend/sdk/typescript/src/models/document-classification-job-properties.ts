import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { inputDataConfigSchema, type InputDataConfig } from "./input-data-config.js";
import { jobStatusSchema, type JobStatus } from "./job-status.js";
import { outputDataConfigSchema, type OutputDataConfig } from "./output-data-config.js";
import { vpcConfigSchema, type VpcConfig } from "./vpc-config.js";

export type DocumentClassificationJobProperties = {
  /** The identifier assigned to the document classification job. */
  jobId?: string;
  /**
   * The Amazon Resource Name (ARN) of the document classification job. It is a unique, fully
   * qualified identifier for the job. It includes the Amazon Web Services account, Amazon Web
   * Services Region, and the job ID. The format of the ARN is as follows:
   * arn::comprehend:::document-classification-job/ The following is an example job ARN:
   * arn:aws:comprehend:us-west-2:111122223333:document-classification-job/1234abcd12ab34cd56ef1234567890ab
   */
  jobArn?: string;
  /** The name that you assigned to the document classification job. */
  jobName?: string;
  /**
   * The current status of the document classification job. If the status is FAILED, the Message
   * field shows the reason for the failure.
   */
  jobStatus?: JobStatus;
  /** A description of the status of the job. */
  message?: string;
  /** The time that the document classification job was submitted for processing. */
  submitTime?: Date;
  /** The time that the document classification job completed. */
  endTime?: Date;
  /** The Amazon Resource Name (ARN) that identifies the document classifier. */
  documentClassifierArn?: string;
  inputDataConfig?: InputDataConfig;
  outputDataConfig?: OutputDataConfig;
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
  /** The Amazon Resource Number (ARN) of the flywheel */
  flywheelArn?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const documentClassificationJobPropertiesSchema: Schema<DocumentClassificationJobProperties> =
  s.object<DocumentClassificationJobProperties>(
    {
      jobId: s.optional(s.string()),
      jobArn: s.optional(s.string()),
      jobName: s.optional(s.string()),
      jobStatus: s.optional(s.lazy(() => jobStatusSchema)),
      message: s.optional(s.string()),
      submitTime: s.optional(s.dateTime()),
      endTime: s.optional(s.dateTime()),
      documentClassifierArn: s.optional(s.string()),
      inputDataConfig: s.optional(s.lazy(() => inputDataConfigSchema)),
      outputDataConfig: s.optional(s.lazy(() => outputDataConfigSchema)),
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
        documentClassifierArn: "DocumentClassifierArn",
        inputDataConfig: "InputDataConfig",
        outputDataConfig: "OutputDataConfig",
        dataAccessRoleArn: "DataAccessRoleArn",
        volumeKmsKeyId: "VolumeKmsKeyId",
        vpcConfig: "VpcConfig",
        flywheelArn: "FlywheelArn",
      },
    },
    { additionalProperties: s.json() },
  );
