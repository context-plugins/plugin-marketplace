import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import {
  availabilityResponseInternalSchema,
  type AvailabilityResponse,
} from "../models/availability-response.js";
import { errorEnvelopeInternalSchema, type ErrorEnvelope } from "../models/error-envelope.js";
import { listingResponseInternalSchema, type ListingResponse } from "../models/listing-response.js";
import { platformSchema, type Platform } from "../models/platform.js";
import {
  priceCompareResponseInternalSchema,
  type PriceCompareResponse,
} from "../models/price-compare-response.js";
import { priceResponseInternalSchema, type PriceResponse } from "../models/price-response.js";
import { reviewsResponseInternalSchema, type ReviewsResponse } from "../models/reviews-response.js";
import { searchResponseInternalSchema, type SearchResponse } from "../models/search-response.js";
import type { Servers } from "../servers.js";

/**
 * Accommodation data endpoints
 */
export class DataApi {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Nightly availability for a listing (max(5, ⌈days/2⌉) credits by requested date…
   *
   * @remarks
   * Provide EXACTLY ONE identification form: listingId, listingIds, or url. None →
   * missing_parameter; conflicting forms → mutually_exclusive_params; a url that is not a
   * well-formed listing URL for the platform → invalid_listing_url.
   *
   * @returns Success.
   *
   * @throws {@link DataApi.AvailabilityError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link StayingApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  availability(
    request: DataApi.AvailabilityRequest,
    options?: RequestOptions,
  ): ApiPromise<AvailabilityResponse, DataApi.AvailabilityError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/availability"),
        auth: this.#auth.bearerAuth,
        pathParams: [],
        query: [
          { name: "platform", value: request.platform, schema: platformSchema },
          { name: "startDate", value: request.startDate, schema: s.string() },
          { name: "endDate", value: request.endDate, schema: s.string() },
          { name: "listingId", value: request.listingId, schema: s.optional(s.string()) },
          { name: "listingIds", value: request.listingIds, schema: s.optional(s.string()) },
          { name: "url", value: request.url, schema: s.optional(s.string()) },
          { name: "onlyAvailable", value: request.onlyAvailable, schema: s.optional(s.boolean()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: availabilityResponseInternalSchema },
        errorFactory: DataApi.AvailabilityError,
      },
      options,
    );
  }

  /**
   * Full normalized listing (3 credits/leg, flat)
   *
   * @returns Success.
   *
   * @throws {@link DataApi.ListingError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link StayingApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listing(
    request: DataApi.ListingRequest,
    options?: RequestOptions,
  ): ApiPromise<ListingResponse, DataApi.ListingError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/listing/{platform}/{id}"),
        auth: this.#auth.bearerAuth,
        pathParams: [
          { name: "platform", value: request.platform, schema: platformSchema },
          { name: "id", value: request.id, schema: s.string() },
        ],
        query: [
          { name: "country", value: request.country, schema: s.optional(s.string()) },
          { name: "checkIn", value: request.checkIn, schema: s.optional(s.string()) },
          { name: "checkOut", value: request.checkOut, schema: s.optional(s.string()) },
          { name: "currency", value: request.currency, schema: s.optional(s.string()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: listingResponseInternalSchema },
        errorFactory: DataApi.ListingError,
      },
      options,
    );
  }

  /**
   * Live price for a listing + dates (3 credits/leg, flat)
   *
   * @returns Success.
   *
   * @throws {@link DataApi.PriceError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link StayingApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  price(
    request: DataApi.PriceRequest,
    options?: RequestOptions,
  ): ApiPromise<PriceResponse, DataApi.PriceError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/price"),
        auth: this.#auth.bearerAuth,
        pathParams: [],
        query: [
          { name: "platform", value: request.platform, schema: platformSchema },
          { name: "listingId", value: request.listingId, schema: s.string() },
          { name: "checkIn", value: request.checkIn, schema: s.string() },
          { name: "checkOut", value: request.checkOut, schema: s.string() },
          { name: "currency", value: request.currency, schema: s.optional(s.string()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: priceResponseInternalSchema },
        errorFactory: DataApi.PriceError,
      },
      options,
    );
  }

  /**
   * Cross-OTA price comparison — via Google (30 credits, flat) or across listing…
   *
   * @remarks
   * TWO modes, one response type.
   *
   * **Google-aggregator mode** (`name` / `location` / `googleHotelId`): we resolve the property on
   * Google Hotels and report the offers it surfaces. You need no ids. Flat 30 credits.
   *
   * **Direct fan-out mode** (`listings=`): you supply 2–6 `platform:listingId` pairs for the SAME
   * property and we run one real price call per listing, in parallel, then normalize the comparison
   * ourselves. Each offer carries `platform`, `listingId`, `nightlyPrice`, `nights` and a
   * best-effort `fees` breakdown, and the response is marked `source: 'direct_fanout'`. Billed as
   * the SUM of the per-platform price legs; a leg that fails or returns nothing is charged 0 and is
   * reported in `meta.platformResults` with `meta.partial: true`.
   *
   * FEE COVERAGE IS UNEVEN and this is deliberate rather than a gap we hide: Airbnb reports
   * cleaning, service and taxes; Booking.com reports taxes only; Vrbo and Google report none.
   * Compare on `totalPrice`, which is present and comparable everywhere. A null fee means we could
   * not read it, NOT that the platform does not charge it.
   *
   * `min` and `median` cover only the offers quoted in the response `currency`; offers in another
   * currency are still returned but excluded from the summary.
   *
   * @returns Success.
   *
   * @throws {@link DataApi.PriceCompareError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link StayingApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  priceCompare(
    request: DataApi.PriceCompareRequest,
    options?: RequestOptions,
  ): ApiPromise<PriceCompareResponse, DataApi.PriceCompareError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/price-compare"),
        auth: this.#auth.bearerAuth,
        pathParams: [],
        query: [
          { name: "checkIn", value: request.checkIn, schema: s.string() },
          { name: "checkOut", value: request.checkOut, schema: s.string() },
          { name: "listings", value: request.listings, schema: s.optional(s.string()) },
          { name: "name", value: request.name, schema: s.optional(s.string()) },
          { name: "location", value: request.location, schema: s.optional(s.string()) },
          { name: "googleHotelId", value: request.googleHotelId, schema: s.optional(s.string()) },
          { name: "adults", value: request.adults, schema: s.optional(s.int()) },
          { name: "children", value: request.children, schema: s.optional(s.int()) },
          { name: "currency", value: request.currency, schema: s.optional(s.string()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: priceCompareResponseInternalSchema },
        errorFactory: DataApi.PriceCompareError,
      },
      options,
    );
  }

  /**
   * Listing reviews (per-review: RATE×reviews, min 5 credits; airbnb 5×…
   *
   * @remarks
   * Provide EXACTLY ONE of listingId or url. None → missing_parameter; both →
   * mutually_exclusive_params; a bad url → invalid_listing_url. Required params are platform plus
   * either listingId or url. listingId should be the platform-native id from /v1/search
   * `platformListingId`; a `stays__` object id is accepted, normalized, and may supply platform
   * when platform is omitted.
   *
   * @returns Success.
   *
   * @throws {@link DataApi.ReviewsError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link StayingApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  reviews(
    request: DataApi.ReviewsRequest,
    options?: RequestOptions,
  ): ApiPromise<ReviewsResponse, DataApi.ReviewsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/reviews"),
        auth: this.#auth.bearerAuth,
        pathParams: [],
        query: [
          { name: "platform", value: request.platform, schema: platformSchema },
          { name: "listingId", value: request.listingId, schema: s.optional(s.string()) },
          { name: "url", value: request.url, schema: s.optional(s.string()) },
          { name: "limit", value: request.limit, schema: s.optional(s.int()) },
          { name: "cursor", value: request.cursor, schema: s.optional(s.string()) },
          { name: "language", value: request.language, schema: s.optional(s.string()) },
          { name: "sort", value: request.sort, schema: s.optional(s.string()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: reviewsResponseInternalSchema },
        errorFactory: DataApi.ReviewsError,
      },
      options,
    );
  }

  /**
   * Search properties across platforms (per-result: RATE×results per platform, min…
   *
   * @returns Success.
   *
   * @throws {@link DataApi.SearchGetError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link StayingApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  searchGet(
    request: DataApi.SearchGetRequest,
    options?: RequestOptions,
  ): ApiPromise<SearchResponse, DataApi.SearchGetError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/search"),
        auth: this.#auth.bearerAuth,
        pathParams: [],
        query: [
          { name: "location", value: request.location, schema: s.string() },
          { name: "checkIn", value: request.checkIn, schema: s.optional(s.string()) },
          { name: "checkOut", value: request.checkOut, schema: s.optional(s.string()) },
          { name: "platforms", value: request.platforms, schema: s.optional(s.string()) },
          { name: "platform", value: request.platform, schema: s.optional(s.string()) },
          { name: "adults", value: request.adults, schema: s.optional(s.int()) },
          { name: "children", value: request.children, schema: s.optional(s.int()) },
          { name: "rooms", value: request.rooms, schema: s.optional(s.int()) },
          { name: "currency", value: request.currency, schema: s.optional(s.string()) },
          { name: "limit", value: request.limit, schema: s.optional(s.int()) },
          { name: "cursor", value: request.cursor, schema: s.optional(s.string()) },
          { name: "sort", value: request.sort, schema: s.optional(s.string()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: searchResponseInternalSchema },
        errorFactory: DataApi.SearchGetError,
      },
      options,
    );
  }

  /**
   * Search properties (JSON body form of GET /search)
   *
   * @returns Success.
   *
   * @throws {@link DataApi.SearchPostError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link StayingApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  searchPost(
    request: DataApi.SearchPostRequest,
    options?: RequestOptions,
  ): ApiPromise<SearchResponse, DataApi.SearchPostError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/search"),
        auth: this.#auth.bearerAuth,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: s.record(s.string(), s.unknown()) },
      },
      {
        success: { kind: "json", schema: searchResponseInternalSchema },
        errorFactory: DataApi.SearchPostError,
      },
      options,
    );
  }
}

export namespace DataApi {
  export type AvailabilityRequest = {
    /** Target platform (must be enabled for availability). */
    platform: Platform;
    /** YYYY-MM-DD (required). */
    startDate: string;
    /** YYYY-MM-DD (required). */
    endDate: string;
    /** Platform listing id (one identification form). */
    listingId?: string;
    /** Comma-separated listing ids (one identification form). */
    listingIds?: string;
    /** Full listing URL for the platform (one identification form). */
    url?: string;
    /** Only return available dates. */
    onlyAvailable?: boolean;
  };

