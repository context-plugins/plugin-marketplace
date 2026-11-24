import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const JobStatus = {
  Pending: "pending",
  Running: "running",
  Completed: "completed",
  Error: "error",
  Cancelling: "cancelling",
  Cancelled: "cancelled",
} as const;
export type JobStatus = (typeof JobStatus)[keyof typeof JobStatus] | (string & {});

export const jobStatusSchema: EnumSchema<JobStatus> = s.enumOf<JobStatus>(JobStatus);
