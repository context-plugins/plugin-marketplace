import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The inferred sentiment that Amazon Comprehend has the highest level of confidence in. */
export const SentimentAmazonComprehendOperationsApi = {
  Positive: "POSITIVE",
  Negative: "NEGATIVE",
  Neutral: "NEUTRAL",
  Mixed: "MIXED",
} as const;
export type SentimentAmazonComprehendOperationsApi =
  | (typeof SentimentAmazonComprehendOperationsApi)[keyof typeof SentimentAmazonComprehendOperationsApi]
  | (string & {});

export const sentimentAmazonComprehendOperationsApiSchema: EnumSchema<SentimentAmazonComprehendOperationsApi> =
  s.enumOf<SentimentAmazonComprehendOperationsApi>(SentimentAmazonComprehendOperationsApi);
