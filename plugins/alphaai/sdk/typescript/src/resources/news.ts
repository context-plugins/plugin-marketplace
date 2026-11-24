import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  apiNewsRelatedResponseInternalSchema,
  type ApiNewsRelatedResponse,
} from "../models/api-news-related-response.js";
import {
  apiNewsSearch503Error1Schema,
  type ApiNewsSearch503Error1,
} from "../models/api-news-search503-error1.js";
import { collapseSchema, type Collapse } from "../models/collapse.js";
import { errorSchema, type Error } from "../models/error.js";
import { Format, formatSchema } from "../models/format.js";
import {
  insiderClustersPageInternalSchema,
  type InsiderClustersPage,
} from "../models/insider-clusters-page.js";
import { newsCategorySchema, type NewsCategory } from "../models/news-category.js";
import { newsPaginationInternalSchema, type NewsPagination } from "../models/news-pagination.js";
import { newsSearchPageInternalSchema, type NewsSearchPage } from "../models/news-search-page.js";
import { newsSourceTypeSchema, type NewsSourceType } from "../models/news-source-type.js";
import { Pattern1, pattern1Schema } from "../models/pattern1.js";
import { richNewsArticleInternalSchema, type RichNewsArticle } from "../models/rich-news-article.js";
import { Sort1, sort1Schema } from "../models/sort1.js";
import { Sort3, sort3Schema } from "../models/sort3.js";
import { sourceTypeSchema, type SourceType } from "../models/source-type.js";
import { watchlistBriefDtoSchema, type WatchlistBriefDto } from "../models/watchlist-brief-dto.js";
import type { Servers } from "../servers.js";

/**
 * Relevance-scored, ticker-linked news.
 */
