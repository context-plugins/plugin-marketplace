import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { paymentServiceId4Schema, type PaymentServiceId4 } from "./payment-service-id4.js";

/**
 * Filters the results to only include transactions that were processed with the specified payment
 * service ID. This parameter also accepts `null` to include transactions that have a null for this
 * field.
 */
export type PaymentServiceId3 = PaymentServiceId4[];

export const paymentServiceId3Schema: Schema<PaymentServiceId3> = s.of<PaymentServiceId3>(
  s.union([s.array(s.lazy(() => paymentServiceId4Schema))]),
);
