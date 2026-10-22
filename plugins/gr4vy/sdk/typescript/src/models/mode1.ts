import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The mode that defines the flow this payment service uses to process a payment. */
export const Mode1 = {
  Card: "card",
  Redirect: "redirect",
  Applepay: "applepay",
  Googlepay: "googlepay",
  CheckoutSession: "checkout-session",
  ClickToPay: "click-to-pay",
  GiftCard: "gift-card",
  Bank: "bank",
  Paze: "paze",
} as const;
export type Mode1 = (typeof Mode1)[keyof typeof Mode1] | (string & {});

export const mode1Schema: EnumSchema<Mode1> = s.enumOf<Mode1>(Mode1);
