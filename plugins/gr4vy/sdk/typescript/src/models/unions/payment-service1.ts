import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import {
  transactionPaymentServiceSchema,
  type TransactionPaymentService,
} from "../transaction-payment-service.js";

/** The payment service used for this transaction. */
export type PaymentService1 = TransactionPaymentService;

export const paymentService1Schema: Schema<PaymentService1> = s.of<PaymentService1>(
  s.union([s.lazy(() => transactionPaymentServiceSchema)]),
);
