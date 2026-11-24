import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The summary's read of the event for this ticker — an editorial call, not a price label. */
export const Impact = {
  Positive: "positive",
  Negative: "negative",
  Neutral: "neutral",
} as const;
export type Impact = (typeof Impact)[keyof typeof Impact] | (string & {});

export const impactSchema: EnumSchema<Impact> = s.enumOf<Impact>(Impact);
