import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { locationFilterSchema, type LocationFilter } from "./location-filter.js";
import {
  signal1LushaApiDocumentationProspectingSearchEnrichApiSchema,
  type Signal1LushaApiDocumentationProspectingSearchEnrichApi,
} from "./signal1-lusha-api-documentation-prospecting-search-enrich-api.js";

export type Include1 = {
  departments?: string[];
  seniority?: number[];
  existingDataPoints?: string[];
  locations?: LocationFilter[];
  jobTitles?: string[];
  /** Filter contacts by LinkedIn profile URLs */
  linkedinUrls?: string[];
  /** Free-text search across contact fields */
  searchText?: string;
  /** Filter contacts by signal types (premium filter - charges apply per signal type) */
  signal?: Signal1LushaApiDocumentationProspectingSearchEnrichApi;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const include1Schema: Schema<Include1> = s.object<Include1>(
  {
    departments: s.optional(s.array(s.string())),
    seniority: s.optional(s.array(s.int())),
    existingDataPoints: s.optional(s.array(s.string())),
    locations: s.optional(s.array(s.lazy(() => locationFilterSchema))),
    jobTitles: s.optional(s.array(s.string())),
    linkedinUrls: s.optional(s.array(s.string())),
    searchText: s.optional(s.string()),
    signal: s.optional(s.lazy(() => signal1LushaApiDocumentationProspectingSearchEnrichApiSchema)),
    _keysMap: {
      existingDataPoints: "existing_data_points",
    },
  },
  { additionalProperties: s.json() },
);
