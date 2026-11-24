import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { apiV1BalanceResponseSchema, type ApiV1BalanceResponse } from "../models/api-v1-balance-response.js";
import {
  apiV1Balance403Error1Schema,
  type ApiV1Balance403Error1,
} from "../models/api-v1-balance403-error1.js";
import type { Servers } from "../servers.js";

export class AccountBalance {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Get account balance
   *
   * @remarks
   * Retrieve the current account balance for the authenticated user.
   *
   * **Balance Representation:**
   * - Returns balance in account currency (typically USD)
   * - Value is rounded to 2 decimal places
   * - Supports both JSON and plain text formats
   *
   * @returns Successfully returns account balance in JSON format with 2 decimal places
   *
   * @throws {@link AccountBalance.BalanceShowError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link DidLogicError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  balanceShow(options?: RequestOptions): ApiPromise<ApiV1BalanceResponse, AccountBalance.BalanceShowError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/v1/balance"),
        auth: this.#auth.bearerAuth,
        pathParams: [],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: apiV1BalanceResponseSchema },
        errorFactory: AccountBalance.BalanceShowError,
      },
      options,
    );
  }
}

export namespace AccountBalance {
  export class BalanceShowError extends ApiError {
    declare readonly payload: Declared<"apiV1Balance403Error1", ApiV1Balance403Error1> | Undeclared;

    static readonly errors: ErrorDecoders<BalanceShowError> = [
      {
        on: 403,
        kind: "apiV1Balance403Error1",
        decode: { kind: "json", schema: apiV1Balance403Error1Schema },
      },
    ];
  }
}
