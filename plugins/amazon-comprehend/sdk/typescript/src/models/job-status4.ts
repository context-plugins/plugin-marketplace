import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The current status of the key phrases detection job. If the status is FAILED, the Message field
 * shows the reason for the failure.
 */
export const JobStatus4 = {
  Submitted: "SUBMITTED",
  InProgress: "IN_PROGRESS",
  Completed: "COMPLETED",
  Failed: "FAILED",
  StopRequested: "STOP_REQUESTED",
  Stopped: "STOPPED",
} as const;
export type JobStatus4 = (typeof JobStatus4)[keyof typeof JobStatus4] | (string & {});

export const jobStatus4Schema: EnumSchema<JobStatus4> = s.enumOf<JobStatus4>(JobStatus4);
