import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { offer1Schema, type Offer1 } from "./offer1.js";
import { ratingGroupedCitation1Schema, type RatingGroupedCitation1 } from "./rating-grouped-citation1.js";

export type Product3 = {
  /** Product name */
  title?: string;
  /**
   * 1-indexed rank across all products in all shopping cards in the response (flat, not reset per
   * card).
   */
  position?: number;
  /** Product page URL with ChatGPT attribution */
  url?: string;
  /** Current price */
  price?: string;
  /** Product category or style tag */
  featuredTag?: string;
  /** Merchant information */
  merchant?: string;
  /** Array of product image URLs */
  imageUrls?: string[];
  /** Product rating (0-5 scale) */
  rating?: number;
  /** Number of reviews */
  numReviews?: number;
  /** Unique product identifier */
  id?: string;
  /** Array of shopping offers from different merchants */
  offers?: Offer1[];
  /** Rating source information */
  ratingGroupedCitation?: RatingGroupedCitation1;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const product3Schema: Schema<Product3> = s.object<Product3>(
  {
    title: s.optional(s.string()),
    position: s.optional(s.int()),
    url: s.optional(s.string()),
    price: s.optional(s.string()),
    featuredTag: s.optional(s.string()),
    merchant: s.optional(s.string()),
    imageUrls: s.optional(s.array(s.string())),
    rating: s.optional(s.float64()),
    numReviews: s.optional(s.int()),
    id: s.optional(s.string()),
    offers: s.optional(s.array(s.lazy(() => offer1Schema))),
    ratingGroupedCitation: s.optional(s.lazy(() => ratingGroupedCitation1Schema)),
    _keysMap: {
      featuredTag: "featured_tag",
      imageUrls: "image_urls",
      numReviews: "num_reviews",
      ratingGroupedCitation: "rating_grouped_citation",
    },
  },
  { additionalProperties: s.json() },
);
