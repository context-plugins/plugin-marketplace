import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { errorResponseSchema, type ErrorResponse } from "../models/error-response.js";
import {
  sortByPerigonWikipediaApiSchema,
  type SortByPerigonWikipediaApi,
} from "../models/sort-by-perigon-wikipedia-api.js";
import {
  wikipediaSearchParamsInternalSchema,
  type WikipediaSearchParams,
} from "../models/wikipedia-search-params.js";
import {
  wikipediaSearchResultSchema,
  type WikipediaSearchResult,
} from "../models/wikipedia-search-result.js";
import {
  wikipediaVectorSearchResultSchema,
  type WikipediaVectorSearchResult,
} from "../models/wikipedia-vector-search-result.js";
import type { Servers } from "../servers.js";

/**
 * Endpoints for searching ingested Wikipedia content. Provides keyword and filtered search
 * capabilities along with vector-based semantic search across Wikipedia pages.
 */
export class Wikipedia {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Wikipedia
   *
   * @remarks
   * Search and filter all Wikipedia pages available via the Perigon API. The result includes a list
   * of individual pages that were matched to your specific criteria.
   *
   * @returns 200 - Success
   *
   * @throws {@link Wikipedia.SearchWikipediaError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link PerigonError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  searchWikipedia(
    request: Wikipedia.SearchWikipediaRequest = {},
    options?: RequestOptions,
  ): ApiPromise<WikipediaSearchResult, Wikipedia.SearchWikipediaError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v1/wikipedia/all"),
        auth: this.#auth.apiKeyAuth,
        pathParams: [],
        query: [
          { name: "q", value: request.q, schema: s.optional(s.string()) },
          { name: "title", value: request.title, schema: s.optional(s.string()) },
          { name: "summary", value: request.summary, schema: s.optional(s.string()) },
          { name: "text", value: request.text, schema: s.optional(s.string()) },
          { name: "reference", value: request.reference, schema: s.optional(s.string()) },
          { name: "id", value: request.id, schema: s.optional(s.array(s.string())) },
          { name: "wikiPageId", value: request.wikiPageId, schema: s.optional(s.array(s.int())) },
          { name: "wikiRevisionId", value: request.wikiRevisionId, schema: s.optional(s.array(s.int())) },
          { name: "wikiCode", value: request.wikiCode, schema: s.optional(s.array(s.string())) },
          { name: "wikiNamespace", value: request.wikiNamespace, schema: s.optional(s.array(s.int())) },
          { name: "wikidataId", value: request.wikidataId, schema: s.optional(s.array(s.string())) },
          {
            name: "wikidataInstanceOfId",
            value: request.wikidataInstanceOfId,
            schema: s.optional(s.array(s.string())),
          },
          {
            name: "wikidataInstanceOfLabel",
            value: request.wikidataInstanceOfLabel,
            schema: s.optional(s.array(s.string())),
          },
          { name: "category", value: request.category, schema: s.optional(s.array(s.string())) },
          { name: "sectionId", value: request.sectionId, schema: s.optional(s.array(s.string())) },
          { name: "wikiRevisionFrom", value: request.wikiRevisionFrom, schema: s.optional(s.dateTime()) },
          { name: "wikiRevisionTo", value: request.wikiRevisionTo, schema: s.optional(s.dateTime()) },
          { name: "scrapedAtFrom", value: request.scrapedAtFrom, schema: s.optional(s.dateTime()) },
          { name: "scrapedAtTo", value: request.scrapedAtTo, schema: s.optional(s.dateTime()) },
          { name: "pageviewsFrom", value: request.pageviewsFrom, schema: s.optional(s.int()) },
          { name: "pageviewsTo", value: request.pageviewsTo, schema: s.optional(s.int()) },
          { name: "withPageviews", value: request.withPageviews, schema: s.optional(s.boolean()) },
          { name: "showNumResults", value: request.showNumResults, schema: s.optional(s.boolean()) },
          { name: "page", value: request.page, schema: s.optional(s.int()) },
          { name: "size", value: request.size, schema: s.optional(s.int()) },
          {
            name: "sortBy",
            value: request.sortBy,
            schema: s.optional(s.lazy(() => sortByPerigonWikipediaApiSchema)),
          },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: wikipediaSearchResultSchema },
        errorFactory: Wikipedia.SearchWikipediaError,
      },
      options,
    );
  }

  /**
   * Wikipedia (Vector)
   *
   * @remarks
   * Perform a natural language search over Wikipedia pages using semantic relevance. The result
   * includes a list of page sections most closely matched to your query intent.
   *
   * @returns 200 - Success
   *
   * @throws {@link Wikipedia.VectorSearchWikipediaError} when the API answers with an error status
   * — narrow on `err.payload.kind`
   *
   * @throws {@link PerigonError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  vectorSearchWikipedia(
    request: Wikipedia.VectorSearchWikipediaRequest,
    options?: RequestOptions,
  ): ApiPromise<WikipediaVectorSearchResult, Wikipedia.VectorSearchWikipediaError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/v1/vector/wikipedia/all"),
        auth: this.#auth.apiKeyAuth,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: wikipediaSearchParamsInternalSchema },
      },
      {
        success: { kind: "json", schema: wikipediaVectorSearchResultSchema },
        errorFactory: Wikipedia.VectorSearchWikipediaError,
      },
      options,
    );
  }
}

export namespace Wikipedia {
  export type SearchWikipediaRequest = {
    /**
     * String. Primary search query for filtering pages based on their title, summary, and content.
     * Supports Boolean operators (AND, OR, NOT), exact phrases with quotes, and wildcards (* and ?)
     * for flexible searching.
     */
    q?: string;
    /**
     * String. Search specifically within page titles. Supports Boolean operators, exact phrases
     * with quotes, and wildcards for matching title variations.
     */
    title?: string;
    /**
     * String. Search specifically within page summary. Supports Boolean operators, exact phrases
     * with quotes, and wildcards for matching title variations.
     */
    summary?: string;
    /**
     * String. Search specifically within the page's content (across all sections). Supports Boolean
     * operators, exact phrases with quotes, and wildcards for matching title variations.
     */
    text?: string;
    /**
     * String. Search specifically across page's references. Supports Boolean operators, exact
     * phrases with quotes, and wildcards for matching title variations.
     */
    reference?: string;
    /**
     * String Array. Retrieve specific pages by their unique Perigon identifiers. Multiple IDs can
     * be provided to return a collection of specific pages.
     */
    id?: string[];
    /**
     * Integer Array. Retrieve specific pages by their Wikipedia identifiers. These are unique only
     * in a combination with `wikiCode` parameter. Multiple IDs can be provided to return a
     * collection of specific pages.
     */
    wikiPageId?: number[];
    /**
     * Integer Array. Retrieve specific pages by their Wikipedia revision identifiers. These are
     * unique only in a combination with `wikiCode` parameter. Multiple IDs can be provided to
     * return a collection of specific pages. This ID changes each time a page is edited.
     */
    wikiRevisionId?: number[];
    /**
     * String Array. Retrieve pages only from specified wiki projects. Currently, the only accepted
     * value is `enwiki`.
     */
    wikiCode?: string[];
    /**
     * Integer Array. Retrieve pages only from specified wiki namespace. Currently, only the main
     * namespace (0) is available.
     */
    wikiNamespace?: number[];
    /** String Array. Retrieve pages by the ids corresponding to their Wikidata entities. */
    wikidataId?: string[];
    /**
     * String Array. Retrieve all pages whose Wikidata entities are instances of these provided ids.
     */
    wikidataInstanceOfId?: string[];
    /**
     * String Array. Retrieve all pages whose Wikidata entities are instances of these ids (provided
     * as labels).
     */
    wikidataInstanceOfLabel?: string[];
    /** String Array. Retrieve all pages for specified categories. */
    category?: string[];
    /** String Array. Retrieve pages containing provided section ids. Each section ID is unique. */
    sectionId?: string[];
    /**
     * Date. Retrieve pages modified after this date. Accepts ISO 8601 format (e.g.,
     * 2023-03-01T00:00:00) or yyyy-mm-dd format.
     */
    wikiRevisionFrom?: Date;
    /**
     * Date. Retrieve pages modified before this date. Accepts ISO 8601 format (e.g.,
     * 2023-03-01T00:00:00) or yyyy-mm-dd format.
     */
    wikiRevisionTo?: Date;
    /**
     * Date. Retrieve pages scraped after this date. Accepts ISO 8601 format (e.g.,
     * 2023-03-01T00:00:00) or yyyy-mm-dd format.
     */
    scrapedAtFrom?: Date;
    /**
     * Date. Retrieve pages scraped before this date. Accepts ISO 8601 format (e.g.,
     * 2023-03-01T00:00:00) or yyyy-mm-dd format.
     */
    scrapedAtTo?: Date;
    /**
     * Integer. Retrieve pages with the average number of views per day higher than the provided
     * value.
     */
    pageviewsFrom?: number;
    /**
     * Integer. Retrieve pages with the average number of views per day lower than the provided
     * value.
     */
    pageviewsTo?: number;
    /**
     * Boolean. Retrieve pages that have any viewership statistics available for them. If `false`
     * (the default) - return all pages.
     */
    withPageviews?: boolean;
    /**
     * Boolean. Whether to show the total number of all matched pages. Default value is false which
     * makes queries a bit more efficient but also counts up to 10000 pages.
     */
    showNumResults?: boolean;
    /** Integer. The specific page of results to retrieve in the paginated response. Starts at 0. */
    page?: number;
    /** Integer. The number of articles to return per page in the paginated response. */
    size?: number;
    /**
     * String. Determines the Wikipedia page sorting order. Options include relevance (default),
     * revisionTsDesc (recently edited first), revisionTsAsc (recently edited last), pageViewsDesc
     * (highest viewership first), pageViewsAsc (highest viewership last), scrapedAtDesc (recently
     * scraped first), scrapedAtAsc (recently scraped last).
     */
    sortBy?: SortByPerigonWikipediaApi;
  };

  export const searchWikipediaRequestSchema: Schema<SearchWikipediaRequest> = s.lazySchema(() =>
    s.object<SearchWikipediaRequest>({
      q: s.optional(s.string()),
      title: s.optional(s.string()),
      summary: s.optional(s.string()),
      text: s.optional(s.string()),
      reference: s.optional(s.string()),
      id: s.optional(s.array(s.string())),
      wikiPageId: s.optional(s.array(s.int())),
      wikiRevisionId: s.optional(s.array(s.int())),
      wikiCode: s.optional(s.array(s.string())),
      wikiNamespace: s.optional(s.array(s.int())),
      wikidataId: s.optional(s.array(s.string())),
      wikidataInstanceOfId: s.optional(s.array(s.string())),
      wikidataInstanceOfLabel: s.optional(s.array(s.string())),
      category: s.optional(s.array(s.string())),
      sectionId: s.optional(s.array(s.string())),
      wikiRevisionFrom: s.optional(s.dateTime()),
      wikiRevisionTo: s.optional(s.dateTime()),
      scrapedAtFrom: s.optional(s.dateTime()),
      scrapedAtTo: s.optional(s.dateTime()),
      pageviewsFrom: s.optional(s.int()),
      pageviewsTo: s.optional(s.int()),
      withPageviews: s.optional(s.boolean()),
      showNumResults: s.optional(s.boolean()),
      page: s.optional(s.int().check(s.gte(0), s.lte(10000))),
      size: s.optional(s.int().check(s.gte(0), s.lte(1000))),
      sortBy: s.optional(s.lazy(() => sortByPerigonWikipediaApiSchema)),
    }),
  );

  export class SearchWikipediaError extends ApiError {
    declare readonly payload:
      | Declared<"errorResponse", ErrorResponse>
      | Declared<"errorResponse2", ErrorResponse>
      | Declared<"errorResponse3", ErrorResponse>
      | Declared<"errorResponse4", ErrorResponse>
      | Declared<"errorResponse5", ErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<SearchWikipediaError> = [
      { on: 401, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 500, kind: "errorResponse2", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 400, kind: "errorResponse3", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 403, kind: "errorResponse4", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 429, kind: "errorResponse5", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export type VectorSearchWikipediaRequest = {
    body: WikipediaSearchParams;
  };

  export class VectorSearchWikipediaError extends ApiError {
    declare readonly payload:
      | Declared<"errorResponse", ErrorResponse>
      | Declared<"errorResponse2", ErrorResponse>
      | Declared<"errorResponse3", ErrorResponse>
      | Declared<"errorResponse4", ErrorResponse>
      | Declared<"errorResponse5", ErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<VectorSearchWikipediaError> = [
      { on: 401, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 500, kind: "errorResponse2", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 400, kind: "errorResponse3", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 403, kind: "errorResponse4", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 429, kind: "errorResponse5", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }
}
