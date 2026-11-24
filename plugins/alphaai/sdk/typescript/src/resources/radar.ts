import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { Market, marketSchema } from "../models/market.js";
import { Order, orderSchema } from "../models/order.js";
import { Scope, scopeSchema } from "../models/scope.js";
import {
  SentimentAlphAiRestRadarApi,
  sentimentAlphAiRestRadarApiSchema,
} from "../models/sentiment-alph-ai-rest-radar-api.js";
import { snapshotPreviewDtoSchema, type SnapshotPreviewDto } from "../models/snapshot-preview-dto.js";
import {
  SortAlphAiRestRadarApi,
  sortAlphAiRestRadarApiSchema,
} from "../models/sort-alph-ai-rest-radar-api.js";
import { minZInternalSchema, minZSchema, type MinZ } from "../models/unions/min-z.js";
import { Window, windowSchema } from "../models/window.js";
import type { Servers } from "../servers.js";

/**
 * Descriptive news activity and supporting headlines.
 */
export class Radar {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Rank market or saved-watchlist news activity
   *
   * @remarks
   * Descriptive news-activity ranking. Free delay 3600 seconds; Basic 900 seconds; Pro no added
   * delay. Tier and watchlist owner come from authentication, never query parameters. The public
   * API requires a Bearer API key and uses the normal request quotas. The whole snapshot, including
   * supporting headlines and company names, is selected at or before wall-clock time minus the tier
   * delay. Snapshots refresh every minute and are retained for three hours. Collection and
   * enrichment add processing time. preview_reference_at is null in live mode; a frozen development
   * preview uses that historical clock instead and explicitly reports
   * freshness.mode=historical_preview. as_of is the actual selected cutoff. Only tickers with
   * current-window news appear. snapshot_id identifies immutable content including public evidence
   * metadata. freshness states the effective delay, generation time, source check time and latest
   * enrichment observed. Missing history or a producer more than four minutes behind returns 503,
   * never newer data in place of a delayed snapshot. watchlist_coverage separates known quiet names
   * from names absent from the snapshot; absent does not mean an invalid symbol. Summary is scoped
   * before search/ticker/sentiment/min_z filters and pagination; universe describes the entire
   * stored snapshot. Null metrics stay null. Collection coverage is unverified; these calculations
   * are not point-in-time backtests or confirmed alerts. Historical corrections can affect the
   * model baseline. All responses: private, no-store. event_context reports separate SEC/insider
   * availability, cutoff, generation time, age_seconds at the numeric cutoff (not HTTP time), and
   * lookback windows. results[].event_context contains only that row's issuer-CIK context: up to 3
   * recent 8-K/6-K filings over 7 days by filed_at and up to 3 open-market insider clusters over 30
   * days by known_at (the latest SEC filing time). Counts cover all eligible records; arrays
   * contain the newest records. Each cluster includes up to 5 SEC evidence links, filings_count and
   * evidence_truncated. 6-K coverage is selected ingested earnings releases only. Filings also
   * carry news_uid, news_title, news_published and has_article for AlphAI article links.
   * has_article means enrichment existed before the context cutoff; older snapshots default to
   * false with null title/publication metadata. SEC URLs remain available as sec_url. Share classes
   * with the same CIK share context, without changing news counts, scores, filters, ranking or row
   * eligibility. No USD totals are reported. Context and its evidence follow the same tier delay
   * and cursor; later corrections appear only in new snapshots. Context older than
   * max_age_seconds=300 at the numeric cutoff is unavailable. Missing, disabled, stale or failed
   * context does not fail news readings. Unavailable context has null row context; a row also has
   * null context when it is absent from the context snapshot. Unsupported or unidentified issuers
   * have explicit row status/reason and null counts. Supported issuers with no eligible stored
   * records have zero counts. Available does not certify complete SEC coverage. Unknown or repeated
   * query parameters are rejected.
   *
   * @returns Eligible snapshot and effective access rules
   *
   * @throws {@link Radar.GetRadarSnapshotError} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link AlphaAiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getRadarSnapshot(
    request: Radar.GetRadarSnapshotRequest = {},
    options?: RequestOptions,
  ): ApiPromise<SnapshotPreviewDto, Radar.GetRadarSnapshotError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/signals/snapshot/"),
        auth: this.#auth.apiKey,
        pathParams: [],
        query: [
          { name: "window", value: request.window, schema: s.defaulted(windowSchema, Window._24H) },
          { name: "scope", value: request.scope, schema: s.defaulted(scopeSchema, Scope.Market) },
          { name: "market", value: request.market, schema: s.defaulted(marketSchema, Market.All) },
          { name: "ticker", value: request.ticker, schema: s.optional(s.string()) },
          { name: "tickers", value: request.tickers, schema: s.optional(s.string()) },
          { name: "search", value: request.search, schema: s.optional(s.string()) },
          {
            name: "sort",
            value: request.sort,
            schema: s.defaulted(sortAlphAiRestRadarApiSchema, SortAlphAiRestRadarApi.Score),
          },
          { name: "order", value: request.order, schema: s.defaulted(orderSchema, Order.Desc) },
          {
            name: "sentiment",
            value: request.sentiment,
            schema: s.defaulted(sentimentAlphAiRestRadarApiSchema, SentimentAlphAiRestRadarApi.All),
          },
          { name: "min_z", value: request.minZ, schema: s.optional(s.lazy(() => minZInternalSchema)) },
          { name: "limit", value: request.limit, schema: s.defaulted(s.int(), 50) },
          { name: "offset", value: request.offset, schema: s.defaulted(s.int(), 0) },
          { name: "cursor", value: request.cursor, schema: s.optional(s.string()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: snapshotPreviewDtoSchema },
        errorFactory: Radar.GetRadarSnapshotError,
      },
      options,
    );
  }
}

