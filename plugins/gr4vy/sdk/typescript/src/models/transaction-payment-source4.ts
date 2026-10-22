import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The use-case for the the transaction. */
export const TransactionPaymentSource4 = {
  Ecommerce: "ecommerce",
  Moto: "moto",
  Recurring: "recurring",
  Installment: "installment",
  CardOnFile: "card_on_file",
} as const;
export type TransactionPaymentSource4 =
  | (typeof TransactionPaymentSource4)[keyof typeof TransactionPaymentSource4]
  | (string & {});

export const transactionPaymentSource4Schema: EnumSchema<TransactionPaymentSource4> =
  s.enumOf<TransactionPaymentSource4>(TransactionPaymentSource4);
