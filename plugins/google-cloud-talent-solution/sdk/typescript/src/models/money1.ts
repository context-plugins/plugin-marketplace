import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/**
 * The minimum amount of compensation. If left empty, the value is set to zero and the currency code
 * is set to match the currency code of max_compensation.
 */
export type Money1 = {
  /**
   * The whole units of the amount. For example if `currencyCode` is `"USD"`, then 1 unit is one US
   * dollar.
   */
  units?: string;
  /** The three-letter currency code defined in ISO 4217. */
  currencyCode?: string;
  /**
   * Number of nano (10^-9) units of the amount. The value must be between -999,999,999 and
   * +999,999,999 inclusive. If `units` is positive, `nanos` must be positive or zero. If `units` is
   * zero, `nanos` can be positive, zero, or negative. If `units` is negative, `nanos` must be
   * negative or zero. For example $-1.75 is represented as `units`=-1 and `nanos`=-750,000,000.
   */
  nanos?: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const money1Schema: Schema<Money1> = s.object<Money1>(
  {
    units: s.optional(s.string()),
    currencyCode: s.optional(s.string()),
    nanos: s.optional(s.int()),
  },
  { additionalProperties: s.json() },
);
