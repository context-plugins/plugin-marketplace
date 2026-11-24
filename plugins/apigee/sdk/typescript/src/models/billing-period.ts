import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Frequency at which the customer will be billed. */
export const BillingPeriod = {
  BillingPeriodUnspecified: "BILLING_PERIOD_UNSPECIFIED",
  Weekly: "WEEKLY",
  Monthly: "MONTHLY",
} as const;
export type BillingPeriod = (typeof BillingPeriod)[keyof typeof BillingPeriod] | (string & {});

export const billingPeriodSchema: EnumSchema<BillingPeriod> = s.enumOf<BillingPeriod>(BillingPeriod);
