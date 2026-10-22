import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** The ID of the payment service */
export type PaymentServiceId8 = string;

export const paymentServiceId8Schema: Schema<PaymentServiceId8> = s.of<PaymentServiceId8>(
  s.union([s.string()]),
);
