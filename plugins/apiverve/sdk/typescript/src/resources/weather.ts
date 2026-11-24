import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import * as s from "../core/validation/index.js";
import { v1AirqualityResponseSchema, type V1AirqualityResponse } from "../models/v1-airquality-response.js";
import { v1EarthquakeResponseSchema, type V1EarthquakeResponse } from "../models/v1-earthquake-response.js";
import {
  v1MarineweatherResponseSchema,
  type V1MarineweatherResponse,
} from "../models/v1-marineweather-response.js";
import {
  v1MoonrisemoonsetResponseSchema,
  type V1MoonrisemoonsetResponse,
} from "../models/v1-moonrisemoonset-response.js";
import {
  v1SolarpotentialResponseSchema,
  type V1SolarpotentialResponse,
} from "../models/v1-solarpotential-response.js";
import {
  v1SunrisesunsetResponseSchema,
  type V1SunrisesunsetResponse,
} from "../models/v1-sunrisesunset-response.js";
import {
  v1WeatherforecastResponseSchema,
  type V1WeatherforecastResponse,
} from "../models/v1-weatherforecast-response.js";
import {
  v1WeatherseasonsResponseSchema,
  type V1WeatherseasonsResponse,
} from "../models/v1-weatherseasons-response.js";
import type { Servers } from "../servers.js";

