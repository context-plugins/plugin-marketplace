import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import {
  transactionPaymentSourceSchema,
  type TransactionPaymentSource,
} from "../transaction-payment-source.js";

/**
 * Filters the results to only the transactions that have a payment source that matches with any of
 * the provided values. For best performance, combine it with `created_at_gte` and `created_at_lte`.
 */
export type PaymentSource1 = TransactionPaymentSource[];

export const paymentSource1Schema: Schema<PaymentSource1> = s.of<PaymentSource1>(
  s.union([s.array(s.lazy(() => transactionPaymentSourceSchema))]),
);
