import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const BillingFrequency = {
  Monthly: "monthly",
  Quarterly: "quarterly",
  Annual: "annual",
} as const;
export type BillingFrequency = (typeof BillingFrequency)[keyof typeof BillingFrequency] | (string & {});

export const billingFrequencySchema: EnumSchema<BillingFrequency> =
  s.enumOf<BillingFrequency>(BillingFrequency);
