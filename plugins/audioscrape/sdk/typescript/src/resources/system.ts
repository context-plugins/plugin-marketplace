import { ApiError } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { noneAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import { healthResponseSchema, type HealthResponse } from "../models/health-response.js";
import type { Servers } from "../servers.js";

/**
 * Service health and version
 */
export class System {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;

  constructor(rawClient: RawClient, servers: Servers) {
    this.#rawClient = rawClient;
    this.#servers = servers;
  }

  /**
   * Service health check
   *
   * @remarks
   * Returns `200 OK` with a small JSON payload as long as the API is responding. Useful as a
   * liveness probe; does not check downstream dependencies.
   *
   * @returns Service is healthy
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link AudioscrapeError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getHealthOpenapi(options?: RequestOptions): ApiPromise<HealthResponse, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/health"),
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
