import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { noneAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { deepHealthResponseSchema, type DeepHealthResponse } from "../models/deep-health-response.js";
import { healthResponseSchema, type HealthResponse } from "../models/health-response.js";
import type { Servers } from "../servers.js";

/**
 * Service health checks
 */
export class Health {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;

  constructor(rawClient: RawClient, servers: Servers) {
    this.#rawClient = rawClient;
    this.#servers = servers;
  }

  /**
   * Deep dependency check
   *
   * @remarks
   * Verifies connectivity to all external dependencies (database, billing).
   *
   * @returns All dependencies healthy
   *
   * @throws {@link Health.DeepHealthCheckError} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link RendexError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  deepHealthCheck(options?: RequestOptions): ApiPromise<DeepHealthResponse, Health.DeepHealthCheckError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/health/deep"),
        auth: noneAuth,
        pathParams: [],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: deepHealthResponseSchema },
        errorFactory: Health.DeepHealthCheckError,
      },
      options,
    );
  }

  /**
   * Liveness check
   *
   * @remarks
   * Returns 200 if the API worker is running.
   *
   * @returns Service is alive
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link RendexError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  healthCheck(options?: RequestOptions): ApiPromise<HealthResponse, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/health"),
        auth: noneAuth,
        pathParams: [],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: healthResponseSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }
}

export namespace Health {
  export class DeepHealthCheckError extends ApiError {
    declare readonly payload: Declared<"deepHealthResponse", DeepHealthResponse> | Undeclared;

    static readonly errors: ErrorDecoders<DeepHealthCheckError> = [
      { on: 503, kind: "deepHealthResponse", decode: { kind: "json", schema: deepHealthResponseSchema } },
    ];
  }
}
