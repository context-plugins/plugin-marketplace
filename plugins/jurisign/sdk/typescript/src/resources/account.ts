import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import {
  accountCreditsResponseSchema,
  type AccountCreditsResponse,
} from "../models/account-credits-response.js";
import { unauthenticated1Schema, type Unauthenticated1 } from "../models/unauthenticated1.js";
import type { Servers } from "../servers.js";

/**
 * Credit balance and plan
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
   * Get Credit Balance
   *
   * @remarks
   * Retrieve your organization's real-time signature credit consumption. Scoped strictly to the
   * organization of the authenticated token.
   *
   * @returns Credit balance
   *
   * @throws {@link Account.GetAccountCreditsError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link JuriSignError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getAccountCredits(
    options?: RequestOptions,
  ): ApiPromise<AccountCreditsResponse, Account.GetAccountCreditsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/account/credits"),
        auth: this.#auth.bearerAuth,
        pathParams: [],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: accountCreditsResponseSchema },
        errorFactory: Account.GetAccountCreditsError,
      },
      options,
    );
  }
}

export namespace Account {
  export class GetAccountCreditsError extends ApiError {
    declare readonly payload: Declared<"unauthenticated1", Unauthenticated1> | Undeclared;

    static readonly errors: ErrorDecoders<GetAccountCreditsError> = [
      { on: 401, kind: "unauthenticated1", decode: { kind: "json", schema: unauthenticated1Schema } },
    ];
  }
}
