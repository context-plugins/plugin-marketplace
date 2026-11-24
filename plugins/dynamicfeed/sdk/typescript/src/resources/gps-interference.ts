import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { noneAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { httpValidationErrorSchema, type HttpValidationError } from "../models/http-validation-error.js";
import { latSchema, type Lat } from "../models/unions/lat.js";
import { lonSchema, type Lon } from "../models/unions/lon.js";
import { xApiKeySchema, type XApiKey } from "../models/unions/xapi-key.js";
import {
  xRapidapiProxySecretSchema,
  type XRapidapiProxySecret,
} from "../models/unions/xrapidapi-proxy-secret.js";
import { xRapidapiUserSchema, type XRapidapiUser } from "../models/unions/xrapidapi-user.js";
import type { Servers } from "../servers.js";

export class GpsInterference {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;

  constructor(rawClient: RawClient, servers: Servers) {
    this.#rawClient = rawClient;
    this.#servers = servers;
  }

  /**
   * Gps Interference
   *
   * @remarks
   * Probable GPS/GNSS interference (jamming/spoofing) over an area, MEASURED from live ADS-B
   * navigation integrity (the GPSJam method) — a Dynamic Feed-derived signal (from adsb.lol, CC0).
   * Pass a region preset or lat+lon. (Requires API key.)
   *
   * @returns Successful Response
   *
   * @throws {@link GpsInterference.GpsInterferenceGpsInterferenceGetError} when the API answers
   * with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link DynamicFeedError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  gpsInterferenceGpsInterferenceGet(
    request: GpsInterference.GpsInterferenceGpsInterferenceGetRequest = {},
    options?: RequestOptions,
  ): ApiPromise<Record<string, unknown>, GpsInterference.GpsInterferenceGpsInterferenceGetError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/gps-interference"),
        auth: noneAuth,
        pathParams: [],
        query: [
          { name: "region", value: request.region, schema: s.optional(s.string()) },
          { name: "lat", value: request.lat, schema: s.optional(s.lazy(() => latSchema)) },
          { name: "lon", value: request.lon, schema: s.optional(s.lazy(() => lonSchema)) },
          { name: "radius_km", value: request.radiusKm, schema: s.defaulted(s.int(), 300) },
        ],
        headers: [
          { name: "x-api-key", value: request.xApiKey, schema: s.optional(s.lazy(() => xApiKeySchema)) },
          {
            name: "x-rapidapi-proxy-secret",
            value: request.xRapidapiProxySecret,
            schema: s.optional(s.lazy(() => xRapidapiProxySecretSchema)),
          },
          {
            name: "x-rapidapi-user",
            value: request.xRapidapiUser,
            schema: s.optional(s.lazy(() => xRapidapiUserSchema)),
          },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.record(s.string(), s.unknown()) },
        errorFactory: GpsInterference.GpsInterferenceGpsInterferenceGetError,
      },
      options,
    );
  }
}

export namespace GpsInterference {
  export type GpsInterferenceGpsInterferenceGetRequest = {
    /**
     * preset: london, blacksea, baltic, easternmed, persiangulf, korea, finland, caucasus, northsea
     */
    region?: string;
    /** latitude (use with lon instead of a preset) */
    lat?: Lat;
    /** longitude */
    lon?: Lon;
    /** radius around lat/lon in km @default 300 */
    radiusKm?: number;
    xApiKey?: XApiKey;
    xRapidapiProxySecret?: XRapidapiProxySecret;
    xRapidapiUser?: XRapidapiUser;
  };

  export const gpsInterferenceGpsInterferenceGetRequestSchema: Schema<GpsInterferenceGpsInterferenceGetRequest> =
    s.lazySchema(() =>
      s.object<GpsInterferenceGpsInterferenceGetRequest>({
        region: s.optional(s.string()),
        lat: s.optional(s.lazy(() => latSchema)),
        lon: s.optional(s.lazy(() => lonSchema)),
        radiusKm: s.defaulted(s.int().check(s.gte(20), s.lte(460)), 300),
        xApiKey: s.optional(s.lazy(() => xApiKeySchema)),
        xRapidapiProxySecret: s.optional(s.lazy(() => xRapidapiProxySecretSchema)),
        xRapidapiUser: s.optional(s.lazy(() => xRapidapiUserSchema)),
      }),
    );

  export class GpsInterferenceGpsInterferenceGetError extends ApiError {
    declare readonly payload: Declared<"httpValidationError", HttpValidationError> | Undeclared;

    static readonly errors: ErrorDecoders<GpsInterferenceGpsInterferenceGetError> = [
      { on: 422, kind: "httpValidationError", decode: { kind: "json", schema: httpValidationErrorSchema } },
    ];
  }
}
