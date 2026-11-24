import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { aboutTheProductSchema, type AboutTheProduct } from "./about-the-product.js";
import { image1InternalSchema, image1Schema, type Image1 } from "./image1.js";
import { storeInternalSchema, storeSchema, type Store } from "./store.js";

/**
 * One product cluster and its merchant offers. Only `title` is guaranteed; anything Google's panel
 * lacks is omitted, never sent as `null`.
 */
export type ProductResult = {
  /** Product cluster title, as Google displayed it. Empty when the page has no product heading. */
  title: string;
  /**
   * Merchant offers. Always present on Google Search entries; omitted on AI Mode when Google lists
   * none.
   */
  stores?: Store[];
  /** Google's description of the product */
  aboutTheProduct?: AboutTheProduct;
  /**
   * Spec tables: each category name maps to key/value pairs. Category names and keys arrive in the
   * response language.
   */
  specifications?: Record<string, string>;
  images?: Image1[];
  /** Product rating */
  rating?: number;
  /** Product review count */
  reviews?: string;
  /** Product variants Google offers */
  variants?: Record<string, unknown>[];
  /** User reviews */
  userReviews?: Record<string, unknown>[];
  /** Related products */
  relatedProducts?: Record<string, unknown>[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const productResultProperties: s.Shape<ProductResult> = {
  title: s.string(),
  stores: s.optional(s.array(s.lazy(() => storeInternalSchema))),
  aboutTheProduct: s.optional(s.lazy(() => aboutTheProductSchema)),
  specifications: s.optional(s.record(s.string(), s.string())),
  images: s.optional(s.array(s.lazy(() => image1InternalSchema))),
  rating: s.optional(s.float64()),
  reviews: s.optional(s.string()),
  variants: s.optional(s.array(s.record(s.string(), s.unknown()))),
  userReviews: s.optional(s.array(s.record(s.string(), s.unknown()))),
  relatedProducts: s.optional(s.array(s.record(s.string(), s.unknown()))),
};

export const productResultInternalSchema: Schema<ProductResult> = s.object<ProductResult>(
  productResultProperties,
  { additionalProperties: s.json() },
);

export const productResultSchema: Schema<ProductResult> = s.lazySchema(() =>
  s.object<ProductResult>(
    {
      ...productResultProperties,
      stores: s.optional(s.array(s.lazy(() => storeSchema))),
      images: s.optional(s.array(s.lazy(() => image1Schema))),
    },
    { additionalProperties: s.json() },
  ),
);
