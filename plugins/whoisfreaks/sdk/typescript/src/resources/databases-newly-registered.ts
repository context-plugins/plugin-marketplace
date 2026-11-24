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
 * Newly registered domain downloads
 */
export class DatabasesNewlyRegistered {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Newly Registered ccTLD (CSV)
   *
   * @remarks
   * Newly Registered ccTLD (CSV). Returns the file/snapshot described by this operation.
   *
   * @returns CSV
   *
   * @throws {@link DatabasesNewlyRegistered.DbNewlyCctldError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link WhoisFreaksError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  dbNewlyCctld(
    request: DatabasesNewlyRegistered.DbNewlyCctldRequest,
    options?: RequestOptions,
  ): ApiPromise<BinaryContent, DatabasesNewlyRegistered.DbNewlyCctldError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v3.1/download/domainer/cctld"),
        auth: this.#auth.apiKeyAuth,
        pathParams: [],
        query: [
          { name: "whois", value: request.whois, schema: s.boolean() },
          { name: "date", value: request.date, schema: s.optional(s.dateOnly()) },
          { name: "tlds", value: request.tlds, schema: s.optional(s.string()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "binary", contentType: "application/octet-stream" },
        errorFactory: DatabasesNewlyRegistered.DbNewlyCctldError,
      },
      options,
    );
  }

