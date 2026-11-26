import { ApiError } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { noneAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import { healthCheckDtoSchema, type HealthCheckDto } from "../models/health-check-dto.js";
import type { Servers } from "../servers.js";

export class Health {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;

  constructor(rawClient: RawClient, servers: Servers) {
    this.#rawClient = rawClient;
    this.#servers = servers;
  }

  /**
   * Check app health
   *
   * @remarks
   * Returns application health status.
   *
   * @returns getHealthCheck 200 response
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link BillError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getHealthCheck(options?: RequestOptions): ApiPromise<HealthCheckDto, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v3/health"),
        auth: noneAuth,
        pathParams: [],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: healthCheckDtoSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }
}
