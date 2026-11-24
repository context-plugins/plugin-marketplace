import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type CompactSoldItem = {
  itemId?: string;
  title?: string | null;
  soldPrice?: string | null;
  currency?: string | null;
  shippingPrice?: string | null;
  totalPrice?: string | null;
  condition?: string | null;
  /**
   * true when eBay marked an accepted Best Offer; null otherwise. The accepted amount is not
   * disclosed.
   */
  bestOfferAccepted?: boolean | null;
  soldDate?: string | null;
  sellerUsername?: string | null;
  url?: string | null;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const compactSoldItemSchema: Schema<CompactSoldItem> = s.object<CompactSoldItem>(
  {
    itemId: s.optional(s.string()),
    title: s.optionalNullable(s.string()),
    soldPrice: s.optionalNullable(s.string()),
    currency: s.optionalNullable(s.string()),
    shippingPrice: s.optionalNullable(s.string()),
    totalPrice: s.optionalNullable(s.string()),
    condition: s.optionalNullable(s.string()),
    bestOfferAccepted: s.optionalNullable(s.boolean()),
    soldDate: s.optionalNullable(s.string()),
    sellerUsername: s.optionalNullable(s.string()),
    url: s.optionalNullable(s.string()),
  },
  { additionalProperties: s.json() },
);
