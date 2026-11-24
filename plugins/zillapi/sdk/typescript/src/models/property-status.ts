import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const PropertyStatus = {
  ForSale: "FOR_SALE",
  RecentlySold: "RECENTLY_SOLD",
  ForRent: "FOR_RENT",
} as const;
export type PropertyStatus = (typeof PropertyStatus)[keyof typeof PropertyStatus] | (string & {});

export const propertyStatusSchema: EnumSchema<PropertyStatus> = s.enumOf<PropertyStatus>(PropertyStatus);
