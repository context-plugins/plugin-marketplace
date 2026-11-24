import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Required. Billing type. */
export const BillingType2 = {
  BillingTypeUnspecified: "BILLING_TYPE_UNSPECIFIED",
  Prepaid: "PREPAID",
  Postpaid: "POSTPAID",
} as const;
export type BillingType2 = (typeof BillingType2)[keyof typeof BillingType2] | (string & {});

export const billingType2Schema: EnumSchema<BillingType2> = s.enumOf<BillingType2>(BillingType2);
