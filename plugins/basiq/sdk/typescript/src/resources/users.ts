import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import { userGetResponseInternalSchema, type UserGetResponse } from "../models/user-get-response.js";
import { userPostResponseInternalSchema, type UserPostResponse } from "../models/user-post-response.js";
import { usersRequestSchema, type UsersRequest } from "../models/users-request.js";
import { usersRequest1Schema, type UsersRequest1 } from "../models/users-request1.js";
import { users400Error1Schema, type Users400Error1 } from "../models/users400-error1.js";
import { users401Error1Schema, type Users401Error1 } from "../models/users401-error1.js";
import { users403Error1Schema, type Users403Error1 } from "../models/users403-error1.js";
import { users404Error1Schema, type Users404Error1 } from "../models/users404-error1.js";
import { users500Error1Schema, type Users500Error1 } from "../models/users500-error1.js";
import { users503Error1Schema, type Users503Error1 } from "../models/users503-error1.js";
import type { Servers } from "../servers.js";

export class Users {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Create a user
   *
   * @remarks
   * Creates a new Basiq user object
   *
   * @returns Returns the user object if the creation succeeded.
   *
   * @throws {@link Users.CreateUserError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link BasiqError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  createUser(
    request: Users.CreateUserRequest,
    options?: RequestOptions,
  ): ApiPromise<UserPostResponse, Users.CreateUserError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/users"),
        auth: this.#auth.servicesToken,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: usersRequestSchema },
      },
      {
        success: { kind: "json", schema: userPostResponseInternalSchema },
        errorFactory: Users.CreateUserError,
      },
      options,
    );
  }

  /**
   * Delete a user
   *
   * @remarks
   * Permanently deletes a user along with all of their associated connection details. All data
   * associated with this user will deleted. You need only supply the unique user identifier that
   * was returned upon user creation.
   *
   * @returns Deletion succeeded.
   *
   * @throws {@link Users.DeleteUserError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link BasiqError} when no usable response was produced: a connection failure, a
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
        urlTemplate: this.#servers.default("/users/{userId}"),
        auth: this.#auth.servicesToken,
        pathParams: [{ name: "userId", value: request.userId, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
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
   * Retrieve a user
   *
   * @remarks
   * Retrieves the details of an existing user. You need only supply the unique user identifier that
   * was returned upon user creation.
   *
   * @returns Returns a user if a valid user ID was provided.
   *
   * @throws {@link Users.GetUserError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link BasiqError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getUser(
    request: Users.GetUserRequest,
    options?: RequestOptions,
  ): ApiPromise<UserGetResponse, Users.GetUserError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/users/{userId}"),
        auth: this.#auth.servicesToken,
        pathParams: [{ name: "userId", value: request.userId, schema: s.string() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: userGetResponseInternalSchema },
        errorFactory: Users.GetUserError,
      },
      options,
    );
  }

  /**
   * Update a user
   *
   * @remarks
   * Updates the specified user by setting the values of the parameters passed. Any parameters not
   * provided will be left unchanged.
   *
   * @returns Returns the user object if the update succeeded.
   *
   * @throws {@link Users.UpdateUserError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link BasiqError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  updateUser(
    request: Users.UpdateUserRequest,
    options?: RequestOptions,
  ): ApiPromise<UserPostResponse, Users.UpdateUserError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/users/{userId}"),
        auth: this.#auth.servicesToken,
        pathParams: [{ name: "userId", value: request.userId, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: usersRequest1Schema },
      },
      {
        success: { kind: "json", schema: userPostResponseInternalSchema },
        errorFactory: Users.UpdateUserError,
      },
      options,
    );
  }
}

export namespace Users {
  export type CreateUserRequest = {
    body: UsersRequest;
  };

  export class CreateUserError extends ApiError {
    declare readonly payload:
      | Declared<"users400Error1", Users400Error1>
      | Declared<"users401Error1", Users401Error1>
      | Declared<"users403Error1", Users403Error1>
      | Declared<"users404Error1", Users404Error1>
      | Declared<"users500Error1", Users500Error1>
      | Undeclared;

    static readonly errors: ErrorDecoders<CreateUserError> = [
      { on: 400, kind: "users400Error1", decode: { kind: "json", schema: users400Error1Schema } },
      { on: 401, kind: "users401Error1", decode: { kind: "json", schema: users401Error1Schema } },
      { on: 403, kind: "users403Error1", decode: { kind: "json", schema: users403Error1Schema } },
      { on: 404, kind: "users404Error1", decode: { kind: "json", schema: users404Error1Schema } },
      { on: 500, kind: "users500Error1", decode: { kind: "json", schema: users500Error1Schema } },
    ];
  }

  export type DeleteUserRequest = {
    /** User identification. */
    userId: string;
  };

  export class DeleteUserError extends ApiError {
    declare readonly payload:
      | Declared<"users400Error1", Users400Error1>
      | Declared<"users401Error1", Users401Error1>
      | Declared<"users403Error1", Users403Error1>
      | Declared<"users404Error1", Users404Error1>
      | Declared<"users500Error1", Users500Error1>
      | Declared<"users503Error1", Users503Error1>
      | Undeclared;

    static readonly errors: ErrorDecoders<DeleteUserError> = [
      { on: 400, kind: "users400Error1", decode: { kind: "json", schema: users400Error1Schema } },
      { on: 401, kind: "users401Error1", decode: { kind: "json", schema: users401Error1Schema } },
      { on: 403, kind: "users403Error1", decode: { kind: "json", schema: users403Error1Schema } },
      { on: 404, kind: "users404Error1", decode: { kind: "json", schema: users404Error1Schema } },
      { on: 500, kind: "users500Error1", decode: { kind: "json", schema: users500Error1Schema } },
      { on: 503, kind: "users503Error1", decode: { kind: "json", schema: users503Error1Schema } },
    ];
  }

  export type GetUserRequest = {
    /** The identifier of the user to be retrieved. */
    userId: string;
  };

  export class GetUserError extends ApiError {
    declare readonly payload:
      | Declared<"users400Error1", Users400Error1>
      | Declared<"users401Error1", Users401Error1>
      | Declared<"users403Error1", Users403Error1>
      | Declared<"users404Error1", Users404Error1>
      | Declared<"users500Error1", Users500Error1>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetUserError> = [
      { on: 400, kind: "users400Error1", decode: { kind: "json", schema: users400Error1Schema } },
      { on: 401, kind: "users401Error1", decode: { kind: "json", schema: users401Error1Schema } },
      { on: 403, kind: "users403Error1", decode: { kind: "json", schema: users403Error1Schema } },
      { on: 404, kind: "users404Error1", decode: { kind: "json", schema: users404Error1Schema } },
      { on: 500, kind: "users500Error1", decode: { kind: "json", schema: users500Error1Schema } },
    ];
  }

  export type UpdateUserRequest = {
    /** The identifier of the user to be retrieved. */
    userId: string;
    body: UsersRequest1;
  };

  export class UpdateUserError extends ApiError {
    declare readonly payload:
      | Declared<"users400Error1", Users400Error1>
      | Declared<"users401Error1", Users401Error1>
      | Declared<"users403Error1", Users403Error1>
      | Declared<"users404Error1", Users404Error1>
      | Declared<"users500Error1", Users500Error1>
      | Undeclared;

    static readonly errors: ErrorDecoders<UpdateUserError> = [
      { on: 400, kind: "users400Error1", decode: { kind: "json", schema: users400Error1Schema } },
      { on: 401, kind: "users401Error1", decode: { kind: "json", schema: users401Error1Schema } },
      { on: 403, kind: "users403Error1", decode: { kind: "json", schema: users403Error1Schema } },
      { on: 404, kind: "users404Error1", decode: { kind: "json", schema: users404Error1Schema } },
      { on: 500, kind: "users500Error1", decode: { kind: "json", schema: users500Error1Schema } },
    ];
  }
}
