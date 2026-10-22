import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Indicates to what extent the payment is eligible for PayPal's Seller Protection. Only available
 * for PayPal payments, and if the information is made available by PayPal.
 */
export const PaymentDetailsSellerProtection = {
  Eligible: "ELIGIBLE",
  PartiallyEligible: "PARTIALLY_ELIGIBLE",
  NotEligible: "NOT_ELIGIBLE",
} as const;
export type PaymentDetailsSellerProtection =
  | (typeof PaymentDetailsSellerProtection)[keyof typeof PaymentDetailsSellerProtection]
  | (string & {});

export const paymentDetailsSellerProtectionSchema: EnumSchema<PaymentDetailsSellerProtection> =
  s.enumOf<PaymentDetailsSellerProtection>(PaymentDetailsSellerProtection);
