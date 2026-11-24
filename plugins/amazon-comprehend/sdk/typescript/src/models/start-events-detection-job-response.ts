import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { jobStatus21Schema, type JobStatus21 } from "./job-status21.js";

export type StartEventsDetectionJobResponse = {
  /**
   * An unique identifier for the request. If you don't set the client request token, Amazon
   * Comprehend generates one.
   */
  jobId?: string;
  /**
   * The Amazon Resource Name (ARN) of the events detection job. It is a unique, fully qualified
   * identifier for the job. It includes the Amazon Web Services account, Amazon Web Services
   * Region, and the job ID. The format of the ARN is as follows:
   * arn::comprehend:::events-detection-job/ The following is an example job ARN:
   * arn:aws:comprehend:us-west-2:111122223333:events-detection-job/1234abcd12ab34cd56ef1234567890ab
   */
  jobArn?: string;
  /** The status of the events detection job. */
  jobStatus?: JobStatus21;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const startEventsDetectionJobResponseSchema: Schema<StartEventsDetectionJobResponse> =
  s.object<StartEventsDetectionJobResponse>(
    {
      jobId: s.optional(s.string()),
      jobArn: s.optional(s.string()),
      jobStatus: s.optional(s.lazy(() => jobStatus21Schema)),
      _keysMap: {
        jobId: "JobId",
        jobArn: "JobArn",
        jobStatus: "JobStatus",
      },
    },
    { additionalProperties: s.json() },
  );
