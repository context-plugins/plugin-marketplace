import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** HQ location only. For all company site locations, see companyLocations. */
export type CompanyLocationResponse = {
  city?: string;
  country?: string;
  fullLocation?: string;
  state?: string;
  stateCode?: string;
  countryIso2?: string;
  rawLocation?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const companyLocationResponseSchema: Schema<CompanyLocationResponse> =
  s.object<CompanyLocationResponse>(
    {
      city: s.optional(s.string()),
      country: s.optional(s.string()),
      fullLocation: s.optional(s.string()),
      state: s.optional(s.string()),
      stateCode: s.optional(s.string()),
      countryIso2: s.optional(s.string()),
      rawLocation: s.optional(s.string()),
    },
    { additionalProperties: s.json() },
  );
