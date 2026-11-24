import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import * as s from "../core/validation/index.js";
import {
  accountResponseResource1Schema,
  type AccountResponseResource1,
} from "../models/account-response-resource1.js";
import {
  usersAccountsResponseSchema,
  type UsersAccountsResponse,
} from "../models/users-accounts-response.js";
import {
  usersAccounts400Error1Schema,
  type UsersAccounts400Error1,
} from "../models/users-accounts400-error1.js";
import {
  usersAccounts403Error1Schema,
  type UsersAccounts403Error1,
} from "../models/users-accounts403-error1.js";
import {
  usersAccounts404Error1Schema,
  type UsersAccounts404Error1,
} from "../models/users-accounts404-error1.js";
import {
  usersAccounts500Error1Schema,
  type UsersAccounts500Error1,
} from "../models/users-accounts500-error1.js";
import type { Servers } from "../servers.js";

export class AccountsApi {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Retrieve an account
   *
   * @remarks
   * Retrieve a specific account belonging to a user
   *
   * @returns Returns a account with details.
   *
   * @throws {@link AccountsApi.GetAccountError} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link BasiqError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getAccount(
    request: AccountsApi.GetAccountRequest,
    options?: RequestOptions,
  ): ApiPromise<AccountResponseResource1, AccountsApi.GetAccountError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/users/{userId}/accounts/{accountId}"),
        auth: this.#auth.servicesToken,
        pathParams: [
          { name: "userId", value: request.userId, schema: s.string() },
          { name: "accountId", value: request.accountId, schema: s.string() },
        ],
        query: [{ name: "filter", value: request.filter, schema: s.optional(s.string()) }],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: accountResponseResource1Schema },
        errorFactory: AccountsApi.GetAccountError,
      },
      options,
    );
  }

  /**
   * List all accounts
   *
   * @remarks
   * List all accounts belonging to a user
   *
   * @returns Returns a account with details.
   *
   * @throws {@link AccountsApi.GetAccountsError} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link BasiqError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getAccounts(
    request: AccountsApi.GetAccountsRequest,
    options?: RequestOptions,
  ): ApiPromise<UsersAccountsResponse, AccountsApi.GetAccountsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/users/{userId}/accounts"),
        auth: this.#auth.servicesToken,
        pathParams: [{ name: "userId", value: request.userId, schema: s.string() }],
        query: [{ name: "filter", value: request.filter, schema: s.optional(s.string()) }],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: usersAccountsResponseSchema },
        errorFactory: AccountsApi.GetAccountsError,
      },
      options,
    );
  }
}

export namespace AccountsApi {
  export type GetAccountRequest = {
    /** User identifier */
    userId: string;
    /** Account identifier */
    accountId: string;
    /**
     * Account filters; account.id, connection.id, institution.id, Only equals (eq) operation is
     * currently supported.
     */
    filter?: string;
  };

  export class GetAccountError extends ApiError {
    declare readonly payload:
      | Declared<"usersAccounts400Error1", UsersAccounts400Error1>
      | Declared<"usersAccounts403Error1", UsersAccounts403Error1>
      | Declared<"usersAccounts404Error1", UsersAccounts404Error1>
      | Declared<"usersAccounts500Error1", UsersAccounts500Error1>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetAccountError> = [
      {
        on: 400,
        kind: "usersAccounts400Error1",
        decode: { kind: "json", schema: usersAccounts400Error1Schema },
      },
      {
        on: 403,
        kind: "usersAccounts403Error1",
        decode: { kind: "json", schema: usersAccounts403Error1Schema },
      },
      {
        on: 404,
        kind: "usersAccounts404Error1",
        decode: { kind: "json", schema: usersAccounts404Error1Schema },
      },
      {
        on: 500,
        kind: "usersAccounts500Error1",
        decode: { kind: "json", schema: usersAccounts500Error1Schema },
      },
    ];
  }

  export type GetAccountsRequest = {
    /** User identifier */
    userId: string;
    /**
     * Account filters: account.id, connection.id, institution.id. Only the equals (eq) operation is
     * currently supported.
     */
    filter?: string;
  };

  export class GetAccountsError extends ApiError {
    declare readonly payload:
      | Declared<"usersAccounts400Error1", UsersAccounts400Error1>
      | Declared<"usersAccounts403Error1", UsersAccounts403Error1>
      | Declared<"usersAccounts404Error1", UsersAccounts404Error1>
      | Declared<"usersAccounts500Error1", UsersAccounts500Error1>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetAccountsError> = [
      {
        on: 400,
        kind: "usersAccounts400Error1",
        decode: { kind: "json", schema: usersAccounts400Error1Schema },
      },
      {
        on: 403,
        kind: "usersAccounts403Error1",
        decode: { kind: "json", schema: usersAccounts403Error1Schema },
      },
      {
        on: 404,
        kind: "usersAccounts404Error1",
        decode: { kind: "json", schema: usersAccounts404Error1Schema },
      },
      {
        on: 500,
        kind: "usersAccounts500Error1",
        decode: { kind: "json", schema: usersAccounts500Error1Schema },
      },
    ];
  }
}
