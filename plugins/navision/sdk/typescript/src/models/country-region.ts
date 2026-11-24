import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type CountryRegion = {
  id?: string;
  code?: string;
  displayName?: string;
  addressFormat?: string;
  lastModifiedDateTime?: Date;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const countryRegionProperties: s.Shape<CountryRegion> = {
  id: s.optional(s.string()),
  code: s.optional(s.string()),
  displayName: s.optional(s.string()),
  addressFormat: s.optional(s.string()),
  lastModifiedDateTime: s.optional(s.dateTime()),
};

export const countryRegionInternalSchema: Schema<CountryRegion> = s.object<CountryRegion>(
  countryRegionProperties,
  { additionalProperties: s.json() },
);

export const countryRegionSchema: Schema<CountryRegion> = s.lazySchema(() =>
  s.object<CountryRegion>(
    {
      ...countryRegionProperties,
      code: s.optional(s.string().check(s.maxLength(10))),
      displayName: s.optional(s.string().check(s.maxLength(100))),
    },
    { additionalProperties: s.json() },
  ),
);
