import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { inputDataConfigSchema, type InputDataConfig } from "./input-data-config.js";
import { jobStatus5Schema, type JobStatus5 } from "./job-status5.js";
import { languageCode10Schema, type LanguageCode10 } from "./language-code10.js";
import { mode3Schema, type Mode3 } from "./mode3.js";
import { piiOutputDataConfigSchema, type PiiOutputDataConfig } from "./pii-output-data-config.js";
import { redactionConfigSchema, type RedactionConfig } from "./redaction-config.js";

export type PiiEntitiesDetectionJobProperties = {
  /** The identifier assigned to the PII entities detection job. */
  jobId?: string;
  /**
   * The Amazon Resource Name (ARN) of the PII entities detection job. It is a unique, fully
   * qualified identifier for the job. It includes the Amazon Web Services account, Amazon Web
   * Services Region, and the job ID. The format of the ARN is as follows:
   * arn::comprehend:::pii-entities-detection-job/ The following is an example job ARN:
   * arn:aws:comprehend:us-west-2:111122223333:pii-entities-detection-job/1234abcd12ab34cd56ef1234567890ab
   */
  jobArn?: string;
  /** The name that you assigned the PII entities detection job. */
  jobName?: string;
  /**
   * The current status of the PII entities detection job. If the status is FAILED, the Message
   * field shows the reason for the failure.
   */
  jobStatus?: JobStatus5;
  /** A description of the status of a job. */
  message?: string;
  /** The time that the PII entities detection job was submitted for processing. */
  submitTime?: Date;
  /** The time that the PII entities detection job completed. */
  endTime?: Date;
  inputDataConfig?: InputDataConfig;
  outputDataConfig?: PiiOutputDataConfig;
  redactionConfig?: RedactionConfig;
  /** The language code of the input documents. */
  languageCode?: LanguageCode10;
  /**
   * The Amazon Resource Name (ARN) of the IAM role that grants Amazon Comprehend read access to
   * your input data.
   */
  dataAccessRoleArn?: string;
  /**
   * Specifies whether the output provides the locations (offsets) of PII entities or a file in
   * which PII entities are redacted.
   */
  mode?: Mode3;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const piiEntitiesDetectionJobPropertiesSchema: Schema<PiiEntitiesDetectionJobProperties> =
  s.object<PiiEntitiesDetectionJobProperties>(
    {
      jobId: s.optional(s.string()),
      jobArn: s.optional(s.string()),
      jobName: s.optional(s.string()),
      jobStatus: s.optional(s.lazy(() => jobStatus5Schema)),
      message: s.optional(s.string()),
      submitTime: s.optional(s.dateTime()),
      endTime: s.optional(s.dateTime()),
      inputDataConfig: s.optional(s.lazy(() => inputDataConfigSchema)),
      outputDataConfig: s.optional(s.lazy(() => piiOutputDataConfigSchema)),
      redactionConfig: s.optional(s.lazy(() => redactionConfigSchema)),
      languageCode: s.optional(s.lazy(() => languageCode10Schema)),
      dataAccessRoleArn: s.optional(s.string()),
      mode: s.optional(s.lazy(() => mode3Schema)),
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
        redactionConfig: "RedactionConfig",
        languageCode: "LanguageCode",
        dataAccessRoleArn: "DataAccessRoleArn",
        mode: "Mode",
      },
    },
    { additionalProperties: s.json() },
  );
