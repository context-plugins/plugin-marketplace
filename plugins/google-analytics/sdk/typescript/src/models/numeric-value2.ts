import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** A numeric value or a date value. */
export type NumericValue2 = {
  /** Integer value */
  int64Value?: string;
  /** Double value */
  doubleValue?: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const numericValue2Schema: Schema<NumericValue2> = s.object<NumericValue2>(
  {
    int64Value: s.optional(s.string()),
    doubleValue: s.optional(s.float64()),
  },
  { additionalProperties: s.json() },
);
