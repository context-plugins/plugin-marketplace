import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const CreateOrderLineAttributeRequestPricingBillingFrequency = {
  Monthly: "monthly",
  Quarterly: "quarterly",
  SemiAnnually: "semiAnnually",
  Annual: "annual",
  Custom: "custom",
} as const;
export type CreateOrderLineAttributeRequestPricingBillingFrequency =
  | (typeof CreateOrderLineAttributeRequestPricingBillingFrequency)[keyof typeof CreateOrderLineAttributeRequestPricingBillingFrequency]
  | (string & {});

export const createOrderLineAttributeRequestPricingBillingFrequencySchema: EnumSchema<CreateOrderLineAttributeRequestPricingBillingFrequency> =
  s.enumOf<CreateOrderLineAttributeRequestPricingBillingFrequency>(
    CreateOrderLineAttributeRequestPricingBillingFrequency,
  );