export namespace Radar {
  export type GetRadarSnapshotRequest = {
    /** Window ending at as_of, not at wall-clock now. @default Window._24H */
    window?: Window;
    /**
     * market scans all tickers without a tier ticker cap. watchlist requires authentication and
     * reads only the caller's existing saved symbols, matched exactly. An empty list returns no
     * results. Existing watchlist entitlements apply (default Free 10, Basic/Pro unlimited); no
     * separate Radar allowance.
     *
     * @default Scope.Market
     */
    scope?: Scope;
    /**
     * Filter within the selected scope; international includes all intl:* markets.
     *
     * @default Market.All
     */
    market?: Market;
    /** One exact ticker, case-insensitive. No alias expansion. Mutually exclusive with tickers. */
    ticker?: string;
    /**
     * Comma-separated exact symbols, case-insensitive. No tier ticker cap; request text is bounded
     * to 16384 characters. Applied within scope, so it never bypasses watchlist ownership.
     */
    tickers?: string;
    /**
     * Case-insensitive ticker substring for interactive search. Separate from exact ticker
     * selection.
     */
    search?: string;
    /**
     * score, stories (total), model_stories, sentiment or sentiment_change (current minus prior
     * window). Missing values last; ties use total story count then ticker.
     *
     * @default SortAlphAiRestRadarApi.Score
     */
    sort?: SortAlphAiRestRadarApi;
    /** asc or desc (default). Missing metrics always remain last. @default Order.Desc */
    order?: Order;
    /**
     * all, positive (>0.15), negative (<-0.15), mixed (inclusive -0.15 through 0.15). Null metrics
     * match only all.
     *
     * @default SentimentAlphAiRestRadarApi.All
     */
    sentiment?: SentimentAlphAiRestRadarApi;
    /** Minimum descriptive activity score, not a confirmed candidate filter. */
    minZ?: MinZ;
    /**
     * Page size only, never a tier ticker cap. Follow next_cursor with the same filters and page
     * size.
     *
     * @default 50
     */
    limit?: number;
    /**
     * Legacy zero-based pagination without snapshot pinning. Prefer cursor; cannot combine a
     * nonzero offset with cursor.
     *
     * @default 0
     */
    offset?: number;
    /**
     * Opaque signed next_cursor or previous_cursor. Pins the complete snapshot, filters, tier and
     * watchlist membership/owner. A changed context, removed snapshot or replaced content returns
     * 409; restart without cursor. Never edit the token.
     */
    cursor?: string;
  };

  export const getRadarSnapshotRequestSchema: Schema<GetRadarSnapshotRequest> = s.lazySchema(() =>
    s.object<GetRadarSnapshotRequest>({
      window: s.defaulted(windowSchema, Window._24H),
      scope: s.defaulted(scopeSchema, Scope.Market),
      market: s.defaulted(marketSchema, Market.All),
      ticker: s.optional(s.string().check(s.maxLength(32))),
      tickers: s.optional(s.string().check(s.maxLength(16384))),
      search: s.optional(s.string().check(s.maxLength(32))),
      sort: s.defaulted(sortAlphAiRestRadarApiSchema, SortAlphAiRestRadarApi.Score),
      order: s.defaulted(orderSchema, Order.Desc),
      sentiment: s.defaulted(sentimentAlphAiRestRadarApiSchema, SentimentAlphAiRestRadarApi.All),
      minZ: s.optional(s.lazy(() => minZSchema)),
      limit: s.defaulted(s.int().check(s.gte(1), s.lte(100)), 50),
      offset: s.defaulted(s.int().check(s.gte(0)), 0),
      cursor: s.optional(s.string().check(s.maxLength(4096))),
    }),
  );

  export class GetRadarSnapshotError extends ApiError {
    declare readonly payload:
      | Declared<"error400", undefined>
      | Declared<"error401", undefined>
      | Declared<"error404", undefined>
      | Declared<"error409", undefined>
      | Declared<"error503", undefined>
      | Declared<"error429", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetRadarSnapshotError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 401, kind: "error401", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 409, kind: "error409", decode: { kind: "empty" } },
      { on: 503, kind: "error503", decode: { kind: "empty" } },
      { on: 429, kind: "error429", decode: { kind: "empty" } },
    ];
  }
}
