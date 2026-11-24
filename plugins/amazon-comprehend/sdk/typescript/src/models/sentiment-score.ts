import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type SentimentScore = {
  /**
   * The level of confidence that Amazon Comprehend has in the accuracy of its detection of the
   * POSITIVE sentiment.
   */
  positive?: number;
  /**
   * The level of confidence that Amazon Comprehend has in the accuracy of its detection of the
   * NEGATIVE sentiment.
   */
  negative?: number;
  /**
   * The level of confidence that Amazon Comprehend has in the accuracy of its detection of the
   * NEUTRAL sentiment.
   */
  neutral?: number;
  /**
   * The level of confidence that Amazon Comprehend has in the accuracy of its detection of the
   * MIXED sentiment.
   */
  mixed?: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const sentimentScoreSchema: Schema<SentimentScore> = s.object<SentimentScore>(
  {
    positive: s.optional(s.float64()),
    negative: s.optional(s.float64()),
    neutral: s.optional(s.float64()),
    mixed: s.optional(s.float64()),
    _keysMap: {
      positive: "Positive",
      negative: "Negative",
      neutral: "Neutral",
      mixed: "Mixed",
    },
  },
  { additionalProperties: s.json() },
);
