import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type LocationLushaApiDocumentationEnrichApi = {
  country?: string;
  countryIso2?: string;
  state?: string;
  city?: string;
  continent?: string;
  coordinates?: number[];
  isEuContact?: boolean;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const locationLushaApiDocumentationEnrichApiSchema: Schema<LocationLushaApiDocumentationEnrichApi> =
  s.object<LocationLushaApiDocumentationEnrichApi>(
    {
      country: s.optional(s.string()),
      countryIso2: s.optional(s.string()),
      state: s.optional(s.string()),
      city: s.optional(s.string()),
      continent: s.optional(s.string()),
      coordinates: s.optional(s.array(s.float64())),
      isEuContact: s.optional(s.boolean()),
    },
    { additionalProperties: s.json() },
  );
