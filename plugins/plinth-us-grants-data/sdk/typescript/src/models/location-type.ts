import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const LocationType = {
  Recipient: "recipient",
  Funder: "funder",
  AreaServed: "area_served",
} as const;
export type LocationType = (typeof LocationType)[keyof typeof LocationType] | (string & {});

export const locationTypeSchema: EnumSchema<LocationType> = s.enumOf<LocationType>(LocationType);
