import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import * as s from "../core/validation/index.js";
import { continentCodeSchema, type ContinentCode } from "../models/continent-code.js";
import { countryCodeSchema, type CountryCode } from "../models/country-code.js";
import {
  EventCodeqrIoEventsApi,
  eventCodeqrIoEventsApiSchema,
} from "../models/event-codeqr-io-events-api.js";
import {
  IntervalCodeqrIoEventsApi,
  intervalCodeqrIoEventsApiSchema,
} from "../models/interval-codeqr-io-events-api.js";
import { m4001Schema, type M4001 } from "../models/m4001.js";
import { Order, orderSchema } from "../models/order.js";
import { SortBy, sortBySchema } from "../models/sort-by.js";
import { eventsResponseInternalSchema, type EventsResponse } from "../models/unions/events-response.js";
import type { Servers } from "../servers.js";

export class Events {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Retrieve a list of events
   *
   * @remarks
   * Retrieve a paginated list of events for the authenticated workspace.
   *
   * @returns A list of events
   *
   * @throws {@link Events.ListEventsError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link CodeQrError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listEvents(
    request: Events.ListEventsRequest = {},
    options?: RequestOptions,
  ): ApiPromise<EventsResponse[], Events.ListEventsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/events"),
        auth: this.#auth.token,
        pathParams: [],
        query: [
          {
            name: "event",
            value: request.event,
            schema: s.defaulted(eventCodeqrIoEventsApiSchema, EventCodeqrIoEventsApi.Clicks),
          },
          { name: "domain", value: request.domain, schema: s.optional(s.string()) },
          { name: "key", value: request.key, schema: s.optional(s.string()) },
          { name: "linkId", value: request.linkId, schema: s.optional(s.string()) },
          { name: "qrcodeId", value: request.qrcodeId, schema: s.optional(s.string()) },
          { name: "pageId", value: request.pageId, schema: s.optional(s.string()) },
          { name: "externalId", value: request.externalId, schema: s.optional(s.string()) },
          {
            name: "interval",
            value: request.interval,
            schema: s.defaulted(intervalCodeqrIoEventsApiSchema, IntervalCodeqrIoEventsApi._24H),
          },
          { name: "start", value: request.start, schema: s.optional(s.string()) },
          { name: "end", value: request.end, schema: s.optional(s.string()) },
          { name: "timezone", value: request.timezone, schema: s.defaulted(s.string(), "UTC") },
          {
            name: "continent",
            value: request.continent,
            schema: s.optional(s.lazy(() => continentCodeSchema)),
          },
          { name: "country", value: request.country, schema: s.optional(s.lazy(() => countryCodeSchema)) },
          { name: "city", value: request.city, schema: s.optional(s.string()) },
          { name: "device", value: request.device, schema: s.optional(s.string()) },
          { name: "browser", value: request.browser, schema: s.optional(s.string()) },
          { name: "os", value: request.os, schema: s.optional(s.string()) },
          { name: "referer", value: request.referer, schema: s.optional(s.string()) },
          { name: "url", value: request.url, schema: s.optional(s.string()) },
          { name: "excludeRoot", value: request.excludeRoot, schema: s.optional(s.boolean()) },
          { name: "root", value: request.root, schema: s.optional(s.boolean()) },
          { name: "tagId", value: request.tagId, schema: s.optional(s.string()) },
          { name: "utm_source", value: request.utmSource, schema: s.optional(s.string()) },
          { name: "utm_medium", value: request.utmMedium, schema: s.optional(s.string()) },
          { name: "utm_campaign", value: request.utmCampaign, schema: s.optional(s.string()) },
          { name: "utm_content", value: request.utmContent, schema: s.optional(s.string()) },
          { name: "utm_term", value: request.utmTerm, schema: s.optional(s.string()) },
          { name: "type", value: request.type, schema: s.optional(s.string()) },
          { name: "types", value: request.types, schema: s.optional(s.string()) },
          { name: "page", value: request.page, schema: s.defaulted(s.float64(), 1) },
          { name: "limit", value: request.limit, schema: s.defaulted(s.float64(), 100) },
          { name: "order", value: request.order, schema: s.defaulted(orderSchema, Order.Desc) },
          { name: "sortBy", value: request.sortBy, schema: s.defaulted(sortBySchema, SortBy.Timestamp) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => eventsResponseInternalSchema)) },
        errorFactory: Events.ListEventsError,
      },
      options,
    );
  }
}

