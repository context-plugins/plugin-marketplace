import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import * as s from "../core/validation/index.js";
import {
  v1CitieslookupResponseSchema,
  type V1CitieslookupResponse,
} from "../models/v1-citieslookup-response.js";
import {
  v1CoordinatesareseaResponseSchema,
  type V1CoordinatesareseaResponse,
} from "../models/v1-coordinatesaresea-response.js";
import {
  v1CountrybordersResponseSchema,
  type V1CountrybordersResponse,
} from "../models/v1-countryborders-response.js";
import {
  v1CountryboundariesResponseSchema,
  type V1CountryboundariesResponse,
} from "../models/v1-countryboundaries-response.js";
import {
  v1CountryflagsResponseSchema,
  type V1CountryflagsResponse,
} from "../models/v1-countryflags-response.js";
import {
  v1CountrylanguagesResponseSchema,
  type V1CountrylanguagesResponse,
} from "../models/v1-countrylanguages-response.js";
import {
  v1CountrylookupResponseSchema,
  type V1CountrylookupResponse,
} from "../models/v1-countrylookup-response.js";
import { v1CountydataResponseSchema, type V1CountydataResponse } from "../models/v1-countydata-response.js";
import {
  v1DistancecalculatorResponseSchema,
  type V1DistancecalculatorResponse,
} from "../models/v1-distancecalculator-response.js";
import {
  v1HardinesszoneResponseSchema,
  type V1HardinesszoneResponse,
} from "../models/v1-hardinesszone-response.js";
import {
  v1ReversegeocodeResponseSchema,
  type V1ReversegeocodeResponse,
} from "../models/v1-reversegeocode-response.js";
import {
  v1StateboundariesResponseSchema,
  type V1StateboundariesResponse,
} from "../models/v1-stateboundaries-response.js";
import { v1ZipcodesResponseSchema, type V1ZipcodesResponse } from "../models/v1-zipcodes-response.js";
import type { Servers } from "../servers.js";

