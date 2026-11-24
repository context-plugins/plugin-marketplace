import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const PropertyType = {
  Hotel: "hotel",
  Apartment: "apartment",
  House: "house",
  Villa: "villa",
  Cottage: "cottage",
  Other: "other",
} as const;
export type PropertyType = (typeof PropertyType)[keyof typeof PropertyType] | (string & {});

export const propertyTypeSchema: EnumSchema<PropertyType> = s.enumOf<PropertyType>(PropertyType);
