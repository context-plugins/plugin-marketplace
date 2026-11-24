import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The current status of the targeted sentiment detection job. If the status is FAILED, the Messages
 * field shows the reason for the failure.
 */
export const JobStatus7 = {
  Submitted: "SUBMITTED",
  InProgress: "IN_PROGRESS",
  Completed: "COMPLETED",
  Failed: "FAILED",
  StopRequested: "STOP_REQUESTED",
  Stopped: "STOPPED",
} as const;
export type JobStatus7 = (typeof JobStatus7)[keyof typeof JobStatus7] | (string & {});

export const jobStatus7Schema: EnumSchema<JobStatus7> = s.enumOf<JobStatus7>(JobStatus7);
