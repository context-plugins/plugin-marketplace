import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Indicates to what extent the payment is eligible for PayPal's Seller Protection. Only available
 * for PayPal payments, and if the information is made available by PayPal.
 */
export const PaymentDetailsSellerProtectionResponse = {
  Eligible: "ELIGIBLE",
  PartiallyEligible: "PARTIALLY_ELIGIBLE",
  NotEligible: "NOT_ELIGIBLE",
  Eligible2: "Eligible",
  Ineligible: "Ineligible",
  PartiallyEligibleInrOnly: "Partially Eligible - INR Only",
  PartiallyEligibleUnauthOnly: "Partially Eligible - Unauth Only",
  PartiallyEligible2: "Partially Eligible",
  None: "None",
  Active: "Active",
  FraudControlUnauthPremiumEligible: "Fraud Control - Unauth Premium Eligible",
} as const;
export type PaymentDetailsSellerProtectionResponse =
  | (typeof PaymentDetailsSellerProtectionResponse)[keyof typeof PaymentDetailsSellerProtectionResponse]
  | (string & {});

export const paymentDetailsSellerProtectionResponseSchema: EnumSchema<PaymentDetailsSellerProtectionResponse> =
  s.enumOf<PaymentDetailsSellerProtectionResponse>(PaymentDetailsSellerProtectionResponse);
