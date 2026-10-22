import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/**
 * Filters for transactions that have a payment method with an ID that matches exactly with the
 * provided value.
 */
export type PaymentMethodId = string;

export const paymentMethodIdSchema: Schema<PaymentMethodId> = s.of<PaymentMethodId>(s.union([s.string()]));
