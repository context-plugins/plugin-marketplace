import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import * as s from "../core/validation/index.js";
import {
  v1AgecalculatorResponseSchema,
  type V1AgecalculatorResponse,
} from "../models/v1-agecalculator-response.js";
import {
  v1DatecalculatorResponseSchema,
  type V1DatecalculatorResponse,
} from "../models/v1-datecalculator-response.js";
import {
  v1LiturgicalcalendarResponseSchema,
  type V1LiturgicalcalendarResponse,
} from "../models/v1-liturgicalcalendar-response.js";
import {
  v1WorkingdaysResponseSchema,
  type V1WorkingdaysResponse,
} from "../models/v1-workingdays-response.js";
import {
  v1WorldholidaysResponseSchema,
  type V1WorldholidaysResponse,
} from "../models/v1-worldholidays-response.js";
import type { Servers } from "../servers.js";

export class Calendar {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Age Calculator
   *
   * @remarks
   * Calculate age based on the date of birth provided
   *
   * @returns Successful Response
   *
   * @throws {@link Calendar.AgecalculatorError} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link ApiVerveError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  agecalculator(
    request: Calendar.AgecalculatorRequest,
    options?: RequestOptions,
  ): ApiPromise<V1AgecalculatorResponse, Calendar.AgecalculatorError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v1/agecalculator"),
        auth: this.#auth.apiKey,
        pathParams: [],
        query: [
          { name: "dob", value: request.dob, schema: s.string() },
          { name: "timezone", value: request.timezone, schema: s.optional(s.string()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: v1AgecalculatorResponseSchema },
        errorFactory: Calendar.AgecalculatorError,
      },
      options,
    );
  }

  /**
   * Date Calculator
   *
   * @remarks
   * Calculate date differences based on the dates provided
   *
   * @returns Successful Response
   *
   * @throws {@link Calendar.DatecalculatorError} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link ApiVerveError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  datecalculator(
    request: Calendar.DatecalculatorRequest,
    options?: RequestOptions,
  ): ApiPromise<V1DatecalculatorResponse, Calendar.DatecalculatorError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v1/datecalculator"),
        auth: this.#auth.apiKey,
        pathParams: [],
        query: [
          { name: "start", value: request.start, schema: s.string() },
          { name: "end", value: request.end, schema: s.string() },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: v1DatecalculatorResponseSchema },
        errorFactory: Calendar.DatecalculatorError,
      },
      options,
    );
  }

  /**
   * Liturgical Calendar
   *
   * @remarks
   * Returns the Catholic liturgical calendar for one month. The response data is an object keyed by
   * ISO date (YYYY-MM-DD), and each date holds an array of the celebrations falling on it — a date
   * can carry more than one, such as a weekday plus an optional memorial. The fields below describe
   * one celebration in those arrays.
   *
   * @returns Successful Response
   *
   * @throws {@link Calendar.LiturgicalcalendarError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link ApiVerveError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  liturgicalcalendar(
    request: Calendar.LiturgicalcalendarRequest = {},
    options?: RequestOptions,
  ): ApiPromise<V1LiturgicalcalendarResponse, Calendar.LiturgicalcalendarError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v1/liturgicalcalendar"),
        auth: this.#auth.apiKey,
        pathParams: [],
        query: [
          { name: "month", value: request.month, schema: s.optional(s.int()) },
          { name: "year", value: request.year, schema: s.optional(s.int()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: v1LiturgicalcalendarResponseSchema },
        errorFactory: Calendar.LiturgicalcalendarError,
      },
      options,
    );
  }

  /**
   * Working Days
   *
   * @remarks
   * Working Days is a simple tool for getting the number of working days in a month. It returns the
   * number of working days in the given month.
   *
   * @returns Successful Response
   *
   * @throws {@link Calendar.WorkingdaysError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link ApiVerveError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  workingdays(
    request: Calendar.WorkingdaysRequest,
    options?: RequestOptions,
  ): ApiPromise<V1WorkingdaysResponse, Calendar.WorkingdaysError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v1/workingdays"),
        auth: this.#auth.apiKey,
        pathParams: [],
        query: [
          { name: "country", value: request.country, schema: s.string() },
          { name: "month", value: request.month, schema: s.optional(s.int()) },
          { name: "year", value: request.year, schema: s.optional(s.int()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: v1WorkingdaysResponseSchema },
        errorFactory: Calendar.WorkingdaysError,
      },
      options,
    );
  }

  /**
   * World Holidays
   *
   * @remarks
   * Get the holidays of a country for a given year
   *
   * @returns Successful Response
   *
   * @throws {@link Calendar.WorldholidaysError} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link ApiVerveError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  worldholidays(
    request: Calendar.WorldholidaysRequest,
    options?: RequestOptions,
  ): ApiPromise<V1WorldholidaysResponse, Calendar.WorldholidaysError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v1/worldholidays"),
        auth: this.#auth.apiKey,
        pathParams: [],
        query: [
          { name: "country", value: request.country, schema: s.string() },
          { name: "year", value: request.year, schema: s.optional(s.int()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: v1WorldholidaysResponseSchema },
        errorFactory: Calendar.WorldholidaysError,
      },
      options,
    );
  }
}

export namespace Calendar {
  export type AgecalculatorRequest = {
    /** The date of birth to calculate the age from (format: YYYY-MM-DD) */
    dob: string;
    /**
     * IANA timezone used to interpret the date of birth and to determine "today" when computing the
     * age
     */
    timezone?: string;
  };

  export class AgecalculatorError extends ApiError {
    declare readonly payload:
      | Declared<"error401", undefined>
      | Declared<"error404", undefined>
      | Declared<"error500", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<AgecalculatorError> = [
      { on: 401, kind: "error401", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 500, kind: "error500", decode: { kind: "empty" } },
    ];
  }

  export type DatecalculatorRequest = {
    /** The start date for calculating the difference (format: YYYY-MM-DD) */
    start: string;
    /** The end date for calculating the difference (format: YYYY-MM-DD) */
    end: string;
  };

  export class DatecalculatorError extends ApiError {
    declare readonly payload:
      | Declared<"error401", undefined>
      | Declared<"error404", undefined>
      | Declared<"error500", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<DatecalculatorError> = [
      { on: 401, kind: "error401", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 500, kind: "error500", decode: { kind: "empty" } },
    ];
  }

  export type LiturgicalcalendarRequest = {
    /** The month to get Liturgical Calendar data for (default: current month) */
    month?: number;
    /** The year to get Liturgical Calendar data for (default: current year) */
    year?: number;
  };

  export class LiturgicalcalendarError extends ApiError {
    declare readonly payload:
      | Declared<"error401", undefined>
      | Declared<"error404", undefined>
      | Declared<"error500", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<LiturgicalcalendarError> = [
      { on: 401, kind: "error401", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 500, kind: "error500", decode: { kind: "empty" } },
    ];
  }

  export type WorkingdaysRequest = {
    /** The 2-letter country code you want to get the number of working days for */
    country: string;
    /** The month you want to get the number of working days for */
    month?: number;
    /** The year you want to get the number of working days for */
    year?: number;
  };

  export class WorkingdaysError extends ApiError {
    declare readonly payload:
      | Declared<"error401", undefined>
      | Declared<"error404", undefined>
      | Declared<"error500", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<WorkingdaysError> = [
      { on: 401, kind: "error401", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 500, kind: "error500", decode: { kind: "empty" } },
    ];
  }

  export type WorldholidaysRequest = {
    /** The 2-letter country code for which you want to get the holidays */
    country: string;
    /** The year for which you want to get the holidays */
    year?: number;
  };

  export class WorldholidaysError extends ApiError {
    declare readonly payload:
      | Declared<"error401", undefined>
      | Declared<"error404", undefined>
      | Declared<"error500", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<WorldholidaysError> = [
      { on: 401, kind: "error401", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 500, kind: "error500", decode: { kind: "empty" } },
    ];
  }
}
