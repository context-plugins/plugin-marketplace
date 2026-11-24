import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Status of the candidate. One of generated, matched, unmatched, discarded. */
export const MatchStatus = {
  Generated: "generated",
  Matched: "matched",
  Unmatched: "unmatched",
  Discarded: "discarded",
} as const;
export type MatchStatus = (typeof MatchStatus)[keyof typeof MatchStatus] | (string & {});

export const matchStatusSchema: EnumSchema<MatchStatus> = s.enumOf<MatchStatus>(MatchStatus);
