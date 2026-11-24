import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const CreateOrderLineAttributeRequestPricingSignalType = {
  Activity: "activity",
  Outcome: "outcome",
} as const;
export type CreateOrderLineAttributeRequestPricingSignalType =
  | (typeof CreateOrderLineAttributeRequestPricingSignalType)[keyof typeof CreateOrderLineAttributeRequestPricingSignalType]
  | (string & {});

export const createOrderLineAttributeRequestPricingSignalTypeSchema: EnumSchema<CreateOrderLineAttributeRequestPricingSignalType> =
  s.enumOf<CreateOrderLineAttributeRequestPricingSignalType>(
    CreateOrderLineAttributeRequestPricingSignalType,
  );
