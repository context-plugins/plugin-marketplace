import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { cartItemSchema, type CartItem } from "../cart-item.js";

/** An array of cart items that represents the line items of a transaction. */
export type CartItems1 = CartItem[];

export const cartItems1Schema: Schema<CartItems1> = s.of<CartItems1>(
  s.union([s.array(s.lazy(() => cartItemSchema))]),
);
