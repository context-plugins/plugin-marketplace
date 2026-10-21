import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Job type */
export const JobType = {
  Collection: "collection",
  Executor: "executor",
  ScheduledSearch: "scheduledSearch",
} as const;
export type JobType = (typeof JobType)[keyof typeof JobType] | (string & {});

export const jobTypeSchema: EnumSchema<JobType> = s.enumOf<JobType>(JobType);
