import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/**
 * Filters for transactions that have a payment method with a fingerprint that matches exactly with
 * the provided value
 */
export type PaymentMethodFingerprint = string;

export const paymentMethodFingerprintSchema: Schema<PaymentMethodFingerprint> =
  s.of<PaymentMethodFingerprint>(s.union([s.string()]));
