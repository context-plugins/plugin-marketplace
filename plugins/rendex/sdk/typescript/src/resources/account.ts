import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { errorResponseSchema, type ErrorResponse } from "../models/error-response.js";
import { v1AccountResponseInternalSchema, type V1AccountResponse } from "../models/v1-account-response.js";
import type { Servers } from "../servers.js";

/**
 * Plan, usage, and upgrade information
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
   * Get plan, usage, and upgrade info
   *
   * @remarks
   * Returns the authenticated account's plan, this month's usage (used / limit / remaining and the
   * reset date), the per-minute rate limit, and a recommended upgrade with a one-tap link.
   * Read-only and free — it does not consume credits.
   *
   * @returns Account summary
   *
   * @throws {@link Account.GetAccountError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link RendexError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getAccount(options?: RequestOptions): ApiPromise<V1AccountResponse, Account.GetAccountError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v1/account"),
        auth: this.#auth.bearerAuth,
        pathParams: [],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: v1AccountResponseInternalSchema },
        errorFactory: Account.GetAccountError,
      },
      options,
    );
  }
}

export namespace Account {
  export class GetAccountError extends ApiError {
    declare readonly payload: Declared<"errorResponse", ErrorResponse> | Undeclared;

    static readonly errors: ErrorDecoders<GetAccountError> = [
      { on: 401, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }
}