  export class AvailabilityError extends ApiError {
    declare readonly payload:
      | Declared<"errorEnvelope", ErrorEnvelope>
      | Declared<"errorEnvelope2", ErrorEnvelope>
      | Declared<"errorEnvelope3", ErrorEnvelope>
      | Declared<"errorEnvelope4", ErrorEnvelope>
      | Declared<"errorEnvelope5", ErrorEnvelope>
      | Declared<"errorEnvelope6", ErrorEnvelope>
      | Undeclared;

    static readonly errors: ErrorDecoders<AvailabilityError> = [
      { on: 400, kind: "errorEnvelope", decode: { kind: "json", schema: errorEnvelopeInternalSchema } },
      { on: 401, kind: "errorEnvelope2", decode: { kind: "json", schema: errorEnvelopeInternalSchema } },
      { on: 402, kind: "errorEnvelope3", decode: { kind: "json", schema: errorEnvelopeInternalSchema } },
      { on: 403, kind: "errorEnvelope4", decode: { kind: "json", schema: errorEnvelopeInternalSchema } },
      { on: 429, kind: "errorEnvelope5", decode: { kind: "json", schema: errorEnvelopeInternalSchema } },
      { on: 503, kind: "errorEnvelope6", decode: { kind: "json", schema: errorEnvelopeInternalSchema } },
    ];
  }

