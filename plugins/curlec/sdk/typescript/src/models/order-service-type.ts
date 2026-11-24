import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const OrderServiceType = {
  DineIn: "dine_in",
  Takeaway: "takeaway",
  Delivery: "delivery",
} as const;
export type OrderServiceType = (typeof OrderServiceType)[keyof typeof OrderServiceType] | (string & {});

export const orderServiceTypeSchema: EnumSchema<OrderServiceType> =
  s.enumOf<OrderServiceType>(OrderServiceType);
