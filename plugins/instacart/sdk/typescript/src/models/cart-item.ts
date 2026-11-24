import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type CartItem = {
  /** The Universal Product Code of the item. */
  upc?: string;
  /** The quantity of the item. */
  quantity?: number;
  /** The Instacart product identifier. */
  productId?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const cartItemProperties: s.Shape<CartItem> = {
  upc: s.optional(s.string()),
  quantity: s.optional(s.int()),
  productId: s.optional(s.string()),
  _keysMap: {
    productId: "product_id",
  },
};

export const cartItemInternalSchema: Schema<CartItem> = s.object<CartItem>(cartItemProperties, {
  additionalProperties: s.json(),
});

export const cartItemSchema: Schema<CartItem> = s.lazySchema(() =>
  s.object<CartItem>(
    {
      ...cartItemProperties,
      quantity: s.optional(s.int().check(s.gte(1))),
    },
    { additionalProperties: s.json() },
  ),
);
