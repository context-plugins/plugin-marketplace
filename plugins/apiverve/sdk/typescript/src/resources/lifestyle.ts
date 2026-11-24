import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import * as s from "../core/validation/index.js";
import {
  v1DuedatecalculatorResponseSchema,
  type V1DuedatecalculatorResponse,
} from "../models/v1-duedatecalculator-response.js";
import {
  v1MenstrualcycleResponseSchema,
  type V1MenstrualcycleResponse,
} from "../models/v1-menstrualcycle-response.js";
import {
  v1OvulationcalculatorResponseSchema,
  type V1OvulationcalculatorResponse,
} from "../models/v1-ovulationcalculator-response.js";
import type { Servers } from "../servers.js";

export class Lifestyle {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Due Date Calculator
   *
   * @remarks
   * Calculate pregnancy due date from first day of last menstrual period
   *
   * @returns Successful Response
   *
   * @throws {@link Lifestyle.DuedatecalculatorError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link ApiVerveError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  duedatecalculator(
    request: Lifestyle.DuedatecalculatorRequest,
    options?: RequestOptions,
  ): ApiPromise<V1DuedatecalculatorResponse, Lifestyle.DuedatecalculatorError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v1/duedatecalculator"),
        auth: this.#auth.apiKey,
        pathParams: [],
        query: [{ name: "last_period", value: request.lastPeriod, schema: s.string() }],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: v1DuedatecalculatorResponseSchema },
        errorFactory: Lifestyle.DuedatecalculatorError,
      },
      options,
    );
  }

  /**
   * Menstrual Cycle Calculator
   *
   * @remarks
   * Calculate future menstrual cycles and phases
   *
   * @returns Successful Response
   *
   * @throws {@link Lifestyle.MenstrualcycleError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link ApiVerveError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  menstrualcycle(
    request: Lifestyle.MenstrualcycleRequest,
    options?: RequestOptions,
  ): ApiPromise<V1MenstrualcycleResponse, Lifestyle.MenstrualcycleError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v1/menstrualcycle"),
        auth: this.#auth.apiKey,
        pathParams: [],
        query: [
          { name: "last_period", value: request.lastPeriod, schema: s.string() },
          { name: "cycle_length", value: request.cycleLength, schema: s.optional(s.int()) },
          { name: "period_length", value: request.periodLength, schema: s.optional(s.int()) },
          { name: "cycles", value: request.cycles, schema: s.optional(s.int()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: v1MenstrualcycleResponseSchema },
        errorFactory: Lifestyle.MenstrualcycleError,
      },
      options,
    );
  }

  /**
   * Ovulation Calculator
   *
   * @remarks
   * Calculate ovulation date and fertile window
   *
   * @returns Successful Response
   *
   * @throws {@link Lifestyle.OvulationcalculatorError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link ApiVerveError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  ovulationcalculator(
    request: Lifestyle.OvulationcalculatorRequest,
    options?: RequestOptions,
  ): ApiPromise<V1OvulationcalculatorResponse, Lifestyle.OvulationcalculatorError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v1/ovulationcalculator"),
        auth: this.#auth.apiKey,
        pathParams: [],
        query: [
          { name: "last_period", value: request.lastPeriod, schema: s.string() },
          { name: "cycle_length", value: request.cycleLength, schema: s.optional(s.int()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: v1OvulationcalculatorResponseSchema },
        errorFactory: Lifestyle.OvulationcalculatorError,
      },
      options,
    );
  }
}

export namespace Lifestyle {
  export type DuedatecalculatorRequest = {
    /** First day of last menstrual period (YYYY-MM-DD) */
    lastPeriod: string;
  };

  export class DuedatecalculatorError extends ApiError {
    declare readonly payload:
      | Declared<"error401", undefined>
      | Declared<"error404", undefined>
      | Declared<"error500", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<DuedatecalculatorError> = [
      { on: 401, kind: "error401", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 500, kind: "error500", decode: { kind: "empty" } },
    ];
  }

  export type MenstrualcycleRequest = {
    /** First day of last menstrual period (YYYY-MM-DD) */
    lastPeriod: string;
    /** Average cycle length in days */
    cycleLength?: number;
    /** Average period duration in days */
    periodLength?: number;
    /** Number of future cycles to calculate */
    cycles?: number;
  };

  export class MenstrualcycleError extends ApiError {
    declare readonly payload:
      | Declared<"error401", undefined>
      | Declared<"error404", undefined>
      | Declared<"error500", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<MenstrualcycleError> = [
      { on: 401, kind: "error401", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 500, kind: "error500", decode: { kind: "empty" } },
    ];
  }

  export type OvulationcalculatorRequest = {
    /** First day of last menstrual period (YYYY-MM-DD) */
    lastPeriod: string;
    /** Average menstrual cycle length in days */
    cycleLength?: number;
  };

  export class OvulationcalculatorError extends ApiError {
    declare readonly payload:
      | Declared<"error401", undefined>
      | Declared<"error404", undefined>
      | Declared<"error500", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<OvulationcalculatorError> = [
      { on: 401, kind: "error401", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 500, kind: "error500", decode: { kind: "empty" } },
    ];
  }
}
