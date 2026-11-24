import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Aggregate sentiment scores for the story. */
export type SentimentHolder = {
  /** Positive sentiment score from 0 to 1. */
  positive?: number | null;
  /** Negative sentiment score from 0 to 1. */
  negative?: number | null;
  /** Neutral sentiment score from 0 to 1. */
  neutral?: number | null;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const sentimentHolderSchema: Schema<SentimentHolder> = s.object<SentimentHolder>(
  {
    positive: s.optionalNullable(s.float64()),
    negative: s.optionalNullable(s.float64()),
    neutral: s.optionalNullable(s.float64()),
  },
  { additionalProperties: s.json() },
);
