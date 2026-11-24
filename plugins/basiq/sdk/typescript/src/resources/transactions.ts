import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import * as s from "../core/validation/index.js";
import {
  transactionsContainerObjectConnectTransactionsApiSchema,
  type TransactionsContainerObjectConnectTransactionsApi,
} from "../models/transactions-container-object-connect-transactions-api.js";
import {
  usersTransactionsResponseSchema,
  type UsersTransactionsResponse,
} from "../models/users-transactions-response.js";
import {
  usersTransactions400Error1Schema,
  type UsersTransactions400Error1,
} from "../models/users-transactions400-error1.js";
import {
  usersTransactions403Error1Schema,
  type UsersTransactions403Error1,
} from "../models/users-transactions403-error1.js";
import {
  usersTransactions404Error1Schema,
  type UsersTransactions404Error1,
} from "../models/users-transactions404-error1.js";
import {
  usersTransactions500Error1Schema,
  type UsersTransactions500Error1,
} from "../models/users-transactions500-error1.js";
import {
  usersTransactions503Error1Schema,
  type UsersTransactions503Error1,
} from "../models/users-transactions503-error1.js";
import type { Servers } from "../servers.js";

export class Transactions {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Retrieve a transaction
   *
   * @remarks
   * Retrieve an existing transaction
   *
   * @returns Returns a transaction if a valid transaction ID was provided.
   *
   * @throws {@link Transactions.GetTransactionError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link BasiqError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getTransaction(
    request: Transactions.GetTransactionRequest,
    options?: RequestOptions,
  ): ApiPromise<UsersTransactionsResponse, Transactions.GetTransactionError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/users/{userId}/transactions/{transactionId}"),
        auth: this.#auth.servicesToken,
        pathParams: [
          { name: "userId", value: request.userId, schema: s.string() },
          { name: "transactionId", value: request.transactionId, schema: s.string() },
        ],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: usersTransactionsResponseSchema },
        errorFactory: Transactions.GetTransactionError,
      },
      options,
    );
  }

  /**
   * List all transactions
   *
   * @remarks
   * List all transactions belonging to a specified user
   *
   * @returns Returns a paginated list with a data property that contains an array of transactions.
   * Each entry in the array is a separate object. If no data is returned, the resulting array will
   * be empty.
   *
   * @throws {@link Transactions.GetTransactionsError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link BasiqError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getTransactions(
    request: Transactions.GetTransactionsRequest,
    options?: RequestOptions,
  ): ApiPromise<TransactionsContainerObjectConnectTransactionsApi, Transactions.GetTransactionsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/users/{userId}/transactions"),
        auth: this.#auth.servicesToken,
        pathParams: [{ name: "userId", value: request.userId, schema: s.string() }],
        query: [
          { name: "limit", value: request.limit, schema: s.defaulted(s.int(), 500) },
          { name: "filter", value: request.filter, schema: s.optional(s.string()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: transactionsContainerObjectConnectTransactionsApiSchema },
        errorFactory: Transactions.GetTransactionsError,
      },
      options,
    );
  }
}

export namespace Transactions {
  export type GetTransactionRequest = {
    /** The identifier of the user. */
    userId: string;
    /** The identifier of the transaction. */
    transactionId: string;
  };

  export class GetTransactionError extends ApiError {
    declare readonly payload:
      | Declared<"usersTransactions400Error1", UsersTransactions400Error1>
      | Declared<"usersTransactions403Error1", UsersTransactions403Error1>
      | Declared<"usersTransactions404Error1", UsersTransactions404Error1>
      | Declared<"usersTransactions500Error1", UsersTransactions500Error1>
      | Declared<"usersTransactions503Error1", UsersTransactions503Error1>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetTransactionError> = [
      {
        on: 400,
        kind: "usersTransactions400Error1",
        decode: { kind: "json", schema: usersTransactions400Error1Schema },
      },
      {
        on: 403,
        kind: "usersTransactions403Error1",
        decode: { kind: "json", schema: usersTransactions403Error1Schema },
      },
      {
        on: 404,
        kind: "usersTransactions404Error1",
        decode: { kind: "json", schema: usersTransactions404Error1Schema },
      },
      {
        on: 500,
        kind: "usersTransactions500Error1",
        decode: { kind: "json", schema: usersTransactions500Error1Schema },
      },
      {
        on: 503,
        kind: "usersTransactions503Error1",
        decode: { kind: "json", schema: usersTransactions503Error1Schema },
      },
    ];
  }

  export type GetTransactionsRequest = {
    /** User identifier. */
    userId: string;
    /**
     * This represents the maximum number of items that may be included in the response (maximum of
     * 500). Note that by default 500 items are returned if this value is not specified.
     *
     * @default 500
     */
    limit?: number;
    /**
     * Transaction filters; connection.id, account.id, transaction.postDate, transaction.status,
     * institution.id, transaction.direction, transaction.class
     */
    filter?: string;
  };

  export class GetTransactionsError extends ApiError {
    declare readonly payload:
      | Declared<"usersTransactions400Error1", UsersTransactions400Error1>
      | Declared<"usersTransactions403Error1", UsersTransactions403Error1>
      | Declared<"usersTransactions404Error1", UsersTransactions404Error1>
      | Declared<"usersTransactions500Error1", UsersTransactions500Error1>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetTransactionsError> = [
      {
        on: 400,
        kind: "usersTransactions400Error1",
        decode: { kind: "json", schema: usersTransactions400Error1Schema },
      },
      {
        on: 403,
        kind: "usersTransactions403Error1",
        decode: { kind: "json", schema: usersTransactions403Error1Schema },
      },
      {
        on: 404,
        kind: "usersTransactions404Error1",
        decode: { kind: "json", schema: usersTransactions404Error1Schema },
      },
      {
        on: 500,
        kind: "usersTransactions500Error1",
        decode: { kind: "json", schema: usersTransactions500Error1Schema },
      },
    ];
  }
}
