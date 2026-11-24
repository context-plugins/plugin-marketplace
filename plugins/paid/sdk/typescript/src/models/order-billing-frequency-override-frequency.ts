import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const OrderBillingFrequencyOverrideFrequency = {
  Monthly: "monthly",
  Quarterly: "quarterly",
  SemiAnnually: "semiAnnually",
  Annual: "annual",
  Custom: "custom",
} as const;
export type OrderBillingFrequencyOverrideFrequency =
  | (typeof OrderBillingFrequencyOverrideFrequency)[keyof typeof OrderBillingFrequencyOverrideFrequency]
  | (string & {});

export const orderBillingFrequencyOverrideFrequencySchema: EnumSchema<OrderBillingFrequencyOverrideFrequency> =
  s.enumOf<OrderBillingFrequencyOverrideFrequency>(OrderBillingFrequencyOverrideFrequency);
