import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import * as s from "../core/validation/index.js";
import {
  apiV1CompaniesArticlesResponseSchema,
  type ApiV1CompaniesArticlesResponse,
} from "../models/api-v1-companies-articles-response.js";
import {
  apiV1CompaniesCalendarEventsResponseSchema,
  type ApiV1CompaniesCalendarEventsResponse,
} from "../models/api-v1-companies-calendar-events-response.js";
import {
  apiV1CompaniesEventsResponseSchema,
  type ApiV1CompaniesEventsResponse,
} from "../models/api-v1-companies-events-response.js";
import {
  apiV1CompaniesResponseSchema,
  type ApiV1CompaniesResponse,
} from "../models/api-v1-companies-response.js";
import {
  apiV1CompaniesResponse1Schema,
  type ApiV1CompaniesResponse1,
} from "../models/api-v1-companies-response1.js";
import {
  apiV1CompaniesStoriesResponseSchema,
  type ApiV1CompaniesStoriesResponse,
} from "../models/api-v1-companies-stories-response.js";
import { eventType1Schema, type EventType1 } from "../models/event-type1.js";
import { modeSchema, type Mode } from "../models/mode.js";
import { problemDetailsSchema, type ProblemDetails } from "../models/problem-details.js";
import { sortSchema, type Sort } from "../models/sort.js";
import { status1Schema, type Status1 } from "../models/status1.js";
import type { Servers } from "../servers.js";

