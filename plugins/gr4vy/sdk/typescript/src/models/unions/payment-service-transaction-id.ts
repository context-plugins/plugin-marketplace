import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** The payment service's unique ID for the transaction. */
export type PaymentServiceTransactionId = string;

export const paymentServiceTransactionIdSchema: Schema<PaymentServiceTransactionId> =
  s.of<PaymentServiceTransactionId>(s.union([s.string()]));
