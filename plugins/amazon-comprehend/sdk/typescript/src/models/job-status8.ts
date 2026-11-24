import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The current status of the topic detection job. If the status is Failed, the reason for the
 * failure is shown in the Message field.
 */
export const JobStatus8 = {
  Submitted: "SUBMITTED",
  InProgress: "IN_PROGRESS",
  Completed: "COMPLETED",
  Failed: "FAILED",
  StopRequested: "STOP_REQUESTED",
  Stopped: "STOPPED",
} as const;
export type JobStatus8 = (typeof JobStatus8)[keyof typeof JobStatus8] | (string & {});

export const jobStatus8Schema: EnumSchema<JobStatus8> = s.enumOf<JobStatus8>(JobStatus8);
