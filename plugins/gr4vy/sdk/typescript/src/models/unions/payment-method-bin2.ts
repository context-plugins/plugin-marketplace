import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

export type PaymentMethodBin2 = string;

export const paymentMethodBin2Schema: Schema<PaymentMethodBin2> = s.of<PaymentMethodBin2>(
  s.union([s.string()]),
);
