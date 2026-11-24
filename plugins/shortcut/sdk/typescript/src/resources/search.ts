import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { detailSchema, type Detail } from "../models/detail.js";
import { disabledFeatureErrorSchema, type DisabledFeatureError } from "../models/disabled-feature-error.js";
import { docSearchResultsSchema, type DocSearchResults } from "../models/doc-search-results.js";
import { entityTypeSchema, type EntityType } from "../models/entity-type.js";
import { epicSearchResultsInternalSchema, type EpicSearchResults } from "../models/epic-search-results.js";
import {
  iterationSearchResultsInternalSchema,
  type IterationSearchResults,
} from "../models/iteration-search-results.js";
import {
  maxSearchResultsExceededErrorSchema,
  type MaxSearchResultsExceededError,
} from "../models/max-search-results-exceeded-error.js";
import {
  objectiveSearchResultsInternalSchema,
  type ObjectiveSearchResults,
} from "../models/objective-search-results.js";
import { searchResultsInternalSchema, type SearchResults } from "../models/search-results.js";
import { storySearchResultsInternalSchema, type StorySearchResults } from "../models/story-search-results.js";
import type { Servers } from "../servers.js";

export class Search {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Search
   *
   * @remarks
   * Search lets you search Epics and Stories based on desired parameters. Since ordering of the
   * results can change over time (due to search ranking decay, new Epics and Stories being
   * created), the `next` value from the previous response can be used as the path and query string
   * for the next page to ensure stable ordering.
   *
   * @returns Resource
   *
   * @throws {@link Search.SearchError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link ShortcutError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  search(
    request: Search.SearchRequest,
    options?: RequestOptions,
  ): ApiPromise<SearchResults, Search.SearchError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/v3/search"),
        auth: this.#auth.apiToken,
        pathParams: [],
        query: [
          { name: "query", value: request.query, schema: s.string() },
          { name: "page_size", value: request.pageSize, schema: s.optional(s.int()) },
          { name: "detail", value: request.detail, schema: s.optional(s.lazy(() => detailSchema)) },
          { name: "next", value: request.next, schema: s.optional(s.string()) },
          {
            name: "entity_types",
            value: request.entityTypes,
            schema: s.optional(s.array(s.lazy(() => entityTypeSchema))),
          },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: searchResultsInternalSchema },
        errorFactory: Search.SearchError,
      },
      options,
    );
  }

  /**
   * Search Documents
   *
   * @remarks
   * Search Documents lets you search Documents based on desired parameters. Supports structured
   * filters: title, archived, created_by_me, followed_by_me.
   *
   * @returns Resource
   *
   * @throws {@link Search.SearchDocumentsError} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link ShortcutError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  searchDocuments(
    request: Search.SearchDocumentsRequest,
    options?: RequestOptions,
  ): ApiPromise<DocSearchResults, Search.SearchDocumentsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/v3/search/documents"),
        auth: this.#auth.apiToken,
        pathParams: [],
        query: [
          { name: "title", value: request.title, schema: s.string() },
          { name: "archived", value: request.archived, schema: s.optional(s.boolean()) },
          { name: "created_by_me", value: request.createdByMe, schema: s.optional(s.boolean()) },
          { name: "followed_by_me", value: request.followedByMe, schema: s.optional(s.boolean()) },
          { name: "page_size", value: request.pageSize, schema: s.optional(s.int()) },
          { name: "next", value: request.next, schema: s.optional(s.string()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: docSearchResultsSchema },
        errorFactory: Search.SearchDocumentsError,
      },
      options,
    );
  }

  /**
   * Search Epics
   *
   * @remarks
   * Search Epics lets you search Epics based on desired parameters. Since ordering of stories can
   * change over time (due to search ranking decay, new Epics being created), the `next` value from
   * the previous response can be used as the path and query string for the next page to ensure
   * stable ordering.
   *
   * @returns Resource
   *
   * @throws {@link Search.SearchEpicsError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link ShortcutError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  searchEpics(
    request: Search.SearchEpicsRequest,
    options?: RequestOptions,
  ): ApiPromise<EpicSearchResults, Search.SearchEpicsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/v3/search/epics"),
        auth: this.#auth.apiToken,
        pathParams: [],
        query: [
          { name: "query", value: request.query, schema: s.string() },
          { name: "page_size", value: request.pageSize, schema: s.optional(s.int()) },
          { name: "detail", value: request.detail, schema: s.optional(s.lazy(() => detailSchema)) },
          { name: "next", value: request.next, schema: s.optional(s.string()) },
          {
            name: "entity_types",
            value: request.entityTypes,
            schema: s.optional(s.array(s.lazy(() => entityTypeSchema))),
          },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: epicSearchResultsInternalSchema },
        errorFactory: Search.SearchEpicsError,
      },
      options,
    );
  }

  /**
   * Search Iterations
   *
   * @remarks
   * Search Iterations lets you search Iterations based on desired parameters. Since ordering of
   * results can change over time (due to search ranking decay, new Iterations being created), the
   * `next` value from the previous response can be used as the path and query string for the next
   * page to ensure stable ordering.
   *
   * @returns Resource
   *
   * @throws {@link Search.SearchIterationsError} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link ShortcutError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  searchIterations(
    request: Search.SearchIterationsRequest,
    options?: RequestOptions,
  ): ApiPromise<IterationSearchResults, Search.SearchIterationsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/v3/search/iterations"),
        auth: this.#auth.apiToken,
        pathParams: [],
        query: [
          { name: "query", value: request.query, schema: s.string() },
          { name: "page_size", value: request.pageSize, schema: s.optional(s.int()) },
          { name: "detail", value: request.detail, schema: s.optional(s.lazy(() => detailSchema)) },
          { name: "next", value: request.next, schema: s.optional(s.string()) },
          {
            name: "entity_types",
            value: request.entityTypes,
            schema: s.optional(s.array(s.lazy(() => entityTypeSchema))),
          },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: iterationSearchResultsInternalSchema },
        errorFactory: Search.SearchIterationsError,
      },
      options,
    );
  }

  /**
   * Search Milestones
   *
   * @remarks
   * Search Milestones lets you search Milestones based on desired parameters. Since ordering of
   * results can change over time (due to search ranking decay, new Milestones being created), the
   * `next` value from the previous response can be used as the path and query string for the next
   * page to ensure stable ordering.
   *
   * @returns Resource
   *
   * @throws {@link Search.SearchMilestonesError} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link ShortcutError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  searchMilestones(
    request: Search.SearchMilestonesRequest,
    options?: RequestOptions,
  ): ApiPromise<ObjectiveSearchResults, Search.SearchMilestonesError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/v3/search/milestones"),
        auth: this.#auth.apiToken,
        pathParams: [],
        query: [
          { name: "query", value: request.query, schema: s.string() },
          { name: "page_size", value: request.pageSize, schema: s.optional(s.int()) },
          { name: "detail", value: request.detail, schema: s.optional(s.lazy(() => detailSchema)) },
          { name: "next", value: request.next, schema: s.optional(s.string()) },
          {
            name: "entity_types",
            value: request.entityTypes,
            schema: s.optional(s.array(s.lazy(() => entityTypeSchema))),
          },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: objectiveSearchResultsInternalSchema },
        errorFactory: Search.SearchMilestonesError,
      },
      options,
    );
  }

  /**
   * Search Objectives
   *
   * @remarks
   * Search Objectives lets you search Objectives based on desired parameters. Since ordering of
   * results can change over time (due to search ranking decay, new Objectives being created), the
   * `next` value from the previous response can be used as the path and query string for the next
   * page to ensure stable ordering.
   *
   * @returns Resource
   *
   * @throws {@link Search.SearchObjectivesError} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link ShortcutError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  searchObjectives(
    request: Search.SearchObjectivesRequest,
    options?: RequestOptions,
  ): ApiPromise<ObjectiveSearchResults, Search.SearchObjectivesError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/v3/search/objectives"),
        auth: this.#auth.apiToken,
        pathParams: [],
        query: [
          { name: "query", value: request.query, schema: s.string() },
          { name: "page_size", value: request.pageSize, schema: s.optional(s.int()) },
          { name: "detail", value: request.detail, schema: s.optional(s.lazy(() => detailSchema)) },
          { name: "next", value: request.next, schema: s.optional(s.string()) },
          {
            name: "entity_types",
            value: request.entityTypes,
            schema: s.optional(s.array(s.lazy(() => entityTypeSchema))),
          },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: objectiveSearchResultsInternalSchema },
        errorFactory: Search.SearchObjectivesError,
      },
      options,
    );
  }

  /**
   * Search Stories
   *
   * @remarks
   * Search Stories lets you search Stories based on desired parameters. Since ordering of stories
   * can change over time (due to search ranking decay, new stories being created), the `next` value
   * from the previous response can be used as the path and query string for the next page to ensure
   * stable ordering.
   *
   * @returns Resource
   *
   * @throws {@link Search.SearchStoriesError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link ShortcutError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  searchStories(
    request: Search.SearchStoriesRequest,
    options?: RequestOptions,
  ): ApiPromise<StorySearchResults, Search.SearchStoriesError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/v3/search/stories"),
        auth: this.#auth.apiToken,
        pathParams: [],
        query: [
          { name: "query", value: request.query, schema: s.string() },
          { name: "page_size", value: request.pageSize, schema: s.optional(s.int()) },
          { name: "detail", value: request.detail, schema: s.optional(s.lazy(() => detailSchema)) },
          { name: "next", value: request.next, schema: s.optional(s.string()) },
          {
            name: "entity_types",
            value: request.entityTypes,
            schema: s.optional(s.array(s.lazy(() => entityTypeSchema))),
          },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: storySearchResultsInternalSchema },
        errorFactory: Search.SearchStoriesError,
      },
      options,
    );
  }
}

export namespace Search {
  export type SearchRequest = {
    /**
     * See our help center article on [search
     * operators](https://help.shortcut.com/hc/en-us/articles/360000046646-Search-Operators)
     */
    query: string;
    /** The number of search results to include in a page. Minimum of 1 and maximum of 250. */
    pageSize?: number;
    /**
     * The amount of detail included in each result item. "full" will include all descriptions and
     * comments and more fields on related items such as pull requests, branches and tasks. "slim"
     * omits larger fulltext fields such as descriptions and comments and only references related
     * items by id. The default is "full".
     */
    detail?: Detail;
    /** The next page token. */
    next?: string;
    /**
     * A collection of entity_types to search. Defaults to story and epic. Supports: epic,
     * iteration, objective, story.
     */
    entityTypes?: EntityType[];
  };

  export const searchRequestSchema: Schema<SearchRequest> = s.lazySchema(() =>
    s.object<SearchRequest>({
      query: s.string().check(s.minLength(1)),
      pageSize: s.optional(s.int()),
      detail: s.optional(s.lazy(() => detailSchema)),
      next: s.optional(s.string()),
      entityTypes: s.optional(s.array(s.lazy(() => entityTypeSchema))),
    }),
  );

  export class SearchError extends ApiError {
    declare readonly payload:
      | Declared<"maxSearchResultsExceededError", MaxSearchResultsExceededError>
      | Declared<"error404", undefined>
      | Declared<"error422", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<SearchError> = [
      {
        on: 400,
        kind: "maxSearchResultsExceededError",
        decode: { kind: "json", schema: maxSearchResultsExceededErrorSchema },
      },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 422, kind: "error422", decode: { kind: "empty" } },
    ];
  }

  export type SearchDocumentsRequest = {
    /** Search text to match against document titles. Supports fuzzy matching. Required. */
    title: string;
    /** When true, find archived documents. When false, find non-archived documents. */
    archived?: boolean;
    /**
     * When true, find documents created by the current user. When false, find documents NOT created
     * by current user.
     */
    createdByMe?: boolean;
    /**
     * When true, find documents that the current user is following. When false, find documents NOT
     * followed.
     */
    followedByMe?: boolean;
    /** The number of search results to include in a page. Minimum of 1 and maximum of 250. */
    pageSize?: number;
    /** The next page token. */
    next?: string;
  };

  export const searchDocumentsRequestSchema: Schema<SearchDocumentsRequest> = s.lazySchema(() =>
    s.object<SearchDocumentsRequest>({
      title: s.string().check(s.minLength(1)),
      archived: s.optional(s.boolean()),
      createdByMe: s.optional(s.boolean()),
      followedByMe: s.optional(s.boolean()),
      pageSize: s.optional(s.int()),
      next: s.optional(s.string()),
    }),
  );

  export class SearchDocumentsError extends ApiError {
    declare readonly payload:
      | Declared<"maxSearchResultsExceededError", MaxSearchResultsExceededError>
      | Declared<"disabledFeatureError", DisabledFeatureError>
      | Declared<"error404", undefined>
      | Declared<"error422", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<SearchDocumentsError> = [
      {
        on: 400,
        kind: "maxSearchResultsExceededError",
        decode: { kind: "json", schema: maxSearchResultsExceededErrorSchema },
      },
      { on: 403, kind: "disabledFeatureError", decode: { kind: "json", schema: disabledFeatureErrorSchema } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 422, kind: "error422", decode: { kind: "empty" } },
    ];
  }

  export type SearchEpicsRequest = {
    /**
     * See our help center article on [search
     * operators](https://help.shortcut.com/hc/en-us/articles/360000046646-Search-Operators)
     */
    query: string;
    /** The number of search results to include in a page. Minimum of 1 and maximum of 250. */
    pageSize?: number;
    /**
     * The amount of detail included in each result item. "full" will include all descriptions and
     * comments and more fields on related items such as pull requests, branches and tasks. "slim"
     * omits larger fulltext fields such as descriptions and comments and only references related
     * items by id. The default is "full".
     */
    detail?: Detail;
    /** The next page token. */
    next?: string;
    /**
     * A collection of entity_types to search. Defaults to story and epic. Supports: epic,
     * iteration, objective, story.
     */
    entityTypes?: EntityType[];
  };

  export const searchEpicsRequestSchema: Schema<SearchEpicsRequest> = s.lazySchema(() =>
    s.object<SearchEpicsRequest>({
      query: s.string().check(s.minLength(1)),
      pageSize: s.optional(s.int()),
      detail: s.optional(s.lazy(() => detailSchema)),
      next: s.optional(s.string()),
      entityTypes: s.optional(s.array(s.lazy(() => entityTypeSchema))),
    }),
  );

  export class SearchEpicsError extends ApiError {
    declare readonly payload:
      | Declared<"maxSearchResultsExceededError", MaxSearchResultsExceededError>
      | Declared<"error404", undefined>
      | Declared<"error422", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<SearchEpicsError> = [
      {
        on: 400,
        kind: "maxSearchResultsExceededError",
        decode: { kind: "json", schema: maxSearchResultsExceededErrorSchema },
      },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 422, kind: "error422", decode: { kind: "empty" } },
    ];
  }

  export type SearchIterationsRequest = {
    /**
     * See our help center article on [search
     * operators](https://help.shortcut.com/hc/en-us/articles/360000046646-Search-Operators)
     */
    query: string;
    /** The number of search results to include in a page. Minimum of 1 and maximum of 250. */
    pageSize?: number;
    /**
     * The amount of detail included in each result item. "full" will include all descriptions and
     * comments and more fields on related items such as pull requests, branches and tasks. "slim"
     * omits larger fulltext fields such as descriptions and comments and only references related
     * items by id. The default is "full".
     */
    detail?: Detail;
    /** The next page token. */
    next?: string;
    /**
     * A collection of entity_types to search. Defaults to story and epic. Supports: epic,
     * iteration, objective, story.
     */
    entityTypes?: EntityType[];
  };

  export const searchIterationsRequestSchema: Schema<SearchIterationsRequest> = s.lazySchema(() =>
    s.object<SearchIterationsRequest>({
      query: s.string().check(s.minLength(1)),
      pageSize: s.optional(s.int()),
      detail: s.optional(s.lazy(() => detailSchema)),
      next: s.optional(s.string()),
      entityTypes: s.optional(s.array(s.lazy(() => entityTypeSchema))),
    }),
  );

  export class SearchIterationsError extends ApiError {
    declare readonly payload:
      | Declared<"maxSearchResultsExceededError", MaxSearchResultsExceededError>
      | Declared<"error404", undefined>
      | Declared<"error422", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<SearchIterationsError> = [
      {
        on: 400,
        kind: "maxSearchResultsExceededError",
        decode: { kind: "json", schema: maxSearchResultsExceededErrorSchema },
      },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 422, kind: "error422", decode: { kind: "empty" } },
    ];
  }

  export type SearchMilestonesRequest = {
    /**
     * See our help center article on [search
     * operators](https://help.shortcut.com/hc/en-us/articles/360000046646-Search-Operators)
     */
    query: string;
    /** The number of search results to include in a page. Minimum of 1 and maximum of 250. */
    pageSize?: number;
    /**
     * The amount of detail included in each result item. "full" will include all descriptions and
     * comments and more fields on related items such as pull requests, branches and tasks. "slim"
     * omits larger fulltext fields such as descriptions and comments and only references related
     * items by id. The default is "full".
     */
    detail?: Detail;
    /** The next page token. */
    next?: string;
    /**
     * A collection of entity_types to search. Defaults to story and epic. Supports: epic,
     * iteration, objective, story.
     */
    entityTypes?: EntityType[];
  };

  export const searchMilestonesRequestSchema: Schema<SearchMilestonesRequest> = s.lazySchema(() =>
    s.object<SearchMilestonesRequest>({
      query: s.string().check(s.minLength(1)),
      pageSize: s.optional(s.int()),
      detail: s.optional(s.lazy(() => detailSchema)),
      next: s.optional(s.string()),
      entityTypes: s.optional(s.array(s.lazy(() => entityTypeSchema))),
    }),
  );

  export class SearchMilestonesError extends ApiError {
    declare readonly payload:
      | Declared<"maxSearchResultsExceededError", MaxSearchResultsExceededError>
      | Declared<"error404", undefined>
      | Declared<"error422", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<SearchMilestonesError> = [
      {
        on: 400,
        kind: "maxSearchResultsExceededError",
        decode: { kind: "json", schema: maxSearchResultsExceededErrorSchema },
      },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 422, kind: "error422", decode: { kind: "empty" } },
    ];
  }

  export type SearchObjectivesRequest = {
    /**
     * See our help center article on [search
     * operators](https://help.shortcut.com/hc/en-us/articles/360000046646-Search-Operators)
     */
    query: string;
    /** The number of search results to include in a page. Minimum of 1 and maximum of 250. */
    pageSize?: number;
    /**
     * The amount of detail included in each result item. "full" will include all descriptions and
     * comments and more fields on related items such as pull requests, branches and tasks. "slim"
     * omits larger fulltext fields such as descriptions and comments and only references related
     * items by id. The default is "full".
     */
    detail?: Detail;
    /** The next page token. */
    next?: string;
    /**
     * A collection of entity_types to search. Defaults to story and epic. Supports: epic,
     * iteration, objective, story.
     */
    entityTypes?: EntityType[];
  };

  export const searchObjectivesRequestSchema: Schema<SearchObjectivesRequest> = s.lazySchema(() =>
    s.object<SearchObjectivesRequest>({
      query: s.string().check(s.minLength(1)),
      pageSize: s.optional(s.int()),
      detail: s.optional(s.lazy(() => detailSchema)),
      next: s.optional(s.string()),
      entityTypes: s.optional(s.array(s.lazy(() => entityTypeSchema))),
    }),
  );

  export class SearchObjectivesError extends ApiError {
    declare readonly payload:
      | Declared<"maxSearchResultsExceededError", MaxSearchResultsExceededError>
      | Declared<"error404", undefined>
      | Declared<"error422", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<SearchObjectivesError> = [
      {
        on: 400,
        kind: "maxSearchResultsExceededError",
        decode: { kind: "json", schema: maxSearchResultsExceededErrorSchema },
      },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 422, kind: "error422", decode: { kind: "empty" } },
    ];
  }

  export type SearchStoriesRequest = {
    /**
     * See our help center article on [search
     * operators](https://help.shortcut.com/hc/en-us/articles/360000046646-Search-Operators)
     */
    query: string;
    /** The number of search results to include in a page. Minimum of 1 and maximum of 250. */
    pageSize?: number;
    /**
     * The amount of detail included in each result item. "full" will include all descriptions and
     * comments and more fields on related items such as pull requests, branches and tasks. "slim"
     * omits larger fulltext fields such as descriptions and comments and only references related
     * items by id. The default is "full".
     */
    detail?: Detail;
    /** The next page token. */
    next?: string;
    /**
     * A collection of entity_types to search. Defaults to story and epic. Supports: epic,
     * iteration, objective, story.
     */
    entityTypes?: EntityType[];
  };

  export const searchStoriesRequestSchema: Schema<SearchStoriesRequest> = s.lazySchema(() =>
    s.object<SearchStoriesRequest>({
      query: s.string().check(s.minLength(1)),
      pageSize: s.optional(s.int()),
      detail: s.optional(s.lazy(() => detailSchema)),
      next: s.optional(s.string()),
      entityTypes: s.optional(s.array(s.lazy(() => entityTypeSchema))),
    }),
  );

  export class SearchStoriesError extends ApiError {
    declare readonly payload:
      | Declared<"maxSearchResultsExceededError", MaxSearchResultsExceededError>
      | Declared<"error404", undefined>
      | Declared<"error422", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<SearchStoriesError> = [
      {
        on: 400,
        kind: "maxSearchResultsExceededError",
        decode: { kind: "json", schema: maxSearchResultsExceededErrorSchema },
      },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 422, kind: "error422", decode: { kind: "empty" } },
    ];
  }
}
