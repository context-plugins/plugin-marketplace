import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { errorResponseSchema, type ErrorResponse } from "../models/error-response.js";
import { limitsResultSchema, type LimitsResult } from "../models/limits-result.js";
import type { Servers } from "../servers.js";

export class Utilities {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Limits
   *
   * @remarks
   * Returns the authenticated account's current API usage and the limits that apply to it: the
   * number of requests made in the current tracking period, the request limit, the per-second rate
   * limit, and when the counter resets.
   *
   * Optionally, pass one or more API keys via the `apiKeys` parameter to check their status. For
   * each supplied key the response reports whether it is `valid` (exists and belongs to your
   * account), `enabled` (a disabled key is 'off'), and whether its `subscription` is active.
   *
   * This endpoint is authenticated with your API key but is quota-exempt: calling it does **not**
   * count against your monthly request quota and is not subject to rate limiting. It is intended
   * for liveness/health probes and external dashboards that need to check whether an API key and
   * subscription are active without consuming usage.
   *
   * @returns 200 - Success
   *
   * @throws {@link Utilities.GetLimitsError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link PerigonError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getLimits(
    request: Utilities.GetLimitsRequest = {},
    options?: RequestOptions,
  ): ApiPromise<LimitsResult, Utilities.GetLimitsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v1/limits"),
        auth: this.#auth.apiKeyAuth,
        pathParams: [],
        query: [{ name: "apiKeys", value: request.apiKeys, schema: s.optional(s.array(s.string())) }],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: limitsResultSchema },
        errorFactory: Utilities.GetLimitsError,
      },
      options,
    );
  }
}

export namespace Utilities {
  export type GetLimitsRequest = {
    /**
     * Optional list of API keys whose validity and status should be checked. Each key is reported
     * as valid only if it exists and belongs to your account.
     */
    apiKeys?: string[];
  };

  export const getLimitsRequestSchema: Schema<GetLimitsRequest> = s.lazySchema(() =>
    s.object<GetLimitsRequest>({
      apiKeys: s.optional(s.array(s.string()).check(s.minLength(0), s.maxLength(50))),
    }),
  );

  export class GetLimitsError extends ApiError {
    declare readonly payload:
      | Declared<"errorResponse", ErrorResponse>
      | Declared<"errorResponse2", ErrorResponse>
      | Declared<"errorResponse3", ErrorResponse>
      | Declared<"errorResponse4", ErrorResponse>
      | Declared<"errorResponse5", ErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetLimitsError> = [
      { on: 401, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 500, kind: "errorResponse2", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 400, kind: "errorResponse3", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 403, kind: "errorResponse4", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 429, kind: "errorResponse5", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }
}
