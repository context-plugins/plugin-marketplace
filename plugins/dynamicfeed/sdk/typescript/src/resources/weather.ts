import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { noneAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { httpValidationErrorSchema, type HttpValidationError } from "../models/http-validation-error.js";
import { citySchema, type City } from "../models/unions/city.js";
import { city1InternalSchema, city1Schema, type City1 } from "../models/unions/city1.js";
import { latSchema, type Lat } from "../models/unions/lat.js";
import { lat1InternalSchema, lat1Schema, type Lat1 } from "../models/unions/lat1.js";
import { lonSchema, type Lon } from "../models/unions/lon.js";
import { lon1InternalSchema, lon1Schema, type Lon1 } from "../models/unions/lon1.js";
import { xApiKeySchema, type XApiKey } from "../models/unions/xapi-key.js";
import {
  xRapidapiProxySecretSchema,
  type XRapidapiProxySecret,
} from "../models/unions/xrapidapi-proxy-secret.js";
import { xRapidapiUserSchema, type XRapidapiUser } from "../models/unions/xrapidapi-user.js";
import type { Servers } from "../servers.js";

export class Weather {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;

  constructor(rawClient: RawClient, servers: Servers) {
    this.#rawClient = rawClient;
    this.#servers = servers;
  }

  /**
   * V1 Openweather Current
   *
   * @remarks
   * LEGACY ALIAS — provider is Open-Meteo. Returns the canonical current_weather envelope
   * (app/open_meteo.py: CC-BY 4.0, attribution, freshness, cross-source concordance) plus a
   * provider-identity notice. Prefer the current_weather tool via POST /v1/batch or MCP.
   *
   * @returns Successful Response
   *
   * @throws {@link Weather.V1OpenweatherCurrentV1OpenweatherCurrentGetError} when the API answers
   * with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link DynamicFeedError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  v1OpenweatherCurrentV1OpenweatherCurrentGet(
    request: Weather.V1OpenweatherCurrentV1OpenweatherCurrentGetRequest = {},
    options?: RequestOptions,
  ): ApiPromise<Record<string, unknown>, Weather.V1OpenweatherCurrentV1OpenweatherCurrentGetError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v1/openweather/current"),
        auth: noneAuth,
        pathParams: [],
        query: [
          { name: "city", value: request.city, schema: s.optional(s.lazy(() => city1InternalSchema)) },
          { name: "lat", value: request.lat, schema: s.optional(s.lazy(() => lat1InternalSchema)) },
          { name: "lon", value: request.lon, schema: s.optional(s.lazy(() => lon1InternalSchema)) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.record(s.string(), s.unknown()) },
        errorFactory: Weather.V1OpenweatherCurrentV1OpenweatherCurrentGetError,
      },
      options,
    );
  }

  /**
   * V1 Openweather Forecast
   *
   * @remarks
   * LEGACY ALIAS — provider is Open-Meteo. Returns the canonical multi-model forecast envelope
   * (app/open_meteo.py) plus a provider-identity notice. Prefer weather_forecast via POST /v1/batch
   * or MCP.
   *
   * @returns Successful Response
   *
   * @throws {@link Weather.V1OpenweatherForecastV1OpenweatherForecastGetError} when the API answers
   * with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link DynamicFeedError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  v1OpenweatherForecastV1OpenweatherForecastGet(
    request: Weather.V1OpenweatherForecastV1OpenweatherForecastGetRequest = {},
    options?: RequestOptions,
  ): ApiPromise<Record<string, unknown>, Weather.V1OpenweatherForecastV1OpenweatherForecastGetError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v1/openweather/forecast"),
        auth: noneAuth,
        pathParams: [],
        query: [
          { name: "city", value: request.city, schema: s.optional(s.lazy(() => city1InternalSchema)) },
          { name: "lat", value: request.lat, schema: s.optional(s.lazy(() => lat1InternalSchema)) },
          { name: "lon", value: request.lon, schema: s.optional(s.lazy(() => lon1InternalSchema)) },
          { name: "days", value: request.days, schema: s.defaulted(s.int(), 5) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.record(s.string(), s.unknown()) },
        errorFactory: Weather.V1OpenweatherForecastV1OpenweatherForecastGetError,
      },
      options,
    );
  }

  /**
   * Weather
   *
   * @remarks
   * Current weather anywhere — by city name (geocoded) or lat/lon. Temperature, feels-like, wind,
   * humidity, precipitation & conditions, live from Open-Meteo. (Requires API key.)
   *
   * @returns Successful Response
   *
   * @throws {@link Weather.WeatherWeatherGetError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link DynamicFeedError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  weatherWeatherGet(
    request: Weather.WeatherWeatherGetRequest = {},
    options?: RequestOptions,
  ): ApiPromise<Record<string, unknown>, Weather.WeatherWeatherGetError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/weather"),
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
        errorFactory: Weather.WeatherWeatherGetError,
      },
      options,
    );
  }
}

export namespace Weather {
  export type V1OpenweatherCurrentV1OpenweatherCurrentGetRequest = {
    city?: City1;
    lat?: Lat1;
    lon?: Lon1;
  };

  export class V1OpenweatherCurrentV1OpenweatherCurrentGetError extends ApiError {
    declare readonly payload: Declared<"httpValidationError", HttpValidationError> | Undeclared;

    static readonly errors: ErrorDecoders<V1OpenweatherCurrentV1OpenweatherCurrentGetError> = [
      { on: 422, kind: "httpValidationError", decode: { kind: "json", schema: httpValidationErrorSchema } },
    ];
  }

  export type V1OpenweatherForecastV1OpenweatherForecastGetRequest = {
    city?: City1;
    lat?: Lat1;
    lon?: Lon1;
    /** @default 5 */
    days?: number;
  };

  export const v1OpenweatherForecastV1OpenweatherForecastGetRequestSchema: Schema<V1OpenweatherForecastV1OpenweatherForecastGetRequest> =
    s.lazySchema(() =>
      s.object<V1OpenweatherForecastV1OpenweatherForecastGetRequest>({
        city: s.optional(s.lazy(() => city1Schema)),
        lat: s.optional(s.lazy(() => lat1Schema)),
        lon: s.optional(s.lazy(() => lon1Schema)),
        days: s.defaulted(s.int().check(s.gte(1), s.lte(16)), 5),
      }),
    );

  export class V1OpenweatherForecastV1OpenweatherForecastGetError extends ApiError {
    declare readonly payload: Declared<"httpValidationError", HttpValidationError> | Undeclared;

    static readonly errors: ErrorDecoders<V1OpenweatherForecastV1OpenweatherForecastGetError> = [
      { on: 422, kind: "httpValidationError", decode: { kind: "json", schema: httpValidationErrorSchema } },
    ];
  }

  export type WeatherWeatherGetRequest = {
    /** city name, e.g. London, Tokyo, New York */
    city?: City;
    /** latitude (alternative to city) */
    lat?: Lat;
    /** longitude (alternative to city) */
    lon?: Lon;
    xApiKey?: XApiKey;
    xRapidapiProxySecret?: XRapidapiProxySecret;
    xRapidapiUser?: XRapidapiUser;
  };

  export class WeatherWeatherGetError extends ApiError {
    declare readonly payload: Declared<"httpValidationError", HttpValidationError> | Undeclared;

    static readonly errors: ErrorDecoders<WeatherWeatherGetError> = [
      { on: 422, kind: "httpValidationError", decode: { kind: "json", schema: httpValidationErrorSchema } },
    ];
  }
}
