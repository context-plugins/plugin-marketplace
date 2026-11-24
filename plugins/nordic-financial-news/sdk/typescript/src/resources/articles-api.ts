import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import * as s from "../core/validation/index.js";
import {
  apiV1ArticlesResponseSchema,
  type ApiV1ArticlesResponse,
} from "../models/api-v1-articles-response.js";
import {
  apiV1ArticlesResponse1Schema,
  type ApiV1ArticlesResponse1,
} from "../models/api-v1-articles-response1.js";
import { modeSchema, type Mode } from "../models/mode.js";
import { problemDetailsSchema, type ProblemDetails } from "../models/problem-details.js";
import { sortSchema, type Sort } from "../models/sort.js";
import type { Servers } from "../servers.js";

export class ArticlesApi {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * List Articles
   *
   * @remarks
   * Returns a paginated list of live articles ordered by publication date (newest first). Each
   * article includes an English headline, a short summary, and key points, with `article_url`
   * linking to the full original-language article at the source.
   *
   * ## Filtering
   * Supports filtering by country, category, source, company ticker, and content type. Use `GET
   * /api/v1/sources` to discover source IDs for the `sources` filter. Use `ids` for batch lookup of
   * specific articles.
   *
   * ## Search
   * Use `q` for full-text search: relevance-ranked by default, newest-first with `sort=latest`, or
   * matched by meaning with `mode=semantic`.
   *
   * ## Polling for updates
   * Use `updated_after` for incremental syncing.
   *
   * ## Pagination
   * Responses include cursor-based pagination and support field projection to minimize payload
   * size.
   *
   * ## Caching
   * Requests with `updated_after` are not cached: they return `Cache-Control: no-cache, no-store`
   * and no `ETag`. The `ETag` reflects the response as served, not only record timestamps: it
   * changes when plan limits alter the visible set, so a changed `ETag` does not necessarily mean a
   * record was updated.
   *
   * @returns Articles retrieved successfully
   *
   * @throws {@link ArticlesApi.GetApiV1ArticlesError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link NordicFinancialNewsError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  getApiV1Articles(
    request: ArticlesApi.GetApiV1ArticlesRequest = {},
    options?: RequestOptions,
  ): ApiPromise<ApiV1ArticlesResponse1, ArticlesApi.GetApiV1ArticlesError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/v1/articles"),
        auth: this.#auth.bearerAuth,
        pathParams: [],
        query: [
          { name: "limit", value: request.limit, schema: s.optional(s.int()) },
          { name: "cursor", value: request.cursor, schema: s.optional(s.string()) },
          { name: "fields", value: request.fields, schema: s.optional(s.string()) },
          { name: "updated_after", value: request.updatedAfter, schema: s.optional(s.string()) },
          { name: "q", value: request.q, schema: s.optional(s.string()) },
          { name: "sort", value: request.sort, schema: s.optional(s.lazy(() => sortSchema)) },
          { name: "mode", value: request.mode, schema: s.optional(s.lazy(() => modeSchema)) },
          { name: "country", value: request.country, schema: s.optional(s.string()) },
          { name: "category", value: request.category, schema: s.optional(s.string()) },
          { name: "sources", value: request.sources, schema: s.optional(s.string()) },
          { name: "source_type", value: request.sourceType, schema: s.optional(s.string()) },
          { name: "ticker", value: request.ticker, schema: s.optional(s.string()) },
          { name: "company", value: request.company, schema: s.optional(s.string()) },
          { name: "exchange", value: request.exchange, schema: s.optional(s.string()) },
          { name: "market", value: request.market, schema: s.optional(s.string()) },
          { name: "domicile", value: request.domicile, schema: s.optional(s.string()) },
          { name: "index", value: request.index, schema: s.optional(s.string()) },
          { name: "sector", value: request.sector, schema: s.optional(s.string()) },
          { name: "content_type", value: request.contentType, schema: s.optional(s.string()) },
          { name: "published_after", value: request.publishedAfter, schema: s.optional(s.string()) },
          { name: "published_before", value: request.publishedBefore, schema: s.optional(s.string()) },
          { name: "listed", value: request.listed, schema: s.optional(s.string()) },
          { name: "watchlist", value: request.watchlist, schema: s.optional(s.string()) },
          { name: "primary_only", value: request.primaryOnly, schema: s.optional(s.boolean()) },
          { name: "include_peripheral", value: request.includePeripheral, schema: s.optional(s.boolean()) },
          { name: "ids", value: request.ids, schema: s.optional(s.string()) },
        ],
        headers: [
          { name: "If-None-Match", value: request.ifNoneMatch, schema: s.optional(s.string()) },
          { name: "If-Modified-Since", value: request.ifModifiedSince, schema: s.optional(s.string()) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: apiV1ArticlesResponse1Schema },
        errorFactory: ArticlesApi.GetApiV1ArticlesError,
      },
      options,
    );
  }

  /**
   * Get Article Details
   *
   * @remarks
   * Returns the details of a single article: an English headline, a short summary, key points, and
   * associated companies, along with `article_url` pointing to the full original-language article
   * at the source. Supports conditional requests via `If-None-Match` for efficient caching.
   *
   * @returns Article found
   *
   * @throws {@link ArticlesApi.GetApiV1ArticlesByIdError} when the API answers with an error status
   * — narrow on `err.payload.kind`
   *
   * @throws {@link NordicFinancialNewsError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  getApiV1ArticlesById(
    request: ArticlesApi.GetApiV1ArticlesByIdRequest,
    options?: RequestOptions,
  ): ApiPromise<ApiV1ArticlesResponse, ArticlesApi.GetApiV1ArticlesByIdError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/v1/articles/{id}"),
        auth: this.#auth.bearerAuth,
        pathParams: [{ name: "id", value: request.id, schema: s.string() }],
        query: [
          { name: "include_peripheral", value: request.includePeripheral, schema: s.optional(s.boolean()) },
        ],
        headers: [
          { name: "If-None-Match", value: request.ifNoneMatch, schema: s.optional(s.string()) },
          { name: "If-Modified-Since", value: request.ifModifiedSince, schema: s.optional(s.string()) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: apiV1ArticlesResponseSchema },
        errorFactory: ArticlesApi.GetApiV1ArticlesByIdError,
      },
      options,
    );
  }
}

export namespace ArticlesApi {
  export type GetApiV1ArticlesRequest = {
    /** Number of articles to return per page (default 25, max 100). */
    limit?: number;
    /**
     * Opaque pagination cursor returned as `pagination.next_cursor` from a previous response.
     * Mutually exclusive with `q` unless `sort=latest` is also given.
     */
    cursor?: string;
    /**
     * Comma-separated list of fields to include in the response. Reduces payload size. Available
     * fields: `id`, `title`, `article_url`, `published_at`, `updated_at`, `content_type`, `source`,
     * `company_ids`, `country`, `category`.
     */
    fields?: string;
    /**
     * ISO 8601 datetime. Returns only articles updated after this timestamp. Use this for
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
     * article's translated title and summary, so it answers thematic questions a keyword match
     * cannot ("defense contract wins", "battery cell capacity expansion").
     *
     * Requires `q`, is mutually exclusive with `sort`, `cursor`, `updated_after` and `ids`, and
     * returns a single ranked page capped by `limit`; every other filter (`country`, `category`,
     * `sources`, `source_type`, `ticker`, `company`, `market`, `domicile`, `exchange`, `index`,
     * `sector`, `watchlist`, `content_type`, `published_after`/`published_before`) remains a hard
     * filter applied before the match, not after.
     *
     * Each article gains a `distance` (raw cosine, lower is closer, rounded to 4dp). Compare it
     * only within one response, never across responses: the scale is model-dependent. Ranking also
     * blends in a small recency bonus that `distance` does not reflect. A server-side relevance
     * floor drops weak matches, so a page is frequently shorter than `limit` and can be empty.
     * Raising `limit` does not recover floored rows.
     *
     * On plans with restricted article access the response carries `plan_limited: true`; the plan
     * article count cap does not apply in this mode, only the source and age restrictions.
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
     * IDs. Also accepts array form (`sources[]=id1&sources[]=id2`). Disabled sources resolve to
     * empty results.
     */
    sources?: string;
    /**
     * Filter by source type, comma-separated. Valid values: `news_publication`, `wire_service`,
     * `press_release`, `government`, `trade_publication`, `blog`, `stock_exchange`, `research`.
     * Articles from disabled sources are excluded. An unrecognized value returns 400 naming the bad
     * value(s).
     */
    sourceType?: string;
    /**
     * Filter by company stock ticker symbol, comma-separated for several (e.g. `VOLV-B` or
     * `VOLV-B,ERIC-B`; matches any of them). Accepts full tickers with exchange suffix (e.g.
     * `VOLV-B.ST`). Returns articles where the company is a principal association (subject,
     * partner, investor, or competitor) — a company named only as the article's source, an advisor,
     * or a passing mention does not match. Former tickers resolve too: a company that renamed or
     * moved venues is still reachable by an old ticker; the returned company `former_tickers` lists
     * any such historical tickers. Matching is case-insensitive. Every value must resolve to a
     * company, or the request is rejected with `400` naming the unknown values. Combined with
     * `company`, the two filters intersect.
     */
    ticker?: string;
    /**
     * Filter by company `id` (as returned by the companies endpoints), comma-separated for several
     * (matches any of them). Complements `ticker`; use this to reach companies without a stock
     * listing. Matches only the company's principal associations (subject, partner, investor, or
     * competitor); a passing mention does not match. Every value must resolve, or the request is
     * rejected with `400` naming the unknown ids. Combined with `ticker`, the two filters
     * intersect.
     */
    company?: string;
    /**
     * Filter by exchange using ISO 10383 Market Identifier Code, comma-separated for multiple (e.g.
     * `XSTO` for Nasdaq Stockholm, `XCSE` for Nasdaq Copenhagen, `XHEL` for Nasdaq Helsinki, `XOSL`
     * for Oslo Børs). Returns articles about companies actively listed there. A company counts only
     * through a principal association (subject, partner, investor, or competitor); a passing
     * mention does not qualify. Case-insensitive.
     */
    exchange?: string;
    /**
     * Filter to articles about companies with an active equity listing in these countries'
     * exchanges (ISO 3166-1 alpha-2, comma-separated, e.g. `SE,NO`). `SE` covers Nasdaq Stockholm,
     * First North, Spotlight and NGM. Distinct from `country` (the source that reported it) and
     * `domicile` (legal domicile). Includes foreign-domiciled but locally-listed issuers. A company
     * counts only through a principal association (subject, partner, investor, or competitor); a
     * passing mention does not qualify.
     */
    market?: string;
    /**
     * Filter to articles about companies legally domiciled in these countries (ISO 3166-1 alpha-2,
     * comma-separated). Reaches unlisted companies; excludes foreign-domiciled but locally-listed
     * issuers. Use `market` for market-coverage questions. A company counts only through a
     * principal association (subject, partner, investor, or competitor); a passing mention does not
     * qualify.
     */
    domicile?: string;
    /**
     * Filter by stock index id or symbol (e.g. `OMXS30`, `OMXC25`, `OMXH25`, `OBX`). Returns
     * articles about companies in that index. A company counts only through a principal association
     * (subject, partner, investor, or competitor); a passing mention does not qualify.
     * Case-insensitive for symbols.
     */
    index?: string;
    /**
     * Filter by company sector. A company counts only through a principal association (subject,
     * partner, investor, or competitor); a passing mention does not qualify. Case-sensitive; must
     * exactly match one of: `Communication Services`, `Consumer Discretionary`, `Consumer Staples`,
     * `Energy`, `Financials`, `Health Care`, `Industrials`, `Information Technology`, `Materials`,
     * `Real Estate`, `Utilities`.
     */
    sector?: string;
    /**
     * Filter by article content type, comma-separated. Valid values: `news`, `analysis`,
     * `press_release`, `market_commentary`, `market_news`, `trading_halt`, `trading_event`,
     * `other`. `GET /api/v1/meta` lists them as `content_types`. An unrecognized value returns 400
     * naming the bad value(s).
     */
    contentType?: string;
    /** ISO 8601 datetime. Returns articles published on or after this timestamp. */
    publishedAfter?: string;
    /** ISO 8601 datetime. Returns articles published before this timestamp. */
    publishedBefore?: string;
    /**
     * When `true`, only return articles about at least one company with an active listing on any
     * exchange, through a principal association (subject, partner, investor, or competitor). A
     * passing mention does not qualify, and `include_peripheral` does not change this. A company
     * whose listings are all delisted does not count. Hidden and unverified companies do not count.
     */
    listed?: string;
    /**
     * Restricts to articles about companies in a single watchlist, identified by its `id` (from the
     * List Watchlists endpoint), through a principal association (subject, partner, investor, or
     * competitor) — a passing mention does not qualify. An unknown id returns no articles. Requires
     * `read:watchlist` scope.
     */
    watchlist?: string;
    /**
     * When `true`, narrows further within the already-principal match, to only articles where the
     * matched company (`ticker`, `company`, or `watchlist`) is the primary subject. Requires
     * `ticker`, `company`, or `watchlist`, and returns 400 without one.
     */
    primaryOnly?: boolean;
    /**
     * When `true`, widen the `ticker`, `company` and `watchlist` filters — and each article's
     * `company_ids` — back to peripheral associations (a company named only as the article's
     * source, an advisor, or a passing mention), which are otherwise excluded. Default `false`
     * (principal-only: subject, partner, investor, competitor). `primary_only` still wins where it
     * applies: the primary-subject restriction is kept even when peripheral is requested. Not
     * honored on `GET /api/v1/search`.
     */
    includePeripheral?: boolean;
    /**
     * Comma-separated list of article IDs for batch lookup (max 100). Cannot be combined with
     * `cursor`, `updated_after`, or `sort`. Returns a single page: `pagination` carries `count`
     * only, with no `next_cursor`. IDs that don't resolve, or that your plan can't access, are
     * omitted rather than rejected, so `count` can be less than the number of IDs sent. Key off
     * each row's `id`.
     */
    ids?: string;
    /** ETag value from a previous response. Returns `304 Not Modified` if data has not changed. */
    ifNoneMatch?: string;
    /**
     * HTTP date from a previous `Last-Modified` header. Returns `304 Not Modified` if nothing has
     * changed since.
     */
    ifModifiedSince?: string;
  };

  export class GetApiV1ArticlesError extends ApiError {
    declare readonly payload:
      | Declared<"error304", undefined>
      | Declared<"problemDetails", ProblemDetails>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetApiV1ArticlesError> = [
      { on: 304, kind: "error304", decode: { kind: "empty" } },
      { on: 401, kind: "problemDetails", decode: { kind: "json", schema: problemDetailsSchema } },
    ];
  }

  export type GetApiV1ArticlesByIdRequest = {
    /** Article ID (e.g. `art_abc123def`). */
    id: string;
    /**
     * When `true`, widen `companies` and `company_ids` back to peripheral associations (a company
     * named only as the article's source, an advisor, or a passing mention), which are otherwise
     * excluded. Default `false` (principal-only). Each `companies[]` entry always carries
     * `association_tier` regardless of this parameter.
     */
    includePeripheral?: boolean;
    /**
     * ETag value from a previous response. Returns `304 Not Modified` if the article has not
     * changed.
     */
    ifNoneMatch?: string;
    /**
     * HTTP date from a previous `Last-Modified` header. Returns `304 Not Modified` if nothing has
     * changed since.
     */
    ifModifiedSince?: string;
  };

  export class GetApiV1ArticlesByIdError extends ApiError {
    declare readonly payload:
      | Declared<"error304", undefined>
      | Declared<"problemDetails", ProblemDetails>
      | Declared<"problemDetails2", ProblemDetails>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetApiV1ArticlesByIdError> = [
      { on: 304, kind: "error304", decode: { kind: "empty" } },
      { on: 404, kind: "problemDetails", decode: { kind: "json", schema: problemDetailsSchema } },
      { on: 401, kind: "problemDetails2", decode: { kind: "json", schema: problemDetailsSchema } },
    ];
  }
}
