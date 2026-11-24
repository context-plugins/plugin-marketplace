import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The number of matching slots used in the slots listings for the slot resolution evaluation. */
export const MatchResult1 = {
  Matched: "Matched",
  Mismatched: "Mismatched",
  ExecutionError: "ExecutionError",
} as const;
export type MatchResult1 = (typeof MatchResult1)[keyof typeof MatchResult1] | (string & {});

export const matchResult1Schema: EnumSchema<MatchResult1> = s.enumOf<MatchResult1>(MatchResult1);