  export type ListingRequest = {
    platform: Platform;
    id: string;
    /**
     * ISO-3166 alpha-2 country hint (booking). Disambiguates a bare booking.com slug (slugs are not
     * globally unique) without the %2F-encoded /hotel/{cc}/{slug} id — e.g.
     * /v1/listing/booking/casa-de-alba?country=co. A bare booking slug with no country returns 400
     * needs_country.
     */
    country?: string;
    /** YYYY-MM-DD. */
    checkIn?: string;
    /** YYYY-MM-DD. */
    checkOut?: string;
    /** ISO-4217; default USD. */
    currency?: string;
  };

  export class ListingError extends ApiError {
    declare readonly payload:
      | Declared<"errorEnvelope", ErrorEnvelope>
      | Declared<"errorEnvelope2", ErrorEnvelope>
      | Declared<"errorEnvelope3", ErrorEnvelope>
      | Declared<"errorEnvelope4", ErrorEnvelope>
      | Declared<"errorEnvelope5", ErrorEnvelope>
      | Declared<"errorEnvelope6", ErrorEnvelope>
      | Undeclared;

    static readonly errors: ErrorDecoders<ListingError> = [
      { on: 400, kind: "errorEnvelope", decode: { kind: "json", schema: errorEnvelopeInternalSchema } },
      { on: 401, kind: "errorEnvelope2", decode: { kind: "json", schema: errorEnvelopeInternalSchema } },
      { on: 402, kind: "errorEnvelope3", decode: { kind: "json", schema: errorEnvelopeInternalSchema } },
      { on: 403, kind: "errorEnvelope4", decode: { kind: "json", schema: errorEnvelopeInternalSchema } },
      { on: 429, kind: "errorEnvelope5", decode: { kind: "json", schema: errorEnvelopeInternalSchema } },
      { on: 503, kind: "errorEnvelope6", decode: { kind: "json", schema: errorEnvelopeInternalSchema } },
    ];
  }

