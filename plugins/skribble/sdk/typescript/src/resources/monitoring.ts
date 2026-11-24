import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { noneAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { problemInternalSchema, type Problem } from "../models/problem.js";
import { systemHealthResponseSchema, type SystemHealthResponse } from "../models/system-health-response.js";
import type { Servers } from "../servers.js";

/**
 * Endpoints for monitoring system health.
 */
export class Monitoring {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;

  constructor(rawClient: RawClient, servers: Servers) {
    this.#rawClient = rawClient;
    this.#servers = servers;
  }

  /**
   * System Health
   *
   * @remarks
   * Returns the current health status of the Skribble API. Use this endpoint to monitor system
   * availability and responsiveness.
   *
   * `status:UP` indicates that the system is operational.
   *
   * @returns OK
   *
   * @throws {@link Monitoring.GetSystemHealthError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link SkribbleError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getSystemHealth(
    options?: RequestOptions,
  ): ApiPromise<SystemHealthResponse, Monitoring.GetSystemHealthError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.defaultSkribbleMonitoringApi("/management/health"),
        auth: noneAuth,
        pathParams: [],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: systemHealthResponseSchema },
        errorFactory: Monitoring.GetSystemHealthError,
      },
      options,
    );
  }
}

export namespace Monitoring {
  export class GetSystemHealthError extends ApiError {
    declare readonly payload:
      | Declared<"problem", Problem>
      | Declared<"problem2", Problem>
      | Declared<"problem3", Problem>
      | Declared<"problem4", Problem>
      | Declared<"problem5", Problem>
      | Declared<"problem6", Problem>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetSystemHealthError> = [
      { on: 400, kind: "problem", decode: { kind: "json", schema: problemInternalSchema } },
      { on: 401, kind: "problem2", decode: { kind: "json", schema: problemInternalSchema } },
      { on: 404, kind: "problem3", decode: { kind: "json", schema: problemInternalSchema } },
      { on: 429, kind: "problem4", decode: { kind: "json", schema: problemInternalSchema } },
      { on: 500, kind: "problem5", decode: { kind: "json", schema: problemInternalSchema } },
      { on: 503, kind: "problem6", decode: { kind: "json", schema: problemInternalSchema } },
    ];
  }
}
