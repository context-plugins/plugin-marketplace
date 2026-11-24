import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { anyAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { DateFormat, dateFormatSchema } from "../models/date-format.js";
import {
  error400OddsRelayDiscoveryApiSchema,
  type Error400OddsRelayDiscoveryApi,
} from "../models/error400-odds-relay-discovery-api.js";
import {
  error401OddsRelayDiscoveryApiSchema,
  type Error401OddsRelayDiscoveryApi,
} from "../models/error401-odds-relay-discovery-api.js";
import { error402Schema, type Error402 } from "../models/error402.js";
import {
  error403OddsRelayDiscoveryApiSchema,
  type Error403OddsRelayDiscoveryApi,
} from "../models/error403-odds-relay-discovery-api.js";
import { error404Schema, type Error404 } from "../models/error404.js";
import {
  error429OddsRelayDiscoveryApiSchema,
  type Error429OddsRelayDiscoveryApi,
} from "../models/error429-odds-relay-discovery-api.js";
import {
  error500OddsRelayDiscoveryApiSchema,
  type Error500OddsRelayDiscoveryApi,
} from "../models/error500-odds-relay-discovery-api.js";
import {
  error503OddsRelayDiscoveryApiSchema,
  type Error503OddsRelayDiscoveryApi,
} from "../models/error503-odds-relay-discovery-api.js";
import { exchangesOnlySchema, type ExchangesOnly } from "../models/exchanges-only.js";
import { Format, formatSchema } from "../models/format.js";
import { IncludeLinks, includeLinksSchema } from "../models/include-links.js";
import { IncludeLiquidity, includeLiquiditySchema } from "../models/include-liquidity.js";
import { OddsFormat, oddsFormatSchema } from "../models/odds-format.js";
import { type1Schema, type Type1 } from "../models/type1.js";
import {
  v2OddsEventResponseSchema,
  type V2OddsEventResponse,
} from "../models/unions/v2-odds-event-response.js";
import { v2OddsRawResponseSchema, type V2OddsRawResponse } from "../models/unions/v2-odds-raw-response.js";
import { v2OddsResponseSchema, type V2OddsResponse } from "../models/unions/v2-odds-response.js";
import type { Servers } from "../servers.js";

/**
 * Matched boards, raw, one event.
 */
export class Odds {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * A matched board
   *
   * @remarks
   * The six matched boards: each event's bookmaker back prices beside the exchanges' lay prices
   * (`dutching`: back legs that cover every outcome, grouped by `dutch_id`; `each-way` and
   * `extra-place`: each-way terms against win and place lays).
   *
   * **Checks, in this order** (each refusal is free): the per-address shield, the key, the
   * account's flood cap, a suspended account, a browser key's website, the API version; then `type`
   * (404 `unknown_type`), `region`, the region in the key (403 `region_not_in_scope`), the product
   * in the key (403 `not_in_key_scope`), the product in the region (403 `product_not_in_region`: a
   * region with no exchange serves only dutching and raw); then the parameters: each one this route
   * reads, once; `format`, `oddsFormat` and `dateFormat` values; on `standard` and `dutching`
   * decimal ISO only and gzip accepted (400 `add Accept-Encoding: gzip; with curl use
   * --compressed`); then the filters (400 unknown values, 403 `bookmaker_not_in_region`, then your
   * account's scope: 403 `sport_not_in_plan`, `market_not_in_plan`, `bookmaker_not_in_plan`,
   * `exchange_not_in_plan`; and your plan's bookmaker list), then `quote=true`, the price (402),
   * and the board (503 while it is not ready).
   *
   * **Filters** cut the whole board's events in order: sport and kick-off, then markets, then back
   * offers by bookmaker and lay offers by exchange; an outcome left with no back or no lay goes,
   * then empty markets and events. `dutching` keeps a dutch only when every leg is a named venue. A
   * filtered reply is priced on its filters (`/v2/pricing`); the kick-off window is never priced.
   *
   * **Freshness**: `meta.processed_at` and `X-Processed-At` are the board time; `meta.last_seen` is
   * each venue and sport's last read. The API drops no row for age; a venue not read within its own
   * window (at most two minutes) is off the board until its next read.
   *
   * **Conditional requests**: send the `ETag` back as `If-None-Match`; an unchanged body is a 304
   * with no body, free. A reply with no events is free.
   *
   * @returns The board (envelope, or the `data` array under `format=bare`), or under `quote=true`
   * the price. Gzip unless refused.
   *
   * @throws {@link Odds.GetMatchedBoardError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link OddsRelayError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getMatchedBoard(
    request: Odds.GetMatchedBoardRequest,
    options?: RequestOptions,
  ): ApiPromise<V2OddsResponse, Odds.GetMatchedBoardError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v2/odds/{type}"),
        auth: anyAuth(this.#auth.bearerAuth, this.#auth.apiKeyHeader),
        pathParams: [{ name: "type", value: request.type, schema: type1Schema }],
        query: [
          { name: "region", value: request.region, schema: s.optional(s.string()) },
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Envelope) },
          {
            name: "oddsFormat",
            value: request.oddsFormat,
            schema: s.defaulted(oddsFormatSchema, OddsFormat.Decimal),
          },
          {
            name: "dateFormat",
            value: request.dateFormat,
            schema: s.defaulted(dateFormatSchema, DateFormat.Iso),
          },
          { name: "quote", value: request.quote, schema: s.optional(s.string()) },
          { name: "sports", value: request.sports, schema: s.optional(s.string()) },
          { name: "bookmakers", value: request.bookmakers, schema: s.optional(s.string()) },
          { name: "exchanges", value: request.exchanges, schema: s.optional(s.string()) },
          { name: "markets", value: request.markets, schema: s.optional(s.string()) },
          { name: "commenceTimeFrom", value: request.commenceTimeFrom, schema: s.optional(s.string()) },
          { name: "commenceTimeTo", value: request.commenceTimeTo, schema: s.optional(s.string()) },
        ],
        headers: [{ name: "Accept-Encoding", value: request.acceptEncoding, schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: v2OddsResponseSchema },
        errorFactory: Odds.GetMatchedBoardError,
      },
      options,
    );
  }

  /**
   * The raw board, paged
   *
   * @remarks
   * Every venue's prices per event, one page at a time: bookmakers as `{name, price}`, exchanges
   * quoting a lay side as `{name, back_price, lay_price, available}`. Served gzip only: a request
   * refusing gzip is 400 `add Accept-Encoding: gzip; with curl use --compressed`.
   *
   * **Checks, in this order**: the per-address shield, the key, the flood cap, a suspended account,
   * a browser key's website, the API version; `region`, the region and `raw` in the key; the
   * parameters (each one this route reads, once) and their values; the filters (400 unknown values,
   * 403 `bookmaker_not_in_region`, 403 `bookmaker_not_in_plan`, then your account's scope: 403
   * `sport_not_in_plan`, `market_not_in_plan`, `bookmaker_not_in_plan`); `includeLinks` and
   * `includeLiquidity`; `limit`; `cursor`; gzip; the raw board (503 `raw_not_enabled`); the page
   * (503 while it cannot be cut); `quote=true`; the price (402).
   *
   * **Paging**: pages are ordered by (kick-off, event id) and a cursor resumes strictly after the
   * last event it saw, so an event that leaves the board between pages never restarts the walk. The
   * accepted limit: an event whose kick-off moves across the cursor during a walk can appear twice
   * or be missed. Dedupe by event `id`, and take a missed event on the next walk. A cursor expires
   * 300 s after it was issued.
   *
   * **Following changes**: walk with `updatedSince` set to the start of your previous walk;
   * `last_update` is when a venue's market last moved (see the schema for what it is not).
   *
   * **Price**: a page pays its share of the query's price (its prices over all the query's events'
   * prices, at least 1; `eventIds` and `requireBookmakers` narrow the page, never the query), so a
   * whole walk pays the query's price (narrowed by `eventIds` or `requireBookmakers`, only its kept
   * events' share of it); a recent `updatedSince` pays a reduced share. `quote=true` prices this
   * page.
   *
   * @returns One page (envelope, or the `data` array under `format=bare`), or under `quote=true`
   * its price. Gzip.
   *
   * @throws {@link Odds.GetRawBoardError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link OddsRelayError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getRawBoard(
    request: Odds.GetRawBoardRequest,
    options?: RequestOptions,
  ): ApiPromise<V2OddsRawResponse, Odds.GetRawBoardError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v2/odds/raw"),
        auth: anyAuth(this.#auth.bearerAuth, this.#auth.apiKeyHeader),
        pathParams: [],
        query: [
          { name: "region", value: request.region, schema: s.optional(s.string()) },
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Envelope) },
          {
            name: "oddsFormat",
            value: request.oddsFormat,
            schema: s.defaulted(oddsFormatSchema, OddsFormat.Decimal),
          },
          {
            name: "dateFormat",
            value: request.dateFormat,
            schema: s.defaulted(dateFormatSchema, DateFormat.Iso),
          },
          { name: "sports", value: request.sports, schema: s.optional(s.string()) },
          { name: "sport", value: request.sport, schema: s.optional(s.string()) },
          { name: "leagues", value: request.leagues, schema: s.optional(s.string()) },
          { name: "bookmakers", value: request.bookmakers, schema: s.optional(s.string()) },
          { name: "requireBookmakers", value: request.requireBookmakers, schema: s.optional(s.string()) },
          { name: "markets", value: request.markets, schema: s.optional(s.string()) },
          { name: "eventIds", value: request.eventIds, schema: s.optional(s.string()) },
          { name: "commenceTimeFrom", value: request.commenceTimeFrom, schema: s.optional(s.string()) },
          { name: "commenceTimeTo", value: request.commenceTimeTo, schema: s.optional(s.string()) },
          { name: "updatedSince", value: request.updatedSince, schema: s.optional(s.string()) },
          {
            name: "exchangesOnly",
            value: request.exchangesOnly,
            schema: s.optional(s.lazy(() => exchangesOnlySchema)),
          },
          {
            name: "includeLinks",
            value: request.includeLinks,
            schema: s.defaulted(includeLinksSchema, IncludeLinks.False),
          },
          {
            name: "includeLiquidity",
            value: request.includeLiquidity,
            schema: s.defaulted(includeLiquiditySchema, IncludeLiquidity.True),
          },
          { name: "cursor", value: request.cursor, schema: s.optional(s.string()) },
          { name: "limit", value: request.limit, schema: s.optional(s.int()) },
          { name: "quote", value: request.quote, schema: s.optional(s.string()) },
        ],
        headers: [{ name: "Accept-Encoding", value: request.acceptEncoding, schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: v2OddsRawResponseSchema },
        errorFactory: Odds.GetRawBoardError,
      },
      options,
    );
  }

  /**
   * One event from the raw board
   *
   * @remarks
   * One raw event by id, every venue (a plan with a bookmaker list sees those venues and the
   * region's exchanges; an account scope sees its raw venue list and markets only, no exchange
   * added). Checks: the key and scope as raw, the parameters and their values, the raw board (503
   * `raw_not_enabled`), the id (404 `unknown_event`), the event's sport in your account's raw scope
   * (403 `sport_not_in_plan`), `quote=true`, the price (402). The price is the whole event's,
   * whatever the scope cuts. Priced by the event's share of the region's raw prices. Gzip unless
   * refused (over 1 kB).
   *
   * @returns The event, or under `quote=true` its price.
   *
   * @throws {@link Odds.GetRawEventError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link OddsRelayError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getRawEvent(
    request: Odds.GetRawEventRequest,
    options?: RequestOptions,
  ): ApiPromise<V2OddsEventResponse, Odds.GetRawEventError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v2/odds/event/{id}"),
        auth: anyAuth(this.#auth.bearerAuth, this.#auth.apiKeyHeader),
        pathParams: [{ name: "id", value: request.id, schema: s.string() }],
        query: [
          { name: "region", value: request.region, schema: s.optional(s.string()) },
          {
            name: "oddsFormat",
            value: request.oddsFormat,
            schema: s.defaulted(oddsFormatSchema, OddsFormat.Decimal),
          },
          {
            name: "dateFormat",
            value: request.dateFormat,
            schema: s.defaulted(dateFormatSchema, DateFormat.Iso),
          },
          {
            name: "includeLinks",
            value: request.includeLinks,
            schema: s.defaulted(includeLinksSchema, IncludeLinks.False),
          },
          {
            name: "includeLiquidity",
            value: request.includeLiquidity,
            schema: s.defaulted(includeLiquiditySchema, IncludeLiquidity.True),
          },
          { name: "quote", value: request.quote, schema: s.optional(s.string()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: v2OddsEventResponseSchema },
        errorFactory: Odds.GetRawEventError,
      },
      options,
    );
  }
}

export namespace Odds {
  export type GetMatchedBoardRequest = {
    /**
     * A matched board: `standard`, `2up`, `dutching`, `each-way`, `extra-place` or `bog`. The
     * aliases `two-up`, `each_way` and `extra_place` are accepted and served as their canonical
     * slug. Anything else is 404 `unknown_type`.
     */
    type: Type1;
    /**
     * ONE lowercase region code (`/v2/regions` lists yours). Missing means `uk`: on a data route
     * only when your key covers `uk`, else 400 `region_required` naming a code your key has; on
     * discovery and keyless routes always. A comma list, the parameter sent twice or an uppercase
     * code is 400 `bad_request`; an unknown code, or one with no live bookmaker here, is 404
     * `unknown_region`.
     */
    region?: string;
    /**
     * `envelope` (default): `{meta, data}`. `bare`: the `data` array alone, `meta` moved to `X-*`
     * headers.
     *
     * @default Format.Envelope
     */
    format?: Format;
    /**
     * `decimal` (default) or `american` (a signed integer; null for a price at or below 1.0).
     * `standard` and `dutching` serve decimal only: anything else is 400.
     *
     * @default OddsFormat.Decimal
     */
    oddsFormat?: OddsFormat;
    /**
     * `iso` (default, ISO-8601 UTC) or `unix` (integer epoch seconds) for `commence_time`,
     * `processed_at` and `last_update`. `standard` and `dutching` serve iso only: anything else is
     * 400.
     *
     * @default DateFormat.Iso
     */
    dateFormat?: DateFormat;
    /**
     * `true` (also `1`, `yes`, `on`): price this exact request instead of serving it. 200 `{cost,
     * remaining, rate_card}`, free, every check before the price still applies; any other value is
     * an ordinary request.
     */
    quote?: string;
    /**
     * Comma-separated, at most 20: a sport key or a prefix of one as `/v2/sports` lists them
     * (`soccer`, `soccer_epl`), lowercased. Unknown is 400 `unknown_sport` with `valid` (the sport
     * key bases). A known value with nothing on the board is an empty 200, free. A value is inside
     * your account's scope when it starts with a scope sport (`soccer_epl` under `soccer`);
     * outside, 403 `sport_not_in_plan` with `valid`; left out, trimmed to the scope.
     */
    sports?: string;
    /**
     * Comma-separated, at most 40: bookmaker keys as `/v2/bookmakers` lists them (a listed name is
     * accepted too). Unknown is 400 `unknown_bookmaker` with `valid`; an exchange here is that 400
     * naming `exchanges` (on `dutching` both lists take venues of either kind); a venue outside the
     * region is 403 `bookmaker_not_in_region`; one outside your plan's bookmaker list or your
     * account's scope is 403 `bookmaker_not_in_plan` with `valid` (on `dutching`, an exchange
     * outside the scope is 403 `exchange_not_in_plan`). A plan with a bookmaker list, or an account
     * scope, trims a call naming none to that list.
     */
    bookmakers?: string;
    /**
     * Comma-separated, at most 4: exchange keys as `/v2/bookmakers` lists them. Unknown is 400
     * `unknown_exchange` with `valid`; a bookmaker here is that 400 naming `bookmakers`. Outside
     * your account's scope for this product: 403 `exchange_not_in_plan` with `valid`; left out,
     * trimmed to the scope.
     */
    exchanges?: string;
    /**
     * Comma-separated, at most 20: market keys (`h2h`, `totals`, …; `/v2/sports` rows list the keys
     * seen under each competition). Each product's keys: keyless `/v2/coverage`'s `markets`.
     * Unknown is 400 `unknown_market` with `valid` (this product's keys) and, when another product
     * carries it, `products`; another product's key may instead be accepted and match nothing.
     * Outside your account's scope for this product: 403 `market_not_in_plan` with `valid`; left
     * out, trimmed to the scope.
     */
    markets?: string;
    /**
     * Events kicking off at or after this ISO-8601 instant (no offset = UTC; a fraction of a second
     * rounds up). Not ISO-8601 is 400; on the matched boards a From after To is 400.
     */
    commenceTimeFrom?: string;
    /** Events kicking off at or before this ISO-8601 instant (no offset = UTC). */
    commenceTimeTo?: string;
    /**
     * Send `gzip`; with curl, `--compressed` sends it and decompresses the reply. `standard` and
     * `dutching` answer a request that refuses gzip (`identity` alone, as Python's `urllib` sends
     * by default, or `gzip;q=0` or `*;q=0`) with 400 `bad_request`, message `add Accept-Encoding:
     * gzip; with curl use --compressed`; the other four boards answer it plain.
     */
    acceptEncoding: string;
  };

  export class GetMatchedBoardError extends ApiError {
    declare readonly payload:
      | Declared<"error304", undefined>
      | Declared<"error400OddsRelayDiscoveryApi", Error400OddsRelayDiscoveryApi>
      | Declared<"error401OddsRelayDiscoveryApi", Error401OddsRelayDiscoveryApi>
      | Declared<"error402", Error402>
      | Declared<"error403OddsRelayDiscoveryApi", Error403OddsRelayDiscoveryApi>
      | Declared<"error404", Error404>
      | Declared<"error429OddsRelayDiscoveryApi", Error429OddsRelayDiscoveryApi>
      | Declared<"error500OddsRelayDiscoveryApi", Error500OddsRelayDiscoveryApi>
      | Declared<"error503OddsRelayDiscoveryApi", Error503OddsRelayDiscoveryApi>
      | Declared<"error502", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetMatchedBoardError> = [
      { on: 304, kind: "error304", decode: { kind: "empty" } },
      {
        on: 400,
        kind: "error400OddsRelayDiscoveryApi",
        decode: { kind: "json", schema: error400OddsRelayDiscoveryApiSchema },
      },
      {
        on: 401,
        kind: "error401OddsRelayDiscoveryApi",
        decode: { kind: "json", schema: error401OddsRelayDiscoveryApiSchema },
      },
      { on: 402, kind: "error402", decode: { kind: "json", schema: error402Schema } },
      {
        on: 403,
        kind: "error403OddsRelayDiscoveryApi",
        decode: { kind: "json", schema: error403OddsRelayDiscoveryApiSchema },
      },
      { on: 404, kind: "error404", decode: { kind: "json", schema: error404Schema } },
      {
        on: 429,
        kind: "error429OddsRelayDiscoveryApi",
        decode: { kind: "json", schema: error429OddsRelayDiscoveryApiSchema },
      },
      {
        on: 500,
        kind: "error500OddsRelayDiscoveryApi",
        decode: { kind: "json", schema: error500OddsRelayDiscoveryApiSchema },
      },
      {
        on: 503,
        kind: "error503OddsRelayDiscoveryApi",
        decode: { kind: "json", schema: error503OddsRelayDiscoveryApiSchema },
      },
      { on: 502, kind: "error502", decode: { kind: "empty" } },
    ];
  }

  export type GetRawBoardRequest = {
    /**
     * ONE lowercase region code (`/v2/regions` lists yours). Missing means `uk`: on a data route
     * only when your key covers `uk`, else 400 `region_required` naming a code your key has; on
     * discovery and keyless routes always. A comma list, the parameter sent twice or an uppercase
     * code is 400 `bad_request`; an unknown code, or one with no live bookmaker here, is 404
     * `unknown_region`.
     */
    region?: string;
    /**
     * `envelope` (default): `{meta, data}`. `bare`: the `data` array alone, `meta` moved to `X-*`
     * headers.
     *
     * @default Format.Envelope
     */
    format?: Format;
    /**
     * `decimal` (default) or `american` (a signed integer; null for a price at or below 1.0).
     * `standard` and `dutching` serve decimal only: anything else is 400.
     *
     * @default OddsFormat.Decimal
     */
    oddsFormat?: OddsFormat;
    /**
     * `iso` (default, ISO-8601 UTC) or `unix` (integer epoch seconds) for `commence_time`,
     * `processed_at` and `last_update`. `standard` and `dutching` serve iso only: anything else is
     * 400.
     *
     * @default DateFormat.Iso
     */
    dateFormat?: DateFormat;
    /**
     * Comma-separated, at most 20: a sport key, a prefix of one, or a sport name raw serves,
     * lowercased. Unknown is 400 `unknown_sport` with `valid`. Inside your account's raw scope: a
     * key or prefix starting with a scope sport, a sport name only when it equals one (send
     * `soccer`, not `football`); outside, 403 `sport_not_in_plan` with `valid`; left out, trimmed
     * to the scope.
     */
    sports?: string;
    /** The same as `sports` (what `/v2/events` takes); ignored when `sports` is sent. */
    sport?: string;
    /**
     * Comma-separated, at most 40: competition names (an event's league or `sport_title`),
     * lowercased. Not checked against a catalogue.
     */
    leagues?: string;
    /**
     * Comma-separated, at most 40: venue keys of either kind, bookmakers and exchanges, as
     * `/v2/bookmakers` lists them. Unknown is 400 `unknown_bookmaker` with `valid`; outside the
     * region 403 `bookmaker_not_in_region`; outside your plan's bookmaker list or your account's
     * raw scope 403 `bookmaker_not_in_plan` with `valid`. An account scope's raw list is the whole
     * venue list, exchanges included: left out, trimmed to it (so `exchangesOnly=true` keeps only
     * the exchanges it names).
     */
    bookmakers?: string;
    /**
     * Comma-separated, at most 40 venue keys, checked as `bookmakers` is (the same 400 and 403
     * codes). Keeps only the events where EVERY named venue quotes the call's `markets` (with
     * several, at least one of them each), under `exchangesOnly` if set; a venue that lists the
     * event but not the market does not count. `bookmakers` does not narrow this test and
     * `updatedSince` is not part of it: with `updatedSince`, an event carrying every named venue is
     * kept when any venue shown changed, and the page shows only the venues that changed. It
     * narrows events, never venues: every venue the other filters keep is still shown, named or
     * not. `meta.total` and `X-Count` count the events kept. Price: like `eventIds`, it narrows the
     * page and not the query, so a page pays its share of the same call without
     * `requireBookmakers`, and an empty page is free.
     */
    requireBookmakers?: string;
    /**
     * Comma-separated, at most 20: market keys raw serves. Raw's keys: keyless `/v2/coverage`'s
     * `markets.raw`. Unknown is 400 `unknown_market` with `valid` (raw's keys) and, when another
     * product carries it, `products`. Keeps venues quoting one of them, and only those markets.
     * Outside your account's scope for this product: 403 `market_not_in_plan` with `valid`; left
     * out, trimmed to the scope.
     */
    markets?: string;
    /**
     * Comma-separated, at most 50 event ids. Narrows the page, not the query: a page pays its share
     * of the same call without `eventIds`.
     */
    eventIds?: string;
    /**
     * Events kicking off at or after this ISO-8601 instant (no offset = UTC; a fraction of a second
     * rounds up). Not ISO-8601 is 400; on the matched boards a From after To is 400.
     */
    commenceTimeFrom?: string;
    /** Events kicking off at or before this ISO-8601 instant (no offset = UTC). */
    commenceTimeTo?: string;
    /**
     * Exactly `YYYY-MM-DDTHH:MM:SSZ` (any other form is 400). Keeps venues whose `last_update` is
     * at or after it, and the events holding one. The bulk way to follow raw: a recent
     * `updatedSince` pays a reduced share (`/v2/pricing` `recent`).
     */
    updatedSince?: string;
    /** `true`: exchanges only. `true` or `false`, else 400. */
    exchangesOnly?: ExchangesOnly;
    /**
     * `true`: each venue's `link` (its primary event page; left out when it has none). Default
     * `false`. `true` or `false`, else 400.
     *
     * @default IncludeLinks.False
     */
    includeLinks?: IncludeLinks;
    /**
     * `false`: leave out `available` beside an exchange's `lay_price`. Default `true`. `true` or
     * `false`, else 400.
     *
     * @default IncludeLiquidity.True
     */
    includeLiquidity?: IncludeLiquidity;
    /**
     * The previous page's `meta.next_cursor` (or `X-Next-Cursor`). A cursor is bound to no account
     * and expires 300 s after it was issued: 400 `cursor expired: start again from the first page`;
     * any other shape 400 `cursor not recognised: start again from the first page`.
     */
    cursor?: string;
    /** Events per page, 1-250 (default and maximum 250). Anything else is 400. */
    limit?: number;
    /**
     * `true` (also `1`, `yes`, `on`): price this exact request instead of serving it. 200 `{cost,
     * remaining, rate_card}`, free, every check before the price still applies; any other value is
     * an ordinary request.
     */
    quote?: string;
    /**
     * Send `gzip`; with curl, `--compressed` sends it and decompresses the reply. The raw board
     * answers a request that refuses gzip (`identity` alone, as Python's `urllib` sends by default,
     * or `gzip;q=0` or `*;q=0`) with 400 `bad_request`, message `add Accept-Encoding: gzip; with
     * curl use --compressed`.
     */
    acceptEncoding: string;
  };

  export const getRawBoardRequestSchema: Schema<GetRawBoardRequest> = s.lazySchema(() =>
    s.object<GetRawBoardRequest>({
      region: s.optional(s.string()),
      format: s.defaulted(formatSchema, Format.Envelope),
      oddsFormat: s.defaulted(oddsFormatSchema, OddsFormat.Decimal),
      dateFormat: s.defaulted(dateFormatSchema, DateFormat.Iso),
      sports: s.optional(s.string()),
      sport: s.optional(s.string()),
      leagues: s.optional(s.string()),
      bookmakers: s.optional(s.string()),
      requireBookmakers: s.optional(s.string()),
      markets: s.optional(s.string()),
      eventIds: s.optional(s.string()),
      commenceTimeFrom: s.optional(s.string()),
      commenceTimeTo: s.optional(s.string()),
      updatedSince: s.optional(s.string()),
      exchangesOnly: s.optional(s.lazy(() => exchangesOnlySchema)),
      includeLinks: s.defaulted(includeLinksSchema, IncludeLinks.False),
      includeLiquidity: s.defaulted(includeLiquiditySchema, IncludeLiquidity.True),
      cursor: s.optional(s.string()),
      limit: s.optional(s.int().check(s.gte(1), s.lte(250))),
      quote: s.optional(s.string()),
      acceptEncoding: s.string(),
    }),
  );

  export class GetRawBoardError extends ApiError {
    declare readonly payload:
      | Declared<"error304", undefined>
      | Declared<"error400OddsRelayDiscoveryApi", Error400OddsRelayDiscoveryApi>
      | Declared<"error401OddsRelayDiscoveryApi", Error401OddsRelayDiscoveryApi>
      | Declared<"error402", Error402>
      | Declared<"error403OddsRelayDiscoveryApi", Error403OddsRelayDiscoveryApi>
      | Declared<"error404", Error404>
      | Declared<"error429OddsRelayDiscoveryApi", Error429OddsRelayDiscoveryApi>
      | Declared<"error500OddsRelayDiscoveryApi", Error500OddsRelayDiscoveryApi>
      | Declared<"error503OddsRelayDiscoveryApi", Error503OddsRelayDiscoveryApi>
      | Declared<"error502", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetRawBoardError> = [
      { on: 304, kind: "error304", decode: { kind: "empty" } },
      {
        on: 400,
        kind: "error400OddsRelayDiscoveryApi",
        decode: { kind: "json", schema: error400OddsRelayDiscoveryApiSchema },
      },
      {
        on: 401,
        kind: "error401OddsRelayDiscoveryApi",
        decode: { kind: "json", schema: error401OddsRelayDiscoveryApiSchema },
      },
      { on: 402, kind: "error402", decode: { kind: "json", schema: error402Schema } },
      {
        on: 403,
        kind: "error403OddsRelayDiscoveryApi",
        decode: { kind: "json", schema: error403OddsRelayDiscoveryApiSchema },
      },
      { on: 404, kind: "error404", decode: { kind: "json", schema: error404Schema } },
      {
        on: 429,
        kind: "error429OddsRelayDiscoveryApi",
        decode: { kind: "json", schema: error429OddsRelayDiscoveryApiSchema },
      },
      {
        on: 500,
        kind: "error500OddsRelayDiscoveryApi",
        decode: { kind: "json", schema: error500OddsRelayDiscoveryApiSchema },
      },
      {
        on: 503,
        kind: "error503OddsRelayDiscoveryApi",
        decode: { kind: "json", schema: error503OddsRelayDiscoveryApiSchema },
      },
      { on: 502, kind: "error502", decode: { kind: "empty" } },
    ];
  }

  export type GetRawEventRequest = {
    /**
     * An event id (`or_evt_…`) from raw, a matched board or `/v2/events`. Not on the raw board now
     * is 404 `unknown_event`.
     */
    id: string;
    /**
     * ONE lowercase region code (`/v2/regions` lists yours). Missing means `uk`: on a data route
     * only when your key covers `uk`, else 400 `region_required` naming a code your key has; on
     * discovery and keyless routes always. A comma list, the parameter sent twice or an uppercase
     * code is 400 `bad_request`; an unknown code, or one with no live bookmaker here, is 404
     * `unknown_region`.
     */
    region?: string;
    /**
     * `decimal` (default) or `american` (a signed integer; null for a price at or below 1.0).
     * `standard` and `dutching` serve decimal only: anything else is 400.
     *
     * @default OddsFormat.Decimal
     */
    oddsFormat?: OddsFormat;
    /**
     * `iso` (default, ISO-8601 UTC) or `unix` (integer epoch seconds) for `commence_time`,
     * `processed_at` and `last_update`. `standard` and `dutching` serve iso only: anything else is
     * 400.
     *
     * @default DateFormat.Iso
     */
    dateFormat?: DateFormat;
    /**
     * `true`: each venue's `link` (its primary event page; left out when it has none). Default
     * `false`. `true` or `false`, else 400.
     *
     * @default IncludeLinks.False
     */
    includeLinks?: IncludeLinks;
    /**
     * `false`: leave out `available` beside an exchange's `lay_price`. Default `true`. `true` or
     * `false`, else 400.
     *
     * @default IncludeLiquidity.True
     */
    includeLiquidity?: IncludeLiquidity;
    /**
     * `true` (also `1`, `yes`, `on`): price this exact request instead of serving it. 200 `{cost,
     * remaining, rate_card}`, free, every check before the price still applies; any other value is
     * an ordinary request.
     */
    quote?: string;
  };

  export class GetRawEventError extends ApiError {
    declare readonly payload:
      | Declared<"error304", undefined>
      | Declared<"error400OddsRelayDiscoveryApi", Error400OddsRelayDiscoveryApi>
      | Declared<"error401OddsRelayDiscoveryApi", Error401OddsRelayDiscoveryApi>
      | Declared<"error402", Error402>
      | Declared<"error403OddsRelayDiscoveryApi", Error403OddsRelayDiscoveryApi>
      | Declared<"error404", Error404>
      | Declared<"error429OddsRelayDiscoveryApi", Error429OddsRelayDiscoveryApi>
      | Declared<"error500OddsRelayDiscoveryApi", Error500OddsRelayDiscoveryApi>
      | Declared<"error503OddsRelayDiscoveryApi", Error503OddsRelayDiscoveryApi>
      | Declared<"error502", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetRawEventError> = [
      { on: 304, kind: "error304", decode: { kind: "empty" } },
      {
        on: 400,
        kind: "error400OddsRelayDiscoveryApi",
        decode: { kind: "json", schema: error400OddsRelayDiscoveryApiSchema },
      },
      {
        on: 401,
        kind: "error401OddsRelayDiscoveryApi",
        decode: { kind: "json", schema: error401OddsRelayDiscoveryApiSchema },
      },
      { on: 402, kind: "error402", decode: { kind: "json", schema: error402Schema } },
      {
        on: 403,
        kind: "error403OddsRelayDiscoveryApi",
        decode: { kind: "json", schema: error403OddsRelayDiscoveryApiSchema },
      },
      { on: 404, kind: "error404", decode: { kind: "json", schema: error404Schema } },
      {
        on: 429,
        kind: "error429OddsRelayDiscoveryApi",
        decode: { kind: "json", schema: error429OddsRelayDiscoveryApiSchema },
      },
      {
        on: 500,
        kind: "error500OddsRelayDiscoveryApi",
        decode: { kind: "json", schema: error500OddsRelayDiscoveryApiSchema },
      },
      {
        on: 503,
        kind: "error503OddsRelayDiscoveryApi",
        decode: { kind: "json", schema: error503OddsRelayDiscoveryApiSchema },
      },
      { on: 502, kind: "error502", decode: { kind: "empty" } },
    ];
  }
}
