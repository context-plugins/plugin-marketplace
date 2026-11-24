import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Filters the list based on job status. Returns only jobs with the specified status. */
export const JobStatus9 = {
  Submitted: "SUBMITTED",
  InProgress: "IN_PROGRESS",
  Completed: "COMPLETED",
  Failed: "FAILED",
  StopRequested: "STOP_REQUESTED",
  Stopped: "STOPPED",
} as const;
export type JobStatus9 = (typeof JobStatus9)[keyof typeof JobStatus9] | (string & {});

export const jobStatus9Schema: EnumSchema<JobStatus9> = s.enumOf<JobStatus9>(JobStatus9);
