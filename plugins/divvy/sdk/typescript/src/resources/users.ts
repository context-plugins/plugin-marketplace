import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { noneAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { bdcErrorInternalSchema, type BdcError } from "../models/bdc-error.js";
import {
  createUserRequestDtoInternalSchema,
  type CreateUserRequestDto,
} from "../models/create-user-request-dto.js";
import {
  paginationResponseDtoUserResponseDtoSchema,
  type PaginationResponseDtoUserResponseDto,
} from "../models/pagination-response-dto-user-response-dto.js";
import { updateUserRequestDtoSchema, type UpdateUserRequestDto } from "../models/update-user-request-dto.js";
import { userResponseDtoSchema, type UserResponseDto } from "../models/user-response-dto.js";
import type { Servers } from "../servers.js";

export class Users {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;

  constructor(rawClient: RawClient, servers: Servers) {
    this.#rawClient = rawClient;
    this.#servers = servers;
  }

  /**
   * Create a user
   *
   * @remarks
   * Create a new user.
   *
   * See Budgets and Users in the Guides section for more information, sample requests, and
   * responses.
   *
   * @returns Create a user response
   *
   * @throws {@link Users.CreateUserError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link DivvyError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  createUser(
    request: Users.CreateUserRequest,
    options?: RequestOptions,
  ): ApiPromise<UserResponseDto, Users.CreateUserError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/v3/spend/users"),
        auth: noneAuth,
        pathParams: [],
        query: [],
        headers: [
          { name: "apiToken", value: request.apiToken, schema: s.optionalNullable(s.string()) },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "json", value: request.body, schema: createUserRequestDtoInternalSchema },
      },
      {
        success: { kind: "json", schema: userResponseDtoSchema },
        errorFactory: Users.CreateUserError,
      },
      options,
    );
  }

  /**
   * Delete a user
   *
   * @remarks
   * Delete an existing user.
   *
   * @returns Delete a user response. A deleted user cannot be restored. The deleted user is not
   * available in the list of users.
   *
   * @throws {@link Users.DeleteUserError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link DivvyError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  deleteUser(
    request: Users.DeleteUserRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, Users.DeleteUserError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default("/v3/spend/users/{userId}"),
        auth: noneAuth,
        pathParams: [{ name: "userId", value: request.userId, schema: s.string() }],
        query: [],
        headers: [
          { name: "apiToken", value: request.apiToken, schema: s.optionalNullable(s.string()) },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: Users.DeleteUserError,
      },
      options,
    );
  }

  /**
   * Get current user details
   *
   * @remarks
   * Get details about the current user. This is the user that generated the Spend & Expense API
   * token.
   *
   * @returns Get current user details response
   *
   * @throws {@link Users.GetCurrentUserError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link DivvyError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getCurrentUser(
    request: Users.GetCurrentUserRequest = {},
    options?: RequestOptions,
  ): ApiPromise<UserResponseDto, Users.GetCurrentUserError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v3/spend/users/current"),
        auth: noneAuth,
        pathParams: [],
        query: [],
        headers: [{ name: "apiToken", value: request.apiToken, schema: s.optionalNullable(s.string()) }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: userResponseDtoSchema },
        errorFactory: Users.GetCurrentUserError,
      },
      options,
    );
  }

  /**
   * Get user details
   *
   * @remarks
   * Get details about an existing user.
   *
   * @returns Get user details response
   *
   * @throws {@link Users.GetUserError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link DivvyError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getUser(
    request: Users.GetUserRequest,
    options?: RequestOptions,
  ): ApiPromise<UserResponseDto, Users.GetUserError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v3/spend/users/{userId}"),
        auth: noneAuth,
        pathParams: [{ name: "userId", value: request.userId, schema: s.string() }],
        query: [],
        headers: [{ name: "apiToken", value: request.apiToken, schema: s.optionalNullable(s.string()) }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: userResponseDtoSchema },
        errorFactory: Users.GetUserError,
      },
      options,
    );
  }

  /**
   * Get list of users
   *
   * @remarks
   * Get a list of user objects in the current user's company. By default, you get 20 results on one
   * page of results. Set `max` in your request to get up to 100 results on one page.
   *
   * @returns Get list of users response
   *
   * @throws {@link Users.ListUsersError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link DivvyError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listUsers(
    request: Users.ListUsersRequest = {},
    options?: RequestOptions,
  ): ApiPromise<PaginationResponseDtoUserResponseDto, Users.ListUsersError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v3/spend/users"),
        auth: noneAuth,
        pathParams: [],
        query: [
          { name: "nextPage", value: request.nextPage, schema: s.optionalNullable(s.string()) },
          { name: "prevPage", value: request.prevPage, schema: s.optionalNullable(s.string()) },
          { name: "max", value: request.max, schema: s.optionalNullable(s.int()) },
          { name: "filters", value: request.filters, schema: s.optionalNullable(s.string()) },
        ],
        headers: [{ name: "apiToken", value: request.apiToken, schema: s.optionalNullable(s.string()) }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: paginationResponseDtoUserResponseDtoSchema },
        errorFactory: Users.ListUsersError,
      },
      options,
    );
  }

  /**
   * Update a user
   *
   * @remarks
   * Update details about an existing user.
   *
   * @returns Update a user response
   *
   * @throws {@link Users.UpdateUserError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link DivvyError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  updateUser(
    request: Users.UpdateUserRequest,
    options?: RequestOptions,
  ): ApiPromise<UserResponseDto, Users.UpdateUserError> {
    return this.#rawClient.execute(
      {
        method: "PATCH",
        urlTemplate: this.#servers.default("/v3/spend/users/{userId}"),
        auth: noneAuth,
        pathParams: [{ name: "userId", value: request.userId, schema: s.string() }],
        query: [],
        headers: [
          { name: "apiToken", value: request.apiToken, schema: s.optionalNullable(s.string()) },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "json", value: request.body, schema: updateUserRequestDtoSchema },
      },
      {
        success: { kind: "json", schema: userResponseDtoSchema },
        errorFactory: Users.UpdateUserError,
      },
      options,
    );
  }
}

export namespace Users {
  export type CreateUserRequest = {
    apiToken?: string | null;
    body: CreateUserRequestDto;
  };

  export class CreateUserError extends ApiError {
    declare readonly payload:
      | Declared<"error4XX", BdcError[]>
      | Declared<"error5XX", BdcError[]>
      | Undeclared;

    static readonly errors: ErrorDecoders<CreateUserError> = [
      {
        on: [400, 499],
        kind: "error4XX",
        decode: { kind: "json", schema: s.array(s.lazy(() => bdcErrorInternalSchema)) },
      },
      {
        on: [500, 599],
        kind: "error5XX",
        decode: { kind: "json", schema: s.array(s.lazy(() => bdcErrorInternalSchema)) },
      },
    ];
  }

  export type DeleteUserRequest = {
    userId: string;
    apiToken?: string | null;
  };

  export const deleteUserRequestSchema: Schema<DeleteUserRequest> = s.lazySchema(() =>
    s.object<DeleteUserRequest>({
      userId: s.string().check(s.minLength(1)),
      apiToken: s.optionalNullable(s.string()),
    }),
  );

  export class DeleteUserError extends ApiError {
    declare readonly payload:
      | Declared<"error4XX", BdcError[]>
      | Declared<"error5XX", BdcError[]>
      | Undeclared;

    static readonly errors: ErrorDecoders<DeleteUserError> = [
      {
        on: [400, 499],
        kind: "error4XX",
        decode: { kind: "json", schema: s.array(s.lazy(() => bdcErrorInternalSchema)) },
      },
      {
        on: [500, 599],
        kind: "error5XX",
        decode: { kind: "json", schema: s.array(s.lazy(() => bdcErrorInternalSchema)) },
      },
    ];
  }

  export type GetCurrentUserRequest = {
    apiToken?: string | null;
  };

  export class GetCurrentUserError extends ApiError {
    declare readonly payload:
      | Declared<"error4XX", BdcError[]>
      | Declared<"error5XX", BdcError[]>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetCurrentUserError> = [
      {
        on: [400, 499],
        kind: "error4XX",
        decode: { kind: "json", schema: s.array(s.lazy(() => bdcErrorInternalSchema)) },
      },
      {
        on: [500, 599],
        kind: "error5XX",
        decode: { kind: "json", schema: s.array(s.lazy(() => bdcErrorInternalSchema)) },
      },
    ];
  }

  export type GetUserRequest = {
    userId: string;
    apiToken?: string | null;
  };

  export const getUserRequestSchema: Schema<GetUserRequest> = s.lazySchema(() =>
    s.object<GetUserRequest>({
      userId: s.string().check(s.minLength(1)),
      apiToken: s.optionalNullable(s.string()),
    }),
  );

  export class GetUserError extends ApiError {
    declare readonly payload:
      | Declared<"error4XX", BdcError[]>
      | Declared<"error5XX", BdcError[]>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetUserError> = [
      {
        on: [400, 499],
        kind: "error4XX",
        decode: { kind: "json", schema: s.array(s.lazy(() => bdcErrorInternalSchema)) },
      },
      {
        on: [500, 599],
        kind: "error5XX",
        decode: { kind: "json", schema: s.array(s.lazy(() => bdcErrorInternalSchema)) },
      },
    ];
  }

  export type ListUsersRequest = {
    nextPage?: string | null;
    prevPage?: string | null;
    max?: number | null;
    filters?: string | null;
    apiToken?: string | null;
  };

  export const listUsersRequestSchema: Schema<ListUsersRequest> = s.lazySchema(() =>
    s.object<ListUsersRequest>({
      nextPage: s.optionalNullable(s.string()),
      prevPage: s.optionalNullable(s.string()),
      max: s.optionalNullable(s.int().check(s.gte(1), s.lte(100))),
      filters: s.optionalNullable(s.string()),
      apiToken: s.optionalNullable(s.string()),
    }),
  );

  export class ListUsersError extends ApiError {
    declare readonly payload:
      | Declared<"error4XX", BdcError[]>
      | Declared<"error5XX", BdcError[]>
      | Undeclared;

    static readonly errors: ErrorDecoders<ListUsersError> = [
      {
        on: [400, 499],
        kind: "error4XX",
        decode: { kind: "json", schema: s.array(s.lazy(() => bdcErrorInternalSchema)) },
      },
      {
        on: [500, 599],
        kind: "error5XX",
        decode: { kind: "json", schema: s.array(s.lazy(() => bdcErrorInternalSchema)) },
      },
    ];
  }

  export type UpdateUserRequest = {
    userId: string;
    apiToken?: string | null;
    body: UpdateUserRequestDto;
  };

  export const updateUserRequestSchema: Schema<UpdateUserRequest> = s.lazySchema(() =>
    s.object<UpdateUserRequest>({
      userId: s.string().check(s.minLength(1)),
      apiToken: s.optionalNullable(s.string()),
      body: updateUserRequestDtoSchema,
    }),
  );

  export class UpdateUserError extends ApiError {
    declare readonly payload:
      | Declared<"error4XX", BdcError[]>
      | Declared<"error5XX", BdcError[]>
      | Undeclared;

    static readonly errors: ErrorDecoders<UpdateUserError> = [
      {
        on: [400, 499],
        kind: "error4XX",
        decode: { kind: "json", schema: s.array(s.lazy(() => bdcErrorInternalSchema)) },
      },
      {
        on: [500, 599],
        kind: "error5XX",
        decode: { kind: "json", schema: s.array(s.lazy(() => bdcErrorInternalSchema)) },
      },
    ];
  }
}
