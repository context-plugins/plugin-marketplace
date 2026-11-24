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
 * Expiring and dropped domain downloads
 */
export class DatabasesExpiringDropped {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Dropped Domains
   *
   * @remarks
   * Dropped Domains. Returns the file/snapshot described by this operation.
   *
   * @returns CSV
   *
   * @throws {@link DatabasesExpiringDropped.DbDroppedError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link WhoisFreaksError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  dbDropped(
    request: DatabasesExpiringDropped.DbDroppedRequest,
    options?: RequestOptions,
  ): ApiPromise<BinaryContent, DatabasesExpiringDropped.DbDroppedError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v3.1/download/domainer/dropped"),
        auth: this.#auth.apiKeyAuth,
        pathParams: [],
        query: [
          { name: "whois", value: request.whois, schema: s.boolean() },
          { name: "date", value: request.date, schema: s.optional(s.dateOnly()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "binary", contentType: "application/octet-stream" },
        errorFactory: DatabasesExpiringDropped.DbDroppedError,
      },
      options,
    );
  }

  /**
   * Dropped With Backlinks
   *
   * @remarks
   * Dropped With Backlinks. Returns the file/snapshot described by this operation.
   *
   * @returns CSV
   *
   * @throws {@link DatabasesExpiringDropped.DbDroppedBacklinksError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link WhoisFreaksError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  dbDroppedBacklinks(
    request: DatabasesExpiringDropped.DbDroppedBacklinksRequest = {},
    options?: RequestOptions,
  ): ApiPromise<BinaryContent, DatabasesExpiringDropped.DbDroppedBacklinksError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v3.3/download/domainer/dropped/backlinks"),
        auth: this.#auth.apiKeyAuth,
        pathParams: [],
        query: [
          { name: "whois", value: request.whois, schema: s.optional(s.boolean()) },
          { name: "date", value: request.date, schema: s.optional(s.dateOnly()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "binary", contentType: "application/octet-stream" },
        errorFactory: DatabasesExpiringDropped.DbDroppedBacklinksError,
      },
      options,
    );
  }

  /**
   * Dropped Domains (JSON)
   *
   * @remarks
   * Dropped Domains (JSON). Returns the file/snapshot described by this operation.
   *
   * @returns JSON array of domains
   *
   * @throws {@link DatabasesExpiringDropped.DbDroppedJsonError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link WhoisFreaksError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  dbDroppedJson(
    request: DatabasesExpiringDropped.DbDroppedJsonRequest = {},
    options?: RequestOptions,
  ): ApiPromise<string[], DatabasesExpiringDropped.DbDroppedJsonError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v3.1/domains/dropped"),
        auth: this.#auth.apiKeyAuth,
        pathParams: [],
        query: [
          { name: "date", value: request.date, schema: s.optional(s.dateOnly()) },
          { name: "tlds", value: request.tlds, schema: s.optional(s.string()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.string()) },
        errorFactory: DatabasesExpiringDropped.DbDroppedJsonError,
      },
      options,
    );
  }

  /**
   * Expiring Domains
   *
   * @remarks
   * Expiring Domains. Returns the file/snapshot described by this operation.
   *
   * @returns CSV
   *
   * @throws {@link DatabasesExpiringDropped.DbExpiredError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link WhoisFreaksError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  dbExpired(
    request: DatabasesExpiringDropped.DbExpiredRequest,
    options?: RequestOptions,
  ): ApiPromise<BinaryContent, DatabasesExpiringDropped.DbExpiredError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v3.1/download/domainer/expired"),
        auth: this.#auth.apiKeyAuth,
        pathParams: [],
        query: [
          { name: "whois", value: request.whois, schema: s.boolean() },
          { name: "date", value: request.date, schema: s.optional(s.dateOnly()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "binary", contentType: "application/octet-stream" },
        errorFactory: DatabasesExpiringDropped.DbExpiredError,
      },
      options,
    );
  }

  /**
   * Expiring Cleaned WHOIS
   *
   * @remarks
   * Expiring Cleaned WHOIS. Returns the file/snapshot described by this operation.
   *
   * @returns CSV
   *
   * @throws {@link DatabasesExpiringDropped.DbExpiredCleanedError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link WhoisFreaksError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  dbExpiredCleaned(
    request: DatabasesExpiringDropped.DbExpiredCleanedRequest = {},
    options?: RequestOptions,
  ): ApiPromise<BinaryContent, DatabasesExpiringDropped.DbExpiredCleanedError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v3.1/download/domainer/expired/cleaned"),
        auth: this.#auth.apiKeyAuth,
        pathParams: [],
        query: [{ name: "date", value: request.date, schema: s.optional(s.dateOnly()) }],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "binary", contentType: "application/octet-stream" },
        errorFactory: DatabasesExpiringDropped.DbExpiredCleanedError,
      },
      options,
    );
  }
}

export namespace DatabasesExpiringDropped {
  export type DbDroppedRequest = {
    whois: boolean;
    /** yyyy-MM-dd; omit for latest */
    date?: string;
  };

  export class DbDroppedError extends ApiError {
    declare readonly payload: Declared<"errorResponse", ErrorResponse> | Undeclared;

    static readonly errors: ErrorDecoders<DbDroppedError> = [
      { on: [400, 499], kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export type DbDroppedBacklinksRequest = {
    whois?: boolean;
    /** yyyy-MM-dd; omit for latest */
    date?: string;
  };

  export class DbDroppedBacklinksError extends ApiError {
    declare readonly payload: Declared<"errorResponse", ErrorResponse> | Undeclared;

    static readonly errors: ErrorDecoders<DbDroppedBacklinksError> = [
      { on: [400, 499], kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export type DbDroppedJsonRequest = {
    /** yyyy-MM-dd; omit for latest */
    date?: string;
    tlds?: string;
  };

  export class DbDroppedJsonError extends ApiError {
    declare readonly payload: Declared<"errorResponse", ErrorResponse> | Undeclared;

    static readonly errors: ErrorDecoders<DbDroppedJsonError> = [
      { on: [400, 499], kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export type DbExpiredRequest = {
    whois: boolean;
    /** yyyy-MM-dd; omit for latest */
    date?: string;
  };

  export class DbExpiredError extends ApiError {
    declare readonly payload: Declared<"errorResponse", ErrorResponse> | Undeclared;

    static readonly errors: ErrorDecoders<DbExpiredError> = [
      { on: [400, 499], kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export type DbExpiredCleanedRequest = {
    /** yyyy-MM-dd; omit for latest */
    date?: string;
  };

  export class DbExpiredCleanedError extends ApiError {
    declare readonly payload: Declared<"errorResponse", ErrorResponse> | Undeclared;

    static readonly errors: ErrorDecoders<DbExpiredCleanedError> = [
      { on: [400, 499], kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }
}
