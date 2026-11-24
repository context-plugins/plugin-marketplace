import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import * as s from "../core/validation/index.js";
import { v1JuliandayResponseSchema, type V1JuliandayResponse } from "../models/v1-julianday-response.js";
import { v1MeteoritesResponseSchema, type V1MeteoritesResponse } from "../models/v1-meteorites-response.js";
import {
  v1PeriodictableResponseSchema,
  type V1PeriodictableResponse,
} from "../models/v1-periodictable-response.js";
import {
  v1StarslookupResponseSchema,
  type V1StarslookupResponse,
} from "../models/v1-starslookup-response.js";
import type { Servers } from "../servers.js";

export class Science {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Julian Day Calculator
   *
   * @remarks
   * Convert a Gregorian date to Julian Day Number
   *
   * @returns Successful Response
   *
   * @throws {@link Science.JuliandayError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link ApiVerveError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  julianday(
    request: Science.JuliandayRequest,
    options?: RequestOptions,
  ): ApiPromise<V1JuliandayResponse, Science.JuliandayError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v1/julianday"),
        auth: this.#auth.apiKey,
        pathParams: [],
        query: [{ name: "date", value: request.date, schema: s.string() }],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: v1JuliandayResponseSchema },
        errorFactory: Science.JuliandayError,
      },
      options,
    );
  }

  /**
   * Meteorite Landings
   *
   * @remarks
   * Get a list of meteorites that have fallen to Earth
   *
   * @returns Successful Response
   *
   * @throws {@link Science.MeteoritesError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link ApiVerveError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  meteorites(
    request: Science.MeteoritesRequest,
    options?: RequestOptions,
  ): ApiPromise<V1MeteoritesResponse, Science.MeteoritesError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v1/meteorites"),
        auth: this.#auth.apiKey,
        pathParams: [],
        query: [
          { name: "name", value: request.name, schema: s.string() },
          { name: "mass", value: request.mass, schema: s.optional(s.float64()) },
          { name: "year", value: request.year, schema: s.optional(s.float64()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: v1MeteoritesResponseSchema },
        errorFactory: Science.MeteoritesError,
      },
      options,
    );
  }

  /**
   * Periodic Table
   *
   * @remarks
   * Get information about a chemical element
   *
   * @returns Successful Response
   *
   * @throws {@link Science.PeriodictableError} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link ApiVerveError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  periodictable(
    request: Science.PeriodictableRequest,
    options?: RequestOptions,
  ): ApiPromise<V1PeriodictableResponse, Science.PeriodictableError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v1/periodictable"),
        auth: this.#auth.apiKey,
        pathParams: [],
        query: [{ name: "name", value: request.name, schema: s.string() }],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: v1PeriodictableResponseSchema },
        errorFactory: Science.PeriodictableError,
      },
      options,
    );
  }

  /**
   * Stars Lookup
   *
   * @remarks
   * Lookup star data based on the star name
   *
   * @returns Successful Response
   *
   * @throws {@link Science.StarslookupError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link ApiVerveError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  starslookup(
    request: Science.StarslookupRequest,
    options?: RequestOptions,
  ): ApiPromise<V1StarslookupResponse, Science.StarslookupError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v1/starslookup"),
        auth: this.#auth.apiKey,
        pathParams: [],
        query: [{ name: "name", value: request.name, schema: s.string() }],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: v1StarslookupResponseSchema },
        errorFactory: Science.StarslookupError,
      },
      options,
    );
  }
}

export namespace Science {
  export type JuliandayRequest = {
    /** The Gregorian date in YYYY-MM-DD format */
    date: string;
  };

  export class JuliandayError extends ApiError {
    declare readonly payload:
      | Declared<"error401", undefined>
      | Declared<"error404", undefined>
      | Declared<"error500", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<JuliandayError> = [
      { on: 401, kind: "error401", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 500, kind: "error500", decode: { kind: "empty" } },
    ];
  }

  export type MeteoritesRequest = {
    /** The name of the meteorite you want to search for */
    name: string;
    /** Minimum mass of the meteorite in grams */
    mass?: number;
    /** The year the meteorite fell to Earth */
    year?: number;
  };

  export class MeteoritesError extends ApiError {
    declare readonly payload:
      | Declared<"error401", undefined>
      | Declared<"error404", undefined>
      | Declared<"error500", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<MeteoritesError> = [
      { on: 401, kind: "error401", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 500, kind: "error500", decode: { kind: "empty" } },
    ];
  }

  export type PeriodictableRequest = {
    /** The name of the chemical element to get information about */
    name: string;
  };

  export class PeriodictableError extends ApiError {
    declare readonly payload:
      | Declared<"error401", undefined>
      | Declared<"error404", undefined>
      | Declared<"error500", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<PeriodictableError> = [
      { on: 401, kind: "error401", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 500, kind: "error500", decode: { kind: "empty" } },
    ];
  }

  export type StarslookupRequest = {
    /** The name of the star for which you want to get the data (e.g., Sirius) */
    name: string;
  };

  export class StarslookupError extends ApiError {
    declare readonly payload:
      | Declared<"error401", undefined>
      | Declared<"error404", undefined>
      | Declared<"error500", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<StarslookupError> = [
      { on: 401, kind: "error401", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 500, kind: "error500", decode: { kind: "empty" } },
    ];
  }
}
