import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const PaymentMethodEnum = {
  Ach: "ach",
  Card: "card",
  Cash: "cash",
  Check: "check",
  DigitalWallet: "digital_wallet",
  DonorAdvisedFund: "donor_advised_fund",
  Paypal: "paypal",
  Venmo: "venmo",
  Cashapp: "cashapp",
  Terminal: "terminal",
  Stock: "stock",
  InKind: "in-kind",
  Property: "property",
  Other: "other",
  None: "none",
} as const;
export type PaymentMethodEnum = (typeof PaymentMethodEnum)[keyof typeof PaymentMethodEnum] | (string & {});

export const paymentMethodEnumSchema: EnumSchema<PaymentMethodEnum> =
  s.enumOf<PaymentMethodEnum>(PaymentMethodEnum);
