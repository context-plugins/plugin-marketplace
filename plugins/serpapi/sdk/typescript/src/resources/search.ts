import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import * as s from "../core/validation/index.js";
import { deviceSchema, type Device } from "../models/device.js";
import { outputSchema, type Output } from "../models/output.js";
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
   * Retrieve a previously submitted asynchronous search
   *
   * @remarks
   * Retrieves the JSON results for an asynchronous search by its `search_id`. The `search_id` is
   * returned by /search when `async=true`.
   *
   * @returns Search result payload
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link SerpApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getSearch(
    request: Search.GetSearchRequest,
    options?: RequestOptions,
  ): ApiPromise<Record<string, unknown>, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/searches/{search_id}"),
        auth: this.#auth.apiKey,
        pathParams: [{ name: "search_id", value: request.searchId, schema: s.string() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.record(s.string(), s.unknown()) },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Run a search across a supported engine
   *
   * @remarks
   * Runs a real-time search against the engine specified by the `engine` query parameter. Supports
   * Google, Bing, YouTube, and many other engines. Engine-specific parameters are documented in the
   * SerpApi engine reference.
   *
   * @returns Search results
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link SerpApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  runSearch(
    request: Search.RunSearchRequest,
    options?: RequestOptions,
  ): ApiPromise<Record<string, unknown>, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/search"),
        auth: this.#auth.apiKey,
        pathParams: [],
        query: [
          { name: "engine", value: request.engine, schema: s.string() },
          { name: "q", value: request.q, schema: s.optional(s.string()) },
          { name: "search_query", value: request.searchQuery, schema: s.optional(s.string()) },
          { name: "api_key", value: request.apiKey, schema: s.optional(s.string()) },
          { name: "location", value: request.location, schema: s.optional(s.string()) },
          { name: "gl", value: request.gl, schema: s.optional(s.string()) },
          { name: "hl", value: request.hl, schema: s.optional(s.string()) },
          { name: "device", value: request.device, schema: s.optional(s.lazy(() => deviceSchema)) },
          { name: "no_cache", value: request.noCache, schema: s.optional(s.boolean()) },
          { name: "async", value: request.async, schema: s.optional(s.boolean()) },
          { name: "output", value: request.output, schema: s.optional(s.lazy(() => outputSchema)) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.record(s.string(), s.unknown()) },
        errorFactory: ApiError,
      },
      options,
    );
  }
}

export namespace Search {
  export type GetSearchRequest = {
    /** Identifier of the asynchronous search. */
    searchId: string;
  };

  export type RunSearchRequest = {
    /** Search engine identifier (e.g. google, bing, youtube). */
    engine: string;
    /** Search query (used by most engines except YouTube). */
    q?: string;
    /** Search query used by the YouTube engine. */
    searchQuery?: string;
    /** SerpApi private key (may also be supplied via the apiKey security scheme). */
    apiKey?: string;
    /** Geographic origin for the search. */
    location?: string;
    /** Two-letter country code. */
    gl?: string;
    /** Two-letter language code. */
    hl?: string;
    /** Device type to emulate. */
    device?: Device;
    /** Force fresh (uncached) results. */
    noCache?: boolean;
    /** Submit asynchronously and retrieve results later. */
    async?: boolean;
    /** Response format. */
    output?: Output;
  };
}
