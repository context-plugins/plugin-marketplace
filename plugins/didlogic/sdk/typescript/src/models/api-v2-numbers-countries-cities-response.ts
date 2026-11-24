import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { cityInternalSchema, citySchema, type City } from "./city.js";

export type ApiV2NumbersCountriesCitiesResponse = {
  /** List of cities with available DID numbers */
  cities: City[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const apiV2NumbersCountriesCitiesResponseProperties: s.Shape<ApiV2NumbersCountriesCitiesResponse> = {
  cities: s.array(s.lazy(() => cityInternalSchema)),
};

export const apiV2NumbersCountriesCitiesResponseInternalSchema: Schema<ApiV2NumbersCountriesCitiesResponse> =
  s.object<ApiV2NumbersCountriesCitiesResponse>(apiV2NumbersCountriesCitiesResponseProperties, {
    additionalProperties: s.json(),
  });

export const apiV2NumbersCountriesCitiesResponseSchema: Schema<ApiV2NumbersCountriesCitiesResponse> =
  s.lazySchema(() =>
    s.object<ApiV2NumbersCountriesCitiesResponse>(
      {
        ...apiV2NumbersCountriesCitiesResponseProperties,
        cities: s.array(s.lazy(() => citySchema)),
      },
      { additionalProperties: s.json() },
    ),
  );
