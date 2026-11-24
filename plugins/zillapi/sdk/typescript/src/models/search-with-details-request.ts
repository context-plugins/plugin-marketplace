import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { ExtractBuildingUnits, extractBuildingUnitsSchema } from "./extract-building-units.js";
import { ExtractionMethod, extractionMethodSchema } from "./extraction-method.js";
import { PropertyStatus, propertyStatusSchema } from "./property-status.js";
import { searchFilters1Schema, type SearchFilters1 } from "./search-filters1.js";
import { searchUrlInternalSchema, searchUrlSchema, type SearchUrl } from "./search-url.js";

export type SearchWithDetailsRequest = {
  /**
   * Normalized search filters. A `bbox` is required (unless the request supplies `searchUrls`
   * instead); a free-text search without a bounding box is rejected with 400 invalid_filters and
   * never hits upstream.
   */
  filters: SearchFilters1;
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
  /** @default PropertyStatus.ForSale */
  propertyStatus?: PropertyStatus;
  /** @default ExtractBuildingUnits.Disabled */
  extractBuildingUnits?: ExtractBuildingUnits;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const searchWithDetailsRequestProperties: s.Shape<SearchWithDetailsRequest> = {
  filters: searchFilters1Schema,
  searchUrls: s.array(s.lazy(() => searchUrlInternalSchema)),
  extractionMethod: s.defaulted(extractionMethodSchema, ExtractionMethod.Pagination),
  maxItems: s.defaulted(s.int(), 50),
  async: s.optional(s.boolean()),
  propertyStatus: s.defaulted(propertyStatusSchema, PropertyStatus.ForSale),
  extractBuildingUnits: s.defaulted(extractBuildingUnitsSchema, ExtractBuildingUnits.Disabled),
};

export const searchWithDetailsRequestInternalSchema: Schema<SearchWithDetailsRequest> =
  s.object<SearchWithDetailsRequest>(searchWithDetailsRequestProperties, { additionalProperties: s.json() });

export const searchWithDetailsRequestSchema: Schema<SearchWithDetailsRequest> = s.lazySchema(() =>
  s.object<SearchWithDetailsRequest>(
    {
      ...searchWithDetailsRequestProperties,
      searchUrls: s.array(s.lazy(() => searchUrlSchema)),
      maxItems: s.defaulted(s.int().check(s.gte(1), s.lte(500)), 50),
    },
    { additionalProperties: s.json() },
  ),
);
