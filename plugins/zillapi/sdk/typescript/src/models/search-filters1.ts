import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { bathsSchema, type Baths } from "./baths.js";
import { bboxSchema, type Bbox } from "./bbox.js";
import { bedsSchema, type Beds } from "./beds.js";
import { daysOnZillowSchema, type DaysOnZillow } from "./days-on-zillow.js";
import { homeTypeSchema, type HomeType } from "./home-type.js";
import { lotSizeSchema, type LotSize } from "./lot-size.js";
import { priceSchema, type Price } from "./price.js";
import { sqftSchema, type Sqft } from "./sqft.js";
import {
  statusZillapiZillowPropertyDataListingsApiSchema,
  type StatusZillapiZillowPropertyDataListingsApi,
} from "./status-zillapi-zillow-property-data-listings-api.js";
import { yearBuiltSchema, type YearBuilt } from "./year-built.js";

/**
 * Normalized search filters. A `bbox` is required (unless the request supplies `searchUrls`
 * instead); a free-text search without a bounding box is rejected with 400 invalid_filters and
 * never hits upstream.
 */
export type SearchFilters1 = {
  /** Listing status. */
  status?: StatusZillapiZillowPropertyDataListingsApi;
  /**
   * Bounding box in decimal degrees. REQUIRED unless searchUrls is supplied at the request level —
   * the search engine needs a real bounding box to render results.
   */
  bbox: Bbox;
  /** Price range in dollars. */
  price?: Price;
  /** Bedroom count range. */
  beds?: Beds;
  /** Bathroom count range. */
  baths?: Baths;
  /** Living-area range in square feet. */
  sqft?: Sqft;
  lotSize?: LotSize;
  yearBuilt?: YearBuilt;
  daysOnZillow?: DaysOnZillow;
  /** Home types to include. */
  homeTypes?: HomeType[];
  hasPool?: boolean;
  hasGarage?: boolean;
  hasAirConditioning?: boolean;
  hasBasement?: boolean;
  isWaterfront?: boolean;
  /**
   * Optional free-text place label (city/ZIP/neighborhood) — a hint only. A `bbox` (or
   * request-level `searchUrls`) is REQUIRED; `location` alone returns 400 (invalid_filters).
   */
  location?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const searchFilters1Schema: Schema<SearchFilters1> = s.object<SearchFilters1>(
  {
    status: s.optional(s.lazy(() => statusZillapiZillowPropertyDataListingsApiSchema)),
    bbox: bboxSchema,
    price: s.optional(s.lazy(() => priceSchema)),
    beds: s.optional(s.lazy(() => bedsSchema)),
    baths: s.optional(s.lazy(() => bathsSchema)),
    sqft: s.optional(s.lazy(() => sqftSchema)),
    lotSize: s.optional(s.lazy(() => lotSizeSchema)),
    yearBuilt: s.optional(s.lazy(() => yearBuiltSchema)),
    daysOnZillow: s.optional(s.lazy(() => daysOnZillowSchema)),
    homeTypes: s.optional(s.array(s.lazy(() => homeTypeSchema))),
    hasPool: s.optional(s.boolean()),
    hasGarage: s.optional(s.boolean()),
    hasAirConditioning: s.optional(s.boolean()),
    hasBasement: s.optional(s.boolean()),
    isWaterfront: s.optional(s.boolean()),
    location: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
