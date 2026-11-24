import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Ends with this number. */
export type NumericValue4 = {
  /** Integer value */
  int64Value?: string;
  /** Double value */
  doubleValue?: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const numericValue4Schema: Schema<NumericValue4> = s.object<NumericValue4>(
  {
    int64Value: s.optional(s.string()),
    doubleValue: s.optional(s.float64()),
  },
  { additionalProperties: s.json() },
);
