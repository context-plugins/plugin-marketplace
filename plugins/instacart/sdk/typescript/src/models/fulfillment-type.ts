import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The type of fulfillment for this service option. */
export const FulfillmentType = {
  Delivery: "delivery",
  Pickup: "pickup",
  LastMile: "last_mile",
} as const;
export type FulfillmentType = (typeof FulfillmentType)[keyof typeof FulfillmentType] | (string & {});

export const fulfillmentTypeSchema: EnumSchema<FulfillmentType> = s.enumOf<FulfillmentType>(FulfillmentType);
