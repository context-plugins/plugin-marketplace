import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Billing type. */
export const BillingType1 = {
  BillingTypeUnspecified: "BILLING_TYPE_UNSPECIFIED",
  Prepaid: "PREPAID",
  Postpaid: "POSTPAID",
} as const;
export type BillingType1 = (typeof BillingType1)[keyof typeof BillingType1] | (string & {});

export const billingType1Schema: EnumSchema<BillingType1> = s.enumOf<BillingType1>(BillingType1);
