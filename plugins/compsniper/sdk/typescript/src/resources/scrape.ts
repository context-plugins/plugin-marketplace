import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { noneAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { apiErrorModelInternalSchema, type ApiErrorModel } from "../models/api-error-model.js";
import { BuyingFormat, buyingFormatSchema } from "../models/buying-format.js";
import { EbaySite, ebaySiteSchema } from "../models/ebay-site.js";
import { itemConditionSchema, type ItemCondition } from "../models/item-condition.js";
import { ItemLocation, itemLocationSchema } from "../models/item-location.js";
import { maxCancelResponseSchema, type MaxCancelResponse } from "../models/max-cancel-response.js";
import { maxJobAcceptedSchema, type MaxJobAccepted } from "../models/max-job-accepted.js";
import { maxJobInternalSchema, type MaxJob } from "../models/max-job.js";
import {
  maxSearchRequestInternalSchema,
  maxSearchRequestSchema,
  type MaxSearchRequest,
} from "../models/max-search-request.js";
import { scrapeResponseInternalSchema, type ScrapeResponse } from "../models/scrape-response.js";
import { sellerTypeSchema, type SellerType } from "../models/seller-type.js";
import { sortOrderSchema, type SortOrder } from "../models/sort-order.js";
import { sortOrder1Schema, type SortOrder1 } from "../models/sort-order1.js";
import { xCreditSourceSchema, type XCreditSource } from "../models/xcredit-source.js";
import type { Servers } from "../servers.js";

export class Scrape {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Browse eBay sold listings by category
   *
   * @remarks
   * Returns completed eBay sales from one category without requiring a keyword. Uses the same
   * authentication, quota, filtering, response shape, and error contract as /v1/scrape.
   *
   * @returns Category sold listings and price summary. keyword is an empty string.
   *
   * @throws {@link Scrape.BrowseSoldListingsByCategoryError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link CompSniperError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  browseSoldListingsByCategory(
    request: Scrape.BrowseSoldListingsByCategoryRequest,
    options?: RequestOptions,
  ): ApiPromise<ScrapeResponse, Scrape.BrowseSoldListingsByCategoryError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v1/scrape/category"),
        auth: this.#auth.bearerAuth,
        pathParams: [],
        query: [
          { name: "categoryId", value: request.categoryId, schema: s.string() },
          { name: "count", value: request.count, schema: s.defaulted(s.int(), 240) },
          { name: "page", value: request.page, schema: s.defaulted(s.int(), 1) },
          {
            name: "ebaySite",
            value: request.ebaySite,
            schema: s.defaulted(ebaySiteSchema, EbaySite.EbayCom),
          },
          { name: "sortOrder", value: request.sortOrder, schema: s.optional(s.lazy(() => sortOrderSchema)) },
          {
            name: "itemCondition",
            value: request.itemCondition,
            schema: s.optional(s.lazy(() => itemConditionSchema)),
          },
          { name: "conditionId", value: request.conditionId, schema: s.optional(s.int()) },
          {
            name: "buyingFormat",
            value: request.buyingFormat,
            schema: s.optional(s.lazy(() => buyingFormatSchema)),
          },
          {
            name: "sellerType",
            value: request.sellerType,
            schema: s.optional(s.lazy(() => sellerTypeSchema)),
          },
          { name: "minPrice", value: request.minPrice, schema: s.optional(s.float64()) },
          { name: "maxPrice", value: request.maxPrice, schema: s.optional(s.float64()) },
          { name: "aspectFilter", value: request.aspectFilter, schema: s.optional(s.string()) },
        ],
        headers: [
          {
            name: "X-Credit-Source",
            value: request.xCreditSource,
            schema: s.optional(s.lazy(() => xCreditSourceSchema)),
          },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: scrapeResponseInternalSchema },
        errorFactory: Scrape.BrowseSoldListingsByCategoryError,
      },
      options,
    );
  }

  /**
   * Cancel a queued or running Max Mode job
   *
   * @returns Cancellation requested or existing terminal status returned.
   *
   * @throws {@link Scrape.CancelMaxSearchError} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link CompSniperError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  cancelMaxSearch(
    request: Scrape.CancelMaxSearchRequest,
    options?: RequestOptions,
  ): ApiPromise<MaxCancelResponse, Scrape.CancelMaxSearchError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default("/v1/scrape/max/{jobId}"),
        auth: this.#auth.bearerAuth,
        pathParams: [{ name: "jobId", value: request.jobId, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: maxCancelResponseSchema },
        errorFactory: Scrape.CancelMaxSearchError,
      },
      options,
    );
  }

  /**
   * Download a signed Max Mode CSV
   *
   * @remarks
   * Downloads the stored job result using the signed token returned for download or email delivery.
   * The token itself authorizes this URL.
   *
   * @returns CSV export.
   *
   * @throws {@link Scrape.DownloadMaxSearchCsvError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link CompSniperError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  downloadMaxSearchCsv(
    request: Scrape.DownloadMaxSearchCsvRequest,
    options?: RequestOptions,
  ): ApiPromise<string, Scrape.DownloadMaxSearchCsvError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v1/scrape/max/{jobId}/download.csv"),
        auth: noneAuth,
        pathParams: [{ name: "jobId", value: request.jobId, schema: s.string() }],
        query: [{ name: "token", value: request.token, schema: s.string() }],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "text", schema: s.string() },
        errorFactory: Scrape.DownloadMaxSearchCsvError,
      },
      options,
    );
  }

  /**
   * Poll Max Mode progress or results
   *
   * @returns Current job progress or terminal result.
   *
   * @throws {@link Scrape.GetMaxSearchResultsError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link CompSniperError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getMaxSearchResults(
    request: Scrape.GetMaxSearchResultsRequest,
    options?: RequestOptions,
  ): ApiPromise<MaxJob, Scrape.GetMaxSearchResultsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v1/scrape/max/results/{jobId}"),
        auth: this.#auth.bearerAuth,
        pathParams: [{ name: "jobId", value: request.jobId, schema: s.string() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: maxJobInternalSchema },
        errorFactory: Scrape.GetMaxSearchResultsError,
      },
      options,
    );
  }

  /**
   * Search eBay sold or active listings
   *
   * @remarks
   * Returns completed eBay sales by default. Set sold=false for current active listings.
   *
   * @returns Sold listings with price intelligence, or active listings with visible demand signals.
   *
   * @throws {@link Scrape.SearchSoldListingsError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link CompSniperError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  searchSoldListings(
    request: Scrape.SearchSoldListingsRequest,
    options?: RequestOptions,
  ): ApiPromise<ScrapeResponse, Scrape.SearchSoldListingsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v1/scrape"),
        auth: this.#auth.bearerAuth,
        pathParams: [],
        query: [
          { name: "keyword", value: request.keyword, schema: s.string() },
          { name: "count", value: request.count, schema: s.defaulted(s.int(), 240) },
          { name: "page", value: request.page, schema: s.defaulted(s.int(), 1) },
          {
            name: "ebaySite",
            value: request.ebaySite,
            schema: s.defaulted(ebaySiteSchema, EbaySite.EbayCom),
          },
          { name: "categoryId", value: request.categoryId, schema: s.defaulted(s.string(), "0") },
          { name: "sortOrder", value: request.sortOrder, schema: s.optional(s.lazy(() => sortOrder1Schema)) },
          {
            name: "itemLocation",
            value: request.itemLocation,
            schema: s.defaulted(itemLocationSchema, ItemLocation.Default),
          },
          {
            name: "itemCondition",
            value: request.itemCondition,
            schema: s.optional(s.lazy(() => itemConditionSchema)),
          },
          { name: "conditionId", value: request.conditionId, schema: s.optional(s.int()) },
          {
            name: "buyingFormat",
            value: request.buyingFormat,
            schema: s.defaulted(buyingFormatSchema, BuyingFormat.All),
          },
          {
            name: "sellerType",
            value: request.sellerType,
            schema: s.optional(s.lazy(() => sellerTypeSchema)),
          },
          { name: "minPrice", value: request.minPrice, schema: s.optional(s.float64()) },
          { name: "maxPrice", value: request.maxPrice, schema: s.optional(s.float64()) },
          {
            name: "includeCompleteListing",
            value: request.includeCompleteListing,
            schema: s.defaulted(s.boolean(), true),
          },
          { name: "sold", value: request.sold, schema: s.defaulted(s.boolean(), true) },
          { name: "soldAfter", value: request.soldAfter, schema: s.optional(s.dateOnly()) },
          { name: "soldBefore", value: request.soldBefore, schema: s.optional(s.dateOnly()) },
          { name: "aspectFilter", value: request.aspectFilter, schema: s.optional(s.string()) },
          { name: "exactMatch", value: request.exactMatch, schema: s.defaulted(s.boolean(), false) },
          { name: "relevance", value: request.relevance, schema: s.defaulted(s.boolean(), true) },
          { name: "bestOfferPrice", value: request.bestOfferPrice, schema: s.defaulted(s.boolean(), false) },
        ],
        headers: [
          {
            name: "X-Credit-Source",
            value: request.xCreditSource,
            schema: s.optional(s.lazy(() => xCreditSourceSchema)),
          },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: scrapeResponseInternalSchema },
        errorFactory: Scrape.SearchSoldListingsError,
      },
      options,
    );
  }

  /**
   * Start an asynchronous Max Mode search
   *
   * @remarks
   * Searches up to 100 eBay result pages in the background. Each successful page uses one monthly
   * request, then one purchased credit after monthly quota is exhausted.
   *
   * @returns Existing idempotent job returned.
   *
   * @throws {@link Scrape.StartMaxSearchError} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link CompSniperError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  startMaxSearch(
    request: Scrape.StartMaxSearchRequest,
    options?: RequestOptions,
  ): ApiPromise<MaxJobAccepted, Scrape.StartMaxSearchError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/v1/scrape/max"),
        auth: this.#auth.bearerAuth,
        pathParams: [],
        query: [],
        headers: [
          {
            name: "X-Credit-Source",
            value: request.xCreditSource,
            schema: s.optional(s.lazy(() => xCreditSourceSchema)),
          },
          { name: "Idempotency-Key", value: request.idempotencyKey, schema: s.optional(s.string()) },
        ],
        body: { kind: "json", value: request.body, schema: maxSearchRequestInternalSchema },
      },
      {
        success: { kind: "json", schema: maxJobAcceptedSchema },
        errorFactory: Scrape.StartMaxSearchError,
      },
      options,
    );
  }
}

export namespace Scrape {
  export type BrowseSoldListingsByCategoryRequest = {
    /** Positive numeric eBay category id (_sacat). */
    categoryId: string;
    /**
     * Maximum items to return per page. This is a ceiling; fewer valid rows may remain after
     * baseline validation and filtering.
     *
     * @default 240
     */
    count?: number;
    /** @default 1 */
    page?: number;
    /** @default EbaySite.EbayCom */
    ebaySite?: EbaySite;
    sortOrder?: SortOrder;
    itemCondition?: ItemCondition;
    conditionId?: number;
    buyingFormat?: BuyingFormat;
    /** EU marketplaces only. */
    sellerType?: SellerType;
    minPrice?: number;
    maxPrice?: number;
    /** JSON object of human-readable eBay facets. */
    aspectFilter?: string;
    /**
     * Omit to use temporary carryover first, then monthly quota, then purchased credits. Set to
     * credits to spend a purchased credit directly. Failed searches are not charged.
     */
    xCreditSource?: XCreditSource;
  };

  export const browseSoldListingsByCategoryRequestSchema: Schema<BrowseSoldListingsByCategoryRequest> =
    s.lazySchema(() =>
      s.object<BrowseSoldListingsByCategoryRequest>({
        categoryId: s.string().check(s.pattern("^[1-9][0-9]*$")),
        count: s.defaulted(s.int().check(s.gte(1), s.lte(240)), 240),
        page: s.defaulted(s.int().check(s.gte(1), s.lte(100)), 1),
        ebaySite: s.defaulted(ebaySiteSchema, EbaySite.EbayCom),
        sortOrder: s.optional(s.lazy(() => sortOrderSchema)),
        itemCondition: s.optional(s.lazy(() => itemConditionSchema)),
        conditionId: s.optional(s.int().check(s.gte(0))),
        buyingFormat: s.optional(s.lazy(() => buyingFormatSchema)),
        sellerType: s.optional(s.lazy(() => sellerTypeSchema)),
        minPrice: s.optional(s.float64()),
        maxPrice: s.optional(s.float64()),
        aspectFilter: s.optional(s.string()),
        xCreditSource: s.optional(s.lazy(() => xCreditSourceSchema)),
      }),
    );

  export class BrowseSoldListingsByCategoryError extends ApiError {
    declare readonly payload:
      | Declared<"apiErrorModel", ApiErrorModel>
      | Declared<"apiErrorModel2", ApiErrorModel>
      | Declared<"apiErrorModel3", ApiErrorModel>
      | Declared<"apiErrorModel4", ApiErrorModel>
      | Declared<"apiErrorModel5", ApiErrorModel>
      | Undeclared;

    static readonly errors: ErrorDecoders<BrowseSoldListingsByCategoryError> = [
      { on: 400, kind: "apiErrorModel", decode: { kind: "json", schema: apiErrorModelInternalSchema } },
      { on: 401, kind: "apiErrorModel2", decode: { kind: "json", schema: apiErrorModelInternalSchema } },
      { on: 429, kind: "apiErrorModel3", decode: { kind: "json", schema: apiErrorModelInternalSchema } },
      { on: 502, kind: "apiErrorModel4", decode: { kind: "json", schema: apiErrorModelInternalSchema } },
      { on: 503, kind: "apiErrorModel5", decode: { kind: "json", schema: apiErrorModelInternalSchema } },
    ];
  }

  export type CancelMaxSearchRequest = {
    jobId: string;
  };

  export class CancelMaxSearchError extends ApiError {
    declare readonly payload:
      | Declared<"apiErrorModel", ApiErrorModel>
      | Declared<"apiErrorModel2", ApiErrorModel>
      | Declared<"apiErrorModel3", ApiErrorModel>
      | Undeclared;

    static readonly errors: ErrorDecoders<CancelMaxSearchError> = [
      { on: 401, kind: "apiErrorModel", decode: { kind: "json", schema: apiErrorModelInternalSchema } },
      { on: 403, kind: "apiErrorModel2", decode: { kind: "json", schema: apiErrorModelInternalSchema } },
      { on: 404, kind: "apiErrorModel3", decode: { kind: "json", schema: apiErrorModelInternalSchema } },
    ];
  }

  export type DownloadMaxSearchCsvRequest = {
    jobId: string;
    token: string;
  };

  export class DownloadMaxSearchCsvError extends ApiError {
    declare readonly payload: Declared<"error403", undefined> | Declared<"error404", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<DownloadMaxSearchCsvError> = [
      { on: 403, kind: "error403", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
    ];
  }

  export type GetMaxSearchResultsRequest = {
    jobId: string;
  };

  export class GetMaxSearchResultsError extends ApiError {
    declare readonly payload:
      | Declared<"apiErrorModel", ApiErrorModel>
      | Declared<"apiErrorModel2", ApiErrorModel>
      | Declared<"apiErrorModel3", ApiErrorModel>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetMaxSearchResultsError> = [
      { on: 401, kind: "apiErrorModel", decode: { kind: "json", schema: apiErrorModelInternalSchema } },
      { on: 403, kind: "apiErrorModel2", decode: { kind: "json", schema: apiErrorModelInternalSchema } },
      { on: 404, kind: "apiErrorModel3", decode: { kind: "json", schema: apiErrorModelInternalSchema } },
    ];
  }

  export type SearchSoldListingsRequest = {
    /**
     * Product to search. Supports eBay operators, e.g. minus-sign exclusions ('airpods pro -case').
     */
    keyword: string;
    /**
     * Maximum items to return per page. This is a ceiling; fewer valid rows may remain after
     * baseline validation, date filters, or relevance cleanup.
     *
     * @default 240
     */
    count?: number;
    /** @default 1 */
    page?: number;
    /** eBay marketplace. @default EbaySite.EbayCom */
    ebaySite?: EbaySite;
    /** eBay category id (_sacat). @default "0" */
    categoryId?: string;
    sortOrder?: SortOrder1;
    /** @default ItemLocation.Default */
    itemLocation?: ItemLocation;
    itemCondition?: ItemCondition;
    /** Numeric eBay condition id; overrides itemCondition. */
    conditionId?: number;
    /** @default BuyingFormat.All */
    buyingFormat?: BuyingFormat;
    /**
     * Filters labeled sellers on ebay.de, ebay.fr, ebay.it, and ebay.es. Ignored elsewhere;
     * unlabeled EU rows are excluded while filtering.
     */
    sellerType?: SellerType;
    minPrice?: number;
    maxPrice?: number;
    /** Sold-search compatibility option. Ignored when sold=false. @default true */
    includeCompleteListing?: boolean;
    /**
     * true returns completed sales. false returns current active listings with currentPrice,
     * watcherCount, unitsSold, acceptsOffers, and timeLeft when visible.
     *
     * @default true
     */
    sold?: boolean;
    soldAfter?: string;
    soldBefore?: string;
    /**
     * JSON object of human-readable eBay facet names. Values may be strings, pipe-delimited
     * strings, or arrays of strings.
     */
    aspectFilter?: string;
    /**
     * When true, removes listings after eBay's explicit Results matching fewer words boundary
     * before relevance cleanup. When the boundary is absent, rows are unchanged. This follows
     * eBay's section split and does not independently prove semantic exactness. false preserves the
     * existing broad-search cache and behavior. Leave it off for long, specific keywords (full card
     * numbers, full set names): eBay often has no exact matches for those, so exactMatch=true can
     * return no results even when the item sold many times.
     *
     * @default false
     */
    exactMatch?: boolean;
    /**
     * When true, query-aware deterministic checks remove explicit pricing mismatches before one
     * bounded semantic cleanup stage handles accessories, parts, and wrong models. Explicit query
     * intent is preserved. false disables both relevance stages and returns broad valid matches.
     * Baseline validation of item IDs, item URLs, prices, sold dates, and duplicate IDs always
     * applies.
     *
     * @default true
     */
    relevance?: boolean;
    /**
     * When true, sold rows where bestOfferAccepted is true gain acceptedOfferPrice (the price the
     * buyer actually paid, null unless found) and acceptedOfferPriceStatus (found, pending or
     * not_available). soldPrice is never changed. US-dollar sales only; other currencies return
     * not_available. No extra charge. Ignored with sold=false.
     *
     * @default false
     */
    bestOfferPrice?: boolean;
    /**
     * Omit to use temporary carryover first, then monthly quota, then purchased credits. Set to
     * credits to spend a purchased credit directly. Failed searches are not charged.
     */
    xCreditSource?: XCreditSource;
  };

  export const searchSoldListingsRequestSchema: Schema<SearchSoldListingsRequest> = s.lazySchema(() =>
    s.object<SearchSoldListingsRequest>({
      keyword: s.string(),
      count: s.defaulted(s.int().check(s.gte(1), s.lte(240)), 240),
      page: s.defaulted(s.int().check(s.gte(1)), 1),
      ebaySite: s.defaulted(ebaySiteSchema, EbaySite.EbayCom),
      categoryId: s.defaulted(s.string(), "0"),
      sortOrder: s.optional(s.lazy(() => sortOrder1Schema)),
      itemLocation: s.defaulted(itemLocationSchema, ItemLocation.Default),
      itemCondition: s.optional(s.lazy(() => itemConditionSchema)),
      conditionId: s.optional(s.int().check(s.gte(0))),
      buyingFormat: s.defaulted(buyingFormatSchema, BuyingFormat.All),
      sellerType: s.optional(s.lazy(() => sellerTypeSchema)),
      minPrice: s.optional(s.float64()),
      maxPrice: s.optional(s.float64()),
      includeCompleteListing: s.defaulted(s.boolean(), true),
      sold: s.defaulted(s.boolean(), true),
      soldAfter: s.optional(s.dateOnly()),
      soldBefore: s.optional(s.dateOnly()),
      aspectFilter: s.optional(s.string()),
      exactMatch: s.defaulted(s.boolean(), false),
      relevance: s.defaulted(s.boolean(), true),
      bestOfferPrice: s.defaulted(s.boolean(), false),
      xCreditSource: s.optional(s.lazy(() => xCreditSourceSchema)),
    }),
  );

  export class SearchSoldListingsError extends ApiError {
    declare readonly payload:
      | Declared<"apiErrorModel", ApiErrorModel>
      | Declared<"apiErrorModel2", ApiErrorModel>
      | Declared<"apiErrorModel3", ApiErrorModel>
      | Declared<"apiErrorModel4", ApiErrorModel>
      | Undeclared;

    static readonly errors: ErrorDecoders<SearchSoldListingsError> = [
      { on: 400, kind: "apiErrorModel", decode: { kind: "json", schema: apiErrorModelInternalSchema } },
      { on: 401, kind: "apiErrorModel2", decode: { kind: "json", schema: apiErrorModelInternalSchema } },
      { on: 429, kind: "apiErrorModel3", decode: { kind: "json", schema: apiErrorModelInternalSchema } },
      { on: 502, kind: "apiErrorModel4", decode: { kind: "json", schema: apiErrorModelInternalSchema } },
    ];
  }

  export type StartMaxSearchRequest = {
    /**
     * Omit to use temporary carryover first, then monthly quota, then purchased credits. Set to
     * credits to spend a purchased credit directly. Failed searches are not charged.
     */
    xCreditSource?: XCreditSource;
    /** Return the previously created job when a submission is retried. */
    idempotencyKey?: string;
    body: MaxSearchRequest;
  };

  export const startMaxSearchRequestSchema: Schema<StartMaxSearchRequest> = s.lazySchema(() =>
    s.object<StartMaxSearchRequest>({
      xCreditSource: s.optional(s.lazy(() => xCreditSourceSchema)),
      idempotencyKey: s.optional(s.string().check(s.maxLength(200))),
      body: maxSearchRequestSchema,
    }),
  );

  export class StartMaxSearchError extends ApiError {
    declare readonly payload:
      | Declared<"apiErrorModel", ApiErrorModel>
      | Declared<"apiErrorModel2", ApiErrorModel>
      | Declared<"apiErrorModel3", ApiErrorModel>
      | Declared<"apiErrorModel4", ApiErrorModel>
      | Declared<"apiErrorModel5", ApiErrorModel>
      | Undeclared;

    static readonly errors: ErrorDecoders<StartMaxSearchError> = [
      { on: 400, kind: "apiErrorModel", decode: { kind: "json", schema: apiErrorModelInternalSchema } },
      { on: 401, kind: "apiErrorModel2", decode: { kind: "json", schema: apiErrorModelInternalSchema } },
      { on: 403, kind: "apiErrorModel3", decode: { kind: "json", schema: apiErrorModelInternalSchema } },
      { on: 409, kind: "apiErrorModel4", decode: { kind: "json", schema: apiErrorModelInternalSchema } },
      { on: 429, kind: "apiErrorModel5", decode: { kind: "json", schema: apiErrorModelInternalSchema } },
    ];
  }
}
