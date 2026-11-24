import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The status of the events detection job. */
export const JobStatus21 = {
  Submitted: "SUBMITTED",
  InProgress: "IN_PROGRESS",
  Completed: "COMPLETED",
  Failed: "FAILED",
  StopRequested: "STOP_REQUESTED",
  Stopped: "STOPPED",
} as const;
export type JobStatus21 = (typeof JobStatus21)[keyof typeof JobStatus21] | (string & {});

export const jobStatus21Schema: EnumSchema<JobStatus21> = s.enumOf<JobStatus21>(JobStatus21);
