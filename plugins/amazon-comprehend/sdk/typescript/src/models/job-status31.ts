import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The status of the PII entities detection job. */
export const JobStatus31 = {
  Submitted: "SUBMITTED",
  InProgress: "IN_PROGRESS",
  Completed: "COMPLETED",
  Failed: "FAILED",
  StopRequested: "STOP_REQUESTED",
  Stopped: "STOPPED",
} as const;
export type JobStatus31 = (typeof JobStatus31)[keyof typeof JobStatus31] | (string & {});

export const jobStatus31Schema: EnumSchema<JobStatus31> = s.enumOf<JobStatus31>(JobStatus31);
