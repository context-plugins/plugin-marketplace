import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import {
  accountUsageStatsResponseSchema,
  type AccountUsageStatsResponse,
} from "../models/account-usage-stats-response.js";
import { errorResponseSchema, type ErrorResponse } from "../models/error-response.js";
import type { Servers } from "../servers.js";

/**
 * Manage your account and monitor usage.
 *
 * Use this endpoint to:
 * - Monitor credit usage
 * - Understand consumption patterns
 * - Align API usage with plan limits
 * - Support governance and production operations
 *
 * Account-level insights are especially important for teams running Lusha at scale or across
 * multiple systems.
 */
export class AccountManagement {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Get Account Usage Statistics
   *
   * @remarks
   * Retrieve your current API credit usage statistics including used, remaining, and total credits.
   *
   * *Endpoint*: **(GET) https://api.lusha.com/account/usage**
   *
   * **Rate Limits**: This endpoint has a specific rate limit of 5 requests per minute.
   *
   * @returns Account usage statistics retrieved successfully
   *
   * @throws {@link AccountManagement.GetAccountUsageStatsError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link LushaError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getAccountUsageStats(
    options?: RequestOptions,
  ): ApiPromise<AccountUsageStatsResponse, AccountManagement.GetAccountUsageStatsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/account/usage"),
        auth: this.#auth.apiKeyAuth,
        pathParams: [],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: accountUsageStatsResponseSchema },
        errorFactory: AccountManagement.GetAccountUsageStatsError,
      },
      options,
    );
  }
}

export namespace AccountManagement {
  export class GetAccountUsageStatsError extends ApiError {
    declare readonly payload:
      | Declared<"errorResponse", ErrorResponse>
      | Declared<"errorResponse2", ErrorResponse>
      | Declared<"errorResponse3", ErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetAccountUsageStatsError> = [
      { on: 401, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 429, kind: "errorResponse2", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 500, kind: "errorResponse3", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }
}
