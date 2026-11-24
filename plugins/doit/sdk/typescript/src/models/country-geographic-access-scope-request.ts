import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type CountryGeographicAccessScopeRequest = {
  /** Access is limited to one canonical country. @default "country" */
  type?: "country";
  /** ISO 3166-1 alpha-2 country code, canonicalized by the service. */
  countryCode: string;
};

const countryGeographicAccessScopeRequestProperties: s.Shape<CountryGeographicAccessScopeRequest> = {
  type: s.defaulted(s.literal("country"), "country"),
  countryCode: s.string(),
};

export const countryGeographicAccessScopeRequestInternalSchema: Schema<CountryGeographicAccessScopeRequest> =
  s.object<CountryGeographicAccessScopeRequest>(countryGeographicAccessScopeRequestProperties);

export const countryGeographicAccessScopeRequestSchema: Schema<CountryGeographicAccessScopeRequest> =
  s.lazySchema(() =>
    s.object<CountryGeographicAccessScopeRequest>({
      ...countryGeographicAccessScopeRequestProperties,
      countryCode: s.string().check(s.pattern("^[A-Z]{2}$")),
    }),
  );
