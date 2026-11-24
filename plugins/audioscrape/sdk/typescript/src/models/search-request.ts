import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { searchFiltersSchema, type SearchFilters } from "./search-filters.js";
import { sortOptionsSchema, type SortOptions } from "./sort-options.js";

/** API v1 Search Request - simplified for external API users */
export type SearchRequest = {
  filters?: SearchFilters | null;
  /** Results to return, 1–100; outside that range is a 400. Page with `offset`. @default 20 */
  limit?: number;
  /** Result offset for pagination. @default 0 */
  offset?: number;
  /** Natural-language or keyword query. */
  query: string;
  /**
   * One of `"text"`, `"semantic"`, or `"hybrid"`. Defaults to auto-detect: queries with boolean
   * operators / quoted phrases use `"text"`, others `"hybrid"`.
   */
  searchType?: string | null;
  sort?: SortOptions | null;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const searchRequestProperties: s.Shape<SearchRequest> = {
  filters: s.optionalNullable(s.lazy(() => searchFiltersSchema)),
  limit: s.defaulted(s.int(), 20),
  offset: s.defaulted(s.int(), 0),
  query: s.string(),
  searchType: s.optionalNullable(s.string()),
  sort: s.optionalNullable(s.lazy(() => sortOptionsSchema)),
  _keysMap: {
    searchType: "search_type",
  },
};

export const searchRequestInternalSchema: Schema<SearchRequest> = s.object<SearchRequest>(
  searchRequestProperties,
  { additionalProperties: s.json() },
);

export const searchRequestSchema: Schema<SearchRequest> = s.lazySchema(() =>
  s.object<SearchRequest>(
    {
      ...searchRequestProperties,
      limit: s.defaulted(s.int().check(s.gte(1), s.lte(100)), 20),
      offset: s.defaulted(s.int().check(s.gte(0)), 0),
    },
    { additionalProperties: s.json() },
  ),
);
