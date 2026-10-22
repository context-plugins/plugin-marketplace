import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/**
 * Filters for transactions that have a matching `payment_service_transaction_id` value. The
 * `payment_service_transaction_id` is the identifier of the transaction given by the payment
 * service.
 */
export type PaymentServiceTransactionId2 = string;

export const paymentServiceTransactionId2Schema: Schema<PaymentServiceTransactionId2> =
  s.of<PaymentServiceTransactionId2>(s.union([s.string()]));
