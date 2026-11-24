import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { companyLocationFilter2Schema, type CompanyLocationFilter2 } from "./company-location-filter2.js";
import { companySizeRangeSchema, type CompanySizeRange } from "./company-size-range.js";
import { companyTechnologySchema, type CompanyTechnology } from "./company-technology.js";
import {
  employeesInLinkedInFilterSchema,
  type EmployeesInLinkedInFilter,
} from "./employees-in-linked-in-filter.js";
import {
  locationLushaApiDocumentationProspectingSearchEnrichApiSchema,
  type LocationLushaApiDocumentationProspectingSearchEnrichApi,
} from "./location-lusha-api-documentation-prospecting-search-enrich-api.js";
import { revenueRangeSchema, type RevenueRange } from "./revenue-range.js";
import {
  signalLushaApiDocumentationProspectingSearchEnrichApiSchema,
  type SignalLushaApiDocumentationProspectingSearchEnrichApi,
} from "./signal-lusha-api-documentation-prospecting-search-enrich-api.js";

export type Include = {
  names?: string[];
  domains?: string[];
  locations?: LocationLushaApiDocumentationProspectingSearchEnrichApi[];
  technologies?: CompanyTechnology[];
  intentTopics?: string[];
  sizes?: CompanySizeRange[];
  revenues?: RevenueRange[];
  sicCodes?: string[];
  naicsCodes?: string[];
  mainIndustriesIds?: number[];
  subIndustriesIds?: number[];
  /** Free-text search across company fields */
  searchText?: string;
  excludePartialCompanies?: boolean;
  /**
   * Filter by company site-level office locations as reported by LinkedIn. This includes all
   * physical office locations where the company has a presence.
   */
  companyLocations?: CompanyLocationFilter2[];
  /**
   * Filter companies by LinkedIn-reported employee count. Both `min` and `max` are optional —
   * provide either or both.
   */
  employeesInLinkedIn?: EmployeesInLinkedInFilter;
  /** Filter companies by signal types (premium filter - charges apply per signal type). */
  signal?: SignalLushaApiDocumentationProspectingSearchEnrichApi;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const includeSchema: Schema<Include> = s.object<Include>(
  {
    names: s.optional(s.array(s.string())),
    domains: s.optional(s.array(s.string())),
    locations: s.optional(
      s.array(s.lazy(() => locationLushaApiDocumentationProspectingSearchEnrichApiSchema)),
    ),
    technologies: s.optional(s.array(s.lazy(() => companyTechnologySchema))),
    intentTopics: s.optional(s.array(s.string())),
    sizes: s.optional(s.array(s.lazy(() => companySizeRangeSchema))),
    revenues: s.optional(s.array(s.lazy(() => revenueRangeSchema))),
    sicCodes: s.optional(s.array(s.string())),
    naicsCodes: s.optional(s.array(s.string())),
    mainIndustriesIds: s.optional(s.array(s.float64())),
    subIndustriesIds: s.optional(s.array(s.float64())),
    searchText: s.optional(s.string()),
    excludePartialCompanies: s.optional(s.boolean()),
    companyLocations: s.optional(s.array(s.lazy(() => companyLocationFilter2Schema))),
    employeesInLinkedIn: s.optional(s.lazy(() => employeesInLinkedInFilterSchema)),
    signal: s.optional(s.lazy(() => signalLushaApiDocumentationProspectingSearchEnrichApiSchema)),
  },
  { additionalProperties: s.json() },
);
