import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Detailed price breakdown for an offer */
export type PriceDetails = {
  /** Formatted display price */
  displayPrice?: string | null;
  /** Base product price */
  base?: string;
  /** Shipping cost */
  shipping?: string | null;
  /** Tax amount */
  tax?: string | null;
  /** Total price */
  total?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const priceDetailsSchema: Schema<PriceDetails> = s.object<PriceDetails>(
  {
    displayPrice: s.optionalNullable(s.string()),
    base: s.optional(s.string()),
    shipping: s.optionalNullable(s.string()),
    tax: s.optionalNullable(s.string()),
    total: s.optional(s.string()),
    _keysMap: {
      displayPrice: "display_price",
    },
  },
  { additionalProperties: s.json() },
);