export class News {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * List news (cursor-paginated)
   *
   * @remarks
   * Feed of enriched articles, newest first. Default filter: `relevance_score >= 4` AND at least
   * one active ticker. Pagination is cursor-based with a default page size of 10 (any size from 1
   * to 20 via `page_size=`; Pro keys go up to 50): omit `cursor` for the newest page, then pass the
   * `next_cursor` from each response to fetch the next (older) page. `next_cursor: null` means the
   * end of the feed. Cursors are opaque — do not construct or parse them; an invalid cursor returns
   * 400. Archive depth is tiered: paging back past your plan's horizon (Free 30 days, Basic 90, Pro
   * 180) returns 403 with an upgrade hint. **Delta polling** (`sort=ingested`): the same feed
   * ordered by the moment rows became available, for "what is new since my last poll". Articles
   * reach the feed later than their publish time (collection median ~30 min for general news, with
   * a long tail), so a poller that filters by `time_published` misses most late arrivals;
   * `sort=ingested` follows ingest order. First call without `cursor` returns a bounded sample of
   * up to `page_size` recent visible rows and a cursor at the feed head. This initial sample may be
   * partial or empty when the scan reaches its work limit; it still starts the live stream. Each
   * later call with the previous `next_cursor` returns only rows added since. In this mode
   * `next_cursor` is always non-null — empty `results` means you are caught up, keep the cursor and
   * poll again later (responses are cached for 60 s, so polling more often than once a minute buys
   * nothing). New rows only: an update to an already-delivered article is not re-sent.
   * `time_published` is not monotonic within a delta page; sort client-side if you need
   * chronological order. A cursor is only valid with the sort mode that issued it. On resumed
   * requests, empty **successful** pages mean the current scan is caught up. A nonempty page
   * shorter than `page_size` may still have a continuation; keep following its cursor. If a bounded
   * scan cannot produce a page, HTTP 409 reports `extra.reason="delta_scan_incomplete"` and
   * `extra.next_cursor`. Continue from that cursor with identical filters and sort; repeating the
   * original request cannot resolve this work limit. A concurrent change during reading instead
   * returns HTTP 503 with `extra.reason="delta_candidates_changed"`: retry the original request,
   * without advancing its cursor. Neither error is cached. MCP delta tools report the same JSON
   * envelopes as tool errors. The cursor family, archive gates and story-collapse behavior remain
   * unchanged. Delta mode carries live coverage only: when we add history in bulk (backfilling an
   * earlier period), those rows do NOT enter this stream — they would arrive as thousands of "new"
   * items that are months old and push your cursor far behind the live feed. They are served
   * normally in `sort=published`, by date filters and by `/api/news/{uid}/`, so a one-off catch-up
   * over the archive is a published-mode query. **Keeping up.** One call returns at most
   * `page_size` rows, so a poller holds its position at the head only while `calls per day ×
   * page_size` stays above the daily volume of the stream it asked for. Below that it falls a
   * little further behind every day, and the symptom misleads: `time_published` reads hours or days
   * old while the data is current. What went stale is the cursor, not the feed. So drain instead of
   * polling once per tick: when a page comes back with `results` filled, call again immediately,
   * and sleep only once `results` is empty. That clears a burst within the same cycle and lets a
   * poller catch up by itself after downtime. Two levers if the call budget is still short, and
   * they multiply: `page_size` (up to 20, or 50 on a Pro key) and a narrower stream
   * (`min_relevance`, `symbol`, `category`). For scale, at the default `>= 4` floor the feed
   * carries roughly 2,700 rows a day, while `min_relevance=7` carries roughly 1,000.
   *
   * @returns A page of enriched articles.
   *
   * @throws {@link News.GetApiNewsError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link AlphaAiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getApiNews(
    request: News.GetApiNewsRequest = {},
    options?: RequestOptions,
  ): ApiPromise<NewsPagination, News.GetApiNewsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/news/"),
        auth: this.#auth.apiKey,
        pathParams: [],
        query: [
          { name: "cursor", value: request.cursor, schema: s.optional(s.string()) },
          { name: "symbol", value: request.symbol, schema: s.optional(s.string()) },
          {
            name: "category",
            value: request.category,
            schema: s.optional(s.array(s.lazy(() => newsCategorySchema))),
          },
          {
            name: "exclude_categories",
            value: request.excludeCategories,
            schema: s.optional(s.array(s.lazy(() => newsCategorySchema))),
          },
          { name: "min_relevance", value: request.minRelevance, schema: s.defaulted(s.int(), 4) },
          { name: "page_size", value: request.pageSize, schema: s.defaulted(s.int(), 10) },
          { name: "collapse", value: request.collapse, schema: s.optional(s.lazy(() => collapseSchema)) },
          {
            name: "collapse_stories",
            value: request.collapseStories,
            schema: s.defaulted(s.boolean(), false),
          },
          { name: "sort", value: request.sort, schema: s.defaulted(sort1Schema, Sort1.Published) },
          { name: "from_date", value: request.fromDate, schema: s.optional(s.dateTime()) },
          { name: "to_date", value: request.toDate, schema: s.optional(s.dateTime()) },
          {
            name: "source_type",
            value: request.sourceType,
            schema: s.optional(s.array(s.lazy(() => newsSourceTypeSchema))),
          },
          { name: "item", value: request.item, schema: s.optional(s.string()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: newsPaginationInternalSchema },
        errorFactory: News.GetApiNewsError,
      },
      options,
    );
  }

  /**
   * A compact brief across multiple tickers
   *
   * @remarks
   * One response with recent news grouped by story, a separate SEC Form 4/8-K/6-K filings section,
   * and the next confirmed earnings date per ticker. Supply your symbols explicitly; this endpoint
   * does not read an account's saved watchlist. The website and MCP tool `alphai_watchlist_brief`
   * use the caller's saved list instead.
   *
   * `hours` is a publication-time window ending at `generated_at`, both ends inclusive. This is a
   * ranked snapshot, not a delta since the last call. Bulk backfills are excluded. Within each
   * section, the newest 500 matching articles at the configured relevance floor (default 4) are
   * grouped, then ranked by each group's highest relevance and novelty, then its newest publication
   * time. Fields on a returned event describe the representative article. `limit` applies
   * independently to news and filings. Either a candidate overflow or additional grouped stories
   * sets that section's `*_truncated` flag. A truncated response is a selection, not a complete
   * event inventory; narrow `hours` or use the paginated ticker feed for further coverage.
   *
   * An event shared by several requested tickers appears once, with `matched_tickers` naming all
   * matches. If press coverage and a filing share a story, the filing represents it once in the
   * filings section. Distinct Form 4 transaction legs remain separate even when they share a filing
   * URL. Share classes and former ticker names are included. Unrecognized symbols are returned in
   * `unknown_tickers`; bare crypto names are not guessed (use BTC-USD). Dates are confirmed only,
   * on or after today's America/New_York date, excluding reports already matched to a published
   * filing; absence means no confirmed date on file, not that no report is due. Available on every
   * tier. Responses use `Cache-Control: private, no-store`.
   *
   * @returns Brief with explicit coverage and truncation information.
   *
   * @throws {@link News.GetApiNewsBriefError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link AlphaAiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getApiNewsBrief(
    request: News.GetApiNewsBriefRequest,
    options?: RequestOptions,
  ): ApiPromise<WatchlistBriefDto, News.GetApiNewsBriefError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/news/brief/"),
        auth: this.#auth.apiKey,
        pathParams: [],
        query: [
          { name: "tickers", value: request.tickers, schema: s.array(s.string()), style: "csv" },
          { name: "hours", value: request.hours, schema: s.defaulted(s.int(), 24) },
          { name: "limit", value: request.limit, schema: s.defaulted(s.int(), 20) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: watchlistBriefDtoSchema },
        errorFactory: News.GetApiNewsBriefError,
      },
      options,
    );
  }

  /**
   * Get a news article by UID
   *
   * @remarks
   * One enriched article. SEC rows carry the same structured block the feeds serve: `insider` on a
   * Form 4 row (as on `/api/news/insider/`), `filing` on an 8-K row (as on `/api/news/`), so a uid
   * taken from `/api/news/insider/clusters/` opens with its trade data. An 8-K or 6-K earnings
   * filing can also carry `earnings` (see that field), which no feed populates.
   *
   * @returns A single enriched article.
   *
   * @throws {@link News.GetApiNewsByUidError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link AlphaAiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getApiNewsByUid(
    request: News.GetApiNewsByUidRequest,
    options?: RequestOptions,
  ): ApiPromise<RichNewsArticle, News.GetApiNewsByUidError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/news/{uid}/"),
        auth: this.#auth.apiKey,
        pathParams: [{ name: "uid", value: request.uid, schema: s.string() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: richNewsArticleInternalSchema },
        errorFactory: News.GetApiNewsByUidError,
      },
      options,
    );
  }

  /**
   * Articles related to one article
   *
   * @remarks
   * Up to 6 articles related to the given article: fresh articles sharing a ticker first, then
   * same-category recents as backfill. Same enriched shape and `relevance_score >= 4` filtering as
   * `/api/news/`; insider (SEC Form 4) rows are excluded unless the base article is itself insider.
   * No pagination — the list is a fixed-size block.
   *
   * @returns Related enriched articles (possibly fewer than 6).
   *
   * @throws {@link News.GetApiNewsByUidRelatedError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link AlphaAiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getApiNewsByUidRelated(
    request: News.GetApiNewsByUidRelatedRequest,
    options?: RequestOptions,
  ): ApiPromise<ApiNewsRelatedResponse, News.GetApiNewsByUidRelatedError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/news/{uid}/related/"),
        auth: this.#auth.apiKey,
        pathParams: [{ name: "uid", value: request.uid, schema: s.string() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: apiNewsRelatedResponseInternalSchema },
        errorFactory: News.GetApiNewsByUidRelatedError,
      },
      options,
    );
  }

  /**
   * Insider-transaction news (SEC Form 4)
   *
   * @remarks
   * Dedicated insider feed (`category=insider`): SEC EDGAR Form 4 insider activity ONLY — one
   * deterministic-templated row per filing event (a filing's non-derivative trades of one type and
   * holding form, aggregated: total shares, volume-weighted average price and executed range, total
   * value), surfaced shortly after filing, with the relevance score computed from the event's total
   * (size, buy vs. sell, 10b5-1 plan or not). A sale (`transaction_code` `S`) tops out at 6
   * whatever its size, and so does a sale back to the issuer (`D`) that leaves the insider with no
   * shares, which is how holdings are cashed out when an acquisition closes. Purchases, and a `D`
   * that leaves a holding (the company buying back a holder's block), use the full scale. A sale
   * filed without a price stays at 6 too. Same enriched shape, ticker and `relevance_score >= 4`
   * filtering, and cursor-based pagination as `/api/news/`. Equivalent to
   * `/api/news/?category=insider`, surfaced as a first-class route. For aggregate stats instead of
   * the stream, see `/api/symbols/{ticker}/insider-summary/`.
   *
   * The category is fixed to `insider`. This endpoint does not accept `category`,
   * `exclude_categories` or story-grouping parameters; use `/api/news/` for those filters.
   *
   * To watch for new filings, poll with `sort=ingested` rather than re-reading the newest page: a
   * Form 4 is filed up to several days after the trade it reports, so a new event often enters the
   * feed already below the head of the publish-ordered page. Delta mode orders by the moment the
   * row became available, so it never misses one. The contract is identical to
   * `/api/news/?sort=ingested` — see that endpoint for the full description.
   *
   * @returns A page of enriched insider-transaction articles. Each item additionally carries the
   * structured `insider` event block (side / shares / average price / total value / reporting
   * owner) — populated on this endpoint only. With `format=csv`, the same rows as a streamed CSV
   * file: see the `format` parameter for the columns, the per-plan row caps and the `X-Alphai-*`
   * headers.
   *
   * @throws {@link News.GetApiNewsInsiderError} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link AlphaAiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getApiNewsInsider(
    request: News.GetApiNewsInsiderRequest = {},
    options?: RequestOptions,
  ): ApiPromise<NewsPagination, News.GetApiNewsInsiderError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/news/insider/"),
        auth: this.#auth.apiKey,
        pathParams: [],
        query: [
          { name: "cursor", value: request.cursor, schema: s.optional(s.string()) },
          { name: "symbol", value: request.symbol, schema: s.optional(s.string()) },
          { name: "min_relevance", value: request.minRelevance, schema: s.defaulted(s.int(), 4) },
          { name: "is_10b5_1", value: request.is10B51, schema: s.optional(s.boolean()) },
          { name: "page_size", value: request.pageSize, schema: s.defaulted(s.int(), 10) },
          { name: "sort", value: request.sort, schema: s.defaulted(sort1Schema, Sort1.Published) },
          { name: "from_date", value: request.fromDate, schema: s.optional(s.dateTime()) },
          { name: "to_date", value: request.toDate, schema: s.optional(s.dateTime()) },
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: newsPaginationInternalSchema },
        errorFactory: News.GetApiNewsInsiderError,
      },
      options,
    );
  }

  /**
   * Insider cluster buys (several insiders of one issuer buying together)
   *
   * @remarks
   * Episodes in which **several different insiders of one issuer bought on the open market
   * together**: an issuer's Form 4 purchase dates are chained into one episode while consecutive
   * purchases are at most 10 days apart (an episode is cut at 30 days), and every purchase inside
   * it is examined before a buyer counts.
   *
   * Counting names is not enough — the loudest look-alikes are an IPO or PIPE allocation (caught by
   * its price shape, or by the filing's own footnote saying the shares came from the issuer, an
   * offering or a negotiated block), a mutual-bank conversion, ESPP / DRIP / director-plan lots,
   * the same transaction reported through two owners (a director via the fund and the fund itself),
   * and plan lots sitting next to one real purchase. Each buyer therefore carries a `role`:
   * `independent` buyers are the cluster; `plan_like` (with `reason` when the filing's words
   * decided it), `unpriced` and `duplicate_of` buyers are listed so you can see why a 30-name
   * filing burst is not one. The episode's `pattern` is `open_market` when at least two independent
   * buyers remain and one of them is an officer or director, `holders_only` when only 10% holders
   * without a role remain, and `plan_or_offering` otherwise. The default hides everything but
   * `open_market`; ask for the rest explicitly. The rule was fixed against 90 episodes checked by
   * hand against the filings (2026-09-22): it shows 58 of 58 real clusters and hides 29 of 30
   * look-alikes; a 401(k) plan purchase can still pass, since the filing says so only in a
   * footnote.
   *
   * `days` is measured on `known_at` — the moment the episode's latest filing reached EDGAR — so
   * "what became known this month" is one call. A purchase filed more than ~40 days after the trade
   * is not chained (2.3% of Form 4 purchases). Coverage starts at `meta.coverage_since` (the
   * tranche table begins in August 2025); this is a descriptive screen (`research_only`, not
   * point-in-time), with no returns attached. Only common-stock purchases outside Rule 10b5-1 plans
   * are considered; units, preferred and warrants are ignored.
   *
   * @returns A page of classified purchase episodes, newest known first by default.
   *
   * @throws {@link News.GetApiNewsInsiderClustersError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link AlphaAiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getApiNewsInsiderClusters(
    request: News.GetApiNewsInsiderClustersRequest = {},
    options?: RequestOptions,
  ): ApiPromise<InsiderClustersPage, News.GetApiNewsInsiderClustersError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/news/insider/clusters/"),
        auth: this.#auth.apiKey,
        pathParams: [],
        query: [
          { name: "days", value: request.days, schema: s.defaulted(s.int(), 30) },
          { name: "min_buyers", value: request.minBuyers, schema: s.defaulted(s.int(), 2) },
          { name: "min_usd", value: request.minUsd, schema: s.optional(s.int()) },
          {
            name: "pattern",
            value: request.pattern,
            schema: s.defaulted(pattern1Schema, Pattern1.OpenMarket),
          },
          { name: "symbol", value: request.symbol, schema: s.optional(s.string()) },
          { name: "sort", value: request.sort, schema: s.defaulted(sort3Schema, Sort3.Recent) },
          { name: "cursor", value: request.cursor, schema: s.optional(s.string()) },
          { name: "page_size", value: request.pageSize, schema: s.defaulted(s.int(), 10) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: insiderClustersPageInternalSchema },
        errorFactory: News.GetApiNewsInsiderClustersError,
      },
      options,
    );
  }

  /**
   * Market-wide macro news (central banks, prints, commodities, geopolitics)
   *
   * @remarks
   * Dedicated macro feed: the `macro_economy`, `commodities` and `geopolitics` categories in one
   * stream — central-bank decisions and statements (FOMC), inflation/jobs prints, oil and gold,
   * geopolitical risk. Same enriched shape, `relevance_score >= 4` floor and cursor-based
   * pagination as `/api/news/`; equivalent to
   * `/api/news/?category=macro_economy,commodities,geopolitics`, surfaced as a first-class route.
   *
   * Macro rows are market-wide, so most carry an empty `tickers` list — that is by design (an FOMC
   * statement is not news about one company), and the per-article analysis block is still
   * populated. A macro row that IS about listed companies (an oil-price story tagged to majors)
   * keeps its tickers.
   *
   * To watch for new releases, poll with `sort=ingested` — same delta contract as
   * `/api/news/?sort=ingested`.
   *
   * @returns A page of enriched macro articles.
   *
   * @throws {@link News.GetApiNewsMacroError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link AlphaAiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getApiNewsMacro(
    request: News.GetApiNewsMacroRequest = {},
    options?: RequestOptions,
  ): ApiPromise<NewsPagination, News.GetApiNewsMacroError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/news/macro/"),
        auth: this.#auth.apiKey,
        pathParams: [],
        query: [
          { name: "cursor", value: request.cursor, schema: s.optional(s.string()) },
          { name: "category", value: request.category, schema: s.optional(s.string()) },
          { name: "min_relevance", value: request.minRelevance, schema: s.defaulted(s.int(), 4) },
          { name: "page_size", value: request.pageSize, schema: s.defaulted(s.int(), 10) },
          { name: "sort", value: request.sort, schema: s.defaulted(sort1Schema, Sort1.Published) },
          { name: "from_date", value: request.fromDate, schema: s.optional(s.dateTime()) },
          { name: "to_date", value: request.toDate, schema: s.optional(s.dateTime()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: newsPaginationInternalSchema },
        errorFactory: News.GetApiNewsMacroError,
      },
      options,
    );
  }

  /**
   * Full-text search over the feed
   *
   * @remarks
   * Search the enriched feed by words. `q` is matched against each article's title, its summary and
   * the entity names the enrichment extracted; the page comes back ranked (best match first, newest
   * first among equal matches), with a per-item `search_match` and a `query` block that says how
   * the words were read. `symbol`, `category`, `source_type`, `item`, `min_relevance`, `from_date`,
   * `to_date` and `collapse` apply as hard filters on top, exactly as on `/api/news/`:
   * `q=director&item=5.02` searches 8-K filings that carry item 5.02, `q="going
   * concern"&source_type=gdelt` searches press coverage only.
   *
   * **Query syntax.** Bare words are all required (`chip tariffs`); a quoted phrase must appear in
   * order (`"going concern"`); `-word` excludes (`apple -iphone`); `OR` separates alternatives
   * (`nvidia OR amd`). Words in a non-Latin script are ignored. Matching tolerates one typo from
   * five letters (`prices` reaches `price`) and a prefix on the last word; there is no stemming.
   *
   * **Modes** (`query.mode`). `strict`: every word matched. `broadened`: the strict pass found
   * fewer than 5 rows and the query has three or more words, so the most frequent words were
   * dropped and the page carries rows with at least two of the query's words —
   * `search_match.terms_matched` says how many on each; read these as leads, not matches.
   * `no_match`: nothing in the searched window. `no_terms`: the query held no searchable words.
   * Absence is not proof the event did not happen: the searched window starts at
   * `query.window_from`.
   *
   * **Window and paging.** The searched window is your plan's archive horizon (Free 30 days, Basic
   * 90, Pro 180) unless `from_date` / `to_date` narrow it; a window reaching past the horizon
   * returns 403 like the feed. Results are bounded to the best 200 matches (`matched` counts them,
   * capped at 200) and paged with an opaque `cursor` that is bound to the query that issued it.
   * Responses are private and never shared-cached.
   *
   * **Failure.** When the search service does not answer in time the endpoint returns 503 with
   * `extra.reason = "search_unavailable"`. The structured feed and every other endpoint are
   * unaffected: retry the search later rather than the whole chain.
   *
   * @returns A page of ranked matches.
   *
   * @throws {@link News.GetApiNewsSearchError} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link AlphaAiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getApiNewsSearch(
    request: News.GetApiNewsSearchRequest,
    options?: RequestOptions,
  ): ApiPromise<NewsSearchPage, News.GetApiNewsSearchError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/news/search/"),
        auth: this.#auth.apiKey,
        pathParams: [],
        query: [
          { name: "q", value: request.q, schema: s.string() },
          { name: "cursor", value: request.cursor, schema: s.optional(s.string()) },
          { name: "symbol", value: request.symbol, schema: s.optional(s.string()) },
          {
            name: "category",
            value: request.category,
            schema: s.optional(s.array(s.lazy(() => newsCategorySchema))),
          },
          {
            name: "source_type",
            value: request.sourceType,
            schema: s.optional(s.array(s.lazy(() => sourceTypeSchema))),
          },
          { name: "item", value: request.item, schema: s.optional(s.string()) },
          { name: "min_relevance", value: request.minRelevance, schema: s.defaulted(s.int(), 4) },
          { name: "page_size", value: request.pageSize, schema: s.defaulted(s.int(), 10) },
          { name: "collapse", value: request.collapse, schema: s.optional(s.lazy(() => collapseSchema)) },
          {
            name: "collapse_stories",
            value: request.collapseStories,
            schema: s.defaulted(s.boolean(), false),
          },
          { name: "from_date", value: request.fromDate, schema: s.optional(s.dateTime()) },
          { name: "to_date", value: request.toDate, schema: s.optional(s.dateTime()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: newsSearchPageInternalSchema },
        errorFactory: News.GetApiNewsSearchError,
      },
      options,
    );
  }

  /**
   * Trending news (last 48h)
   *
   * @remarks
   * Top stories from the trailing 48h: `relevance_score >= 8`, ranked by relevance score decayed by
   * article age, so a fresh story outranks an equally-scored stale one. At most two stories per
   * ticker. Fixed size of 10, no pagination. Coverage of one story, syndicated reprints and
   * independent write-ups of the same event alike, is collapsed to a single representative, and
   * each item carries the `story_id`, `sources_count` and `sources` fields for the story it
   * represents. `story_id` is the story ROOT's uid — the stable story key shared with
   * `?collapse=story` and the MCP tools — while the item itself is the story's strongest-ranked
   * member, so `story_id` may differ from the item's own `original.uid`. Most stories are carried
   * by a single outlet, so `sources_count` is usually 1; see its field description.
   *
   * @returns List of enriched articles.
   *
   * @throws {@link News.GetApiNewsTrendingError} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link AlphaAiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getApiNewsTrending(options?: RequestOptions): ApiPromise<RichNewsArticle[], News.GetApiNewsTrendingError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/news/trending/"),
        auth: this.#auth.apiKey,
        pathParams: [],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => richNewsArticleInternalSchema)) },
        errorFactory: News.GetApiNewsTrendingError,
      },
      options,
    );
  }
}

export namespace News {
  export type GetApiNewsRequest = {
    /** Opaque cursor from a prior response's `next_cursor`. Omit for the newest page. */
    cursor?: string;
    /**
     * Filter to articles that mention this ticker. US equities use the bare symbol (`NVDA`);
     * cryptocurrencies use the `<SYM>-USD` form (`BTC-USD`), and a bare crypto name resolves to it
     * (`DOGE` matches `DOGE-USD`); foreign listings use the Yahoo suffix (`VOD.L`). A delisted
     * symbol returns its news history. A renamed company's current ticker also matches articles
     * tagged with its former ticker, and any share class of an issuer matches articles tagged with
     * its other listed classes (`GOOGL` includes rows tagged `GOOG`); article tags stay as
     * published. `ticker` is accepted as an alias.
     */
    symbol?: string;
    /**
     * Keep only these categories. Accepts a single value, a CSV list (`category=earnings,insider`),
     * or a repeated parameter — matches any of them (OR).
     */
    category?: NewsCategory[];
    /** Drop these categories from the feed. Same single / CSV / repeated forms as `category`. */
    excludeCategories?: NewsCategory[];
    /** Override the default ≥4 threshold. @default 4 */
    minRelevance?: number;
    /**
     * Items per page, default `10`. Any value from `1` to `20` is accepted on every tier; `21`-`50`
     * requires a Pro key. A value outside `1`-`50`, or an over-`20` page without a Pro key, returns
     * 400 — the page is never silently clamped. Pagination is otherwise unchanged: pass each
     * response's `next_cursor` back as `cursor` regardless of page size. `limit` is accepted as an
     * alias.
     *
     * @default 10
     */
    pageSize?: number;
    /**
     * `story` collapses coverage of one event to a single representative row (the story root):
     * syndicated reprints and independently written articles about the same event, matched on
     * headline and lead similarity. Populates the `story_id`, `sources_count` and `sources` fields
     * on each item. Omit for the full feed (every article, story fields `null`). Only `story` is
     * accepted; any other value returns 400. Note: row-level filters (`symbol`, `category`,
     * `min_relevance`) apply to the story's representative root, so a story whose root does not
     * match the filter is omitted entirely. The root is the best copy the enricher has seen: a
     * later copy that outscores a weak root (one below 7) takes the root over, so a story's
     * `story_id` and its place in the feed can move once to that copy; a root at 7 or above is
     * never replaced. An 8-K that carries a press release as its exhibit is a member of that
     * release's story (same issuer, the release's headline inside the filing, within 3 hours) when
     * the release itself scores at or above the feed floor, so with `source_type=sec_form8k` a
     * collapsed feed omits such filings — read them uncollapsed. A filing whose release scored
     * below the floor stays its own story.
     */
    collapse?: Collapse;
    /**
     * Boolean alias matching the MCP and Python SDK option. `true` is equivalent to
     * `collapse=story`; `false` leaves articles ungrouped. Send either `collapse` or
     * `collapse_stories`, not both (400).
     *
     * @default false
     */
    collapseStories?: boolean;
    /**
     * `published` (default) is the reverse-chronological feed. `ingested` is delta-polling mode:
     * rows in the order they became available, ascending, with `next_cursor` always returned (empty
     * `results` = caught up) — see the endpoint description. All other filters apply unchanged in
     * both modes. Cursors are mode-specific: a cursor is only valid with the sort mode that issued
     * it (a mismatch returns 400).
     *
     * @default Sort1.Published
     */
    sort?: Sort1;
    /**
     * Inclusive lower bound on `time_published` — when the article was published, not when it
     * entered the feed. ISO-8601; a value without a timezone is read as UTC. A bare date
     * (`2026-06-01`) means that day's midnight. Reaching further back than your plan's archive
     * horizon returns 403 (see the `403` response) — the window is subject to the same tiered depth
     * as a deep `cursor`, and on the first page just the same. Cannot be combined with
     * `sort=ingested` (400): delta mode returns rows in ingest order from your cursor and never
     * walks back into history.
     */
    fromDate?: Date;
    /**
     * Inclusive upper bound on `time_published`, same format as `from_date`. A bare date
     * (`2026-06-01`) covers the WHOLE day (through `23:59:59.999999Z`), so
     * `from_date=2026-06-01&to_date=2026-06-01` returns that day rather than an empty page.
     * `from_date` later than `to_date` returns 400.
     */
    toDate?: Date;
    /**
     * Keep only rows ingested from these sources: `gdelt` (press coverage), `sec_form4` (insider
     * transactions), `sec_form8k` (8-K current reports), `sec_form6k` (a foreign private issuer's
     * 6-K earnings release). Same single / CSV / repeated forms as `category`, OR-matched. Unknown
     * values return 400. Composes with every other filter: `source_type=sec_form8k&symbol=NVDA` is
     * one company's 8-Ks, `source_type=gdelt&min_relevance=8` is the press without any filing.
     */
    sourceType?: NewsSourceType[];
    /**
     * 8-K item code, e.g. `5.02` (officer departures/appointments), `8.01` (other events), `1.01`
     * (material agreements). Keeps only 8-K filings that carry the item — ANY item of the filing,
     * not just the one that drove its category — and implies `source_type=sec_form8k`; `item` next
     * to any other `source_type` returns 400 (only 8-Ks have item codes). The category filter
     * already covers the two headline items (`2.02` → `earnings`, `2.01` → `mergers_acquisitions`);
     * `item` is for everything else. A filing SEC served no document for has an empty item list and
     * never matches. Every matched row carries the `filing` block.
     */
    item?: string;
  };

  export const getApiNewsRequestSchema: Schema<GetApiNewsRequest> = s.lazySchema(() =>
    s.object<GetApiNewsRequest>({
      cursor: s.optional(s.string()),
      symbol: s.optional(s.string()),
      category: s.optional(s.array(s.lazy(() => newsCategorySchema))),
      excludeCategories: s.optional(s.array(s.lazy(() => newsCategorySchema))),
      minRelevance: s.defaulted(s.int().check(s.gte(1), s.lte(10)), 4),
      pageSize: s.defaulted(s.int().check(s.gte(1), s.lte(50)), 10),
      collapse: s.optional(s.lazy(() => collapseSchema)),
      collapseStories: s.defaulted(s.boolean(), false),
      sort: s.defaulted(sort1Schema, Sort1.Published),
      fromDate: s.optional(s.dateTime()),
      toDate: s.optional(s.dateTime()),
      sourceType: s.optional(s.array(s.lazy(() => newsSourceTypeSchema))),
      item: s.optional(s.string().check(s.pattern("^\\d\\.\\d{2}$"))),
    }),
  );

  export class GetApiNewsError extends ApiError {
    declare readonly payload:
      | Declared<"error400", undefined>
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"error3", Error>
      | Declared<"error4", Error>
      | Declared<"error5", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetApiNewsError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 403, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 429, kind: "error3", decode: { kind: "json", schema: errorSchema } },
      { on: 409, kind: "error4", decode: { kind: "json", schema: errorSchema } },
      { on: 503, kind: "error5", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type GetApiNewsBriefRequest = {
    /** 1–100 distinct symbols, comma-separated or repeated; case-insensitive. */
    tickers: string[];
    /** @default 24 */
    hours?: number;
    /** Maximum grouped stories in each section; this brief has no cursor. @default 20 */
    limit?: number;
  };

  export const getApiNewsBriefRequestSchema: Schema<GetApiNewsBriefRequest> = s.lazySchema(() =>
    s.object<GetApiNewsBriefRequest>({
      tickers: s.array(s.string().check(s.maxLength(20))).check(s.minLength(1), s.maxLength(100)),
      hours: s.defaulted(s.int().check(s.gte(1), s.lte(168)), 24),
      limit: s.defaulted(s.int().check(s.gte(1), s.lte(20)), 20),
    }),
  );

  export class GetApiNewsBriefError extends ApiError {
    declare readonly payload:
      | Declared<"error400", undefined>
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetApiNewsBriefError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 401, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 429, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type GetApiNewsByUidRequest = {
    uid: string;
  };

  export const getApiNewsByUidRequestSchema: Schema<GetApiNewsByUidRequest> = s.lazySchema(() =>
    s.object<GetApiNewsByUidRequest>({
      uid: s.string().check(s.pattern("^[a-f0-9]{16}$")),
    }),
  );

  export class GetApiNewsByUidError extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"error3", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetApiNewsByUidError> = [
      { on: 404, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 429, kind: "error3", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type GetApiNewsByUidRelatedRequest = {
    uid: string;
  };

  export const getApiNewsByUidRelatedRequestSchema: Schema<GetApiNewsByUidRelatedRequest> = s.lazySchema(() =>
    s.object<GetApiNewsByUidRelatedRequest>({
      uid: s.string().check(s.pattern("^[a-f0-9]{16}$")),
    }),
  );

  export class GetApiNewsByUidRelatedError extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"error3", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetApiNewsByUidRelatedError> = [
      { on: 404, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 429, kind: "error3", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type GetApiNewsInsiderRequest = {
    /** Opaque cursor from a prior response's `next_cursor`. Omit for the newest page. */
    cursor?: string;
    /**
     * Filter to insider news that mentions this ticker. Delisted symbols return their history; a
     * renamed company's current ticker also matches rows tagged with its former ticker. `ticker` is
     * accepted as an alias.
     */
    symbol?: string;
    /**
     * Override the default ≥4 threshold. Insider rows score deterministically from the event's
     * summed dollar value (plus buy/10b5-1 modifiers), and a sale tops out at 6, so this acts as an
     * "only large trades" dial: `min_relevance=6` keeps purchases from roughly $500k and sales from
     * roughly $1M, `min_relevance=7` keeps purchases from roughly $1M and no sales, except a large
     * buyback by the company from a holder who keeps a stake (`transaction_code` `D`). A 10b5-1
     * plan trade sits one step lower.
     *
     * @default 4
     */
    minRelevance?: number;
    /**
     * Filter on the same field each item's `insider` block reports: the event's Rule 10b5-1 status.
     * Omit for every event; `false` returns discretionary trades only — the "hide pre-scheduled
     * sales" dial, since a 10b5-1 ladder was set up months earlier and carries no timing decision;
     * `true` returns plan events only. Event-level, like the field itself: a filing whose group
     * mixes plan and discretionary tranches counts as a plan event on both. The two values
     * partition the feed, so `true` and `false` pages always add up to the unfiltered one.
     */
    is10B51?: boolean;
    /**
     * Items per page, default `10`. Any value from `1` to `20` is accepted on every tier; `21`-`50`
     * requires a Pro key. A value outside `1`-`50`, or an over-`20` page without a Pro key, returns
     * 400. `limit` is accepted as an alias.
     *
     * @default 10
     */
    pageSize?: number;
    /**
     * `published` (default) is the reverse-chronological feed. `ingested` is delta-polling mode,
     * with the same contract as on `/api/news/`: rows in the order they became available,
     * ascending, `next_cursor` always returned (empty `results` = caught up), and all other filters
     * applied unchanged. Prefer it for watching insider activity — a Form 4 is filed days after the
     * trade it reports, so a new event routinely lands below the newest page of the publish-ordered
     * feed and a poller reading only the head misses it. Cursors are mode-specific: a cursor is
     * only valid with the sort mode that issued it (a mismatch returns 400).
     *
     * @default Sort1.Published
     */
    sort?: Sort1;
    /**
     * Inclusive lower bound on `time_published`, identical in format and behaviour to the parameter
     * on `/api/news/` (ISO-8601, naive read as UTC, tier-gated with 403, refused with
     * `sort=ingested`). Note which clock it is: `time_published` is when the filing reached the
     * feed, NOT the insider's `transaction_date` reported in the `insider` block. A Form 4 is filed
     * days after the trade, so a window over trade dates is a different question and this parameter
     * does not answer it.
     */
    fromDate?: Date;
    /**
     * Inclusive upper bound on `time_published`. A bare date covers the whole day; same clock
     * caveat as `from_date`.
     */
    toDate?: Date;
    /**
     * Response format. `json` (default) is the page described below. `csv` streams the same feed as
     * a file: one row per insider event, the same filters (`symbol`, `min_relevance`, `is_10b5_1`,
     * `from_date`/`to_date`, `sort`, `cursor`), walked page by page on the server up to your plan's
     * **row cap** — Free 500, Basic 2 000, Pro 10 000 rows per file — inside your plan's archive
     * horizon (30 / 90 / 180 days). `page_size` has no effect on CSV. One request counts once
     * against your rate limit, whatever the file's length.
     *
     * Where a JSON page past the horizon returns 403, the file stops at the horizon and the
     * response headers say so (`X-Alphai-Truncated: archive_horizon`). Validation errors (a bad
     * cursor, an inverted window, a window with `sort=ingested`) are the same 400 JSON bodies as
     * for `format=json`, sent before any row.
     *
     * Concurrent feed changes or a connection error can interrupt the stream after headers are
     * sent. Accept a file only after the stream completes and the number of parsed CSV data rows
     * matches `X-Alphai-Rows`. Otherwise discard the partial file and retry the original request;
     * do not advance to `X-Alphai-Next-Cursor`.
     *
     * Response: `Content-Type: text/csv; charset=utf-8`, `Content-Disposition: attachment;
     * filename="alphai-insider-<date>.csv"`, `Cache-Control: private, no-store`, plus the
     * `X-Alphai-*` headers listed under the 200 response: `X-Alphai-Rows` (data rows in the file),
     * `X-Alphai-Row-Cap` (your plan's cap), `X-Alphai-Truncated` (`row_cap` — more rows exist,
     * continue with the cursor; `archive_horizon` — the walk reached your plan's archive depth;
     * `false` — the file holds everything the filters select) and `X-Alphai-Next-Cursor` (present
     * when there is more: the same token a JSON page would have returned at that position, so you
     * can continue in either format).
     *
     * Columns, in order: `uid`, `time_published`, `tickers` (`|`-joined), `title`, `url`,
     * `category`, `relevance_score`, `side`, `transaction_code`, `shares`, `avg_price_usd`,
     * `total_value_usd`, `is_10b5_1`, `insider_name`, `insider_title`, `is_officer`, `is_director`,
     * `is_ten_percent_owner`, `transaction_date`, `filed_at`, `late_filing`, `summary` — the JSON
     * item's fields and its `insider` block flattened (event columns are empty for a row without a
     * block). RFC 4180 quoting, LF line endings, UTF-8, timestamps in ISO 8601 UTC (`Z`), booleans
     * `true`/`false`, an empty cell for null, never the article body. A free-text cell that begins
     * with `=`, `+`, `-`, `@` or a tab is prefixed with an apostrophe so it cannot run as a formula
     * when the file is opened in a spreadsheet.
     *
     * Select the format with this parameter only: an `Accept: text/csv` header on its own still
     * returns JSON, and a client that sends `Accept: application/json` together with `format=csv`
     * gets 406. With `sort=ingested` and no cursor the file holds the newest rows (up to the cap)
     * in ingest order and the cursor parks at the head, like the JSON prime page; with a cursor it
     * holds everything since that position, with rows older than your archive horizon skipped and
     * reported as `archive_horizon`.
     *
     * @default Format.Json
     */
    format?: Format;
  };

  export const getApiNewsInsiderRequestSchema: Schema<GetApiNewsInsiderRequest> = s.lazySchema(() =>
    s.object<GetApiNewsInsiderRequest>({
      cursor: s.optional(s.string()),
      symbol: s.optional(s.string()),
      minRelevance: s.defaulted(s.int().check(s.gte(1), s.lte(10)), 4),
      is10B51: s.optional(s.boolean()),
      pageSize: s.defaulted(s.int().check(s.gte(1), s.lte(50)), 10),
      sort: s.defaulted(sort1Schema, Sort1.Published),
      fromDate: s.optional(s.dateTime()),
      toDate: s.optional(s.dateTime()),
      format: s.defaulted(formatSchema, Format.Json),
    }),
  );

  export class GetApiNewsInsiderError extends ApiError {
    declare readonly payload:
      | Declared<"error400", undefined>
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"error3", Error>
      | Declared<"error4", Error>
      | Declared<"error5", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetApiNewsInsiderError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 403, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 429, kind: "error3", decode: { kind: "json", schema: errorSchema } },
      { on: 409, kind: "error4", decode: { kind: "json", schema: errorSchema } },
      { on: 503, kind: "error5", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type GetApiNewsInsiderClustersRequest = {
    /**
     * Lookback in days over `known_at`, `1`-`90`, default `30`. Deeper than your plan's archive
     * horizon (Free 30, Basic 90) returns 403.
     *
     * @default 30
     */
    days?: number;
    /**
     * Minimum headcount, `2`-`10`, default `2`: independent buyers for `open_market` /
     * `holders_only` episodes, everyone who bought (`buyers_total`) for `plan_or_offering` ones,
     * where by construction fewer than two buyers are independent.
     *
     * @default 2
     */
    minBuyers?: number;
    /**
     * Drop episodes whose `total_usd` is below this. An episode with an unknown total
     * (`value_partial` with no priced fill) is kept, not dropped — a missing number is not a small
     * one.
     */
    minUsd?: number;
    /**
     * `open_market` (default), `plan_or_offering`, `holders_only`, or `all`. Insiders taking a $70M
     * IPO allocation is an event too; it is labeled, not hidden, when you ask for it.
     *
     * @default Pattern1.OpenMarket
     */
    pattern?: Pattern1;
    /**
     * One ticker. A renamed company's current ticker also matches episodes tagged with its former
     * ticker, and share-class siblings (GOOGL / GOOG) match each other. A delisted ticker still
     * returns its episodes when named explicitly; the unfiltered list shows active listings only.
     * `ticker` is accepted as an alias.
     */
    symbol?: string;
    /**
     * `recent` (default) — newest `known_at` first; `buyers` — most independent buyers first, ties
     * by value; `value` — largest `total_usd` first, unknown totals last. Cursors are
     * sort-specific.
     *
     * @default Sort3.Recent
     */
    sort?: Sort3;
    /**
     * Opaque cursor from a prior response's `next_cursor`, with the same `sort`. Omit for the first
     * page.
     */
    cursor?: string;
    /**
     * Items per page, default `10`; `1`-`20` on every tier, `21`-`50` with a Pro key. `limit` is
     * accepted as an alias.
     *
     * @default 10
     */
    pageSize?: number;
  };

  export const getApiNewsInsiderClustersRequestSchema: Schema<GetApiNewsInsiderClustersRequest> =
    s.lazySchema(() =>
      s.object<GetApiNewsInsiderClustersRequest>({
        days: s.defaulted(s.int().check(s.gte(1), s.lte(90)), 30),
        minBuyers: s.defaulted(s.int().check(s.gte(2), s.lte(10)), 2),
        minUsd: s.optional(s.int().check(s.gte(0))),
        pattern: s.defaulted(pattern1Schema, Pattern1.OpenMarket),
        symbol: s.optional(s.string()),
        sort: s.defaulted(sort3Schema, Sort3.Recent),
        cursor: s.optional(s.string()),
        pageSize: s.defaulted(s.int().check(s.gte(1), s.lte(50)), 10),
      }),
    );

  export class GetApiNewsInsiderClustersError extends ApiError {
    declare readonly payload:
      | Declared<"error400", undefined>
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"error3", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetApiNewsInsiderClustersError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 403, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 429, kind: "error3", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type GetApiNewsMacroRequest = {
    /** Opaque cursor from a prior response's `next_cursor`. Omit for the newest page. */
    cursor?: string;
    /**
     * Narrow to a subset of the macro categories, comma-separated. Values outside
     * `macro_economy`/`commodities`/`geopolitics` return 400 (the full category filter lives on
     * `/api/news/`).
     */
    category?: string;
    /**
     * Override the default ≥4 threshold. On release days the release itself scores 7-9, so
     * `min_relevance=7` keeps roughly "the events" and drops the commentary.
     *
     * @default 4
     */
    minRelevance?: number;
    /**
     * Items per page, default `10`. Any value from `1` to `20` is accepted on every tier; `21`-`50`
     * requires a Pro key. A value outside `1`-`50`, or an over-`20` page without a Pro key, returns
     * 400. `limit` is accepted as an alias.
     *
     * @default 10
     */
    pageSize?: number;
    /**
     * `published` (default) is the reverse-chronological feed. `ingested` is delta-polling mode,
     * with the same contract as on `/api/news/`. Cursors are mode-specific: a cursor is only valid
     * with the sort mode that issued it (a mismatch returns 400).
     *
     * @default Sort1.Published
     */
    sort?: Sort1;
    /**
     * Inclusive lower bound on `time_published`, exactly as on `/api/news/`: ISO-8601, a value
     * without a timezone is read as UTC, a bare date (`2026-09-16`) means that day's midnight.
     * "What did the tape say after the decision" is `from_date=<decision day>` plus
     * `min_relevance=7`. Subject to your plan's archive horizon (403 on the first page, see the
     * `403` response) and refused with `sort=ingested` (400).
     */
    fromDate?: Date;
    /**
     * Inclusive upper bound on `time_published`, same format as `from_date`. A bare date covers the
     * WHOLE day, so `from_date=2026-09-16&to_date=2026-09-16` returns that day. `from_date` later
     * than `to_date` returns 400.
     */
    toDate?: Date;
  };

  export const getApiNewsMacroRequestSchema: Schema<GetApiNewsMacroRequest> = s.lazySchema(() =>
    s.object<GetApiNewsMacroRequest>({
      cursor: s.optional(s.string()),
      category: s.optional(s.string()),
      minRelevance: s.defaulted(s.int().check(s.gte(1), s.lte(10)), 4),
      pageSize: s.defaulted(s.int().check(s.gte(1), s.lte(50)), 10),
      sort: s.defaulted(sort1Schema, Sort1.Published),
      fromDate: s.optional(s.dateTime()),
      toDate: s.optional(s.dateTime()),
    }),
  );

  export class GetApiNewsMacroError extends ApiError {
    declare readonly payload:
      | Declared<"error400", undefined>
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"error3", Error>
      | Declared<"error4", Error>
      | Declared<"error5", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetApiNewsMacroError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 403, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 429, kind: "error3", decode: { kind: "json", schema: errorSchema } },
      { on: 409, kind: "error4", decode: { kind: "json", schema: errorSchema } },
      { on: 503, kind: "error5", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type GetApiNewsSearchRequest = {
    /**
     * The words to search for, 2 to 200 characters (syntax above). `query` is accepted as an alias.
     */
    q: string;
    /**
     * Opaque cursor from a prior response's `next_cursor`; only valid with the `q` that issued it.
     */
    cursor?: string;
    /** Hard ticker filter, same forms and expansions as on `/api/news/` (`ticker` is an alias). */
    symbol?: string;
    /** Hard category filter — single value, CSV or repeated, OR-matched. */
    category?: NewsCategory[];
    /**
     * Keep only rows ingested from these sources, same values and forms as on `/api/news/`: `gdelt`
     * (press coverage), `sec_form4`, `sec_form8k`, `sec_form6k`. Single, CSV or repeated,
     * OR-matched. Unknown values return 400.
     */
    sourceType?: SourceType[];
    /**
     * 8-K item code, e.g. `5.02`: only 8-K filings carrying that item (any item of the filing).
     * Implies `source_type=sec_form8k`; next to any other `source_type` it returns 400.
     */
    item?: string;
    /** Override the default ≥4 threshold. @default 4 */
    minRelevance?: number;
    /**
     * Items per page, default `10`; `1`-`20` on every tier, up to `50` on a Pro key (`limit` is an
     * alias).
     *
     * @default 10
     */
    pageSize?: number;
    /**
     * `story` collapses coverage of one event to its best-ranked article, with `story_id`,
     * `sources_count` and `sources` on each item.
     */
    collapse?: Collapse;
    /**
     * Boolean alias: `true` is equivalent to `collapse=story`; `false` leaves articles ungrouped.
     * Send either spelling, not both (400).
     *
     * @default false
     */
    collapseStories?: boolean;
    /**
     * Inclusive lower bound on `time_published` (ISO-8601, UTC when naive; a bare date is that
     * day's midnight). Past your archive horizon → 403.
     */
    fromDate?: Date;
    /** Inclusive upper bound on `time_published`; a bare date covers its whole day. */
    toDate?: Date;
  };

  export const getApiNewsSearchRequestSchema: Schema<GetApiNewsSearchRequest> = s.lazySchema(() =>
    s.object<GetApiNewsSearchRequest>({
      q: s.string().check(s.minLength(2), s.maxLength(200)),
      cursor: s.optional(s.string()),
      symbol: s.optional(s.string()),
      category: s.optional(s.array(s.lazy(() => newsCategorySchema))),
      sourceType: s.optional(s.array(s.lazy(() => sourceTypeSchema))),
      item: s.optional(s.string().check(s.pattern("^\\d\\.\\d{2}$"))),
      minRelevance: s.defaulted(s.int().check(s.gte(1), s.lte(10)), 4),
      pageSize: s.defaulted(s.int().check(s.gte(1), s.lte(50)), 10),
      collapse: s.optional(s.lazy(() => collapseSchema)),
      collapseStories: s.defaulted(s.boolean(), false),
      fromDate: s.optional(s.dateTime()),
      toDate: s.optional(s.dateTime()),
    }),
  );

  export class GetApiNewsSearchError extends ApiError {
    declare readonly payload:
      | Declared<"error400", undefined>
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"error3", Error>
      | Declared<"apiNewsSearch503Error1", ApiNewsSearch503Error1>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetApiNewsSearchError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 401, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 403, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 429, kind: "error3", decode: { kind: "json", schema: errorSchema } },
      {
        on: 503,
        kind: "apiNewsSearch503Error1",
        decode: { kind: "json", schema: apiNewsSearch503Error1Schema },
      },
    ];
  }

  export class GetApiNewsTrendingError extends ApiError {
    declare readonly payload: Declared<"error", Error> | Declared<"error2", Error> | Undeclared;

    static readonly errors: ErrorDecoders<GetApiNewsTrendingError> = [
      { on: 401, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 429, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }
}
