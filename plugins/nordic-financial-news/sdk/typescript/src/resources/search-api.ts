import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import * as s from "../core/validation/index.js";
import { problemDetailsSchema, type ProblemDetails } from "../models/problem-details.js";
import { searchResultSchema, type SearchResult } from "../models/search-result.js";
import type { Servers } from "../servers.js";

export class SearchApi {
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
   * Search across articles, stories, companies, countries, exchanges, and indices. Results are
   * grouped by resource type and ranked by relevance. Use `type` to limit which resource types are
   * searched.
   *
   * @returns Search results
   *
   * @throws {@link SearchApi.GetApiV1SearchError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link NordicFinancialNewsError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  getApiV1Search(
    request: SearchApi.GetApiV1SearchRequest,
    options?: RequestOptions,
  ): ApiPromise<SearchResult, SearchApi.GetApiV1SearchError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/v1/search"),
        auth: this.#auth.bearerAuth,
        pathParams: [],
        query: [
          { name: "q", value: request.q, schema: s.string() },
          { name: "type", value: request.type, schema: s.optional(s.string()) },
          { name: "limit", value: request.limit, schema: s.optional(s.int()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: searchResultSchema },
        errorFactory: SearchApi.GetApiV1SearchError,
      },
      options,
    );
  }
}

export namespace SearchApi {
  export type GetApiV1SearchRequest = {
    /** Full-text search query (2-200 characters). */
    q: string;
    /**
     * Comma-separated list of resource types to search. Defaults to all types. Valid values:
     * `articles`, `stories`, `companies`, `countries`, `exchanges`, `indices`.
     */
    type?: string;
    /** Maximum number of results per resource type (default 5, max 25). */
    limit?: number;
  };

  export class GetApiV1SearchError extends ApiError {
    declare readonly payload:
      | Declared<"problemDetails", ProblemDetails>
      | Declared<"problemDetails2", ProblemDetails>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetApiV1SearchError> = [
      { on: 400, kind: "problemDetails", decode: { kind: "json", schema: problemDetailsSchema } },
      { on: 401, kind: "problemDetails2", decode: { kind: "json", schema: problemDetailsSchema } },
    ];
  }
}
