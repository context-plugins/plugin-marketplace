import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** Defines if this payment service support payment method tokenization. */
export type PaymentMethodTokenizationEnabled = boolean;

export const paymentMethodTokenizationEnabledSchema: Schema<PaymentMethodTokenizationEnabled> =
  s.of<PaymentMethodTokenizationEnabled>(s.union([s.boolean()]));
