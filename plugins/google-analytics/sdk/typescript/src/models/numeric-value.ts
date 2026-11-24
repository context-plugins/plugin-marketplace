import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** To represent a number. */
export type NumericValue = {
  /** Integer value */
  int64Value?: string;
  /** Double value */
  doubleValue?: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const numericValueSchema: Schema<NumericValue> = s.object<NumericValue>(
  {
    int64Value: s.optional(s.string()),
    doubleValue: s.optional(s.float64()),
  },
  { additionalProperties: s.json() },
);
