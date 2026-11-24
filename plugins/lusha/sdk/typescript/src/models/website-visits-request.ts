import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  paginationLushaApiDocumentationWebsiteVisitsApiInternalSchema,
  paginationLushaApiDocumentationWebsiteVisitsApiSchema,
  type PaginationLushaApiDocumentationWebsiteVisitsApi,
} from "./pagination-lusha-api-documentation-website-visits-api.js";
import { sortSchema, type Sort } from "./sort.js";
import {
  websiteVisitsFiltersInternalSchema,
  websiteVisitsFiltersSchema,
  type WebsiteVisitsFilters,
} from "./website-visits-filters.js";

export type WebsiteVisitsRequest = {
  /** Domains configured for tracking in the Lusha dashboard. */
  domains: string[];
  /** Window start date (YYYY-MM-DD). */
  startDate: string;
  /** Window end date (YYYY-MM-DD). Range must be ≤ 3 months. */
  endDate: string;
  pagination: PaginationLushaApiDocumentationWebsiteVisitsApi;
  sort?: Sort;
  filters?: WebsiteVisitsFilters;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const websiteVisitsRequestProperties: s.Shape<WebsiteVisitsRequest> = {
  domains: s.array(s.string()),
  startDate: s.dateOnly(),
  endDate: s.dateOnly(),
  pagination: paginationLushaApiDocumentationWebsiteVisitsApiInternalSchema,
  sort: s.optional(s.lazy(() => sortSchema)),
  filters: s.optional(s.lazy(() => websiteVisitsFiltersInternalSchema)),
};

export const websiteVisitsRequestInternalSchema: Schema<WebsiteVisitsRequest> =
  s.object<WebsiteVisitsRequest>(websiteVisitsRequestProperties, { additionalProperties: s.json() });

export const websiteVisitsRequestSchema: Schema<WebsiteVisitsRequest> = s.lazySchema(() =>
  s.object<WebsiteVisitsRequest>(
    {
      ...websiteVisitsRequestProperties,
      domains: s.array(s.string()).check(s.minLength(1)),
      pagination: paginationLushaApiDocumentationWebsiteVisitsApiSchema,
      filters: s.optional(s.lazy(() => websiteVisitsFiltersSchema)),
    },
    { additionalProperties: s.json() },
  ),
);
