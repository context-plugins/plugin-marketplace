import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The status of the job. */
export const JobStatus23 = {
  Submitted: "SUBMITTED",
  InProgress: "IN_PROGRESS",
  Completed: "COMPLETED",
  Failed: "FAILED",
  StopRequested: "STOP_REQUESTED",
  Stopped: "STOPPED",
} as const;
export type JobStatus23 = (typeof JobStatus23)[keyof typeof JobStatus23] | (string & {});

export const jobStatus23Schema: EnumSchema<JobStatus23> = s.enumOf<JobStatus23>(JobStatus23);
