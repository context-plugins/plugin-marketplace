import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  createWatchlistParamsInternalSchema,
  type CreateWatchlistParams,
} from "../models/create-watchlist-params.js";
import { errorResponseSchema, type ErrorResponse } from "../models/error-response.js";
import { nullsSchema, type Nulls } from "../models/nulls.js";
import { sortOrderSchema, type SortOrder } from "../models/sort-order.js";
import {
  updateWatchlistParamsSchema,
  type UpdateWatchlistParams,
} from "../models/update-watchlist-params.js";
import { watchlistListResultSchema, type WatchlistListResult } from "../models/watchlist-list-result.js";
import {
  watchlistResolveResultSchema,
  type WatchlistResolveResult,
} from "../models/watchlist-resolve-result.js";
import { watchlistResultSchema, type WatchlistResult } from "../models/watchlist-result.js";
import { watchlistSortBySchema, type WatchlistSortBy } from "../models/watchlist-sort-by.js";
import type { Servers } from "../servers.js";

/**
 * Manage watchlists of people and companies for use with monitors. Watchlists can contain up to 100
 * combined entities and are used to track mentions across news content.
 */
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
   * Create watchlist
   *
   * @remarks
   * Create a new watchlist under the organization associated with the API key. A watchlist can
   * contain up to 100 combined people and companies.
   *
   * @returns 200 - Success
   *
   * @throws {@link Watchlists.CreateWatchlistError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link PerigonError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  createWatchlist(
    request: Watchlists.CreateWatchlistRequest,
    options?: RequestOptions,
  ): ApiPromise<WatchlistResult, Watchlists.CreateWatchlistError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/v1/api/watchlists"),
        auth: this.#auth.apiKeyAuth,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: createWatchlistParamsInternalSchema },
      },
      {
        success: { kind: "json", schema: watchlistResultSchema },
        errorFactory: Watchlists.CreateWatchlistError,
      },
      options,
    );
  }

  /**
   * Delete watchlist
   *
   * @remarks
   * Delete a watchlist owned by the organization associated with the API key. A watchlist cannot be
   * deleted if it is attached to active monitors.
   *
   * @returns 200 - Success
   *
   * @throws {@link Watchlists.DeleteWatchlistError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link PerigonError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  deleteWatchlist(
    request: Watchlists.DeleteWatchlistRequest,
    options?: RequestOptions,
  ): ApiPromise<WatchlistResult, Watchlists.DeleteWatchlistError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default("/v1/api/watchlists/{id}"),
        auth: this.#auth.apiKeyAuth,
        pathParams: [{ name: "id", value: request.id, schema: s.int() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: watchlistResultSchema },
        errorFactory: Watchlists.DeleteWatchlistError,
      },
      options,
    );
  }

  /**
   * Get watchlist
   *
   * @remarks
   * Retrieve a watchlist by ID. Only returns watchlists owned by the organization associated with
   * the API key.
   *
   * @returns 200 - Success
   *
   * @throws {@link Watchlists.GetWatchlistError} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link PerigonError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getWatchlist(
    request: Watchlists.GetWatchlistRequest,
    options?: RequestOptions,
  ): ApiPromise<WatchlistResult, Watchlists.GetWatchlistError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v1/api/watchlists/{id}"),
        auth: this.#auth.apiKeyAuth,
        pathParams: [{ name: "id", value: request.id, schema: s.int() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: watchlistResultSchema },
        errorFactory: Watchlists.GetWatchlistError,
      },
      options,
    );
  }

  /**
   * List watchlists
   *
   * @remarks
   * List watchlists owned by the organization associated with the API key, as well as publicly
   * visible watchlists. Supports filtering by name.
   *
   * @returns 200 - Success
   *
   * @throws {@link Watchlists.ListWatchlistsError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link PerigonError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listWatchlists(
    request: Watchlists.ListWatchlistsRequest,
    options?: RequestOptions,
  ): ApiPromise<WatchlistListResult, Watchlists.ListWatchlistsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v1/api/watchlists"),
        auth: this.#auth.apiKeyAuth,
        pathParams: [],
        query: [
          { name: "sortBy", value: request.sortBy, schema: watchlistSortBySchema },
          { name: "sortOrder", value: request.sortOrder, schema: sortOrderSchema },
          { name: "name", value: request.name, schema: s.optional(s.string()) },
          { name: "page", value: request.page, schema: s.defaulted(s.int(), 0) },
          { name: "size", value: request.size, schema: s.defaulted(s.int(), 10) },
          { name: "nulls", value: request.nulls, schema: s.optional(s.lazy(() => nullsSchema)) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: watchlistListResultSchema },
        errorFactory: Watchlists.ListWatchlistsError,
      },
      options,
    );
  }

  /**
   * Resolve watchlists
   *
   * @remarks
   * Resolve watchlists by name. For each name, returns the organization's private watchlist if one
   * exists, otherwise falls back to the matching public watchlist.
   *
   * @returns 200 - Success
   *
   * @throws {@link Watchlists.ResolveWatchlistsError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link PerigonError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  resolveWatchlists(
    request: Watchlists.ResolveWatchlistsRequest = {},
    options?: RequestOptions,
  ): ApiPromise<WatchlistResolveResult, Watchlists.ResolveWatchlistsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v1/api/watchlists/resolve"),
        auth: this.#auth.apiKeyAuth,
        pathParams: [],
        query: [{ name: "name", value: request.name, schema: s.optional(s.array(s.string())) }],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: watchlistResolveResultSchema },
        errorFactory: Watchlists.ResolveWatchlistsError,
      },
      options,
    );
  }

  /**
   * Update watchlist
   *
   * @remarks
   * Partially update a watchlist owned by the organization associated with the API key. Only
   * provided fields will be updated.
   *
   * @returns 200 - Success
   *
   * @throws {@link Watchlists.UpdateWatchlistError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link PerigonError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  updateWatchlist(
    request: Watchlists.UpdateWatchlistRequest,
    options?: RequestOptions,
  ): ApiPromise<WatchlistResult, Watchlists.UpdateWatchlistError> {
    return this.#rawClient.execute(
      {
        method: "PATCH",
        urlTemplate: this.#servers.default("/v1/api/watchlists/{id}"),
        auth: this.#auth.apiKeyAuth,
        pathParams: [{ name: "id", value: request.id, schema: s.int() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: updateWatchlistParamsSchema },
      },
      {
        success: { kind: "json", schema: watchlistResultSchema },
        errorFactory: Watchlists.UpdateWatchlistError,
      },
      options,
    );
  }
}

export namespace Watchlists {
  export type CreateWatchlistRequest = {
    body: CreateWatchlistParams;
  };

  export class CreateWatchlistError extends ApiError {
    declare readonly payload:
      | Declared<"errorResponse", ErrorResponse>
      | Declared<"errorResponse2", ErrorResponse>
      | Declared<"errorResponse3", ErrorResponse>
      | Declared<"errorResponse4", ErrorResponse>
      | Declared<"errorResponse5", ErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<CreateWatchlistError> = [
      { on: 401, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 500, kind: "errorResponse2", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 400, kind: "errorResponse3", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 403, kind: "errorResponse4", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 429, kind: "errorResponse5", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export type DeleteWatchlistRequest = {
    id: number;
  };

  export class DeleteWatchlistError extends ApiError {
    declare readonly payload:
      | Declared<"errorResponse", ErrorResponse>
      | Declared<"errorResponse2", ErrorResponse>
      | Declared<"errorResponse3", ErrorResponse>
      | Declared<"errorResponse4", ErrorResponse>
      | Declared<"errorResponse5", ErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<DeleteWatchlistError> = [
      { on: 401, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 500, kind: "errorResponse2", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 400, kind: "errorResponse3", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 403, kind: "errorResponse4", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 429, kind: "errorResponse5", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export type GetWatchlistRequest = {
    id: number;
  };

  export class GetWatchlistError extends ApiError {
    declare readonly payload:
      | Declared<"errorResponse", ErrorResponse>
      | Declared<"errorResponse2", ErrorResponse>
      | Declared<"errorResponse3", ErrorResponse>
      | Declared<"errorResponse4", ErrorResponse>
      | Declared<"errorResponse5", ErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetWatchlistError> = [
      { on: 401, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 500, kind: "errorResponse2", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 400, kind: "errorResponse3", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 403, kind: "errorResponse4", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 429, kind: "errorResponse5", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export type ListWatchlistsRequest = {
    sortBy: WatchlistSortBy;
    /** Required direction used to sort results. Accepts asc or desc. */
    sortOrder: SortOrder;
    /** Filter watchlists by name (case-insensitive, partial match) */
    name?: string;
    /** Zero-based page number to retrieve. Defaults to 0. @default 0 */
    page?: number;
    /** Number of results per page. Must be between 1 and 100; defaults to 10. @default 10 */
    size?: number;
    /** Placement of null values in sorted results. Accepts first or last. */
    nulls?: Nulls;
  };

  export const listWatchlistsRequestSchema: Schema<ListWatchlistsRequest> = s.lazySchema(() =>
    s.object<ListWatchlistsRequest>({
      sortBy: watchlistSortBySchema,
      sortOrder: sortOrderSchema,
      name: s.optional(s.string()),
      page: s.defaulted(s.int().check(s.gte(0)), 0),
      size: s.defaulted(s.int().check(s.gte(1), s.lte(100)), 10),
      nulls: s.optional(s.lazy(() => nullsSchema)),
    }),
  );

  export class ListWatchlistsError extends ApiError {
    declare readonly payload:
      | Declared<"errorResponse", ErrorResponse>
      | Declared<"errorResponse2", ErrorResponse>
      | Declared<"errorResponse3", ErrorResponse>
      | Declared<"errorResponse4", ErrorResponse>
      | Declared<"errorResponse5", ErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<ListWatchlistsError> = [
      { on: 401, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 500, kind: "errorResponse2", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 400, kind: "errorResponse3", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 403, kind: "errorResponse4", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 429, kind: "errorResponse5", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export type ResolveWatchlistsRequest = {
    /** Watchlist names to resolve (max 100) */
    name?: string[];
  };

  export const resolveWatchlistsRequestSchema: Schema<ResolveWatchlistsRequest> = s.lazySchema(() =>
    s.object<ResolveWatchlistsRequest>({
      name: s.optional(s.array(s.string()).check(s.minLength(0), s.maxLength(100))),
    }),
  );

  export class ResolveWatchlistsError extends ApiError {
    declare readonly payload:
      | Declared<"errorResponse", ErrorResponse>
      | Declared<"errorResponse2", ErrorResponse>
      | Declared<"errorResponse3", ErrorResponse>
      | Declared<"errorResponse4", ErrorResponse>
      | Declared<"errorResponse5", ErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<ResolveWatchlistsError> = [
      { on: 401, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 500, kind: "errorResponse2", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 400, kind: "errorResponse3", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 403, kind: "errorResponse4", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 429, kind: "errorResponse5", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export type UpdateWatchlistRequest = {
    id: number;
    body: UpdateWatchlistParams;
  };

  export class UpdateWatchlistError extends ApiError {
    declare readonly payload:
      | Declared<"errorResponse", ErrorResponse>
      | Declared<"errorResponse2", ErrorResponse>
      | Declared<"errorResponse3", ErrorResponse>
      | Declared<"errorResponse4", ErrorResponse>
      | Declared<"errorResponse5", ErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<UpdateWatchlistError> = [
      { on: 401, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 500, kind: "errorResponse2", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 400, kind: "errorResponse3", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 403, kind: "errorResponse4", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 429, kind: "errorResponse5", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }
}
