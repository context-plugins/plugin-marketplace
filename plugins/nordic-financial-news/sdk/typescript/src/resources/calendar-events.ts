import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import * as s from "../core/validation/index.js";
import {
  apiV1CalendarEventsResponseSchema,
  type ApiV1CalendarEventsResponse,
} from "../models/api-v1-calendar-events-response.js";
import {
  apiV1CalendarEventsResponse1Schema,
  type ApiV1CalendarEventsResponse1,
} from "../models/api-v1-calendar-events-response1.js";
import { eventType1Schema, type EventType1 } from "../models/event-type1.js";
import { problemDetailsSchema, type ProblemDetails } from "../models/problem-details.js";
import { status1Schema, type Status1 } from "../models/status1.js";
import type { Servers } from "../servers.js";

export class CalendarEvents {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * List Calendar Events
   *
   * @remarks
   * Returns a paginated list of scheduled Nordic financial calendar events: earnings reports (Q1 /
   * H1 / FY etc.), earnings calls, trading updates, AGMs/EGMs, capital markets days, conference
   * presentations, dividends, and M&A milestones (announcements, offer deadlines, completions).
   *
   * Each event is tied to a single company and is sorted by `scheduled_at` ascending (soonest
   * first). `scheduled_at` is always in UTC; for local-time display use the `local_time` field
   * (`scheduled_at` rendered in the issuer's `timezone`, ISO 8601 with offset). Prefer `local_time`
   * for the calendar date. A day-precision event is stored at local midnight, so its UTC
   * `scheduled_at` falls on the previous day for ahead-of-UTC (Nordic) zones. `title` and
   * `description` are always English regardless of the source-article language.
   *
   * ## Dividends
   * Each dividend row carries a nested `dividend` object with `ex_date`, `record_date`,
   * `payment_date`, `declaration_date`, and `kind`. `scheduled_at` follows the priority **ex-date >
   * record-date > payment-date**, whichever is explicitly stated, in that order. `dividend` is
   * `null` for non-dividend events.
   *
   * ## Default window
   * By default only upcoming events are returned, from today onward by the issuer's local date (so
   * events scheduled for today stay listed throughout the day). Pass `scheduled_after` or
   * `scheduled_before` to query a specific window. This also surfaces past events, which carry
   * `status: published` (events flip from `scheduled` to `published` ~2 days after their date). An
   * `updated_after` sync walk also lifts this floor, since sync must cover past events too.
   *
   * ## Status
   * List endpoints return `scheduled` + `published` events and **exclude `cancelled`** by default.
   * Pass the `status` parameter to filter (`status=cancelled` to retrieve cancellations, or
   * `scheduled`/`published` to narrow). Discarded events are never returned. Note: a `scheduled →
   * cancelled` transition is *not* surfaced by default `updated_after` polling. To track
   * cancellations, poll with `status=cancelled` or subscribe to cancellation alerts.
   *
   * ## Filtering
   * Compose `ticker`, `country`, `market`, `domicile`, `exchange`, `index`, `sector`, and
   * `event_type` to narrow the result set. All filters are intersected.
   *
   * ## Polling for updates
   * Use `updated_after` with the timestamp of your last completed sync to fetch only events that
   * have changed since. Results are then ordered by `updated_at` ascending and cursor-paginated:
   * follow `pagination.next_cursor`, resending the same `updated_after`, until it is null. Advance
   * your stored timestamp only once every page is drained. Incremental sync is not available on
   * plans with a capped calendar. `updated_after` returns 403 there, because the capped window is
   * recomputed per request and a change feed over it cannot be drained. The walk covers the full
   * served dataset, including past events, so a first sync from an old watermark returns history
   * rather than only upcoming events. Updates to past events that occurred before your currently
   * stored watermark are not replayed; reset the watermark (or start a fresh sync) to backfill
   * them.
   *
   * ## Pagination
   * List responses include `pagination.next_cursor` when more pages are available. Pass it back as
   * the `cursor` parameter on the next request. Cursors are opaque. Do not parse them.
   *
   * ## Caching
   * Requests with `updated_after` are not cached: they return `Cache-Control: no-cache, no-store`
   * and no `ETag`. Otherwise the `ETag` reflects the response as served, not only record
   * timestamps: it changes when plan limits alter the visible set, so a changed `ETag` does not
   * necessarily mean a record was updated.
   *
   * @returns Calendar events retrieved successfully
   *
   * @throws {@link CalendarEvents.GetApiV1CalendarEventsError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link NordicFinancialNewsError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  getApiV1CalendarEvents(
    request: CalendarEvents.GetApiV1CalendarEventsRequest = {},
    options?: RequestOptions,
  ): ApiPromise<ApiV1CalendarEventsResponse, CalendarEvents.GetApiV1CalendarEventsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/v1/calendar_events"),
        auth: this.#auth.bearerAuth,
        pathParams: [],
        query: [
          { name: "limit", value: request.limit, schema: s.optional(s.int()) },
          { name: "cursor", value: request.cursor, schema: s.optional(s.string()) },
          { name: "fields", value: request.fields, schema: s.optional(s.string()) },
          { name: "updated_after", value: request.updatedAfter, schema: s.optional(s.string()) },
          { name: "ticker", value: request.ticker, schema: s.optional(s.string()) },
          { name: "company", value: request.company, schema: s.optional(s.string()) },
          { name: "country", value: request.country, schema: s.optional(s.string()) },
          { name: "market", value: request.market, schema: s.optional(s.string()) },
          { name: "domicile", value: request.domicile, schema: s.optional(s.string()) },
          { name: "exchange", value: request.exchange, schema: s.optional(s.string()) },
          { name: "index", value: request.index, schema: s.optional(s.string()) },
          { name: "sector", value: request.sector, schema: s.optional(s.string()) },
          {
            name: "event_type",
            value: request.eventType,
            schema: s.optional(s.lazy(() => eventType1Schema)),
          },
          { name: "status", value: request.status, schema: s.optional(s.lazy(() => status1Schema)) },
          { name: "scheduled_after", value: request.scheduledAfter, schema: s.optional(s.string()) },
          { name: "scheduled_before", value: request.scheduledBefore, schema: s.optional(s.string()) },
          { name: "watchlist", value: request.watchlist, schema: s.optional(s.string()) },
        ],
        headers: [
          { name: "If-None-Match", value: request.ifNoneMatch, schema: s.optional(s.string()) },
          { name: "If-Modified-Since", value: request.ifModifiedSince, schema: s.optional(s.string()) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: apiV1CalendarEventsResponseSchema },
        errorFactory: CalendarEvents.GetApiV1CalendarEventsError,
      },
      options,
    );
  }

  /**
   * Get Calendar Event
   *
   * @remarks
   * Fetches a single scheduled calendar event by ID. Cancelled or discarded events return 404.
   *
   * On plans with a capped calendar, only events inside your plan's window are readable; anything
   * outside it returns 403.
   *
   * Responses are cached with `ETag` and `Last-Modified` headers and a `private, max-age=300`
   * `Cache-Control`; clients can send `If-None-Match` or `If-Modified-Since` to receive a `304 Not
   * Modified`.
   *
   * @returns Calendar event retrieved
   *
   * @throws {@link CalendarEvents.GetApiV1CalendarEventsByIdError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link NordicFinancialNewsError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  getApiV1CalendarEventsById(
    request: CalendarEvents.GetApiV1CalendarEventsByIdRequest,
    options?: RequestOptions,
  ): ApiPromise<ApiV1CalendarEventsResponse1, CalendarEvents.GetApiV1CalendarEventsByIdError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/v1/calendar_events/{id}"),
        auth: this.#auth.bearerAuth,
        pathParams: [{ name: "id", value: request.id, schema: s.string() }],
        query: [],
        headers: [
          { name: "If-None-Match", value: request.ifNoneMatch, schema: s.optional(s.string()) },
          { name: "If-Modified-Since", value: request.ifModifiedSince, schema: s.optional(s.string()) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: apiV1CalendarEventsResponse1Schema },
        errorFactory: CalendarEvents.GetApiV1CalendarEventsByIdError,
      },
      options,
    );
  }
}

export namespace CalendarEvents {
  export type GetApiV1CalendarEventsRequest = {
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
     * ISO 8601 datetime. Returns only events updated after this timestamp. Use for incremental
     * sync: store the timestamp of your last completed sync and pass it on the next request.
     * Results are ordered by `updated_at` ascending and cursor-paginated. Drain
     * `pagination.next_cursor` before advancing your stored timestamp. Passing this parameter also
     * disables the default upcoming-only floor, so past events with newer updates are included.
     */
    updatedAfter?: string;
    /**
     * Filter by company stock ticker (e.g. `VOLV-B`), comma-separated for several (matches any of
     * them). Also accepts exchange-suffixed form (e.g. `VOLV-B.ST`); former tickers resolve.
     * Matching is case-insensitive. Every value must resolve to a company, or the request is
     * rejected with `400` naming the unknown values. A company outside the calendar's Nordic
     * coverage resolves but returns no events. Combined with `company`, the two filters intersect.
     */
    ticker?: string;
    /**
     * Filter by company `id` (as returned by the companies endpoints), comma-separated for several
     * (matches any of them). Complements `ticker`; use this to reach companies without a stock
     * listing. Every value must resolve, or the request is rejected with `400` naming the unknown
     * ids. A company outside the calendar's Nordic coverage resolves but returns no events.
     * Combined with `ticker`, the two filters intersect.
     */
    company?: string;
    /**
     * Filter by country using ISO 3166-1 alpha-2 code (e.g. `SE`, `DK`, `NO`, `FI`, `IS`).
     * Comma-separated for multiple (e.g. `SE,NO`). Case-insensitive. This is the event's country:
     * the issuer's, with source-country fallback.
     */
    country?: string;
    /**
     * Filter to events for an issuer with an active equity listing in these countries' exchanges
     * (ISO 3166-1 alpha-2, comma-separated, e.g. `SE,NO`). `SE` covers Nasdaq Stockholm, First
     * North, Spotlight and NGM. Distinct from `country` (the event's own country) and `domicile`
     * (legal domicile). Includes foreign-domiciled but locally-listed issuers.
     */
    market?: string;
    /**
     * Filter to events for an issuer legally domiciled in these countries (ISO 3166-1 alpha-2,
     * comma-separated). Reaches unlisted companies; excludes foreign-domiciled but locally-listed
     * issuers. Use `market` for market-coverage questions.
     */
    domicile?: string;
    /**
     * Filter by exchange using ISO 10383 Market Identifier Code, comma-separated for multiple (e.g.
     * `XSTO` for Nasdaq Stockholm, `XCSE` for Nasdaq Copenhagen, `XHEL` for Nasdaq Helsinki, `XOSL`
     * for Oslo Børs, or `XSTO,XCSE`). Only events for an issuer with an active listing on the
     * exchange match. Case-insensitive.
     */
    exchange?: string;
    /**
     * Filter by stock index id or symbol (e.g. `OMXS30`, `OMXC25`, `OMXH25`, `OBX`). Returns events
     * only for companies in that index. Case-insensitive for symbols.
     */
    index?: string;
    /**
     * Filter by company sector. Must exactly match one of the standard sector names: `Communication
     * Services`, `Consumer Discretionary`, `Consumer Staples`, `Energy`, `Financials`, `Health
     * Care`, `Industrials`, `Information Technology`, `Materials`, `Real Estate`, `Utilities`.
     */
    sector?: string;
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
     * Filter by lifecycle status. Omitted: returns `scheduled` + past `published` events and
     * excludes `cancelled`. Pass `cancelled` to retrieve cancellations, or `scheduled`/`published`
     * to narrow.
     */
    status?: Status1;
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
    /**
     * Restricts to events for companies in a single watchlist, identified by its `id` (from the
     * List Watchlists endpoint). An unknown id returns no events. Requires `read:watchlist` scope.
     */
    watchlist?: string;
    /** ETag value from a previous response. Returns `304 Not Modified` if data has not changed. */
    ifNoneMatch?: string;
    /**
     * HTTP date from a previous `Last-Modified` header. Returns `304 Not Modified` if nothing has
     * changed since.
     */
    ifModifiedSince?: string;
  };

  export class GetApiV1CalendarEventsError extends ApiError {
    declare readonly payload:
      | Declared<"error304", undefined>
      | Declared<"problemDetails", ProblemDetails>
      | Declared<"problemDetails2", ProblemDetails>
      | Declared<"problemDetails3", ProblemDetails>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetApiV1CalendarEventsError> = [
      { on: 304, kind: "error304", decode: { kind: "empty" } },
      { on: 400, kind: "problemDetails", decode: { kind: "json", schema: problemDetailsSchema } },
      { on: 401, kind: "problemDetails2", decode: { kind: "json", schema: problemDetailsSchema } },
      { on: 403, kind: "problemDetails3", decode: { kind: "json", schema: problemDetailsSchema } },
    ];
  }

  export type GetApiV1CalendarEventsByIdRequest = {
    /** The calendar event ID, as returned in the `id` field of list responses. */
    id: string;
    /**
     * ETag value from a previous response. Returns `304 Not Modified` if the event has not changed.
     */
    ifNoneMatch?: string;
    /**
     * HTTP date from a previous `Last-Modified` header. Returns `304 Not Modified` if nothing has
     * changed since.
     */
    ifModifiedSince?: string;
  };

  export class GetApiV1CalendarEventsByIdError extends ApiError {
    declare readonly payload:
      | Declared<"error304", undefined>
      | Declared<"problemDetails", ProblemDetails>
      | Declared<"problemDetails2", ProblemDetails>
      | Declared<"problemDetails3", ProblemDetails>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetApiV1CalendarEventsByIdError> = [
      { on: 304, kind: "error304", decode: { kind: "empty" } },
      { on: 401, kind: "problemDetails", decode: { kind: "json", schema: problemDetailsSchema } },
      { on: 404, kind: "problemDetails2", decode: { kind: "json", schema: problemDetailsSchema } },
      { on: 403, kind: "problemDetails3", decode: { kind: "json", schema: problemDetailsSchema } },
    ];
  }
}
