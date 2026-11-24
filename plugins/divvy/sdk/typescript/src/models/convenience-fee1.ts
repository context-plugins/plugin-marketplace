import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type ConvenienceFee1 = {
  /** Convenience fee percentage */
  percentage?: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const convenienceFee1Schema: Schema<ConvenienceFee1> = s.object<ConvenienceFee1>(
  {
    percentage: s.optional(s.float64()),
  },
  { additionalProperties: s.json() },
);
