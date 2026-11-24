import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { apiErrorBodySchema, type ApiErrorBody } from "../models/api-error-body.js";
import { meResponseSchema, type MeResponse } from "../models/me-response.js";
import { usageResponseSchema, type UsageResponse } from "../models/usage-response.js";
import type { Servers } from "../servers.js";

/**
 * Current-user introspection: plan, limits, usage
 */
export class Account {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Current user, plan, and key info
   *
   * @remarks
   * Returns the authenticated user, their current plan + per-resource limits, the API key that
   * authenticated the request (if any), and the effective dated API version. Use this as the first
   * call in any integration to verify credentials and discover capabilities.
   *
   * @returns Current user, plan, limits, key info
   *
   * @throws {@link Account.GetMeError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link AudioscrapeError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getMe(options?: RequestOptions): ApiPromise<MeResponse, Account.GetMeError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/me"),
        auth: this.#auth.bearerAuth,
        pathParams: [],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: meResponseSchema },
        errorFactory: Account.GetMeError,
      },
      options,
    );
  }

  /**
   * Current usage and limits
   *
   * @remarks
   * Returns this calendar month's usage counters (searches, semantic searches, data calls, keyword
   * alerts) alongside the plan's configured limits. Use it to handle 429 responses proactively —
   * check usage before a heavy burst and back off if you're close to a cap.
   *
   * @returns Usage counters vs plan limits
   *
   * @throws {@link Account.GetMeUsageError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link AudioscrapeError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getMeUsage(options?: RequestOptions): ApiPromise<UsageResponse, Account.GetMeUsageError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/me/usage"),
        auth: this.#auth.bearerAuth,
        pathParams: [],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: usageResponseSchema },
        errorFactory: Account.GetMeUsageError,
      },
      options,
    );
  }
}

export namespace Account {
  export class GetMeError extends ApiError {
    declare readonly payload: Declared<"apiErrorBody", ApiErrorBody> | Undeclared;

    static readonly errors: ErrorDecoders<GetMeError> = [
      { on: 401, kind: "apiErrorBody", decode: { kind: "json", schema: apiErrorBodySchema } },
    ];
  }

  export class GetMeUsageError extends ApiError {
    declare readonly payload: Declared<"apiErrorBody", ApiErrorBody> | Undeclared;

    static readonly errors: ErrorDecoders<GetMeUsageError> = [
      { on: 401, kind: "apiErrorBody", decode: { kind: "json", schema: apiErrorBodySchema } },
    ];
  }
}
