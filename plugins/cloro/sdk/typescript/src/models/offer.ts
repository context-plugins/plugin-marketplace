import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { priceDetails5Schema, type PriceDetails5 } from "./price-details5.js";

export type Offer = {
  /** Offer URL with Perplexity referral parameters */
  url?: string;
  /** Offer price */
  price?: string;
  /** Merchant name */
  merchantName?: string;
  /** Product name as listed by the merchant */
  productName?: string;
  /** Whether the offer is in stock */
  available?: boolean;
  /** Detailed price breakdown */
  priceDetails?: PriceDetails5;
  /** Original price before discount; null when not on sale */
  originalPrice?: string | null;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const offerSchema: Schema<Offer> = s.object<Offer>(
  {
    url: s.optional(s.string()),
    price: s.optional(s.string()),
    merchantName: s.optional(s.string()),
    productName: s.optional(s.string()),
    available: s.optional(s.boolean()),
    priceDetails: s.optional(s.lazy(() => priceDetails5Schema)),
    originalPrice: s.optionalNullable(s.string()),
    _keysMap: {
      merchantName: "merchant_name",
      productName: "product_name",
      priceDetails: "price_details",
      originalPrice: "original_price",
    },
  },
  { additionalProperties: s.json() },
);
