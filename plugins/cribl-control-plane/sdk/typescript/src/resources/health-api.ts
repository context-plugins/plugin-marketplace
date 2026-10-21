import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { anyAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { errorSchema, type Error } from "../models/error.js";
import { healthServerStatusSchema, type HealthServerStatus } from "../models/health-server-status.js";
import type { Servers } from "../servers.js";

/**
 * Actions related to REST server health
 */
export class HealthApi {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Get the health status of the server
   *
   * @remarks
   * Get the current health status of the server (Leader or Worker Node). In Distributed
   * deployments, requests routed to a Worker or Edge node using the [host
   * context](https://docs.cribl.io/cribl-as-code/api#base-url-group-fleet-host) require a Bearer
   * token for [authentication](https://docs.cribl.io/cribl-as-code/api-auth/).
   *
   * @returns Healthy status
   *
   * @throws {@link HealthApi.GetHealthError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link CriblApiReferenceError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  getHealth(options?: RequestOptions): ApiPromise<HealthServerStatus, HealthApi.GetHealthError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/health"),
        auth: anyAuth(this.#auth.bearerAuth, this.#auth.clientOauth),
        pathParams: [],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: healthServerStatusSchema },
        errorFactory: HealthApi.GetHealthError,
      },
      options,
    );
  }
}

export namespace HealthApi {
  export class GetHealthError extends ApiError {
    declare readonly payload:
      | Declared<"healthServerStatus", HealthServerStatus>
      | Declared<"error", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetHealthError> = [
      { on: 420, kind: "healthServerStatus", decode: { kind: "json", schema: healthServerStatusSchema } },
      { on: 500, kind: "error", decode: { kind: "json", schema: errorSchema } },
    ];
  }
}
