import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type Location1LushaApiDocumentationProspectingSearchEnrichApi = {
  city?: string;
  state?: string;
  country?: string;
  countryIso2?: string;
  continent?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const location1LushaApiDocumentationProspectingSearchEnrichApiSchema: Schema<Location1LushaApiDocumentationProspectingSearchEnrichApi> =
  s.object<Location1LushaApiDocumentationProspectingSearchEnrichApi>(
    {
      city: s.optional(s.string()),
      state: s.optional(s.string()),
      country: s.optional(s.string()),
      countryIso2: s.optional(s.string()),
      continent: s.optional(s.string()),
      _keysMap: {
        countryIso2: "country_iso2",
      },
    },
    { additionalProperties: s.json() },
  );
