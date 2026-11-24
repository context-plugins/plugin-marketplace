import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import * as s from "../core/validation/index.js";
import {
  v1AirlinelookupResponseSchema,
  type V1AirlinelookupResponse,
} from "../models/v1-airlinelookup-response.js";
import {
  v1AirportcodeconverterResponseSchema,
  type V1AirportcodeconverterResponse,
} from "../models/v1-airportcodeconverter-response.js";
import {
  v1AirportdistanceResponseSchema,
  type V1AirportdistanceResponse,
} from "../models/v1-airportdistance-response.js";
import { v1AirportsResponseSchema, type V1AirportsResponse } from "../models/v1-airports-response.js";
import { v1CarmodelsResponseSchema, type V1CarmodelsResponse } from "../models/v1-carmodels-response.js";
import { v1VindecoderResponseSchema, type V1VindecoderResponse } from "../models/v1-vindecoder-response.js";
import type { Servers } from "../servers.js";

export class Transportation {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Airline Lookup
   *
   * @remarks
   * Get the airline information for a specific airline IATA code
   *
   * @returns Successful Response
   *
   * @throws {@link Transportation.AirlinelookupError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link ApiVerveError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  airlinelookup(
    request: Transportation.AirlinelookupRequest,
    options?: RequestOptions,
  ): ApiPromise<V1AirlinelookupResponse, Transportation.AirlinelookupError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v1/airlinelookup"),
        auth: this.#auth.apiKey,
        pathParams: [],
        query: [{ name: "iata", value: request.iata, schema: s.string() }],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: v1AirlinelookupResponseSchema },
        errorFactory: Transportation.AirlinelookupError,
      },
      options,
    );
  }

  /**
   * Airport Code Converter
   *
   * @remarks
   * Submit an IATA (3-letter) or ICAO (4-letter) airport code and get the corresponding code in the
   * other format.
   *
   * @returns Successful Response
   *
   * @throws {@link Transportation.AirportcodeconverterError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link ApiVerveError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  airportcodeconverter(
    request: Transportation.AirportcodeconverterRequest,
    options?: RequestOptions,
  ): ApiPromise<V1AirportcodeconverterResponse, Transportation.AirportcodeconverterError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v1/airportcodeconverter"),
        auth: this.#auth.apiKey,
        pathParams: [],
        query: [{ name: "code", value: request.code, schema: s.string() }],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: v1AirportcodeconverterResponseSchema },
        errorFactory: Transportation.AirportcodeconverterError,
      },
      options,
    );
  }

  /**
   * Airport Distance
   *
   * @remarks
   * Airport Distance is a simple tool for getting the distance between two airports. It returns the
   * distance between the two airports.
   *
   * @returns Successful Response
   *
   * @throws {@link Transportation.AirportdistanceError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link ApiVerveError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  airportdistance(
    request: Transportation.AirportdistanceRequest,
    options?: RequestOptions,
  ): ApiPromise<V1AirportdistanceResponse, Transportation.AirportdistanceError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v1/airportdistance"),
        auth: this.#auth.apiKey,
        pathParams: [],
        query: [
          { name: "iata1", value: request.iata1, schema: s.string() },
          { name: "iata2", value: request.iata2, schema: s.string() },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: v1AirportdistanceResponseSchema },
        errorFactory: Transportation.AirportdistanceError,
      },
      options,
    );
  }

  /**
   * Airports Lookup
   *
   * @remarks
   * Get the airport information for a specific airport IATA code
   *
   * @returns Successful Response
   *
   * @throws {@link Transportation.AirportsError} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link ApiVerveError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  airports(
    request: Transportation.AirportsRequest,
    options?: RequestOptions,
  ): ApiPromise<V1AirportsResponse, Transportation.AirportsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v1/airports"),
        auth: this.#auth.apiKey,
        pathParams: [],
        query: [{ name: "iata", value: request.iata, schema: s.string() }],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: v1AirportsResponseSchema },
        errorFactory: Transportation.AirportsError,
      },
      options,
    );
  }

  /**
   * US Car Models
   *
   * @remarks
   * Get all car models for a specific make (manufacturer)
   *
   * @returns Successful Response
   *
   * @throws {@link Transportation.CarmodelsError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link ApiVerveError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  carmodels(
    request: Transportation.CarmodelsRequest,
    options?: RequestOptions,
  ): ApiPromise<V1CarmodelsResponse, Transportation.CarmodelsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v1/carmodels"),
        auth: this.#auth.apiKey,
        pathParams: [],
        query: [
          { name: "make", value: request.make, schema: s.string() },
          { name: "year", value: request.year, schema: s.optional(s.int()) },
          { name: "model", value: request.model, schema: s.optional(s.string()) },
          { name: "trim", value: request.trim, schema: s.optional(s.string()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: v1CarmodelsResponseSchema },
        errorFactory: Transportation.CarmodelsError,
      },
      options,
    );
  }

  /**
   * VIN Decoder
   *
   * @remarks
   * Decode a Vehicle Identification Number into the vehicle it identifies
   *
   * @returns Successful Response
   *
   * @throws {@link Transportation.VindecoderError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link ApiVerveError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  vindecoder(
    request: Transportation.VindecoderRequest,
    options?: RequestOptions,
  ): ApiPromise<V1VindecoderResponse, Transportation.VindecoderError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v1/vindecoder"),
        auth: this.#auth.apiKey,
        pathParams: [],
        query: [{ name: "vin", value: request.vin, schema: s.string() }],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: v1VindecoderResponseSchema },
        errorFactory: Transportation.VindecoderError,
      },
      options,
    );
  }
}

export namespace Transportation {
  export type AirlinelookupRequest = {
    /** The IATA code of the airline for which you want to get the information (e.g., AA) */
    iata: string;
  };

  export class AirlinelookupError extends ApiError {
    declare readonly payload:
      | Declared<"error401", undefined>
      | Declared<"error404", undefined>
      | Declared<"error500", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<AirlinelookupError> = [
      { on: 401, kind: "error401", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 500, kind: "error500", decode: { kind: "empty" } },
    ];
  }

  export type AirportcodeconverterRequest = {
    /** The airport code to convert (IATA: 3 letters, ICAO: 4 letters) */
    code: string;
  };

  export class AirportcodeconverterError extends ApiError {
    declare readonly payload:
      | Declared<"error401", undefined>
      | Declared<"error404", undefined>
      | Declared<"error500", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<AirportcodeconverterError> = [
      { on: 401, kind: "error401", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 500, kind: "error500", decode: { kind: "empty" } },
    ];
  }

  export type AirportdistanceRequest = {
    /** The IATA code of the first airport (e.g. JFK) */
    iata1: string;
    /** The IATA code of the second airport (e.g. LAX) */
    iata2: string;
  };

  export class AirportdistanceError extends ApiError {
    declare readonly payload:
      | Declared<"error401", undefined>
      | Declared<"error404", undefined>
      | Declared<"error500", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<AirportdistanceError> = [
      { on: 401, kind: "error401", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 500, kind: "error500", decode: { kind: "empty" } },
    ];
  }

  export type AirportsRequest = {
    /** The IATA code of the airport for which you want to get the information (e.g., MCI) */
    iata: string;
  };

  export class AirportsError extends ApiError {
    declare readonly payload:
      | Declared<"error401", undefined>
      | Declared<"error404", undefined>
      | Declared<"error500", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<AirportsError> = [
      { on: 401, kind: "error401", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 500, kind: "error500", decode: { kind: "empty" } },
    ];
  }

  export type CarmodelsRequest = {
    /** The make (manufacturer) of the car (e.g., Toyota, Honda, Ford) */
    make: string;
    /** Filter by year (1984-present) */
    year?: number;
    /** Narrow to a model name (e.g., Camry) */
    model?: string;
    /** Narrow to a trim level (e.g., Hybrid) */
    trim?: string;
  };

  export class CarmodelsError extends ApiError {
    declare readonly payload:
      | Declared<"error401", undefined>
      | Declared<"error404", undefined>
      | Declared<"error500", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<CarmodelsError> = [
      { on: 401, kind: "error401", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 500, kind: "error500", decode: { kind: "empty" } },
    ];
  }

  export type VindecoderRequest = {
    /**
     * The Vehicle Identification Number to decode. Partial VINs are accepted and decode as far as
     * the available characters allow.
     */
    vin: string;
  };

  export class VindecoderError extends ApiError {
    declare readonly payload:
      | Declared<"error401", undefined>
      | Declared<"error404", undefined>
      | Declared<"error500", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<VindecoderError> = [
      { on: 401, kind: "error401", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 500, kind: "error500", decode: { kind: "empty" } },
    ];
  }
}
