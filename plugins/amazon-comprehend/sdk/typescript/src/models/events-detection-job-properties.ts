import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { inputDataConfigSchema, type InputDataConfig } from "./input-data-config.js";
import { jobStatus3Schema, type JobStatus3 } from "./job-status3.js";
import { languageCode10Schema, type LanguageCode10 } from "./language-code10.js";
import { outputDataConfigSchema, type OutputDataConfig } from "./output-data-config.js";

export type EventsDetectionJobProperties = {
  /** The identifier assigned to the events detection job. */
  jobId?: string;
  /**
   * The Amazon Resource Name (ARN) of the events detection job. It is a unique, fully qualified
   * identifier for the job. It includes the Amazon Web Services account, Amazon Web Services
   * Region, and the job ID. The format of the ARN is as follows:
   * arn::comprehend:::events-detection-job/ The following is an example job ARN:
   * arn:aws:comprehend:us-west-2:111122223333:events-detection-job/1234abcd12ab34cd56ef1234567890ab
   */
  jobArn?: string;
  /** The name you assigned the events detection job. */
  jobName?: string;
  /** The current status of the events detection job. */
  jobStatus?: JobStatus3;
  /** A description of the status of the events detection job. */
  message?: string;
  /** The time that the events detection job was submitted for processing. */
  submitTime?: Date;
  /** The time that the events detection job completed. */
  endTime?: Date;
  inputDataConfig?: InputDataConfig;
  outputDataConfig?: OutputDataConfig;
  /** The language code of the input documents. */
  languageCode?: LanguageCode10;
  /**
   * The Amazon Resource Name (ARN) of the IAM role that grants Amazon Comprehend read access to
   * your input data.
   */
  dataAccessRoleArn?: string;
  /** The types of events that are detected by the job. */
  targetEventTypes?: string[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const eventsDetectionJobPropertiesSchema: Schema<EventsDetectionJobProperties> =
  s.object<EventsDetectionJobProperties>(
    {
      jobId: s.optional(s.string()),
      jobArn: s.optional(s.string()),
      jobName: s.optional(s.string()),
      jobStatus: s.optional(s.lazy(() => jobStatus3Schema)),
      message: s.optional(s.string()),
      submitTime: s.optional(s.dateTime()),
      endTime: s.optional(s.dateTime()),
      inputDataConfig: s.optional(s.lazy(() => inputDataConfigSchema)),
      outputDataConfig: s.optional(s.lazy(() => outputDataConfigSchema)),
      languageCode: s.optional(s.lazy(() => languageCode10Schema)),
      dataAccessRoleArn: s.optional(s.string()),
      targetEventTypes: s.optional(s.array(s.string())),
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
        languageCode: "LanguageCode",
        dataAccessRoleArn: "DataAccessRoleArn",
        targetEventTypes: "TargetEventTypes",
      },
    },
    { additionalProperties: s.json() },
  );
