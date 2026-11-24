import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { anyAuth, orAnonymous } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import * as s from "../core/validation/index.js";
import { allTrimOptionsSchema, type AllTrimOptions } from "../models/all-trim-options.js";
import { dimensionSchema, type Dimension } from "../models/dimension.js";
import { errorSchema, type Error } from "../models/error.js";
import {
  obdcodesdecoderResponseSchema,
  type ObdcodesdecoderResponse,
} from "../models/obdcodesdecoder-response.js";
import { usageLimitErrorSchema, type UsageLimitError } from "../models/usage-limit-error.js";
import { v1YmmOptionsResponseSchema, type V1YmmOptionsResponse } from "../models/v1-ymm-options-response.js";
import { v1YmmResponseSchema, type V1YmmResponse } from "../models/v1-ymm-response.js";
import type { Servers } from "../servers.js";

/**
 * Year/make/model and OBD code endpoints
 */
export class YearMakeModel {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * OBD Codes Decoder
   *
   * @remarks
   * Decode an OBD-II diagnostic trouble code (e.g. P0115).
   *
   * @returns OBD code decoded.
   *
   * @throws {@link YearMakeModel.DecodeObdCodeError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link CarsXeError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  decodeObdCode(
    request: YearMakeModel.DecodeObdCodeRequest,
    options?: RequestOptions,
  ): ApiPromise<ObdcodesdecoderResponse, YearMakeModel.DecodeObdCodeError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/obdcodesdecoder"),
        auth: orAnonymous(anyAuth(this.#auth.apiKeyQuery, this.#auth.x402Payment)),
        pathParams: [],
        query: [{ name: "code", value: request.code, schema: s.string() }],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: obdcodesdecoderResponseSchema },
        errorFactory: YearMakeModel.DecodeObdCodeError,
      },
      options,
    );
  }

  /**
   * Year Make Model
   *
   * @remarks
   * Look up vehicle data by year, make and model (and optionally trim) without a VIN.
   *
   * @returns Vehicle matched.
   *
   * @throws {@link YearMakeModel.GetYearMakeModelError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link CarsXeError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getYearMakeModel(
    request: YearMakeModel.GetYearMakeModelRequest,
    options?: RequestOptions,
  ): ApiPromise<V1YmmResponse, YearMakeModel.GetYearMakeModelError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v1/ymm"),
        auth: orAnonymous(anyAuth(this.#auth.apiKeyQuery, this.#auth.x402Payment)),
        pathParams: [],
        query: [
          { name: "year", value: request.year, schema: s.string() },
          { name: "make", value: request.make, schema: s.string() },
          { name: "model", value: request.model, schema: s.string() },
          { name: "trim", value: request.trim, schema: s.optional(s.string()) },
          {
            name: "allTrimOptions",
            value: request.allTrimOptions,
            schema: s.optional(s.lazy(() => allTrimOptionsSchema)),
          },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: v1YmmResponseSchema },
        errorFactory: YearMakeModel.GetYearMakeModelError,
      },
      options,
    );
  }

  /**
   * Year Make Model Options
   *
   * @remarks
   * Populate Year, Make, Model, and Variant dropdown menus. Each response returns exactly one
   * layer. `dimension` is optional — when omitted, the response shape is inferred from
   * `make`/`model`/`year`. Billing: most calls cost 1 unit. `dimension=variants` with `year` +
   * `make` (no `model`) costs 1 unit per model; the response includes `modelCount`. Required
   * filters help you get better, more relevant results. `year`, `make`, and `model` can be combined
   * for reversed lookups (e.g. years for a given make+model).
   *
   * @returns Distinct values for the requested (or inferred) dimension(s).
   *
   * @throws {@link YearMakeModel.GetYearMakeModelOptionsError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link CarsXeError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getYearMakeModelOptions(
    request: YearMakeModel.GetYearMakeModelOptionsRequest = {},
    options?: RequestOptions,
  ): ApiPromise<V1YmmOptionsResponse, YearMakeModel.GetYearMakeModelOptionsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v1/ymm-options"),
        auth: orAnonymous(anyAuth(this.#auth.apiKeyQuery, this.#auth.x402Payment)),
        pathParams: [],
        query: [
          { name: "dimension", value: request.dimension, schema: s.optional(s.lazy(() => dimensionSchema)) },
          { name: "year", value: request.year, schema: s.optional(s.string()) },
          { name: "make", value: request.make, schema: s.optional(s.string()) },
          { name: "model", value: request.model, schema: s.optional(s.string()) },
          { name: "trim", value: request.trim, schema: s.optional(s.string()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: v1YmmOptionsResponseSchema },
        errorFactory: YearMakeModel.GetYearMakeModelOptionsError,
      },
      options,
    );
  }
}

export namespace YearMakeModel {
  export type DecodeObdCodeRequest = {
    /** The OBD code. */
    code: string;
  };

  export class DecodeObdCodeError extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"error3", Error>
      | Declared<"usageLimitError", UsageLimitError>
      | Undeclared;

    static readonly errors: ErrorDecoders<DecodeObdCodeError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 404, kind: "error3", decode: { kind: "json", schema: errorSchema } },
      { on: 429, kind: "usageLimitError", decode: { kind: "json", schema: usageLimitErrorSchema } },
    ];
  }

  export type GetYearMakeModelRequest = {
    /**
     * The manufacturing year of the vehicle (numeric, between 1900 and the current model year plus
     * one).
     */
    year: string;
    /** The manufacturer of the vehicle (e.g., Toyota, Ford, BMW). */
    make: string;
    /** The specific model of the vehicle (e.g., Camry, F-150, X5). */
    model: string;
    /** The vehicle trim (e.g., XLE, XSE). */
    trim?: string;
    /** Return all trim options available for the year, make and model. Set to `1` to use. */
    allTrimOptions?: AllTrimOptions;
  };

  export class GetYearMakeModelError extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"error3", Error>
      | Declared<"usageLimitError", UsageLimitError>
      | Declared<"error4", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetYearMakeModelError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 404, kind: "error3", decode: { kind: "json", schema: errorSchema } },
      { on: 429, kind: "usageLimitError", decode: { kind: "json", schema: usageLimitErrorSchema } },
      { on: 500, kind: "error4", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type GetYearMakeModelOptionsRequest = {
    /**
     * Return exactly this array when required filters are present. If omitted, the response is
     * inferred automatically from `make`/`model`/`year`.
     */
    dimension?: Dimension;
    /**
     * Filter to a specific manufacturing year. Required when filtering by `model` without `make`.
     */
    year?: string;
    /**
     * Filter to a specific manufacturer (e.g., Toyota, Ford, Lexus). Required for
     * `dimension=models`.
     */
    make?: string;
    /**
     * Filter to a specific model (e.g., Camry, F-150, LX). Required for `dimension=trims` and for
     * `dimension=variants` unless both `year` and `make` are set.
     */
    model?: string;
    /**
     * Optional substring filter on trim names. Only applied when querying `dimension=trims` or
     * `dimension=variants`.
     */
    trim?: string;
  };

  export class GetYearMakeModelOptionsError extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"usageLimitError", UsageLimitError>
      | Declared<"error3", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetYearMakeModelOptionsError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 429, kind: "usageLimitError", decode: { kind: "json", schema: usageLimitErrorSchema } },
      { on: 500, kind: "error3", decode: { kind: "json", schema: errorSchema } },
    ];
  }
}
