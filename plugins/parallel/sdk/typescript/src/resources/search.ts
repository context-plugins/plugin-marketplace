import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import { errorResponseSchema, type ErrorResponse } from "../models/error-response.js";
import { v1SearchRequestInternalSchema, type V1SearchRequest } from "../models/v1-search-request.js";
import { v1SearchResponseSchema, type V1SearchResponse } from "../models/v1-search-response.js";
import type { Servers } from "../servers.js";

/**
 * Search returns ranked URLs with extended excerpts suitable for LLM consumption. Inputs are a
 * natural-language objective and optional keyword queries. Source policies allow including or
 * excluding specific domains and have configurable output sizes. The returned extended snippets
 * contain dense, relevant information from relevant pages.
 * - Result: ranked list with URL, title, and long text excerpts
 */
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
   * Searches the web.
   *
   * The legacy Search API reference (`/v1beta/search` endpoint) is available here, and migration
   * guide is here.
   *
   * @returns Successful Response
   *
   * @throws {@link Search.V1SearchV1SearchPostError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link ParallelError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  v1SearchV1SearchPost(
    request: Search.V1SearchV1SearchPostRequest,
    options?: RequestOptions,
  ): ApiPromise<V1SearchResponse, Search.V1SearchV1SearchPostError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/v1/search"),
        auth: this.#auth.apiKeyAuth,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: v1SearchRequestInternalSchema },
      },
      {
        success: { kind: "json", schema: v1SearchResponseSchema },
        errorFactory: Search.V1SearchV1SearchPostError,
      },
      options,
    );
  }
}

export namespace Search {
  export type V1SearchV1SearchPostRequest = {
    body: V1SearchRequest;
  };

  export class V1SearchV1SearchPostError extends ApiError {
    declare readonly payload: Declared<"errorResponse", ErrorResponse> | Undeclared;

    static readonly errors: ErrorDecoders<V1SearchV1SearchPostError> = [
      { on: 422, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }
}
