import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Initial, one-time fee paid when purchasing the API product. */
export type GoogleTypeMoney6 = {
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

export const googleTypeMoney6Schema: Schema<GoogleTypeMoney6> = s.object<GoogleTypeMoney6>(
  {
    units: s.optional(s.string()),
    nanos: s.optional(s.int()),
    currencyCode: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
