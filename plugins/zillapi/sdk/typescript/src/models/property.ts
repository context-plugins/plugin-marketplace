import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { openHouseSchema, type OpenHouse } from "./open-house.js";
import { photoSchema, type Photo } from "./photo.js";
import { priceHistoryEventSchema, type PriceHistoryEvent } from "./price-history-event.js";
import { schoolSchema, type School } from "./school.js";
import { taxHistoryEventSchema, type TaxHistoryEvent } from "./tax-history-event.js";

/**
 * Full property-detail record (300+ fields; additional properties allowed). This is the DETAIL
 * shape and differs from the SearchResultRow shape returned by search endpoints.
 */
export type Property = {
  /** Zillow property id, always returned as a string. */
  zpid?: string;
  address?: Record<string, unknown>;
  price?: number;
  bedrooms?: number;
  bathrooms?: number;
  livingArea?: number;
  lotSize?: number;
  yearBuilt?: number;
  /** SINGLE_FAMILY | CONDO | TOWNHOUSE | MULTI_FAMILY | APARTMENT | MANUFACTURED | LOT */
  homeType?: string;
  /** FOR_SALE | RECENTLY_SOLD | FOR_RENT | ... */
  homeStatus?: string;
  latitude?: number;
  longitude?: number;
  zestimate?: number | null;
  rentZestimate?: number | null;
  priceHistory?: PriceHistoryEvent[];
  taxHistory?: TaxHistoryEvent[];
  schools?: School[];
  nearbyHomes?: Record<string, unknown>[];
  responsivePhotos?: Photo[];
  photoCount?: number;
  openHouseSchedule?: OpenHouse[];
  tourEligibility?: Record<string, unknown>;
  resoFacts?: Record<string, unknown>;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const propertySchema: Schema<Property> = s.object<Property>(
  {
    zpid: s.optional(s.string()),
    address: s.optional(s.record(s.string(), s.unknown())),
    price: s.optional(s.float64()),
    bedrooms: s.optional(s.float64()),
    bathrooms: s.optional(s.float64()),
    livingArea: s.optional(s.float64()),
    lotSize: s.optional(s.float64()),
    yearBuilt: s.optional(s.int()),
    homeType: s.optional(s.string()),
    homeStatus: s.optional(s.string()),
    latitude: s.optional(s.float64()),
    longitude: s.optional(s.float64()),
    zestimate: s.optionalNullable(s.float64()),
    rentZestimate: s.optionalNullable(s.float64()),
    priceHistory: s.optional(s.array(s.lazy(() => priceHistoryEventSchema))),
    taxHistory: s.optional(s.array(s.lazy(() => taxHistoryEventSchema))),
    schools: s.optional(s.array(s.lazy(() => schoolSchema))),
    nearbyHomes: s.optional(s.array(s.record(s.string(), s.unknown()))),
    responsivePhotos: s.optional(s.array(s.lazy(() => photoSchema))),
    photoCount: s.optional(s.int()),
    openHouseSchedule: s.optional(s.array(s.lazy(() => openHouseSchema))),
    tourEligibility: s.optional(s.record(s.string(), s.unknown())),
    resoFacts: s.optional(s.record(s.string(), s.unknown())),
  },
  { additionalProperties: s.json() },
);
