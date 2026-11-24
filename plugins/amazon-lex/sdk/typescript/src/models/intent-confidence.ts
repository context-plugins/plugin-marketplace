import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type IntentConfidence = {
  /**
   * A score that indicates how confident Amazon Lex is that an intent satisfies the user's intent.
   * Ranges between 0.00 and 1.00. Higher scores indicate higher confidence.
   */
  score?: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const intentConfidenceSchema: Schema<IntentConfidence> = s.object<IntentConfidence>(
  {
    score: s.optional(s.float64()),
  },
  { additionalProperties: s.json() },
);
