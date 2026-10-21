import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Indicates to what extent the payment is eligible for PayPal's Seller Protection. Only available
 * for PayPal payments, if the information is made available by PayPal.
 *
 * Classic values: `Eligible` `Ineligible` `Partially Eligible - INR Only` `Partially Eligible -
 * Unauth Only` `PartiallyEligible` `None` `Active` `Fraud Control - Unauth Premium Eligible`
 *
 * Current values: `ELIGIBLE` `PARTIALLY_ELIGIBLE` `NOT_ELIGIBLE`
 *
 * _Note:_ Classic values are legacy and may still appear in older payments.
 */
export const PaymentDetailsSellerProtectionResponse2 = {
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
export type PaymentDetailsSellerProtectionResponse2 =
  | (typeof PaymentDetailsSellerProtectionResponse2)[keyof typeof PaymentDetailsSellerProtectionResponse2]
  | (string & {});

export const paymentDetailsSellerProtectionResponse2Schema: EnumSchema<PaymentDetailsSellerProtectionResponse2> =
  s.enumOf<PaymentDetailsSellerProtectionResponse2>(PaymentDetailsSellerProtectionResponse2);