export class Geography {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Cities Lookup
   *
   * @remarks
   * Lookup city data based on the city name
   *
   * @returns Successful Response
   *
   * @throws {@link Geography.CitieslookupError} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link ApiVerveError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  citieslookup(
    request: Geography.CitieslookupRequest,
    options?: RequestOptions,
  ): ApiPromise<V1CitieslookupResponse, Geography.CitieslookupError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v1/citieslookup"),
        auth: this.#auth.apiKey,
        pathParams: [],
        query: [
          { name: "city", value: request.city, schema: s.string() },
          { name: "limit", value: request.limit, schema: s.optional(s.int()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: v1CitieslookupResponseSchema },
        errorFactory: Geography.CitieslookupError,
      },
      options,
    );
  }

  /**
   * Coordinates Are Sea
   *
   * @remarks
   * Check if the coordinates are in the sea
   *
   * @returns Successful Response
   *
   * @throws {@link Geography.CoordinatesareseaError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link ApiVerveError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  coordinatesaresea(
    request: Geography.CoordinatesareseaRequest,
    options?: RequestOptions,
  ): ApiPromise<V1CoordinatesareseaResponse, Geography.CoordinatesareseaError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v1/coordinatesaresea"),
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
        success: { kind: "json", schema: v1CoordinatesareseaResponseSchema },
        errorFactory: Geography.CoordinatesareseaError,
      },
      options,
    );
  }

  /**
   * Country Borders
   *
   * @remarks
   * Country Borders is a simple tool for getting the list of neighboring countries for a specific
   * country. It returns the list of neighboring countries for the specified country.
   *
   * @returns Successful Response
   *
   * @throws {@link Geography.CountrybordersError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link ApiVerveError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  countryborders(
    request: Geography.CountrybordersRequest,
    options?: RequestOptions,
  ): ApiPromise<V1CountrybordersResponse, Geography.CountrybordersError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v1/countryborders"),
        auth: this.#auth.apiKey,
        pathParams: [],
        query: [{ name: "country", value: request.country, schema: s.string() }],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: v1CountrybordersResponseSchema },
        errorFactory: Geography.CountrybordersError,
      },
      options,
    );
  }

  /**
   * Country Boundaries
   *
   * @remarks
   * Country Boundaries is a simple tool for getting the shape of a specific country's border. It
   * returns the shape of the specified country's border.
   *
   * @returns Successful Response
   *
   * @throws {@link Geography.CountryboundariesError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link ApiVerveError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  countryboundaries(
    request: Geography.CountryboundariesRequest,
    options?: RequestOptions,
  ): ApiPromise<V1CountryboundariesResponse, Geography.CountryboundariesError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v1/countryboundaries"),
        auth: this.#auth.apiKey,
        pathParams: [],
        query: [{ name: "country", value: request.country, schema: s.string() }],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: v1CountryboundariesResponseSchema },
        errorFactory: Geography.CountryboundariesError,
      },
      options,
    );
  }

  /**
   * Country Flags
   *
   * @remarks
   * Country Flag is a simple tool for getting the country's national flags. It returns the
   * country's national flags.
   *
   * @returns Successful Response
   *
   * @throws {@link Geography.CountryflagsError} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link ApiVerveError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  countryflags(
    request: Geography.CountryflagsRequest,
    options?: RequestOptions,
  ): ApiPromise<V1CountryflagsResponse, Geography.CountryflagsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v1/countryflags"),
        auth: this.#auth.apiKey,
        pathParams: [],
        query: [
          { name: "country", value: request.country, schema: s.string() },
          { name: "format", value: request.format, schema: s.string() },
          { name: "shape", value: request.shape, schema: s.string() },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: v1CountryflagsResponseSchema },
        errorFactory: Geography.CountryflagsError,
      },
      options,
    );
  }

  /**
   * Country Languages
   *
   * @remarks
   * Country Languages is a simple tool for getting the list of official and commonly spoken
   * languages in a specific country.
   *
   * @returns Successful Response
   *
   * @throws {@link Geography.CountrylanguagesError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link ApiVerveError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  countrylanguages(
    request: Geography.CountrylanguagesRequest,
    options?: RequestOptions,
  ): ApiPromise<V1CountrylanguagesResponse, Geography.CountrylanguagesError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v1/countrylanguages"),
        auth: this.#auth.apiKey,
        pathParams: [],
        query: [{ name: "country", value: request.country, schema: s.string() }],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: v1CountrylanguagesResponseSchema },
        errorFactory: Geography.CountrylanguagesError,
      },
      options,
    );
  }

  /**
   * Country Lookup
   *
   * @remarks
   * Lookup country data based on the country ISO Code
   *
   * @returns Successful Response
   *
   * @throws {@link Geography.CountrylookupError} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link ApiVerveError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  countrylookup(
    request: Geography.CountrylookupRequest,
    options?: RequestOptions,
  ): ApiPromise<V1CountrylookupResponse, Geography.CountrylookupError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v1/countrylookup"),
        auth: this.#auth.apiKey,
        pathParams: [],
        query: [
          { name: "country", value: request.country, schema: s.string() },
          { name: "majorcities", value: request.majorcities, schema: s.optional(s.boolean()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: v1CountrylookupResponseSchema },
        errorFactory: Geography.CountrylookupError,
      },
      options,
    );
  }

  /**
   * County Data Lookup
   *
   * @remarks
   * Get data about a US county
   *
   * @returns Successful Response
   *
   * @throws {@link Geography.CountydataError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link ApiVerveError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  countydata(
    request: Geography.CountydataRequest,
    options?: RequestOptions,
  ): ApiPromise<V1CountydataResponse, Geography.CountydataError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v1/countydata"),
        auth: this.#auth.apiKey,
        pathParams: [],
        query: [
          { name: "state", value: request.state, schema: s.string() },
          { name: "county", value: request.county, schema: s.string() },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: v1CountydataResponseSchema },
        errorFactory: Geography.CountydataError,
      },
      options,
    );
  }

  /**
   * Distance Calculator
   *
   * @remarks
   * Calculate the distance between two coordinates
   *
   * @returns Successful Response
   *
   * @throws {@link Geography.DistancecalculatorError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link ApiVerveError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  distancecalculator(
    request: Geography.DistancecalculatorRequest,
    options?: RequestOptions,
  ): ApiPromise<V1DistancecalculatorResponse, Geography.DistancecalculatorError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v1/distancecalculator"),
        auth: this.#auth.apiKey,
        pathParams: [],
        query: [
          { name: "lat1", value: request.lat1, schema: s.float64() },
          { name: "lon1", value: request.lon1, schema: s.float64() },
          { name: "lat2", value: request.lat2, schema: s.float64() },
          { name: "lon2", value: request.lon2, schema: s.float64() },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: v1DistancecalculatorResponseSchema },
        errorFactory: Geography.DistancecalculatorError,
      },
      options,
    );
  }

  /**
   * USDA Hardiness Zone
   *
   * @remarks
   * Hardiness Zone is a simple tool for getting the USDA Plant Hardiness Zone for a given zip code
   *
   * @returns Successful Response
   *
   * @throws {@link Geography.HardinesszoneError} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link ApiVerveError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  hardinesszone(
    request: Geography.HardinesszoneRequest,
    options?: RequestOptions,
  ): ApiPromise<V1HardinesszoneResponse, Geography.HardinesszoneError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v1/hardinesszone"),
        auth: this.#auth.apiKey,
        pathParams: [],
        query: [{ name: "zip", value: request.zip, schema: s.string() }],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: v1HardinesszoneResponseSchema },
        errorFactory: Geography.HardinesszoneError,
      },
      options,
    );
  }

  /**
   * Reverse Geocode
   *
   * @remarks
   * Get the location of a set of coordinates, Only supports USA and Canada Coordinates
   *
   * @returns Successful Response
   *
   * @throws {@link Geography.ReversegeocodeError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link ApiVerveError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  reversegeocode(
    request: Geography.ReversegeocodeRequest,
    options?: RequestOptions,
  ): ApiPromise<V1ReversegeocodeResponse, Geography.ReversegeocodeError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v1/reversegeocode"),
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
        success: { kind: "json", schema: v1ReversegeocodeResponseSchema },
        errorFactory: Geography.ReversegeocodeError,
      },
      options,
    );
  }

  /**
   * State Boundaries
   *
   * @remarks
   * State Boundaries is a simple tool for getting the boundaries of a specific state's border. It
   * returns the shape of the specified state's border.
   *
   * @returns Successful Response
   *
   * @throws {@link Geography.StateboundariesError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link ApiVerveError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  stateboundaries(
    request: Geography.StateboundariesRequest,
    options?: RequestOptions,
  ): ApiPromise<V1StateboundariesResponse, Geography.StateboundariesError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v1/stateboundaries"),
        auth: this.#auth.apiKey,
        pathParams: [],
        query: [{ name: "state", value: request.state, schema: s.string() }],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: v1StateboundariesResponseSchema },
        errorFactory: Geography.StateboundariesError,
      },
      options,
    );
  }

  /**
   * Zip Codes Lookup
   *
   * @remarks
   * Lookup the zip code information
   *
   * @returns Successful Response
   *
   * @throws {@link Geography.ZipcodesError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link ApiVerveError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  zipcodes(
    request: Geography.ZipcodesRequest,
    options?: RequestOptions,
  ): ApiPromise<V1ZipcodesResponse, Geography.ZipcodesError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v1/zipcodes"),
        auth: this.#auth.apiKey,
        pathParams: [],
        query: [{ name: "zip", value: request.zip, schema: s.string() }],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: v1ZipcodesResponseSchema },
        errorFactory: Geography.ZipcodesError,
      },
      options,
    );
  }
}

export namespace Geography {
  export type CitieslookupRequest = {
    /** The city name for which you want to get the data (e.g., New York) */
    city: string;
    /** Limit number of cities that match your search criteria */
    limit?: number;
  };

  export class CitieslookupError extends ApiError {
    declare readonly payload:
      | Declared<"error401", undefined>
      | Declared<"error404", undefined>
      | Declared<"error500", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<CitieslookupError> = [
      { on: 401, kind: "error401", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 500, kind: "error500", decode: { kind: "empty" } },
    ];
  }

  export type CoordinatesareseaRequest = {
    /** The latitude of the coordinates */
    lat: number;
    /** The longitude of the coordinates */
    lon: number;
  };

  export class CoordinatesareseaError extends ApiError {
    declare readonly payload:
      | Declared<"error401", undefined>
      | Declared<"error404", undefined>
      | Declared<"error500", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<CoordinatesareseaError> = [
      { on: 401, kind: "error401", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 500, kind: "error500", decode: { kind: "empty" } },
    ];
  }

  export type CountrybordersRequest = {
    /** The Country 2 Letter ISO code (e.g., CA) */
    country: string;
  };

  export class CountrybordersError extends ApiError {
    declare readonly payload:
      | Declared<"error401", undefined>
      | Declared<"error404", undefined>
      | Declared<"error500", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<CountrybordersError> = [
      { on: 401, kind: "error401", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 500, kind: "error500", decode: { kind: "empty" } },
    ];
  }

  export type CountryboundariesRequest = {
    /** The Country 2 Letter ISO code (e.g., CA) */
    country: string;
  };

  export class CountryboundariesError extends ApiError {
    declare readonly payload:
      | Declared<"error401", undefined>
      | Declared<"error404", undefined>
      | Declared<"error500", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<CountryboundariesError> = [
      { on: 401, kind: "error401", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 500, kind: "error500", decode: { kind: "empty" } },
    ];
  }

  export type CountryflagsRequest = {
    /** The 2 letter ISO Country Code (e.g. ZW) */
    country: string;
    /** The format of the flag image */
    format: string;
    /** The shape of the flag image */
    shape: string;
  };

  export class CountryflagsError extends ApiError {
    declare readonly payload:
      | Declared<"error401", undefined>
      | Declared<"error404", undefined>
      | Declared<"error500", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<CountryflagsError> = [
      { on: 401, kind: "error401", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 500, kind: "error500", decode: { kind: "empty" } },
    ];
  }

  export type CountrylanguagesRequest = {
    /** The Country 2 letter ISO code for which you want to get languages for data (e.g., ZW) */
    country: string;
  };

  export class CountrylanguagesError extends ApiError {
    declare readonly payload:
      | Declared<"error401", undefined>
      | Declared<"error404", undefined>
      | Declared<"error500", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<CountrylanguagesError> = [
      { on: 401, kind: "error401", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 500, kind: "error500", decode: { kind: "empty" } },
    ];
  }

  export type CountrylookupRequest = {
    /**
     * The Country name or ISO code of the country for which you want to get the data (e.g., USA)
     */
    country: string;
    /** Specify if you would like to return all major cities of the country found */
    majorcities?: boolean;
  };

  export class CountrylookupError extends ApiError {
    declare readonly payload:
      | Declared<"error401", undefined>
      | Declared<"error404", undefined>
      | Declared<"error500", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<CountrylookupError> = [
      { on: 401, kind: "error401", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 500, kind: "error500", decode: { kind: "empty" } },
    ];
  }

  export type CountydataRequest = {
    /** The two letter name of the US state the county is in (e.g., MO) */
    state: string;
    /** The name of the US county to get data about (e.g. Jackson) */
    county: string;
  };

  export class CountydataError extends ApiError {
    declare readonly payload:
      | Declared<"error401", undefined>
      | Declared<"error404", undefined>
      | Declared<"error500", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<CountydataError> = [
      { on: 401, kind: "error401", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 500, kind: "error500", decode: { kind: "empty" } },
    ];
  }

  export type DistancecalculatorRequest = {
    /** The latitude of the first location */
    lat1: number;
    /** The longitude of the first location */
    lon1: number;
    /** The latitude of the second location */
    lat2: number;
    /** The longitude of the second location */
    lon2: number;
  };

  export class DistancecalculatorError extends ApiError {
    declare readonly payload:
      | Declared<"error401", undefined>
      | Declared<"error404", undefined>
      | Declared<"error500", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<DistancecalculatorError> = [
      { on: 401, kind: "error401", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 500, kind: "error500", decode: { kind: "empty" } },
    ];
  }

  export type HardinesszoneRequest = {
    /** The zip code to get the USDA Plant Hardiness Zone for */
    zip: string;
  };

  export class HardinesszoneError extends ApiError {
    declare readonly payload:
      | Declared<"error401", undefined>
      | Declared<"error404", undefined>
      | Declared<"error500", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<HardinesszoneError> = [
      { on: 401, kind: "error401", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 500, kind: "error500", decode: { kind: "empty" } },
    ];
  }

  export type ReversegeocodeRequest = {
    /** The latitude of the coordinates */
    lat: number;
    /** The longitude of the coordinates */
    lon: number;
  };

  export class ReversegeocodeError extends ApiError {
    declare readonly payload:
      | Declared<"error401", undefined>
      | Declared<"error404", undefined>
      | Declared<"error500", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<ReversegeocodeError> = [
      { on: 401, kind: "error401", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 500, kind: "error500", decode: { kind: "empty" } },
    ];
  }

  export type StateboundariesRequest = {
    /** The 2 Letter State Code (e.g., CA) */
    state: string;
  };

  export class StateboundariesError extends ApiError {
    declare readonly payload:
      | Declared<"error401", undefined>
      | Declared<"error404", undefined>
      | Declared<"error500", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<StateboundariesError> = [
      { on: 401, kind: "error401", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 500, kind: "error500", decode: { kind: "empty" } },
    ];
  }

  export type ZipcodesRequest = {
    /** The zip code for which you want to get the data */
    zip: string;
  };

  export class ZipcodesError extends ApiError {
    declare readonly payload:
      | Declared<"error401", undefined>
      | Declared<"error404", undefined>
      | Declared<"error500", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<ZipcodesError> = [
      { on: 401, kind: "error401", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 500, kind: "error500", decode: { kind: "empty" } },
    ];
  }
}
