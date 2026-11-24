import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Product pricing information */
export type Price = {
  /** Price amount */
  amount?: number;
  /** Currency code (optional) */
  currency?: string;
  /** Currency symbol */
  currencySymbol?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const priceSchema: Schema<Price> = s.object<Price>(
  {
    amount: s.optional(s.float64()),
    currency: s.optional(s.string()),
    currencySymbol: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
