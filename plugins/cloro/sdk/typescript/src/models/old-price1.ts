import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/**
 * Original price before discount on `type: SHOPPING_CARD` ads that surface MSRP / sale messaging.
 * Same shape as `price`.
 */
export type OldPrice1 = {
  /** Numeric price value */
  value?: number;
  /** Currency symbol */
  currency?: string;
  /** Visible price text verbatim */
  raw?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const oldPrice1Schema: Schema<OldPrice1> = s.object<OldPrice1>(
  {
    value: s.optional(s.float64()),
    currency: s.optional(s.string()),
    raw: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
