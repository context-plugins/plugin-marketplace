import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type GeographicAccessCountry = {
  /** Canonical ISO 3166-1 alpha-2 country code. */
  countryCode: string;
  /** Canonical English display name. */
  name: string;
};

const geographicAccessCountryProperties: s.Shape<GeographicAccessCountry> = {
  countryCode: s.string(),
  name: s.string(),
};

export const geographicAccessCountryInternalSchema: Schema<GeographicAccessCountry> =
  s.object<GeographicAccessCountry>(geographicAccessCountryProperties);

export const geographicAccessCountrySchema: Schema<GeographicAccessCountry> = s.lazySchema(() =>
  s.object<GeographicAccessCountry>({
    ...geographicAccessCountryProperties,
    countryCode: s.string().check(s.pattern("^[A-Z]{2}$")),
  }),
);
