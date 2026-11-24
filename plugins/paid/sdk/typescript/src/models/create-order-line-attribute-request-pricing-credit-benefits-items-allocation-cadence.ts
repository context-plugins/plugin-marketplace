import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const CreateOrderLineAttributeRequestPricingCreditBenefitsItemsAllocationCadence = {
  Upfront: "upfront",
  Monthly: "monthly",
} as const;
export type CreateOrderLineAttributeRequestPricingCreditBenefitsItemsAllocationCadence =
  | (typeof CreateOrderLineAttributeRequestPricingCreditBenefitsItemsAllocationCadence)[keyof typeof CreateOrderLineAttributeRequestPricingCreditBenefitsItemsAllocationCadence]
  | (string & {});

export const createOrderLineAttributeRequestPricingCreditBenefitsItemsAllocationCadenceSchema: EnumSchema<CreateOrderLineAttributeRequestPricingCreditBenefitsItemsAllocationCadence> =
  s.enumOf<CreateOrderLineAttributeRequestPricingCreditBenefitsItemsAllocationCadence>(
    CreateOrderLineAttributeRequestPricingCreditBenefitsItemsAllocationCadence,
  );
