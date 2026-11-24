import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Filters the list of topic detection jobs based on job status. Returns only jobs with the
 * specified status.
 */
export const JobStatus17 = {
  Submitted: "SUBMITTED",
  InProgress: "IN_PROGRESS",
  Completed: "COMPLETED",
  Failed: "FAILED",
  StopRequested: "STOP_REQUESTED",
  Stopped: "STOPPED",
} as const;
export type JobStatus17 = (typeof JobStatus17)[keyof typeof JobStatus17] | (string & {});

export const jobStatus17Schema: EnumSchema<JobStatus17> = s.enumOf<JobStatus17>(JobStatus17);
