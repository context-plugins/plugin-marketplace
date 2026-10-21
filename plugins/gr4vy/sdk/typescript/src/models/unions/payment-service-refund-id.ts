import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** The payment service's unique ID for the refund. */
export type PaymentServiceRefundId = string;

export const paymentServiceRefundIdSchema: Schema<PaymentServiceRefundId> = s.of<PaymentServiceRefundId>(
  s.union([s.string()]),
);
