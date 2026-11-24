import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { matchStatusSchema, type MatchStatus } from "./match-status.js";
import { basisSchema, type Basis } from "./unions/basis.js";
import { descriptionSchema, type Description } from "./unions/description.js";
import {
  outputParallelAiFindAllApiSchema,
  type OutputParallelAiFindAllApi,
} from "./unions/output-parallel-ai-find-all-api.js";

/**
 * Candidate for a find all run that may end up as a match.
 *
 * Contains all the candidate's metadata and the output of the match conditions. A candidate is a
 * match if all match conditions are satisfied.
 */
export type FindAllCandidate = {
  /** ID of the candidate. */
  candidateId: string;
  /** Name of the candidate. */
  name: string;
  /** URL that provides context or details of the entity for disambiguation. */
  url: string;
  /** Brief description of the entity that can help answer whether entity satisfies the query. */
  description?: Description;
  /** Status of the candidate. One of generated, matched, unmatched, discarded. */
  matchStatus: MatchStatus;
  /**
   * Results of the match condition evaluations for this candidate. This object contains the
   * structured output that determines whether the candidate matches the overall FindAll objective.
   */
  output?: OutputParallelAiFindAllApi;
  /** List of FieldBasis objects supporting the output. */
  basis?: Basis;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const findAllCandidateSchema: Schema<FindAllCandidate> = s.object<FindAllCandidate>(
  {
    candidateId: s.string(),
    name: s.string(),
    url: s.string(),
    description: s.optional(s.lazy(() => descriptionSchema)),
    matchStatus: matchStatusSchema,
    output: s.optional(s.lazy(() => outputParallelAiFindAllApiSchema)),
    basis: s.optional(s.lazy(() => basisSchema)),
    _keysMap: {
      candidateId: "candidate_id",
      matchStatus: "match_status",
    },
  },
  { additionalProperties: s.json() },
);
