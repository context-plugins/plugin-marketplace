import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { companySearchResultSchema, type CompanySearchResult } from "../models/company-search-result.js";
import { errorResponseSchema, type ErrorResponse } from "../models/error-response.js";
import {
  journalistSearchResultSchema,
  type JournalistSearchResult,
} from "../models/journalist-search-result.js";
import { journalistSchema, type Journalist } from "../models/journalist.js";
import { journalistsSortBySchema, type JournalistsSortBy } from "../models/journalists-sort-by.js";
import { peopleSearchResultSchema, type PeopleSearchResult } from "../models/people-search-result.js";
import { sourceSearchResultSchema, type SourceSearchResult } from "../models/source-search-result.js";
import { sourcesSortBySchema, type SourcesSortBy } from "../models/sources-sort-by.js";
import { topicSearchResultSchema, type TopicSearchResult } from "../models/topic-search-result.js";
import type { Servers } from "../servers.js";

/**
 * Additional endpoints for metadata and related information
 */
export class SupplementalEndpoints {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Journalists by ID
   *
   * @remarks
   * Find additional details on a journalist by using the journalist ID found in an article response
   * object.
   *
   * @returns 200 - Success
   *
   * @throws {@link SupplementalEndpoints.GetJournalistByIdError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link PerigonError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getJournalistById(
    request: SupplementalEndpoints.GetJournalistByIdRequest,
    options?: RequestOptions,
  ): ApiPromise<Journalist, SupplementalEndpoints.GetJournalistByIdError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v1/journalists/{id}"),
        auth: this.#auth.apiKeyAuth,
        pathParams: [{ name: "id", value: request.id, schema: s.string() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: journalistSchema },
        errorFactory: SupplementalEndpoints.GetJournalistByIdError,
      },
      options,
    );
  }

  /**
   * Companies
   *
   * @remarks
   * Browse or search for companies Perigon tracks using name, domain, ticker symbol, industry, and
   * more. Supports Boolean search logic and filtering by metadata such as country, exchange,
   * employee count, and IPO date.
   *
   * @returns 200 - Success
   *
   * @throws {@link SupplementalEndpoints.SearchCompaniesError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link PerigonError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  searchCompanies(
    request: SupplementalEndpoints.SearchCompaniesRequest = {},
    options?: RequestOptions,
  ): ApiPromise<CompanySearchResult, SupplementalEndpoints.SearchCompaniesError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v1/companies/all"),
        auth: this.#auth.apiKeyAuth,
        pathParams: [],
        query: [
          { name: "id", value: request.id, schema: s.optional(s.array(s.string())) },
          { name: "symbol", value: request.symbol, schema: s.optional(s.array(s.string())) },
          { name: "symbolIsin", value: request.symbolIsin, schema: s.optional(s.array(s.string())) },
          { name: "domain", value: request.domain, schema: s.optional(s.array(s.string())) },
          { name: "country", value: request.country, schema: s.optional(s.array(s.string())) },
          { name: "exchange", value: request.exchange, schema: s.optional(s.array(s.string())) },
          { name: "numEmployeesFrom", value: request.numEmployeesFrom, schema: s.optional(s.int()) },
          { name: "numEmployeesTo", value: request.numEmployeesTo, schema: s.optional(s.int()) },
          { name: "ipoFrom", value: request.ipoFrom, schema: s.optional(s.dateTime()) },
          { name: "ipoTo", value: request.ipoTo, schema: s.optional(s.dateTime()) },
          { name: "q", value: request.q, schema: s.optional(s.string()) },
          { name: "name", value: request.name, schema: s.optional(s.string()) },
          { name: "industry", value: request.industry, schema: s.optional(s.string()) },
          { name: "sector", value: request.sector, schema: s.optional(s.string()) },
          { name: "size", value: request.size, schema: s.optional(s.int()) },
          { name: "page", value: request.page, schema: s.optional(s.int()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: companySearchResultSchema },
        errorFactory: SupplementalEndpoints.SearchCompaniesError,
      },
      options,
    );
  }

  /**
   * Journalists
   *
   * @remarks
   * Search journalists using broad search attributes. Our database contains over 230,000
   * journalists from around the world and is refreshed frequently.
   *
   * @returns 200 - Success
   *
   * @throws {@link SupplementalEndpoints.SearchJournalistsError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link PerigonError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  searchJournalists(
    request: SupplementalEndpoints.SearchJournalistsRequest = {},
    options?: RequestOptions,
  ): ApiPromise<JournalistSearchResult, SupplementalEndpoints.SearchJournalistsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v1/journalists/all"),
        auth: this.#auth.apiKeyAuth,
        pathParams: [],
        query: [
          { name: "id", value: request.id, schema: s.optional(s.array(s.string())) },
          { name: "q", value: request.q, schema: s.optional(s.string()) },
          { name: "name", value: request.name, schema: s.optional(s.string()) },
          { name: "twitter", value: request.twitter, schema: s.optional(s.string()) },
          {
            name: "sortBy",
            value: request.sortBy,
            schema: s.optional(s.lazy(() => journalistsSortBySchema)),
          },
          { name: "size", value: request.size, schema: s.optional(s.int()) },
          { name: "page", value: request.page, schema: s.optional(s.int()) },
          { name: "source", value: request.source, schema: s.optional(s.array(s.string())) },
          { name: "topic", value: request.topic, schema: s.optional(s.array(s.string())) },
          { name: "category", value: request.category, schema: s.optional(s.array(s.string())) },
          { name: "label", value: request.label, schema: s.optional(s.array(s.string())) },
          { name: "minMonthlyPosts", value: request.minMonthlyPosts, schema: s.optional(s.int()) },
          { name: "maxMonthlyPosts", value: request.maxMonthlyPosts, schema: s.optional(s.int()) },
          { name: "country", value: request.country, schema: s.optional(s.array(s.string())) },
          {
            name: "locationCountry",
            value: request.locationCountry,
            schema: s.optional(s.array(s.string())),
          },
          { name: "locationState", value: request.locationState, schema: s.optional(s.array(s.string())) },
          { name: "locationCounty", value: request.locationCounty, schema: s.optional(s.array(s.string())) },
          { name: "locationCity", value: request.locationCity, schema: s.optional(s.array(s.string())) },
          { name: "locationArea", value: request.locationArea, schema: s.optional(s.array(s.string())) },
          { name: "updatedAtFrom", value: request.updatedAtFrom, schema: s.optional(s.dateTime()) },
          { name: "updatedAtTo", value: request.updatedAtTo, schema: s.optional(s.dateTime()) },
          { name: "showNumResults", value: request.showNumResults, schema: s.optional(s.boolean()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: journalistSearchResultSchema },
        errorFactory: SupplementalEndpoints.SearchJournalistsError,
      },
      options,
    );
  }

  /**
   * People
   *
   * @remarks
   * Search and retrieve additional information on known persons that exist within Perigon's entity
   * database and as referenced in any article response object. Our database contains over 650,000
   * people from around the world and is refreshed frequently. People data is derived from Wikidata
   * and includes a wikidataId field that can be used to lookup even more information on Wikidata's
   * website.
   *
   * @returns 200 - Success
   *
   * @throws {@link SupplementalEndpoints.SearchPeopleError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link PerigonError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  searchPeople(
    request: SupplementalEndpoints.SearchPeopleRequest = {},
    options?: RequestOptions,
  ): ApiPromise<PeopleSearchResult, SupplementalEndpoints.SearchPeopleError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v1/people/all"),
        auth: this.#auth.apiKeyAuth,
        pathParams: [],
        query: [
          { name: "name", value: request.name, schema: s.optional(s.string()) },
          { name: "wikidataId", value: request.wikidataId, schema: s.optional(s.array(s.string())) },
          { name: "occupationId", value: request.occupationId, schema: s.optional(s.array(s.string())) },
          { name: "occupationLabel", value: request.occupationLabel, schema: s.optional(s.string()) },
          { name: "page", value: request.page, schema: s.optional(s.int()) },
          { name: "size", value: request.size, schema: s.optional(s.int()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: peopleSearchResultSchema },
        errorFactory: SupplementalEndpoints.SearchPeopleError,
      },
      options,
    );
  }

  /**
   * Sources
   *
   * @remarks
   * Search and filter the 200,000+ media sources available via the Perigon API. The result includes
   * a list of individual media sources that were matched to your specific criteria.
   *
   * @returns 200 - Success
   *
   * @throws {@link SupplementalEndpoints.SearchSourcesError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link PerigonError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  searchSources(
    request: SupplementalEndpoints.SearchSourcesRequest = {},
    options?: RequestOptions,
  ): ApiPromise<SourceSearchResult, SupplementalEndpoints.SearchSourcesError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v1/sources/all"),
        auth: this.#auth.apiKeyAuth,
        pathParams: [],
        query: [
          { name: "domain", value: request.domain, schema: s.optional(s.array(s.string())) },
          { name: "name", value: request.name, schema: s.optional(s.string()) },
          { name: "sourceGroup", value: request.sourceGroup, schema: s.optional(s.string()) },
          { name: "sortBy", value: request.sortBy, schema: s.optional(s.lazy(() => sourcesSortBySchema)) },
          { name: "page", value: request.page, schema: s.optional(s.int()) },
          { name: "size", value: request.size, schema: s.optional(s.int()) },
          { name: "minMonthlyVisits", value: request.minMonthlyVisits, schema: s.optional(s.int()) },
          { name: "maxMonthlyVisits", value: request.maxMonthlyVisits, schema: s.optional(s.int()) },
          { name: "minMonthlyPosts", value: request.minMonthlyPosts, schema: s.optional(s.int()) },
          { name: "maxMonthlyPosts", value: request.maxMonthlyPosts, schema: s.optional(s.int()) },
          { name: "country", value: request.country, schema: s.optional(s.array(s.string())) },
          { name: "sourceCountry", value: request.sourceCountry, schema: s.optional(s.array(s.string())) },
          { name: "sourceState", value: request.sourceState, schema: s.optional(s.array(s.string())) },
          { name: "sourceCounty", value: request.sourceCounty, schema: s.optional(s.array(s.string())) },
          { name: "sourceCity", value: request.sourceCity, schema: s.optional(s.array(s.string())) },
          { name: "sourceLat", value: request.sourceLat, schema: s.optional(s.float64()) },
          { name: "sourceLon", value: request.sourceLon, schema: s.optional(s.float64()) },
          { name: "sourceMaxDistance", value: request.sourceMaxDistance, schema: s.optional(s.float64()) },
          { name: "category", value: request.category, schema: s.optional(s.array(s.string())) },
          { name: "topic", value: request.topic, schema: s.optional(s.array(s.string())) },
          { name: "label", value: request.label, schema: s.optional(s.array(s.string())) },
          { name: "paywall", value: request.paywall, schema: s.optional(s.boolean()) },
          { name: "showSubdomains", value: request.showSubdomains, schema: s.optional(s.boolean()) },
          { name: "showNumResults", value: request.showNumResults, schema: s.optional(s.boolean()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: sourceSearchResultSchema },
        errorFactory: SupplementalEndpoints.SearchSourcesError,
      },
      options,
    );
  }

  /**
   * Topics
   *
   * @remarks
   * Search through all available Topics that exist within the Perigon Database.
   *
   * @returns 200 - Success
   *
   * @throws {@link SupplementalEndpoints.SearchTopicsError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link PerigonError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  searchTopics(
    request: SupplementalEndpoints.SearchTopicsRequest = {},
    options?: RequestOptions,
  ): ApiPromise<TopicSearchResult, SupplementalEndpoints.SearchTopicsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v1/topics/all"),
        auth: this.#auth.apiKeyAuth,
        pathParams: [],
        query: [
          { name: "name", value: request.name, schema: s.optional(s.string()) },
          { name: "category", value: request.category, schema: s.optional(s.string()) },
          { name: "subcategory", value: request.subcategory, schema: s.optional(s.string()) },
          { name: "page", value: request.page, schema: s.optional(s.int()) },
          { name: "size", value: request.size, schema: s.optional(s.int()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: topicSearchResultSchema },
        errorFactory: SupplementalEndpoints.SearchTopicsError,
      },
      options,
    );
  }
}

export namespace SupplementalEndpoints {
  export type GetJournalistByIdRequest = {
    id: string;
  };

  export class GetJournalistByIdError extends ApiError {
    declare readonly payload:
      | Declared<"errorResponse", ErrorResponse>
      | Declared<"errorResponse2", ErrorResponse>
      | Declared<"errorResponse3", ErrorResponse>
      | Declared<"errorResponse4", ErrorResponse>
      | Declared<"errorResponse5", ErrorResponse>
      | Declared<"errorResponse6", ErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetJournalistByIdError> = [
      { on: 401, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 404, kind: "errorResponse2", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 500, kind: "errorResponse3", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 400, kind: "errorResponse4", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 403, kind: "errorResponse5", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 429, kind: "errorResponse6", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export type SearchCompaniesRequest = {
    /** String Array. Filter by unique company identifiers. Multiple values create an OR filter. */
    id?: string[];
    /**
     * String Array. Filter by company stock ticker symbols (e.g., AAPL, MSFT, GOOGL). Multiple
     * values create an OR filter.
     */
    symbol?: string[];
    /**
     * String Array. Filter by ISIN codes on company ticker listings. Matches symbols.isin rather
     * than the company-level ISIN. Multiple values create an OR filter.
     */
    symbolIsin?: string[];
    /**
     * String Array. Filter by company domains or websites (e.g., apple.com, microsoft.com).
     * Multiple values create an OR filter.
     */
    domain?: string[];
    /**
     * String Array. Filter by company headquarters country. Multiple values create an OR filter.
     */
    country?: string[];
    /**
     * String Array. Filter by stock exchange where companies are listed (e.g., NASDAQ, NYSE).
     * Multiple values create an OR filter.
     */
    exchange?: string[];
    /** Integer. Filter for companies with at least this many employees. */
    numEmployeesFrom?: number;
    /** Integer. Filter for companies with no more than this many employees. */
    numEmployeesTo?: number;
    /**
     * Date. Filter for companies that went public on or after this date. Accepts ISO 8601 format
     * (e.g., 2023-01-01T00:00:00) or yyyy-mm-dd format.
     */
    ipoFrom?: Date;
    /**
     * Date. Filter for companies that went public on or before this date. Accepts ISO 8601 format
     * (e.g., 2023-12-31T23:59:59) or yyyy-mm-dd format.
     */
    ipoTo?: Date;
    /**
     * String. Primary search query for filtering companies across name, alternative names, domains,
     * and ticker symbols. Supports Boolean operators (AND, OR, NOT), exact phrases with quotes, and
     * wildcards (* and ?) for flexible searching.
     */
    q?: string;
    /**
     * String. Search within company names. Supports Boolean operators (AND, OR, NOT), exact phrases
     * with quotes, and wildcards (* and ?) for flexible searching.
     */
    name?: string;
    /**
     * String. Filter by company industry classifications. Supports Boolean operators (AND, OR,
     * NOT), exact phrases with quotes, and wildcards (* and ?) for flexible searching.
     */
    industry?: string;
    /**
     * String. Filter by company sector classifications. Supports Boolean operators (AND, OR, NOT),
     * exact phrases with quotes, and wildcards (* and ?) for flexible searching.
     */
    sector?: string;
    /** Integer. The number of companies to return per page in the paginated response. */
    size?: number;
    /** Integer. The specific page of results to retrieve in the paginated response. Starts at 0. */
    page?: number;
  };

  export const searchCompaniesRequestSchema: Schema<SearchCompaniesRequest> = s.lazySchema(() =>
    s.object<SearchCompaniesRequest>({
      id: s.optional(s.array(s.string())),
      symbol: s.optional(s.array(s.string())),
      symbolIsin: s.optional(s.array(s.string()).check(s.minLength(0), s.maxLength(300))),
      domain: s.optional(s.array(s.string())),
      country: s.optional(s.array(s.string())),
      exchange: s.optional(s.array(s.string())),
      numEmployeesFrom: s.optional(s.int()),
      numEmployeesTo: s.optional(s.int()),
      ipoFrom: s.optional(s.dateTime()),
      ipoTo: s.optional(s.dateTime()),
      q: s.optional(s.string()),
      name: s.optional(s.string()),
      industry: s.optional(s.string()),
      sector: s.optional(s.string()),
      size: s.optional(s.int().check(s.gte(1), s.lte(100))),
      page: s.optional(s.int().check(s.gte(0))),
    }),
  );

  export class SearchCompaniesError extends ApiError {
    declare readonly payload:
      | Declared<"errorResponse", ErrorResponse>
      | Declared<"errorResponse2", ErrorResponse>
      | Declared<"errorResponse3", ErrorResponse>
      | Declared<"errorResponse4", ErrorResponse>
      | Declared<"errorResponse5", ErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<SearchCompaniesError> = [
      { on: 401, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 500, kind: "errorResponse2", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 400, kind: "errorResponse3", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 403, kind: "errorResponse4", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 429, kind: "errorResponse5", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export type SearchJournalistsRequest = {
    /**
     * String Array. Filter by unique journalist identifiers. Multiple values create an OR filter to
     * find journalists matching any of the specified IDs.
     */
    id?: string[];
    /**
     * String. Primary search query for filtering journalists based on their name, title, and
     * Twitter bio. Supports Boolean operators (AND, OR, NOT), exact phrases with quotes, and
     * wildcards (* and ?) for flexible searching.
     */
    q?: string;
    /**
     * String. Search specifically within journalist names. Supports Boolean operators (AND, OR,
     * NOT), exact phrases with quotes, and wildcards (* and ?) for flexible searching.
     */
    name?: string;
    /** String. Filter journalists by their exact Twitter handle, without the \@ symbol. */
    twitter?: string;
    /**
     * String. Sort journalists from highest to lowest by avgMonthlyPosts, linkedinConnections, or
     * linkedinFollowers. When omitted, results are sorted by relevance.
     */
    sortBy?: JournalistsSortBy;
    /** Integer. The number of journalists to return per page in the paginated response. */
    size?: number;
    /** Integer. The specific page of results to retrieve in the paginated response. Starts at 0. */
    page?: number;
    /**
     * String Array. Filter journalists by the publisher domains they write for. Supports wildcards
     * (* and ?) for pattern matching (e.g., *.cnn.com). Multiple values create an OR filter.
     */
    source?: string[];
    /**
     * String Array. Filter journalists by the top topics they cover. Topics are more specific
     * themes that the article is about. Examples of topics: 'Economy', 'Real Estate',
     * 'Cryptocurrency'. If multiple parameters are passed, they will be applied as OR operations.
     * (Searches inside the topCategories data field.)
     */
    topic?: string[];
    /**
     * String Array. Filter journalists by the top categories they cover. Categories are general
     * themes that the article is about. Examples of categories: Tech, Politics, etc. If multiple
     * parameters are passed, they will be applied as OR operations. (Searches inside the
     * topCategories data field.)
     */
    category?: string[];
    /**
     * String Array. Filter journalists by the most common label tagged to the articles they
     * publish. This accepts labels like 'Opinion' or 'Pop Culture'. (Searches the topLabels data
     * field.)
     */
    label?: string[];
    /**
     * Integer. Filter for journalists who publish at least this many articles per month. Used to
     * identify more active journalists.
     */
    minMonthlyPosts?: number;
    /** Integer. Filter for journalists who publish no more than this many articles per month. */
    maxMonthlyPosts?: number;
    /**
     * String Array. Filter journalists by countries they commonly cover in their reporting. Uses
     * ISO 3166-1 alpha-2 two-letter country codes in lowercase (e.g., us, gb, jp). Multiple values
     * create an OR filter.
     */
    country?: string[];
    /**
     * String Array. Filter journalists by their profile location country (`locations.country`).
     * Uses ISO 3166-1 alpha-2 two-letter country codes in lowercase (e.g., us, gb, jp). `uk` is
     * accepted as an alias for `gb`. Distinct from `country`, which filters reporting focus
     * (`topCountries`). Multiple values create an OR filter.
     */
    locationCountry?: string[];
    /**
     * String Array. Filter journalists by their profile location state or region
     * (`locations.state`). For US locations this is the two-letter state code (e.g., NY, CA).
     * Multiple values create an OR filter.
     */
    locationState?: string[];
    /**
     * String Array. Filter journalists by their profile location county (`locations.county`).
     * County names should match stored metadata (e.g., 'Los Angeles County', 'Cook County').
     * Multiple values create an OR filter.
     */
    locationCounty?: string[];
    /**
     * String Array. Filter journalists by their profile location city (`locations.city`). Multiple
     * values create an OR filter.
     */
    locationCity?: string[];
    /**
     * String Array. Filter journalists by their profile location area — neighborhood, borough, or
     * district (`locations.area`). Multiple values create an OR filter.
     */
    locationArea?: string[];
    /**
     * Date. Filter for journalist profiles updated on or after this date. Accepts ISO 8601 format
     * (e.g., 2023-03-01T00:00:00) or yyyy-mm-dd format.
     */
    updatedAtFrom?: Date;
    /**
     * Date. Filter for journalist profiles updated on or before this date. Accepts ISO 8601 format
     * (e.g., 2023-03-01T23:59:59) or yyyy-mm-dd format.
     */
    updatedAtTo?: Date;
    /**
     * Boolean. Controls whether to return the exact result count. When false (default), counts are
     * capped at 10,000 for performance reasons. Set to true for precise counts in smaller result
     * sets.
     */
    showNumResults?: boolean;
  };

  export const searchJournalistsRequestSchema: Schema<SearchJournalistsRequest> = s.lazySchema(() =>
    s.object<SearchJournalistsRequest>({
      id: s.optional(s.array(s.string())),
      q: s.optional(s.string()),
      name: s.optional(s.string()),
      twitter: s.optional(s.string()),
      sortBy: s.optional(s.lazy(() => journalistsSortBySchema)),
      size: s.optional(s.int().check(s.gte(0), s.lte(1000))),
      page: s.optional(s.int().check(s.gte(0))),
      source: s.optional(s.array(s.string())),
      topic: s.optional(s.array(s.string())),
      category: s.optional(s.array(s.string())),
      label: s.optional(s.array(s.string())),
      minMonthlyPosts: s.optional(s.int()),
      maxMonthlyPosts: s.optional(s.int()),
      country: s.optional(s.array(s.string())),
      locationCountry: s.optional(s.array(s.string())),
      locationState: s.optional(s.array(s.string())),
      locationCounty: s.optional(s.array(s.string())),
      locationCity: s.optional(s.array(s.string())),
      locationArea: s.optional(s.array(s.string())),
      updatedAtFrom: s.optional(s.dateTime()),
      updatedAtTo: s.optional(s.dateTime()),
      showNumResults: s.optional(s.boolean()),
    }),
  );

  export class SearchJournalistsError extends ApiError {
    declare readonly payload:
      | Declared<"errorResponse", ErrorResponse>
      | Declared<"errorResponse2", ErrorResponse>
      | Declared<"errorResponse3", ErrorResponse>
      | Declared<"errorResponse4", ErrorResponse>
      | Declared<"errorResponse5", ErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<SearchJournalistsError> = [
      { on: 401, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 500, kind: "errorResponse2", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 400, kind: "errorResponse3", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 403, kind: "errorResponse4", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 429, kind: "errorResponse5", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export type SearchPeopleRequest = {
    /**
     * String. Search by person's name. Supports Boolean operators (AND, OR, NOT), exact phrases
     * with quotes, and wildcards (* and ?) for flexible searching.
     */
    name?: string;
    /**
     * String Array. Filter by Wikidata entity IDs (e.g., Q7747, Q937). These are unique identifiers
     * from Wikidata.org that precisely identify public figures and eliminate name ambiguity.
     * Multiple values create an OR filter.
     */
    wikidataId?: string[];
    /**
     * String Array. Filter by Wikidata occupation IDs (e.g., Q82955 for politician, Q33999 for
     * actor, Q19546 for businessman). Finds people with specific professions. Multiple values
     * create an OR filter.
     */
    occupationId?: string[];
    /**
     * String. Search by occupation name (e.g., politician, actor, CEO, athlete). Supports Boolean
     * operators (AND, OR, NOT), exact phrases with quotes, and wildcards (* and ?) for flexible
     * searching.
     */
    occupationLabel?: string;
    /** Integer. The specific page of results to retrieve in the paginated response. Starts at 0. */
    page?: number;
    /** Integer. The number of people to return per page in the paginated response. */
    size?: number;
  };

  export const searchPeopleRequestSchema: Schema<SearchPeopleRequest> = s.lazySchema(() =>
    s.object<SearchPeopleRequest>({
      name: s.optional(s.string()),
      wikidataId: s.optional(s.array(s.string())),
      occupationId: s.optional(s.array(s.string())),
      occupationLabel: s.optional(s.string()),
      page: s.optional(s.int().check(s.gte(0))),
      size: s.optional(s.int().check(s.gte(1), s.lte(100))),
    }),
  );

  export class SearchPeopleError extends ApiError {
    declare readonly payload:
      | Declared<"errorResponse", ErrorResponse>
      | Declared<"errorResponse2", ErrorResponse>
      | Declared<"errorResponse3", ErrorResponse>
      | Declared<"errorResponse4", ErrorResponse>
      | Declared<"errorResponse5", ErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<SearchPeopleError> = [
      { on: 401, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 500, kind: "errorResponse2", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 400, kind: "errorResponse3", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 403, kind: "errorResponse4", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 429, kind: "errorResponse5", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export type SearchSourcesRequest = {
    /**
     * String Array. Filter by specific publisher domains or subdomains. Supports wildcards (* and
     * ?) for pattern matching (e.g., *.cnn.com, us?.nytimes.com). Multiple values create an OR
     * filter.
     */
    domain?: string[];
    /**
     * String. Search by source name or alternative names. Supports Boolean operators (AND, OR,
     * NOT), exact phrases with quotes, and wildcards (* and ?) for flexible searching.
     */
    name?: string;
    /**
     * String. Filter by predefined publisher bundles (e.g., top100, top50tech). Returns all sources
     * within the specified group. See documentation for available source groups.
     */
    sourceGroup?: string;
    /**
     * String. Determines the source sorting order. Options include relevance (default, best match
     * to query), globalRank (by overall traffic and popularity), monthlyVisits (by total monthly
     * visitor count), and avgMonthlyPosts (by number of articles published monthly).
     */
    sortBy?: SourcesSortBy;
    /** Integer. The specific page of results to retrieve in the paginated response. Starts at 0. */
    page?: number;
    /** Integer. The number of sources to return per page in the paginated response. */
    size?: number;
    /**
     * Integer. Filter for sources with at least this many monthly visitors. Used to target
     * publishers by audience size.
     */
    minMonthlyVisits?: number;
    /**
     * Integer. Filter for sources with no more than this many monthly visitors. Used to target
     * publishers by audience size.
     */
    maxMonthlyVisits?: number;
    /**
     * Integer. Filter for sources that publish at least this many articles per month. Used to
     * target publishers by content volume.
     */
    minMonthlyPosts?: number;
    /**
     * Integer. Filter for sources that publish no more than this many articles per month. Used to
     * target publishers by content volume.
     */
    maxMonthlyPosts?: number;
    /**
     * String Array. Filter sources by countries they commonly cover in their reporting. Uses ISO
     * 3166-1 alpha-2 two-letter country codes in lowercase (e.g., us, gb, jp). See documentation
     * for supported country codes. Multiple values create an OR filter.
     */
    country?: string[];
    /**
     * String Array. Filter for local publications based in specific countries. Uses ISO 3166-1
     * alpha-2 two-letter country codes in lowercase (e.g., us, gb, jp). See documentation for
     * supported country codes. Multiple values create an OR filter.
     */
    sourceCountry?: string[];
    /**
     * String Array. Filter for local publications based in specific states or regions. Uses
     * standard two-letter state codes in lowercase (e.g., ca, ny, tx). See documentation for
     * supported state codes. Multiple values create an OR filter.
     */
    sourceState?: string[];
    /**
     * String Array. Filter for local publications based in specific counties. Multiple values
     * create an OR filter.
     */
    sourceCounty?: string[];
    /**
     * String Array. Filter for local publications based in specific cities. Multiple values create
     * an OR filter.
     */
    sourceCity?: string[];
    /**
     * Float. Latitude coordinate for filtering local publications by geographic proximity. Used
     * with sourceLon and sourceMaxDistance for radius search.
     */
    sourceLat?: number;
    /**
     * Float. Longitude coordinate for filtering local publications by geographic proximity. Used
     * with sourceLat and sourceMaxDistance for radius search.
     */
    sourceLon?: number;
    /**
     * Float. Maximum distance in kilometers from the coordinates defined by sourceLat and
     * sourceLon. Defines the radius for local publication searches.
     */
    sourceMaxDistance?: number;
    /**
     * String Array. Filter sources by their primary content categories such as Politics, Tech,
     * Sports, Business, or Finance. Returns sources that frequently cover these topics. Multiple
     * values create an OR filter.
     */
    category?: string[];
    /**
     * String Array. Filter sources by their frequently covered topics (e.g., Markets,
     * Cryptocurrency, Climate Change). Returns sources where the specified topic is among their top
     * 10 covered areas. Multiple values create an OR filter.
     */
    topic?: string[];
    /**
     * String Array. Filter sources by their content label patterns (e.g., Opinion, Paid-news,
     * Non-news). Returns sources where the specified label is common in their published content.
     * See documentation for all available labels. Multiple values create an OR filter.
     */
    label?: string[];
    /**
     * Boolean. Filter by paywall status. Set to true to find sources with paywalls, or false to
     * find sources without paywalls.
     */
    paywall?: boolean;
    /**
     * Boolean. Controls whether subdomains are included as separate results. When true (default),
     * subdomains appear as distinct sources. When false, results are consolidated to parent domains
     * only.
     */
    showSubdomains?: boolean;
    /**
     * Boolean. Controls whether to return the exact result count. When false (default), counts are
     * capped at 10,000 for performance reasons. Set to true for precise counts in smaller result
     * sets.
     */
    showNumResults?: boolean;
  };

  export const searchSourcesRequestSchema: Schema<SearchSourcesRequest> = s.lazySchema(() =>
    s.object<SearchSourcesRequest>({
      domain: s.optional(s.array(s.string())),
      name: s.optional(s.string()),
      sourceGroup: s.optional(s.string()),
      sortBy: s.optional(s.lazy(() => sourcesSortBySchema)),
      page: s.optional(s.int().check(s.gte(0), s.lte(10000))),
      size: s.optional(s.int().check(s.gte(1), s.lte(100))),
      minMonthlyVisits: s.optional(s.int()),
      maxMonthlyVisits: s.optional(s.int()),
      minMonthlyPosts: s.optional(s.int()),
      maxMonthlyPosts: s.optional(s.int()),
      country: s.optional(s.array(s.string())),
      sourceCountry: s.optional(s.array(s.string())),
      sourceState: s.optional(s.array(s.string())),
      sourceCounty: s.optional(s.array(s.string())),
      sourceCity: s.optional(s.array(s.string())),
      sourceLat: s.optional(s.float64().check(s.gte(-90), s.lte(90))),
      sourceLon: s.optional(s.float64().check(s.gte(-180), s.lte(180))),
      sourceMaxDistance: s.optional(s.float64().check(s.gte(1), s.lte(300))),
      category: s.optional(s.array(s.string())),
      topic: s.optional(s.array(s.string())),
      label: s.optional(s.array(s.string())),
      paywall: s.optional(s.boolean()),
      showSubdomains: s.optional(s.boolean()),
      showNumResults: s.optional(s.boolean()),
    }),
  );

  export class SearchSourcesError extends ApiError {
    declare readonly payload:
      | Declared<"errorResponse", ErrorResponse>
      | Declared<"errorResponse2", ErrorResponse>
      | Declared<"errorResponse3", ErrorResponse>
      | Declared<"errorResponse4", ErrorResponse>
      | Declared<"errorResponse5", ErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<SearchSourcesError> = [
      { on: 401, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 500, kind: "errorResponse2", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 400, kind: "errorResponse3", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 403, kind: "errorResponse4", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 429, kind: "errorResponse5", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export type SearchTopicsRequest = {
    /**
     * String. Search for topics by exact name or partial text match. Does not support wildcards.
     * Examples include Markets, Cryptocurrency, Climate Change, etc.
     */
    name?: string;
    /**
     * String. Filter topics by broad article categories such as Politics, Tech, Sports, Business,
     * Finance, Entertainment, etc.
     */
    category?: string;
    /**
     * String. Filter topics by their specific subcategory. Subcategories provide more granular
     * classification beyond the main category, such as TV or Event.
     */
    subcategory?: string;
    /** Integer. The specific page of results to retrieve in the paginated response. Starts at 0. */
    page?: number;
    /** Integer. The number of topics to return per page in the paginated response. */
    size?: number;
  };

  export const searchTopicsRequestSchema: Schema<SearchTopicsRequest> = s.lazySchema(() =>
    s.object<SearchTopicsRequest>({
      name: s.optional(s.string()),
      category: s.optional(s.string()),
      subcategory: s.optional(s.string()),
      page: s.optional(s.int().check(s.gte(0))),
      size: s.optional(s.int().check(s.gte(0))),
    }),
  );

  export class SearchTopicsError extends ApiError {
    declare readonly payload:
      | Declared<"errorResponse", ErrorResponse>
      | Declared<"errorResponse2", ErrorResponse>
      | Declared<"errorResponse3", ErrorResponse>
      | Declared<"errorResponse4", ErrorResponse>
      | Declared<"errorResponse5", ErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<SearchTopicsError> = [
      { on: 401, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 500, kind: "errorResponse2", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 400, kind: "errorResponse3", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 403, kind: "errorResponse4", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 429, kind: "errorResponse5", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }
}
