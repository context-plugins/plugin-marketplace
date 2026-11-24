import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The status of the job: SUBMITTED - The job has been received and queued for processing.
 * IN_PROGRESS - Amazon Comprehend is processing the job. COMPLETED - The job was successfully
 * completed and the output is available. FAILED - The job did not complete. For details, use the
 * DescribeDocumentClassificationJob operation. STOP_REQUESTED - Amazon Comprehend has received a
 * stop request for the job and is processing the request. STOPPED - The job was successfully
 * stopped without completing.
 */
export const JobStatus18 = {
  Submitted: "SUBMITTED",
  InProgress: "IN_PROGRESS",
  Completed: "COMPLETED",
  Failed: "FAILED",
  StopRequested: "STOP_REQUESTED",
  Stopped: "STOPPED",
} as const;
export type JobStatus18 = (typeof JobStatus18)[keyof typeof JobStatus18] | (string & {});

export const jobStatus18Schema: EnumSchema<JobStatus18> = s.enumOf<JobStatus18>(JobStatus18);
