import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The type of payment method */
export const PaymentMethodType = {
  Card: "card",
  UsBankAccount: "us_bank_account",
  SepaDebit: "sepa_debit",
} as const;
export type PaymentMethodType = (typeof PaymentMethodType)[keyof typeof PaymentMethodType] | (string & {});

export const paymentMethodTypeSchema: EnumSchema<PaymentMethodType> =
  s.enumOf<PaymentMethodType>(PaymentMethodType);
