import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { noneAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import * as s from "../core/validation/index.js";
import type { Servers } from "../servers.js";

export class Lifecycle {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;

  constructor(rawClient: RawClient, servers: Servers) {
    this.#rawClient = rawClient;
    this.#servers = servers;
  }

  /**
   * Health Check
   *
   * @remarks
   * Perform a health check of the server.
   *
   * @returns OK
   *
   * @throws {@link Lifecycle.HealthCheckError} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link AuthleteApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  healthCheck(
    request: Lifecycle.HealthCheckRequest,
    options?: RequestOptions,
  ): ApiPromise<string, Lifecycle.HealthCheckError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/lifecycle/healthcheck"),
        auth: noneAuth,
        pathParams: [],
        query: [{ name: "extended", value: request.extended, schema: s.optional(s.boolean()) }],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "text", schema: s.string() },
        errorFactory: Lifecycle.HealthCheckError,
      },
      options,
    );
  }
}

export namespace Lifecycle {
  export type HealthCheckRequest = {
    /** If `true`, perform extended health checks (e.g. database connectivity). */
    extended?: boolean;
  };

  export class HealthCheckError extends ApiError {
    declare readonly payload: Declared<"error500", string> | Undeclared;

    static readonly errors: ErrorDecoders<HealthCheckError> = [
      { on: 500, kind: "error500", decode: { kind: "text", schema: s.string() } },
    ];
  }
}
