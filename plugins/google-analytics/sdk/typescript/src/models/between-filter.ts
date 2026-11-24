import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { numericValue1Schema, type NumericValue1 } from "./numeric-value1.js";
import { numericValue4Schema, type NumericValue4 } from "./numeric-value4.js";

/** To express that the result needs to be between two numbers (inclusive). */
export type BetweenFilter = {
  /** Ends with this number. */
  toValue?: NumericValue4;
  /** Begins with this number. */
  fromValue?: NumericValue1;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const betweenFilterSchema: Schema<BetweenFilter> = s.object<BetweenFilter>(
  {
    toValue: s.optional(s.lazy(() => numericValue4Schema)),
    fromValue: s.optional(s.lazy(() => numericValue1Schema)),
  },
  { additionalProperties: s.json() },
);
