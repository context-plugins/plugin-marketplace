import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const Mode = {
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
export type Mode = (typeof Mode)[keyof typeof Mode] | (string & {});

export const modeSchema: EnumSchema<Mode> = s.enumOf<Mode>(Mode);
