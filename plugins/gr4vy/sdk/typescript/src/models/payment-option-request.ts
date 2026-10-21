import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { amount5Schema, type Amount5 } from "./unions/amount5.js";
import { cartItems6Schema, type CartItems6 } from "./unions/cart-items6.js";
import { country8Schema, type Country8 } from "./unions/country8.js";
import { currency12Schema, type Currency12 } from "./unions/currency12.js";
import { metadata8Schema, type Metadata8 } from "./unions/metadata8.js";

export type PaymentOptionRequest = {
  /**
   * The metadata to used to evaluate checkout rules, which will help determine the right payment
   * options to display.
   */
  metadata?: Metadata8;
  /**
   * The country code used to evaluate checkout rules, and which are used to help determine the
   * right payment options to display.
   */
  country?: Country8;
  /**
   * The currency code used to evaluate checkout rules, and which are used to help determine the
   * right payment options to display.
   */
  currency?: Currency12;
  /**
   * The amount used to evaluate checkout rules, and which are used to help determine the right
   * payment options to display.
   */
  amount?: Amount5;
  /** The locale used to determine the labels for each payment option. @default "en" */
  locale?: string;
  /**
   * The cart items used to evaluate checkout rules, and which are used to help determine the right
   * payment options to display.
   */
  cartItems?: CartItems6;
};

export const paymentOptionRequestSchema: Schema<PaymentOptionRequest> = s.object<PaymentOptionRequest>({
  metadata: s.optional(s.lazy(() => metadata8Schema)),
  country: s.optional(s.lazy(() => country8Schema)),
  currency: s.optional(s.lazy(() => currency12Schema)),
  amount: s.optional(s.lazy(() => amount5Schema)),
  locale: s.defaulted(s.string(), "en"),
  cartItems: s.optional(s.lazy(() => cartItems6Schema)),
  _keysMap: {
    cartItems: "cart_items",
  },
});
