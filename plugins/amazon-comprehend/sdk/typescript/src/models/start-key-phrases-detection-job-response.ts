import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { jobStatus19Schema, type JobStatus19 } from "./job-status19.js";

export type StartKeyPhrasesDetectionJobResponse = {
  /**
   * The identifier generated for the job. To get the status of a job, use this identifier with the
   * operation.
   */
  jobId?: string;
  /**
   * The Amazon Resource Name (ARN) of the key phrase detection job. It is a unique, fully qualified
   * identifier for the job. It includes the Amazon Web Services account, Amazon Web Services
   * Region, and the job ID. The format of the ARN is as follows:
   * arn::comprehend:::key-phrases-detection-job/ The following is an example job ARN:
   * arn:aws:comprehend:us-west-2:111122223333:key-phrases-detection-job/1234abcd12ab34cd56ef1234567890ab
   */
  jobArn?: string;
  /**
   * The status of the job. SUBMITTED - The job has been received and is queued for processing.
   * IN_PROGRESS - Amazon Comprehend is processing the job. COMPLETED - The job was successfully
   * completed and the output is available. FAILED - The job did not complete. To get details, use
   * the operation.
   */
  jobStatus?: JobStatus19;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const startKeyPhrasesDetectionJobResponseSchema: Schema<StartKeyPhrasesDetectionJobResponse> =
  s.object<StartKeyPhrasesDetectionJobResponse>(
    {
      jobId: s.optional(s.string()),
      jobArn: s.optional(s.string()),
      jobStatus: s.optional(s.lazy(() => jobStatus19Schema)),
      _keysMap: {
        jobId: "JobId",
        jobArn: "JobArn",
        jobStatus: "JobStatus",
      },
    },
    { additionalProperties: s.json() },
  );
