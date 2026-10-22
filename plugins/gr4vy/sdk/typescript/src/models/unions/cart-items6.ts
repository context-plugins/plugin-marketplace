import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { cartItemSchema, type CartItem } from "../cart-item.js";

/**
 * The cart items used to evaluate checkout rules, and which are used to help determine the right
 * payment options to display.
 */
export type CartItems6 = CartItem[];

export const cartItems6Schema: Schema<CartItems6> = s.of<CartItems6>(
  s.union([s.array(s.lazy(() => cartItemSchema))]),
);
