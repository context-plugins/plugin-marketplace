import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import { httpValidationErrorSchema, type HttpValidationError } from "../models/http-validation-error.js";
import {
  listResponseUserResponseSchema,
  type ListResponseUserResponse,
} from "../models/list-response-user-response.js";
import { endDatetime3Schema, type EndDatetime3 } from "../models/unions/end-datetime3.js";
import { fields29Schema, type Fields29 } from "../models/unions/fields29.js";
import { orderByDirection1Schema, type OrderByDirection1 } from "../models/unions/order-by-direction1.js";
import { orderBy317Schema, type OrderBy317 } from "../models/unions/order-by317.js";
import { pageSchema, type Page } from "../models/unions/page.js";
import { startDatetime3Schema, type StartDatetime3 } from "../models/unions/start-datetime3.js";
import { userCreateRequestSchema, type UserCreateRequest } from "../models/user-create-request.js";
import { userDeleteRequestSchema, type UserDeleteRequest } from "../models/user-delete-request.js";
import { userPropertiesSchema, type UserProperties } from "../models/user-properties.js";
import { userResponseSchema, type UserResponse } from "../models/user-response.js";
import { userUpdateRequestSchema, type UserUpdateRequest } from "../models/user-update-request.js";
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
   * Create User
   *
   * @remarks
   * Create a new user.
   *
   * @returns Successful Response
   *
   * @throws {@link Users.UsersCreateError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link SyllableSdkError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  usersCreate(
    request: Users.UsersCreateRequest,
    options?: RequestOptions,
  ): ApiPromise<UserResponse, Users.UsersCreateError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/api/v1/users/"),
        auth: this.#auth.apiKeyHeader,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: userCreateRequestSchema },
      },
      {
        success: { kind: "json", schema: userResponseSchema },
        errorFactory: Users.UsersCreateError,
      },
      options,
    );
  }

  /**
   * Delete User
   *
   * @remarks
   * Delete a user.
   *
   * @returns Successful Response
   *
   * @throws {@link Users.UsersDeleteError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link SyllableSdkError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  usersDelete(
    request: Users.UsersDeleteRequest,
    options?: RequestOptions,
  ): ApiPromise<Record<string, unknown>, Users.UsersDeleteError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default("/api/v1/users/"),
        auth: this.#auth.apiKeyHeader,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: userDeleteRequestSchema },
      },
      {
        success: { kind: "json", schema: s.record(s.string(), s.unknown()) },
        errorFactory: Users.UsersDeleteError,
      },
      options,
    );
  }

  /**
   * Request Removal Of This Account
   *
   * @remarks
   * Request removal of the account of the user calling this endpoint. Intended for removing trial
   * accounts.
   *
   * @returns Successful Response
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link SyllableSdkError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  usersDeleteAccount(options?: RequestOptions): ApiPromise<Record<string, unknown>, ApiError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default("/api/v1/users/delete_account"),
        auth: this.#auth.apiKeyHeader,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.record(s.string(), s.unknown()) },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Get User
   *
   * @remarks
   * Fetch a given user.
   *
   * @returns Successful Response
   *
   * @throws {@link Users.UsersGetByEmailError} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link SyllableSdkError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  usersGetByEmail(
    request: Users.UsersGetByEmailRequest,
    options?: RequestOptions,
  ): ApiPromise<UserResponse, Users.UsersGetByEmailError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/v1/users/{user_email}"),
        auth: this.#auth.apiKeyHeader,
        pathParams: [{ name: "user_email", value: request.userEmail, schema: s.string() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: userResponseSchema },
        errorFactory: Users.UsersGetByEmailError,
      },
      options,
    );
  }

  /**
   * List Users
   *
   * @remarks
   * List the existing users.
   *
   * @returns Successful Response
   *
   * @throws {@link Users.UsersListError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link SyllableSdkError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  usersList(
    request: Users.UsersListRequest,
    options?: RequestOptions,
  ): ApiPromise<ListResponseUserResponse, Users.UsersListError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/v1/users/"),
        auth: this.#auth.apiKeyHeader,
        pathParams: [],
        query: [
          { name: "page", value: request.page, schema: s.optional(s.lazy(() => pageSchema)) },
          { name: "limit", value: request.limit, schema: s.defaulted(s.int(), 25) },
          {
            name: "search_fields",
            value: request.searchFields,
            schema: s.optional(s.array(s.lazy(() => userPropertiesSchema))),
          },
          {
            name: "search_field_values",
            value: request.searchFieldValues,
            schema: s.optional(s.array(s.string())),
          },
          { name: "order_by", value: request.orderBy, schema: s.optional(s.lazy(() => orderBy317Schema)) },
          {
            name: "order_by_direction",
            value: request.orderByDirection,
            schema: s.optional(s.lazy(() => orderByDirection1Schema)),
          },
          { name: "fields", value: request.fields, schema: s.optional(s.lazy(() => fields29Schema)) },
          {
            name: "start_datetime",
            value: request.startDatetime,
            schema: s.optional(s.lazy(() => startDatetime3Schema)),
          },
          {
            name: "end_datetime",
            value: request.endDatetime,
            schema: s.optional(s.lazy(() => endDatetime3Schema)),
          },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: listResponseUserResponseSchema },
        errorFactory: Users.UsersListError,
      },
      options,
    );
  }

  /**
   * Send User Email
   *
   * @remarks
   * Send a welcome email to a user.
   *
   * @returns Successful Response
   *
   * @throws {@link Users.UsersSendEmailError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link SyllableSdkError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  usersSendEmail(
    request: Users.UsersSendEmailRequest,
    options?: RequestOptions,
  ): ApiPromise<Record<string, unknown>, Users.UsersSendEmailError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/api/v1/users/{user_email}/send_email"),
        auth: this.#auth.apiKeyHeader,
        pathParams: [{ name: "user_email", value: request.userEmail, schema: s.string() }],
        query: [{ name: "skip_auth", value: request.skipAuth, schema: s.defaulted(s.boolean(), false) }],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.record(s.string(), s.unknown()) },
        errorFactory: Users.UsersSendEmailError,
      },
      options,
    );
  }

  /**
   * Update User
   *
   * @remarks
   * Update an existing user.
   *
   * @returns Successful Response
   *
   * @throws {@link Users.UsersUpdateError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link SyllableSdkError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  usersUpdate(
    request: Users.UsersUpdateRequest,
    options?: RequestOptions,
  ): ApiPromise<UserResponse, Users.UsersUpdateError> {
    return this.#rawClient.execute(
      {
        method: "PUT",
        urlTemplate: this.#servers.default("/api/v1/users/"),
        auth: this.#auth.apiKeyHeader,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: userUpdateRequestSchema },
      },
      {
        success: { kind: "json", schema: userResponseSchema },
        errorFactory: Users.UsersUpdateError,
      },
      options,
    );
  }
}

export namespace Users {
  export type UsersCreateRequest = {
    body: UserCreateRequest;
  };

  export class UsersCreateError extends ApiError {
    declare readonly payload: Declared<"httpValidationError", HttpValidationError> | Undeclared;

    static readonly errors: ErrorDecoders<UsersCreateError> = [
      { on: 422, kind: "httpValidationError", decode: { kind: "json", schema: httpValidationErrorSchema } },
    ];
  }

  export type UsersDeleteRequest = {
    body: UserDeleteRequest;
  };

  export class UsersDeleteError extends ApiError {
    declare readonly payload: Declared<"httpValidationError", HttpValidationError> | Undeclared;

    static readonly errors: ErrorDecoders<UsersDeleteError> = [
      { on: 422, kind: "httpValidationError", decode: { kind: "json", schema: httpValidationErrorSchema } },
    ];
  }

  export type UsersGetByEmailRequest = {
    userEmail: string;
  };

  export class UsersGetByEmailError extends ApiError {
    declare readonly payload: Declared<"httpValidationError", HttpValidationError> | Undeclared;

    static readonly errors: ErrorDecoders<UsersGetByEmailError> = [
      { on: 422, kind: "httpValidationError", decode: { kind: "json", schema: httpValidationErrorSchema } },
    ];
  }

  export type UsersListRequest = {
    /** The page number from which to start (0-based) */
    page?: Page;
    /** The maximum number of items to return @default 25 */
    limit?: number;
    /** String names of fields to search. Correspond by index to search field values */
    searchFields?: UserProperties[];
    /**
     * Values of fields to search. Correspond by index to search fields. Unless field name contains
     * "list", an individual search field value cannot be a list
     */
    searchFieldValues?: string[];
    /** The field whose value should be used to order the results */
    orderBy?: OrderBy317;
    /** The direction in which to order the results */
    orderByDirection?: OrderByDirection1;
    /** The fields to include in the response */
    fields?: Fields29;
    /** The start datetime for filtering results */
    startDatetime?: StartDatetime3;
    /** The end datetime for filtering results */
    endDatetime?: EndDatetime3;
  };

  export class UsersListError extends ApiError {
    declare readonly payload: Declared<"httpValidationError", HttpValidationError> | Undeclared;

    static readonly errors: ErrorDecoders<UsersListError> = [
      { on: 422, kind: "httpValidationError", decode: { kind: "json", schema: httpValidationErrorSchema } },
    ];
  }

  export type UsersSendEmailRequest = {
    userEmail: string;
    /** @default false */
    skipAuth?: boolean;
  };

  export class UsersSendEmailError extends ApiError {
    declare readonly payload: Declared<"httpValidationError", HttpValidationError> | Undeclared;

    static readonly errors: ErrorDecoders<UsersSendEmailError> = [
      { on: 422, kind: "httpValidationError", decode: { kind: "json", schema: httpValidationErrorSchema } },
    ];
  }

  export type UsersUpdateRequest = {
    body: UserUpdateRequest;
  };

  export class UsersUpdateError extends ApiError {
    declare readonly payload: Declared<"httpValidationError", HttpValidationError> | Undeclared;

    static readonly errors: ErrorDecoders<UsersUpdateError> = [
      { on: 422, kind: "httpValidationError", decode: { kind: "json", schema: httpValidationErrorSchema } },
    ];
  }
}
