import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { noneAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import * as s from "../core/validation/index.js";
import { httpValidationErrorSchema, type HttpValidationError } from "../models/http-validation-error.js";
import { citySchema, type City } from "../models/unions/city.js";
import { latSchema, type Lat } from "../models/unions/lat.js";
import { lonSchema, type Lon } from "../models/unions/lon.js";
import { xApiKeySchema, type XApiKey } from "../models/unions/xapi-key.js";
import {
  xRapidapiProxySecretSchema,
  type XRapidapiProxySecret,
} from "../models/unions/xrapidapi-proxy-secret.js";
import { xRapidapiUserSchema, type XRapidapiUser } from "../models/unions/xrapidapi-user.js";
import type { Servers } from "../servers.js";

export class AirQuality {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;

  constructor(rawClient: RawClient, servers: Servers) {
    this.#rawClient = rawClient;
    this.#servers = servers;
  }

  /**
   * Air Quality
   *
   * @remarks
   * Current air quality (PM2.5/PM10, US & European AQI) by city or lat/lon. (Requires API key.)
   *
   * @returns Successful Response
   *
   * @throws {@link AirQuality.AirQualityAirQualityGetError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link DynamicFeedError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  airQualityAirQualityGet(
    request: AirQuality.AirQualityAirQualityGetRequest = {},
    options?: RequestOptions,
  ): ApiPromise<Record<string, unknown>, AirQuality.AirQualityAirQualityGetError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/air-quality"),
        auth: noneAuth,
        pathParams: [],
        query: [
          { name: "city", value: request.city, schema: s.optional(s.lazy(() => citySchema)) },
          { name: "lat", value: request.lat, schema: s.optional(s.lazy(() => latSchema)) },
          { name: "lon", value: request.lon, schema: s.optional(s.lazy(() => lonSchema)) },
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
        errorFactory: AirQuality.AirQualityAirQualityGetError,
      },
      options,
    );
  }
}

export namespace AirQuality {
  export type AirQualityAirQualityGetRequest = {
    /** city name */
    city?: City;
    lat?: Lat;
    lon?: Lon;
    xApiKey?: XApiKey;
    xRapidapiProxySecret?: XRapidapiProxySecret;
    xRapidapiUser?: XRapidapiUser;
  };

  export class AirQualityAirQualityGetError extends ApiError {
    declare readonly payload: Declared<"httpValidationError", HttpValidationError> | Undeclared;

    static readonly errors: ErrorDecoders<AirQualityAirQualityGetError> = [
      { on: 422, kind: "httpValidationError", decode: { kind: "json", schema: httpValidationErrorSchema } },
    ];
  }
}
