import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { platformSchema, type Platform } from "./platform.js";

export type AuctionLocation = {
  platform?: Platform;
  facilityId?: number;
  name?: string;
  nameDesc?: string | null;
  city?: string | null;
  stateCode?: string | null;
  stateName?: string | null;
  countryCode?: string | null;
  countryName?: string | null;
  zip?: string | null;
  address1?: string | null;
  address2?: string | null;
  phone?: string | null;
  latitude?: number | null;
  longitude?: number | null;
  locationUrl?: string | null;
  saleDay?: string | null;
  saleTime?: string | null;
  timeZone?: string | null;
  todayAuctionCount?: number;
  distance?: number | null;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const auctionLocationProperties: s.Shape<AuctionLocation> = {
  platform: s.optional(s.lazy(() => platformSchema)),
  facilityId: s.optional(s.int()),
  name: s.optional(s.string()),
  nameDesc: s.optionalNullable(s.string()),
  city: s.optionalNullable(s.string()),
  stateCode: s.optionalNullable(s.string()),
  stateName: s.optionalNullable(s.string()),
  countryCode: s.optionalNullable(s.string()),
  countryName: s.optionalNullable(s.string()),
  zip: s.optionalNullable(s.string()),
  address1: s.optionalNullable(s.string()),
  address2: s.optionalNullable(s.string()),
  phone: s.optionalNullable(s.string()),
  latitude: s.optionalNullable(s.float64()),
  longitude: s.optionalNullable(s.float64()),
  locationUrl: s.optionalNullable(s.string()),
  saleDay: s.optionalNullable(s.string()),
  saleTime: s.optionalNullable(s.string()),
  timeZone: s.optionalNullable(s.string()),
  todayAuctionCount: s.optional(s.int()),
  distance: s.optionalNullable(s.float64()),
  _keysMap: {
    facilityId: "facility_id",
    nameDesc: "name_desc",
    stateCode: "state_code",
    stateName: "state_name",
    countryCode: "country_code",
    countryName: "country_name",
    locationUrl: "location_url",
    saleDay: "sale_day",
    saleTime: "sale_time",
    timeZone: "time_zone",
    todayAuctionCount: "today_auction_count",
  },
};

export const auctionLocationInternalSchema: Schema<AuctionLocation> = s.object<AuctionLocation>(
  auctionLocationProperties,
  { additionalProperties: s.json() },
);

export const auctionLocationSchema: Schema<AuctionLocation> = s.lazySchema(() =>
  s.object<AuctionLocation>(
    {
      ...auctionLocationProperties,
      todayAuctionCount: s.optional(s.int().check(s.gte(0))),
    },
    { additionalProperties: s.json() },
  ),
);
