import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The status of the job: SUBMITTED - The job has been received and is queued for processing.
 * IN_PROGRESS - Amazon Comprehend is processing the job. COMPLETED - The job was successfully
 * completed and the output is available. FAILED - The job did not complete. To get details, use the
 * DescribeTopicDetectionJob operation.
 */
export const JobStatus26 = {
  Submitted: "SUBMITTED",
  InProgress: "IN_PROGRESS",
  Completed: "COMPLETED",
  Failed: "FAILED",
  StopRequested: "STOP_REQUESTED",
  Stopped: "STOPPED",
} as const;
export type JobStatus26 = (typeof JobStatus26)[keyof typeof JobStatus26] | (string & {});

export const jobStatus26Schema: EnumSchema<JobStatus26> = s.enumOf<JobStatus26>(JobStatus26);
