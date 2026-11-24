import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import * as s from "../core/validation/index.js";
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
   * Search for ticker symbols
   *
   * @returns Search results
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link FinancialModelingPrepError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  searchSymbols(
    request: Search.SearchSymbolsRequest,
    options?: RequestOptions,
  ): ApiPromise<SearchResponse[], ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/search"),
        auth: this.#auth.apiKeyQuery,
        pathParams: [],
        query: [
          { name: "query", value: request.query, schema: s.string() },
          { name: "limit", value: request.limit, schema: s.defaulted(s.int(), 10) },
          { name: "exchange", value: request.exchange, schema: s.optional(s.string()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => searchResponseSchema)) },
        errorFactory: ApiError,
      },
      options,
    );
  }
}

export namespace Search {
  export type SearchSymbolsRequest = {
    query: string;
    /** @default 10 */
    limit?: number;
    exchange?: string;
  };
}
