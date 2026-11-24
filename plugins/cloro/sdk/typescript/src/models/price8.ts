import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/**
 * Price as displayed. Fields that can't be parsed are omitted, never sent as `null`. When Google
 * supplies structured price data, `currency` is an ISO code (`USD`) and `raw` appears only if the
 * page also showed the price text.
 */
export type Price8 = {
  /** Numeric price */
  value?: number;
  /** Currency symbol as displayed, or an ISO code when Google supplies structured price data */
  currency?: string;
  /** Visible price text verbatim */
  raw?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const price8Schema: Schema<Price8> = s.object<Price8>(
  {
    value: s.optional(s.float64()),
    currency: s.optional(s.string()),
    raw: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
