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
 * WHOIS database snapshots
 */
export class DatabasesWhois {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * WHOIS Database Daily
   *
   * @remarks
   * WHOIS Database Daily. Returns the file/snapshot described by this operation.
   *
   * @returns CSV
   *
   * @throws {@link DatabasesWhois.DbWhoisDailyError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link WhoisFreaksError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  dbWhoisDaily(
    request: DatabasesWhois.DbWhoisDailyRequest = {},
    options?: RequestOptions,
  ): ApiPromise<BinaryContent, DatabasesWhois.DbWhoisDailyError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v3.3/download/dbupdate/daily/domains/whois"),
        auth: this.#auth.apiKeyAuth,
        pathParams: [],
        query: [{ name: "date", value: request.date, schema: s.optional(s.dateOnly()) }],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "binary", contentType: "application/octet-stream" },
        errorFactory: DatabasesWhois.DbWhoisDailyError,
      },
      options,
    );
  }

  /**
   * WHOIS Database Monthly
   *
   * @remarks
   * WHOIS Database Monthly. Returns the file/snapshot described by this operation.
   *
   * @returns CSV
   *
   * @throws {@link DatabasesWhois.DbWhoisMonthlyError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link WhoisFreaksError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  dbWhoisMonthly(
    request: DatabasesWhois.DbWhoisMonthlyRequest = {},
    options?: RequestOptions,
  ): ApiPromise<BinaryContent, DatabasesWhois.DbWhoisMonthlyError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v3.3/download/dbupdate/monthly/domains/whois"),
        auth: this.#auth.apiKeyAuth,
        pathParams: [],
        query: [{ name: "date", value: request.date, schema: s.optional(s.dateOnly()) }],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "binary", contentType: "application/octet-stream" },
        errorFactory: DatabasesWhois.DbWhoisMonthlyError,
      },
      options,
    );
  }

  /**
   * WHOIS Database Weekly
   *
   * @remarks
   * WHOIS Database Weekly. Returns the file/snapshot described by this operation.
   *
   * @returns CSV
   *
   * @throws {@link DatabasesWhois.DbWhoisWeeklyError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link WhoisFreaksError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  dbWhoisWeekly(
    request: DatabasesWhois.DbWhoisWeeklyRequest = {},
    options?: RequestOptions,
  ): ApiPromise<BinaryContent, DatabasesWhois.DbWhoisWeeklyError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v3.3/download/dbupdate/weekly/domains/whois"),
        auth: this.#auth.apiKeyAuth,
        pathParams: [],
        query: [{ name: "date", value: request.date, schema: s.optional(s.dateOnly()) }],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "binary", contentType: "application/octet-stream" },
        errorFactory: DatabasesWhois.DbWhoisWeeklyError,
      },
      options,
    );
  }
}

export namespace DatabasesWhois {
  export type DbWhoisDailyRequest = {
    /** yyyy-MM-dd; omit for latest */
    date?: string;
  };

  export class DbWhoisDailyError extends ApiError {
    declare readonly payload: Declared<"errorResponse", ErrorResponse> | Undeclared;

    static readonly errors: ErrorDecoders<DbWhoisDailyError> = [
      { on: [400, 499], kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export type DbWhoisMonthlyRequest = {
    /** yyyy-MM-dd; omit for latest */
    date?: string;
  };

  export class DbWhoisMonthlyError extends ApiError {
    declare readonly payload: Declared<"errorResponse", ErrorResponse> | Undeclared;

    static readonly errors: ErrorDecoders<DbWhoisMonthlyError> = [
      { on: [400, 499], kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export type DbWhoisWeeklyRequest = {
    /** yyyy-MM-dd; omit for latest */
    date?: string;
  };

  export class DbWhoisWeeklyError extends ApiError {
    declare readonly payload: Declared<"errorResponse", ErrorResponse> | Undeclared;

    static readonly errors: ErrorDecoders<DbWhoisWeeklyError> = [
      { on: [400, 499], kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }
}
