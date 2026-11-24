import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The type of a location, which corresponds to the address lines field of
 * google.type.PostalAddress. For example, "Downtown, Atlanta, GA, USA" has a type of
 * LocationType.NEIGHBORHOOD, and "Kansas City, KS, USA" has a type of LocationType.LOCALITY.
 */
export const LocationType = {
  LocationTypeUnspecified: "LOCATION_TYPE_UNSPECIFIED",
  Country: "COUNTRY",
  AdministrativeArea: "ADMINISTRATIVE_AREA",
  SubAdministrativeArea: "SUB_ADMINISTRATIVE_AREA",
  Locality: "LOCALITY",
  PostalCode: "POSTAL_CODE",
  SubLocality: "SUB_LOCALITY",
  SubLocality1: "SUB_LOCALITY_1",
  SubLocality2: "SUB_LOCALITY_2",
  Neighborhood: "NEIGHBORHOOD",
  StreetAddress: "STREET_ADDRESS",
} as const;
export type LocationType = (typeof LocationType)[keyof typeof LocationType] | (string & {});

export const locationTypeSchema: EnumSchema<LocationType> = s.enumOf<LocationType>(LocationType);
