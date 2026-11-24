import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { apiErrorModelSchema, type ApiErrorModel } from "../models/api-error-model.js";
import { daysOnZillow1Schema, type DaysOnZillow1 } from "../models/days-on-zillow1.js";
import { Format, formatSchema } from "../models/format.js";
import { searchResultsOkSchema, type SearchResultsOk } from "../models/search-results-ok.js";
import { Status1, status1Schema } from "../models/status1.js";
import { searchRequest2InternalSchema, type SearchRequest2 } from "../models/unions/search-request2.js";
import type { Servers } from "../servers.js";

export class Listings {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Search listings by bounding box
   *
   * @remarks
   * REST GET wrapper over /v1/search for one-line curl or agent-toolchain use. A `bbox`
   * (west,south,east,north) is REQUIRED — free-text location is not supported. Returns up to
   * `max_items` rows synchronously (default 50, hard cap 50); for more, use POST /v1/search with
   * async. Billed at 1 credit **per listing returned** — this cost is per-result, not per-call, so
   * a full-page search costs up to 50 credits; set `max_items` lower to cap it. Failed calls are
   * free.
   *
   * @returns Search rows (sync). Note: the search-row shape (SearchResultRow) is NOT the same as
   * the detail Property shape returned by the property endpoints.
   *
   * @throws {@link Listings.ListingsBboxError} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link ZillapiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listingsBbox(
    request: Listings.ListingsBboxRequest,
    options?: RequestOptions,
  ): ApiPromise<SearchResultsOk, Listings.ListingsBboxError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v1/listings"),
        auth: this.#auth.bearerAuth,
        pathParams: [],
        query: [
          { name: "bbox", value: request.bbox, schema: s.string() },
          { name: "status", value: request.status, schema: s.defaulted(status1Schema, Status1.ForSale) },
          { name: "price_min", value: request.priceMin, schema: s.optional(s.int()) },
          { name: "price_max", value: request.priceMax, schema: s.optional(s.int()) },
          { name: "beds_min", value: request.bedsMin, schema: s.optional(s.int()) },
          { name: "beds_max", value: request.bedsMax, schema: s.optional(s.int()) },
          { name: "baths_min", value: request.bathsMin, schema: s.optional(s.int()) },
          { name: "baths_max", value: request.bathsMax, schema: s.optional(s.int()) },
          { name: "sqft_min", value: request.sqftMin, schema: s.optional(s.int()) },
          { name: "sqft_max", value: request.sqftMax, schema: s.optional(s.int()) },
          { name: "year_built_min", value: request.yearBuiltMin, schema: s.optional(s.int()) },
          { name: "year_built_max", value: request.yearBuiltMax, schema: s.optional(s.int()) },
          { name: "home_types", value: request.homeTypes, schema: s.optional(s.string()) },
          {
            name: "days_on_zillow",
            value: request.daysOnZillow,
            schema: s.optional(s.lazy(() => daysOnZillow1Schema)),
          },
          { name: "max_items", value: request.maxItems, schema: s.defaulted(s.int(), 50) },
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
          { name: "location", value: request.location, schema: s.optional(s.string()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: searchResultsOkSchema },
        errorFactory: Listings.ListingsBboxError,
      },
      options,
    );
  }

  /**
   * Search for-rent listings
   *
   * @remarks
   * Search for-rent listings within a bounding box (status forced to for_rent). Same body as POST
   * /v1/search; a `bbox` or `searchUrls` is required. Billed at 1 credit per listing returned;
   * failed calls are free.
   *
   * @returns Search rows (sync). Note: the search-row shape (SearchResultRow) is NOT the same as
   * the detail Property shape returned by the property endpoints.
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link ZillapiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listingsForRent(
    request: Listings.ListingsForRentRequest,
    options?: RequestOptions,
  ): ApiPromise<SearchResultsOk, ApiError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/v1/listings/for-rent"),
        auth: this.#auth.bearerAuth,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: searchRequest2InternalSchema },
      },
      {
        success: { kind: "json", schema: searchResultsOkSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Search for-sale listings
   *
   * @remarks
   * Search for-sale listings within a bounding box (status forced to for_sale). Same body as POST
   * /v1/search; a `bbox` or `searchUrls` is required. Billed at 1 credit per listing returned;
   * failed calls are free.
   *
   * @returns Search rows (sync). Note: the search-row shape (SearchResultRow) is NOT the same as
   * the detail Property shape returned by the property endpoints.
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link ZillapiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listingsForSale(
    request: Listings.ListingsForSaleRequest,
    options?: RequestOptions,
  ): ApiPromise<SearchResultsOk, ApiError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/v1/listings/for-sale"),
        auth: this.#auth.bearerAuth,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: searchRequest2InternalSchema },
      },
      {
        success: { kind: "json", schema: searchResultsOkSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Search sold listings
   *
   * @remarks
   * Search recently-sold listings within a bounding box (status forced to sold). Same body as POST
   * /v1/search; a `bbox` or `searchUrls` is required. Billed at 1 credit per listing returned;
   * failed calls are free.
   *
   * @returns Search rows (sync). Note: the search-row shape (SearchResultRow) is NOT the same as
   * the detail Property shape returned by the property endpoints.
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link ZillapiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listingsSold(
    request: Listings.ListingsSoldRequest,
    options?: RequestOptions,
  ): ApiPromise<SearchResultsOk, ApiError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/v1/listings/sold"),
        auth: this.#auth.bearerAuth,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: searchRequest2InternalSchema },
      },
      {
        success: { kind: "json", schema: searchResultsOkSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }
}

export namespace Listings {
  export type ListingsBboxRequest = {
    /**
     * REQUIRED bounding box as `west,south,east,north` (decimal degrees, comma-separated). A
     * free-text location alone is not accepted and returns 400 missing_input; the search engine
     * needs a real bounding box.
     */
    bbox: string;
    /** Listing status preset. @default Status1.ForSale */
    status?: Status1;
    /** Minimum price in dollars. */
    priceMin?: number;
    /** Maximum price in dollars. */
    priceMax?: number;
    /** Minimum bedrooms. */
    bedsMin?: number;
    /** Maximum bedrooms. */
    bedsMax?: number;
    /** Minimum bathrooms. */
    bathsMin?: number;
    /** Maximum bathrooms. */
    bathsMax?: number;
    /** Minimum living area in square feet. */
    sqftMin?: number;
    /** Maximum living area in square feet. */
    sqftMax?: number;
    /** Minimum year built. */
    yearBuiltMin?: number;
    /** Maximum year built. */
    yearBuiltMax?: number;
    /**
     * Comma-separated home types: house,condo,townhouse,multi_family,manufactured,lot,apartment.
     */
    homeTypes?: string;
    /** Max age of the listing on Zillow. */
    daysOnZillow?: DaysOnZillow1;
    /**
     * Maximum rows to return in sync mode (default 50, hard cap 50). Billing is 1 credit per row
     * returned, so this is your cost cap — e.g. max_items=5 costs at most 5 credits. For more than
     * 50 results, switch to POST /v1/search with async: true.
     *
     * @default 50
     */
    maxItems?: number;
    /** Response format. @default Format.Json */
    format?: Format;
    /**
     * Optional free-text place label (city/ZIP/neighborhood) — a hint only. A `bbox` is REQUIRED;
     * `location` alone returns 400 (missing_input).
     */
    location?: string;
  };

  export const listingsBboxRequestSchema: Schema<ListingsBboxRequest> = s.lazySchema(() =>
    s.object<ListingsBboxRequest>({
      bbox: s.string(),
      status: s.defaulted(status1Schema, Status1.ForSale),
      priceMin: s.optional(s.int()),
      priceMax: s.optional(s.int()),
      bedsMin: s.optional(s.int()),
      bedsMax: s.optional(s.int()),
      bathsMin: s.optional(s.int()),
      bathsMax: s.optional(s.int()),
      sqftMin: s.optional(s.int()),
      sqftMax: s.optional(s.int()),
      yearBuiltMin: s.optional(s.int()),
      yearBuiltMax: s.optional(s.int()),
      homeTypes: s.optional(s.string()),
      daysOnZillow: s.optional(s.lazy(() => daysOnZillow1Schema)),
      maxItems: s.defaulted(s.int().check(s.lte(50)), 50),
      format: s.defaulted(formatSchema, Format.Json),
      location: s.optional(s.string()),
    }),
  );

  export class ListingsBboxError extends ApiError {
    declare readonly payload: Declared<"apiErrorModel", ApiErrorModel> | Undeclared;

    static readonly errors: ErrorDecoders<ListingsBboxError> = [
      { on: 400, kind: "apiErrorModel", decode: { kind: "json", schema: apiErrorModelSchema } },
    ];
  }

  export type ListingsForRentRequest = {
    body: SearchRequest2;
  };

  export type ListingsForSaleRequest = {
    body: SearchRequest2;
  };

  export type ListingsSoldRequest = {
    body: SearchRequest2;
  };
}
