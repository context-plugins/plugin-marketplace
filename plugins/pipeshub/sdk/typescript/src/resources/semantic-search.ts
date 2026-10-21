import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { anyAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import { errorResponseSchema, type ErrorResponse } from "../models/error-response.js";
import {
  persistedSemanticSearchSchema,
  type PersistedSemanticSearch,
} from "../models/persisted-semantic-search.js";
import { revokePatResponseSchema, type RevokePatResponse } from "../models/revoke-pat-response.js";
import {
  searchArchiveResponseSchema,
  type SearchArchiveResponse,
} from "../models/search-archive-response.js";
import {
  searchUnarchiveResponseSchema,
  type SearchUnarchiveResponse,
} from "../models/search-unarchive-response.js";
import { search400Error1Schema, type Search400Error1 } from "../models/search400-error1.js";
import { search400Error21Schema, type Search400Error21 } from "../models/search400-error21.js";
import { search401Error1Schema, type Search401Error1 } from "../models/search401-error1.js";
import { search401Error21Schema, type Search401Error21 } from "../models/search401-error21.js";
import { search403Error1Schema, type Search403Error1 } from "../models/search403-error1.js";
import { search403Error21Schema, type Search403Error21 } from "../models/search403-error21.js";
import { search404Error1Schema, type Search404Error1 } from "../models/search404-error1.js";
import { search500Error1Schema, type Search500Error1 } from "../models/search500-error1.js";
import { search500Error21Schema, type Search500Error21 } from "../models/search500-error21.js";
import {
  semanticSearchExecuteResponseSchema,
  type SemanticSearchExecuteResponse,
} from "../models/semantic-search-execute-response.js";
import {
  semanticSearchHistoryResponseSchema,
  type SemanticSearchHistoryResponse,
} from "../models/semantic-search-history-response.js";
import {
  semanticSearchRequestSchema,
  type SemanticSearchRequest,
} from "../models/semantic-search-request.js";
import { shared3Schema, type Shared3 } from "../models/shared3.js";
import { shared4Schema, type Shared4 } from "../models/shared4.js";
import { SortBy4, sortBy4Schema } from "../models/sort-by4.js";
import { SortOrder, sortOrderSchema } from "../models/sort-order.js";
import type { Servers } from "../servers.js";

/**
 * Enterprise semantic search across all indexed knowledge with relevance scoring
 */
export class SemanticSearch {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Archive a search
   *
   * @remarks
   * Archive a specific search result. Archived searches are hidden from the default search history
   * view but remain retrievable via the archive-aware listing endpoints.
   *
   * @returns Search archived successfully
   *
   * @throws {@link SemanticSearch.ArchiveSearchError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link PipesHubApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  archiveSearch(
    request: SemanticSearch.ArchiveSearchRequest,
    options?: RequestOptions,
  ): ApiPromise<SearchArchiveResponse, SemanticSearch.ArchiveSearchError> {
    return this.#rawClient.execute(
      {
        method: "PATCH",
        urlTemplate: this.#servers.default("/search/{searchId}/archive"),
        auth: anyAuth(
          this.#auth.bearerAuth,
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
        ),
        pathParams: [{ name: "searchId", value: request.searchId, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: searchArchiveResponseSchema },
        errorFactory: SemanticSearch.ArchiveSearchError,
      },
      options,
    );
  }

  /**
   * Delete search by ID
   *
   * @remarks
   * Permanently delete a single persisted search row, plus every citation row referenced by its
   * `citationIds`. The caller must either own the row or have it shared with them.
   *
   * Scoped to the caller's org and limited to rows where `isDeleted: false` and `isArchived:
   * false`; archived or already-deleted rows surface as `404`.
   *
   * @returns Search deleted successfully.
   *
   * @throws {@link SemanticSearch.DeleteSearchByIdError} when the API answers with an error status
   * — narrow on `err.payload.kind`
   *
   * @throws {@link PipesHubApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  deleteSearchById(
    request: SemanticSearch.DeleteSearchByIdRequest,
    options?: RequestOptions,
  ): ApiPromise<RevokePatResponse, SemanticSearch.DeleteSearchByIdError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default("/search/{searchId}"),
        auth: anyAuth(
          this.#auth.bearerAuth,
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
        ),
        pathParams: [{ name: "searchId", value: request.searchId, schema: s.string() }],
        query: [
          { name: "search", value: request.search, schema: s.optional(s.string()) },
          { name: "shared", value: request.shared, schema: s.optional(s.lazy(() => shared4Schema)) },
          { name: "startDate", value: request.startDate, schema: s.optional(s.dateTime()) },
          { name: "endDate", value: request.endDate, schema: s.optional(s.dateTime()) },
        ],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: revokePatResponseSchema },
        errorFactory: SemanticSearch.DeleteSearchByIdError,
      },
      options,
    );
  }

  /**
   * Clear all search history
   *
   * @remarks
   * Permanently delete every persisted search row owned by, or shared with, the authenticated user,
   * along with the citation rows those searches reference. The action cannot be undone.
   *
   * Scoped to the caller's org and limited to rows where `isDeleted: false` and `isArchived:
   * false`. If nothing matches (including the case where every row is already archived), the
   * endpoint returns `404` rather than a successful no-op.
   *
   * @returns Search history deleted successfully.
   *
   * @throws {@link SemanticSearch.DeleteSearchHistoryError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link PipesHubApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  deleteSearchHistory(
    request: SemanticSearch.DeleteSearchHistoryRequest,
    options?: RequestOptions,
  ): ApiPromise<RevokePatResponse, SemanticSearch.DeleteSearchHistoryError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default("/search"),
        auth: anyAuth(
          this.#auth.bearerAuth,
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
        ),
        pathParams: [],
        query: [
          { name: "search", value: request.search, schema: s.optional(s.string()) },
          { name: "shared", value: request.shared, schema: s.optional(s.lazy(() => shared4Schema)) },
          { name: "startDate", value: request.startDate, schema: s.optional(s.dateTime()) },
          { name: "endDate", value: request.endDate, schema: s.optional(s.dateTime()) },
        ],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: revokePatResponseSchema },
        errorFactory: SemanticSearch.DeleteSearchHistoryError,
      },
      options,
    );
  }

  /**
   * Get search by ID
   *
   * @remarks
   * Retrieve a previously persisted search by its id, scoped to the caller's org.
   *
   * The response body is always an **array** containing zero or one persisted search document. An
   * unknown id returns an empty array with a `200` status — callers should check array length
   * rather than relying on a `404`.
   *
   * @returns Array containing zero or one persisted search document.
   *
   * @throws {@link SemanticSearch.GetSearchByIdError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link PipesHubApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getSearchById(
    request: SemanticSearch.GetSearchByIdRequest,
    options?: RequestOptions,
  ): ApiPromise<PersistedSemanticSearch[], SemanticSearch.GetSearchByIdError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/search/{searchId}"),
        auth: anyAuth(
          this.#auth.bearerAuth,
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
        ),
        pathParams: [{ name: "searchId", value: request.searchId, schema: s.string() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => persistedSemanticSearchSchema)) },
        errorFactory: SemanticSearch.GetSearchByIdError,
      },
      options,
    );
  }

  /**
   * Perform semantic search
   *
   * @remarks
   * Run a semantic search across your organization's knowledge base. Matching is meaning-based, so
   * relevant results surface even when the wording differs from the query.
   *
   * Use optional `filters` to narrow the scope (see `Filters`):
   *
   * - `filters.apps` — restrict to whole apps: connector instances (for example Google Drive or
   *   Confluence) and collections. `filters.kb` is the older name for collections and means the
   *   same.
   * - `filters.recordGroups` — restrict to record groups (a drive, a space, a project), each with
   *   the groups nested in it.
   * - `filters.records` — restrict to folders or records, each with everything under it.
   * - `filters.recordsExact` — restrict to records alone, without what is under them.
   *
   * The keys are a union. With any of the last three present, an absent or empty `apps` / `kb`
   * means no whole app.
   *
   * The response returns a `searchId` for the persisted search along with ranked matches, each
   * carrying a relevance score and the source document's metadata. Past searches can be retrieved
   * via `GET /search`.
   *
   * @returns Search ID plus retrieval payload (`searchResponse`) from the AI search service
   *
   * @throws {@link SemanticSearch.SearchError} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link PipesHubApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  search(
    request: SemanticSearch.SearchRequest,
    options?: RequestOptions,
  ): ApiPromise<SemanticSearchExecuteResponse, SemanticSearch.SearchError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/search"),
        auth: anyAuth(
          this.#auth.bearerAuth,
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
        ),
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: semanticSearchRequestSchema },
      },
      {
        success: { kind: "json", schema: semanticSearchExecuteResponseSchema },
        errorFactory: SemanticSearch.SearchError,
      },
      options,
    );
  }

  /**
   * Get search history
   *
   * @remarks
   * Retrieve the authenticated user's persisted search history.
   *
   * Returns searches the user owns along with searches shared with them, scoped to the caller's
   * organization. Archived and deleted entries are excluded. Citation references on this endpoint
   * are returned as raw identifier strings; use `GET /search/{searchId}` to fetch a single search
   * with its citations fully expanded.
   *
   * Pagination defaults to `page=1, limit=20` (maximum `limit` is 100). Results are sorted by most
   * recent activity by default.
   *
   * @returns Persisted search history plus pagination, applied/available filter metadata, and a
   * request-scoped `meta` block.
   *
   * @throws {@link SemanticSearch.SearchHistoryError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link PipesHubApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  searchHistory(
    request: SemanticSearch.SearchHistoryRequest,
    options?: RequestOptions,
  ): ApiPromise<SemanticSearchHistoryResponse, SemanticSearch.SearchHistoryError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/search"),
        auth: anyAuth(
          this.#auth.bearerAuth,
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
        ),
        pathParams: [],
        query: [
          { name: "page", value: request.page, schema: s.defaulted(s.int(), 1) },
          { name: "limit", value: request.limit, schema: s.defaulted(s.int(), 20) },
          {
            name: "sortBy",
            value: request.sortBy,
            schema: s.defaulted(sortBy4Schema, SortBy4.LastActivityAt),
          },
          {
            name: "sortOrder",
            value: request.sortOrder,
            schema: s.defaulted(sortOrderSchema, SortOrder.Desc),
          },
          { name: "search", value: request.search, schema: s.optional(s.string()) },
          { name: "shared", value: request.shared, schema: s.optional(s.lazy(() => shared3Schema)) },
          { name: "startDate", value: request.startDate, schema: s.optional(s.dateTime()) },
          { name: "endDate", value: request.endDate, schema: s.optional(s.dateTime()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: semanticSearchHistoryResponseSchema },
        errorFactory: SemanticSearch.SearchHistoryError,
      },
      options,
    );
  }

  /**
   * Unarchive a search
   *
   * @remarks
   * Restore a previously archived search result back to the active search history.
   *
   * @returns Search unarchived successfully
   *
   * @throws {@link SemanticSearch.UnarchiveSearchError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link PipesHubApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  unarchiveSearch(
    request: SemanticSearch.UnarchiveSearchRequest,
    options?: RequestOptions,
  ): ApiPromise<SearchUnarchiveResponse, SemanticSearch.UnarchiveSearchError> {
    return this.#rawClient.execute(
      {
        method: "PATCH",
        urlTemplate: this.#servers.default("/search/{searchId}/unarchive"),
        auth: anyAuth(
          this.#auth.bearerAuth,
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
        ),
        pathParams: [{ name: "searchId", value: request.searchId, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: searchUnarchiveResponseSchema },
        errorFactory: SemanticSearch.UnarchiveSearchError,
      },
      options,
    );
  }
}

export namespace SemanticSearch {
  export type ArchiveSearchRequest = {
    /** Unique search identifier */
    searchId: string;
  };

  export class ArchiveSearchError extends ApiError {
    declare readonly payload:
      | Declared<"error400", undefined>
      | Declared<"error401", undefined>
      | Declared<"error403", undefined>
      | Declared<"error404", undefined>
      | Declared<"error500", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<ArchiveSearchError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 401, kind: "error401", decode: { kind: "empty" } },
      { on: 403, kind: "error403", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 500, kind: "error500", decode: { kind: "empty" } },
    ];
  }

  export type DeleteSearchByIdRequest = {
    /** ObjectId of the persisted search row to delete. */
    searchId: string;
    /**
     * Additional substring filter against `title` / `messages.content`. The row is only deleted if
     * the `searchId` row also matches this filter; otherwise `404`. Special regex characters are
     * escaped; values over 1000 chars or tripping the XSS guard yield `400`.
     */
    search?: string;
    /**
     * Additional `isShared` filter (`'true'` / `'false'`). The row is only deleted if it also
     * matches this value.
     */
    shared?: Shared4;
    /**
     * ISO 8601 lower bound for `createdAt`. The row is only deleted if its `createdAt` is on or
     * after this value.
     */
    startDate?: Date;
    /**
     * ISO 8601 upper bound for `createdAt`. The row is only deleted if its `createdAt` is on or
     * before this value.
     */
    endDate?: Date;
  };

  export class DeleteSearchByIdError extends ApiError {
    declare readonly payload:
      | Declared<"error400", undefined>
      | Declared<"error401", undefined>
      | Declared<"error403", undefined>
      | Declared<"error404", undefined>
      | Declared<"error500", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<DeleteSearchByIdError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 401, kind: "error401", decode: { kind: "empty" } },
      { on: 403, kind: "error403", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 500, kind: "error500", decode: { kind: "empty" } },
    ];
  }

  export type DeleteSearchHistoryRequest = {
    /**
     * Restrict the deletion to rows whose `title` or `messages.content` matches this
     * case-insensitive substring. Special regex characters are escaped before the lookup; values
     * over 1000 chars are rejected with `400`.
     */
    search?: string;
    /** Restrict the deletion to rows with this `isShared` value (`'true'` / `'false'`). */
    shared?: Shared4;
    /**
     * ISO 8601 lower bound for `createdAt`. Combined with `endDate` to scope which rows are
     * deleted.
     */
    startDate?: Date;
    /** ISO 8601 upper bound for `createdAt`. */
    endDate?: Date;
  };

  export class DeleteSearchHistoryError extends ApiError {
    declare readonly payload:
      | Declared<"error400", undefined>
      | Declared<"error401", undefined>
      | Declared<"error403", undefined>
      | Declared<"error404", undefined>
      | Declared<"error500", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<DeleteSearchHistoryError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 401, kind: "error401", decode: { kind: "empty" } },
      { on: 403, kind: "error403", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 500, kind: "error500", decode: { kind: "empty" } },
    ];
  }

  export type GetSearchByIdRequest = {
    /** Unique search identifier */
    searchId: string;
  };

  export class GetSearchByIdError extends ApiError {
    declare readonly payload:
      | Declared<"search400Error21", Search400Error21>
      | Declared<"search401Error21", Search401Error21>
      | Declared<"search403Error21", Search403Error21>
      | Declared<"search404Error1", Search404Error1>
      | Declared<"search500Error21", Search500Error21>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetSearchByIdError> = [
      { on: 400, kind: "search400Error21", decode: { kind: "json", schema: search400Error21Schema } },
      { on: 401, kind: "search401Error21", decode: { kind: "json", schema: search401Error21Schema } },
      { on: 403, kind: "search403Error21", decode: { kind: "json", schema: search403Error21Schema } },
      { on: 404, kind: "search404Error1", decode: { kind: "json", schema: search404Error1Schema } },
      { on: 500, kind: "search500Error21", decode: { kind: "json", schema: search500Error21Schema } },
    ];
  }

  export type SearchRequest = {
    /** Request payload */
    body: SemanticSearchRequest;
  };

  export class SearchError extends ApiError {
    declare readonly payload:
      | Declared<"errorResponse", ErrorResponse>
      | Declared<"error401", undefined>
      | Declared<"error403", undefined>
      | Declared<"error404", undefined>
      | Declared<"errorResponse2", ErrorResponse>
      | Declared<"error500", undefined>
      | Declared<"error502", undefined>
      | Declared<"error503", undefined>
      | Declared<"error504", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<SearchError> = [
      { on: 400, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 401, kind: "error401", decode: { kind: "empty" } },
      { on: 403, kind: "error403", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 422, kind: "errorResponse2", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 500, kind: "error500", decode: { kind: "empty" } },
      { on: 502, kind: "error502", decode: { kind: "empty" } },
      { on: 503, kind: "error503", decode: { kind: "empty" } },
      { on: 504, kind: "error504", decode: { kind: "empty" } },
    ];
  }

  export type SearchHistoryRequest = {
    /** Page number to return. Must be within `[1, 1000]`. @default 1 */
    page?: number;
    /** Number of items per page. Values are clamped to the range `[1, 100]`. @default 20 */
    limit?: number;
    /**
     * Field used to sort results. Any value other than `createdAt`, `lastActivityAt`, or `title` is
     * treated as `lastActivityAt`.
     *
     * @default SortBy4.LastActivityAt
     */
    sortBy?: SortBy4;
    /** Sort direction applied to `sortBy`. @default SortOrder.Desc */
    sortOrder?: SortOrder;
    /**
     * Case-insensitive substring to match against a search's title and message content. Regex
     * metacharacters are escaped automatically. Values longer than 1000 characters are rejected
     * with `400`.
     */
    search?: string;
    /**
     * Filter results by their shared status. Accepted values are `'true'` / `'1'` (return only
     * shared searches) and `'false'` / `'0'` (exclude shared searches). Matching is
     * case-insensitive and surrounding whitespace is trimmed.
     */
    shared?: Shared3;
    /** ISO 8601 timestamp used as the lower bound for a search's creation date. */
    startDate?: Date;
    /** ISO 8601 timestamp used as the upper bound for a search's creation date. */
    endDate?: Date;
  };

  export class SearchHistoryError extends ApiError {
    declare readonly payload:
      | Declared<"search400Error1", Search400Error1>
      | Declared<"search401Error1", Search401Error1>
      | Declared<"search403Error1", Search403Error1>
      | Declared<"search500Error1", Search500Error1>
      | Undeclared;

    static readonly errors: ErrorDecoders<SearchHistoryError> = [
      { on: 400, kind: "search400Error1", decode: { kind: "json", schema: search400Error1Schema } },
      { on: 401, kind: "search401Error1", decode: { kind: "json", schema: search401Error1Schema } },
      { on: 403, kind: "search403Error1", decode: { kind: "json", schema: search403Error1Schema } },
      { on: 500, kind: "search500Error1", decode: { kind: "json", schema: search500Error1Schema } },
    ];
  }

  export type UnarchiveSearchRequest = {
    /** Unique search identifier */
    searchId: string;
  };

  export class UnarchiveSearchError extends ApiError {
    declare readonly payload:
      | Declared<"error400", undefined>
      | Declared<"error401", undefined>
      | Declared<"error403", undefined>
      | Declared<"error404", undefined>
      | Declared<"error500", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<UnarchiveSearchError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 401, kind: "error401", decode: { kind: "empty" } },
      { on: 403, kind: "error403", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 500, kind: "error500", decode: { kind: "empty" } },
    ];
  }
}
