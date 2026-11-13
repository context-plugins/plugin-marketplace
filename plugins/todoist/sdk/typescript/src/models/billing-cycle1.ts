import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Billing cycle for the plan price, or `null` if unknown. */
export const BillingCycle1 = {
  Monthly: "monthly",
  Yearly: "yearly",
} as const;
export type BillingCycle1 = (typeof BillingCycle1)[keyof typeof BillingCycle1] | (string & {});

export const billingCycle1Schema: EnumSchema<BillingCycle1> = s.enumOf<BillingCycle1>(BillingCycle1);
