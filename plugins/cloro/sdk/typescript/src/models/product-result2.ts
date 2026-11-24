import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { aboutTheProductSchema, type AboutTheProduct } from "./about-the-product.js";
import { image1InternalSchema, image1Schema, type Image1 } from "./image1.js";
import { store1InternalSchema, store1Schema, type Store1 } from "./store1.js";

/**
 * One product cluster and its merchant offers. Only `title` is guaranteed; anything Google's panel
 * lacks is omitted, never sent as `null`.
 */
export type ProductResult2 = {
  /** Product cluster title, as Google displayed it. Empty when the page has no product heading. */
  title: string;
  /**
   * Merchant offers. Always present on Google Search entries; omitted on AI Mode when Google lists
   * none.
   */
  stores?: Store1[];
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
  /**
   * Google's ID for the product, equal to the `productDocid` of the shopping card or inline product
   * that this entry came from. Present only when the product came from a Google AI Mode shopping
   * card or inline product. A product from a Google Search shopping card does not have it.
   */
  productDocid?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const productResult2Properties: s.Shape<ProductResult2> = {
  title: s.string(),
  stores: s.optional(s.array(s.lazy(() => store1InternalSchema))),
  aboutTheProduct: s.optional(s.lazy(() => aboutTheProductSchema)),
  specifications: s.optional(s.record(s.string(), s.string())),
  images: s.optional(s.array(s.lazy(() => image1InternalSchema))),
  rating: s.optional(s.float64()),
  reviews: s.optional(s.string()),
  variants: s.optional(s.array(s.record(s.string(), s.unknown()))),
  userReviews: s.optional(s.array(s.record(s.string(), s.unknown()))),
  relatedProducts: s.optional(s.array(s.record(s.string(), s.unknown()))),
  productDocid: s.optional(s.string()),
};

export const productResult2InternalSchema: Schema<ProductResult2> = s.object<ProductResult2>(
  productResult2Properties,
  { additionalProperties: s.json() },
);

export const productResult2Schema: Schema<ProductResult2> = s.lazySchema(() =>
  s.object<ProductResult2>(
    {
      ...productResult2Properties,
      stores: s.optional(s.array(s.lazy(() => store1Schema))),
      images: s.optional(s.array(s.lazy(() => image1Schema))),
    },
    { additionalProperties: s.json() },
  ),
);
