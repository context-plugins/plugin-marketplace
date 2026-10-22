import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import { autocompleteRequestSchema, type AutocompleteRequest } from "../models/autocomplete-request.js";
import { autocompleteResponseSchema, type AutocompleteResponse } from "../models/autocomplete-response.js";
import { errorInfoSchema, type ErrorInfo } from "../models/error-info.js";
import { feedRequestSchema, type FeedRequest } from "../models/feed-request.js";
import { feedResponseSchema, type FeedResponse } from "../models/feed-response.js";
import {
  recommendationsRequestSchema,
  type RecommendationsRequest,
} from "../models/recommendations-request.js";
import { resultsResponseSchema, type ResultsResponse } from "../models/results-response.js";
import { searchRequestSchema, type SearchRequest } from "../models/search-request.js";
import { searchResponseSchema, type SearchResponse } from "../models/search-response.js";
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
   * Search the index (admin)
   *
   * @remarks
   * Retrieves results for search query without respect for permissions. This is available only to
   * privileged users.
   *
   * @returns OK
   *
   * @throws {@link Search.AdminsearchError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link GleanClientApiError} when no usable response was produced: a connection failure,
   * a timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  adminsearch(
    request: Search.AdminsearchRequest,
    options?: RequestOptions,
  ): ApiPromise<SearchResponse, Search.AdminsearchError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/rest/api/v1/adminsearch"),
        auth: this.#auth.apiToken,
        pathParams: [],
        query: [{ name: "locale", value: request.locale, schema: s.optional(s.string()) }],
        headers: [
          { name: "X-Glean-ActAs", value: request.xGleanActAs, schema: s.optional(s.string()) },
          { name: "X-Glean-Auth-Type", value: request.xGleanAuthType, schema: s.optional(s.string()) },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "json", value: request.body, schema: searchRequestSchema },
      },
      {
        success: { kind: "json", schema: searchResponseSchema },
        errorFactory: Search.AdminsearchError,
      },
      options,
    );
  }

  /**
   * Autocomplete
   *
   * @remarks
   * Retrieve query suggestions, operators and documents for the given partially typed query.
   *
   * @returns OK
   *
   * @throws {@link Search.AutocompleteError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link GleanClientApiError} when no usable response was produced: a connection failure,
   * a timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  autocomplete(
    request: Search.AutocompleteRequestParams,
    options?: RequestOptions,
  ): ApiPromise<AutocompleteResponse, Search.AutocompleteError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/rest/api/v1/autocomplete"),
        auth: this.#auth.apiToken,
        pathParams: [],
        query: [{ name: "locale", value: request.locale, schema: s.optional(s.string()) }],
        headers: [
          { name: "X-Glean-ActAs", value: request.xGleanActAs, schema: s.optional(s.string()) },
          { name: "X-Glean-Auth-Type", value: request.xGleanAuthType, schema: s.optional(s.string()) },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "json", value: request.body, schema: autocompleteRequestSchema },
      },
      {
        success: { kind: "json", schema: autocompleteResponseSchema },
        errorFactory: Search.AutocompleteError,
      },
      options,
    );
  }

  /**
   * Feed of documents and events
   *
   * @remarks
   * The personalized feed/home includes different types of contents including suggestions, recents,
   * calendar events and many more.
   *
   * @returns OK
   *
   * @throws {@link Search.FeedError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link GleanClientApiError} when no usable response was produced: a connection failure,
   * a timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  feed(
    request: Search.FeedRequestParams,
    options?: RequestOptions,
  ): ApiPromise<FeedResponse, Search.FeedError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/rest/api/v1/feed"),
        auth: this.#auth.apiToken,
        pathParams: [],
        query: [{ name: "locale", value: request.locale, schema: s.optional(s.string()) }],
        headers: [
          { name: "X-Glean-ActAs", value: request.xGleanActAs, schema: s.optional(s.string()) },
          { name: "X-Glean-Auth-Type", value: request.xGleanAuthType, schema: s.optional(s.string()) },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "json", value: request.body, schema: feedRequestSchema },
      },
      {
        success: { kind: "json", schema: feedResponseSchema },
        errorFactory: Search.FeedError,
      },
      options,
    );
  }

  /**
   * Recommend documents
   *
   * @remarks
   * Retrieve recommended documents for the given URL or Glean Document ID.
   *
   * @returns OK
   *
   * @throws {@link Search.RecommendationsError} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link GleanClientApiError} when no usable response was produced: a connection failure,
   * a timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  recommendations(
    request: Search.RecommendationsRequestParams,
    options?: RequestOptions,
  ): ApiPromise<ResultsResponse, Search.RecommendationsError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/rest/api/v1/recommendations"),
        auth: this.#auth.apiToken,
        pathParams: [],
        query: [{ name: "locale", value: request.locale, schema: s.optional(s.string()) }],
        headers: [
          { name: "X-Glean-ActAs", value: request.xGleanActAs, schema: s.optional(s.string()) },
          { name: "X-Glean-Auth-Type", value: request.xGleanAuthType, schema: s.optional(s.string()) },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "json", value: request.body, schema: recommendationsRequestSchema },
      },
      {
        success: { kind: "json", schema: resultsResponseSchema },
        errorFactory: Search.RecommendationsError,
      },
      options,
    );
  }

  /**
   * Search
   *
   * @remarks
   * Retrieve results from the index for the given query and filters.
   *
   * @returns OK
   *
   * @throws {@link Search.SearchError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link GleanClientApiError} when no usable response was produced: a connection failure,
   * a timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  search(
    request: Search.SearchRequestParams,
    options?: RequestOptions,
  ): ApiPromise<SearchResponse, Search.SearchError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/rest/api/v1/search"),
        auth: this.#auth.apiToken,
        pathParams: [],
        query: [{ name: "locale", value: request.locale, schema: s.optional(s.string()) }],
        headers: [
          { name: "X-Glean-ActAs", value: request.xGleanActAs, schema: s.optional(s.string()) },
          { name: "X-Glean-Auth-Type", value: request.xGleanAuthType, schema: s.optional(s.string()) },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "json", value: request.body, schema: searchRequestSchema },
      },
      {
        success: { kind: "json", schema: searchResponseSchema },
        errorFactory: Search.SearchError,
      },
      options,
    );
  }
}

export namespace Search {
  export type AdminsearchRequest = {
    /**
     * The client's preferred locale in rfc5646 format (e.g. `en`, `ja`, `pt-BR`). If omitted, the
     * `Accept-Language` will be used. If not present or not supported, defaults to the closest
     * match or `en`.
     */
    locale?: string;
    /**
     * Email address of a user on whose behalf the request is intended to be made (should be
     * non-empty only for global tokens).
     */
    xGleanActAs?: string;
    /** Auth type being used to access the endpoint (should be non-empty only for global tokens). */
    xGleanAuthType?: string;
    /** Admin search request */
    body: SearchRequest;
  };

  export class AdminsearchError extends ApiError {
    declare readonly payload:
      | Declared<"error400", undefined>
      | Declared<"error401", undefined>
      | Declared<"errorInfo", ErrorInfo>
      | Declared<"errorInfo2", ErrorInfo>
      | Declared<"error429", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<AdminsearchError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 401, kind: "error401", decode: { kind: "empty" } },
      { on: 403, kind: "errorInfo", decode: { kind: "json", schema: errorInfoSchema } },
      { on: 422, kind: "errorInfo2", decode: { kind: "json", schema: errorInfoSchema } },
      { on: 429, kind: "error429", decode: { kind: "empty" } },
    ];
  }

  export type AutocompleteRequestParams = {
    /**
     * The client's preferred locale in rfc5646 format (e.g. `en`, `ja`, `pt-BR`). If omitted, the
     * `Accept-Language` will be used. If not present or not supported, defaults to the closest
     * match or `en`.
     */
    locale?: string;
    /**
     * Email address of a user on whose behalf the request is intended to be made (should be
     * non-empty only for global tokens).
     */
    xGleanActAs?: string;
    /** Auth type being used to access the endpoint (should be non-empty only for global tokens). */
    xGleanAuthType?: string;
    /** Autocomplete request */
    body: AutocompleteRequest;
  };

  export class AutocompleteError extends ApiError {
    declare readonly payload:
      | Declared<"error400", undefined>
      | Declared<"error401", undefined>
      | Declared<"error429", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<AutocompleteError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 401, kind: "error401", decode: { kind: "empty" } },
      { on: 429, kind: "error429", decode: { kind: "empty" } },
    ];
  }

  export type FeedRequestParams = {
    /**
     * The client's preferred locale in rfc5646 format (e.g. `en`, `ja`, `pt-BR`). If omitted, the
     * `Accept-Language` will be used. If not present or not supported, defaults to the closest
     * match or `en`.
     */
    locale?: string;
    /**
     * Email address of a user on whose behalf the request is intended to be made (should be
     * non-empty only for global tokens).
     */
    xGleanActAs?: string;
    /** Auth type being used to access the endpoint (should be non-empty only for global tokens). */
    xGleanAuthType?: string;
    /** Includes request params, client data and more for making user's feed. */
    body: FeedRequest;
  };

  export class FeedError extends ApiError {
    declare readonly payload:
      | Declared<"error400", undefined>
      | Declared<"error401", undefined>
      | Declared<"error408", undefined>
      | Declared<"error429", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<FeedError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 401, kind: "error401", decode: { kind: "empty" } },
      { on: 408, kind: "error408", decode: { kind: "empty" } },
      { on: 429, kind: "error429", decode: { kind: "empty" } },
    ];
  }

  export type RecommendationsRequestParams = {
    /**
     * The client's preferred locale in rfc5646 format (e.g. `en`, `ja`, `pt-BR`). If omitted, the
     * `Accept-Language` will be used. If not present or not supported, defaults to the closest
     * match or `en`.
     */
    locale?: string;
    /**
     * Email address of a user on whose behalf the request is intended to be made (should be
     * non-empty only for global tokens).
     */
    xGleanActAs?: string;
    /** Auth type being used to access the endpoint (should be non-empty only for global tokens). */
    xGleanAuthType?: string;
    /** Recommendations request */
    body: RecommendationsRequest;
  };

  export class RecommendationsError extends ApiError {
    declare readonly payload:
      | Declared<"error400", undefined>
      | Declared<"error401", undefined>
      | Declared<"error403", undefined>
      | Declared<"error429", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<RecommendationsError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 401, kind: "error401", decode: { kind: "empty" } },
      { on: 403, kind: "error403", decode: { kind: "empty" } },
      { on: 429, kind: "error429", decode: { kind: "empty" } },
    ];
  }

  export type SearchRequestParams = {
    /**
     * The client's preferred locale in rfc5646 format (e.g. `en`, `ja`, `pt-BR`). If omitted, the
     * `Accept-Language` will be used. If not present or not supported, defaults to the closest
     * match or `en`.
     */
    locale?: string;
    /**
     * Email address of a user on whose behalf the request is intended to be made (should be
     * non-empty only for global tokens).
     */
    xGleanActAs?: string;
    /** Auth type being used to access the endpoint (should be non-empty only for global tokens). */
    xGleanAuthType?: string;
    /** Search request */
    body: SearchRequest;
  };

  export class SearchError extends ApiError {
    declare readonly payload:
      | Declared<"error400", undefined>
      | Declared<"error401", undefined>
      | Declared<"errorInfo", ErrorInfo>
      | Declared<"error408", undefined>
      | Declared<"errorInfo2", ErrorInfo>
      | Declared<"error429", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<SearchError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 401, kind: "error401", decode: { kind: "empty" } },
      { on: 403, kind: "errorInfo", decode: { kind: "json", schema: errorInfoSchema } },
      { on: 408, kind: "error408", decode: { kind: "empty" } },
      { on: 422, kind: "errorInfo2", decode: { kind: "json", schema: errorInfoSchema } },
      { on: 429, kind: "error429", decode: { kind: "empty" } },
    ];
  }
}
