import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * AI confidence in the answer. Present only on `bot_response` messages, and only when the model
 * emitted a trailing confidence block.
 *
 * This field is now optional and nullable; it was previously always present and non-nullable. Treat
 * a missing or `null` value as "no confidence reported" and guard before using it. Change effective
 * in SDK v1.2.0 (v1.1.0 and earlier always populated it).
 */
export const Confidence1 = {
  VeryHigh: "Very High",
  High: "High",
  Medium: "Medium",
  Low: "Low",
  Unknown: "Unknown",
} as const;
export type Confidence1 = (typeof Confidence1)[keyof typeof Confidence1] | (string & {});

export const confidence1Schema: EnumSchema<Confidence1> = s.enumOf<Confidence1>(Confidence1);
