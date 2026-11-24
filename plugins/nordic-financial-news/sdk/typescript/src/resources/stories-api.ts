import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import * as s from "../core/validation/index.js";
import { apiV1StoriesResponseSchema, type ApiV1StoriesResponse } from "../models/api-v1-stories-response.js";
import {
  apiV1StoriesResponse1Schema,
  type ApiV1StoriesResponse1,
} from "../models/api-v1-stories-response1.js";
import { modeSchema, type Mode } from "../models/mode.js";
import { problemDetailsSchema, type ProblemDetails } from "../models/problem-details.js";
import { sortSchema, type Sort } from "../models/sort.js";
import type { Servers } from "../servers.js";

export class StoriesApi {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * List Stories
   *
   * @remarks
   * Returns a paginated list of published stories ordered by publication date (newest first). Each
   * story synthesizes coverage of a single developing event from multiple source articles into one
   * narrative.
   *
   * ## Filtering
   * Supports filtering by country, category, source, and company ticker. Use `GET /api/v1/sources`
   * to discover source IDs for the `sources` filter.
   *
   * ## Search
   * Use `q` for full-text search: relevance-ranked by default, newest-first with `sort=latest`, or
   * matched by meaning with `mode=semantic`.
   *
   * ## Polling for updates
   * Use `updated_after` for incremental syncing.
   *
   * ## Caching
   * Requests with `updated_after` are not cached: they return `Cache-Control: no-cache, no-store`
   * and no `ETag`. The `ETag` reflects the response as served, not only record timestamps: it
   * changes when plan limits alter the visible set, and when a story's visible article set changes,
   * so a changed `ETag` does not necessarily mean a record was updated.
   *
   * @returns Stories retrieved
   *
   * @throws {@link StoriesApi.GetApiV1StoriesError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link NordicFinancialNewsError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  getApiV1Stories(
    request: StoriesApi.GetApiV1StoriesRequest = {},
    options?: RequestOptions,
  ): ApiPromise<ApiV1StoriesResponse, StoriesApi.GetApiV1StoriesError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/v1/stories"),
        auth: this.#auth.bearerAuth,
        pathParams: [],
        query: [
          { name: "limit", value: request.limit, schema: s.optional(s.int()) },
          { name: "cursor", value: request.cursor, schema: s.optional(s.string()) },
          { name: "updated_after", value: request.updatedAfter, schema: s.optional(s.string()) },
          { name: "q", value: request.q, schema: s.optional(s.string()) },
          { name: "sort", value: request.sort, schema: s.optional(s.lazy(() => sortSchema)) },
          { name: "mode", value: request.mode, schema: s.optional(s.lazy(() => modeSchema)) },
          { name: "country", value: request.country, schema: s.optional(s.string()) },
          { name: "category", value: request.category, schema: s.optional(s.string()) },
          { name: "sources", value: request.sources, schema: s.optional(s.string()) },
          { name: "ticker", value: request.ticker, schema: s.optional(s.string()) },
          { name: "company", value: request.company, schema: s.optional(s.string()) },
          { name: "exchange", value: request.exchange, schema: s.optional(s.string()) },
          { name: "market", value: request.market, schema: s.optional(s.string()) },
          { name: "domicile", value: request.domicile, schema: s.optional(s.string()) },
          { name: "index", value: request.index, schema: s.optional(s.string()) },
          { name: "sector", value: request.sector, schema: s.optional(s.string()) },
          { name: "listed", value: request.listed, schema: s.optional(s.string()) },
          { name: "watchlist", value: request.watchlist, schema: s.optional(s.string()) },
          { name: "published_after", value: request.publishedAfter, schema: s.optional(s.string()) },
          { name: "published_before", value: request.publishedBefore, schema: s.optional(s.string()) },
          { name: "fields", value: request.fields, schema: s.optional(s.string()) },
        ],
        headers: [
          { name: "If-None-Match", value: request.ifNoneMatch, schema: s.optional(s.string()) },
          { name: "If-Modified-Since", value: request.ifModifiedSince, schema: s.optional(s.string()) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: apiV1StoriesResponseSchema },
        errorFactory: StoriesApi.GetApiV1StoriesError,
      },
      options,
    );
  }

  /**
   * Get Story Details
   *
   * @remarks
   * Returns the full details of a single story, including content in Markdown format, associated
   * articles, and companies. Supports conditional requests via `If-None-Match` for efficient
   * caching.
   *
   * @returns Story found
   *
   * @throws {@link StoriesApi.GetApiV1StoriesByIdError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link NordicFinancialNewsError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  getApiV1StoriesById(
    request: StoriesApi.GetApiV1StoriesByIdRequest,
    options?: RequestOptions,
  ): ApiPromise<ApiV1StoriesResponse1, StoriesApi.GetApiV1StoriesByIdError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/v1/stories/{id}"),
        auth: this.#auth.bearerAuth,
        pathParams: [{ name: "id", value: request.id, schema: s.string() }],
        query: [],
        headers: [{ name: "If-None-Match", value: request.ifNoneMatch, schema: s.optional(s.string()) }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: apiV1StoriesResponse1Schema },
        errorFactory: StoriesApi.GetApiV1StoriesByIdError,
      },
      options,
    );
  }
}

export namespace StoriesApi {
  export type GetApiV1StoriesRequest = {
    /** Number of stories to return per page (default 25, max 100). */
    limit?: number;
    /**
     * Opaque pagination cursor returned as `pagination.next_cursor` from a previous response.
     * Mutually exclusive with `q` unless `sort=latest` is also given.
     */
    cursor?: string;
    /**
     * ISO 8601 datetime. Returns only stories updated after this timestamp. Use this for
     * incremental sync: store the timestamp of your last completed sync, then request only newer
     * results on each poll. Results are ordered by `updated_at` ascending and are cursor-paginated.
     * Follow `pagination.next_cursor`, resending the same `updated_after` value, until it is null.
     * Only advance your stored timestamp once you have drained every page (see the Real-Time
     * Updates guide at https://docs.nordicfinancialnews.com). Mutually exclusive with `sort=latest`
     * (with or without `q`). An `updated_after` walk is always ordered by `updated_at`.
     */
    updatedAfter?: string;
    /**
     * Full-text search query (2-200 characters). By default, results are ranked by relevance
     * instead of publication date, as a single page with no cursor. Mutually exclusive with
     * `cursor` unless `sort=latest` is also given. Disables caching.
     */
    q?: string;
    /**
     * Result order for `q`. `relevance` (default) is a single relevance-ranked page with no cursor;
     * it requires `q`, and returns 400 without one. `latest` turns `q` into a match filter under
     * the endpoint's normal newest-first order (`published_at` descending) and the response is
     * cursor-paginated like any other request; without `q` it is an accepted no-op (that's already
     * the default order). Mutually exclusive with `updated_after`.
     */
    sort?: Sort;
    /**
     * Set to `semantic` to match `q` by meaning rather than by keyword. The match runs over each
     * story's title, summary and key entities. The narrative body is not part of the match, so it
     * answers thematic questions a keyword match cannot ("defense contract wins", "battery cell
     * capacity expansion").
     *
     * Requires `q`, is mutually exclusive with `sort`, `cursor` and `updated_after`, and returns a
     * single ranked page capped by `limit`; every other filter (`country`, `category`, `sources`,
     * `ticker`, `company`, `market`, `domicile`, `exchange`, `index`, `sector`, `watchlist`,
     * `published_after`/`published_before`) remains a hard filter applied before the match, not
     * after.
     *
     * Each story gains a `distance` (raw cosine, lower is closer, rounded to 4dp). Compare it only
     * within one response, never across responses: the scale is model-dependent. Ranking also
     * blends in a small recency bonus that `distance` does not reflect. A server-side relevance
     * floor drops weak matches, so a page is frequently shorter than `limit` and can be empty.
     * Raising `limit` does not recover floored rows.
     *
     * On restricted plans, the story age window narrows the candidate set and the story count cap
     * applies as a clamp on this page, so a capped plan receives its closest matches rather than
     * its newest stories; either restriction sets `plan_limited: true`.
     *
     * The response `pagination` object carries `count` only. There is no `next_cursor`, since a
     * distance ranking cannot be cursor-paginated, and the response is uncacheable (`Cache-Control:
     * no-cache, no-store`, no `ETag`). If the query cannot be embedded the request returns `503`
     * rather than silently falling back to keyword matching.
     */
    mode?: Mode;
    /**
     * Filter by country using ISO 3166-1 alpha-2 code (e.g. `SE`, `NO`, `DK`). Comma-separated for
     * multiple (e.g. `SE,NO`). Case-insensitive.
     */
    country?: string;
    /**
     * Filter by category `id` (from `GET /api/v1/categories`). Comma-separated for multiple (e.g.
     * `cat_earnings1,cat_mna000001`); unknown ids are ignored.
     */
    category?: string;
    /**
     * Comma-separated list of source IDs (max 25). Use `GET /api/v1/sources` to discover source
     * IDs. Also accepts array form (`sources[]=id1&sources[]=id2`). Returns stories with at least
     * one article from a listed source.
     */
    sources?: string;
    /**
     * Filter by company stock ticker symbol, comma-separated for several (e.g. `VOLV-B` or
     * `VOLV-B,ERIC-B`; matches any of them). Accepts full tickers with exchange suffix (e.g.
     * `VOLV-B.ST`). Returns stories mentioning the company. Former tickers resolve too: a company
     * that renamed or moved venues is still reachable by an old ticker; the returned company
     * `former_tickers` lists any such historical tickers. Matching is case-insensitive. Every value
     * must resolve to a company, or the request is rejected with `400` naming the unknown values.
     * Combined with `company`, the two filters intersect.
     */
    ticker?: string;
    /**
     * Filter by company `id` (as returned by the companies endpoints), comma-separated for several
     * (matches any of them). Complements `ticker`; use this to reach companies without a stock
     * listing. Every value must resolve, or the request is rejected with `400` naming the unknown
     * ids. Combined with `ticker`, the two filters intersect.
     */
    company?: string;
    /**
     * Filter by exchange using ISO 10383 Market Identifier Code, comma-separated for multiple (e.g.
     * `XSTO` for Nasdaq Stockholm, `XCSE` for Nasdaq Copenhagen, `XHEL` for Nasdaq Helsinki, `XOSL`
     * for Oslo Børs). Returns stories about companies actively listed there. Case-insensitive.
     */
    exchange?: string;
    /**
     * Filter to stories about companies with an active equity listing in these countries' exchanges
     * (ISO 3166-1 alpha-2, comma-separated, e.g. `SE,NO`). `SE` covers Nasdaq Stockholm, First
     * North, Spotlight and NGM. Distinct from `country` (the source that reported it) and
     * `domicile` (legal domicile). Includes foreign-domiciled but locally-listed issuers.
     */
    market?: string;
    /**
     * Filter to stories about companies legally domiciled in these countries (ISO 3166-1 alpha-2,
     * comma-separated). Reaches unlisted companies; excludes foreign-domiciled but locally-listed
     * issuers. Use `market` for market-coverage questions.
     */
    domicile?: string;
    /**
     * Filter by stock index id or symbol (e.g. `OMXS30`, `OMXC25`, `OMXH25`, `OBX`). Returns
     * stories about companies in that index. Case-insensitive for symbols.
     */
    index?: string;
    /**
     * Filter by company sector. Case-sensitive; must exactly match one of: `Communication
     * Services`, `Consumer Discretionary`, `Consumer Staples`, `Energy`, `Financials`, `Health
     * Care`, `Industrials`, `Information Technology`, `Materials`, `Real Estate`, `Utilities`.
     */
    sector?: string;
    /**
     * When `true`, only return stories linked to at least one company with an active listing on any
     * exchange. A company whose listings are all delisted does not count. Hidden and unverified
     * companies do not count.
     */
    listed?: string;
    /**
     * Restricts to stories mentioning companies in a single watchlist, identified by its `id` (from
     * the List Watchlists endpoint). An unknown id returns no stories. Requires `read:watchlist`
     * scope.
     */
    watchlist?: string;
    /** ISO 8601 datetime. Returns stories published on or after this timestamp. */
    publishedAfter?: string;
    /** ISO 8601 datetime. Returns stories published before this timestamp. */
    publishedBefore?: string;
    /**
     * Comma-separated list of fields to include in the response. Available fields: `id`, `title`,
     * `summary`, `published_at`, `updated_at`, `article_count`, `article_ids`, `country`,
     * `category`, `company_ids`.
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

  export class GetApiV1StoriesError extends ApiError {
    declare readonly payload:
      | Declared<"error304", undefined>
      | Declared<"problemDetails", ProblemDetails>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetApiV1StoriesError> = [
      { on: 304, kind: "error304", decode: { kind: "empty" } },
      { on: 401, kind: "problemDetails", decode: { kind: "json", schema: problemDetailsSchema } },
    ];
  }

  export type GetApiV1StoriesByIdRequest = {
    /** Story ID (e.g. `sty_abc123def`). */
    id: string;
    /**
     * ETag value from a previous response. Returns `304 Not Modified` if the story has not changed.
     */
    ifNoneMatch?: string;
  };

  export class GetApiV1StoriesByIdError extends ApiError {
    declare readonly payload:
      | Declared<"error304", undefined>
      | Declared<"problemDetails", ProblemDetails>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetApiV1StoriesByIdError> = [
      { on: 304, kind: "error304", decode: { kind: "empty" } },
      { on: 404, kind: "problemDetails", decode: { kind: "json", schema: problemDetailsSchema } },
    ];
  }
}