  export type PriceRequest = {
    /** Target platform (must be enabled for price). */
    platform: Platform;
    /** Platform listing id. */
    listingId: string;
    /** YYYY-MM-DD (required). */
    checkIn: string;
    /** YYYY-MM-DD (required). */
    checkOut: string;
    /** ISO-4217; default USD. */
    currency?: string;
  };

  export class PriceError extends ApiError {
    declare readonly payload:
      | Declared<"errorEnvelope", ErrorEnvelope>
      | Declared<"errorEnvelope2", ErrorEnvelope>
      | Declared<"errorEnvelope3", ErrorEnvelope>
      | Declared<"errorEnvelope4", ErrorEnvelope>
      | Declared<"errorEnvelope5", ErrorEnvelope>
      | Declared<"errorEnvelope6", ErrorEnvelope>
      | Undeclared;

    static readonly errors: ErrorDecoders<PriceError> = [
      { on: 400, kind: "errorEnvelope", decode: { kind: "json", schema: errorEnvelopeInternalSchema } },
      { on: 401, kind: "errorEnvelope2", decode: { kind: "json", schema: errorEnvelopeInternalSchema } },
      { on: 402, kind: "errorEnvelope3", decode: { kind: "json", schema: errorEnvelopeInternalSchema } },
      { on: 403, kind: "errorEnvelope4", decode: { kind: "json", schema: errorEnvelopeInternalSchema } },
      { on: 429, kind: "errorEnvelope5", decode: { kind: "json", schema: errorEnvelopeInternalSchema } },
      { on: 503, kind: "errorEnvelope6", decode: { kind: "json", schema: errorEnvelopeInternalSchema } },
    ];
  }

