import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const Type51 = {
  Shipping: "SHIPPING",
  Pickup: "PICKUP",
  PickupInStore: "PICKUP_IN_STORE",
  PickupFromPerson: "PICKUP_FROM_PERSON",
} as const;
export type Type51 = (typeof Type51)[keyof typeof Type51] | (string & {});

export const type51Schema: EnumSchema<Type51> = s.enumOf<Type51>(Type51);
