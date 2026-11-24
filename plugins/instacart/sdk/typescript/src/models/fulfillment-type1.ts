import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The fulfillment type of the order. */
export const FulfillmentType1 = {
  Delivery: "delivery",
  Pickup: "pickup",
  LastMile: "last_mile",
} as const;
export type FulfillmentType1 = (typeof FulfillmentType1)[keyof typeof FulfillmentType1] | (string & {});

export const fulfillmentType1Schema: EnumSchema<FulfillmentType1> =
  s.enumOf<FulfillmentType1>(FulfillmentType1);
