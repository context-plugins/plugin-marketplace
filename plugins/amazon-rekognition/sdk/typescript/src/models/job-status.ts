import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The current status of the celebrity recognition job. */
export const JobStatus = {
  InProgress: "IN_PROGRESS",
  Succeeded: "SUCCEEDED",
  Failed: "FAILED",
} as const;
export type JobStatus = (typeof JobStatus)[keyof typeof JobStatus] | (string & {});

export const jobStatusSchema: EnumSchema<JobStatus> = s.enumOf<JobStatus>(JobStatus);