export class CompaniesApi {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * List Companies
   *
   * @remarks
   * Returns a paginated list of companies covered in Nordic financial news, ordered alphabetically
   * by name. Use `q` for full-text search across company names, ranked by relevance, or add
   * `mode=semantic` to match `q` by meaning instead.
   *
   * @returns Companies retrieved successfully
   *
   * @throws {@link CompaniesApi.GetApiV1CompaniesError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link NordicFinancialNewsError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  getApiV1Companies(
    request: CompaniesApi.GetApiV1CompaniesRequest = {},
    options?: RequestOptions,
  ): ApiPromise<ApiV1CompaniesResponse, CompaniesApi.GetApiV1CompaniesError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/v1/companies"),
        auth: this.#auth.bearerAuth,
        pathParams: [],
        query: [
          { name: "limit", value: request.limit, schema: s.optional(s.int()) },
          { name: "cursor", value: request.cursor, schema: s.optional(s.string()) },
          { name: "fields", value: request.fields, schema: s.optional(s.string()) },
          { name: "q", value: request.q, schema: s.optional(s.string()) },
          { name: "mode", value: request.mode, schema: s.optional(s.lazy(() => modeSchema)) },
          { name: "company", value: request.company, schema: s.optional(s.string()) },
          { name: "ticker", value: request.ticker, schema: s.optional(s.string()) },
          { name: "country", value: request.country, schema: s.optional(s.string()) },
          { name: "market", value: request.market, schema: s.optional(s.string()) },
          { name: "domicile", value: request.domicile, schema: s.optional(s.string()) },
          { name: "exchange", value: request.exchange, schema: s.optional(s.string()) },
          { name: "sector", value: request.sector, schema: s.optional(s.string()) },
          { name: "listed", value: request.listed, schema: s.optional(s.string()) },
          { name: "watchlist", value: request.watchlist, schema: s.optional(s.string()) },
          { name: "is_active", value: request.isActive, schema: s.optional(s.string()) },
        ],
        headers: [
          { name: "If-None-Match", value: request.ifNoneMatch, schema: s.optional(s.string()) },
          { name: "If-Modified-Since", value: request.ifModifiedSince, schema: s.optional(s.string()) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: apiV1CompaniesResponseSchema },
        errorFactory: CompaniesApi.GetApiV1CompaniesError,
      },
      options,
    );
  }

  /**
   * Get Company Details
   *
   * @remarks
   * Returns detailed information about a single company, including description, sector,
   * relationships, and stock listings. Look up by company ID (e.g. `comp_apple123`) or ticker
   * symbol (e.g. `AAPL`, `VOLV-B`). Lookup also accepts the full ticker including exchange suffix
   * (e.g. `VOLV-B.ST`).
   *
   * @returns Company retrieved successfully
   *
   * @throws {@link CompaniesApi.GetApiV1CompaniesByIdentifierError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link NordicFinancialNewsError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  getApiV1CompaniesByIdentifier(
    request: CompaniesApi.GetApiV1CompaniesByIdentifierRequest,
    options?: RequestOptions,
  ): ApiPromise<ApiV1CompaniesResponse1, CompaniesApi.GetApiV1CompaniesByIdentifierError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/v1/companies/{identifier}"),
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
        success: { kind: "json", schema: apiV1CompaniesResponse1Schema },
        errorFactory: CompaniesApi.GetApiV1CompaniesByIdentifierError,
      },
      options,
    );
  }

  /**
   * List Company Articles
   *
   * @remarks
   * Returns articles where the company is a principal association (subject, partner, investor, or
   * competitor), ordered by publication date (newest first). An article where this company is only
   * the source, an advisor, or a passing mention is excluded.
   *
   * ## Parameters
   * Accepts the same `q`, `sort`, `fields`, `updated_after`, `country`, `category`, `sources`,
   * `source_type`, `content_type`, `published_after` and `published_before` parameters as `GET
   * /api/v1/articles`, with identical semantics, scoped to this company. `primary_only=true`
   * narrows further within that principal set, to only articles where this company is the primary
   * subject.
   *
   * ## Rejected parameters
   * `ticker`, `company`, `watchlist`, `listed`, `exchange`, `market`, `domicile`, `index` and
   * `sector` are rejected (400). The path already fixes the company; use `GET /api/v1/articles` to
   * filter the full collection by them (`watchlist=false` and `listed` with any value other than
   * `true` are ignored, as on the flat resource).
   *
   * ## Caching
   * Requests with `updated_after` are not cached: they return `Cache-Control: no-cache, no-store`
   * and no `ETag`. The `ETag` reflects the response as served, not only record timestamps: it
   * changes when plan limits alter the visible set, so a changed `ETag` does not necessarily mean a
   * record was updated.
   *
   * @returns Company articles retrieved successfully
   *
   * @throws {@link CompaniesApi.GetApiV1CompaniesByIdentifierArticlesError} when the API answers
   * with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link NordicFinancialNewsError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  getApiV1CompaniesByIdentifierArticles(
    request: CompaniesApi.GetApiV1CompaniesByIdentifierArticlesRequest,
    options?: RequestOptions,
  ): ApiPromise<ApiV1CompaniesArticlesResponse, CompaniesApi.GetApiV1CompaniesByIdentifierArticlesError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/v1/companies/{identifier}/articles"),
        auth: this.#auth.bearerAuth,
        pathParams: [{ name: "identifier", value: request.identifier, schema: s.string() }],
        query: [
          { name: "limit", value: request.limit, schema: s.optional(s.int()) },
          { name: "cursor", value: request.cursor, schema: s.optional(s.string()) },
          { name: "fields", value: request.fields, schema: s.optional(s.string()) },
          { name: "updated_after", value: request.updatedAfter, schema: s.optional(s.string()) },
          { name: "q", value: request.q, schema: s.optional(s.string()) },
          { name: "sort", value: request.sort, schema: s.optional(s.lazy(() => sortSchema)) },
          { name: "country", value: request.country, schema: s.optional(s.string()) },
          { name: "category", value: request.category, schema: s.optional(s.string()) },
          { name: "sources", value: request.sources, schema: s.optional(s.string()) },
          { name: "source_type", value: request.sourceType, schema: s.optional(s.string()) },
          { name: "content_type", value: request.contentType, schema: s.optional(s.string()) },
          { name: "published_after", value: request.publishedAfter, schema: s.optional(s.string()) },
          { name: "published_before", value: request.publishedBefore, schema: s.optional(s.string()) },
          { name: "primary_only", value: request.primaryOnly, schema: s.optional(s.boolean()) },
          { name: "include_peripheral", value: request.includePeripheral, schema: s.optional(s.boolean()) },
        ],
        headers: [
          { name: "If-None-Match", value: request.ifNoneMatch, schema: s.optional(s.string()) },
          { name: "If-Modified-Since", value: request.ifModifiedSince, schema: s.optional(s.string()) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: apiV1CompaniesArticlesResponseSchema },
        errorFactory: CompaniesApi.GetApiV1CompaniesByIdentifierArticlesError,
      },
      options,
    );
  }

  /**
   * List Company Calendar Events
   *
   * @remarks
   * Returns upcoming scheduled calendar events for a single company (earnings reports, AGMs/EGMs,
   * dividends, and more), ordered by `scheduled_at` ascending. This is the same contract as `GET
   * /api/v1/calendar_events`, scoped to a single company by the path.
   *
   * ## Default window
   * By default only upcoming events are returned; `scheduled_after`/`scheduled_before` or
   * `updated_after` lift that floor, the same way they do on the flat resource.
   *
   * ## Plan availability
   * Not available on plans with a capped calendar. Use `GET /api/v1/calendar_events` for the
   * upcoming-events preview instead.
   *
   * ## Caching
   * Requests with `updated_after` are not cached: they return `Cache-Control: no-cache, no-store`
   * and no `ETag`.
   *
   * @returns Company calendar events retrieved successfully
   *
   * @throws {@link CompaniesApi.GetApiV1CompaniesByIdentifierCalendarEventsError} when the API
   * answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link NordicFinancialNewsError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  getApiV1CompaniesByIdentifierCalendarEvents(
    request: CompaniesApi.GetApiV1CompaniesByIdentifierCalendarEventsRequest,
    options?: RequestOptions,
  ): ApiPromise<
    ApiV1CompaniesCalendarEventsResponse,
    CompaniesApi.GetApiV1CompaniesByIdentifierCalendarEventsError
  > {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/v1/companies/{identifier}/calendar_events"),
        auth: this.#auth.bearerAuth,
        pathParams: [{ name: "identifier", value: request.identifier, schema: s.string() }],
        query: [
          { name: "limit", value: request.limit, schema: s.optional(s.int()) },
          { name: "cursor", value: request.cursor, schema: s.optional(s.string()) },
          { name: "fields", value: request.fields, schema: s.optional(s.string()) },
          { name: "updated_after", value: request.updatedAfter, schema: s.optional(s.string()) },
          { name: "status", value: request.status, schema: s.optional(s.lazy(() => status1Schema)) },
          {
            name: "event_type",
            value: request.eventType,
            schema: s.optional(s.lazy(() => eventType1Schema)),
          },
          { name: "scheduled_after", value: request.scheduledAfter, schema: s.optional(s.string()) },
          { name: "scheduled_before", value: request.scheduledBefore, schema: s.optional(s.string()) },
        ],
        headers: [
          { name: "If-None-Match", value: request.ifNoneMatch, schema: s.optional(s.string()) },
          { name: "If-Modified-Since", value: request.ifModifiedSince, schema: s.optional(s.string()) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: apiV1CompaniesCalendarEventsResponseSchema },
        errorFactory: CompaniesApi.GetApiV1CompaniesByIdentifierCalendarEventsError,
      },
      options,
    );
  }

  /**
   * List Company Events
   *
   * @remarks
   * Returns Events this company participates in, newest first. This is the same contract as `GET
   * /api/v1/events`, scoped to a single company by the path. Plan gating, ordering, `updated_after`
   * sync (including merge/removal tombstones for this company), and cursor semantics all match the
   * flat resource; see its documentation for the full detail.
   *
   * A tombstone respects the same event-grain filters as the flat resource, including
   * `last_article_after`/`before`. A merged event's `last_article_at` freezes at merge time, so
   * those filter a tombstone against that frozen value rather than against when the merge happened.
   * `window` cannot be used for sync polling (mutually exclusive with `updated_after`).
   *
   * Parameters that name or describe a different company or listing are rejected here with `400
   * invalid-parameter`: `company`, `ticker`, `watchlist`, `listed`, `exchange`, `market`,
   * `domicile`, `index` and `sector`. The path already fixes the company; use `GET /api/v1/events`
   * to filter the full collection by any of them. `watchlist=false` and `listed` with any value
   * other than `true` remain inert. `mode` is rejected with `400 invalid-parameter`; use `GET
   * /api/v1/events?company={company_id}&q={query}&mode=semantic` to search one company's events by
   * meaning.
   *
   * Responses carry an `ETag` and `Cache-Control: private, max-age=0, must-revalidate`; send the
   * ETag back as `If-None-Match` to receive a `304 Not Modified`. There is no `Last-Modified`, so
   * `If-Modified-Since` alone never revalidates. This is the same contract, and the same reason, as
   * `GET /api/v1/events`. Requests carrying `q` or `updated_after` are not cached and return
   * `Cache-Control: no-cache, no-store`.
   *
   * @returns Company events retrieved successfully
   *
   * @throws {@link CompaniesApi.GetApiV1CompaniesByIdentifierEventsError} when the API answers with
   * an error status — narrow on `err.payload.kind`
   *
   * @throws {@link NordicFinancialNewsError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  getApiV1CompaniesByIdentifierEvents(
    request: CompaniesApi.GetApiV1CompaniesByIdentifierEventsRequest,
    options?: RequestOptions,
  ): ApiPromise<ApiV1CompaniesEventsResponse, CompaniesApi.GetApiV1CompaniesByIdentifierEventsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/v1/companies/{identifier}/events"),
        auth: this.#auth.bearerAuth,
        pathParams: [{ name: "identifier", value: request.identifier, schema: s.string() }],
        query: [
          { name: "limit", value: request.limit, schema: s.optional(s.int()) },
          { name: "cursor", value: request.cursor, schema: s.optional(s.string()) },
          { name: "fields", value: request.fields, schema: s.optional(s.string()) },
          { name: "updated_after", value: request.updatedAfter, schema: s.optional(s.string()) },
          { name: "q", value: request.q, schema: s.optional(s.string()) },
          { name: "event_type", value: request.eventType, schema: s.optional(s.string()) },
          { name: "significance", value: request.significance, schema: s.optional(s.string()) },
          { name: "sort", value: request.sort, schema: s.optional(s.string()) },
          { name: "country", value: request.country, schema: s.optional(s.string()) },
          { name: "category", value: request.category, schema: s.optional(s.string()) },
          { name: "sources", value: request.sources, schema: s.optional(s.string()) },
          { name: "first_reported_after", value: request.firstReportedAfter, schema: s.optional(s.string()) },
          {
            name: "first_reported_before",
            value: request.firstReportedBefore,
            schema: s.optional(s.string()),
          },
          { name: "last_article_after", value: request.lastArticleAfter, schema: s.optional(s.string()) },
          { name: "last_article_before", value: request.lastArticleBefore, schema: s.optional(s.string()) },
          { name: "window", value: request.window, schema: s.optional(s.string()) },
          { name: "source_type", value: request.sourceType, schema: s.optional(s.string()) },
          { name: "content_type", value: request.contentType, schema: s.optional(s.string()) },
          { name: "related_to", value: request.relatedTo, schema: s.optional(s.string()) },
          { name: "include_peripheral", value: request.includePeripheral, schema: s.optional(s.boolean()) },
        ],
        headers: [{ name: "If-None-Match", value: request.ifNoneMatch, schema: s.optional(s.string()) }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: apiV1CompaniesEventsResponseSchema },
        errorFactory: CompaniesApi.GetApiV1CompaniesByIdentifierEventsError,
      },
      options,
    );
  }

  /**
   * List Company Stories
   *
   * @remarks
   * Returns stories that mention a specific company, ordered by publication date (newest first).
   *
   * ## Parameters
   * Accepts the same `q`, `sort`, `fields`, `updated_after`, `country`, `category`, `sources`,
   * `published_after` and `published_before` parameters as `GET /api/v1/stories`, with identical
   * semantics, scoped to this company.
   *
   * ## Rejected parameters
   * `ticker`, `company`, `watchlist`, `listed`, `exchange`, `market`, `domicile`, `index` and
   * `sector` are rejected (400). The path already fixes the company; use `GET /api/v1/stories` to
   * filter the full collection by them (`watchlist=false` and `listed` with any value other than
   * `true` are ignored, as on the flat resource).
   *
   * ## Caching
   * Requests with `updated_after` are not cached: they return `Cache-Control: no-cache, no-store`
   * and no `ETag`. The `ETag` reflects the response as served, not only record timestamps: it
   * changes when plan limits alter the visible set, and when a story's visible article set changes,
   * so a changed `ETag` does not necessarily mean a record was updated.
   *
   * @returns Company stories retrieved successfully
   *
   * @throws {@link CompaniesApi.GetApiV1CompaniesByIdentifierStoriesError} when the API answers
   * with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link NordicFinancialNewsError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  getApiV1CompaniesByIdentifierStories(
    request: CompaniesApi.GetApiV1CompaniesByIdentifierStoriesRequest,
    options?: RequestOptions,
  ): ApiPromise<ApiV1CompaniesStoriesResponse, CompaniesApi.GetApiV1CompaniesByIdentifierStoriesError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/v1/companies/{identifier}/stories"),
        auth: this.#auth.bearerAuth,
        pathParams: [{ name: "identifier", value: request.identifier, schema: s.string() }],
        query: [
          { name: "limit", value: request.limit, schema: s.optional(s.int()) },
          { name: "cursor", value: request.cursor, schema: s.optional(s.string()) },
          { name: "updated_after", value: request.updatedAfter, schema: s.optional(s.string()) },
          { name: "fields", value: request.fields, schema: s.optional(s.string()) },
          { name: "q", value: request.q, schema: s.optional(s.string()) },
          { name: "sort", value: request.sort, schema: s.optional(s.lazy(() => sortSchema)) },
          { name: "country", value: request.country, schema: s.optional(s.string()) },
          { name: "category", value: request.category, schema: s.optional(s.string()) },
          { name: "sources", value: request.sources, schema: s.optional(s.string()) },
          { name: "published_after", value: request.publishedAfter, schema: s.optional(s.string()) },
          { name: "published_before", value: request.publishedBefore, schema: s.optional(s.string()) },
        ],
        headers: [
          { name: "If-None-Match", value: request.ifNoneMatch, schema: s.optional(s.string()) },
          { name: "If-Modified-Since", value: request.ifModifiedSince, schema: s.optional(s.string()) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: apiV1CompaniesStoriesResponseSchema },
        errorFactory: CompaniesApi.GetApiV1CompaniesByIdentifierStoriesError,
      },
      options,
    );
  }
}

export namespace CompaniesApi {
  export type GetApiV1CompaniesRequest = {
    /** Number of companies to return per page (default 25, max 100). */
    limit?: number;
    /**
     * Opaque pagination cursor returned as `pagination.next_cursor` from a previous response.
     * Mutually exclusive with `q`.
     */
    cursor?: string;
    /**
     * Comma-separated list of fields to include in the response. Available fields: `id`, `name`,
     * `slug`, `ticker`, `former_tickers`.
     */
    fields?: string;
    /**
     * Full-text search query (2-200 characters). Searches company names and aliases. Results are
     * ranked by relevance instead of alphabetical order. Mutually exclusive with `cursor`.
     */
    q?: string;
    /**
     * Set to `semantic` to match `q` by meaning rather than by name/ticker text. The match runs
     * over each company's name, aliases, country, sector, industry and description, so it answers
     * thematic questions a name match cannot ("defense contractors", "companies making battery
     * cells").
     *
     * Put geography in `market`, `domicile` or `country` rather than in `q`. A place name in `q`
     * matches company names containing it ("Nordic ...", "Swedish ...") ahead of companies that
     * actually do that thing.
     *
     * Requires `q`, is mutually exclusive with `cursor`, and returns a single ranked page capped by
     * `limit`; `company`, `ticker`, `country`, `market`, `domicile`, `exchange`, `sector`,
     * `listed`, `watchlist` and `is_active` remain hard filters applied before the match, not
     * after.
     *
     * Each company gains a `distance` (raw cosine, lower is closer, rounded to 4dp). Compare it
     * only within one response, never across responses: the scale is model-dependent. Ranking also
     * blends in a small coverage bonus that `distance` does not reflect. A server-side relevance
     * floor drops weak matches, so a page is frequently shorter than `limit` and can be empty.
     * Raising `limit` does not recover floored rows.
     *
     * The response `pagination` object carries `count` only. There is no `next_cursor`, since a
     * distance ranking cannot be cursor-paginated, and the response is uncacheable (`Cache-Control:
     * no-cache, no-store`, no `ETag`). If the query cannot be embedded the request returns `503`
     * rather than silently falling back to name matching.
     */
    mode?: Mode;
    /**
     * Resolve specific company `id` values, comma-separated (maximum 25). This is the batch-resolve
     * path for the `company_id` and `company_ids` values returned by the articles, stories, events
     * and calendar endpoints. Look up a whole page of them in one request instead of one `GET
     * /companies/{identifier}` per company. Every id must resolve, or the request is rejected with
     * `400` naming the unknown ids. Results are returned in name order, not the order requested, so
     * key off each row's `id`. Combined with `ticker`, the two filters intersect.
     */
    company?: string;
    /**
     * Resolve specific stock tickers, comma-separated (maximum 25). Accepts the exchange-suffixed
     * form (e.g. `VOLV-B.ST`) and resolves former tickers; matching is case-insensitive. Unlike `q`
     * this is an exact filter, so it returns no near-matches and supports cursor pagination. Every
     * ticker must resolve, or the request is rejected with `400` naming the unknown values.
     * Combined with `company`, the two filters intersect. A ticker shared by more than one issuer
     * resolves to every matching company, so a batch can return more rows than the number of
     * tickers sent. `GET /companies/{identifier}` tie-breaks such a ticker to a single company,
     * this filter does not.
     */
    ticker?: string;
    /**
     * Legal domicile, ISO 3166-1 alpha-2 code (e.g. `SE`, `NO`, `DK`). Comma-separated for multiple
     * (e.g. `SE,NO`). Case-insensitive. Synonym for `domicile` on this endpoint, kept for backward
     * compatibility. If both `country` and `domicile` are sent, they intersect.
     */
    country?: string;
    /**
     * Filter to companies with an active equity listing in these countries' exchanges (ISO 3166-1
     * alpha-2, comma-separated, e.g. `SE,NO`). `SE` covers Nasdaq Stockholm, First North, Spotlight
     * and NGM. Distinct from `country`/`domicile` (legal domicile). Includes foreign-domiciled but
     * locally-listed issuers.
     */
    market?: string;
    /**
     * Filter to companies legally domiciled in these countries (ISO 3166-1 alpha-2,
     * comma-separated). The canonical cross-surface name for what `country` already means on this
     * endpoint; reaches unlisted companies and excludes foreign-domiciled but locally-listed
     * issuers. Use `market` for market-coverage questions.
     */
    domicile?: string;
    /**
     * Filter by exchange MIC code, comma-separated for multiple (e.g. `XSTO`, `XOSL,XCSE`). Only
     * companies with an active listing on the exchange match.
     */
    exchange?: string;
    /** Filter by industry sector (e.g. `Financials`, `Industrials`, `Information Technology`). */
    sector?: string;
    /** When `true`, only return companies with at least one active stock exchange listing. */
    listed?: string;
    /**
     * When `true`, only return companies in the authenticated user's watchlist. Requires
     * `read:watchlist` scope.
     */
    watchlist?: string;
    /**
     * Filter by active status. When `true`, only return active companies. When `false`, only return
     * inactive companies.
     */
    isActive?: string;
    /** ETag value from a previous response. Returns `304 Not Modified` if data has not changed. */
    ifNoneMatch?: string;
    /**
     * HTTP date from a previous `Last-Modified` header. Returns `304 Not Modified` if nothing has
     * changed since.
     */
    ifModifiedSince?: string;
  };

  export class GetApiV1CompaniesError extends ApiError {
    declare readonly payload:
      | Declared<"error304", undefined>
      | Declared<"problemDetails", ProblemDetails>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetApiV1CompaniesError> = [
      { on: 304, kind: "error304", decode: { kind: "empty" } },
      { on: 400, kind: "problemDetails", decode: { kind: "json", schema: problemDetailsSchema } },
    ];
  }

  export type GetApiV1CompaniesByIdentifierRequest = {
    /**
     * Company ID or ticker symbol. Accepts the exchange-suffixed form (e.g. `VOLV-B.ST`); former
     * tickers resolve too. When a ticker is shared by more than one company, the company with a
     * listing on a Nordic exchange is returned, then the one with an active listing, then the most
     * recently listed. Use the company ID for an unambiguous lookup.
     */
    identifier: string;
    /** ETag value from a previous response. Returns `304 Not Modified` if data has not changed. */
    ifNoneMatch?: string;
    /**
     * HTTP date from a previous `Last-Modified` header. Returns `304 Not Modified` if nothing has
     * changed since.
     */
    ifModifiedSince?: string;
  };

  export class GetApiV1CompaniesByIdentifierError extends ApiError {
    declare readonly payload:
      | Declared<"error304", undefined>
      | Declared<"problemDetails", ProblemDetails>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetApiV1CompaniesByIdentifierError> = [
      { on: 304, kind: "error304", decode: { kind: "empty" } },
      { on: 404, kind: "problemDetails", decode: { kind: "json", schema: problemDetailsSchema } },
    ];
  }

  export type GetApiV1CompaniesByIdentifierArticlesRequest = {
    /**
     * Company ID or ticker symbol. Accepts the exchange-suffixed form (e.g. `VOLV-B.ST`); former
     * tickers resolve too. When a ticker is shared by more than one company, the company with a
     * listing on a Nordic exchange is returned, then the one with an active listing, then the most
     * recently listed. Use the company ID for an unambiguous lookup.
     */
    identifier: string;
    /** Number of articles to return per page (default 25, max 100). */
    limit?: number;
    /**
     * Opaque pagination cursor from a previous response. Mutually exclusive with `q` unless
     * `sort=latest` is also given.
     */
    cursor?: string;
    /**
     * Comma-separated list of fields to include in the response. Reduces payload size. Available
     * fields: `id`, `title`, `article_url`, `published_at`, `updated_at`, `content_type`, `source`,
     * `company_ids`, `country`, `category`.
     */
    fields?: string;
    /**
     * ISO 8601 datetime. Returns only this company's articles updated after this timestamp. Use
     * this for incremental sync: store the timestamp of your last completed sync, then request only
     * newer results on each poll. Results are ordered by `updated_at` ascending and are
     * cursor-paginated. Follow `pagination.next_cursor`, resending the same `updated_after` value,
     * until it is null. Only advance your stored timestamp once you have drained every page.
     * Mutually exclusive with `sort=latest` (with or without `q`). An `updated_after` walk is
     * always ordered by `updated_at`.
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
     * When `true`, narrows further within the already-principal match, to only articles where this
     * company is the primary subject.
     */
    primaryOnly?: boolean;
    /**
     * When `true`, widen this feed back to articles where the company is only a peripheral
     * association (its source, an advisor, or a passing mention), which are otherwise excluded.
     * Default `false` (principal-only). `primary_only` still keeps the primary-subject restriction
     * even when peripheral is requested.
     */
    includePeripheral?: boolean;
    /** ETag value from a previous response. Returns `304 Not Modified` if data has not changed. */
    ifNoneMatch?: string;
    /**
     * HTTP date from a previous `Last-Modified` header. Returns `304 Not Modified` if nothing has
     * changed since.
     */
    ifModifiedSince?: string;
  };

  export class GetApiV1CompaniesByIdentifierArticlesError extends ApiError {
    declare readonly payload:
      | Declared<"error304", undefined>
      | Declared<"problemDetails", ProblemDetails>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetApiV1CompaniesByIdentifierArticlesError> = [
      { on: 304, kind: "error304", decode: { kind: "empty" } },
      { on: 400, kind: "problemDetails", decode: { kind: "json", schema: problemDetailsSchema } },
    ];
  }

  export type GetApiV1CompaniesByIdentifierCalendarEventsRequest = {
    /**
     * Company ID or ticker symbol. Accepts the exchange-suffixed form (e.g. `VOLV-B.ST`); former
     * tickers resolve too. When a ticker is shared by more than one company, the company with a
     * listing on a Nordic exchange is returned, then the one with an active listing, then the most
     * recently listed. Use the company ID for an unambiguous lookup.
     */
    identifier: string;
    /** Number of events to return per page (default 25, max 100). */
    limit?: number;
    /**
     * Opaque pagination cursor returned as `pagination.next_cursor` from a previous response. When
     * continuing an `updated_after` sync, resend the same `updated_after` value alongside it.
     */
    cursor?: string;
    /**
     * Comma-separated list of fields to include in the response. Reduces payload size. `id` is
     * always included. Available fields: `title`, `description`, `event_type`, `status`,
     * `date_precision`, `fiscal_period`, `scheduled_at`, `timezone`, `local_time`,
     * `scheduled_at_changed_at`, `source_article_id`, `source`, `company_id`, `company`, `country`,
     * `dividend`, `updated_at`.
     */
    fields?: string;
    /**
     * ISO 8601 datetime. Returns only this company's events updated after this timestamp. Use for
     * incremental sync: store the timestamp of your last completed sync and pass it on the next
     * request. Results are ordered by `updated_at` ascending and cursor-paginated. Drain
     * `pagination.next_cursor` before advancing your stored timestamp. Passing this parameter also
     * disables the default upcoming-only floor, so past events with newer updates are included.
     */
    updatedAfter?: string;
    /**
     * Filter by lifecycle status. Omitted: returns `scheduled` + past `published` events and
     * excludes `cancelled`. Pass `cancelled` to retrieve cancellations, or `scheduled`/`published`
     * to narrow.
     */
    status?: Status1;
    /**
     * Filter by calendar event type. Accepts a single value or a comma-separated list for multiple
     * types. These are calendar event types (underscored) and are the only values accepted here.
     * The hyphenated Events taxonomy slugs from `GET /api/v1/event_types` belong to `GET
     * /api/v1/events` and are rejected. A few spellings overlap across the two vocabularies (e.g.
     * `delisting`) while denoting different things: a calendar event is a dated, scheduled entry
     * for one issuer; an Events slug classifies a narrative event that already happened.
     */
    eventType?: EventType1;
    /**
     * Window start. A bare date (`YYYY-MM-DD`) means that calendar date in each issuer's own
     * timezone, inclusive: `scheduled_after=2026-10-01&scheduled_before=2026-10-31` is October in
     * every issuer's local calendar. An ISO 8601 datetime (`Z` or a UTC offset) means an exact UTC
     * instant, at or after. Passing this parameter disables the default upcoming-only floor,
     * allowing past events to be returned.
     */
    scheduledAfter?: string;
    /**
     * Window end. A bare date means that calendar date in each issuer's own timezone, inclusive. An
     * ISO 8601 datetime means an exact UTC instant, exclusive (strictly before). Passing this
     * parameter disables the default upcoming-only floor, allowing past events to be returned.
     */
    scheduledBefore?: string;
    /** ETag value from a previous response. Returns `304 Not Modified` if data has not changed. */
    ifNoneMatch?: string;
    /**
     * HTTP date from a previous `Last-Modified` header. Returns `304 Not Modified` if nothing has
     * changed since.
     */
    ifModifiedSince?: string;
  };

  export class GetApiV1CompaniesByIdentifierCalendarEventsError extends ApiError {
    declare readonly payload:
      | Declared<"error304", undefined>
      | Declared<"problemDetails", ProblemDetails>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetApiV1CompaniesByIdentifierCalendarEventsError> = [
      { on: 304, kind: "error304", decode: { kind: "empty" } },
      { on: 403, kind: "problemDetails", decode: { kind: "json", schema: problemDetailsSchema } },
    ];
  }

  export type GetApiV1CompaniesByIdentifierEventsRequest = {
    /**
     * Company ID or ticker symbol. Accepts the exchange-suffixed form (e.g. `VOLV-B.ST`); former
     * tickers resolve too. When a ticker is shared by more than one company, the company with a
     * listing on a Nordic exchange is returned, then the one with an active listing, then the most
     * recently listed. Use the company ID for an unambiguous lookup.
     */
    identifier: string;
    /** Number of events to return per page (default 25, max 100). */
    limit?: number;
    /**
     * Opaque pagination cursor from a previous response. Works with `q` too; `q` is a filter, not a
     * separate search mode. When continuing an `updated_after` sync, resend the same
     * `updated_after` value.
     */
    cursor?: string;
    /** Comma-separated list of fields to include in the response. `id` is always included. */
    fields?: string;
    /**
     * ISO 8601 datetime. Returns only this company's events updated after this timestamp, including
     * merge/removal tombstones. Use for incremental sync.
     */
    updatedAfter?: string;
    /**
     * Full-text filter over the event's own title and summary as well as its live member articles'
     * indexed content (title, summary, key points, plus tagged company names and key facts), so an
     * event can match on a company its coverage only tags. Matches stay in the default feed order
     * (most recently reported first) and are cursor-paginated like any other request; combine with
     * `window`/`last_article_after` for "latest on X".
     */
    q?: string;
    /**
     * Filter by event type slug, comma-separated. These are Events taxonomy slugs (hyphenated) from
     * `GET /api/v1/event_types` and are the only values accepted here. The underscored calendar
     * `event_type` values used by `GET /api/v1/calendar_events` are rejected. A few spellings
     * overlap across the two vocabularies (e.g. `delisting`) while denoting different things. An
     * unrecognized slug returns 400 naming the bad slug(s).
     */
    eventType?: string;
    /**
     * Editorial importance, the feed's materiality threshold, comma-separated (e.g.
     * `notable,routine`). Valid values: `notable` (material, front-page-worthy events), `routine`
     * (ledger records: routine filings, scheduled disclosures), `commentary` (opinion/analysis
     * pieces). Use `significance=notable` to restrict the feed to material events. An unrecognized
     * value returns 400 naming the bad value(s).
     */
    significance?: string;
    /**
     * Sort order. `latest` (default) sorts most recently reported first, the unfiltered feed order.
     * `significance` groups events into 3 coarse editorial tiers (`notable`, then `routine`, then
     * `commentary`), most recently reported first within each tier; expect large ties within a
     * tier. A mid-walk `routine`→`notable` escalation may be skipped, since the ordering is a
     * best-effort snapshot. For a broad importance filter, prefer `significance=notable` with the
     * default sort; page 1 is identical. Mutually exclusive with `updated_after` (an unrecognized
     * value, or either sort value combined with `updated_after`, returns 400).
     */
    sort?: string;
    /**
     * Filter to events with a live member article from this country (ISO 3166-1 alpha-2,
     * comma-separated). Applied at the article grain, so sync tombstones do not respect it.
     */
    country?: string;
    /**
     * Filter to events with a live member article in any of these categories, by their `id`
     * (comma-separated; unknown ids are ignored). Applied at the article grain, so sync tombstones
     * do not respect it.
     */
    category?: string;
    /**
     * Filter to events with a live member article from these sources, by their `id`
     * (comma-separated, max 25). Applied at the article grain, so sync tombstones do not respect
     * it.
     */
    sources?: string;
    /** ISO 8601 datetime. Only events first reported at or after this time. */
    firstReportedAfter?: string;
    /** ISO 8601 datetime. Only events first reported before this time. */
    firstReportedBefore?: string;
    /**
     * ISO 8601 datetime. Only events whose most recent activity (`last_article_at`, or
     * `first_reported_at` when that is null) is at or after this time. Mutually exclusive with
     * `window`.
     */
    lastArticleAfter?: string;
    /**
     * ISO 8601 datetime. Only events whose most recent activity is before this time. Mutually
     * exclusive with `window`.
     */
    lastArticleBefore?: string;
    /**
     * Relative shorthand for `last_article_after`, e.g. `8h`, `24h`, `7d` (hours or days only, max
     * 365d equivalent). Evaluated per request against the server clock. Mutually exclusive with
     * `last_article_after`, `last_article_before`, and `updated_after`.
     */
    window?: string;
    /**
     * Filter to events with a live member article from this source type, comma-separated. Valid
     * values: `news_publication`, `wire_service`, `press_release`, `government`,
     * `trade_publication`, `blog`, `stock_exchange`, `research`. Articles from disabled sources are
     * excluded. Applied at the article grain, so sync tombstones do not respect it. An unrecognized
     * value returns 400 naming the bad value(s).
     */
    sourceType?: string;
    /**
     * Filter to events with a live member article of this content type, comma-separated. Valid
     * values: `news`, `analysis`, `press_release`, `market_commentary`, `market_news`,
     * `trading_halt`, `trading_event`, `other`. Applied at the article grain, so sync tombstones do
     * not respect it. An unrecognized value returns 400 naming the bad value(s). Content type is an
     * AI-assigned label per article. To find events with a member article from a primary disclosure
     * source, filter on `source_type` (`wire_service`, `stock_exchange`, `press_release`,
     * `government`) instead.
     */
    contentType?: string;
    /**
     * Filter to commentary events that comment on or react to the factual event with this `id`.
     * Unresolvable `id` returns an empty result set, not an error.
     */
    relatedTo?: string;
    /**
     * When `true`, widen this feed, and the `company_ids` returned on each event, to events where
     * this company has a peripheral role (advisor, speaker, or a passing mention) as well. Default
     * `false` restricts to an active-involvement role (subject, acquirer, target, investor, issuer,
     * partner).
     */
    includePeripheral?: boolean;
    /** ETag value from a previous response. Returns `304 Not Modified` if data has not changed. */
    ifNoneMatch?: string;
  };

  export class GetApiV1CompaniesByIdentifierEventsError extends ApiError {
    declare readonly payload:
      | Declared<"error304", undefined>
      | Declared<"problemDetails", ProblemDetails>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetApiV1CompaniesByIdentifierEventsError> = [
      { on: 304, kind: "error304", decode: { kind: "empty" } },
      { on: 400, kind: "problemDetails", decode: { kind: "json", schema: problemDetailsSchema } },
    ];
  }

  export type GetApiV1CompaniesByIdentifierStoriesRequest = {
    /**
     * Company ID or ticker symbol. Accepts the exchange-suffixed form (e.g. `VOLV-B.ST`); former
     * tickers resolve too. When a ticker is shared by more than one company, the company with a
     * listing on a Nordic exchange is returned, then the one with an active listing, then the most
     * recently listed. Use the company ID for an unambiguous lookup.
     */
    identifier: string;
    /** Number of stories to return per page (default 25, max 100). */
    limit?: number;
    /**
     * Opaque pagination cursor from a previous response. Mutually exclusive with `q` unless
     * `sort=latest` is also given.
     */
    cursor?: string;
    /**
     * ISO 8601 datetime. Returns only this company's stories updated after this timestamp. Use this
     * for incremental sync: store the timestamp of your last completed sync, then request only
     * newer results on each poll. Results are ordered by `updated_at` ascending and are
     * cursor-paginated. Follow `pagination.next_cursor`, resending the same `updated_after` value,
     * until it is null. Only advance your stored timestamp once you have drained every page.
     * Mutually exclusive with `sort=latest` (with or without `q`). An `updated_after` walk is
     * always ordered by `updated_at`.
     */
    updatedAfter?: string;
    /**
     * Comma-separated list of fields to include in the response. Available fields: `id`, `title`,
     * `summary`, `published_at`, `updated_at`, `article_count`, `article_ids`, `country`,
     * `category`, `company_ids`.
     */
    fields?: string;
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
    /** ISO 8601 datetime. Returns stories published on or after this timestamp. */
    publishedAfter?: string;
    /** ISO 8601 datetime. Returns stories published before this timestamp. */
    publishedBefore?: string;
    /** ETag value from a previous response. Returns `304 Not Modified` if data has not changed. */
    ifNoneMatch?: string;
    /**
     * HTTP date from a previous `Last-Modified` header. Returns `304 Not Modified` if nothing has
     * changed since.
     */
    ifModifiedSince?: string;
  };

  export class GetApiV1CompaniesByIdentifierStoriesError extends ApiError {
    declare readonly payload:
      | Declared<"error304", undefined>
      | Declared<"problemDetails", ProblemDetails>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetApiV1CompaniesByIdentifierStoriesError> = [
      { on: 304, kind: "error304", decode: { kind: "empty" } },
      { on: 400, kind: "problemDetails", decode: { kind: "json", schema: problemDetailsSchema } },
    ];
  }
}
