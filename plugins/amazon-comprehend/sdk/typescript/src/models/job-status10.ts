import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Filters the list of jobs based on job status. Returns only jobs with the specified status. */
export const JobStatus10 = {
  Submitted: "SUBMITTED",
  InProgress: "IN_PROGRESS",
  Completed: "COMPLETED",
  Failed: "FAILED",
  StopRequested: "STOP_REQUESTED",
  Stopped: "STOPPED",
} as const;
export type JobStatus10 = (typeof JobStatus10)[keyof typeof JobStatus10] | (string & {});

export const jobStatus10Schema: EnumSchema<JobStatus10> = s.enumOf<JobStatus10>(JobStatus10);
