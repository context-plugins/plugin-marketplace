import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const BillingInterval = {
  Monthly: "MONTHLY",
  Yearly: "YEARLY",
} as const;
export type BillingInterval = (typeof BillingInterval)[keyof typeof BillingInterval] | (string & {});

export const billingIntervalSchema: EnumSchema<BillingInterval> = s.enumOf<BillingInterval>(BillingInterval);
