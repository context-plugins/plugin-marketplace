import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import * as s from "../core/validation/index.js";
import {
  apiV1WatchlistsResponseSchema,
  type ApiV1WatchlistsResponse,
} from "../models/api-v1-watchlists-response.js";
import {
  apiV1WatchlistsResponse1Schema,
  type ApiV1WatchlistsResponse1,
} from "../models/api-v1-watchlists-response1.js";
import { problemDetailsSchema, type ProblemDetails } from "../models/problem-details.js";
import type { Servers } from "../servers.js";

export class Watchlists {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * List Watchlists
   *
   * @remarks
   * Returns all watchlists belonging to the authenticated user, ordered by position (ascending)
   * then creation date. Each watchlist includes a company count but not the full company list. Use
   * the Get Watchlist Details endpoint to retrieve companies. Requires the `read:watchlist` scope.
   *
   * @returns Watchlists retrieved successfully
   *
   * @throws {@link Watchlists.GetApiV1WatchlistsError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link NordicFinancialNewsError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  getApiV1Watchlists(
    request: Watchlists.GetApiV1WatchlistsRequest = {},
    options?: RequestOptions,
  ): ApiPromise<ApiV1WatchlistsResponse, Watchlists.GetApiV1WatchlistsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/v1/watchlists"),
        auth: this.#auth.bearerAuth,
        pathParams: [],
        query: [],
        headers: [
          { name: "If-None-Match", value: request.ifNoneMatch, schema: s.optional(s.string()) },
          { name: "If-Modified-Since", value: request.ifModifiedSince, schema: s.optional(s.string()) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: apiV1WatchlistsResponseSchema },
        errorFactory: Watchlists.GetApiV1WatchlistsError,
      },
      options,
    );
  }

  /**
   * Get Watchlist Details
   *
   * @remarks
   * Returns watchlist details along with a paginated list of its companies, ordered alphabetically
   * by company name. Hidden and unverified companies are excluded. Requires the `read:watchlist`
   * scope.
   *
   * @returns Watchlist retrieved successfully
   *
   * @throws {@link Watchlists.GetApiV1WatchlistsByIdError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link NordicFinancialNewsError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  getApiV1WatchlistsById(
    request: Watchlists.GetApiV1WatchlistsByIdRequest,
    options?: RequestOptions,
  ): ApiPromise<ApiV1WatchlistsResponse1, Watchlists.GetApiV1WatchlistsByIdError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/v1/watchlists/{id}"),
        auth: this.#auth.bearerAuth,
        pathParams: [{ name: "id", value: request.id, schema: s.string() }],
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
        success: { kind: "json", schema: apiV1WatchlistsResponse1Schema },
        errorFactory: Watchlists.GetApiV1WatchlistsByIdError,
      },
      options,
    );
  }
}

export namespace Watchlists {
  export type GetApiV1WatchlistsRequest = {
    /** ETag value from a previous response. Returns `304 Not Modified` if data has not changed. */
    ifNoneMatch?: string;
    /**
     * HTTP date from a previous `Last-Modified` header. Returns `304 Not Modified` if nothing has
     * changed since.
     */
    ifModifiedSince?: string;
  };

  export class GetApiV1WatchlistsError extends ApiError {
    declare readonly payload:
      | Declared<"error304", undefined>
      | Declared<"problemDetails", ProblemDetails>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetApiV1WatchlistsError> = [
      { on: 304, kind: "error304", decode: { kind: "empty" } },
      { on: 401, kind: "problemDetails", decode: { kind: "json", schema: problemDetailsSchema } },
    ];
  }

  export type GetApiV1WatchlistsByIdRequest = {
    /** Watchlist ID (e.g. `a1b2c3d4e5f6`). */
    id: string;
    /** Number of companies to return per page (default 25, max 100). */
    limit?: number;
    /** Opaque pagination cursor returned as `pagination.next_cursor` from a previous response. */
    cursor?: string;
    /** ETag value from a previous response. Returns `304 Not Modified` if data has not changed. */
    ifNoneMatch?: string;
    /**
     * HTTP date from a previous `Last-Modified` header. Returns `304 Not Modified` if nothing has
     * changed since.
     */
    ifModifiedSince?: string;
  };

  export class GetApiV1WatchlistsByIdError extends ApiError {
    declare readonly payload:
      | Declared<"error304", undefined>
      | Declared<"problemDetails", ProblemDetails>
      | Declared<"problemDetails2", ProblemDetails>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetApiV1WatchlistsByIdError> = [
      { on: 304, kind: "error304", decode: { kind: "empty" } },
      { on: 404, kind: "problemDetails", decode: { kind: "json", schema: problemDetailsSchema } },
      { on: 401, kind: "problemDetails2", decode: { kind: "json", schema: problemDetailsSchema } },
    ];
  }
}
