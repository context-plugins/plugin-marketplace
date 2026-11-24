import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type Location = {
  /** City identifier */
  cityId: number;
  /** City name */
  cityName: string;
  /** Country name */
  countryName: string;
  /** State identifier (if applicable) */
  stateId: number;
  /** Country identifier */
  countryId: number;
  /** Combined location label for display */
  label: string;
  /** City code/area code */
  cityCode: number;
  /** State name (if applicable) */
  stateName: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const locationSchema: Schema<Location> = s.object<Location>(
  {
    cityId: s.int(),
    cityName: s.string(),
    countryName: s.string(),
    stateId: s.int(),
    countryId: s.int(),
    label: s.string(),
    cityCode: s.int(),
    stateName: s.string(),
    _keysMap: {
      cityId: "city_id",
      cityName: "city_name",
      countryName: "country_name",
      stateId: "state_id",
      countryId: "country_id",
      cityCode: "city_code",
      stateName: "state_name",
    },
  },
  { additionalProperties: s.json() },
);
