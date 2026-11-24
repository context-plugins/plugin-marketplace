import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { cartItemInternalSchema, cartItemSchema, type CartItem } from "./cart-item.js";

/** The finalized cart for the order. */
export type Cart1 = {
  /** The items to include in the order. */
  items?: CartItem[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const cart1Properties: s.Shape<Cart1> = {
  items: s.optional(s.array(s.lazy(() => cartItemInternalSchema))),
};

export const cart1InternalSchema: Schema<Cart1> = s.object<Cart1>(cart1Properties, {
  additionalProperties: s.json(),
});

export const cart1Schema: Schema<Cart1> = s.lazySchema(() =>
  s.object<Cart1>(
    {
      ...cart1Properties,
      items: s.optional(s.array(s.lazy(() => cartItemSchema))),
    },
    { additionalProperties: s.json() },
  ),
);
