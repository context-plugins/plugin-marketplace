import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/**
 * Filters the results to only the payouts that have a `payment_service_payout_id` that exactly
 * matches this value.
 */
export type PaymentServicePayoutId1 = string;

export const paymentServicePayoutId1Schema: Schema<PaymentServicePayoutId1> = s.of<PaymentServicePayoutId1>(
  s.union([s.string()]),
);
