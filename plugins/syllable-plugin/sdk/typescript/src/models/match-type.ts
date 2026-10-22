import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Matching strategy for override text. */
export const MatchType = {
  Exact: "exact",
  Substring: "substring",
} as const;
export type MatchType = (typeof MatchType)[keyof typeof MatchType] | (string & {});

export const matchTypeSchema: EnumSchema<MatchType> = s.enumOf<MatchType>(MatchType);
