import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Candidate metrics for the FindAll run. */
export type FindAllCandidateMetrics1 = {
  /** Number of candidates that were selected. @default 0 */
  generatedCandidatesCount?: number;
  /** Number of candidates that evaluated to matched. @default 0 */
  matchedCandidatesCount?: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const findAllCandidateMetrics1Schema: Schema<FindAllCandidateMetrics1> =
  s.object<FindAllCandidateMetrics1>(
    {
      generatedCandidatesCount: s.defaulted(s.int(), 0),
      matchedCandidatesCount: s.defaulted(s.int(), 0),
      _keysMap: {
        generatedCandidatesCount: "generated_candidates_count",
        matchedCandidatesCount: "matched_candidates_count",
      },
    },
    { additionalProperties: s.json() },
  );
