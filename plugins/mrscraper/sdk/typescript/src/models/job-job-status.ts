import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const JobJobStatus = {
  Pending: "PENDING",
  Processing: "PROCESSING",
  Completed: "COMPLETED",
  Failed: "FAILED",
} as const;
export type JobJobStatus = (typeof JobJobStatus)[keyof typeof JobJobStatus] | (string & {});

export const jobJobStatusSchema: EnumSchema<JobJobStatus> = s.enumOf<JobJobStatus>(JobJobStatus);
