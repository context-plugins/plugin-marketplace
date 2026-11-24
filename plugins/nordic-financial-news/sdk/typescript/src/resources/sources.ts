import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import * as s from "../core/validation/index.js";
import { apiV1SourcesResponseSchema, type ApiV1SourcesResponse } from "../models/api-v1-sources-response.js";
import { problemDetailsSchema, type ProblemDetails } from "../models/problem-details.js";
import type { Servers } from "../servers.js";

export class Sources {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * List Sources
   *
   * @remarks
   * Returns a paginated list of enabled news sources, ordered alphabetically by name. Use source
   * IDs to filter articles and stories via the `sources` parameter on the articles and stories list
   * endpoints.
   *
   * @returns Sources retrieved
   *
   * @throws {@link Sources.GetApiV1SourcesError} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link NordicFinancialNewsError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  getApiV1Sources(
    request: Sources.GetApiV1SourcesRequest = {},
    options?: RequestOptions,
  ): ApiPromise<ApiV1SourcesResponse, Sources.GetApiV1SourcesError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/v1/sources"),
        auth: this.#auth.bearerAuth,
        pathParams: [],
        query: [
          { name: "limit", value: request.limit, schema: s.optional(s.int()) },
          { name: "cursor", value: request.cursor, schema: s.optional(s.string()) },
          { name: "fields", value: request.fields, schema: s.optional(s.string()) },
        ],
        headers: [
          { name: "If-None-Match", value: request.ifNoneMatch, schema: s.optional(s.string()) },
          { name: "If-Modified-Since", value: request.ifModifiedSince, schema: s.optional(s.string()) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: apiV1SourcesResponseSchema },
        errorFactory: Sources.GetApiV1SourcesError,
      },
      options,
    );
  }
}

export namespace Sources {
  export type GetApiV1SourcesRequest = {
    /** Number of sources to return per page (default 25, max 100). */
    limit?: number;
    /** Opaque pagination cursor from a previous response. */
    cursor?: string;
    /**
     * Comma-separated list of fields to include. Available fields: `id`, `name`, `domain`,
     * `country`, `source_type`.
     */
    fields?: string;
    /** ETag value from a previous response. Returns `304 Not Modified` if data has not changed. */
    ifNoneMatch?: string;
    /**
     * HTTP date from a previous `Last-Modified` header. Returns `304 Not Modified` if nothing has
     * changed since.
     */
    ifModifiedSince?: string;
  };

  export class GetApiV1SourcesError extends ApiError {
    declare readonly payload:
      | Declared<"error304", undefined>
      | Declared<"problemDetails", ProblemDetails>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetApiV1SourcesError> = [
      { on: 304, kind: "error304", decode: { kind: "empty" } },
      { on: 401, kind: "problemDetails", decode: { kind: "json", schema: problemDetailsSchema } },
    ];
  }
}
