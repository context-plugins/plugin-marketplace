import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import * as s from "../core/validation/index.js";
import { v1NewsResponseSchema, type V1NewsResponse } from "../models/v1-news-response.js";
import type { Servers } from "../servers.js";

export class News {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * World News
   *
   * @remarks
   * Get the latest news based on a category
   *
   * @returns Successful Response
   *
   * @throws {@link News.NewsError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link ApiVerveError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  news(request: News.NewsRequest, options?: RequestOptions): ApiPromise<V1NewsResponse, News.NewsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v1/news"),
        auth: this.#auth.apiKey,
        pathParams: [],
        query: [
          { name: "category", value: request.category, schema: s.string() },
          { name: "limit", value: request.limit, schema: s.optional(s.int()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: v1NewsResponseSchema },
        errorFactory: News.NewsError,
      },
      options,
    );
  }
}

export namespace News {
  export type NewsRequest = {
    /**
     * The news category for which you want to get the news. Allowed values: business,
     * entertainment, world, health, science, sports, technology
     */
    category: string;
    /** Maximum number of articles to return */
    limit?: number;
  };

  export class NewsError extends ApiError {
    declare readonly payload:
      | Declared<"error401", undefined>
      | Declared<"error404", undefined>
      | Declared<"error500", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<NewsError> = [
      { on: 401, kind: "error401", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 500, kind: "error500", decode: { kind: "empty" } },
    ];
  }
}
