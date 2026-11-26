import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import { apiErrorModelInternalSchema, type ApiErrorModel } from "../models/api-error-model.js";
import { askRequestInternalSchema, type AskRequest } from "../models/ask-request.js";
import { askResponseInternalSchema, type AskResponse } from "../models/ask-response.js";
import { trendingRequestInternalSchema, type TrendingRequest } from "../models/trending-request.js";
import { trendingResponseInternalSchema, type TrendingResponse } from "../models/trending-response.js";
import { newsRequestInternalSchema, type NewsRequest } from "../models/unions/news-request.js";
import { newsResponse1InternalSchema, type NewsResponse1 } from "../models/unions/news-response1.js";
import { searchRequestInternalSchema, type SearchRequest } from "../models/unions/search-request.js";
import { searchResponse1InternalSchema, type SearchResponse1 } from "../models/unions/search-response1.js";
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
   * Search the engines a natural-language request calls for
   *
   * @remarks
   * Agentic search. Describe what you are looking for in plain language and let a decision model
   * (currently TypeSafe Jev) decide where to look. It picks up to five engines (web search, Hacker
   * News, Reddit, GitHub, X, arXiv, Wikipedia, IMDb, WeChat, YouTube), rewrites the request into
   * search keywords, infers a publication window from phrases such as "this week", searches the
   * engines in parallel, and returns only the results judged relevant, merged and ranked, so agents
   * read fewer off-topic results. The request takes only `query`; engines, keywords, and the window
   * are always chosen by the model, and the response reports them in `intent`. Use POST /search
   * instead when you already know the engine and keywords and want its raw ranking. Costs 5 credits
   * per request.
   *
   * @returns Successful response
   *
   * @throws {@link Search.AskError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link Search1ApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  ask(request: Search.AskRequestParams, options?: RequestOptions): ApiPromise<AskResponse, Search.AskError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/ask"),
        auth: this.#auth.bearerAuth,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: askRequestInternalSchema },
      },
      {
        success: { kind: "json", schema: askResponseInternalSchema },
        errorFactory: Search.AskError,
      },
      options,
    );
  }

  /**
   * Search news articles across multiple sources
   *
   * @remarks
   * Search recent news when the question is about events, announcements, or coverage rather than
   * reference material. Returns articles from verified publishers with title, URL, snippet,
   * `published_date` (ISO 8601, when known), and optional full page content, filterable by site,
   * language, and time range. For questions that are not time-sensitive, prefer POST /search. Costs
   * 1 credit per request.
   *
   * @returns Successful response
   *
   * @throws {@link Search.NewsError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link Search1ApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  news(
    request: Search.NewsRequestParams,
    options?: RequestOptions,
  ): ApiPromise<NewsResponse1, Search.NewsError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/news"),
        auth: this.#auth.bearerAuth,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: newsRequestInternalSchema },
      },
      {
        success: { kind: "json", schema: newsResponse1InternalSchema },
        errorFactory: Search.NewsError,
      },
      options,
    );
  }

  /**
   * Search the web using multiple search engines
   *
   * @remarks
   * Search the live public web when the answer depends on current information, sources, or research
   * a model's training data cannot cover. Returns ranked results with id, title, URL, snippet, and
   * `published_date` (ISO 8601, when the engine exposes one) across 13+ engines, with optional
   * images. Set `crawl_results` to pull the top N result pages in the same call — each crawled page
   * is billed as an additional crawl — or pass a result URL to POST /crawl separately. Costs 1
   * credit per request.
   *
   * @returns Successful response
   *
   * @throws {@link Search.SearchError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link Search1ApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  search(
    request: Search.SearchRequestParams,
    options?: RequestOptions,
  ): ApiPromise<SearchResponse1, Search.SearchError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/search"),
        auth: this.#auth.bearerAuth,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: searchRequestInternalSchema },
      },
      {
        success: { kind: "json", schema: searchResponse1InternalSchema },
        errorFactory: Search.SearchError,
      },
      options,
    );
  }

  /**
   * Get trending topics from various platforms
   *
   * @remarks
   * List what is currently popular on a supported platform, such as GitHub repositories or Hacker
   * News stories, when the user asks what is trending or new right now. This reads a platform's own
   * live ranking rather than performing a query — for topic searches use POST /search. Costs 1
   * credit per request.
   *
   * @returns Successful response
   *
   * @throws {@link Search.TrendingError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link Search1ApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  trending(
    request: Search.TrendingRequestParams,
    options?: RequestOptions,
  ): ApiPromise<TrendingResponse, Search.TrendingError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/trending"),
        auth: this.#auth.bearerAuth,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: trendingRequestInternalSchema },
      },
      {
        success: { kind: "json", schema: trendingResponseInternalSchema },
        errorFactory: Search.TrendingError,
      },
      options,
    );
  }
}

export namespace Search {
  export type AskRequestParams = {
    body: AskRequest;
  };

  export class AskError extends ApiError {
    declare readonly payload:
      | Declared<"apiErrorModel", ApiErrorModel>
      | Declared<"apiErrorModel2", ApiErrorModel>
      | Declared<"apiErrorModel3", ApiErrorModel>
      | Declared<"apiErrorModel4", ApiErrorModel>
      | Declared<"apiErrorModel5", ApiErrorModel>
      | Declared<"apiErrorModel6", ApiErrorModel>
      | Undeclared;

    static readonly errors: ErrorDecoders<AskError> = [
      { on: 400, kind: "apiErrorModel", decode: { kind: "json", schema: apiErrorModelInternalSchema } },
      { on: 401, kind: "apiErrorModel2", decode: { kind: "json", schema: apiErrorModelInternalSchema } },
      { on: 402, kind: "apiErrorModel3", decode: { kind: "json", schema: apiErrorModelInternalSchema } },
      { on: 429, kind: "apiErrorModel4", decode: { kind: "json", schema: apiErrorModelInternalSchema } },
      { on: 500, kind: "apiErrorModel5", decode: { kind: "json", schema: apiErrorModelInternalSchema } },
      { on: 502, kind: "apiErrorModel6", decode: { kind: "json", schema: apiErrorModelInternalSchema } },
    ];
  }

  export type NewsRequestParams = {
    body: NewsRequest;
  };

  export class NewsError extends ApiError {
    declare readonly payload:
      | Declared<"apiErrorModel", ApiErrorModel>
      | Declared<"apiErrorModel2", ApiErrorModel>
      | Declared<"apiErrorModel3", ApiErrorModel>
      | Declared<"apiErrorModel4", ApiErrorModel>
      | Declared<"apiErrorModel5", ApiErrorModel>
      | Declared<"apiErrorModel6", ApiErrorModel>
      | Declared<"apiErrorModel7", ApiErrorModel>
      | Undeclared;

    static readonly errors: ErrorDecoders<NewsError> = [
      { on: 400, kind: "apiErrorModel", decode: { kind: "json", schema: apiErrorModelInternalSchema } },
      { on: 401, kind: "apiErrorModel2", decode: { kind: "json", schema: apiErrorModelInternalSchema } },
      { on: 402, kind: "apiErrorModel3", decode: { kind: "json", schema: apiErrorModelInternalSchema } },
      { on: 422, kind: "apiErrorModel4", decode: { kind: "json", schema: apiErrorModelInternalSchema } },
      { on: 429, kind: "apiErrorModel5", decode: { kind: "json", schema: apiErrorModelInternalSchema } },
      { on: 500, kind: "apiErrorModel6", decode: { kind: "json", schema: apiErrorModelInternalSchema } },
      { on: 502, kind: "apiErrorModel7", decode: { kind: "json", schema: apiErrorModelInternalSchema } },
    ];
  }

  export type SearchRequestParams = {
    body: SearchRequest;
  };

  export class SearchError extends ApiError {
    declare readonly payload:
      | Declared<"apiErrorModel", ApiErrorModel>
      | Declared<"apiErrorModel2", ApiErrorModel>
      | Declared<"apiErrorModel3", ApiErrorModel>
      | Declared<"apiErrorModel4", ApiErrorModel>
      | Declared<"apiErrorModel5", ApiErrorModel>
      | Declared<"apiErrorModel6", ApiErrorModel>
      | Declared<"apiErrorModel7", ApiErrorModel>
      | Undeclared;

    static readonly errors: ErrorDecoders<SearchError> = [
      { on: 400, kind: "apiErrorModel", decode: { kind: "json", schema: apiErrorModelInternalSchema } },
      { on: 401, kind: "apiErrorModel2", decode: { kind: "json", schema: apiErrorModelInternalSchema } },
      { on: 402, kind: "apiErrorModel3", decode: { kind: "json", schema: apiErrorModelInternalSchema } },
      { on: 422, kind: "apiErrorModel4", decode: { kind: "json", schema: apiErrorModelInternalSchema } },
      { on: 429, kind: "apiErrorModel5", decode: { kind: "json", schema: apiErrorModelInternalSchema } },
      { on: 500, kind: "apiErrorModel6", decode: { kind: "json", schema: apiErrorModelInternalSchema } },
      { on: 502, kind: "apiErrorModel7", decode: { kind: "json", schema: apiErrorModelInternalSchema } },
    ];
  }

  export type TrendingRequestParams = {
    body: TrendingRequest;
  };

  export class TrendingError extends ApiError {
    declare readonly payload:
      | Declared<"apiErrorModel", ApiErrorModel>
      | Declared<"apiErrorModel2", ApiErrorModel>
      | Declared<"apiErrorModel3", ApiErrorModel>
      | Declared<"apiErrorModel4", ApiErrorModel>
      | Declared<"apiErrorModel5", ApiErrorModel>
      | Declared<"apiErrorModel6", ApiErrorModel>
      | Declared<"apiErrorModel7", ApiErrorModel>
      | Undeclared;

    static readonly errors: ErrorDecoders<TrendingError> = [
      { on: 400, kind: "apiErrorModel", decode: { kind: "json", schema: apiErrorModelInternalSchema } },
      { on: 401, kind: "apiErrorModel2", decode: { kind: "json", schema: apiErrorModelInternalSchema } },
      { on: 402, kind: "apiErrorModel3", decode: { kind: "json", schema: apiErrorModelInternalSchema } },
      { on: 422, kind: "apiErrorModel4", decode: { kind: "json", schema: apiErrorModelInternalSchema } },
      { on: 429, kind: "apiErrorModel5", decode: { kind: "json", schema: apiErrorModelInternalSchema } },
      { on: 500, kind: "apiErrorModel6", decode: { kind: "json", schema: apiErrorModelInternalSchema } },
      { on: 502, kind: "apiErrorModel7", decode: { kind: "json", schema: apiErrorModelInternalSchema } },
    ];
  }
}
