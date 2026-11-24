import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Event type; one of findall.candidate.generated, findall.candidate.matched,
 * findall.candidate.unmatched, findall.candidate.discarded, findall.candidate.enriched.
 */
export const Type2 = {
  FindallCandidateGenerated: "findall.candidate.generated",
  FindallCandidateMatched: "findall.candidate.matched",
  FindallCandidateUnmatched: "findall.candidate.unmatched",
  FindallCandidateDiscarded: "findall.candidate.discarded",
  FindallCandidateEnriched: "findall.candidate.enriched",
} as const;
export type Type2 = (typeof Type2)[keyof typeof Type2] | (string & {});

export const type2Schema: EnumSchema<Type2> = s.enumOf<Type2>(Type2);
