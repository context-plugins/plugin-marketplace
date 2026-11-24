import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/**
 * Product price for `type: SHOPPING_CARD` ads. `currency` and `raw` are always present; `value` is
 * omitted when the number doesn't parse, and the whole object is omitted when no currency appears
 * beside a number. `raw` carries the visible text verbatim (e.g. `"$0 down with 24 monthly
 * payments"` on installment offers) so consumers can disambiguate genuine zero prices from
 * down-payment labels.
 */
export type Price3 = {
  /** Numeric price value */
  value?: number;
  /** Currency symbol */
  currency?: string;
  /** Visible price text verbatim */
  raw?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const price3Schema: Schema<Price3> = s.object<Price3>(
  {
    value: s.optional(s.float64()),
    currency: s.optional(s.string()),
    raw: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
