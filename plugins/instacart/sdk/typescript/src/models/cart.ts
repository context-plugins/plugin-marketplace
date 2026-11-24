import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { cartItemInternalSchema, cartItemSchema, type CartItem } from "./cart-item.js";

/** The customer's cart details to associate with the reservation. */
export type Cart = {
  /** The items in the customer's cart. */
  items?: CartItem[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const cartProperties: s.Shape<Cart> = {
  items: s.optional(s.array(s.lazy(() => cartItemInternalSchema))),
};

export const cartInternalSchema: Schema<Cart> = s.object<Cart>(cartProperties, {
  additionalProperties: s.json(),
});

export const cartSchema: Schema<Cart> = s.lazySchema(() =>
  s.object<Cart>(
    {
      ...cartProperties,
      items: s.optional(s.array(s.lazy(() => cartItemSchema))),
    },
    { additionalProperties: s.json() },
  ),
);
