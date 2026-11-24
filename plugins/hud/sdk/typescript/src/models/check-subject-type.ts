import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Platform resources supported by the check framework. */
export const CheckSubjectType = {
  Environment: "environment",
  Taskset: "taskset",
  Task: "task",
  Trace: "trace",
} as const;
export type CheckSubjectType = (typeof CheckSubjectType)[keyof typeof CheckSubjectType] | (string & {});

export const checkSubjectTypeSchema: EnumSchema<CheckSubjectType> =
  s.enumOf<CheckSubjectType>(CheckSubjectType);
