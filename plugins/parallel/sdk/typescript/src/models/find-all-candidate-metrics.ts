import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Metrics object for FindAll run. */
export type FindAllCandidateMetrics = {
  /** Number of candidates that were selected. @default 0 */
  generatedCandidatesCount?: number;
  /** Number of candidates that evaluated to matched. @default 0 */
  matchedCandidatesCount?: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const findAllCandidateMetricsSchema: Schema<FindAllCandidateMetrics> =
  s.object<FindAllCandidateMetrics>(
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
