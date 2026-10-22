import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { platformFilterSchema, type PlatformFilter } from "./platform-filter.js";
import { platformTimeRangeSchema, type PlatformTimeRange } from "./platform-time-range.js";

export type PlatformSearchRequest = {
  /**
   * The search query string. Supports inline operators such as `from:jane type:document
   * app:confluence`. Inline operators are AND'd with structured `filters`.
   */
  query: string;
  /** Number of results to return per page. @default 10 */
  pageSize?: number;
  /**
   * Opaque pagination token from a previous response's `next_cursor` field. Omit on the first
   * request.
   */
  cursor?: string | null;
  /**
   * Restrict results to specific datasource identifiers returned by `GET /api/search/filters`.
   * Scopes by datasource type and may include results from multiple instances of that type.
   */
  datasources?: string[];
  /**
   * Structured filters applied to search results. Multiple values within a filter with `EQUALS` are
   * OR'd; separate filters are AND'd. Conflicting constraints on the same field (for example,
   * `type:document` in `query` and `type:spreadsheet` in a filter) return an empty result set. See
   * `Filter.field` for built-in field names and operators. Other nonblank field names are accepted
   * as custom filters without validation; behavior depends on your connected sources.
   */
  filters?: PlatformFilter[];
  /** Filter results to those last updated within this range. */
  timeRange?: PlatformTimeRange;
};

export const platformSearchRequestSchema: Schema<PlatformSearchRequest> = s.object<PlatformSearchRequest>({
  query: s.string(),
  pageSize: s.defaulted(s.int(), 10),
  cursor: s.optionalNullable(s.string()),
  datasources: s.optional(s.array(s.string())),
  filters: s.optional(s.array(s.lazy(() => platformFilterSchema))),
  timeRange: s.optional(s.lazy(() => platformTimeRangeSchema)),
  _keysMap: {
    pageSize: "page_size",
    timeRange: "time_range",
  },
});
