import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const CheckRuns = {
  Done: "done",
  Cached: "cached",
  Skipped: "skipped",
  NotApplicable: "not_applicable",
  Failed: "failed",
} as const;
export type CheckRuns = (typeof CheckRuns)[keyof typeof CheckRuns] | (string & {});

export const checkRunsSchema: EnumSchema<CheckRuns> = s.enumOf<CheckRuns>(CheckRuns);
