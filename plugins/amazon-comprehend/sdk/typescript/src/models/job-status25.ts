import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The status of the job. SUBMITTED - The job has been received and is queued for processing.
 * IN_PROGRESS - Amazon Comprehend is processing the job. COMPLETED - The job was successfully
 * completed and the output is available. FAILED - The job did not complete. To get details, use the
 * DescribeTargetedSentimentDetectionJob operation.
 */
export const JobStatus25 = {
  Submitted: "SUBMITTED",
  InProgress: "IN_PROGRESS",
  Completed: "COMPLETED",
  Failed: "FAILED",
  StopRequested: "STOP_REQUESTED",
  Stopped: "STOPPED",
} as const;
export type JobStatus25 = (typeof JobStatus25)[keyof typeof JobStatus25] | (string & {});

export const jobStatus25Schema: EnumSchema<JobStatus25> = s.enumOf<JobStatus25>(JobStatus25);
