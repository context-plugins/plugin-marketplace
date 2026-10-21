import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** The ID of the payout in the underlying payment service. */
export type PaymentServicePayoutId = string;

export const paymentServicePayoutIdSchema: Schema<PaymentServicePayoutId> = s.of<PaymentServicePayoutId>(
  s.union([s.string()]),
);