  export type PriceCompareRequest = {
    /** YYYY-MM-DD (required). */
    checkIn: string;
    /** YYYY-MM-DD (required). */
    checkOut: string;
    /**
     * DIRECT MODE. 2–6 comma-separated (or repeated) platform:listingId pairs for the same
     * property, e.g. listings=airbnb:12345,booking:co/casa-de-alba,vrbo:987654. Split on the FIRST
     * colon, so a full listing URL works as the id. Mutually exclusive with
     * name/location/googleHotelId. An id containing a comma must be sent as a repeated param.
     */
    listings?: string;
    /** GOOGLE MODE. Property name (one of name/location/googleHotelId). */
    name?: string;
    /** GOOGLE MODE. Location hint (one of name/location/googleHotelId). */
    location?: string;
    /** GOOGLE MODE. Google hotel id (mutually exclusive with name/location). */
    googleHotelId?: string;
    /** Default 2. */
    adults?: number;
    /** Default 0. */
    children?: number;
    /** ISO-4217; default USD. */
    currency?: string;
  };

  export class PriceCompareError extends ApiError {
    declare readonly payload:
      | Declared<"errorEnvelope", ErrorEnvelope>
      | Declared<"errorEnvelope2", ErrorEnvelope>
      | Declared<"errorEnvelope3", ErrorEnvelope>
      | Declared<"errorEnvelope4", ErrorEnvelope>
      | Declared<"errorEnvelope5", ErrorEnvelope>
      | Declared<"errorEnvelope6", ErrorEnvelope>
      | Undeclared;

    static readonly errors: ErrorDecoders<PriceCompareError> = [
      { on: 400, kind: "errorEnvelope", decode: { kind: "json", schema: errorEnvelopeInternalSchema } },
      { on: 401, kind: "errorEnvelope2", decode: { kind: "json", schema: errorEnvelopeInternalSchema } },
      { on: 402, kind: "errorEnvelope3", decode: { kind: "json", schema: errorEnvelopeInternalSchema } },
      { on: 403, kind: "errorEnvelope4", decode: { kind: "json", schema: errorEnvelopeInternalSchema } },
      { on: 429, kind: "errorEnvelope5", decode: { kind: "json", schema: errorEnvelopeInternalSchema } },
      { on: 503, kind: "errorEnvelope6", decode: { kind: "json", schema: errorEnvelopeInternalSchema } },
    ];
  }

  export type ReviewsRequest = {
    /** Target platform (must be enabled for reviews). */
    platform: Platform;
    /**
     * Platform-native id from /v1/search `platformListingId` (one identification form); a
     * `stays_<platform>_<platformListingId>` id is accepted, normalized, and may supply platform
     * when platform is omitted.
     */
    listingId?: string;
    /** Full listing URL (one identification form). */
    url?: string;
    /** 1–100; default 20. */
    limit?: number;
    /** Opaque pagination cursor. */
    cursor?: string;
    /** ISO-639-1 filter. */
    language?: string;
    /** recent | rating_desc | rating_asc. */
    sort?: string;
  };

  export class ReviewsError extends ApiError {
    declare readonly payload:
      | Declared<"errorEnvelope", ErrorEnvelope>
      | Declared<"errorEnvelope2", ErrorEnvelope>
      | Declared<"errorEnvelope3", ErrorEnvelope>
      | Declared<"errorEnvelope4", ErrorEnvelope>
      | Declared<"errorEnvelope5", ErrorEnvelope>
      | Declared<"errorEnvelope6", ErrorEnvelope>
      | Undeclared;

    static readonly errors: ErrorDecoders<ReviewsError> = [
      { on: 400, kind: "errorEnvelope", decode: { kind: "json", schema: errorEnvelopeInternalSchema } },
      { on: 401, kind: "errorEnvelope2", decode: { kind: "json", schema: errorEnvelopeInternalSchema } },
      { on: 402, kind: "errorEnvelope3", decode: { kind: "json", schema: errorEnvelopeInternalSchema } },
      { on: 403, kind: "errorEnvelope4", decode: { kind: "json", schema: errorEnvelopeInternalSchema } },
      { on: 429, kind: "errorEnvelope5", decode: { kind: "json", schema: errorEnvelopeInternalSchema } },
      { on: 503, kind: "errorEnvelope6", decode: { kind: "json", schema: errorEnvelopeInternalSchema } },
    ];
  }

