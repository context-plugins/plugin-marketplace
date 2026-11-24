import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type ConfidenceScore = {
  /**
   * A score that indicates how confident Amazon Lex V2 is that an intent satisfies the user's
   * intent. Ranges between 0.00 and 1.00. Higher scores indicate higher confidence.
   */
  score?: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const confidenceScoreSchema: Schema<ConfidenceScore> = s.object<ConfidenceScore>(
  {
    score: s.optional(s.float64()),
  },
  { additionalProperties: s.json() },
);
