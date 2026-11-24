import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Lifecycle states for a platform check run. */
export const CheckRunStatus = {
  Running: "running",
  Passed: "passed",
  Failed: "failed",
  Error: "error",
} as const;
export type CheckRunStatus = (typeof CheckRunStatus)[keyof typeof CheckRunStatus] | (string & {});

export const checkRunStatusSchema: EnumSchema<CheckRunStatus> = s.enumOf<CheckRunStatus>(CheckRunStatus);
