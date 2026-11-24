import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const CreateOrderLineAttributeRequestPricingBillingType = {
  Advance: "advance",
  Arrears: "arrears",
} as const;
export type CreateOrderLineAttributeRequestPricingBillingType =
  | (typeof CreateOrderLineAttributeRequestPricingBillingType)[keyof typeof CreateOrderLineAttributeRequestPricingBillingType]
  | (string & {});

export const createOrderLineAttributeRequestPricingBillingTypeSchema: EnumSchema<CreateOrderLineAttributeRequestPricingBillingType> =
  s.enumOf<CreateOrderLineAttributeRequestPricingBillingType>(
    CreateOrderLineAttributeRequestPricingBillingType,
  );
