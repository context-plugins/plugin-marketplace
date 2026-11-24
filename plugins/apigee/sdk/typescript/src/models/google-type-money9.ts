import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/**
 * Required. * A positive value of `adjustment` means that that the API provider wants to adjust the
 * balance for an under-charged AppGroup i.e. the balance of the AppGroup will decrease. * A
 * negative value of `adjustment` is not supported. Use credit balance API instead.
 */
export type GoogleTypeMoney9 = {
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

export const googleTypeMoney9Schema: Schema<GoogleTypeMoney9> = s.object<GoogleTypeMoney9>(
  {
    units: s.optional(s.string()),
    nanos: s.optional(s.int()),
    currencyCode: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
