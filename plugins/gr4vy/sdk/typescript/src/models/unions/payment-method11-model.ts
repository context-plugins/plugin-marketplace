import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import {
  transactionPaymentMethodSchema,
  type TransactionPaymentMethod,
} from "../transaction-payment-method.js";

/** The payment method used for this transaction. */
export type PaymentMethod11Model = TransactionPaymentMethod;

export const paymentMethod11ModelSchema: Schema<PaymentMethod11Model> = s.of<PaymentMethod11Model>(
  s.union([s.lazy(() => transactionPaymentMethodSchema)]),
);
