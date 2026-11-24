import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The overall sentiment expressed in the user's response. This is the sentiment most likely
 * expressed by the user based on the analysis by Amazon Comprehend.
 */
export const Sentiment = {
  Mixed: "MIXED",
  Negative: "NEGATIVE",
  Neutral: "NEUTRAL",
  Positive: "POSITIVE",
} as const;
export type Sentiment = (typeof Sentiment)[keyof typeof Sentiment] | (string & {});

export const sentimentSchema: EnumSchema<Sentiment> = s.enumOf<Sentiment>(Sentiment);
