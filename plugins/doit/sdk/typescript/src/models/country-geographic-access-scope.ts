import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type CountryGeographicAccessScope = {
  /** Access is limited to one canonical country. @default "country" */
  type?: "country";
  /** Canonical ISO 3166-1 alpha-2 country code. */
  countryCode: string;
  /** Canonical English country name. */
  countryName: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const countryGeographicAccessScopeProperties: s.Shape<CountryGeographicAccessScope> = {
  type: s.defaulted(s.literal("country"), "country"),
  countryCode: s.string(),
  countryName: s.string(),
};

export const countryGeographicAccessScopeInternalSchema: Schema<CountryGeographicAccessScope> =
  s.object<CountryGeographicAccessScope>(countryGeographicAccessScopeProperties, {
    additionalProperties: s.json(),
  });

export const countryGeographicAccessScopeSchema: Schema<CountryGeographicAccessScope> = s.lazySchema(() =>
  s.object<CountryGeographicAccessScope>(
    {
      ...countryGeographicAccessScopeProperties,
      countryCode: s.string().check(s.pattern("^[A-Z]{2}$")),
    },
    { additionalProperties: s.json() },
  ),
);
