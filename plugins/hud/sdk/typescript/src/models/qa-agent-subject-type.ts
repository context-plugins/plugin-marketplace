import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Canonical resources a QA agent can analyze. */
export const QaAgentSubjectType = {
  Trace: "trace",
  Environment: "environment",
  Taskset: "taskset",
  Task: "task",
} as const;
export type QaAgentSubjectType = (typeof QaAgentSubjectType)[keyof typeof QaAgentSubjectType] | (string & {});

export const qaAgentSubjectTypeSchema: EnumSchema<QaAgentSubjectType> =
  s.enumOf<QaAgentSubjectType>(QaAgentSubjectType);
