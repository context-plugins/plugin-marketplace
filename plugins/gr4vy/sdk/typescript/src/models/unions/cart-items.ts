import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { cartItemSchema, type CartItem } from "../cart-item.js";

/** An array of cart items that represents the line items of this capture. */
export type CartItems = CartItem[];

export const cartItemsSchema: Schema<CartItems> = s.of<CartItems>(
  s.union([s.array(s.lazy(() => cartItemSchema))]),
);
