import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The status of the job. SUBMITTED - The job has been received and is queued for processing.
 * IN_PROGRESS - Amazon Comprehend is processing the job. COMPLETED - The job was successfully
 * completed and the output is available. FAILED - The job did not complete. To get details, use the
 * operation.
 */
export const JobStatus19 = {
  Submitted: "SUBMITTED",
  InProgress: "IN_PROGRESS",
  Completed: "COMPLETED",
  Failed: "FAILED",
  StopRequested: "STOP_REQUESTED",
  Stopped: "STOPPED",
} as const;
export type JobStatus19 = (typeof JobStatus19)[keyof typeof JobStatus19] | (string & {});

export const jobStatus19Schema: EnumSchema<JobStatus19> = s.enumOf<JobStatus19>(JobStatus19);
