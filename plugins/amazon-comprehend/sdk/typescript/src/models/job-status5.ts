import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The current status of the PII entities detection job. If the status is FAILED, the Message field
 * shows the reason for the failure.
 */
export const JobStatus5 = {
  Submitted: "SUBMITTED",
  InProgress: "IN_PROGRESS",
  Completed: "COMPLETED",
  Failed: "FAILED",
  StopRequested: "STOP_REQUESTED",
  Stopped: "STOPPED",
} as const;
export type JobStatus5 = (typeof JobStatus5)[keyof typeof JobStatus5] | (string & {});

export const jobStatus5Schema: EnumSchema<JobStatus5> = s.enumOf<JobStatus5>(JobStatus5);
