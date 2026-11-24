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
 * DNS database snapshots
 */
export class DatabasesDns {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * DNS Database Daily
   *
   * @remarks
   * DNS Database Daily. Returns the file/snapshot described by this operation.
   *
   * @returns CSV
   *
   * @throws {@link DatabasesDns.DbDnsDailyError} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link WhoisFreaksError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  dbDnsDaily(
    request: DatabasesDns.DbDnsDailyRequest = {},
    options?: RequestOptions,
  ): ApiPromise<BinaryContent, DatabasesDns.DbDnsDailyError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v3.2/download/dbupdate/daily/dns"),
        auth: this.#auth.apiKeyAuth,
        pathParams: [],
        query: [{ name: "date", value: request.date, schema: s.optional(s.dateOnly()) }],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "binary", contentType: "application/octet-stream" },
        errorFactory: DatabasesDns.DbDnsDailyError,
      },
      options,
    );
  }

  /**
   * DNS Database Monthly
   *
   * @remarks
   * DNS Database Monthly. Returns the file/snapshot described by this operation.
   *
   * @returns CSV
   *
   * @throws {@link DatabasesDns.DbDnsMonthlyError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link WhoisFreaksError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  dbDnsMonthly(
    request: DatabasesDns.DbDnsMonthlyRequest = {},
    options?: RequestOptions,
  ): ApiPromise<BinaryContent, DatabasesDns.DbDnsMonthlyError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v3.2/download/dbupdate/monthly/dns"),
        auth: this.#auth.apiKeyAuth,
        pathParams: [],
        query: [{ name: "date", value: request.date, schema: s.optional(s.dateOnly()) }],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "binary", contentType: "application/octet-stream" },
        errorFactory: DatabasesDns.DbDnsMonthlyError,
      },
      options,
    );
  }

  /**
   * DNS Database Weekly
   *
   * @remarks
   * DNS Database Weekly. Returns the file/snapshot described by this operation.
   *
   * @returns CSV
   *
   * @throws {@link DatabasesDns.DbDnsWeeklyError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link WhoisFreaksError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  dbDnsWeekly(
    request: DatabasesDns.DbDnsWeeklyRequest = {},
    options?: RequestOptions,
  ): ApiPromise<BinaryContent, DatabasesDns.DbDnsWeeklyError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v3.2/download/dbupdate/weekly/dns"),
        auth: this.#auth.apiKeyAuth,
        pathParams: [],
        query: [{ name: "date", value: request.date, schema: s.optional(s.dateOnly()) }],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "binary", contentType: "application/octet-stream" },
        errorFactory: DatabasesDns.DbDnsWeeklyError,
      },
      options,
    );
  }
}

export namespace DatabasesDns {
  export type DbDnsDailyRequest = {
    /** yyyy-MM-dd; omit for latest */
    date?: string;
  };

  export class DbDnsDailyError extends ApiError {
    declare readonly payload: Declared<"errorResponse", ErrorResponse> | Undeclared;

    static readonly errors: ErrorDecoders<DbDnsDailyError> = [
      { on: [400, 499], kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export type DbDnsMonthlyRequest = {
    /** yyyy-MM-dd; omit for latest */
    date?: string;
  };

  export class DbDnsMonthlyError extends ApiError {
    declare readonly payload: Declared<"errorResponse", ErrorResponse> | Undeclared;

    static readonly errors: ErrorDecoders<DbDnsMonthlyError> = [
      { on: [400, 499], kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export type DbDnsWeeklyRequest = {
    /** yyyy-MM-dd; omit for latest */
    date?: string;
  };

  export class DbDnsWeeklyError extends ApiError {
    declare readonly payload: Declared<"errorResponse", ErrorResponse> | Undeclared;

    static readonly errors: ErrorDecoders<DbDnsWeeklyError> = [
      { on: [400, 499], kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }
}
