import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { anyAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import * as s from "../core/validation/index.js";
import { accountType1Schema, type AccountType1 } from "../models/account-type1.js";
import {
  bankingBalancesResponseSchema,
  type BankingBalancesResponse,
} from "../models/banking-balances-response.js";
import { errorSchema, type Error } from "../models/error.js";
import type { Servers } from "../servers.js";

/**
 * Fetch RazorpayX account balances
 */
export class XBankingBalances {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Fetch RazorpayX banking balances
   *
   * @remarks
   * Fetch balance details for RazorpayX current accounts or RazorpayX Lite accounts.
   *
   * @returns Banking balances
   *
   * @throws {@link XBankingBalances.FetchBankingBalancesError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link CurlecError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  fetchBankingBalances(
    request: XBankingBalances.FetchBankingBalancesRequest = {},
    options?: RequestOptions,
  ): ApiPromise<BankingBalancesResponse, XBankingBalances.FetchBankingBalancesError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/banking_balances"),
        auth: anyAuth(
          this.#auth.basicAuth,
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials.forScopes("read_only"),
        ),
        pathParams: [],
        query: [
          {
            name: "account_type",
            value: request.accountType,
            schema: s.optional(s.lazy(() => accountType1Schema)),
          },
          { name: "bank_code", value: request.bankCode, schema: s.optional(s.string()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: bankingBalancesResponseSchema },
        errorFactory: XBankingBalances.FetchBankingBalancesError,
      },
      options,
    );
  }
}

export namespace XBankingBalances {
  export type FetchBankingBalancesRequest = {
    /**
     * Type of RazorpayX account to query. Accepted values: `current_account` or `razorpayx_lite`.
     */
    accountType?: AccountType1;
    /** First 4 characters of IFSC */
    bankCode?: string;
  };

  export class FetchBankingBalancesError extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"error3", Error>
      | Declared<"error4", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<FetchBankingBalancesError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 429, kind: "error3", decode: { kind: "json", schema: errorSchema } },
      { on: 500, kind: "error4", decode: { kind: "json", schema: errorSchema } },
    ];
  }
}
