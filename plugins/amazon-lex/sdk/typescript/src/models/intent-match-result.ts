import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Specifies whether the expected and actual intents match or not. */
export const IntentMatchResult = {
  Matched: "Matched",
  Mismatched: "Mismatched",
  ExecutionError: "ExecutionError",
} as const;
export type IntentMatchResult = (typeof IntentMatchResult)[keyof typeof IntentMatchResult] | (string & {});

export const intentMatchResultSchema: EnumSchema<IntentMatchResult> =
  s.enumOf<IntentMatchResult>(IntentMatchResult);
