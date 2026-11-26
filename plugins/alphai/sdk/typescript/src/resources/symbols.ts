import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { errorSchema, type Error } from "../models/error.js";
import {
  latestEarningsPointerSchema,
  type LatestEarningsPointer,
} from "../models/latest-earnings-pointer.js";
import { sectorSymbolsInternalSchema, type SectorSymbols } from "../models/sector-symbols.js";
import { Side1, side1Schema } from "../models/side1.js";
import { symbolDirectorySchema, type SymbolDirectory } from "../models/symbol-directory.js";
import { symbolPeersSchema, type SymbolPeers } from "../models/symbol-peers.js";
import { symbolInternalSchema, type Symbol } from "../models/symbol.js";
import {
  tickerEarningsHistorySchema,
  type TickerEarningsHistory,
} from "../models/ticker-earnings-history.js";
import {
  tickerInsiderSummaryInternalSchema,
  type TickerInsiderSummary,
} from "../models/ticker-insider-summary.js";
import {
  tickerInsiderTradesInternalSchema,
  type TickerInsiderTrades,
} from "../models/ticker-insider-trades.js";
import {
  tickerSentimentSummarySchema,
  type TickerSentimentSummary,
} from "../models/ticker-sentiment-summary.js";
import type { Servers } from "../servers.js";

/**
 * Active equity, crypto, and foreign symbols (tickers).
 */
