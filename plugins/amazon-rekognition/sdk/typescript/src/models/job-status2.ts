import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Current status of the segment detection job. */
export const JobStatus2 = {
  InProgress: "IN_PROGRESS",
  Succeeded: "SUCCEEDED",
  Failed: "FAILED",
} as const;
export type JobStatus2 = (typeof JobStatus2)[keyof typeof JobStatus2] | (string & {});

export const jobStatus2Schema: EnumSchema<JobStatus2> = s.enumOf<JobStatus2>(JobStatus2);
