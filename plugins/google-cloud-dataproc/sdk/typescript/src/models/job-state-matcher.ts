import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const JobStateMatcher = {
  All: "ALL",
  Active: "ACTIVE",
  NonActive: "NON_ACTIVE",
} as const;
export type JobStateMatcher = (typeof JobStateMatcher)[keyof typeof JobStateMatcher] | (string & {});

export const jobStateMatcherSchema: EnumSchema<JobStateMatcher> = s.enumOf<JobStateMatcher>(JobStateMatcher);
