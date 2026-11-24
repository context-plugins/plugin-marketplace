import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { anyAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import { error2Schema, type Error2 } from "../models/error2.js";
import { updateUserRequestSchema, type UpdateUserRequest } from "../models/update-user-request.js";
import { userInternalSchema, type User } from "../models/user.js";
import type { Servers } from "../servers.js";

/**
 * Endpoints for managing Contentstack user accounts including profile updates, password resets, and
 * account activation.
 */
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
   * Get current user
   *
   * @remarks
   * Retrieves the account details of the currently authenticated user, including profile
   * information and organization memberships.
   *
   * @returns The current user's account details.
   *
   * @throws {@link Users.GetUserError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link ContentstackError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getUser(options?: RequestOptions): ApiPromise<User, Users.GetUserError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.defaultContentstackEnvironmentsApi("/user"),
        auth: anyAuth(this.#auth.authtokenAuth, this.#auth.managementTokenAuth),
        pathParams: [],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: userInternalSchema },
        errorFactory: Users.GetUserError,
      },
      options,
    );
  }

  /**
   * Update current user
   *
   * @remarks
   * Updates profile information for the currently authenticated user, including first name, last
   * name, and other account attributes.
   *
   * @returns The updated user object.
   *
   * @throws {@link Users.UpdateUserError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link ContentstackError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  updateUser(
    request: Users.UpdateUserRequestParams,
    options?: RequestOptions,
  ): ApiPromise<User, Users.UpdateUserError> {
    return this.#rawClient.execute(
      {
        method: "PUT",
        urlTemplate: this.#servers.defaultContentstackEnvironmentsApi("/user"),
        auth: anyAuth(this.#auth.authtokenAuth, this.#auth.managementTokenAuth),
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: updateUserRequestSchema },
      },
      {
        success: { kind: "json", schema: userInternalSchema },
        errorFactory: Users.UpdateUserError,
      },
      options,
    );
  }
}

export namespace Users {
  export class GetUserError extends ApiError {
    declare readonly payload: Declared<"error2", Error2> | Undeclared;

    static readonly errors: ErrorDecoders<GetUserError> = [
      { on: 401, kind: "error2", decode: { kind: "json", schema: error2Schema } },
    ];
  }

  export type UpdateUserRequestParams = {
    body: UpdateUserRequest;
  };

  export class UpdateUserError extends ApiError {
    declare readonly payload: Declared<"error2", Error2> | Declared<"error22", Error2> | Undeclared;

    static readonly errors: ErrorDecoders<UpdateUserError> = [
      { on: 400, kind: "error2", decode: { kind: "json", schema: error2Schema } },
      { on: 401, kind: "error22", decode: { kind: "json", schema: error2Schema } },
    ];
  }
}
