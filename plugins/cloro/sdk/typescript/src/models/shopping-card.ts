import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { productSchema, type Product } from "./product.js";

export type ShoppingCard = {
  /** Shopping card type */
  type?: string;
  /** Layout style for the shopping card */
  layout?: string;
  /** Array of product information */
  products?: Product[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const shoppingCardSchema: Schema<ShoppingCard> = s.object<ShoppingCard>(
  {
    type: s.optional(s.string()),
    layout: s.optional(s.string()),
    products: s.optional(s.array(s.lazy(() => productSchema))),
  },
  { additionalProperties: s.json() },
);
