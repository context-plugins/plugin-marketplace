import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The match type for this filter. */
export const MatchType = {
  MatchTypeUnspecified: "MATCH_TYPE_UNSPECIFIED",
  Exact: "EXACT",
  BeginsWith: "BEGINS_WITH",
  EndsWith: "ENDS_WITH",
  Contains: "CONTAINS",
  FullRegexp: "FULL_REGEXP",
  PartialRegexp: "PARTIAL_REGEXP",
} as const;
export type MatchType = (typeof MatchType)[keyof typeof MatchType] | (string & {});

export const matchTypeSchema: EnumSchema<MatchType> = s.enumOf<MatchType>(MatchType);
