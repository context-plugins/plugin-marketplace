import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { noneAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { errorInternalSchema, type Error } from "../models/error.js";
import { openapiJsonResponseSchema, type OpenapiJsonResponse } from "../models/openapi-json-response.js";
import { statusResponseSchema, type StatusResponse } from "../models/status-response.js";
import type { Servers } from "../servers.js";

/**
 * Service health.
 */
export class StatusApi {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;

  constructor(rawClient: RawClient, servers: Servers) {
    this.#rawClient = rawClient;
    this.#servers = servers;
  }

  /**
   * Get this OpenAPI document
   *
   * @remarks
   * Retrieve the machine-readable description of this API. Requires no authentication. Also served
   * from `https://www.cosmicjs.com/openapi.json`, which proxies this endpoint.
   *
   * @returns The OpenAPI 3.1 document describing this API.
   *
   * @throws {@link StatusApi.GetOpenApiSpecError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link CosmicError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getOpenApiSpec(options?: RequestOptions): ApiPromise<OpenapiJsonResponse, StatusApi.GetOpenApiSpecError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/openapi.json"),
        auth: noneAuth,
        pathParams: [],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: openapiJsonResponseSchema },
        errorFactory: StatusApi.GetOpenApiSpecError,
      },
      options,
    );
  }

  /**
   * Check API status
   *
   * @remarks
   * Confirm the API is reachable and learn which AWS region served the request. Requires no
   * authentication, so it is safe to use as a connectivity check before supplying keys.
   *
   * @returns The API is reachable.
   *
   * @throws {@link StatusApi.GetStatusError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link CosmicError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getStatus(options?: RequestOptions): ApiPromise<StatusResponse, StatusApi.GetStatusError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/status"),
        auth: noneAuth,
        pathParams: [],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: statusResponseSchema },
        errorFactory: StatusApi.GetStatusError,
      },
      options,
    );
  }
}

export namespace StatusApi {
  export class GetOpenApiSpecError extends ApiError {
    declare readonly payload: Declared<"error", Error> | Undeclared;

    static readonly errors: ErrorDecoders<GetOpenApiSpecError> = [
      { on: 500, kind: "error", decode: { kind: "json", schema: errorInternalSchema } },
    ];
  }

  export class GetStatusError extends ApiError {
    declare readonly payload: Declared<"error", Error> | Undeclared;

    static readonly errors: ErrorDecoders<GetStatusError> = [
      { on: 500, kind: "error", decode: { kind: "json", schema: errorInternalSchema } },
    ];
  }
}
