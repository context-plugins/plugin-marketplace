import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { ExtractionMethod, extractionMethodSchema } from "./extraction-method.js";
import { searchFiltersSchema, type SearchFilters } from "./search-filters.js";
import { searchUrlInternalSchema, searchUrlSchema, type SearchUrl } from "./search-url.js";

export type SearchRequest = {
  /**
   * Normalized search filters. A `bbox` is required (unless the request supplies `searchUrls`
   * instead); a free-text search without a bounding box is rejected with 400 invalid_filters and
   * never hits upstream.
   */
  filters?: SearchFilters;
  /** Advanced: pre-built Zillow search URLs. Provide this instead of filters.bbox. */
  searchUrls: SearchUrl[];
  /**
   * PAGINATION (default, up to ~820 results); MAP_MARKERS (fastest, up to ~500, less data per row);
   * PAGINATION_WITH_ZOOM_IN (exhaustive recursive zoom, always runs async).
   *
   * @default ExtractionMethod.Pagination
   */
  extractionMethod?: ExtractionMethod;
  /**
   * Maximum records to return (product hard cap 500). When maxItems > 50 the request is processed
   * asynchronously and returns 202 with a job_id instead of results inline. maxItems ≤ 50 runs
   * synchronously.
   *
   * @default 50
   */
  maxItems?: number;
  /** Force async processing (202/job) even when maxItems ≤ 50. */
  async?: boolean;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const searchRequestProperties: s.Shape<SearchRequest> = {
  filters: s.optional(s.lazy(() => searchFiltersSchema)),
  searchUrls: s.array(s.lazy(() => searchUrlInternalSchema)),
  extractionMethod: s.defaulted(extractionMethodSchema, ExtractionMethod.Pagination),
  maxItems: s.defaulted(s.int(), 50),
  async: s.optional(s.boolean()),
};

export const searchRequestInternalSchema: Schema<SearchRequest> = s.object<SearchRequest>(
  searchRequestProperties,
  { additionalProperties: s.json() },
);

export const searchRequestSchema: Schema<SearchRequest> = s.lazySchema(() =>
  s.object<SearchRequest>(
    {
      ...searchRequestProperties,
      searchUrls: s.array(s.lazy(() => searchUrlSchema)),
      maxItems: s.defaulted(s.int().check(s.gte(1), s.lte(500)), 50),
    },
    { additionalProperties: s.json() },
  ),
);
