import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const DeliveredTo = {
  ShippingAddress: "shipping_address",
  StorePickup: "store_pickup",
} as const;
export type DeliveredTo = (typeof DeliveredTo)[keyof typeof DeliveredTo] | (string & {});

export const deliveredToSchema: EnumSchema<DeliveredTo> = s.enumOf<DeliveredTo>(DeliveredTo);
