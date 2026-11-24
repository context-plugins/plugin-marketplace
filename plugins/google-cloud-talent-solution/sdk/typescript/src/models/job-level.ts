import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The experience level associated with the job, such as "Entry Level". */
export const JobLevel = {
  JobLevelUnspecified: "JOB_LEVEL_UNSPECIFIED",
  EntryLevel: "ENTRY_LEVEL",
  Experienced: "EXPERIENCED",
  Manager: "MANAGER",
  Director: "DIRECTOR",
  Executive: "EXECUTIVE",
} as const;
export type JobLevel = (typeof JobLevel)[keyof typeof JobLevel] | (string & {});

export const jobLevelSchema: EnumSchema<JobLevel> = s.enumOf<JobLevel>(JobLevel);
