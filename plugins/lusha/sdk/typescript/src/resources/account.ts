import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { accountUsageResponseSchema, type AccountUsageResponse } from "../models/account-usage-response.js";
import { errorResponseSchema, type ErrorResponse } from "../models/error-response.js";
import type { Servers } from "../servers.js";

/**
 * **Account API:** Retrieve account usage, credit balance, rate limits, plan details, and pricing.
 *
 * Use this endpoint to monitor consumption and understand the credit cost of each action type in
 * the public API flow.
 *
 * > **Rate limit:** 5 requests per minute.
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
   * Get Account Usage
   *
   * @remarks
   * Returns a full snapshot of your account status:
   * - **Credits** — total, used, and remaining for the current billing cycle
   * - **Rate limits** — current usage and reset times for daily, hourly, and per-minute windows
   * - **Plan** — your current plan category and renewal dates
   * - **Pricing** — credit cost per action type across all public API endpoints
   *
   * > **Rate limit:** This endpoint is limited to 5 requests per minute.
   *
   * @returns Successfully retrieved account usage
   *
   * @throws {@link Account.GetAccountUsageError} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link LushaError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getAccountUsage(options?: RequestOptions): ApiPromise<AccountUsageResponse, Account.GetAccountUsageError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v3/account/usage"),
        auth: this.#auth.apiKeyAuth,
        pathParams: [],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: accountUsageResponseSchema },
        errorFactory: Account.GetAccountUsageError,
      },
      options,
    );
  }
}

export namespace Account {
  export class GetAccountUsageError extends ApiError {
    declare readonly payload:
      | Declared<"errorResponse", ErrorResponse>
      | Declared<"errorResponse2", ErrorResponse>
      | Declared<"errorResponse3", ErrorResponse>
      | Declared<"errorResponse4", ErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetAccountUsageError> = [
      { on: 401, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 403, kind: "errorResponse2", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 429, kind: "errorResponse3", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 500, kind: "errorResponse4", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }
}
