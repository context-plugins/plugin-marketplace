import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/**
 * Required. The amount of money to be credited. The wallet corresponding to the currency specified
 * within `transaction_amount` will be updated. For example, if you specified `currency_code` within
 * `transaction_amount` as "USD", then the amount would be added to the wallet which has the "USD"
 * currency or if no such wallet exists, a new wallet will be created with the "USD" currency.
 */
export type GoogleTypeMoney2 = {
  /**
   * The whole units of the amount. For example if `currencyCode` is `"USD"`, then 1 unit is one US
   * dollar.
   */
  units?: string;
  /**
   * Number of nano (10^-9) units of the amount. The value must be between -999,999,999 and
   * +999,999,999 inclusive. If `units` is positive, `nanos` must be positive or zero. If `units` is
   * zero, `nanos` can be positive, zero, or negative. If `units` is negative, `nanos` must be
   * negative or zero. For example $-1.75 is represented as `units`=-1 and `nanos`=-750,000,000.
   */
  nanos?: number;
  /** The three-letter currency code defined in ISO 4217. */
  currencyCode?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const googleTypeMoney2Schema: Schema<GoogleTypeMoney2> = s.object<GoogleTypeMoney2>(
  {
    units: s.optional(s.string()),
    nanos: s.optional(s.int()),
    currencyCode: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
