import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The number of times the specific intent is used in the evaluation of intent level success or
 * failure.
 */
export const MatchResult = {
  Matched: "Matched",
  Mismatched: "Mismatched",
  ExecutionError: "ExecutionError",
} as const;
export type MatchResult = (typeof MatchResult)[keyof typeof MatchResult] | (string & {});

export const matchResultSchema: EnumSchema<MatchResult> = s.enumOf<MatchResult>(MatchResult);
