import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import * as s from "../core/validation/index.js";
import {
  v1ColorsimilarityResponseSchema,
  type V1ColorsimilarityResponse,
} from "../models/v1-colorsimilarity-response.js";
import {
  v1DaylightdurationResponseSchema,
  type V1DaylightdurationResponse,
} from "../models/v1-daylightduration-response.js";
import {
  v1FibonaccigeneratorResponseSchema,
  type V1FibonaccigeneratorResponse,
} from "../models/v1-fibonaccigenerator-response.js";
import {
  v1PermutationcombinationResponseSchema,
  type V1PermutationcombinationResponse,
} from "../models/v1-permutationcombination-response.js";
import {
  v1RomannumeralmathResponseSchema,
  type V1RomannumeralmathResponse,
} from "../models/v1-romannumeralmath-response.js";
import {
  v1TipcalculatorResponseSchema,
  type V1TipcalculatorResponse,
} from "../models/v1-tipcalculator-response.js";
import { v1TruthtableResponseSchema, type V1TruthtableResponse } from "../models/v1-truthtable-response.js";
import {
  v1UtmconverterResponseSchema,
  type V1UtmconverterResponse,
} from "../models/v1-utmconverter-response.js";
import type { Servers } from "../servers.js";

export class MathCalculations {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Color Similarity Calculator
   *
   * @remarks
   * Calculate similarity between two hex colors
   *
   * @returns Successful Response
   *
   * @throws {@link MathCalculations.ColorsimilarityError} when the API answers with an error status
   * — narrow on `err.payload.kind`
   *
   * @throws {@link ApiVerveError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  colorsimilarity(
    request: MathCalculations.ColorsimilarityRequest,
    options?: RequestOptions,
  ): ApiPromise<V1ColorsimilarityResponse, MathCalculations.ColorsimilarityError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v1/colorsimilarity"),
        auth: this.#auth.apiKey,
        pathParams: [],
        query: [
          { name: "color1", value: request.color1, schema: s.string() },
          { name: "color2", value: request.color2, schema: s.string() },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: v1ColorsimilarityResponseSchema },
        errorFactory: MathCalculations.ColorsimilarityError,
      },
      options,
    );
  }

  /**
   * Daylight Duration Calculator
   *
   * @remarks
   * Calculate sunrise, sunset, and daylight hours for a location
   *
   * @returns Successful Response
   *
   * @throws {@link MathCalculations.DaylightdurationError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link ApiVerveError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  daylightduration(
    request: MathCalculations.DaylightdurationRequest,
    options?: RequestOptions,
  ): ApiPromise<V1DaylightdurationResponse, MathCalculations.DaylightdurationError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v1/daylightduration"),
        auth: this.#auth.apiKey,
        pathParams: [],
        query: [
          { name: "latitude", value: request.latitude, schema: s.float64() },
          { name: "longitude", value: request.longitude, schema: s.float64() },
          { name: "date", value: request.date, schema: s.optional(s.string()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: v1DaylightdurationResponseSchema },
        errorFactory: MathCalculations.DaylightdurationError,
      },
      options,
    );
  }

  /**
   * Fibonacci Generator
   *
   * @remarks
   * Generate a specific number of Fibonacci numbers
   *
   * @returns Successful Response
   *
   * @throws {@link MathCalculations.FibonaccigeneratorError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link ApiVerveError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  fibonaccigenerator(
    request: MathCalculations.FibonaccigeneratorRequest,
    options?: RequestOptions,
  ): ApiPromise<V1FibonaccigeneratorResponse, MathCalculations.FibonaccigeneratorError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v1/fibonaccigenerator"),
        auth: this.#auth.apiKey,
        pathParams: [],
        query: [
          { name: "count", value: request.count, schema: s.int() },
          { name: "startfrom", value: request.startfrom, schema: s.optional(s.int()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: v1FibonaccigeneratorResponseSchema },
        errorFactory: MathCalculations.FibonaccigeneratorError,
      },
      options,
    );
  }

  /**
   * Permutation & Combination Calculator
   *
   * @remarks
   * Calculate P(n,r) and C(n,r) values
   *
   * @returns Successful Response
   *
   * @throws {@link MathCalculations.PermutationcombinationError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link ApiVerveError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  permutationcombination(
    request: MathCalculations.PermutationcombinationRequest,
    options?: RequestOptions,
  ): ApiPromise<V1PermutationcombinationResponse, MathCalculations.PermutationcombinationError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v1/permutationcombination"),
        auth: this.#auth.apiKey,
        pathParams: [],
        query: [
          { name: "n", value: request.n, schema: s.int() },
          { name: "r", value: request.r, schema: s.int() },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: v1PermutationcombinationResponseSchema },
        errorFactory: MathCalculations.PermutationcombinationError,
      },
      options,
    );
  }

  /**
   * Roman Numeral Math
   *
   * @remarks
   * Perform arithmetic operations with Roman numerals
   *
   * @returns Successful Response
   *
   * @throws {@link MathCalculations.RomannumeralmathError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link ApiVerveError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  romannumeralmath(
    request: MathCalculations.RomannumeralmathRequest,
    options?: RequestOptions,
  ): ApiPromise<V1RomannumeralmathResponse, MathCalculations.RomannumeralmathError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v1/romannumeralmath"),
        auth: this.#auth.apiKey,
        pathParams: [],
        query: [
          { name: "roman1", value: request.roman1, schema: s.string() },
          { name: "roman2", value: request.roman2, schema: s.string() },
          { name: "operation", value: request.operation, schema: s.optional(s.string()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: v1RomannumeralmathResponseSchema },
        errorFactory: MathCalculations.RomannumeralmathError,
      },
      options,
    );
  }

  /**
   * Tip Calculator
   *
   * @remarks
   * Calculate tip amount and split bill among people
   *
   * @returns Successful Response
   *
   * @throws {@link MathCalculations.TipcalculatorError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link ApiVerveError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  tipcalculator(
    request: MathCalculations.TipcalculatorRequest,
    options?: RequestOptions,
  ): ApiPromise<V1TipcalculatorResponse, MathCalculations.TipcalculatorError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v1/tipcalculator"),
        auth: this.#auth.apiKey,
        pathParams: [],
        query: [
          { name: "amount", value: request.amount, schema: s.float64() },
          { name: "percentage", value: request.percentage, schema: s.optional(s.float64()) },
          { name: "people", value: request.people, schema: s.optional(s.int()) },
          { name: "currency", value: request.currency, schema: s.optional(s.string()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: v1TipcalculatorResponseSchema },
        errorFactory: MathCalculations.TipcalculatorError,
      },
      options,
    );
  }

  /**
   * Truth Table Generator
   *
   * @remarks
   * Generate a truth table for a boolean expression
   *
   * @returns Successful Response
   *
   * @throws {@link MathCalculations.TruthtableError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link ApiVerveError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  truthtable(
    request: MathCalculations.TruthtableRequest,
    options?: RequestOptions,
  ): ApiPromise<V1TruthtableResponse, MathCalculations.TruthtableError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v1/truthtable"),
        auth: this.#auth.apiKey,
        pathParams: [],
        query: [{ name: "expression", value: request.expression, schema: s.string() }],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: v1TruthtableResponseSchema },
        errorFactory: MathCalculations.TruthtableError,
      },
      options,
    );
  }

  /**
   * UTM Coordinate Converter
   *
   * @remarks
   * Convert latitude/longitude coordinates to UTM format
   *
   * @returns Successful Response
   *
   * @throws {@link MathCalculations.UtmconverterError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link ApiVerveError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  utmconverter(
    request: MathCalculations.UtmconverterRequest,
    options?: RequestOptions,
  ): ApiPromise<V1UtmconverterResponse, MathCalculations.UtmconverterError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v1/utmconverter"),
        auth: this.#auth.apiKey,
        pathParams: [],
        query: [
          { name: "latitude", value: request.latitude, schema: s.float64() },
          { name: "longitude", value: request.longitude, schema: s.float64() },
          { name: "direction", value: request.direction, schema: s.optional(s.string()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: v1UtmconverterResponseSchema },
        errorFactory: MathCalculations.UtmconverterError,
      },
      options,
    );
  }
}

export namespace MathCalculations {
  export type ColorsimilarityRequest = {
    /** First hex color value (with or without # prefix) */
    color1: string;
    /** Second hex color value (with or without # prefix) */
    color2: string;
  };

  export class ColorsimilarityError extends ApiError {
    declare readonly payload:
      | Declared<"error401", undefined>
      | Declared<"error404", undefined>
      | Declared<"error500", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<ColorsimilarityError> = [
      { on: 401, kind: "error401", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 500, kind: "error500", decode: { kind: "empty" } },
    ];
  }

  export type DaylightdurationRequest = {
    /** Latitude of the location */
    latitude: number;
    /** Longitude of the location */
    longitude: number;
    /** Date in YYYY-MM-DD format (defaults to today) */
    date?: string;
  };

  export class DaylightdurationError extends ApiError {
    declare readonly payload:
      | Declared<"error401", undefined>
      | Declared<"error404", undefined>
      | Declared<"error500", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<DaylightdurationError> = [
      { on: 401, kind: "error401", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 500, kind: "error500", decode: { kind: "empty" } },
    ];
  }

  export type FibonaccigeneratorRequest = {
    /** Number of Fibonacci numbers to generate */
    count: number;
    /** Start from this position in the sequence */
    startfrom?: number;
  };

  export class FibonaccigeneratorError extends ApiError {
    declare readonly payload:
      | Declared<"error401", undefined>
      | Declared<"error404", undefined>
      | Declared<"error500", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<FibonaccigeneratorError> = [
      { on: 401, kind: "error401", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 500, kind: "error500", decode: { kind: "empty" } },
    ];
  }

  export type PermutationcombinationRequest = {
    /** Total number of items */
    n: number;
    /** Number of items to choose (must be <= n) */
    r: number;
  };

  export class PermutationcombinationError extends ApiError {
    declare readonly payload:
      | Declared<"error401", undefined>
      | Declared<"error404", undefined>
      | Declared<"error500", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<PermutationcombinationError> = [
      { on: 401, kind: "error401", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 500, kind: "error500", decode: { kind: "empty" } },
    ];
  }

  export type RomannumeralmathRequest = {
    /** The first Roman numeral */
    roman1: string;
    /** The second Roman numeral */
    roman2: string;
    /** Operation to perform */
    operation?: string;
  };

  export class RomannumeralmathError extends ApiError {
    declare readonly payload:
      | Declared<"error401", undefined>
      | Declared<"error404", undefined>
      | Declared<"error500", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<RomannumeralmathError> = [
      { on: 401, kind: "error401", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 500, kind: "error500", decode: { kind: "empty" } },
    ];
  }

  export type TipcalculatorRequest = {
    /** The bill amount before tip */
    amount: number;
    /** Tip percentage */
    percentage?: number;
    /** Number of people to split the bill */
    people?: number;
    /** Currency code for display */
    currency?: string;
  };

  export class TipcalculatorError extends ApiError {
    declare readonly payload:
      | Declared<"error401", undefined>
      | Declared<"error404", undefined>
      | Declared<"error500", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<TipcalculatorError> = [
      { on: 401, kind: "error401", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 500, kind: "error500", decode: { kind: "empty" } },
    ];
  }

  export type TruthtableRequest = {
    /** Boolean expression using A-Z variables and operators (AND, OR, NOT, XOR, NAND, NOR) */
    expression: string;
  };

  export class TruthtableError extends ApiError {
    declare readonly payload:
      | Declared<"error401", undefined>
      | Declared<"error404", undefined>
      | Declared<"error500", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<TruthtableError> = [
      { on: 401, kind: "error401", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 500, kind: "error500", decode: { kind: "empty" } },
    ];
  }

  export type UtmconverterRequest = {
    /** Latitude (-90 to 90) */
    latitude: number;
    /** Longitude (-180 to 180) */
    longitude: number;
    /** Conversion direction */
    direction?: string;
  };

  export class UtmconverterError extends ApiError {
    declare readonly payload:
      | Declared<"error401", undefined>
      | Declared<"error404", undefined>
      | Declared<"error500", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<UtmconverterError> = [
      { on: 401, kind: "error401", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 500, kind: "error500", decode: { kind: "empty" } },
    ];
  }
}
