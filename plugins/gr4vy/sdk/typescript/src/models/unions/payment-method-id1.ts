import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** The ID of the payment method to check, instead of the `bin`. */
export type PaymentMethodId1 = string;

export const paymentMethodId1Schema: Schema<PaymentMethodId1> = s.of<PaymentMethodId1>(s.union([s.string()]));
