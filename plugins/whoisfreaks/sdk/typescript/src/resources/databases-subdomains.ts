import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { BinaryContent } from "../core/binary.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import * as s from "../core/validation/index.js";
import { errorResponseSchema, type ErrorResponse } from "../models/error-response.js";
import type { Servers } from "../servers.js";

/**
 * Subdomain database snapshots
 */
export class DatabasesSubdomains {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Subdomains Daily
   *
   * @remarks
   * Subdomains Daily. Returns the file/snapshot described by this operation.
   *
   * @returns CSV
   *
   * @throws {@link DatabasesSubdomains.DbSubdomainsDailyError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link WhoisFreaksError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  dbSubdomainsDaily(
    request: DatabasesSubdomains.DbSubdomainsDailyRequest = {},
    options?: RequestOptions,
  ): ApiPromise<BinaryContent, DatabasesSubdomains.DbSubdomainsDailyError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v3.2/download/dbupdate/daily/subdomains"),
        auth: this.#auth.apiKeyAuth,
        pathParams: [],
        query: [{ name: "date", value: request.date, schema: s.optional(s.dateOnly()) }],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "binary", contentType: "application/octet-stream" },
        errorFactory: DatabasesSubdomains.DbSubdomainsDailyError,
      },
      options,
    );
  }

  /**
   * Subdomains Monthly
   *
   * @remarks
   * Subdomains Monthly. Returns the file/snapshot described by this operation.
   *
   * @returns CSV
   *
   * @throws {@link DatabasesSubdomains.DbSubdomainsMonthlyError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link WhoisFreaksError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  dbSubdomainsMonthly(
    request: DatabasesSubdomains.DbSubdomainsMonthlyRequest = {},
    options?: RequestOptions,
  ): ApiPromise<BinaryContent, DatabasesSubdomains.DbSubdomainsMonthlyError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v3.2/download/dbupdate/monthly/subdomains"),
        auth: this.#auth.apiKeyAuth,
        pathParams: [],
        query: [{ name: "date", value: request.date, schema: s.optional(s.dateOnly()) }],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "binary", contentType: "application/octet-stream" },
        errorFactory: DatabasesSubdomains.DbSubdomainsMonthlyError,
      },
      options,
    );
  }

  /**
   * Subdomains Weekly
   *
   * @remarks
   * Subdomains Weekly. Returns the file/snapshot described by this operation.
   *
   * @returns CSV
   *
   * @throws {@link DatabasesSubdomains.DbSubdomainsWeeklyError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link WhoisFreaksError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  dbSubdomainsWeekly(
    request: DatabasesSubdomains.DbSubdomainsWeeklyRequest = {},
    options?: RequestOptions,
  ): ApiPromise<BinaryContent, DatabasesSubdomains.DbSubdomainsWeeklyError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v3.2/download/dbupdate/weekly/subdomains"),
        auth: this.#auth.apiKeyAuth,
        pathParams: [],
        query: [{ name: "date", value: request.date, schema: s.optional(s.dateOnly()) }],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "binary", contentType: "application/octet-stream" },
        errorFactory: DatabasesSubdomains.DbSubdomainsWeeklyError,
      },
      options,
    );
  }
}

export namespace DatabasesSubdomains {
  export type DbSubdomainsDailyRequest = {
    /** yyyy-MM-dd; omit for latest */
    date?: string;
  };

  export class DbSubdomainsDailyError extends ApiError {
    declare readonly payload: Declared<"errorResponse", ErrorResponse> | Undeclared;

    static readonly errors: ErrorDecoders<DbSubdomainsDailyError> = [
      { on: [400, 499], kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export type DbSubdomainsMonthlyRequest = {
    /** yyyy-MM-dd; omit for latest */
    date?: string;
  };

  export class DbSubdomainsMonthlyError extends ApiError {
    declare readonly payload: Declared<"errorResponse", ErrorResponse> | Undeclared;

    static readonly errors: ErrorDecoders<DbSubdomainsMonthlyError> = [
      { on: [400, 499], kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export type DbSubdomainsWeeklyRequest = {
    /** yyyy-MM-dd; omit for latest */
    date?: string;
  };

  export class DbSubdomainsWeeklyError extends ApiError {
    declare readonly payload: Declared<"errorResponse", ErrorResponse> | Undeclared;

    static readonly errors: ErrorDecoders<DbSubdomainsWeeklyError> = [
      { on: [400, 499], kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }
}
