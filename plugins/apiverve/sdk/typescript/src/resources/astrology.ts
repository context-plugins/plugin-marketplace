import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import {
  v1ChinesezodiacResponseSchema,
  type V1ChinesezodiacResponse,
} from "../models/v1-chinesezodiac-response.js";
import { v1HoroscopeResponseSchema, type V1HoroscopeResponse } from "../models/v1-horoscope-response.js";
import { v1MoonphasesResponseSchema, type V1MoonphasesResponse } from "../models/v1-moonphases-response.js";
import {
  v1MoonpositionResponseSchema,
  type V1MoonpositionResponse,
} from "../models/v1-moonposition-response.js";
import {
  v1PlanetpositionsRequestSchema,
  type V1PlanetpositionsRequest,
} from "../models/v1-planetpositions-request.js";
import {
  v1PlanetpositionsResponseSchema,
  type V1PlanetpositionsResponse,
} from "../models/v1-planetpositions-response.js";
import {
  v1SunpositionResponseSchema,
  type V1SunpositionResponse,
} from "../models/v1-sunposition-response.js";
import type { Servers } from "../servers.js";

export class Astrology {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Chinese Zodiac
   *
   * @remarks
   * Get Chinese zodiac information for a specific date
   *
   * @returns Successful Response
   *
   * @throws {@link Astrology.ChinesezodiacError} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link ApiVerveError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  chinesezodiac(
    request: Astrology.ChinesezodiacRequest,
    options?: RequestOptions,
  ): ApiPromise<V1ChinesezodiacResponse, Astrology.ChinesezodiacError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v1/chinesezodiac"),
        auth: this.#auth.apiKey,
        pathParams: [],
        query: [{ name: "date", value: request.date, schema: s.string() }],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: v1ChinesezodiacResponseSchema },
        errorFactory: Astrology.ChinesezodiacError,
      },
      options,
    );
  }

  /**
   * Horoscope
   *
   * @remarks
   * Get the horoscope of the day for a specific zodiac sign
   *
   * @returns Successful Response
   *
   * @throws {@link Astrology.HoroscopeError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link ApiVerveError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  horoscope(
    request: Astrology.HoroscopeRequest,
    options?: RequestOptions,
  ): ApiPromise<V1HoroscopeResponse, Astrology.HoroscopeError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v1/horoscope"),
        auth: this.#auth.apiKey,
        pathParams: [],
        query: [{ name: "sign", value: request.sign, schema: s.string() }],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: v1HoroscopeResponseSchema },
        errorFactory: Astrology.HoroscopeError,
      },
      options,
    );
  }

  /**
   * Moon Phases
   *
   * @remarks
   * Get the moon phase for today
   *
   * @returns Successful Response
   *
   * @throws {@link Astrology.MoonphasesError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link ApiVerveError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  moonphases(
    request: Astrology.MoonphasesRequest = {},
    options?: RequestOptions,
  ): ApiPromise<V1MoonphasesResponse, Astrology.MoonphasesError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v1/moonphases"),
        auth: this.#auth.apiKey,
        pathParams: [],
        query: [{ name: "today", value: request.today, schema: s.optional(s.boolean()) }],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: v1MoonphasesResponseSchema },
        errorFactory: Astrology.MoonphasesError,
      },
      options,
    );
  }

  /**
   * Moon Position
   *
   * @remarks
   * Get moon position data based on the location
   *
   * @returns Successful Response
   *
   * @throws {@link Astrology.MoonpositionError} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link ApiVerveError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  moonposition(
    request: Astrology.MoonpositionRequest,
    options?: RequestOptions,
  ): ApiPromise<V1MoonpositionResponse, Astrology.MoonpositionError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v1/moonposition"),
        auth: this.#auth.apiKey,
        pathParams: [],
        query: [
          { name: "lat", value: request.lat, schema: s.float64() },
          { name: "lon", value: request.lon, schema: s.float64() },
          { name: "date", value: request.date, schema: s.optional(s.string()) },
          { name: "time", value: request.time, schema: s.optional(s.string()) },
          { name: "timezone", value: request.timezone, schema: s.optional(s.string()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: v1MoonpositionResponseSchema },
        errorFactory: Astrology.MoonpositionError,
      },
      options,
    );
  }

  /**
   * Planet Positions
   *
   * @remarks
   * Planet Positions is a simple tool for getting the position of planets in the solar system. It
   * returns the position of planets in the solar system.
   *
   * @returns Successful Response
   *
   * @throws {@link Astrology.PlanetpositionsError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link ApiVerveError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  planetpositions(
    request: Astrology.PlanetpositionsRequest,
    options?: RequestOptions,
  ): ApiPromise<V1PlanetpositionsResponse, Astrology.PlanetpositionsError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/v1/planetpositions"),
        auth: this.#auth.apiKey,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: v1PlanetpositionsRequestSchema },
      },
      {
        success: { kind: "json", schema: v1PlanetpositionsResponseSchema },
        errorFactory: Astrology.PlanetpositionsError,
      },
      options,
    );
  }

  /**
   * Sun Position
   *
   * @remarks
   * Get sun position data based on the location
   *
   * @returns Successful Response
   *
   * @throws {@link Astrology.SunpositionError} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link ApiVerveError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  sunposition(
    request: Astrology.SunpositionRequest,
    options?: RequestOptions,
  ): ApiPromise<V1SunpositionResponse, Astrology.SunpositionError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v1/sunposition"),
        auth: this.#auth.apiKey,
        pathParams: [],
        query: [
          { name: "lat", value: request.lat, schema: s.float64() },
          { name: "lon", value: request.lon, schema: s.float64() },
          { name: "date", value: request.date, schema: s.optional(s.string()) },
          { name: "time", value: request.time, schema: s.optional(s.string()) },
          { name: "timezone", value: request.timezone, schema: s.optional(s.string()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: v1SunpositionResponseSchema },
        errorFactory: Astrology.SunpositionError,
      },
      options,
    );
  }
}

export namespace Astrology {
  export type ChinesezodiacRequest = {
    /** The date in YYYY-MM-DD format (years 1900-2100) */
    date: string;
  };

  export class ChinesezodiacError extends ApiError {
    declare readonly payload:
      | Declared<"error401", undefined>
      | Declared<"error404", undefined>
      | Declared<"error500", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<ChinesezodiacError> = [
      { on: 401, kind: "error401", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 500, kind: "error500", decode: { kind: "empty" } },
    ];
  }

  export type HoroscopeRequest = {
    /** The zodiac sign for which you want to get the horoscope */
    sign: string;
  };

  export class HoroscopeError extends ApiError {
    declare readonly payload:
      | Declared<"error401", undefined>
      | Declared<"error404", undefined>
      | Declared<"error500", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<HoroscopeError> = [
      { on: 401, kind: "error401", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 500, kind: "error500", decode: { kind: "empty" } },
    ];
  }

  export type MoonphasesRequest = {
    /** Get the moon phase for today */
    today?: boolean;
  };

  export class MoonphasesError extends ApiError {
    declare readonly payload:
      | Declared<"error401", undefined>
      | Declared<"error404", undefined>
      | Declared<"error500", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<MoonphasesError> = [
      { on: 401, kind: "error401", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 500, kind: "error500", decode: { kind: "empty" } },
    ];
  }

  export type MoonpositionRequest = {
    /** The latitude of the location */
    lat: number;
    /** The longitude of the location */
    lon: number;
    /** The date to get the moon position data for (MM-dd-yyyy) */
    date?: string;
    /**
     * The time of day for the calculation (HH:mm format, 24-hour). Defaults to 00:00 if not
     * provided
     */
    time?: string;
    /**
     * IANA timezone name the date and time are given in. Defaults to the timezone of the supplied
     * coordinates
     */
    timezone?: string;
  };

  export class MoonpositionError extends ApiError {
    declare readonly payload:
      | Declared<"error401", undefined>
      | Declared<"error404", undefined>
      | Declared<"error500", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<MoonpositionError> = [
      { on: 401, kind: "error401", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 500, kind: "error500", decode: { kind: "empty" } },
    ];
  }

  export type PlanetpositionsRequest = {
    body: V1PlanetpositionsRequest;
  };

  export class PlanetpositionsError extends ApiError {
    declare readonly payload:
      | Declared<"error401", undefined>
      | Declared<"error404", undefined>
      | Declared<"error500", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<PlanetpositionsError> = [
      { on: 401, kind: "error401", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 500, kind: "error500", decode: { kind: "empty" } },
    ];
  }

  export type SunpositionRequest = {
    /** The latitude of the location */
    lat: number;
    /** The longitude of the location */
    lon: number;
    /** The date to get the sun position data for (MM-DD-YYYY) */
    date?: string;
    /**
     * The time of day for the calculation (HH:mm format, 24-hour), read in the timezone of the
     * coordinates. Defaults to 00:00 if not provided
     */
    time?: string;
    /**
     * IANA timezone to read the date and time in, such as America/Los_Angeles. Defaults to the
     * timezone of the coordinates
     */
    timezone?: string;
  };

  export class SunpositionError extends ApiError {
    declare readonly payload:
      | Declared<"error401", undefined>
      | Declared<"error404", undefined>
      | Declared<"error500", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<SunpositionError> = [
      { on: 401, kind: "error401", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 500, kind: "error500", decode: { kind: "empty" } },
    ];
  }
}
