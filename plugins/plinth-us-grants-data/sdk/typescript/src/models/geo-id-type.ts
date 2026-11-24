import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const GeoIdType = {
  State: "state",
  Zip: "zip",
  City: "city",
  CountyFips: "county_fips",
  Country: "country",
} as const;
export type GeoIdType = (typeof GeoIdType)[keyof typeof GeoIdType] | (string & {});

export const geoIdTypeSchema: EnumSchema<GeoIdType> = s.enumOf<GeoIdType>(GeoIdType);
