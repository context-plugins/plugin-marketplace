import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Further defines how to handle multiple matches: return the first match, the most specific match,
 * or all matches
 */
export const MatchType = {
  First: "first",
  Specific: "specific",
  All: "all",
} as const;
export type MatchType = (typeof MatchType)[keyof typeof MatchType] | (string & {});

export const matchTypeSchema: EnumSchema<MatchType> = s.enumOf<MatchType>(MatchType);
