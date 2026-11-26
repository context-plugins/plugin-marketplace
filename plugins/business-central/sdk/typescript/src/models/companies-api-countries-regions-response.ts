import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { countryRegionInternalSchema, countryRegionSchema, type CountryRegion } from "./country-region.js";

export type CompaniesApiCountriesRegionsResponse = {
  value?: CountryRegion[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const companiesApiCountriesRegionsResponseProperties: s.Shape<CompaniesApiCountriesRegionsResponse> = {
  value: s.optional(s.array(s.lazy(() => countryRegionInternalSchema))),
};

export const companiesApiCountriesRegionsResponseInternalSchema: Schema<CompaniesApiCountriesRegionsResponse> =
  s.object<CompaniesApiCountriesRegionsResponse>(companiesApiCountriesRegionsResponseProperties, {
    additionalProperties: s.json(),
  });

export const companiesApiCountriesRegionsResponseSchema: Schema<CompaniesApiCountriesRegionsResponse> =
  s.lazySchema(() =>
    s.object<CompaniesApiCountriesRegionsResponse>(
      {
        ...companiesApiCountriesRegionsResponseProperties,
        value: s.optional(s.array(s.lazy(() => countryRegionSchema))),
      },
      { additionalProperties: s.json() },
    ),
  );
