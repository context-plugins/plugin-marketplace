import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The current status of the person tracking job. */
export const JobStatus1 = {
  InProgress: "IN_PROGRESS",
  Succeeded: "SUCCEEDED",
  Failed: "FAILED",
} as const;
export type JobStatus1 = (typeof JobStatus1)[keyof typeof JobStatus1] | (string & {});

export const jobStatus1Schema: EnumSchema<JobStatus1> = s.enumOf<JobStatus1>(JobStatus1);