export class Weather {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Air Quality
   *
   * @remarks
   * Get the air quality data for a city
   *
   * @returns Successful Response
   *
   * @throws {@link Weather.AirqualityError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link ApiVerveError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  airquality(
    request: Weather.AirqualityRequest,
    options?: RequestOptions,
  ): ApiPromise<V1AirqualityResponse, Weather.AirqualityError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v1/airquality"),
        auth: this.#auth.apiKey,
        pathParams: [],
        query: [{ name: "city", value: request.city, schema: s.string() }],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: v1AirqualityResponseSchema },
        errorFactory: Weather.AirqualityError,
      },
      options,
    );
  }

  /**
   * Worldwide Earthquakes
   *
   * @remarks
   * Earthquake is a simple tool for getting earthquake data. It returns the earthquake data for the
   * past hour.
   *
   * @returns Successful Response
   *
   * @throws {@link Weather.EarthquakeError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link ApiVerveError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  earthquake(options?: RequestOptions): ApiPromise<V1EarthquakeResponse, Weather.EarthquakeError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v1/earthquake"),
        auth: this.#auth.apiKey,
        pathParams: [],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: v1EarthquakeResponseSchema },
        errorFactory: Weather.EarthquakeError,
      },
      options,
    );
  }

  /**
   * Marine Weather
   *
   * @remarks
   * Get the marine weather data for a location using latitude and longitude coordinates
   *
   * @returns Successful Response
   *
   * @throws {@link Weather.MarineweatherError} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link ApiVerveError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  marineweather(
    request: Weather.MarineweatherRequest,
    options?: RequestOptions,
  ): ApiPromise<V1MarineweatherResponse, Weather.MarineweatherError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v1/marineweather"),
        auth: this.#auth.apiKey,
        pathParams: [],
        query: [
          { name: "lat", value: request.lat, schema: s.float64() },
          { name: "lon", value: request.lon, schema: s.float64() },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: v1MarineweatherResponseSchema },
        errorFactory: Weather.MarineweatherError,
      },
      options,
    );
  }

  /**
   * Moonrise Moonset
   *
   * @remarks
   * Get moonrise and moonset times based on the location
   *
   * @returns Successful Response
   *
   * @throws {@link Weather.MoonrisemoonsetError} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link ApiVerveError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  moonrisemoonset(
    request: Weather.MoonrisemoonsetRequest,
    options?: RequestOptions,
  ): ApiPromise<V1MoonrisemoonsetResponse, Weather.MoonrisemoonsetError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v1/moonrisemoonset"),
        auth: this.#auth.apiKey,
        pathParams: [],
        query: [
          { name: "lat", value: request.lat, schema: s.float64() },
          { name: "lon", value: request.lon, schema: s.float64() },
          { name: "date", value: request.date, schema: s.optional(s.string()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: v1MoonrisemoonsetResponseSchema },
        errorFactory: Weather.MoonrisemoonsetError,
      },
      options,
    );
  }

  /**
   * Solar Potential
   *
   * @remarks
   * Solar Potential is a simple tool for getting the estimated annual energy production of a PV
   * system. It returns the estimated annual energy production of a PV system.
   *
   * @returns Successful Response
   *
   * @throws {@link Weather.SolarpotentialError} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link ApiVerveError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  solarpotential(
    request: Weather.SolarpotentialRequest,
    options?: RequestOptions,
  ): ApiPromise<V1SolarpotentialResponse, Weather.SolarpotentialError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v1/solarpotential"),
        auth: this.#auth.apiKey,
        pathParams: [],
        query: [
          { name: "lat", value: request.lat, schema: s.float64() },
          { name: "lon", value: request.lon, schema: s.float64() },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: v1SolarpotentialResponseSchema },
        errorFactory: Weather.SolarpotentialError,
      },
      options,
    );
  }

  /**
   * Sunrise Sunset
   *
   * @remarks
   * Get the sunrise and sunset times for a given location
   *
   * @returns Successful Response
   *
   * @throws {@link Weather.SunrisesunsetError} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link ApiVerveError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  sunrisesunset(
    request: Weather.SunrisesunsetRequest,
    options?: RequestOptions,
  ): ApiPromise<V1SunrisesunsetResponse, Weather.SunrisesunsetError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v1/sunrisesunset"),
        auth: this.#auth.apiKey,
        pathParams: [],
        query: [
          { name: "lat", value: request.lat, schema: s.float64() },
          { name: "lon", value: request.lon, schema: s.float64() },
          { name: "date", value: request.date, schema: s.optional(s.string()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: v1SunrisesunsetResponseSchema },
        errorFactory: Weather.SunrisesunsetError,
      },
      options,
    );
  }

  /**
   * Weather
   *
   * @remarks
   * Get the current weather for a given location
   *
   * @returns Successful Response
   *
   * @throws {@link Weather.WeatherforecastError} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link ApiVerveError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  weatherforecast(
    request: Weather.WeatherforecastRequest,
    options?: RequestOptions,
  ): ApiPromise<V1WeatherforecastResponse, Weather.WeatherforecastError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v1/weatherforecast"),
        auth: this.#auth.apiKey,
        pathParams: [],
        query: [{ name: "city", value: request.city, schema: s.string() }],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: v1WeatherforecastResponseSchema },
        errorFactory: Weather.WeatherforecastError,
      },
      options,
    );
  }

  /**
   * Weather Seasons
   *
   * @remarks
   * Get the dates of the solstice and equinox for a given year
   *
   * @returns Successful Response
   *
   * @throws {@link Weather.WeatherseasonsError} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link ApiVerveError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  weatherseasons(
    request: Weather.WeatherseasonsRequest = {},
    options?: RequestOptions,
  ): ApiPromise<V1WeatherseasonsResponse, Weather.WeatherseasonsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v1/weatherseasons"),
        auth: this.#auth.apiKey,
        pathParams: [],
        query: [{ name: "year", value: request.year, schema: s.optional(s.int()) }],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: v1WeatherseasonsResponseSchema },
        errorFactory: Weather.WeatherseasonsError,
      },
      options,
    );
  }
}

export namespace Weather {
  export type AirqualityRequest = {
    /** The city name for which you want to get the air quality data (e.g., New York) */
    city: string;
  };

  export class AirqualityError extends ApiError {
    declare readonly payload:
      | Declared<"error401", undefined>
      | Declared<"error404", undefined>
      | Declared<"error500", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<AirqualityError> = [
      { on: 401, kind: "error401", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 500, kind: "error500", decode: { kind: "empty" } },
    ];
  }

  export class EarthquakeError extends ApiError {
    declare readonly payload:
      | Declared<"error401", undefined>
      | Declared<"error404", undefined>
      | Declared<"error500", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<EarthquakeError> = [
      { on: 401, kind: "error401", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 500, kind: "error500", decode: { kind: "empty" } },
    ];
  }

  export type MarineweatherRequest = {
    /** The latitude coordinate of the location */
    lat: number;
    /** The longitude coordinate of the location */
    lon: number;
  };

  export class MarineweatherError extends ApiError {
    declare readonly payload:
      | Declared<"error401", undefined>
      | Declared<"error404", undefined>
      | Declared<"error500", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<MarineweatherError> = [
      { on: 401, kind: "error401", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 500, kind: "error500", decode: { kind: "empty" } },
    ];
  }

  export type MoonrisemoonsetRequest = {
    /** The latitude of the location */
    lat: number;
    /** The longitude of the location */
    lon: number;
    /** The date to get the moonrise and moonset times for (MM-dd-yyyy) */
    date?: string;
  };

  export class MoonrisemoonsetError extends ApiError {
    declare readonly payload:
      | Declared<"error401", undefined>
      | Declared<"error404", undefined>
      | Declared<"error500", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<MoonrisemoonsetError> = [
      { on: 401, kind: "error401", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 500, kind: "error500", decode: { kind: "empty" } },
    ];
  }

  export type SolarpotentialRequest = {
    /** The latitude of the location */
    lat: number;
    /** The longitude of the location */
    lon: number;
  };

  export class SolarpotentialError extends ApiError {
    declare readonly payload:
      | Declared<"error401", undefined>
      | Declared<"error404", undefined>
      | Declared<"error500", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<SolarpotentialError> = [
      { on: 401, kind: "error401", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 500, kind: "error500", decode: { kind: "empty" } },
    ];
  }

  export type SunrisesunsetRequest = {
    /** The latitude of the location */
    lat: number;
    /** The longitude of the location */
    lon: number;
    /**
     * The date for which you want to get the sunrise and sunset times (e.g., MM-DD-YYYY :
     * 01-01-2022)
     */
    date?: string;
  };

  export class SunrisesunsetError extends ApiError {
    declare readonly payload:
      | Declared<"error401", undefined>
      | Declared<"error404", undefined>
      | Declared<"error500", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<SunrisesunsetError> = [
      { on: 401, kind: "error401", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 500, kind: "error500", decode: { kind: "empty" } },
    ];
  }

  export type WeatherforecastRequest = {
    /** The city for which you want to get the current weather (e.g., San Francisco) */
    city: string;
  };

  export class WeatherforecastError extends ApiError {
    declare readonly payload:
      | Declared<"error401", undefined>
      | Declared<"error404", undefined>
      | Declared<"error500", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<WeatherforecastError> = [
      { on: 401, kind: "error401", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 500, kind: "error500", decode: { kind: "empty" } },
    ];
  }

  export type WeatherseasonsRequest = {
    /** The year to get the dates of the solstice and equinox */
    year?: number;
  };

  export class WeatherseasonsError extends ApiError {
    declare readonly payload:
      | Declared<"error401", undefined>
      | Declared<"error404", undefined>
      | Declared<"error500", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<WeatherseasonsError> = [
      { on: 401, kind: "error401", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 500, kind: "error500", decode: { kind: "empty" } },
    ];
  }
}
