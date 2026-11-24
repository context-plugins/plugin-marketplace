import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const CreateOrderLineAttributeRequestPricingPricingInputKind = {
  SignalQuantity: "signalQuantity",
} as const;
export type CreateOrderLineAttributeRequestPricingPricingInputKind =
  | (typeof CreateOrderLineAttributeRequestPricingPricingInputKind)[keyof typeof CreateOrderLineAttributeRequestPricingPricingInputKind]
  | (string & {});

export const createOrderLineAttributeRequestPricingPricingInputKindSchema: EnumSchema<CreateOrderLineAttributeRequestPricingPricingInputKind> =
  s.enumOf<CreateOrderLineAttributeRequestPricingPricingInputKind>(
    CreateOrderLineAttributeRequestPricingPricingInputKind,
  );
