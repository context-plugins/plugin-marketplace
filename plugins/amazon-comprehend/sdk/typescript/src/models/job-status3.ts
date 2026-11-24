import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The current status of the events detection job. */
export const JobStatus3 = {
  Submitted: "SUBMITTED",
  InProgress: "IN_PROGRESS",
  Completed: "COMPLETED",
  Failed: "FAILED",
  StopRequested: "STOP_REQUESTED",
  Stopped: "STOPPED",
} as const;
export type JobStatus3 = (typeof JobStatus3)[keyof typeof JobStatus3] | (string & {});

export const jobStatus3Schema: EnumSchema<JobStatus3> = s.enumOf<JobStatus3>(JobStatus3);
