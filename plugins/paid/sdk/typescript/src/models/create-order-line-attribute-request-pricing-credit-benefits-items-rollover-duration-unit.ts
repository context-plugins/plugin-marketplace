import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const CreateOrderLineAttributeRequestPricingCreditBenefitsItemsRolloverDurationUnit = {
  Days: "days",
  Months: "months",
} as const;
export type CreateOrderLineAttributeRequestPricingCreditBenefitsItemsRolloverDurationUnit =
  | (typeof CreateOrderLineAttributeRequestPricingCreditBenefitsItemsRolloverDurationUnit)[keyof typeof CreateOrderLineAttributeRequestPricingCreditBenefitsItemsRolloverDurationUnit]
  | (string & {});

export const createOrderLineAttributeRequestPricingCreditBenefitsItemsRolloverDurationUnitSchema: EnumSchema<CreateOrderLineAttributeRequestPricingCreditBenefitsItemsRolloverDurationUnit> =
  s.enumOf<CreateOrderLineAttributeRequestPricingCreditBenefitsItemsRolloverDurationUnit>(
    CreateOrderLineAttributeRequestPricingCreditBenefitsItemsRolloverDurationUnit,
  );
