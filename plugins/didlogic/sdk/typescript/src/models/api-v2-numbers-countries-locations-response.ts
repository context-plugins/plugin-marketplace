import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { locationSchema, type Location } from "./location.js";

export type ApiV2NumbersCountriesLocationsResponse = {
  /** List of locations matching search criteria */
  locations: Location[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const apiV2NumbersCountriesLocationsResponseSchema: Schema<ApiV2NumbersCountriesLocationsResponse> =
  s.object<ApiV2NumbersCountriesLocationsResponse>(
    {
      locations: s.array(s.lazy(() => locationSchema)),
    },
    { additionalProperties: s.json() },
  );
