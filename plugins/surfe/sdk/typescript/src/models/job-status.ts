import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const JobStatus = {
  Pending: "PENDING",
  InProgress: "IN_PROGRESS",
  Completed: "COMPLETED",
  Failed: "FAILED",
} as const;
export type JobStatus = (typeof JobStatus)[keyof typeof JobStatus] | (string & {});

export const jobStatusSchema: EnumSchema<JobStatus> = s.enumOf<JobStatus>(JobStatus);
