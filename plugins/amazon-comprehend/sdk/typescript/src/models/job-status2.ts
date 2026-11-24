import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The current status of the entities detection job. If the status is FAILED, the Message field
 * shows the reason for the failure.
 */
export const JobStatus2 = {
  Submitted: "SUBMITTED",
  InProgress: "IN_PROGRESS",
  Completed: "COMPLETED",
  Failed: "FAILED",
  StopRequested: "STOP_REQUESTED",
  Stopped: "STOPPED",
} as const;
export type JobStatus2 = (typeof JobStatus2)[keyof typeof JobStatus2] | (string & {});

export const jobStatus2Schema: EnumSchema<JobStatus2> = s.enumOf<JobStatus2>(JobStatus2);
