import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { jobStatus23Schema, type JobStatus23 } from "./job-status23.js";

export type StartPiiEntitiesDetectionJobResponse = {
  /** The identifier generated for the job. */
  jobId?: string;
  /**
   * The Amazon Resource Name (ARN) of the PII entity detection job. It is a unique, fully qualified
   * identifier for the job. It includes the Amazon Web Services account, Amazon Web Services
   * Region, and the job ID. The format of the ARN is as follows:
   * arn::comprehend:::pii-entities-detection-job/ The following is an example job ARN:
   * arn:aws:comprehend:us-west-2:111122223333:pii-entities-detection-job/1234abcd12ab34cd56ef1234567890ab
   */
  jobArn?: string;
  /** The status of the job. */
  jobStatus?: JobStatus23;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const startPiiEntitiesDetectionJobResponseSchema: Schema<StartPiiEntitiesDetectionJobResponse> =
  s.object<StartPiiEntitiesDetectionJobResponse>(
    {
      jobId: s.optional(s.string()),
      jobArn: s.optional(s.string()),
      jobStatus: s.optional(s.lazy(() => jobStatus23Schema)),
      _keysMap: {
        jobId: "JobId",
        jobArn: "JobArn",
        jobStatus: "JobStatus",
      },
    },
    { additionalProperties: s.json() },
  );
