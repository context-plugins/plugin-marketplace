import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

export type PaymentServiceId4 = string;

export const paymentServiceId4Schema: Schema<PaymentServiceId4> = s.of<PaymentServiceId4>(
  s.union([s.string()]),
);
