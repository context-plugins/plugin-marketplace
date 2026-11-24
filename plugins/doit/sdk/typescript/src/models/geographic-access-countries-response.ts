import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  geographicAccessCountryInternalSchema,
  geographicAccessCountrySchema,
  type GeographicAccessCountry,
} from "./geographic-access-country.js";

export type GeographicAccessCountriesResponse = {
  countries: GeographicAccessCountry[];
};

const geographicAccessCountriesResponseProperties: s.Shape<GeographicAccessCountriesResponse> = {
  countries: s.array(s.lazy(() => geographicAccessCountryInternalSchema)),
};

export const geographicAccessCountriesResponseInternalSchema: Schema<GeographicAccessCountriesResponse> =
  s.object<GeographicAccessCountriesResponse>(geographicAccessCountriesResponseProperties);

export const geographicAccessCountriesResponseSchema: Schema<GeographicAccessCountriesResponse> =
  s.lazySchema(() =>
    s.object<GeographicAccessCountriesResponse>({
      ...geographicAccessCountriesResponseProperties,
      countries: s.array(s.lazy(() => geographicAccessCountrySchema)),
    }),
  );
