import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { countryMetadataSchema, type CountryMetadata } from "./country-metadata.js";
import { currencySchema, type Currency } from "./currency.js";
import { geoNetworkSchema, type GeoNetwork } from "./geo-network.js";
import { ipLocationSchema, type IpLocation } from "./ip-location.js";

export type GeolocationResponse = {
  ip?: string;
  location?: IpLocation;
  countryMetadata?: CountryMetadata;
  network?: GeoNetwork;
  currency?: Currency;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const geolocationResponseSchema: Schema<GeolocationResponse> = s.object<GeolocationResponse>(
  {
    ip: s.optional(s.string()),
    location: s.optional(s.lazy(() => ipLocationSchema)),
    countryMetadata: s.optional(s.lazy(() => countryMetadataSchema)),
    network: s.optional(s.lazy(() => geoNetworkSchema)),
    currency: s.optional(s.lazy(() => currencySchema)),
    _keysMap: {
      countryMetadata: "country_metadata",
    },
  },
  { additionalProperties: s.json() },
);
