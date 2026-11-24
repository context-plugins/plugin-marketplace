import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import * as s from "../core/validation/index.js";
import {
  apiV1IndicesCompaniesResponseSchema,
  type ApiV1IndicesCompaniesResponse,
} from "../models/api-v1-indices-companies-response.js";
import { apiV1IndicesResponseSchema, type ApiV1IndicesResponse } from "../models/api-v1-indices-response.js";
import {
  apiV1IndicesResponse1Schema,
  type ApiV1IndicesResponse1,
} from "../models/api-v1-indices-response1.js";
import { problemDetailsSchema, type ProblemDetails } from "../models/problem-details.js";
import type { Servers } from "../servers.js";

export class IndicesApi {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * List Indices
   *
   * @remarks
   * Returns stock indices, ordered alphabetically by name. Use `exchange` to filter by a specific
   * exchange.
   *
   * @returns Indices retrieved successfully
   *
   * @throws {@link IndicesApi.GetApiV1IndicesError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link NordicFinancialNewsError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  getApiV1Indices(
    request: IndicesApi.GetApiV1IndicesRequest = {},
    options?: RequestOptions,
  ): ApiPromise<ApiV1IndicesResponse, IndicesApi.GetApiV1IndicesError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/v1/indices"),
        auth: this.#auth.bearerAuth,
        pathParams: [],
        query: [
          { name: "limit", value: request.limit, schema: s.optional(s.int()) },
          { name: "cursor", value: request.cursor, schema: s.optional(s.string()) },
          { name: "exchange", value: request.exchange, schema: s.optional(s.string()) },
          { name: "fields", value: request.fields, schema: s.optional(s.string()) },
        ],
        headers: [
          { name: "If-None-Match", value: request.ifNoneMatch, schema: s.optional(s.string()) },
          { name: "If-Modified-Since", value: request.ifModifiedSince, schema: s.optional(s.string()) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: apiV1IndicesResponseSchema },
        errorFactory: IndicesApi.GetApiV1IndicesError,
      },
      options,
    );
  }

  /**
   * Get Index Details
   *
   * @remarks
   * Returns details for a single index, including description and company count. Look up by index
   * ID or symbol (case-insensitive, e.g. `OMXS30`). Note: `companies_count` reflects the number of
   * distinct companies in the index, which may be less than the number of index constituents when a
   * company has multiple share classes listed.
   *
   * @returns Index retrieved successfully
   *
   * @throws {@link IndicesApi.GetApiV1IndicesByIdentifierError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link NordicFinancialNewsError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  getApiV1IndicesByIdentifier(
    request: IndicesApi.GetApiV1IndicesByIdentifierRequest,
    options?: RequestOptions,
  ): ApiPromise<ApiV1IndicesResponse1, IndicesApi.GetApiV1IndicesByIdentifierError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/v1/indices/{identifier}"),
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
        success: { kind: "json", schema: apiV1IndicesResponse1Schema },
        errorFactory: IndicesApi.GetApiV1IndicesByIdentifierError,
      },
      options,
    );
  }

  /**
   * List Index Companies
   *
   * @remarks
   * Returns companies that are members of a specific index, ordered alphabetically. The `ticker`
   * and `exchange` shown for each company reflect its primary listing, which may differ from the
   * listing used in this index (e.g. a company listed on multiple exchanges).
   *
   * @returns Index companies retrieved successfully
   *
   * @throws {@link IndicesApi.GetApiV1IndicesByIdentifierCompaniesError} when the API answers with
   * an error status — narrow on `err.payload.kind`
   *
   * @throws {@link NordicFinancialNewsError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  getApiV1IndicesByIdentifierCompanies(
    request: IndicesApi.GetApiV1IndicesByIdentifierCompaniesRequest,
    options?: RequestOptions,
  ): ApiPromise<ApiV1IndicesCompaniesResponse, IndicesApi.GetApiV1IndicesByIdentifierCompaniesError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/v1/indices/{identifier}/companies"),
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
        success: { kind: "json", schema: apiV1IndicesCompaniesResponseSchema },
        errorFactory: IndicesApi.GetApiV1IndicesByIdentifierCompaniesError,
      },
      options,
    );
  }
}

export namespace IndicesApi {
  export type GetApiV1IndicesRequest = {
    /** Number of indices to return per page (default 25, max 100). */
    limit?: number;
    /** Opaque pagination cursor from a previous response. */
    cursor?: string;
    /**
     * Filter by exchange MIC code, comma-separated for multiple (e.g. `XSTO`, `XSTO,XHEL`). Only
     * active exchanges match.
     */
    exchange?: string;
    /**
     * Comma-separated list of fields to include in the response. Available fields: `id`, `name`,
     * `symbol`, `pan_nordic`, `exchange`.
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

  export class GetApiV1IndicesError extends ApiError {
    declare readonly payload:
      | Declared<"error304", undefined>
      | Declared<"problemDetails", ProblemDetails>
      | Declared<"problemDetails2", ProblemDetails>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetApiV1IndicesError> = [
      { on: 304, kind: "error304", decode: { kind: "empty" } },
      { on: 401, kind: "problemDetails", decode: { kind: "json", schema: problemDetailsSchema } },
      { on: 403, kind: "problemDetails2", decode: { kind: "json", schema: problemDetailsSchema } },
    ];
  }

  export type GetApiV1IndicesByIdentifierRequest = {
    /** Index ID or symbol (e.g. `OMXS30`) */
    identifier: string;
    /** ETag value from a previous response. Returns `304 Not Modified` if data has not changed. */
    ifNoneMatch?: string;
    /**
     * HTTP date from a previous `Last-Modified` header. Returns `304 Not Modified` if nothing has
     * changed since.
     */
    ifModifiedSince?: string;
  };

  export class GetApiV1IndicesByIdentifierError extends ApiError {
    declare readonly payload:
      | Declared<"error304", undefined>
      | Declared<"problemDetails", ProblemDetails>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetApiV1IndicesByIdentifierError> = [
      { on: 304, kind: "error304", decode: { kind: "empty" } },
      { on: 404, kind: "problemDetails", decode: { kind: "json", schema: problemDetailsSchema } },
    ];
  }

  export type GetApiV1IndicesByIdentifierCompaniesRequest = {
    /** Index ID or symbol (e.g. `OMXS30`) */
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

  export class GetApiV1IndicesByIdentifierCompaniesError extends ApiError {
    declare readonly payload:
      | Declared<"error304", undefined>
      | Declared<"problemDetails", ProblemDetails>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetApiV1IndicesByIdentifierCompaniesError> = [
      { on: 304, kind: "error304", decode: { kind: "empty" } },
      { on: 404, kind: "problemDetails", decode: { kind: "json", schema: problemDetailsSchema } },
    ];
  }
}
