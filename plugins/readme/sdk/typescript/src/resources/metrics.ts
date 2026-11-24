import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import { metricsRequestSchema, type MetricsRequest } from "../models/metrics-request.js";
import type { Servers } from "../servers.js";

/**
 * Send API request metrics from server-side SDKs
 */
export class Metrics {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Submit API Request Logs
   *
   * @remarks
   * Send API request and response metadata (HAR-formatted) to ReadMe Metrics for analysis in the
   * Developer Dashboard.
   *
   * @returns Logs accepted for processing
   *
   * @throws {@link Metrics.PostRequestError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link ReadMeError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  postRequest(
    request: Metrics.PostRequestRequest = {},
    options?: RequestOptions,
  ): ApiPromise<undefined, Metrics.PostRequestError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/request"),
        auth: this.#auth.basicAuth,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.array(s.lazy(() => metricsRequestSchema))),
        },
      },
      {
        success: { kind: "empty" },
        errorFactory: Metrics.PostRequestError,
      },
      options,
    );
  }
}

export namespace Metrics {
  export type PostRequestRequest = {
    body?: MetricsRequest[];
  };

  export class PostRequestError extends ApiError {
    declare readonly payload: Declared<"error401", undefined> | Declared<"error400", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<PostRequestError> = [
      { on: 401, kind: "error401", decode: { kind: "empty" } },
      { on: 400, kind: "error400", decode: { kind: "empty" } },
    ];
  }
}
