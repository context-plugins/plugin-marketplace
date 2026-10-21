import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import {
  platformSearchFiltersResponseSchema,
  type PlatformSearchFiltersResponse,
} from "../models/platform-search-filters-response.js";
import {
  platformSearchRequestSchema,
  type PlatformSearchRequest,
} from "../models/platform-search-request.js";
import {
  platformSearchResponseSchema,
  type PlatformSearchResponse,
} from "../models/platform-search-response.js";
import type { Servers } from "../servers.js";

export class Search {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Search
   *
   * @remarks
   * Search your organization's connected content and return ranked document results with cursor
   * pagination. Use `GET /api/search/filters` to discover datasource identifiers and common filter
   * fields. Built-in filter names are validated; other field names are accepted as custom filters
   * and behavior depends on your Glean configuration and connected sources. Errors: HTTP 422
   * `unprocessable_query` returns no `results` or `next_cursor`. See `warnings` on the response for
   * non-blocking issues such as partially available results. Not every query issue produces a
   * warning or error.
   *
   * @returns Successful response.
   *
   * @throws {@link Search.PlatformSearchError} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link GleanPlatformApiError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  platformSearch(
    request: Search.PlatformSearchRequestParams,
    options?: RequestOptions,
  ): ApiPromise<PlatformSearchResponse, Search.PlatformSearchError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/api/search"),
        auth: this.#auth.apiToken,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: platformSearchRequestSchema },
      },
      {
        success: { kind: "json", schema: platformSearchResponseSchema },
        errorFactory: Search.PlatformSearchError,
      },
      options,
    );
  }

  /**
   * List search filters
   *
   * @remarks
   * List datasources and common built-in filter fields visible to the authenticated user. This is a
   * best-effort catalog, not an exhaustive list of every filter search accepts. Without `query`,
   * returns field metadata only and does not run a search. With a nonblank `query`, provide exactly
   * one `datasources` value to request suggested filter values for that query; no documents are
   * returned and this endpoint does not include warning objects. See `FilterFieldInfo.values` for
   * limitations on suggested values. Rate-limited requests return HTTP 429 with `Retry-After`;
   * temporary backend unavailability returns HTTP 503.
   *
   * @returns Successful response.
   *
   * @throws {@link Search.PlatformSearchFiltersError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link GleanPlatformApiError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  platformSearchFilters(
    request: Search.PlatformSearchFiltersRequest,
    options?: RequestOptions,
  ): ApiPromise<PlatformSearchFiltersResponse, Search.PlatformSearchFiltersError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/search/filters"),
        auth: this.#auth.apiToken,
        pathParams: [],
        query: [
          { name: "datasources", value: request.datasources, schema: s.optional(s.array(s.string())) },
          { name: "query", value: request.query, schema: s.optional(s.string()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: platformSearchFiltersResponseSchema },
        errorFactory: Search.PlatformSearchFiltersError,
      },
      options,
    );
  }
}

export namespace Search {
  export type PlatformSearchRequestParams = {
    body: PlatformSearchRequest;
  };

  export class PlatformSearchError extends ApiError {
    declare readonly payload:
      | Declared<"error400", undefined>
      | Declared<"error401", undefined>
      | Declared<"error403", undefined>
      | Declared<"error404", undefined>
      | Declared<"error408", undefined>
      | Declared<"error413", undefined>
      | Declared<"error422", undefined>
      | Declared<"error429", undefined>
      | Declared<"error500", undefined>
      | Declared<"error503", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<PlatformSearchError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 401, kind: "error401", decode: { kind: "empty" } },
      { on: 403, kind: "error403", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 408, kind: "error408", decode: { kind: "empty" } },
      { on: 413, kind: "error413", decode: { kind: "empty" } },
      { on: 422, kind: "error422", decode: { kind: "empty" } },
      { on: 429, kind: "error429", decode: { kind: "empty" } },
      { on: 500, kind: "error500", decode: { kind: "empty" } },
      { on: 503, kind: "error503", decode: { kind: "empty" } },
    ];
  }

  export type PlatformSearchFiltersRequest = {
    /**
     * Restrict metadata to one or more datasource identifiers as returned by this endpoint (for
     * example, `jira`). With a nonblank `query`, exactly one datasource is required. Unknown or
     * inaccessible identifiers return `invalid_datasource`.
     */
    datasources?: string[];
    /**
     * Optional search query that requests suggested filter values for the selected datasource. Must
     * be nonblank when present. Triggers a search for facet values only; does not return documents.
     */
    query?: string;
  };

  export class PlatformSearchFiltersError extends ApiError {
    declare readonly payload:
      | Declared<"error400", undefined>
      | Declared<"error401", undefined>
      | Declared<"error403", undefined>
      | Declared<"error404", undefined>
      | Declared<"error408", undefined>
      | Declared<"error429", undefined>
      | Declared<"error500", undefined>
      | Declared<"error503", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<PlatformSearchFiltersError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 401, kind: "error401", decode: { kind: "empty" } },
      { on: 403, kind: "error403", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 408, kind: "error408", decode: { kind: "empty" } },
      { on: 429, kind: "error429", decode: { kind: "empty" } },
      { on: 500, kind: "error500", decode: { kind: "empty" } },
      { on: 503, kind: "error503", decode: { kind: "empty" } },
    ];
  }
}
