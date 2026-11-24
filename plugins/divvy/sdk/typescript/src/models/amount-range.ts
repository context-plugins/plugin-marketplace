import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type AmountRange = {
  /** Amount range start */
  from?: number;
  /** Amount range end */
  to?: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const amountRangeSchema: Schema<AmountRange> = s.object<AmountRange>(
  {
    from: s.optional(s.float64()),
    to: s.optional(s.float64()),
  },
  { additionalProperties: s.json() },
);
