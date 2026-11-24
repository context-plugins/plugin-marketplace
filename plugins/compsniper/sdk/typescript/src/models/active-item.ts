import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  buyingFormatCompSniperMarketplaceAndShippingScrapeApiSchema,
  type BuyingFormatCompSniperMarketplaceAndShippingScrapeApi,
} from "./buying-format-comp-sniper-marketplace-and-shipping-scrape-api.js";
import { listingTypeSchema, type ListingType } from "./listing-type.js";
import { sellerTypeSchema, type SellerType } from "./seller-type.js";
import { shippingTypeSchema, type ShippingType } from "./shipping-type.js";

/**
 * A current eBay listing returned when sold=false. Demand fields are null when eBay does not show
 * them on the search card.
 */
export type ActiveItem = {
  itemId?: string;
  url?: string;
  title?: string;
  condition?: string | null;
  conditionId?: number | null;
  sellerType?: SellerType | null;
  listingType?: ListingType;
  buyingFormat?: BuyingFormatCompSniperMarketplaceAndShippingScrapeApi | null;
  bidCount?: number | null;
  /** Current asking or bid price as a decimal string. */
  currentPrice?: string;
  /** Upper bound when eBay displays a price range. */
  currentPriceMax?: string | null;
  /** ISO 4217. */
  currentCurrency?: string;
  watcherCount?: number | null;
  unitsSold?: number | null;
  acceptsOffers?: boolean;
  /** Raw localized time remaining when visible. */
  timeLeft?: string | null;
  shippingPrice?: string | null;
  shippingType?: ShippingType;
  totalPrice?: string | null;
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

const activeItemProperties: s.Shape<ActiveItem> = {
  itemId: s.optional(s.string()),
  url: s.optional(s.string()),
  title: s.optional(s.string()),
  condition: s.optionalNullable(s.string()),
  conditionId: s.optionalNullable(s.int()),
  sellerType: s.optionalNullable(s.lazy(() => sellerTypeSchema)),
  listingType: s.optional(s.lazy(() => listingTypeSchema)),
  buyingFormat: s.optionalNullable(s.lazy(() => buyingFormatCompSniperMarketplaceAndShippingScrapeApiSchema)),
  bidCount: s.optionalNullable(s.int()),
  currentPrice: s.optional(s.string()),
  currentPriceMax: s.optionalNullable(s.string()),
  currentCurrency: s.optional(s.string()),
  watcherCount: s.optionalNullable(s.int()),
  unitsSold: s.optionalNullable(s.int()),
  acceptsOffers: s.optional(s.boolean()),
  timeLeft: s.optionalNullable(s.string()),
  shippingPrice: s.optionalNullable(s.string()),
  shippingType: s.optional(s.lazy(() => shippingTypeSchema)),
  totalPrice: s.optionalNullable(s.string()),
  sellerUsername: s.optionalNullable(s.string()),
  sellerFeedbackScore: s.optionalNullable(s.int()),
  productRating: s.optionalNullable(s.float64()),
  productReviewCount: s.optionalNullable(s.int()),
  itemLocation: s.optionalNullable(s.string()),
};

export const activeItemInternalSchema: Schema<ActiveItem> = s.object<ActiveItem>(activeItemProperties, {
  additionalProperties: s.json(),
});

export const activeItemSchema: Schema<ActiveItem> = s.lazySchema(() =>
  s.object<ActiveItem>(
    {
      ...activeItemProperties,
      productRating: s.optionalNullable(s.float64().check(s.gte(0), s.lte(5))),
      productReviewCount: s.optionalNullable(s.int().check(s.gte(0))),
    },
    { additionalProperties: s.json() },
  ),
);
