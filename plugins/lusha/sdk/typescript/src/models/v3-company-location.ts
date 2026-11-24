import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type V3CompanyLocation = {
  city?: string;
  state?: string;
  /** Free field. ISO/postal state or region code, when available. */
  stateCode?: string;
  country?: string;
  countryIso2?: string;
  continent?: string;
  /** Postal/ZIP code (present on HQ location when available) */
  zipCode?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const v3CompanyLocationSchema: Schema<V3CompanyLocation> = s.object<V3CompanyLocation>(
  {
    city: s.optional(s.string()),
    state: s.optional(s.string()),
    stateCode: s.optional(s.string()),
    country: s.optional(s.string()),
    countryIso2: s.optional(s.string()),
    continent: s.optional(s.string()),
    zipCode: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