export class Symbols {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * List active tickers
   *
   * @remarks
   * All active symbols (US equities, US exchange-traded funds, crypto, and foreign listings),
   * alphabetical by ticker. ~16k entries — cache aggressively, or slice with the optional
   * `limit`/`offset` params (the response stays a bare array either way). Pass `search` to resolve
   * a name, brand or ticker prefix to its canonical symbol (`search=bitcoin` returns `BTC-USD`,
   * `search=spacex` returns `SPCX`).
   *
   * @returns List of active symbols.
   *
   * @throws {@link Symbols.GetApiSymbolsError} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link AlphAiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getApiSymbols(
    request: Symbols.GetApiSymbolsRequest = {},
    options?: RequestOptions,
  ): ApiPromise<Symbol[], Symbols.GetApiSymbolsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/symbols/"),
        auth: this.#auth.apiKey,
        pathParams: [],
        query: [
          { name: "limit", value: request.limit, schema: s.optional(s.int()) },
          { name: "offset", value: request.offset, schema: s.defaulted(s.int(), 0) },
          { name: "search", value: request.search, schema: s.optional(s.string()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => symbolInternalSchema)) },
        errorFactory: Symbols.GetApiSymbolsError,
      },
      options,
    );
  }

  /**
   * Symbol detail
   *
   * @returns Symbol with extended metadata. Resolves delisted symbols too: check `status`, and
   * `renamed_to` for the successor ticker when the company continues under a new symbol.
   *
   * @throws {@link Symbols.GetApiSymbolsByTickerError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link AlphAiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getApiSymbolsByTicker(
    request: Symbols.GetApiSymbolsByTickerRequest,
    options?: RequestOptions,
  ): ApiPromise<Symbol, Symbols.GetApiSymbolsByTickerError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/symbols/{ticker}/"),
        auth: this.#auth.apiKey,
        pathParams: [{ name: "ticker", value: request.ticker, schema: s.string() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: symbolInternalSchema },
        errorFactory: Symbols.GetApiSymbolsByTickerError,
      },
      options,
    );
  }

  /**
   * AlphAI earnings reads for one ticker, plus its next report date
   *
   * @remarks
   * Every published AlphAI earnings read for the ticker, newest first, and the date of its next
   * report when the company has confirmed one.
   *
   * A read is produced from the company's own SEC filing — an 8-K item 2.02 for US filers, a 6-K
   * earnings release for foreign private issuers — within minutes of it reaching EDGAR, and every
   * number in it is verified against the filing text before publication. `/earnings/latest/`
   * returns just a pointer to the newest one; this endpoint returns the analyses themselves.
   *
   * Bridges share classes: a request for one class returns the reads filed under the issuer's
   * primary class, and each row's `ticker` names the class it was actually filed under, which may
   * differ from the one you asked for.
   *
   * Unpaginated and capped at 20 reads. Depth is currently shallow by construction — AlphAI's reads
   * exist for filings from late July 2026 onward and reports arrive quarterly — so most tickers
   * carry one or two.
   *
   * @returns The ticker's earnings reads. An empty `reports` array is a normal answer, not an
   * error: it means no read has been published yet.
   *
   * @throws {@link Symbols.GetApiSymbolsByTickerEarningsError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link AlphAiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getApiSymbolsByTickerEarnings(
    request: Symbols.GetApiSymbolsByTickerEarningsRequest,
    options?: RequestOptions,
  ): ApiPromise<TickerEarningsHistory, Symbols.GetApiSymbolsByTickerEarningsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/symbols/{ticker}/earnings/"),
        auth: this.#auth.apiKey,
        pathParams: [{ name: "ticker", value: request.ticker, schema: s.string() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: tickerEarningsHistorySchema },
        errorFactory: Symbols.GetApiSymbolsByTickerEarningsError,
      },
      options,
    );
  }

  /**
   * Most recent AlphAI earnings read for one ticker
   *
   * @remarks
   * A pointer to the ticker's most recent published earnings read (SEC 8-K item 2.02, or a foreign
   * private issuer's 6-K earnings release). Resolve the full analysis via `/api/news/{uid}/`, whose
   * `earnings` object carries it. Bridges share classes: a request for one class returns the read
   * filed under the issuer's primary class.
   *
   * @returns The ticker's most recent earnings read pointer.
   *
   * @throws {@link Symbols.GetApiSymbolsByTickerEarningsLatestError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link AlphAiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getApiSymbolsByTickerEarningsLatest(
    request: Symbols.GetApiSymbolsByTickerEarningsLatestRequest,
    options?: RequestOptions,
  ): ApiPromise<LatestEarningsPointer, Symbols.GetApiSymbolsByTickerEarningsLatestError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/symbols/{ticker}/earnings/latest/"),
        auth: this.#auth.apiKey,
        pathParams: [{ name: "ticker", value: request.ticker, schema: s.string() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: latestEarningsPointerSchema },
        errorFactory: Symbols.GetApiSymbolsByTickerEarningsLatestError,
      },
      options,
    );
  }

  /**
   * 30-day insider-transaction rollup for one ticker
   *
   * @remarks
   * Aggregated SEC Form 4 activity over the trailing 30 days: buy/sell transaction counts, dollar
   * volumes, the share of transactions executed under pre-arranged 10b5-1 plans, and the most
   * active insiders ranked by absolute net value (buys minus sells).
   *
   * @returns Insider activity stats for the window. Zeros mean no filings in the window for a real
   * listing; a ticker no symbol owns returns 404 instead.
   *
   * @throws {@link Symbols.GetApiSymbolsByTickerInsiderSummaryError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link AlphAiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getApiSymbolsByTickerInsiderSummary(
    request: Symbols.GetApiSymbolsByTickerInsiderSummaryRequest,
    options?: RequestOptions,
  ): ApiPromise<TickerInsiderSummary, Symbols.GetApiSymbolsByTickerInsiderSummaryError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/symbols/{ticker}/insider-summary/"),
        auth: this.#auth.apiKey,
        pathParams: [{ name: "ticker", value: request.ticker, schema: s.string() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: tickerInsiderSummaryInternalSchema },
        errorFactory: Symbols.GetApiSymbolsByTickerInsiderSummaryError,
      },
      options,
    );
  }

  /**
   * Form 4 event history and chart aggregates for one ticker
   *
   * @remarks
   * The complete per-ticker insider-trading payload behind alphai.io/stock/{ticker}/insider-trades:
   * the paginated Form 4 event history plus everything a chart needs, in one request. One event is
   * a filing's whole tranche group (shares summed, the price value-weighted, a 10b5-1 ladder is ONE
   * event), same folding as the feed's `insider` block.
   *
   * The first page (no `cursor`) also carries the aggregates: `summary` (3-month, 12-month and
   * all-time windows plus the most active insiders of the last 12 months), `series` (monthly
   * buckets) and `series_weekly` (Monday-keyed weekly buckets), both zero-filled up to the current
   * period and capped to the trailing 12 months, and `chart_events` — every event of the trailing
   * 12 months regardless of pagination. The aggregates always cover both sides regardless of the
   * `side` filter, and they are `null` on cursor pages, which carry only the next `events` chunk.
   *
   * Side semantics on this surface follow the value flow: code P is `buy`; codes S and D are both
   * `sell`, because a code D sale back to the issuer moves dollars off the insider's position like
   * any sale. This deliberately differs from the feed's `insider.side`, which labels D as `other`;
   * use `transaction_code` to tell a market sale (S) from a sale to the issuer (D).
   *
   * @returns One page of the event history. Empty arrays mean no recorded filings for a real
   * listing; a ticker no symbol owns returns 404 instead.
   *
   * @throws {@link Symbols.GetApiSymbolsByTickerInsiderTradesError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link AlphAiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getApiSymbolsByTickerInsiderTrades(
    request: Symbols.GetApiSymbolsByTickerInsiderTradesRequest,
    options?: RequestOptions,
  ): ApiPromise<TickerInsiderTrades, Symbols.GetApiSymbolsByTickerInsiderTradesError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/symbols/{ticker}/insider-trades/"),
        auth: this.#auth.apiKey,
        pathParams: [{ name: "ticker", value: request.ticker, schema: s.string() }],
        query: [
          { name: "side", value: request.side, schema: s.defaulted(side1Schema, Side1.All) },
          { name: "cursor", value: request.cursor, schema: s.optional(s.string()) },
          { name: "page_size", value: request.pageSize, schema: s.defaulted(s.int(), 20) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: tickerInsiderTradesInternalSchema },
        errorFactory: Symbols.GetApiSymbolsByTickerInsiderTradesError,
      },
      options,
    );
  }

  /**
   * Related tickers for one ticker
   *
   * @remarks
   * Other companies in the same industry (widening to the broader sector when the industry is thin)
   * that carry recent enriched news, most recently covered first. Powers the "Related tickers"
   * links on the stock hub pages.
   *
   * @returns Up to ten related tickers. A well-formed but unknown ticker, or one with no peers
   * carrying recent news, returns an empty list.
   *
   * @throws {@link Symbols.GetApiSymbolsByTickerPeersError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link AlphAiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getApiSymbolsByTickerPeers(
    request: Symbols.GetApiSymbolsByTickerPeersRequest,
    options?: RequestOptions,
  ): ApiPromise<SymbolPeers, Symbols.GetApiSymbolsByTickerPeersError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/symbols/{ticker}/peers/"),
        auth: this.#auth.apiKey,
        pathParams: [{ name: "ticker", value: request.ticker, schema: s.string() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: symbolPeersSchema },
        errorFactory: Symbols.GetApiSymbolsByTickerPeersError,
      },
      options,
    );
  }

  /**
   * 7-day AI sentiment rollup for one ticker
   *
   * @remarks
   * Counts of bullish / neutral / bearish per-ticker sentiment calls from the enriched news flow,
   * plus per-day buckets. The window is the last 7 UTC calendar days, today included (today is
   * partial): `daily` holds one bucket per day, and `bullish`, `neutral`, `bearish` and `total` are
   * the sums of those buckets. Insider (SEC Form 4) template rows are excluded — this reflects
   * press coverage, not filings.
   *
   * @returns Sentiment counts for the window. Zeros mean a quiet week for a real listing; a ticker
   * no symbol owns returns 404 instead.
   *
   * @throws {@link Symbols.GetApiSymbolsByTickerSentimentSummaryError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link AlphAiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getApiSymbolsByTickerSentimentSummary(
    request: Symbols.GetApiSymbolsByTickerSentimentSummaryRequest,
    options?: RequestOptions,
  ): ApiPromise<TickerSentimentSummary, Symbols.GetApiSymbolsByTickerSentimentSummaryError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/symbols/{ticker}/sentiment-summary/"),
        auth: this.#auth.apiKey,
        pathParams: [{ name: "ticker", value: request.ticker, schema: s.string() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: tickerSentimentSummarySchema },
        errorFactory: Symbols.GetApiSymbolsByTickerSentimentSummaryError,
      },
      options,
    );
  }

  /**
   * Stock directory — most-covered tickers and sector cards
   *
   * @remarks
   * The hub index behind /stocks: the globally most-covered tickers over the trailing window, plus
   * one card per sector (size + its busiest names). Ranked by recent enriched-news coverage.
   *
   * @returns Most-active tickers and sector cards.
   *
   * @throws {@link Symbols.GetApiSymbolsDirectoryError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link AlphAiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getApiSymbolsDirectory(
    options?: RequestOptions,
  ): ApiPromise<SymbolDirectory, Symbols.GetApiSymbolsDirectoryError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/symbols/directory/"),
        auth: this.#auth.apiKey,
        pathParams: [],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: symbolDirectorySchema },
        errorFactory: Symbols.GetApiSymbolsDirectoryError,
      },
      options,
    );
  }

  /**
   * One sector's most-covered tickers
   *
   * @remarks
   * The tickers in a sector (by slug, e.g. `financial-services`), ranked by recent enriched-news
   * coverage. Powers the /stocks/{slug} sub-pages. Returns up to 500 index-eligible tickers per
   * page, ordered by coverage descending then ticker. Increment `page` while `has_next` is true.
   * `count` is the number on this page; `total_count` is the whole sector. A page beyond the end
   * returns an empty `symbols` array and `has_next: false`. Rankings refresh periodically; this is
   * a live directory, not a historical snapshot.
   *
   * @returns The sector and its most-covered tickers.
   *
   * @throws {@link Symbols.GetApiSymbolsSectorsBySlugError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link AlphAiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getApiSymbolsSectorsBySlug(
    request: Symbols.GetApiSymbolsSectorsBySlugRequest,
    options?: RequestOptions,
  ): ApiPromise<SectorSymbols, Symbols.GetApiSymbolsSectorsBySlugError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/symbols/sectors/{slug}/"),
        auth: this.#auth.apiKey,
        pathParams: [{ name: "slug", value: request.slug, schema: s.string() }],
        query: [{ name: "page", value: request.page, schema: s.defaulted(s.int(), 1) }],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: sectorSymbolsInternalSchema },
        errorFactory: Symbols.GetApiSymbolsSectorsBySlugError,
      },
      options,
    );
  }
}

export namespace Symbols {
  export type GetApiSymbolsRequest = {
    /** Return at most this many symbols. Omit for the full list. */
    limit?: number;
    /** Skip this many symbols from the start of the list. @default 0 */
    offset?: number;
    /**
     * Resolve a query to matching symbols: ticker-prefix, company-name substring, or the company's
     * brand name where that differs from its registered name (`search=spacex` returns `SPCX`,
     * registered as SPACE EXPLORATION TECHNOLOGIES CORP). Case-insensitive; exact ticker, exact
     * name and brand matches rank above prefix and substring matches, and within the same level a
     * company ranks above a fund (`search=jpmorgan` lists `JPM` before `JEPI`). Useful for finding
     * the canonical form of a name (`search=bitcoin` returns `BTC-USD`).
     */
    search?: string;
  };

  export const getApiSymbolsRequestSchema: Schema<GetApiSymbolsRequest> = s.lazySchema(() =>
    s.object<GetApiSymbolsRequest>({
      limit: s.optional(s.int().check(s.gte(1), s.lte(10000))),
      offset: s.defaulted(s.int().check(s.gte(0)), 0),
      search: s.optional(s.string()),
    }),
  );

  export class GetApiSymbolsError extends ApiError {
    declare readonly payload:
      | Declared<"error400", undefined>
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetApiSymbolsError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 401, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 429, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type GetApiSymbolsByTickerRequest = {
    /**
     * Ticker symbol. US equities are bare (`AAPL`); cryptocurrencies use the `<SYM>-USD` form
     * (`BTC-USD`); foreign listings use the Yahoo suffix (`VOD.L`).
     */
    ticker: string;
  };

  export const getApiSymbolsByTickerRequestSchema: Schema<GetApiSymbolsByTickerRequest> = s.lazySchema(() =>
    s.object<GetApiSymbolsByTickerRequest>({
      ticker: s.string().check(s.pattern("^[A-Z0-9][A-Z0-9.\\-]{0,19}$")),
    }),
  );

  export class GetApiSymbolsByTickerError extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"error3", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetApiSymbolsByTickerError> = [
      { on: 404, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 429, kind: "error3", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type GetApiSymbolsByTickerEarningsRequest = {
    /** Accepts the same ticker forms as the symbol detail endpoint. */
    ticker: string;
  };

  export const getApiSymbolsByTickerEarningsRequestSchema: Schema<GetApiSymbolsByTickerEarningsRequest> =
    s.lazySchema(() =>
      s.object<GetApiSymbolsByTickerEarningsRequest>({
        ticker: s.string().check(s.pattern("^[A-Z0-9][A-Z0-9.\\-]{0,19}$")),
      }),
    );

  export class GetApiSymbolsByTickerEarningsError extends ApiError {
    declare readonly payload:
      | Declared<"error400", undefined>
      | Declared<"error", Error>
      | Declared<"error404", undefined>
      | Declared<"error2", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetApiSymbolsByTickerEarningsError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 401, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 429, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type GetApiSymbolsByTickerEarningsLatestRequest = {
    /** Accepts the same ticker forms as the symbol detail endpoint. */
    ticker: string;
  };

  export const getApiSymbolsByTickerEarningsLatestRequestSchema: Schema<GetApiSymbolsByTickerEarningsLatestRequest> =
    s.lazySchema(() =>
      s.object<GetApiSymbolsByTickerEarningsLatestRequest>({
        ticker: s.string().check(s.pattern("^[A-Z0-9][A-Z0-9.\\-]{0,19}$")),
      }),
    );

  export class GetApiSymbolsByTickerEarningsLatestError extends ApiError {
    declare readonly payload:
      | Declared<"error400", undefined>
      | Declared<"error", Error>
      | Declared<"error404", undefined>
      | Declared<"error2", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetApiSymbolsByTickerEarningsLatestError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 401, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 429, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type GetApiSymbolsByTickerInsiderSummaryRequest = {
    /**
     * Accepts the same ticker forms as the symbol detail endpoint: bare crypto names resolve to
     * their `<SYM>-USD` listing, and delisted or renamed symbols stay addressable. Crypto and
     * foreign listings have no Form 4 flow, so they return zeros.
     */
    ticker: string;
  };

  export const getApiSymbolsByTickerInsiderSummaryRequestSchema: Schema<GetApiSymbolsByTickerInsiderSummaryRequest> =
    s.lazySchema(() =>
      s.object<GetApiSymbolsByTickerInsiderSummaryRequest>({
        ticker: s.string().check(s.pattern("^[A-Z0-9][A-Z0-9.\\-]{0,19}$")),
      }),
    );

  export class GetApiSymbolsByTickerInsiderSummaryError extends ApiError {
    declare readonly payload:
      | Declared<"error400", undefined>
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"error3", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetApiSymbolsByTickerInsiderSummaryError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 404, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 429, kind: "error3", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type GetApiSymbolsByTickerInsiderTradesRequest = {
    /**
     * Accepts the same ticker forms as the symbol detail endpoint: bare crypto names resolve to
     * their `<SYM>-USD` listing, and delisted or renamed symbols stay addressable. Crypto and
     * foreign listings have no Form 4 flow, so they return empty history.
     */
    ticker: string;
    /**
     * Filters the paginated `events` list only; the first page's aggregates always cover both
     * sides.
     *
     * @default Side1.All
     */
    side?: Side1;
    /**
     * Opaque keyset cursor from a prior response's `next_cursor`. Omit it for the newest page, the
     * only one carrying the aggregates.
     */
    cursor?: string;
    /**
     * Events per page. Not tier-gated: every tier may request up to 200, so one request can load a
     * chart's whole working set. `limit` is accepted as an alias.
     *
     * @default 20
     */
    pageSize?: number;
  };

  export const getApiSymbolsByTickerInsiderTradesRequestSchema: Schema<GetApiSymbolsByTickerInsiderTradesRequest> =
    s.lazySchema(() =>
      s.object<GetApiSymbolsByTickerInsiderTradesRequest>({
        ticker: s.string().check(s.pattern("^[A-Z0-9][A-Z0-9.\\-]{0,19}$")),
        side: s.defaulted(side1Schema, Side1.All),
        cursor: s.optional(s.string()),
        pageSize: s.defaulted(s.int().check(s.gte(1), s.lte(200)), 20),
      }),
    );

  export class GetApiSymbolsByTickerInsiderTradesError extends ApiError {
    declare readonly payload:
      | Declared<"error400", undefined>
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"error3", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetApiSymbolsByTickerInsiderTradesError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 404, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 429, kind: "error3", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type GetApiSymbolsByTickerPeersRequest = {
    ticker: string;
  };

  export const getApiSymbolsByTickerPeersRequestSchema: Schema<GetApiSymbolsByTickerPeersRequest> =
    s.lazySchema(() =>
      s.object<GetApiSymbolsByTickerPeersRequest>({
        ticker: s.string().check(s.pattern("^[A-Z0-9][A-Z0-9.\\-]{0,19}$")),
      }),
    );

  export class GetApiSymbolsByTickerPeersError extends ApiError {
    declare readonly payload:
      | Declared<"error400", undefined>
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetApiSymbolsByTickerPeersError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 401, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 429, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type GetApiSymbolsByTickerSentimentSummaryRequest = {
    /**
     * Accepts the same ticker forms as the symbol detail endpoint: bare crypto names resolve to
     * their `<SYM>-USD` listing (`DOGE` → `DOGE-USD`; the response echoes the resolved ticker), and
     * delisted or renamed symbols stay addressable.
     */
    ticker: string;
  };

  export const getApiSymbolsByTickerSentimentSummaryRequestSchema: Schema<GetApiSymbolsByTickerSentimentSummaryRequest> =
    s.lazySchema(() =>
      s.object<GetApiSymbolsByTickerSentimentSummaryRequest>({
        ticker: s.string().check(s.pattern("^[A-Z0-9][A-Z0-9.\\-]{0,19}$")),
      }),
    );

  export class GetApiSymbolsByTickerSentimentSummaryError extends ApiError {
    declare readonly payload:
      | Declared<"error400", undefined>
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"error3", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetApiSymbolsByTickerSentimentSummaryError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 404, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 429, kind: "error3", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export class GetApiSymbolsDirectoryError extends ApiError {
    declare readonly payload: Declared<"error", Error> | Declared<"error2", Error> | Undeclared;

    static readonly errors: ErrorDecoders<GetApiSymbolsDirectoryError> = [
      { on: 401, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 429, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type GetApiSymbolsSectorsBySlugRequest = {
    slug: string;
    /** One-based sector page, 500 tickers per page. @default 1 */
    page?: number;
  };

  export const getApiSymbolsSectorsBySlugRequestSchema: Schema<GetApiSymbolsSectorsBySlugRequest> =
    s.lazySchema(() =>
      s.object<GetApiSymbolsSectorsBySlugRequest>({
        slug: s.string().check(s.pattern("^[a-z0-9-]+$")),
        page: s.defaulted(s.int().check(s.gte(1), s.lte(10000)), 1),
      }),
    );

  export class GetApiSymbolsSectorsBySlugError extends ApiError {
    declare readonly payload:
      | Declared<"error400", undefined>
      | Declared<"error404", undefined>
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetApiSymbolsSectorsBySlugError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 401, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 429, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }
}
