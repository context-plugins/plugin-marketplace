import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const ShippingType = {
  Free: "free",
  Paid: "paid",
  Pickup: "pickup",
  Unknown: "unknown",
} as const;
export type ShippingType = (typeof ShippingType)[keyof typeof ShippingType] | (string & {});

export const shippingTypeSchema: EnumSchema<ShippingType> = s.enumOf<ShippingType>(ShippingType);
