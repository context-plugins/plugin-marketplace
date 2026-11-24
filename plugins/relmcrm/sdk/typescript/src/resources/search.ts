import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { anyAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { searchResultSchema, type SearchResult } from "../models/search-result.js";
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
   * Cross-object search over contacts, companies and deals
   *
   * @returns Search results (has_more=true if any section was truncated).
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link RelmCrmError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  search(request: Search.SearchRequest, options?: RequestOptions): ApiPromise<SearchResult, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/search"),
        auth: anyAuth(this.#auth.bearerAuth, this.#auth.oauth2),
        pathParams: [],
        query: [
          { name: "q", value: request.q, schema: s.string() },
          { name: "limit", value: request.limit, schema: s.defaulted(s.int(), 10) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: searchResultSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }
}

export namespace Search {
  export type SearchRequest = {
    /** Substring to match. */
    q: string;
    /** @default 10 */
    limit?: number;
  };

  export const searchRequestSchema: Schema<SearchRequest> = s.lazySchema(() =>
    s.object<SearchRequest>({
      q: s.string(),
      limit: s.defaulted(s.int().check(s.lte(100)), 10),
    }),
  );
}
