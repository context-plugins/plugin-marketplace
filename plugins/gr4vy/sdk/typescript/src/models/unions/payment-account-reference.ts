import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/**
 * The payment account reference (PAR) returned by the card scheme. This is a unique reference to
 * the underlying account that has been used to fund this payment method.
 */
export type PaymentAccountReference = string;

export const paymentAccountReferenceSchema: Schema<PaymentAccountReference> = s.of<PaymentAccountReference>(
  s.union([s.string()]),
);
