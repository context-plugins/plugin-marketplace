import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { listingType1Schema, type ListingType1 } from "./listing-type1.js";
import { sellerType1Schema, type SellerType1 } from "./seller-type1.js";
import { shippingTypeSchema, type ShippingType } from "./shipping-type.js";

export type SoldItem = {
  itemId?: string;
  url?: string;
  title?: string;
  condition?: string | null;
  /** Best-effort mapping of a known localized eBay condition label. */
  conditionId?: number | null;
  /** Labeled seller classification on EU marketplaces. */
  sellerType?: SellerType1 | null;
  listingType?: ListingType1;
  /**
   * true when eBay marked an accepted Best Offer; null when no accepted-offer marker was detected.
   * eBay does not disclose the accepted amount.
   */
  bestOfferAccepted?: boolean | null;
  /** Decimal string. */
  soldPrice?: string;
  /** ISO 4217. */
  soldCurrency?: string;
  shippingPrice?: string | null;
  shippingType?: ShippingType | null;
  totalPrice?: string | null;
  /** YYYY-MM-DD sold date. */
  endedAt?: string;
  sellerUsername?: string | null;
  sellerFeedbackScore?: number | null;
  /**
   * eBay catalog star rating shown on the result card. This describes the product, not the seller.
   */
  productRating?: number | null;
  /** Number of eBay catalog ratings behind productRating. */
  productReviewCount?: number | null;
  itemLocation?: string | null;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const soldItemProperties: s.Shape<SoldItem> = {
  itemId: s.optional(s.string()),
  url: s.optional(s.string()),
  title: s.optional(s.string()),
  condition: s.optionalNullable(s.string()),
  conditionId: s.optionalNullable(s.int()),
  sellerType: s.optionalNullable(s.lazy(() => sellerType1Schema)),
  listingType: s.optional(s.lazy(() => listingType1Schema)),
  bestOfferAccepted: s.optionalNullable(s.boolean()),
  soldPrice: s.optional(s.string()),
  soldCurrency: s.optional(s.string()),
  shippingPrice: s.optionalNullable(s.string()),
  shippingType: s.optionalNullable(s.lazy(() => shippingTypeSchema)),
  totalPrice: s.optionalNullable(s.string()),
  endedAt: s.optional(s.string()),
  sellerUsername: s.optionalNullable(s.string()),
  sellerFeedbackScore: s.optionalNullable(s.int()),
  productRating: s.optionalNullable(s.float64()),
  productReviewCount: s.optionalNullable(s.int()),
  itemLocation: s.optionalNullable(s.string()),
};

export const soldItemInternalSchema: Schema<SoldItem> = s.object<SoldItem>(soldItemProperties, {
  additionalProperties: s.json(),
});

export const soldItemSchema: Schema<SoldItem> = s.lazySchema(() =>
  s.object<SoldItem>(
    {
      ...soldItemProperties,
      productRating: s.optionalNullable(s.float64().check(s.gte(0), s.lte(5))),
      productReviewCount: s.optionalNullable(s.int().check(s.gte(0))),
    },
    { additionalProperties: s.json() },
  ),
);
