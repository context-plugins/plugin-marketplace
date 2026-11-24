import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Priority level for the job queue */
export const JobPriority = {
  Low: "Low",
  Normal: "Normal",
  High: "High",
} as const;
export type JobPriority = (typeof JobPriority)[keyof typeof JobPriority] | (string & {});

export const jobPrioritySchema: EnumSchema<JobPriority> = s.enumOf<JobPriority>(JobPriority);
