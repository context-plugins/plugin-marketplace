import { ApiError } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { noneAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import { apiV1HealthResponseSchema, type ApiV1HealthResponse } from "../models/api-v1-health-response.js";
import type { Servers } from "../servers.js";

export class Health {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;

  constructor(rawClient: RawClient, servers: Servers) {
    this.#rawClient = rawClient;
    this.#servers = servers;
  }

  /**
   * Health check endpoint
   *
   * @remarks
   * Returns the health status of the API
   *
   * @returns successful
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link NordicFinancialNewsError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  getApiV1Health(options?: RequestOptions): ApiPromise<ApiV1HealthResponse, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/v1/health"),
        auth: noneAuth,
        pathParams: [],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: apiV1HealthResponseSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }
}
