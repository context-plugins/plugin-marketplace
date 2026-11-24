import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { offerSchema, type Offer } from "./offer.js";

export type Product2 = {
  /** Product name */
  title?: string;
  /** Product identifier */
  id?: string;
  /** Product page URL */
  url?: string;
  /** Current price */
  price?: string;
  /** Merchant name */
  merchant?: string;
  /** Whether the product is currently available */
  available?: boolean;
  /** Product image URLs */
  imageUrls?: string[];
  /** Number of reviews (0 when none) */
  numReviews?: number;
  /** Shopping offers from individual merchants */
  offers?: Offer[];
  /**
   * 1-indexed rank across all products in all shopping cards in the response (flat, not reset per
   * card)
   */
  position?: number;
  /** Product rating (0-5 scale) */
  rating?: number;
  /** Original price before discount; null when not on sale */
  originalPrice?: string | null;
  /** Product description */
  description?: string;
  /** Product variants (size, color, etc.) */
  variants?: Record<string, unknown>[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const product2Schema: Schema<Product2> = s.object<Product2>(
  {
    title: s.optional(s.string()),
    id: s.optional(s.string()),
    url: s.optional(s.string()),
    price: s.optional(s.string()),
    merchant: s.optional(s.string()),
    available: s.optional(s.boolean()),
    imageUrls: s.optional(s.array(s.string())),
    numReviews: s.optional(s.float64()),
    offers: s.optional(s.array(s.lazy(() => offerSchema))),
    position: s.optional(s.int()),
    rating: s.optional(s.float64()),
    originalPrice: s.optionalNullable(s.string()),
    description: s.optional(s.string()),
    variants: s.optional(s.array(s.record(s.string(), s.unknown()))),
    _keysMap: {
      originalPrice: "original_price",
    },
  },
  { additionalProperties: s.json() },
);
