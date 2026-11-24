import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { anyAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import { gatewayRequestBodySchema, type GatewayRequestBody } from "../models/gateway-request-body.js";
import type { Servers } from "../servers.js";

export class Gateway {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Get
   *
   * @returns OK
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link MrScraperError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getRoot(
    request: Gateway.GetRootRequest,
    options?: RequestOptions,
  ): ApiPromise<Record<string, unknown>, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.defaultScraperServiceGatewayAuthApi("/"),
        auth: anyAuth(this.#auth.apiKey, this.#auth.bearerAuth),
        pathParams: [],
        query: [
          { name: "url", value: request.url, schema: s.string() },
          { name: "token", value: request.token, schema: s.optional(s.string()) },
          { name: "async", value: request.async, schema: s.optional(s.boolean()) },
          { name: "beta", value: request.beta, schema: s.optional(s.boolean()) },
          { name: "detectedJson", value: request.detectedJson, schema: s.optional(s.boolean()) },
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

  /**
   * Create
   *
   * @returns OK
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link MrScraperError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  postRoot(
    request: Gateway.PostRootRequest,
    options?: RequestOptions,
  ): ApiPromise<Record<string, unknown>, ApiError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.defaultScraperServiceGatewayAuthApi("/"),
        auth: anyAuth(this.#auth.apiKey, this.#auth.bearerAuth),
        pathParams: [],
        query: [
          { name: "async", value: request.async, schema: s.optional(s.boolean()) },
          { name: "beta", value: request.beta, schema: s.optional(s.boolean()) },
        ],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: gatewayRequestBodySchema },
      },
      {
        success: { kind: "json", schema: s.record(s.string(), s.unknown()) },
        errorFactory: ApiError,
      },
      options,
    );
  }
}

export namespace Gateway {
  export type GetRootRequest = {
    /** Target URL to forward to (URL encoded) */
    url: string;
    /** atk_example_not_a_real_token */
    token?: string;
    /** Queue the scrape and return a task ID immediately */
    async?: boolean;
    /**
     * Use the sync scraper upstream via the beta flag (async, callbacks and stream are not
     * supported yet)
     */
    beta?: boolean;
    /** Extract JSON from <script> tags and metadata from <meta> tags in HTML response */
    detectedJson?: boolean;
  };

  export type PostRootRequest = {
    /** Queue the scrape and return a task ID immediately */
    async?: boolean;
    /**
     * Use the sync scraper upstream via the beta flag; alternatively set beta: true in the JSON
     * body
     */
    beta?: boolean;
    /** Request body with domain, action, and task details */
    body: GatewayRequestBody;
  };
}
