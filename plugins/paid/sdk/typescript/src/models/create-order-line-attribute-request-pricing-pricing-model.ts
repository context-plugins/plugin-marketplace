import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const CreateOrderLineAttributeRequestPricingPricingModel = {
  PerUnit: "perUnit",
  VolumePricing: "volumePricing",
  GraduatedPricing: "graduatedPricing",
  PrepaidCredits: "prepaidCredits",
  BracketedPrepaidCredits: "bracketedPrepaidCredits",
  Flat: "flat",
} as const;
export type CreateOrderLineAttributeRequestPricingPricingModel =
  | (typeof CreateOrderLineAttributeRequestPricingPricingModel)[keyof typeof CreateOrderLineAttributeRequestPricingPricingModel]
  | (string & {});

export const createOrderLineAttributeRequestPricingPricingModelSchema: EnumSchema<CreateOrderLineAttributeRequestPricingPricingModel> =
  s.enumOf<CreateOrderLineAttributeRequestPricingPricingModel>(
    CreateOrderLineAttributeRequestPricingPricingModel,
  );
