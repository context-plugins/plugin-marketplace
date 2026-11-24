import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { anyAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import * as s from "../core/validation/index.js";
import { accountCollectionSchema, type AccountCollection } from "../models/account-collection.js";
import { accountSchema, type Account } from "../models/account.js";
import {
  accountsSubAccountsResponseSchema,
  type AccountsSubAccountsResponse,
} from "../models/accounts-sub-accounts-response.js";
import { errorSchema, type Error } from "../models/error.js";
import { subAccountSchema, type SubAccount } from "../models/sub-account.js";
import type { Servers } from "../servers.js";

/**
 * Account and sub-account resources
 */
export class Accounts {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Retrieve a single account
   *
   * @returns Account
   *
   * @throws {@link Accounts.GetAccountError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link UnbounceError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getAccount(
    request: Accounts.GetAccountRequest,
    options?: RequestOptions,
  ): ApiPromise<Account, Accounts.GetAccountError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/accounts/{account_id}"),
        auth: anyAuth(this.#auth.apiKeyAuth, this.#auth.oauth2),
        pathParams: [{ name: "account_id", value: request.accountId, schema: s.string() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: accountSchema },
        errorFactory: Accounts.GetAccountError,
      },
      options,
    );
  }

  /**
   * Retrieve a sub-account
   *
   * @returns Sub-account
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link UnbounceError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getSubAccount(
    request: Accounts.GetSubAccountRequest,
    options?: RequestOptions,
  ): ApiPromise<SubAccount, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/sub_accounts/{sub_account_id}"),
        auth: anyAuth(this.#auth.apiKeyAuth, this.#auth.oauth2),
        pathParams: [{ name: "sub_account_id", value: request.subAccountId, schema: s.string() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: subAccountSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * List accounts
   *
   * @returns Account collection
   *
   * @throws {@link Accounts.ListAccountsError} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link UnbounceError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listAccounts(options?: RequestOptions): ApiPromise<AccountCollection, Accounts.ListAccountsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/accounts"),
        auth: anyAuth(this.#auth.apiKeyAuth, this.#auth.oauth2),
        pathParams: [],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: accountCollectionSchema },
        errorFactory: Accounts.ListAccountsError,
      },
      options,
    );
  }

  /**
   * List sub-accounts for an account
   *
   * @returns Sub-account collection
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link UnbounceError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listSubAccountsForAccount(
    request: Accounts.ListSubAccountsForAccountRequest,
    options?: RequestOptions,
  ): ApiPromise<AccountsSubAccountsResponse, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/accounts/{account_id}/sub_accounts"),
        auth: anyAuth(this.#auth.apiKeyAuth, this.#auth.oauth2),
        pathParams: [{ name: "account_id", value: request.accountId, schema: s.string() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: accountsSubAccountsResponseSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }
}

export namespace Accounts {
  export type GetAccountRequest = {
    accountId: string;
  };

  export class GetAccountError extends ApiError {
    declare readonly payload: Declared<"error", Error> | Undeclared;

    static readonly errors: ErrorDecoders<GetAccountError> = [
      { on: 404, kind: "error", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type GetSubAccountRequest = {
    subAccountId: string;
  };

  export class ListAccountsError extends ApiError {
    declare readonly payload: Declared<"error", Error> | Undeclared;

    static readonly errors: ErrorDecoders<ListAccountsError> = [
      { on: 401, kind: "error", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type ListSubAccountsForAccountRequest = {
    accountId: string;
  };
}
