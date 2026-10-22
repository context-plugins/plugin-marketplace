import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import {
  transactionPaymentSourceSchema,
  type TransactionPaymentSource,
} from "../transaction-payment-source.js";

/** The source of the transaction payment */
export type PaymentSource2 = TransactionPaymentSource;

export const paymentSource2Schema: Schema<PaymentSource2> = s.of<PaymentSource2>(
  s.union([s.lazy(() => transactionPaymentSourceSchema)]),
);
