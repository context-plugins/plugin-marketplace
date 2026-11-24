import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { offerTagSchema, type OfferTag } from "./offer-tag.js";
import { priceDetailsSchema, type PriceDetails } from "./price-details.js";

/** Shopping offer with pricing details from a specific merchant */
export type ShoppingOffer = {
  /** Merchant name */
  merchantName?: string;
  /** Merchant subtitle or additional info */
  merchantSubtitle?: string | null;
  /** Third-party seller on the marketplace */
  marketplaceSeller?: string | null;
  /** Seller name */
  sellerName?: string;
  /** Product brand. Set on only some offers, so often `null` or absent. */
  brand?: string | null;
  /** Product name as listed by merchant */
  productName?: string;
  /** Offer URL with attribution */
  url?: string;
  /** Offer price */
  price?: string;
  /** Stock and delivery information */
  details?: string;
  /** Original price before discount */
  originalPrice?: string | null;
  /** Whether the product is available */
  available?: boolean;
  /** Whether the product can be checked out directly */
  checkoutable?: boolean;
  /** Whether this is a digital product */
  isDigital?: boolean | null;
  /** Checkout payload data */
  checkoutPayload?: string | null;
  /** Image URLs for checkout display */
  checkoutImageUrls?: string[] | null;
  /** Shop identifier */
  shopId?: string | null;
  /** Data provider identifier */
  provider?: string;
  /** Detailed price breakdown for an offer */
  priceDetails?: PriceDetails;
  /** Promotional tag on an offer */
  tag?: OfferTag | null;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const shoppingOfferSchema: Schema<ShoppingOffer> = s.object<ShoppingOffer>(
  {
    merchantName: s.optional(s.string()),
    merchantSubtitle: s.optionalNullable(s.string()),
    marketplaceSeller: s.optionalNullable(s.string()),
    sellerName: s.optional(s.string()),
    brand: s.optionalNullable(s.string()),
    productName: s.optional(s.string()),
    url: s.optional(s.string()),
    price: s.optional(s.string()),
    details: s.optional(s.string()),
    originalPrice: s.optionalNullable(s.string()),
    available: s.optional(s.boolean()),
    checkoutable: s.optional(s.boolean()),
    isDigital: s.optionalNullable(s.boolean()),
    checkoutPayload: s.optionalNullable(s.string()),
    checkoutImageUrls: s.optionalNullable(s.array(s.string())),
    shopId: s.optionalNullable(s.string()),
    provider: s.optional(s.string()),
    priceDetails: s.optional(s.lazy(() => priceDetailsSchema)),
    tag: s.optionalNullable(s.lazy(() => offerTagSchema)),
    _keysMap: {
      merchantName: "merchant_name",
      merchantSubtitle: "merchant_subtitle",
      marketplaceSeller: "marketplace_seller",
      sellerName: "seller_name",
      productName: "product_name",
      originalPrice: "original_price",
      isDigital: "is_digital",
      checkoutPayload: "checkout_payload",
      checkoutImageUrls: "checkout_image_urls",
      shopId: "shop_id",
      priceDetails: "price_details",
    },
  },
  { additionalProperties: s.json() },
);
