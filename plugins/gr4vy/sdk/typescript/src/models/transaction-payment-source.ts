import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The way payment method information made it to this transaction. */
export const TransactionPaymentSource = {
  Ecommerce: "ecommerce",
  Moto: "moto",
  Recurring: "recurring",
  Installment: "installment",
  CardOnFile: "card_on_file",
} as const;
export type TransactionPaymentSource =
  | (typeof TransactionPaymentSource)[keyof typeof TransactionPaymentSource]
  | (string & {});

export const transactionPaymentSourceSchema: EnumSchema<TransactionPaymentSource> =
  s.enumOf<TransactionPaymentSource>(TransactionPaymentSource);
