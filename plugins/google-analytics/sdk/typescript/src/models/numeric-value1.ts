import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Begins with this number. */
export type NumericValue1 = {
  /** Integer value */
  int64Value?: string;
  /** Double value */
  doubleValue?: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const numericValue1Schema: Schema<NumericValue1> = s.object<NumericValue1>(
  {
    int64Value: s.optional(s.string()),
    doubleValue: s.optional(s.float64()),
  },
  { additionalProperties: s.json() },
);
