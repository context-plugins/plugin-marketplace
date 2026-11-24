import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { hdpDataSchema, type HdpData } from "./hdp-data.js";
import { latLongSchema, type LatLong } from "./lat-long.js";

/**
 * A single row returned by search/listings endpoints. This is the SEARCH shape — lighter than the
 * full Property detail record and with different field names. To get the full detail record for a
 * row, call GET /v1/properties/{zpid} using its zpid.
 */
export type SearchResultRow = {
  /** Zillow property id, always a string. */
  zpid?: string;
  /** Zillow result id for the row. */
  id?: string | null;
  palsId?: string | null;
  /** Formatted street address for the row. */
  address?: string | null;
  addressStreet?: string | null;
  addressCity?: string | null;
  addressState?: string | null;
  addressZipcode?: string | null;
  /** Formatted price string, e.g. "$1,250,000". */
  price?: string | null;
  /** Numeric price. */
  unformattedPrice?: number | null;
  beds?: number | null;
  baths?: number | null;
  /** Living area in square feet. */
  area?: number | null;
  livingArea?: number | null;
  latLong?: LatLong;
  /** e.g. FOR_SALE, FOR_RENT, SOLD. */
  statusType?: string | null;
  statusText?: string | null;
  homeType?: string | null;
  /** Primary thumbnail image URL. */
  imgSrc?: string | null;
  hasImage?: boolean | null;
  /** Relative or absolute Zillow detail URL for the listing. */
  detailUrl?: string | null;
  hdpData?: HdpData;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const searchResultRowSchema: Schema<SearchResultRow> = s.object<SearchResultRow>(
  {
    zpid: s.optional(s.string()),
    id: s.optionalNullable(s.string()),
    palsId: s.optionalNullable(s.string()),
    address: s.optionalNullable(s.string()),
    addressStreet: s.optionalNullable(s.string()),
    addressCity: s.optionalNullable(s.string()),
    addressState: s.optionalNullable(s.string()),
    addressZipcode: s.optionalNullable(s.string()),
    price: s.optionalNullable(s.string()),
    unformattedPrice: s.optionalNullable(s.float64()),
    beds: s.optionalNullable(s.float64()),
    baths: s.optionalNullable(s.float64()),
    area: s.optionalNullable(s.float64()),
    livingArea: s.optionalNullable(s.float64()),
    latLong: s.optional(s.lazy(() => latLongSchema)),
    statusType: s.optionalNullable(s.string()),
    statusText: s.optionalNullable(s.string()),
    homeType: s.optionalNullable(s.string()),
    imgSrc: s.optionalNullable(s.string()),
    hasImage: s.optionalNullable(s.boolean()),
    detailUrl: s.optionalNullable(s.string()),
    hdpData: s.optional(s.lazy(() => hdpDataSchema)),
  },
  { additionalProperties: s.json() },
);