export namespace Events {
  export type ListEventsRequest = {
    /**
     * The type of event to retrieve analytics for. Defaults to 'clicks'.
     *
     * @default EventCodeqrIoEventsApi.Clicks
     */
    event?: EventCodeqrIoEventsApi;
    /** The domain of the short link. */
    domain?: string;
    /** The short link slug. */
    key?: string;
    /** The unique ID of the short link on CodeQR. */
    linkId?: string;
    /** The unique ID of the QR code on CodeQR. */
    qrcodeId?: string;
    /** The unique ID of the page on CodeQR. */
    pageId?: string;
    /**
     * This is the ID of the link in the your database. Must be prefixed with 'ext_' when passed as
     * a query parameter.
     */
    externalId?: string;
    /**
     * The interval to retrieve events for. Takes precedence over start and end. If undefined,
     * defaults to 24h.
     *
     * @default IntervalCodeqrIoEventsApi._24H
     */
    interval?: IntervalCodeqrIoEventsApi;
    /** The start date and time when to retrieve analytics from. */
    start?: string;
    /**
     * The end date and time when to retrieve analytics from. If not provided, defaults to the
     * current date.
     */
    end?: string;
    /**
     * The IANA time zone code for aligning timeseries granularity (e.g. America/New_York). Defaults
     * to UTC.
     *
     * @default "UTC"
     */
    timezone?: string;
    /** The continent to retrieve analytics for. */
    continent?: ContinentCode;
    /** The country to retrieve analytics for. */
    country?: CountryCode;
    /** The city to retrieve analytics for. */
    city?: string;
    /** The device to retrieve analytics for. */
    device?: string;
    /** The browser to retrieve analytics for. */
    browser?: string;
    /** The OS to retrieve analytics for. */
    os?: string;
    /** The referer to retrieve analytics for. */
    referer?: string;
    /** The URL to retrieve analytics for. */
    url?: string;
    /** Whether to exclude the root link from the response. */
    excludeRoot?: boolean;
    /**
     * Filter for root domains. If true, filter for domains only. If false, filter for links only.
     * If undefined, return both.
     */
    root?: boolean;
    /** The tag ID to retrieve analytics for. */
    tagId?: string;
    /** UTM source to filter analytics by. */
    utmSource?: string;
    /** UTM medium to filter analytics by. */
    utmMedium?: string;
    /** UTM campaign to filter analytics by. */
    utmCampaign?: string;
    /** UTM content to filter analytics by. */
    utmContent?: string;
    /** UTM term to filter analytics by. */
    utmTerm?: string;
    /** The type of analytics to retrieve. */
    type?: string;
    /** The types of analytics to retrieve. */
    types?: string;
    /** @default 1 */
    page?: number;
    /** @default 100 */
    limit?: number;
    /** @default Order.Desc */
    order?: Order;
    /** @default SortBy.Timestamp */
    sortBy?: SortBy;
  };

  export class ListEventsError extends ApiError {
    declare readonly payload:
      | Declared<"m4001", M4001>
      | Declared<"m40012", M4001>
      | Declared<"m40013", M4001>
      | Declared<"m40014", M4001>
      | Declared<"m40015", M4001>
      | Declared<"m40016", M4001>
      | Declared<"m40017", M4001>
      | Declared<"m40018", M4001>
      | Declared<"m40019", M4001>
      | Undeclared;

    static readonly errors: ErrorDecoders<ListEventsError> = [
      { on: 400, kind: "m4001", decode: { kind: "json", schema: m4001Schema } },
      { on: 401, kind: "m40012", decode: { kind: "json", schema: m4001Schema } },
      { on: 403, kind: "m40013", decode: { kind: "json", schema: m4001Schema } },
      { on: 404, kind: "m40014", decode: { kind: "json", schema: m4001Schema } },
      { on: 409, kind: "m40015", decode: { kind: "json", schema: m4001Schema } },
      { on: 410, kind: "m40016", decode: { kind: "json", schema: m4001Schema } },
      { on: 422, kind: "m40017", decode: { kind: "json", schema: m4001Schema } },
      { on: 429, kind: "m40018", decode: { kind: "json", schema: m4001Schema } },
      { on: 500, kind: "m40019", decode: { kind: "json", schema: m4001Schema } },
    ];
  }
}
