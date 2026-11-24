import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  filtersLushaApiDocumentationProspectingSearchEnrichApiSchema,
  type FiltersLushaApiDocumentationProspectingSearchEnrichApi,
} from "./filters-lusha-api-documentation-prospecting-search-enrich-api.js";
import {
  paginationParamsInternalSchema,
  paginationParamsSchema,
  type PaginationParams,
} from "./pagination-params.js";

export type ContactSearchRequest = {
  /**
   * When set to true, includes contacts with partial information in the search results.
   *
   * @default true
   */
  includePartialContact?: boolean;
  /**
   * When `true`, excludes contacts whose phones are all marked Do Not Call (DNC).
   *
   * @default false
   */
  excludeDnc?: boolean;
  pages?: PaginationParams;
  filters: FiltersLushaApiDocumentationProspectingSearchEnrichApi;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const contactSearchRequestProperties: s.Shape<ContactSearchRequest> = {
  includePartialContact: s.defaulted(s.boolean(), true),
  excludeDnc: s.defaulted(s.boolean(), false),
  pages: s.optional(s.lazy(() => paginationParamsInternalSchema)),
  filters: filtersLushaApiDocumentationProspectingSearchEnrichApiSchema,
};

export const contactSearchRequestInternalSchema: Schema<ContactSearchRequest> =
  s.object<ContactSearchRequest>(contactSearchRequestProperties, { additionalProperties: s.json() });

export const contactSearchRequestSchema: Schema<ContactSearchRequest> = s.lazySchema(() =>
  s.object<ContactSearchRequest>(
    {
      ...contactSearchRequestProperties,
      pages: s.optional(s.lazy(() => paginationParamsSchema)),
    },
    { additionalProperties: s.json() },
  ),
);
