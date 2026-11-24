import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import { incomeResponseSchema, type IncomeResponse } from "../models/income-response.js";
import { usersIncomeRequestSchema, type UsersIncomeRequest } from "../models/users-income-request.js";
import { usersIncome400Error1Schema, type UsersIncome400Error1 } from "../models/users-income400-error1.js";
import { usersIncome403Error1Schema, type UsersIncome403Error1 } from "../models/users-income403-error1.js";
import { usersIncome404Error1Schema, type UsersIncome404Error1 } from "../models/users-income404-error1.js";
import { usersIncome500Error1Schema, type UsersIncome500Error1 } from "../models/users-income500-error1.js";
import type { Servers } from "../servers.js";

export class IncomeApi {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Retrieve an income summary
   *
   * @remarks
   * Retrieve an existing income summary for a specific user
   *
   * @returns Returns a saved income resource, if the operation succeeded.
   *
   * @throws {@link IncomeApi.GetIncomeError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link BasiqError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   *
   * @deprecated
   */
  getIncome(
    request: IncomeApi.GetIncomeRequest,
    options?: RequestOptions,
  ): ApiPromise<IncomeResponse, IncomeApi.GetIncomeError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/users/{userId}/income/{snapshotId}"),
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
        success: { kind: "json", schema: incomeResponseSchema },
        errorFactory: IncomeApi.GetIncomeError,
      },
      options,
    );
  }

  /**
   * Create an income summary
   *
   * @remarks
   * Create an income summary for a specific user
   *
   * @returns Returns a created income resource, if the operation succeeded.
   *
   * @throws {@link IncomeApi.PostIncomeError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link BasiqError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   *
   * @deprecated
   */
  postIncome(
    request: IncomeApi.PostIncomeRequest,
    options?: RequestOptions,
  ): ApiPromise<IncomeResponse, IncomeApi.PostIncomeError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/users/{userId}/income"),
        auth: this.#auth.servicesToken,
        pathParams: [{ name: "userId", value: request.userId, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => usersIncomeRequestSchema)),
        },
      },
      {
        success: { kind: "json", schema: incomeResponseSchema },
        errorFactory: IncomeApi.PostIncomeError,
      },
      options,
    );
  }
}

export namespace IncomeApi {
  export type GetIncomeRequest = {
    /** The identifier of the user. */
    userId: string;
    /** The identifier of the income summary to be retrieved. */
    snapshotId: string;
  };

  export class GetIncomeError extends ApiError {
    declare readonly payload:
      | Declared<"usersIncome400Error1", UsersIncome400Error1>
      | Declared<"usersIncome403Error1", UsersIncome403Error1>
      | Declared<"usersIncome404Error1", UsersIncome404Error1>
      | Declared<"usersIncome500Error1", UsersIncome500Error1>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetIncomeError> = [
      { on: 400, kind: "usersIncome400Error1", decode: { kind: "json", schema: usersIncome400Error1Schema } },
      { on: 403, kind: "usersIncome403Error1", decode: { kind: "json", schema: usersIncome403Error1Schema } },
      { on: 404, kind: "usersIncome404Error1", decode: { kind: "json", schema: usersIncome404Error1Schema } },
      { on: 500, kind: "usersIncome500Error1", decode: { kind: "json", schema: usersIncome500Error1Schema } },
    ];
  }

  export type PostIncomeRequest = {
    /** The identifier of the user. */
    userId: string;
    body?: UsersIncomeRequest;
  };

  export class PostIncomeError extends ApiError {
    declare readonly payload:
      | Declared<"usersIncome400Error1", UsersIncome400Error1>
      | Declared<"usersIncome403Error1", UsersIncome403Error1>
      | Declared<"usersIncome404Error1", UsersIncome404Error1>
      | Declared<"usersIncome500Error1", UsersIncome500Error1>
      | Undeclared;

    static readonly errors: ErrorDecoders<PostIncomeError> = [
      { on: 400, kind: "usersIncome400Error1", decode: { kind: "json", schema: usersIncome400Error1Schema } },
      { on: 403, kind: "usersIncome403Error1", decode: { kind: "json", schema: usersIncome403Error1Schema } },
      { on: 404, kind: "usersIncome404Error1", decode: { kind: "json", schema: usersIncome404Error1Schema } },
      { on: 500, kind: "usersIncome500Error1", decode: { kind: "json", schema: usersIncome500Error1Schema } },
    ];
  }
}
