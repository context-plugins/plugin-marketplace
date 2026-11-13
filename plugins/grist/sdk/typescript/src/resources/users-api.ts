import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import { gristErrorSchema, type GristError } from "../models/grist-error.js";
import {
  usersDisableResponseSchema,
  type UsersDisableResponse,
} from "../models/unions/users-disable-response.js";
import {
  usersEnableResponseSchema,
  type UsersEnableResponse,
} from "../models/unions/users-enable-response.js";
import { usersResponseSchema, type UsersResponse } from "../models/unions/users-response.js";
import { usersRequestSchema, type UsersRequest } from "../models/users-request.js";
import type { Servers } from "../servers.js";

/**
 * Grist users.
 */
export class UsersApi {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Delete a user from Grist
   *
   * @remarks
   * This action also deletes the user's personal organisation and all the workspaces and documents
   * it contains. Currently, only the users themselves are allowed to delete their own accounts.
   *
   * ⚠️ **This action cannot be undone, please be cautious when using this endpoint** ⚠️
   *
   * @returns The account has been deleted successfully
   *
   * @throws {@link UsersApi.DeleteUserError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link GristApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  deleteUser(
    request: UsersApi.DeleteUserRequest,
    options?: RequestOptions,
  ): ApiPromise<UsersResponse, UsersApi.DeleteUserError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default("/users/{userId}"),
        auth: this.#auth.apiKey,
        pathParams: [{ name: "userId", value: request.userId, schema: s.int() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: s.optional(s.lazy(() => usersRequestSchema)) },
      },
      {
        success: { kind: "json", schema: usersResponseSchema },
        errorFactory: UsersApi.DeleteUserError,
      },
      options,
    );
  }

  /**
   * Disable a user
   *
   * @remarks
   * A disabled user can not log in and loses access to all pages, including public ones, as well as
   * API access. The operation is non-destructive. Disabled users can be re-enabled.
   *
   * Only admin accounts can disable a user.
   *
   * @returns The account has been disabled successfully
   *
   * @throws {@link UsersApi.DisableUserError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link GristApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  disableUser(
    request: UsersApi.DisableUserRequest,
    options?: RequestOptions,
  ): ApiPromise<UsersDisableResponse, UsersApi.DisableUserError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/users/{userId}/disable"),
        auth: this.#auth.apiKey,
        pathParams: [{ name: "userId", value: request.userId, schema: s.int() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: usersDisableResponseSchema },
        errorFactory: UsersApi.DisableUserError,
      },
      options,
    );
  }

  /**
   * Enable a user
   *
   * @remarks
   * If a user has been disabled, this will restore their access, including API access.
   *
   * Only admin accounts can enable a user.
   *
   * @returns The account has been enabled successfully
   *
   * @throws {@link UsersApi.EnableUserError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link GristApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  enableUser(
    request: UsersApi.EnableUserRequest,
    options?: RequestOptions,
  ): ApiPromise<UsersEnableResponse, UsersApi.EnableUserError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/users/{userId}/enable"),
        auth: this.#auth.apiKey,
        pathParams: [{ name: "userId", value: request.userId, schema: s.int() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: usersEnableResponseSchema },
        errorFactory: UsersApi.EnableUserError,
      },
      options,
    );
  }
}

export namespace UsersApi {
  export type DeleteUserRequest = {
    /** A user id */
    userId: number;
    body?: UsersRequest;
  };

  export class DeleteUserError extends ApiError {
    declare readonly payload:
      | Declared<"gristError", GristError>
      | Declared<"gristError2", GristError>
      | Declared<"gristError3", GristError>
      | Undeclared;

    static readonly errors: ErrorDecoders<DeleteUserError> = [
      { on: 400, kind: "gristError", decode: { kind: "json", schema: gristErrorSchema } },
      { on: 403, kind: "gristError2", decode: { kind: "json", schema: gristErrorSchema } },
      { on: 404, kind: "gristError3", decode: { kind: "json", schema: gristErrorSchema } },
    ];
  }

  export type DisableUserRequest = {
    /** A user id */
    userId: number;
  };

  export class DisableUserError extends ApiError {
    declare readonly payload:
      | Declared<"gristError", GristError>
      | Declared<"gristError2", GristError>
      | Undeclared;

    static readonly errors: ErrorDecoders<DisableUserError> = [
      { on: 403, kind: "gristError", decode: { kind: "json", schema: gristErrorSchema } },
      { on: 404, kind: "gristError2", decode: { kind: "json", schema: gristErrorSchema } },
    ];
  }

  export type EnableUserRequest = {
    /** A user id */
    userId: number;
  };

  export class EnableUserError extends ApiError {
    declare readonly payload:
      | Declared<"gristError", GristError>
      | Declared<"gristError2", GristError>
      | Undeclared;

    static readonly errors: ErrorDecoders<EnableUserError> = [
      { on: 403, kind: "gristError", decode: { kind: "json", schema: gristErrorSchema } },
      { on: 404, kind: "gristError2", decode: { kind: "json", schema: gristErrorSchema } },
    ];
  }
}
