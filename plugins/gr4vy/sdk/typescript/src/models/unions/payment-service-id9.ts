import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** Filters for transactions that were processed by the provided `payment_service_id` values. */
export type PaymentServiceId9 = string[];

export const paymentServiceId9Schema: Schema<PaymentServiceId9> = s.of<PaymentServiceId9>(
  s.union([s.array(s.string())]),
);
