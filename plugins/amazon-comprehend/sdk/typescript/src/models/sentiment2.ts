import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The inferred sentiment that Amazon Comprehend has the highest level of confidence in. */
export const Sentiment2 = {
  Positive: "POSITIVE",
  Negative: "NEGATIVE",
  Neutral: "NEUTRAL",
  Mixed: "MIXED",
} as const;
export type Sentiment2 = (typeof Sentiment2)[keyof typeof Sentiment2] | (string & {});

export const sentiment2Schema: EnumSchema<Sentiment2> = s.enumOf<Sentiment2>(Sentiment2);
