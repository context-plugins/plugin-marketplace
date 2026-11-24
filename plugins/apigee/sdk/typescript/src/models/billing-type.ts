import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Optional. Billing type of the Apigee organization. See [Apigee
 * pricing](https://cloud.google.com/apigee/pricing).
 */
export const BillingType = {
  BillingTypeUnspecified: "BILLING_TYPE_UNSPECIFIED",
  Subscription: "SUBSCRIPTION",
  Evaluation: "EVALUATION",
  Payg: "PAYG",
} as const;
export type BillingType = (typeof BillingType)[keyof typeof BillingType] | (string & {});

export const billingTypeSchema: EnumSchema<BillingType> = s.enumOf<BillingType>(BillingType);
