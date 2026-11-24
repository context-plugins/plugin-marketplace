import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import {
  accountUsageResponseInternalSchema,
  type AccountUsageResponse,
} from "../models/account-usage-response.js";
import { apiErrorModelInternalSchema, type ApiErrorModel } from "../models/api-error-model.js";
import type { Servers } from "../servers.js";

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
   * Get account quota and purchased-credit usage
   *
   * @remarks
   * Returns the authenticated account's monthly allowance, current usage, billing period, rate
   * limit, purchased-credit balance, and total available requests.
   *
   * @returns Current account usage and credit balance.
   *
   * @throws {@link Account.GetAccountUsageError} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link CompSniperError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getAccountUsage(options?: RequestOptions): ApiPromise<AccountUsageResponse, Account.GetAccountUsageError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v1/account/usage"),
        auth: this.#auth.bearerAuth,
        pathParams: [],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: accountUsageResponseInternalSchema },
        errorFactory: Account.GetAccountUsageError,
      },
      options,
    );
  }
}

export namespace Account {
  export class GetAccountUsageError extends ApiError {
    declare readonly payload:
      | Declared<"apiErrorModel", ApiErrorModel>
      | Declared<"apiErrorModel2", ApiErrorModel>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetAccountUsageError> = [
      { on: 401, kind: "apiErrorModel", decode: { kind: "json", schema: apiErrorModelInternalSchema } },
      { on: 403, kind: "apiErrorModel2", decode: { kind: "json", schema: apiErrorModelInternalSchema } },
    ];
  }
}
