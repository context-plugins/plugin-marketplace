import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { anyAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import * as s from "../core/validation/index.js";
import { DateFormat, dateFormatSchema } from "../models/date-format.js";
import {
  error400OddsRelayDiscoveryApiSchema,
  type Error400OddsRelayDiscoveryApi,
} from "../models/error400-odds-relay-discovery-api.js";
import {
  error401OddsRelayDiscoveryApiSchema,
  type Error401OddsRelayDiscoveryApi,
} from "../models/error401-odds-relay-discovery-api.js";
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
import { Format, formatSchema } from "../models/format.js";
import { regionsSchema, type Regions } from "../models/regions.js";
import {
  v2BookmakersResponse1Schema,
  type V2BookmakersResponse1,
} from "../models/unions/v2-bookmakers-response1.js";
import { v2EventsResponse1Schema, type V2EventsResponse1 } from "../models/unions/v2-events-response1.js";
import { v2SportsResponse1Schema, type V2SportsResponse1 } from "../models/unions/v2-sports-response1.js";
import type { Servers } from "../servers.js";

/**
 * Sports, events, venues, regions. Free.
 */
export class Discovery {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Venues
   *
   * @remarks
   * Every bookmaker and exchange key the API serves, with its display name, regions and kind. Free.
   * Takes no `region`: a `region` parameter is 400.
   *
   * @returns The catalogue. Gzip unless refused (over 1 kB).
   *
   * @throws {@link Discovery.ListBookmakersError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link OddsRelayError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listBookmakers(
    request: Discovery.ListBookmakersRequest = {},
    options?: RequestOptions,
  ): ApiPromise<V2BookmakersResponse1, Discovery.ListBookmakersError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v2/bookmakers"),
        auth: anyAuth(this.#auth.bearerAuth, this.#auth.apiKeyHeader),
        pathParams: [],
        query: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Envelope) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: v2BookmakersResponse1Schema },
        errorFactory: Discovery.ListBookmakersError,
      },
      options,
    );
  }

  /**
   * Events of a sport
   *
   * @remarks
   * The events on the matched boards under one sport key or prefix, with the boards carrying each.
   * Free. Paged 250 at a time in (kick-off, id) order; a cursor resumes strictly after the last
   * event it saw, so an event whose kick-off moves across the cursor during a walk can appear twice
   * or be missed: dedupe by `id` and take a missed event on the next walk. A cursor expires 300 s
   * after it was issued. `region` missing means `uk`.
   *
   * @returns A page. Gzip unless refused (over 1 kB).
   *
   * @throws {@link Discovery.ListEventsError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link OddsRelayError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listEvents(
    request: Discovery.ListEventsRequest,
    options?: RequestOptions,
  ): ApiPromise<V2EventsResponse1, Discovery.ListEventsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v2/events"),
        auth: anyAuth(this.#auth.bearerAuth, this.#auth.apiKeyHeader),
        pathParams: [],
        query: [
          { name: "sport", value: request.sport, schema: s.string() },
          { name: "region", value: request.region, schema: s.optional(s.string()) },
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Envelope) },
          {
            name: "dateFormat",
            value: request.dateFormat,
            schema: s.defaulted(dateFormatSchema, DateFormat.Iso),
          },
          { name: "cursor", value: request.cursor, schema: s.optional(s.string()) },
          { name: "eventIds", value: request.eventIds, schema: s.optional(s.string()) },
          { name: "commenceTimeFrom", value: request.commenceTimeFrom, schema: s.optional(s.string()) },
          { name: "commenceTimeTo", value: request.commenceTimeTo, schema: s.optional(s.string()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: v2EventsResponse1Schema },
        errorFactory: Discovery.ListEventsError,
      },
      options,
    );
  }

  /**
   * Your regions
   *
   * @remarks
   * The regions your key covers that have live bookmakers here, with each region's exchanges and
   * coverage model. Free.
   *
   * @returns The regions. Gzip unless refused (over 1 kB).
   *
   * @throws {@link Discovery.ListRegionsError} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link OddsRelayError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listRegions(options?: RequestOptions): ApiPromise<Regions, Discovery.ListRegionsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v2/regions"),
        auth: anyAuth(this.#auth.bearerAuth, this.#auth.apiKeyHeader),
        pathParams: [],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: regionsSchema },
        errorFactory: Discovery.ListRegionsError,
      },
      options,
    );
  }

  /**
   * Sports and competitions
   *
   * @remarks
   * Every competition on the matched boards, grouped, with the market keys seen under each. Free.
   * Paged 250 rows at a time in (group, key) order; a cursor expires 300 s after it was issued.
   * `region` missing means `uk`; discovery is not scoped to your key's regions.
   *
   * @returns A page. Gzip unless refused (over 1 kB).
   *
   * @throws {@link Discovery.ListSportsError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link OddsRelayError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listSports(
    request: Discovery.ListSportsRequest = {},
    options?: RequestOptions,
  ): ApiPromise<V2SportsResponse1, Discovery.ListSportsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v2/sports"),
        auth: anyAuth(this.#auth.bearerAuth, this.#auth.apiKeyHeader),
        pathParams: [],
        query: [
          { name: "region", value: request.region, schema: s.optional(s.string()) },
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Envelope) },
          {
            name: "dateFormat",
            value: request.dateFormat,
            schema: s.defaulted(dateFormatSchema, DateFormat.Iso),
          },
          { name: "cursor", value: request.cursor, schema: s.optional(s.string()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: v2SportsResponse1Schema },
        errorFactory: Discovery.ListSportsError,
      },
      options,
    );
  }
}

export namespace Discovery {
  export type ListBookmakersRequest = {
    /**
     * `envelope` (default): `{meta, data}`. `bare`: the `data` array alone, `meta` moved to `X-*`
     * headers.
     *
     * @default Format.Envelope
     */
    format?: Format;
  };

  export class ListBookmakersError extends ApiError {
    declare readonly payload:
      | Declared<"error304", undefined>
      | Declared<"error400OddsRelayDiscoveryApi", Error400OddsRelayDiscoveryApi>
      | Declared<"error401OddsRelayDiscoveryApi", Error401OddsRelayDiscoveryApi>
      | Declared<"error403OddsRelayDiscoveryApi", Error403OddsRelayDiscoveryApi>
      | Declared<"error429OddsRelayDiscoveryApi", Error429OddsRelayDiscoveryApi>
      | Declared<"error500OddsRelayDiscoveryApi", Error500OddsRelayDiscoveryApi>
      | Declared<"error503OddsRelayDiscoveryApi", Error503OddsRelayDiscoveryApi>
      | Declared<"error502", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<ListBookmakersError> = [
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
      {
        on: 403,
        kind: "error403OddsRelayDiscoveryApi",
        decode: { kind: "json", schema: error403OddsRelayDiscoveryApiSchema },
      },
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

  export type ListEventsRequest = {
    /**
     * Required: a sport key or a prefix of one as `/v2/sports` lists them. Missing is 400
     * `missing_param`; unknown 400 `unknown_sport` with `valid`.
     */
    sport: string;
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
     * `iso` (default, ISO-8601 UTC) or `unix` (integer epoch seconds) for `commence_time`,
     * `processed_at` and `last_update`. `standard` and `dutching` serve iso only: anything else is
     * 400.
     *
     * @default DateFormat.Iso
     */
    dateFormat?: DateFormat;
    /**
     * The previous page's `meta.next_cursor` (or `X-Next-Cursor`). A cursor is bound to no account
     * and expires 300 s after it was issued: 400 `cursor expired: start again from the first page`;
     * any other shape 400 `cursor not recognised: start again from the first page`.
     */
    cursor?: string;
    /** Comma-separated, at most 50 event ids. */
    eventIds?: string;
    /**
     * Events kicking off at or after this ISO-8601 instant (no offset = UTC; a fraction of a second
     * rounds up). Not ISO-8601 is 400; on the matched boards a From after To is 400.
     */
    commenceTimeFrom?: string;
    /** Events kicking off at or before this ISO-8601 instant (no offset = UTC). */
    commenceTimeTo?: string;
  };

  export class ListEventsError extends ApiError {
    declare readonly payload:
      | Declared<"error304", undefined>
      | Declared<"error400OddsRelayDiscoveryApi", Error400OddsRelayDiscoveryApi>
      | Declared<"error401OddsRelayDiscoveryApi", Error401OddsRelayDiscoveryApi>
      | Declared<"error403OddsRelayDiscoveryApi", Error403OddsRelayDiscoveryApi>
      | Declared<"error404", Error404>
      | Declared<"error429OddsRelayDiscoveryApi", Error429OddsRelayDiscoveryApi>
      | Declared<"error500OddsRelayDiscoveryApi", Error500OddsRelayDiscoveryApi>
      | Declared<"error503OddsRelayDiscoveryApi", Error503OddsRelayDiscoveryApi>
      | Declared<"error502", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<ListEventsError> = [
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

  export class ListRegionsError extends ApiError {
    declare readonly payload:
      | Declared<"error400OddsRelayDiscoveryApi", Error400OddsRelayDiscoveryApi>
      | Declared<"error401OddsRelayDiscoveryApi", Error401OddsRelayDiscoveryApi>
      | Declared<"error403OddsRelayDiscoveryApi", Error403OddsRelayDiscoveryApi>
      | Declared<"error429OddsRelayDiscoveryApi", Error429OddsRelayDiscoveryApi>
      | Declared<"error500OddsRelayDiscoveryApi", Error500OddsRelayDiscoveryApi>
      | Declared<"error503OddsRelayDiscoveryApi", Error503OddsRelayDiscoveryApi>
      | Declared<"error502", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<ListRegionsError> = [
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
      {
        on: 403,
        kind: "error403OddsRelayDiscoveryApi",
        decode: { kind: "json", schema: error403OddsRelayDiscoveryApiSchema },
      },
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

  export type ListSportsRequest = {
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
     * `iso` (default, ISO-8601 UTC) or `unix` (integer epoch seconds) for `commence_time`,
     * `processed_at` and `last_update`. `standard` and `dutching` serve iso only: anything else is
     * 400.
     *
     * @default DateFormat.Iso
     */
    dateFormat?: DateFormat;
    /**
     * The previous page's `meta.next_cursor` (or `X-Next-Cursor`). A cursor is bound to no account
     * and expires 300 s after it was issued: 400 `cursor expired: start again from the first page`;
     * any other shape 400 `cursor not recognised: start again from the first page`.
     */
    cursor?: string;
  };

  export class ListSportsError extends ApiError {
    declare readonly payload:
      | Declared<"error304", undefined>
      | Declared<"error400OddsRelayDiscoveryApi", Error400OddsRelayDiscoveryApi>
      | Declared<"error401OddsRelayDiscoveryApi", Error401OddsRelayDiscoveryApi>
      | Declared<"error403OddsRelayDiscoveryApi", Error403OddsRelayDiscoveryApi>
      | Declared<"error404", Error404>
      | Declared<"error429OddsRelayDiscoveryApi", Error429OddsRelayDiscoveryApi>
      | Declared<"error500OddsRelayDiscoveryApi", Error500OddsRelayDiscoveryApi>
      | Declared<"error503OddsRelayDiscoveryApi", Error503OddsRelayDiscoveryApi>
      | Declared<"error502", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<ListSportsError> = [
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
