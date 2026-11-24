import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The current status of the document classification job. If the status is FAILED, the Message field
 * shows the reason for the failure.
 */
export const JobStatus = {
  Submitted: "SUBMITTED",
  InProgress: "IN_PROGRESS",
  Completed: "COMPLETED",
  Failed: "FAILED",
  StopRequested: "STOP_REQUESTED",
  Stopped: "STOPPED",
} as const;
export type JobStatus = (typeof JobStatus)[keyof typeof JobStatus] | (string & {});

export const jobStatusSchema: EnumSchema<JobStatus> = s.enumOf<JobStatus>(JobStatus);
