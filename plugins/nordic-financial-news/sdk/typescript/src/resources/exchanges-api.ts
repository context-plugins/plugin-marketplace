import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import * as s from "../core/validation/index.js";
import {
  apiV1ExchangesCompaniesResponseSchema,
  type ApiV1ExchangesCompaniesResponse,
} from "../models/api-v1-exchanges-companies-response.js";
import {
  apiV1ExchangesResponseSchema,
  type ApiV1ExchangesResponse,
} from "../models/api-v1-exchanges-response.js";
import {
  apiV1ExchangesResponse1Schema,
  type ApiV1ExchangesResponse1,
} from "../models/api-v1-exchanges-response1.js";
import { problemDetailsSchema, type ProblemDetails } from "../models/problem-details.js";
import type { Servers } from "../servers.js";

export class ExchangesApi {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * List Exchanges
   *
   * @remarks
   * Returns active Nordic stock exchanges, ordered alphabetically. Supports filtering by country.
   *
   * @returns Exchanges retrieved successfully
   *
   * @throws {@link ExchangesApi.GetApiV1ExchangesError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link NordicFinancialNewsError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  getApiV1Exchanges(
    request: ExchangesApi.GetApiV1ExchangesRequest = {},
    options?: RequestOptions,
  ): ApiPromise<ApiV1ExchangesResponse, ExchangesApi.GetApiV1ExchangesError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/v1/exchanges"),
        auth: this.#auth.bearerAuth,
        pathParams: [],
        query: [
          { name: "limit", value: request.limit, schema: s.optional(s.int()) },
          { name: "cursor", value: request.cursor, schema: s.optional(s.string()) },
          { name: "country", value: request.country, schema: s.optional(s.string()) },
          { name: "fields", value: request.fields, schema: s.optional(s.string()) },
        ],
        headers: [
          { name: "If-None-Match", value: request.ifNoneMatch, schema: s.optional(s.string()) },
          { name: "If-Modified-Since", value: request.ifModifiedSince, schema: s.optional(s.string()) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: apiV1ExchangesResponseSchema },
        errorFactory: ExchangesApi.GetApiV1ExchangesError,
      },
      options,
    );
  }

  /**
   * Get Exchange Details
   *
   * @remarks
   * Returns detailed information about a stock exchange, including currency, timezone, and
   * location. Look up by exchange ID (e.g. `exch_nasdaq1`) or MIC code (e.g. `XSTO`).
   *
   * @returns Exchange retrieved successfully
   *
   * @throws {@link ExchangesApi.GetApiV1ExchangesByIdentifierError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link NordicFinancialNewsError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  getApiV1ExchangesByIdentifier(
    request: ExchangesApi.GetApiV1ExchangesByIdentifierRequest,
    options?: RequestOptions,
  ): ApiPromise<ApiV1ExchangesResponse1, ExchangesApi.GetApiV1ExchangesByIdentifierError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/v1/exchanges/{identifier}"),
        auth: this.#auth.bearerAuth,
        pathParams: [{ name: "identifier", value: request.identifier, schema: s.string() }],
        query: [],
        headers: [
          { name: "If-None-Match", value: request.ifNoneMatch, schema: s.optional(s.string()) },
          { name: "If-Modified-Since", value: request.ifModifiedSince, schema: s.optional(s.string()) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: apiV1ExchangesResponse1Schema },
        errorFactory: ExchangesApi.GetApiV1ExchangesByIdentifierError,
      },
      options,
    );
  }

  /**
   * List Exchange Companies
   *
   * @remarks
   * Returns companies listed on a specific exchange, ordered alphabetically. The `ticker` and
   * `exchange` shown for each company reflect its primary listing, which may be on a different
   * exchange if the company is listed on multiple exchanges.
   *
   * @returns Exchange companies retrieved successfully
   *
   * @throws {@link ExchangesApi.GetApiV1ExchangesByIdentifierCompaniesError} when the API answers
   * with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link NordicFinancialNewsError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  getApiV1ExchangesByIdentifierCompanies(
    request: ExchangesApi.GetApiV1ExchangesByIdentifierCompaniesRequest,
    options?: RequestOptions,
  ): ApiPromise<ApiV1ExchangesCompaniesResponse, ExchangesApi.GetApiV1ExchangesByIdentifierCompaniesError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/v1/exchanges/{identifier}/companies"),
        auth: this.#auth.bearerAuth,
        pathParams: [{ name: "identifier", value: request.identifier, schema: s.string() }],
        query: [
          { name: "limit", value: request.limit, schema: s.optional(s.int()) },
          { name: "cursor", value: request.cursor, schema: s.optional(s.string()) },
        ],
        headers: [
          { name: "If-None-Match", value: request.ifNoneMatch, schema: s.optional(s.string()) },
          { name: "If-Modified-Since", value: request.ifModifiedSince, schema: s.optional(s.string()) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: apiV1ExchangesCompaniesResponseSchema },
        errorFactory: ExchangesApi.GetApiV1ExchangesByIdentifierCompaniesError,
      },
      options,
    );
  }
}

export namespace ExchangesApi {
  export type GetApiV1ExchangesRequest = {
    /** Number of exchanges to return per page (default 25, max 100). */
    limit?: number;
    /** Opaque pagination cursor from a previous response. */
    cursor?: string;
    /**
     * Filter by country using ISO 3166-1 alpha-2 code. Comma-separated for multiple (e.g. `SE,NO`).
     * Case-insensitive.
     */
    country?: string;
    /**
     * Comma-separated list of fields to include in the response. Available fields: `id`, `name`,
     * `mic_code`, `acronym`, `country`.
     */
    fields?: string;
    /** ETag value from a previous response. Returns `304 Not Modified` if data has not changed. */
    ifNoneMatch?: string;
    /**
     * HTTP date from a previous `Last-Modified` header. Returns `304 Not Modified` if nothing has
     * changed since.
     */
    ifModifiedSince?: string;
  };

  export class GetApiV1ExchangesError extends ApiError {
    declare readonly payload:
      | Declared<"error304", undefined>
      | Declared<"problemDetails", ProblemDetails>
      | Declared<"problemDetails2", ProblemDetails>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetApiV1ExchangesError> = [
      { on: 304, kind: "error304", decode: { kind: "empty" } },
      { on: 401, kind: "problemDetails", decode: { kind: "json", schema: problemDetailsSchema } },
      { on: 403, kind: "problemDetails2", decode: { kind: "json", schema: problemDetailsSchema } },
    ];
  }

  export type GetApiV1ExchangesByIdentifierRequest = {
    /** Exchange ID or MIC code (e.g. `XSTO`) */
    identifier: string;
    /** ETag value from a previous response. Returns `304 Not Modified` if data has not changed. */
    ifNoneMatch?: string;
    /**
     * HTTP date from a previous `Last-Modified` header. Returns `304 Not Modified` if nothing has
     * changed since.
     */
    ifModifiedSince?: string;
  };

  export class GetApiV1ExchangesByIdentifierError extends ApiError {
    declare readonly payload:
      | Declared<"error304", undefined>
      | Declared<"problemDetails", ProblemDetails>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetApiV1ExchangesByIdentifierError> = [
      { on: 304, kind: "error304", decode: { kind: "empty" } },
      { on: 404, kind: "problemDetails", decode: { kind: "json", schema: problemDetailsSchema } },
    ];
  }

  export type GetApiV1ExchangesByIdentifierCompaniesRequest = {
    /** Exchange ID or MIC code (e.g. `XSTO`) */
    identifier: string;
    /** Number of companies to return per page (default 25, max 100). */
    limit?: number;
    /** Opaque pagination cursor from a previous response. */
    cursor?: string;
    /** ETag value from a previous response. Returns `304 Not Modified` if data has not changed. */
    ifNoneMatch?: string;
    /**
     * HTTP date from a previous `Last-Modified` header. Returns `304 Not Modified` if nothing has
     * changed since.
     */
    ifModifiedSince?: string;
  };

  export class GetApiV1ExchangesByIdentifierCompaniesError extends ApiError {
    declare readonly payload:
      | Declared<"error304", undefined>
      | Declared<"problemDetails", ProblemDetails>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetApiV1ExchangesByIdentifierCompaniesError> = [
      { on: 304, kind: "error304", decode: { kind: "empty" } },
      { on: 404, kind: "problemDetails", decode: { kind: "json", schema: problemDetailsSchema } },
    ];
  }
}
