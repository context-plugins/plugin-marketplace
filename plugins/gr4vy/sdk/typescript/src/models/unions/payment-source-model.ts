import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import {
  transactionPaymentSourceSchema,
  type TransactionPaymentSource,
} from "../transaction-payment-source.js";

/** The use-case for the the transaction. */
export type PaymentSourceModel = TransactionPaymentSource;

export const paymentSourceModelSchema: Schema<PaymentSourceModel> = s.of<PaymentSourceModel>(
  s.union([s.lazy(() => transactionPaymentSourceSchema)]),
);
