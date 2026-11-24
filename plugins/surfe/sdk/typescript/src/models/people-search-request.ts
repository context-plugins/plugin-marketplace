import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { companyFiltersSchema, type CompanyFilters } from "./company-filters.js";
import { peopleFiltersSchema, type PeopleFilters } from "./people-filters.js";

export type PeopleSearchRequest = {
  /** Maximum results per page. */
  limit: number;
  /** Person-based filters. */
  people?: PeopleFilters;
  /** Company-based filters. */
  companies?: CompanyFilters;
  /** Maximum results returned per company. */
  peoplePerCompany?: number;
  /** Pagination token from a previous response. */
  pageToken?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const peopleSearchRequestProperties: s.Shape<PeopleSearchRequest> = {
  limit: s.int(),
  people: s.optional(s.lazy(() => peopleFiltersSchema)),
  companies: s.optional(s.lazy(() => companyFiltersSchema)),
  peoplePerCompany: s.optional(s.int()),
  pageToken: s.optional(s.string()),
};

export const peopleSearchRequestInternalSchema: Schema<PeopleSearchRequest> = s.object<PeopleSearchRequest>(
  peopleSearchRequestProperties,
  { additionalProperties: s.json() },
);

export const peopleSearchRequestSchema: Schema<PeopleSearchRequest> = s.lazySchema(() =>
  s.object<PeopleSearchRequest>(
    {
      ...peopleSearchRequestProperties,
      limit: s.int().check(s.gte(1), s.lte(200)),
      peoplePerCompany: s.optional(s.int().check(s.gte(1), s.lte(5))),
    },
    { additionalProperties: s.json() },
  ),
);
