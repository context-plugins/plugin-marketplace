import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The sentiment of the mention. */
export const Sentiment1 = {
  Positive: "POSITIVE",
  Negative: "NEGATIVE",
  Neutral: "NEUTRAL",
  Mixed: "MIXED",
} as const;
export type Sentiment1 = (typeof Sentiment1)[keyof typeof Sentiment1] | (string & {});

export const sentiment1Schema: EnumSchema<Sentiment1> = s.enumOf<Sentiment1>(Sentiment1);
