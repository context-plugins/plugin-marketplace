import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Provides the sentiment that was detected in the specified segment. */
export const SentimentAmazonTranscribeServiceOperationsApi = {
  Positive: "POSITIVE",
  Negative: "NEGATIVE",
  Mixed: "MIXED",
  Neutral: "NEUTRAL",
} as const;
export type SentimentAmazonTranscribeServiceOperationsApi =
  | (typeof SentimentAmazonTranscribeServiceOperationsApi)[keyof typeof SentimentAmazonTranscribeServiceOperationsApi]
  | (string & {});

export const sentimentAmazonTranscribeServiceOperationsApiSchema: EnumSchema<SentimentAmazonTranscribeServiceOperationsApi> =
  s.enumOf<SentimentAmazonTranscribeServiceOperationsApi>(SentimentAmazonTranscribeServiceOperationsApi);
