import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import { expensesResponseSchema, type ExpensesResponse } from "../models/expenses-response.js";
import { usersExpensesRequestSchema, type UsersExpensesRequest } from "../models/users-expenses-request.js";
import {
  usersExpenses400Error1Schema,
  type UsersExpenses400Error1,
} from "../models/users-expenses400-error1.js";
import {
  usersExpenses403Error1Schema,
  type UsersExpenses403Error1,
} from "../models/users-expenses403-error1.js";
import {
  usersExpenses404Error1Schema,
  type UsersExpenses404Error1,
} from "../models/users-expenses404-error1.js";
import {
  usersExpenses500Error1Schema,
  type UsersExpenses500Error1,
} from "../models/users-expenses500-error1.js";
import type { Servers } from "../servers.js";

export class Expenses {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Retrieve an expense summary
   *
   * @remarks
   * Retrieve an existing expense summary for a specific user
   *
   * @returns Returns a saved expenses resource, if the operation succeeded.
   *
   * @throws {@link Expenses.GetExpensesError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link BasiqError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   *
   * @deprecated
   */
  getExpenses(
    request: Expenses.GetExpensesRequest,
    options?: RequestOptions,
  ): ApiPromise<ExpensesResponse, Expenses.GetExpensesError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/users/{userId}/expenses/{snapshotId}"),
        auth: this.#auth.servicesToken,
        pathParams: [
          { name: "userId", value: request.userId, schema: s.string() },
          { name: "snapshotId", value: request.snapshotId, schema: s.string() },
        ],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: expensesResponseSchema },
        errorFactory: Expenses.GetExpensesError,
      },
      options,
    );
  }

  /**
   * Create an expense summary
   *
   * @remarks
   * Create a new expense summary for a user
   *
   * @returns Returns a created expenses resource, if the operation succeeded.
   *
   * @throws {@link Expenses.PostExpensesError} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link BasiqError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   *
   * @deprecated
   */
  postExpenses(
    request: Expenses.PostExpensesRequest,
    options?: RequestOptions,
  ): ApiPromise<ExpensesResponse, Expenses.PostExpensesError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/users/{userId}/expenses"),
        auth: this.#auth.servicesToken,
        pathParams: [{ name: "userId", value: request.userId, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => usersExpensesRequestSchema)),
        },
      },
      {
        success: { kind: "json", schema: expensesResponseSchema },
        errorFactory: Expenses.PostExpensesError,
      },
      options,
    );
  }
}

export namespace Expenses {
  export type GetExpensesRequest = {
    /** The identifier of the user. */
    userId: string;
    /** The identifier of the expense summary to be retrieved. */
    snapshotId: string;
  };

  export class GetExpensesError extends ApiError {
    declare readonly payload:
      | Declared<"usersExpenses400Error1", UsersExpenses400Error1>
      | Declared<"usersExpenses403Error1", UsersExpenses403Error1>
      | Declared<"usersExpenses404Error1", UsersExpenses404Error1>
      | Declared<"usersExpenses500Error1", UsersExpenses500Error1>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetExpensesError> = [
      {
        on: 400,
        kind: "usersExpenses400Error1",
        decode: { kind: "json", schema: usersExpenses400Error1Schema },
      },
      {
        on: 403,
        kind: "usersExpenses403Error1",
        decode: { kind: "json", schema: usersExpenses403Error1Schema },
      },
      {
        on: 404,
        kind: "usersExpenses404Error1",
        decode: { kind: "json", schema: usersExpenses404Error1Schema },
      },
      {
        on: 500,
        kind: "usersExpenses500Error1",
        decode: { kind: "json", schema: usersExpenses500Error1Schema },
      },
    ];
  }

  export type PostExpensesRequest = {
    /** The identifier of the user. */
    userId: string;
    body?: UsersExpensesRequest;
  };

  export class PostExpensesError extends ApiError {
    declare readonly payload:
      | Declared<"usersExpenses400Error1", UsersExpenses400Error1>
      | Declared<"usersExpenses403Error1", UsersExpenses403Error1>
      | Declared<"usersExpenses404Error1", UsersExpenses404Error1>
      | Declared<"usersExpenses500Error1", UsersExpenses500Error1>
      | Undeclared;

    static readonly errors: ErrorDecoders<PostExpensesError> = [
      {
        on: 400,
        kind: "usersExpenses400Error1",
        decode: { kind: "json", schema: usersExpenses400Error1Schema },
      },
      {
        on: 403,
        kind: "usersExpenses403Error1",
        decode: { kind: "json", schema: usersExpenses403Error1Schema },
      },
      {
        on: 404,
        kind: "usersExpenses404Error1",
        decode: { kind: "json", schema: usersExpenses404Error1Schema },
      },
      {
        on: 500,
        kind: "usersExpenses500Error1",
        decode: { kind: "json", schema: usersExpenses500Error1Schema },
      },
    ];
  }
}
