import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** What a check judges: a completed evaluation trace, or a task's current version. */
export const QaSubjectType = {
  Trace: "trace",
  Task: "task",
} as const;
export type QaSubjectType = (typeof QaSubjectType)[keyof typeof QaSubjectType] | (string & {});

export const qaSubjectTypeSchema: EnumSchema<QaSubjectType> = s.enumOf<QaSubjectType>(QaSubjectType);
