import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const Sentiment = {
  Positive: "POSITIVE",
  Negative: "NEGATIVE",
  Neutral: "NEUTRAL",
  Mixed: "MIXED",
} as const;
export type Sentiment = (typeof Sentiment)[keyof typeof Sentiment] | (string & {});

export const sentimentSchema: EnumSchema<Sentiment> = s.enumOf<Sentiment>(Sentiment);
