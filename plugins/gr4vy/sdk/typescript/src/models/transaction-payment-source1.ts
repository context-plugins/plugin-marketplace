import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The payment source for the payment link. */
export const TransactionPaymentSource1 = {
  Ecommerce: "ecommerce",
  Moto: "moto",
  Recurring: "recurring",
  Installment: "installment",
  CardOnFile: "card_on_file",
} as const;
export type TransactionPaymentSource1 =
  | (typeof TransactionPaymentSource1)[keyof typeof TransactionPaymentSource1]
  | (string & {});

export const transactionPaymentSource1Schema: EnumSchema<TransactionPaymentSource1> =
  s.enumOf<TransactionPaymentSource1>(TransactionPaymentSource1);
