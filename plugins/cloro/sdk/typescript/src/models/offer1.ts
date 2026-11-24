import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { priceDetails2Schema, type PriceDetails2 } from "./price-details2.js";
import { tagSchema, type Tag } from "./tag.js";

export type Offer1 = {
  /** Merchant name */
  merchantName?: string;
  /** Third-party seller on the marketplace */
  marketplaceSeller?: string | null;
  /** Seller name */
  sellerName?: string;
  /** Product brand. Set on only some offers, so often `null` or absent. */
  brand?: string | null;
  /** Product name as listed by merchant */
  productName?: string;
  /** Offer URL with ChatGPT attribution */
  url?: string;
  /** Offer price */
  price?: string;
  /** Stock and delivery information */
  details?: string;
  /** Offer availability status */
  available?: boolean;
  /** Whether offer can be checked out directly */
  checkoutable?: boolean;
  /** Detailed price breakdown */
  priceDetails?: PriceDetails2;
  /** Promotional tag */
  tag?: Tag;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const offer1Schema: Schema<Offer1> = s.object<Offer1>(
  {
    merchantName: s.optional(s.string()),
    marketplaceSeller: s.optionalNullable(s.string()),
    sellerName: s.optional(s.string()),
    brand: s.optionalNullable(s.string()),
    productName: s.optional(s.string()),
    url: s.optional(s.string()),
    price: s.optional(s.string()),
    details: s.optional(s.string()),
    available: s.optional(s.boolean()),
    checkoutable: s.optional(s.boolean()),
    priceDetails: s.optional(s.lazy(() => priceDetails2Schema)),
    tag: s.optional(s.lazy(() => tagSchema)),
    _keysMap: {
      merchantName: "merchant_name",
      marketplaceSeller: "marketplace_seller",
      sellerName: "seller_name",
      productName: "product_name",
      priceDetails: "price_details",
    },
  },
  { additionalProperties: s.json() },
);
