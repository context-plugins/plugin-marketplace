import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The status of the job. SUBMITTED - The job has been received and is queued for processing.
 * IN_PROGRESS - Amazon Comprehend is processing the job. COMPLETED - The job was successfully
 * completed and the output is available. FAILED - The job did not complete. To get details, use the
 * operation. STOP_REQUESTED - Amazon Comprehend has received a stop request for the job and is
 * processing the request. STOPPED - The job was successfully stopped without completing.
 */
export const JobStatus20 = {
  Submitted: "SUBMITTED",
  InProgress: "IN_PROGRESS",
  Completed: "COMPLETED",
  Failed: "FAILED",
  StopRequested: "STOP_REQUESTED",
  Stopped: "STOPPED",
} as const;
export type JobStatus20 = (typeof JobStatus20)[keyof typeof JobStatus20] | (string & {});

export const jobStatus20Schema: EnumSchema<JobStatus20> = s.enumOf<JobStatus20>(JobStatus20);
