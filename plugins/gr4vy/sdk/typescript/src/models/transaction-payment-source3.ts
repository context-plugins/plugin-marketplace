import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The source of the transaction. */
export const TransactionPaymentSource3 = {
  Ecommerce: "ecommerce",
  Moto: "moto",
  Recurring: "recurring",
  Installment: "installment",
  CardOnFile: "card_on_file",
} as const;
export type TransactionPaymentSource3 =
  | (typeof TransactionPaymentSource3)[keyof typeof TransactionPaymentSource3]
  | (string & {});

export const transactionPaymentSource3Schema: EnumSchema<TransactionPaymentSource3> =
  s.enumOf<TransactionPaymentSource3>(TransactionPaymentSource3);
