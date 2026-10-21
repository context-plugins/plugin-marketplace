import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { cartItemSchema, type CartItem } from "../cart-item.js";

/** The cart items for the payment link. */
export type CartItems3 = CartItem[];

export const cartItems3Schema: Schema<CartItems3> = s.of<CartItems3>(
  s.union([s.array(s.lazy(() => cartItemSchema))]),
);
