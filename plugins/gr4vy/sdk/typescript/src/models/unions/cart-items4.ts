import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import {
  forterAntiFraudOptionsCartItemSchema,
  type ForterAntiFraudOptionsCartItem,
} from "../forter-anti-fraud-options-cart-item.js";

/** A list of cart items details to pass to the Forter API. */
export type CartItems4 = ForterAntiFraudOptionsCartItem[];

export const cartItems4Schema: Schema<CartItems4> = s.of<CartItems4>(
  s.union([s.array(s.lazy(() => forterAntiFraudOptionsCartItemSchema))]),
);
