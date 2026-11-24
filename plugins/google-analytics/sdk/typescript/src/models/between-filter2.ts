import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { numericValue1Schema, type NumericValue1 } from "./numeric-value1.js";
import { numericValue4Schema, type NumericValue4 } from "./numeric-value4.js";

/** A filter for two values. */
export type BetweenFilter2 = {
  /** Ends with this number. */
  toValue?: NumericValue4;
  /** Begins with this number. */
  fromValue?: NumericValue1;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const betweenFilter2Schema: Schema<BetweenFilter2> = s.object<BetweenFilter2>(
  {
    toValue: s.optional(s.lazy(() => numericValue4Schema)),
    fromValue: s.optional(s.lazy(() => numericValue1Schema)),
  },
  { additionalProperties: s.json() },
);
