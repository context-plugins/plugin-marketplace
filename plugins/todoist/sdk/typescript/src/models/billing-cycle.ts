import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Billing cycle for the listed prices. */
export const BillingCycle = {
  Monthly: "monthly",
  Yearly: "yearly",
} as const;
export type BillingCycle = (typeof BillingCycle)[keyof typeof BillingCycle] | (string & {});

export const billingCycleSchema: EnumSchema<BillingCycle> = s.enumOf<BillingCycle>(BillingCycle);