  export type SearchGetRequest = {
    /** Destination (city, region, address). */
    location: string;
    /** YYYY-MM-DD. */
    checkIn?: string;
    /** YYYY-MM-DD. */
    checkOut?: string;
    /** Comma-separated platforms; defaults to all enabled. `limit` applies per platform. */
    platforms?: string;
    /** Alias for `platforms=<value>` when requesting exactly one platform. */
    platform?: string;
    /** Default 2. */
    adults?: number;
    /** Default 0; requires matching childAges. */
    children?: number;
    /** Default 1. */
    rooms?: number;
    /** ISO-4217; default USD. */
    currency?: string;
    /**
     * 1–40; default 10. Applies per platform: a 3-platform search with limit=5 returns up to 15
     * results.
     */
    limit?: number;
    /** Opaque pagination cursor. */
    cursor?: string;
    /** recommended | price_asc | price_desc | rating_desc. */
    sort?: string;
  };

  export class SearchGetError extends ApiError {
    declare readonly payload:
      | Declared<"errorEnvelope", ErrorEnvelope>
      | Declared<"errorEnvelope2", ErrorEnvelope>
      | Declared<"errorEnvelope3", ErrorEnvelope>
      | Declared<"errorEnvelope4", ErrorEnvelope>
      | Declared<"errorEnvelope5", ErrorEnvelope>
      | Declared<"errorEnvelope6", ErrorEnvelope>
      | Undeclared;

    static readonly errors: ErrorDecoders<SearchGetError> = [
      { on: 400, kind: "errorEnvelope", decode: { kind: "json", schema: errorEnvelopeInternalSchema } },
      { on: 401, kind: "errorEnvelope2", decode: { kind: "json", schema: errorEnvelopeInternalSchema } },
      { on: 402, kind: "errorEnvelope3", decode: { kind: "json", schema: errorEnvelopeInternalSchema } },
      { on: 403, kind: "errorEnvelope4", decode: { kind: "json", schema: errorEnvelopeInternalSchema } },
      { on: 429, kind: "errorEnvelope5", decode: { kind: "json", schema: errorEnvelopeInternalSchema } },
      { on: 503, kind: "errorEnvelope6", decode: { kind: "json", schema: errorEnvelopeInternalSchema } },
    ];
  }

  export type SearchPostRequest = {
    body: Record<string, unknown>;
  };

  export class SearchPostError extends ApiError {
    declare readonly payload:
      | Declared<"errorEnvelope", ErrorEnvelope>
      | Declared<"errorEnvelope2", ErrorEnvelope>
      | Declared<"errorEnvelope3", ErrorEnvelope>
      | Declared<"errorEnvelope4", ErrorEnvelope>
      | Declared<"errorEnvelope5", ErrorEnvelope>
      | Declared<"errorEnvelope6", ErrorEnvelope>
      | Undeclared;

    static readonly errors: ErrorDecoders<SearchPostError> = [
      { on: 400, kind: "errorEnvelope", decode: { kind: "json", schema: errorEnvelopeInternalSchema } },
      { on: 401, kind: "errorEnvelope2", decode: { kind: "json", schema: errorEnvelopeInternalSchema } },
      { on: 402, kind: "errorEnvelope3", decode: { kind: "json", schema: errorEnvelopeInternalSchema } },
      { on: 403, kind: "errorEnvelope4", decode: { kind: "json", schema: errorEnvelopeInternalSchema } },
      { on: 429, kind: "errorEnvelope5", decode: { kind: "json", schema: errorEnvelopeInternalSchema } },
      { on: 503, kind: "errorEnvelope6", decode: { kind: "json", schema: errorEnvelopeInternalSchema } },
    ];
  }
}
