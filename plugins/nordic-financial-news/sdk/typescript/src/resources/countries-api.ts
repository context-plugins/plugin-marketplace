import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import * as s from "../core/validation/index.js";
import {
  apiV1CountriesResponseSchema,
  type ApiV1CountriesResponse,
} from "../models/api-v1-countries-response.js";
import {
  apiV1CountriesResponse1Schema,
  type ApiV1CountriesResponse1,
} from "../models/api-v1-countries-response1.js";
import { problemDetailsSchema, type ProblemDetails } from "../models/problem-details.js";
import type { Servers } from "../servers.js";

export class CountriesApi {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * List Countries
   *
   * @remarks
   * Returns the Nordic countries covered by the API, ordered alphabetically. Use the country `id`
   * or `iso2_code` to filter articles, stories, and companies by country.
   *
   * @returns Countries retrieved successfully
   *
   * @throws {@link CountriesApi.GetApiV1CountriesError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link NordicFinancialNewsError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  getApiV1Countries(
    request: CountriesApi.GetApiV1CountriesRequest = {},
    options?: RequestOptions,
  ): ApiPromise<ApiV1CountriesResponse, CountriesApi.GetApiV1CountriesError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/v1/countries"),
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
        success: { kind: "json", schema: apiV1CountriesResponseSchema },
        errorFactory: CountriesApi.GetApiV1CountriesError,
      },
      options,
    );
  }

  /**
   * Get Country Details
   *
   * @remarks
   * Returns details for a single country, including its stock exchanges. Look up by country ID or
   * ISO 3166-1 alpha-2 code (e.g. `SE`).
   *
   * @returns Country retrieved successfully
   *
   * @throws {@link CountriesApi.GetApiV1CountriesByIdentifierError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link NordicFinancialNewsError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  getApiV1CountriesByIdentifier(
    request: CountriesApi.GetApiV1CountriesByIdentifierRequest,
    options?: RequestOptions,
  ): ApiPromise<ApiV1CountriesResponse1, CountriesApi.GetApiV1CountriesByIdentifierError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/v1/countries/{identifier}"),
        auth: this.#auth.bearerAuth,
        pathParams: [{ name: "identifier", value: request.identifier, schema: s.string() }],
        query: [],
        headers: [
          { name: "If-None-Match", value: request.ifNoneMatch, schema: s.optional(s.string()) },
          { name: "If-Modified-Since", value: request.ifModifiedSince, schema: s.optional(s.string()) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: apiV1CountriesResponse1Schema },
        errorFactory: CountriesApi.GetApiV1CountriesByIdentifierError,
      },
      options,
    );
  }
}

export namespace CountriesApi {
  export type GetApiV1CountriesRequest = {
    /** Number of countries to return per page (default 25, max 100). */
    limit?: number;
    /** Opaque pagination cursor from a previous response. */
    cursor?: string;
    /** Comma-separated list of fields to include. Available fields: `id`, `name`, `iso2_code`. */
    fields?: string;
    /** ETag value from a previous response. Returns `304 Not Modified` if data has not changed. */
    ifNoneMatch?: string;
    /**
     * HTTP date from a previous `Last-Modified` header. Returns `304 Not Modified` if nothing has
     * changed since.
     */
    ifModifiedSince?: string;
  };

  export class GetApiV1CountriesError extends ApiError {
    declare readonly payload: Declared<"error304", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<GetApiV1CountriesError> = [
      { on: 304, kind: "error304", decode: { kind: "empty" } },
    ];
  }

  export type GetApiV1CountriesByIdentifierRequest = {
    /** Country ID, ISO 3166-1 alpha-2 code (e.g. `SE`), or slug (e.g. `sweden`) */
    identifier: string;
    /** ETag value from a previous response. Returns `304 Not Modified` if data has not changed. */
    ifNoneMatch?: string;
    /**
     * HTTP date from a previous `Last-Modified` header. Returns `304 Not Modified` if nothing has
     * changed since.
     */
    ifModifiedSince?: string;
  };

  export class GetApiV1CountriesByIdentifierError extends ApiError {
    declare readonly payload:
      | Declared<"error304", undefined>
      | Declared<"problemDetails", ProblemDetails>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetApiV1CountriesByIdentifierError> = [
      { on: 304, kind: "error304", decode: { kind: "empty" } },
      { on: 404, kind: "problemDetails", decode: { kind: "json", schema: problemDetailsSchema } },
    ];
  }
}
