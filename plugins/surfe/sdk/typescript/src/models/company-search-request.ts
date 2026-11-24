import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { companyFiltersSchema, type CompanyFilters } from "./company-filters.js";

export type CompanySearchRequest = {
  limit: number;
  /** Company-based filters. */
  filters: CompanyFilters;
  pageToken?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const companySearchRequestProperties: s.Shape<CompanySearchRequest> = {
  limit: s.int(),
  filters: companyFiltersSchema,
  pageToken: s.optional(s.string()),
};

export const companySearchRequestInternalSchema: Schema<CompanySearchRequest> =
  s.object<CompanySearchRequest>(companySearchRequestProperties, { additionalProperties: s.json() });

export const companySearchRequestSchema: Schema<CompanySearchRequest> = s.lazySchema(() =>
  s.object<CompanySearchRequest>(
    {
      ...companySearchRequestProperties,
      limit: s.int().check(s.gte(1), s.lte(200)),
    },
    { additionalProperties: s.json() },
  ),
);
