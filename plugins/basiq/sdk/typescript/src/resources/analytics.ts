import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import * as s from "../core/validation/index.js";
import { analyticsResponseSchema, type AnalyticsResponse } from "../models/analytics-response.js";
import {
  connectionAnalyticsResponseSchema,
  type ConnectionAnalyticsResponse,
} from "../models/connection-analytics-response.js";
import { errorListSchema, type ErrorList } from "../models/error-list.js";
import { intervalSchema, type Interval } from "../models/interval.js";
import type { Servers } from "../servers.js";

export class Analytics {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Connection Analytics
   *
   * @remarks
   * Retrieve connection analytics, including connection creation, status distribution, method
   * distribution, and disruption rates over a given time interval.
   *
   * @returns Successful connection analytics response
   *
   * @throws {@link Analytics.GetConnectionAnalyticsError} when the API answers with an error status
   * — narrow on `err.payload.kind`
   *
   * @throws {@link BasiqError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getConnectionAnalytics(
    request: Analytics.GetConnectionAnalyticsRequest,
    options?: RequestOptions,
  ): ApiPromise<ConnectionAnalyticsResponse, Analytics.GetConnectionAnalyticsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/analytics/connections"),
        auth: this.#auth.servicesToken,
        pathParams: [],
        query: [
          { name: "interval", value: request.interval, schema: intervalSchema },
          { name: "fromDate", value: request.fromDate, schema: s.optional(s.dateOnly()) },
          { name: "toDate", value: request.toDate, schema: s.optional(s.dateOnly()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: connectionAnalyticsResponseSchema },
        errorFactory: Analytics.GetConnectionAnalyticsError,
      },
      options,
    );
  }

  /**
   * User Analytics
   *
   * @remarks
   * Retrieve user analytics, such as number of users and connections created for an application
   * over a given time interval.
   *
   * @returns Successful analytics response
   *
   * @throws {@link Analytics.GetUserAnalyticsError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link BasiqError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getUserAnalytics(
    request: Analytics.GetUserAnalyticsRequest,
    options?: RequestOptions,
  ): ApiPromise<AnalyticsResponse, Analytics.GetUserAnalyticsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/analytics/users"),
        auth: this.#auth.servicesToken,
        pathParams: [],
        query: [
          { name: "interval", value: request.interval, schema: intervalSchema },
          { name: "fromDate", value: request.fromDate, schema: s.optional(s.dateOnly()) },
          { name: "toDate", value: request.toDate, schema: s.optional(s.dateOnly()) },
          { name: "connectionType", value: request.connectionType, schema: s.optional(s.string()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: analyticsResponseSchema },
        errorFactory: Analytics.GetUserAnalyticsError,
      },
      options,
    );
  }
}

export namespace Analytics {
  export type GetConnectionAnalyticsRequest = {
    /** Time interval for analytics. */
    interval: Interval;
    /** Start date of the analytics period (e.g., 2023-01-01). */
    fromDate?: string;
    /** End date of the analytics period (e.g., 2024-01-01). */
    toDate?: string;
  };

  export class GetConnectionAnalyticsError extends ApiError {
    declare readonly payload:
      | Declared<"errorList", ErrorList>
      | Declared<"error401", undefined>
      | Declared<"errorList2", ErrorList>
      | Declared<"error500", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetConnectionAnalyticsError> = [
      { on: 400, kind: "errorList", decode: { kind: "json", schema: errorListSchema } },
      { on: 401, kind: "error401", decode: { kind: "empty" } },
      { on: 403, kind: "errorList2", decode: { kind: "json", schema: errorListSchema } },
      { on: 500, kind: "error500", decode: { kind: "empty" } },
    ];
  }

  export type GetUserAnalyticsRequest = {
    /** Time interval for analytics. */
    interval: Interval;
    /** Start date of the analytics period (e.g., 2023-01-01). */
    fromDate?: string;
    /** End date of the analytics period (e.g., 2024-01-01). */
    toDate?: string;
    /**
     * Filter analytics by one or more connection types. Must be a comma-separated string. Values
     * are case-sensitive: all, cdr, pdf, web, csv.
     */
    connectionType?: string;
  };

  export class GetUserAnalyticsError extends ApiError {
    declare readonly payload:
      | Declared<"errorList", ErrorList>
      | Declared<"error401", undefined>
      | Declared<"errorList2", ErrorList>
      | Declared<"error500", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetUserAnalyticsError> = [
      { on: 400, kind: "errorList", decode: { kind: "json", schema: errorListSchema } },
      { on: 401, kind: "error401", decode: { kind: "empty" } },
      { on: 403, kind: "errorList2", decode: { kind: "json", schema: errorListSchema } },
      { on: 500, kind: "error500", decode: { kind: "empty" } },
    ];
  }
}
