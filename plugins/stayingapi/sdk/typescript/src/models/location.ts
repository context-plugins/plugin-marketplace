import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { addressSchema, type Address } from "./unions/address.js";
import { citySchema, type City } from "./unions/city.js";
import { countryInternalSchema, countrySchema, type Country } from "./unions/country.js";
import { latSchema, type Lat } from "./unions/lat.js";
import { lngSchema, type Lng } from "./unions/lng.js";
import { regionSchema, type Region } from "./unions/region.js";

export type Location = {
  lat: Lat;
  lng: Lng;
  city: City;
  region: Region;
  country: Country;
  address: Address;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const locationProperties: s.Shape<Location> = {
  lat: latSchema,
  lng: lngSchema,
  city: citySchema,
  region: regionSchema,
  country: countryInternalSchema,
  address: addressSchema,
};

export const locationInternalSchema: Schema<Location> = s.object<Location>(locationProperties, {
  additionalProperties: s.json(),
});

export const locationSchema: Schema<Location> = s.lazySchema(() =>
  s.object<Location>(
    {
      ...locationProperties,
      country: countrySchema,
    },
    { additionalProperties: s.json() },
  ),
);
