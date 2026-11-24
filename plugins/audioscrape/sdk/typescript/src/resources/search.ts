import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import { apiErrorBodySchema, type ApiErrorBody } from "../models/api-error-body.js";
import { searchRequestInternalSchema, type SearchRequest } from "../models/search-request.js";
import { searchResponseInternalSchema, type SearchResponse } from "../models/search-response.js";
import type { Servers } from "../servers.js";

/**
 * Hybrid, text, and semantic search across all audio content, regardless of source type
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
   * Hybrid, text, or semantic search
   *
   * @remarks
   * Searches the audio corpus and returns segment-level results with timestamps, highlights, and
   * the parent episode + podcast. The default `search_type` of `hybrid` combines keyword scoring
   * with semantic vector matching; use `text` for boolean queries and quoted phrases, `semantic`
   * for natural-language questions. Filter by podcast, speaker, or publish-date range via the
   * `filters` object.
   *
   * @returns Search results
   *
   * @throws {@link Search.SearchApiV1Error} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link AudioscrapeError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  searchApiV1(
    request: Search.SearchApiV1Request,
    options?: RequestOptions,
  ): ApiPromise<SearchResponse, Search.SearchApiV1Error> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/api/search"),
        auth: this.#auth.bearerAuth,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: searchRequestInternalSchema },
      },
      {
        success: { kind: "json", schema: searchResponseInternalSchema },
        errorFactory: Search.SearchApiV1Error,
      },
      options,
    );
  }
}

export namespace Search {
  export type SearchApiV1Request = {
    body: SearchRequest;
  };

  export class SearchApiV1Error extends ApiError {
    declare readonly payload:
      | Declared<"apiErrorBody", ApiErrorBody>
      | Declared<"apiErrorBody2", ApiErrorBody>
      | Declared<"apiErrorBody3", ApiErrorBody>
      | Declared<"apiErrorBody4", ApiErrorBody>
      | Declared<"apiErrorBody5", ApiErrorBody>
      | Undeclared;

    static readonly errors: ErrorDecoders<SearchApiV1Error> = [
      { on: 400, kind: "apiErrorBody", decode: { kind: "json", schema: apiErrorBodySchema } },
      { on: 401, kind: "apiErrorBody2", decode: { kind: "json", schema: apiErrorBodySchema } },
      { on: 402, kind: "apiErrorBody3", decode: { kind: "json", schema: apiErrorBodySchema } },
      { on: 403, kind: "apiErrorBody4", decode: { kind: "json", schema: apiErrorBodySchema } },
      { on: 429, kind: "apiErrorBody5", decode: { kind: "json", schema: apiErrorBodySchema } },
    ];
  }
}
