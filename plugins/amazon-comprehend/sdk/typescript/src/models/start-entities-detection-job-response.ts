import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { jobStatus20Schema, type JobStatus20 } from "./job-status20.js";

export type StartEntitiesDetectionJobResponse = {
  /**
   * The identifier generated for the job. To get the status of job, use this identifier with the
   * operation.
   */
  jobId?: string;
  /**
   * The Amazon Resource Name (ARN) of the entities detection job. It is a unique, fully qualified
   * identifier for the job. It includes the Amazon Web Services account, Amazon Web Services
   * Region, and the job ID. The format of the ARN is as follows:
   * arn::comprehend:::entities-detection-job/ The following is an example job ARN:
   * arn:aws:comprehend:us-west-2:111122223333:entities-detection-job/1234abcd12ab34cd56ef1234567890ab
   */
  jobArn?: string;
  /**
   * The status of the job. SUBMITTED - The job has been received and is queued for processing.
   * IN_PROGRESS - Amazon Comprehend is processing the job. COMPLETED - The job was successfully
   * completed and the output is available. FAILED - The job did not complete. To get details, use
   * the operation. STOP_REQUESTED - Amazon Comprehend has received a stop request for the job and
   * is processing the request. STOPPED - The job was successfully stopped without completing.
   */
  jobStatus?: JobStatus20;
  /** The ARN of the custom entity recognition model. */
  entityRecognizerArn?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const startEntitiesDetectionJobResponseSchema: Schema<StartEntitiesDetectionJobResponse> =
  s.object<StartEntitiesDetectionJobResponse>(
    {
      jobId: s.optional(s.string()),
      jobArn: s.optional(s.string()),
      jobStatus: s.optional(s.lazy(() => jobStatus20Schema)),
      entityRecognizerArn: s.optional(s.string()),
      _keysMap: {
        jobId: "JobId",
        jobArn: "JobArn",
        jobStatus: "JobStatus",
        entityRecognizerArn: "EntityRecognizerArn",
      },
    },
    { additionalProperties: s.json() },
  );
