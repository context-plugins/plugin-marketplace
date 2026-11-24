import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type CompanyLocationFilter = {
  country?: string;
  continent?: string;
  countryGrouping?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const companyLocationFilterSchema: Schema<CompanyLocationFilter> = s.object<CompanyLocationFilter>(
  {
    country: s.optional(s.string()),
    continent: s.optional(s.string()),
    countryGrouping: s.optional(s.string()),
    _keysMap: {
      countryGrouping: "country_grouping",
    },
  },
  { additionalProperties: s.json() },
);
