import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { anyAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import { responseSchema, type Response } from "../models/response.js";
import type { Servers } from "../servers.js";

/**
 * Operations related to application health status
 */
export class Health {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Get the health status of the application
   *
   * @returns Health status
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link CriblCloudPublicApiError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  getHealthStatus(options?: RequestOptions): ApiPromise<Response, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/"),
        auth: anyAuth(this.#auth.clientOauth, this.#auth.bearerAuth),
        pathParams: [],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: responseSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }
}
