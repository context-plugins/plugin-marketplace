import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The current status of the dominant language detection job. If the status is FAILED, the Message
 * field shows the reason for the failure.
 */
export const JobStatus1 = {
  Submitted: "SUBMITTED",
  InProgress: "IN_PROGRESS",
  Completed: "COMPLETED",
  Failed: "FAILED",
  StopRequested: "STOP_REQUESTED",
  Stopped: "STOPPED",
} as const;
export type JobStatus1 = (typeof JobStatus1)[keyof typeof JobStatus1] | (string & {});

export const jobStatus1Schema: EnumSchema<JobStatus1> = s.enumOf<JobStatus1>(JobStatus1);
