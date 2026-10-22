import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const DeliveryType = {
  Digital: "DIGITAL",
  Physical: "PHYSICAL",
  Hybrid: "HYBRID",
} as const;
export type DeliveryType = (typeof DeliveryType)[keyof typeof DeliveryType] | (string & {});

export const deliveryTypeSchema: EnumSchema<DeliveryType> = s.enumOf<DeliveryType>(DeliveryType);
