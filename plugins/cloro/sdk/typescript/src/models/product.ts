import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { discountPriceSchema, type DiscountPrice } from "./discount-price.js";
import { imageSchema, type Image } from "./image.js";
import { priceSchema, type Price } from "./price.js";
import { product1Schema, type Product1 } from "./product1.js";
import { ratingSchema, type Rating } from "./rating.js";
import { specificationSchema, type Specification } from "./specification.js";

export type Product = {
  /** Product identifier information */
  product?: Product1;
  /**
   * 1-indexed rank across all products in all shopping cards in the response (flat, not reset per
   * card).
   */
  position?: number;
  /** Unique offer identifier */
  offerId?: string;
  /** Product page URL */
  url?: string;
  /** Product name */
  name?: string;
  /** Product description */
  description?: string;
  /** Product images with titles and URLs */
  images?: Image[];
  /** Product specifications (e.g., Color, Size) */
  specifications?: Specification[];
  /** Product tags */
  tags?: string[];
  /** Product pricing information */
  price?: Price;
  /** Discount price, same shape as `price`. May be null or absent. */
  discountPrice?: DiscountPrice | null;
  /** Seller name */
  seller?: string;
  /** Seller logo URL */
  sellerLogoUrl?: string;
  /** Product brand name */
  brandName?: string;
  /** Product rating information */
  rating?: Rating;
  /** Whether price tracking is available */
  canTrackPrice?: boolean;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const productSchema: Schema<Product> = s.object<Product>(
  {
    product: s.optional(s.lazy(() => product1Schema)),
    position: s.optional(s.int()),
    offerId: s.optional(s.string()),
    url: s.optional(s.string()),
    name: s.optional(s.string()),
    description: s.optional(s.string()),
    images: s.optional(s.array(s.lazy(() => imageSchema))),
    specifications: s.optional(s.array(s.lazy(() => specificationSchema))),
    tags: s.optional(s.array(s.string())),
    price: s.optional(s.lazy(() => priceSchema)),
    discountPrice: s.optionalNullable(s.lazy(() => discountPriceSchema)),
    seller: s.optional(s.string()),
    sellerLogoUrl: s.optional(s.string()),
    brandName: s.optional(s.string()),
    rating: s.optional(s.lazy(() => ratingSchema)),
    canTrackPrice: s.optional(s.boolean()),
  },
  { additionalProperties: s.json() },
);