  /**
   * Newly Registered ccTLD Cleaned WHOIS (CSV)
   *
   * @remarks
   * Newly Registered ccTLD Cleaned WHOIS (CSV). Returns the file/snapshot described by this
   * operation.
   *
   * @returns CSV
   *
   * @throws {@link DatabasesNewlyRegistered.DbNewlyCctldCleanedError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link WhoisFreaksError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  dbNewlyCctldCleaned(
    request: DatabasesNewlyRegistered.DbNewlyCctldCleanedRequest = {},
    options?: RequestOptions,
  ): ApiPromise<BinaryContent, DatabasesNewlyRegistered.DbNewlyCctldCleanedError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v3.1/download/domainer/cctld/cleaned"),
        auth: this.#auth.apiKeyAuth,
        pathParams: [],
        query: [{ name: "date", value: request.date, schema: s.optional(s.dateOnly()) }],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "binary", contentType: "application/octet-stream" },
        errorFactory: DatabasesNewlyRegistered.DbNewlyCctldCleanedError,
      },
      options,
    );
  }

  /**
   * Newly Registered ccTLD (JSON)
   *
   * @remarks
   * Newly Registered ccTLD (JSON). Returns the file/snapshot described by this operation.
   *
   * @returns JSON array of domains
   *
   * @throws {@link DatabasesNewlyRegistered.DbNewlyCctldJsonError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link WhoisFreaksError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  dbNewlyCctldJson(
    request: DatabasesNewlyRegistered.DbNewlyCctldJsonRequest = {},
    options?: RequestOptions,
  ): ApiPromise<string[], DatabasesNewlyRegistered.DbNewlyCctldJsonError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v3.1/domains/newly/cctld"),
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
        errorFactory: DatabasesNewlyRegistered.DbNewlyCctldJsonError,
      },
      options,
    );
  }

  /**
   * Newly Registered With DNS
   *
   * @remarks
   * Newly Registered With DNS. Returns the file/snapshot described by this operation.
   *
   * @returns JSON array of domains with DNS
   *
   * @throws {@link DatabasesNewlyRegistered.DbNewlyDnsError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link WhoisFreaksError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  dbNewlyDns(
    request: DatabasesNewlyRegistered.DbNewlyDnsRequest = {},
    options?: RequestOptions,
  ): ApiPromise<BinaryContent, DatabasesNewlyRegistered.DbNewlyDnsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v3.1/download/domainer/newly/dns"),
        auth: this.#auth.apiKeyAuth,
        pathParams: [],
        query: [{ name: "date", value: request.date, schema: s.optional(s.dateOnly()) }],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "binary", contentType: "application/octet-stream" },
        errorFactory: DatabasesNewlyRegistered.DbNewlyDnsError,
      },
      options,
    );
  }

  /**
   * Newly Registered gTLD (CSV)
   *
   * @remarks
   * Newly Registered gTLD (CSV). Returns the file/snapshot described by this operation.
   *
   * @returns CSV
   *
   * @throws {@link DatabasesNewlyRegistered.DbNewlyGtldError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link WhoisFreaksError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  dbNewlyGtld(
    request: DatabasesNewlyRegistered.DbNewlyGtldRequest,
    options?: RequestOptions,
  ): ApiPromise<BinaryContent, DatabasesNewlyRegistered.DbNewlyGtldError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v3.1/download/domainer/gtld"),
        auth: this.#auth.apiKeyAuth,
        pathParams: [],
        query: [
          { name: "whois", value: request.whois, schema: s.boolean() },
          { name: "date", value: request.date, schema: s.optional(s.dateOnly()) },
          { name: "tlds", value: request.tlds, schema: s.optional(s.string()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "binary", contentType: "application/octet-stream" },
        errorFactory: DatabasesNewlyRegistered.DbNewlyGtldError,
      },
      options,
    );
  }

  /**
   * Newly Registered gTLD Cleaned WHOIS (CSV)
   *
   * @remarks
   * Newly Registered gTLD Cleaned WHOIS (CSV). Returns the file/snapshot described by this
   * operation.
   *
   * @returns CSV
   *
   * @throws {@link DatabasesNewlyRegistered.DbNewlyGtldCleanedError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link WhoisFreaksError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  dbNewlyGtldCleaned(
    request: DatabasesNewlyRegistered.DbNewlyGtldCleanedRequest = {},
    options?: RequestOptions,
  ): ApiPromise<BinaryContent, DatabasesNewlyRegistered.DbNewlyGtldCleanedError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v3.1/download/domainer/gtld/cleaned"),
        auth: this.#auth.apiKeyAuth,
        pathParams: [],
        query: [{ name: "date", value: request.date, schema: s.optional(s.dateOnly()) }],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "binary", contentType: "application/octet-stream" },
        errorFactory: DatabasesNewlyRegistered.DbNewlyGtldCleanedError,
      },
      options,
    );
  }

  /**
   * Newly Registered gTLD (JSON)
   *
   * @remarks
   * Newly Registered gTLD (JSON). Returns the file/snapshot described by this operation.
   *
   * @returns JSON array of domains
   *
   * @throws {@link DatabasesNewlyRegistered.DbNewlyGtldJsonError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link WhoisFreaksError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  dbNewlyGtldJson(
    request: DatabasesNewlyRegistered.DbNewlyGtldJsonRequest = {},
    options?: RequestOptions,
  ): ApiPromise<string[], DatabasesNewlyRegistered.DbNewlyGtldJsonError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v3.1/domains/newly/gtld"),
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
        errorFactory: DatabasesNewlyRegistered.DbNewlyGtldJsonError,
      },
      options,
    );
  }
}

export namespace DatabasesNewlyRegistered {
  export type DbNewlyCctldRequest = {
    whois: boolean;
    /** yyyy-MM-dd; omit for latest */
    date?: string;
    tlds?: string;
  };

  export class DbNewlyCctldError extends ApiError {
    declare readonly payload: Declared<"errorResponse", ErrorResponse> | Undeclared;

    static readonly errors: ErrorDecoders<DbNewlyCctldError> = [
      { on: [400, 499], kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export type DbNewlyCctldCleanedRequest = {
    /** yyyy-MM-dd; omit for latest */
    date?: string;
  };

  export class DbNewlyCctldCleanedError extends ApiError {
    declare readonly payload: Declared<"errorResponse", ErrorResponse> | Undeclared;

    static readonly errors: ErrorDecoders<DbNewlyCctldCleanedError> = [
      { on: [400, 499], kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export type DbNewlyCctldJsonRequest = {
    /** yyyy-MM-dd; omit for latest */
    date?: string;
    tlds?: string;
  };

  export class DbNewlyCctldJsonError extends ApiError {
    declare readonly payload: Declared<"errorResponse", ErrorResponse> | Undeclared;

    static readonly errors: ErrorDecoders<DbNewlyCctldJsonError> = [
      { on: [400, 499], kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export type DbNewlyDnsRequest = {
    /** yyyy-MM-dd; omit for latest */
    date?: string;
  };

  export class DbNewlyDnsError extends ApiError {
    declare readonly payload: Declared<"errorResponse", ErrorResponse> | Undeclared;

    static readonly errors: ErrorDecoders<DbNewlyDnsError> = [
      { on: [400, 499], kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export type DbNewlyGtldRequest = {
    whois: boolean;
    /** yyyy-MM-dd; omit for latest */
    date?: string;
    tlds?: string;
  };

  export class DbNewlyGtldError extends ApiError {
    declare readonly payload: Declared<"errorResponse", ErrorResponse> | Undeclared;

    static readonly errors: ErrorDecoders<DbNewlyGtldError> = [
      { on: [400, 499], kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export type DbNewlyGtldCleanedRequest = {
    /** yyyy-MM-dd; omit for latest */
    date?: string;
  };

  export class DbNewlyGtldCleanedError extends ApiError {
    declare readonly payload: Declared<"errorResponse", ErrorResponse> | Undeclared;

    static readonly errors: ErrorDecoders<DbNewlyGtldCleanedError> = [
      { on: [400, 499], kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export type DbNewlyGtldJsonRequest = {
    /** yyyy-MM-dd; omit for latest */
    date?: string;
    tlds?: string;
  };

  export class DbNewlyGtldJsonError extends ApiError {
    declare readonly payload: Declared<"errorResponse", ErrorResponse> | Undeclared;

    static readonly errors: ErrorDecoders<DbNewlyGtldJsonError> = [
      { on: [400, 499], kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }
}
