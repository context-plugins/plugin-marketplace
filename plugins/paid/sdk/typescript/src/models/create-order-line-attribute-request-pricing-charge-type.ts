import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const CreateOrderLineAttributeRequestPricingChargeType = {
  Usage: "usage",
  Recurring: "recurring",
  OneTime: "oneTime",
  SeatBased: "seatBased",
} as const;
export type CreateOrderLineAttributeRequestPricingChargeType =
  | (typeof CreateOrderLineAttributeRequestPricingChargeType)[keyof typeof CreateOrderLineAttributeRequestPricingChargeType]
  | (string & {});

export const createOrderLineAttributeRequestPricingChargeTypeSchema: EnumSchema<CreateOrderLineAttributeRequestPricingChargeType> =
  s.enumOf<CreateOrderLineAttributeRequestPricingChargeType>(
    CreateOrderLineAttributeRequestPricingChargeType,
  );
