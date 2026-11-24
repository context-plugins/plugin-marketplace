import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Outcome of a single check. */
export const Status1AgentReadyScansApi = {
  Pass: "pass",
  Fail: "fail",
  Warn: "warn",
  Error: "error",
} as const;
export type Status1AgentReadyScansApi =
  | (typeof Status1AgentReadyScansApi)[keyof typeof Status1AgentReadyScansApi]
  | (string & {});

export const status1AgentReadyScansApiSchema: EnumSchema<Status1AgentReadyScansApi> =
  s.enumOf<Status1AgentReadyScansApi>(Status1AgentReadyScansApi);
