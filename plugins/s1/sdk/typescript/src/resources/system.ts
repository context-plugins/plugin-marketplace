import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { noneAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { apiErrorModelInternalSchema, type ApiErrorModel } from "../models/api-error-model.js";
import { healthResponseSchema, type HealthResponse } from "../models/health-response.js";
import type { Servers } from "../servers.js";

export class System {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;

  constructor(rawClient: RawClient, servers: Servers) {
    this.#rawClient = rawClient;
    this.#servers = servers;
  }

  /**
   * Health check
   *
   * @remarks
   * Report whether the API is serving traffic. Takes no credentials, so use it for uptime and
   * readiness checks — it will not tell you whether an API key is valid; call GET /usage for that.
   * Free to call.
   *
   * @returns Successful response
   *
   * @throws {@link System.HealthError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link S1Error} when no usable response was produced: a connection failure, a timeout,
   * a body that would not decode, a value that would not encode, or a credential that could not be
   * obtained
   */
  health(options?: RequestOptions): ApiPromise<HealthResponse, System.HealthError> {
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
        errorFactory: System.HealthError,
      },
      options,
    );
  }
}

export namespace System {
  export class HealthError extends ApiError {
    declare readonly payload: Declared<"apiErrorModel", ApiErrorModel> | Undeclared;

    static readonly errors: ErrorDecoders<HealthError> = [
      { on: 500, kind: "apiErrorModel", decode: { kind: "json", schema: apiErrorModelInternalSchema } },
    ];
  }
}
