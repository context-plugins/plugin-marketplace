import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { anyAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import {
  companiesApiUsersResponseSchema,
  type CompaniesApiUsersResponse,
} from "../models/companies-api-users-response.js";
import { errorResponseSchema, type ErrorResponse } from "../models/error-response.js";
import { userUpdateSchema, type UserUpdate } from "../models/user-update.js";
import { userSchema, type User } from "../models/user.js";
import type { Servers } from "../servers.js";

/**
 * Manage Business Central users
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
   * Get New Users From Office 365
   *
   * @remarks
   * Retrieves new users or updated user information from Office 365. Runs synchronously. Not
   * supported with S2S authentication.
   *
   * @returns Users retrieved successfully
   *
   * @throws {@link Users.GetNewUsersFromOffice365Error} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link Dynamics365BusinessCentralError} when no usable response was produced: a
   * connection failure, a timeout, a body that would not decode, a value that would not encode, or
   * a credential that could not be obtained
   */
  getNewUsersFromOffice365(
    request: Users.GetNewUsersFromOffice365Request,
    options?: RequestOptions,
  ): ApiPromise<undefined, Users.GetNewUsersFromOffice365Error> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.defaultBusinessCentralAutomationApiV20CompaniesApi(
          "/companies({company_id})/users/Microsoft.NAV.getNewUsersFromOffice365",
        ),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearerAuth,
        ),
        pathParams: [{ name: "company_id", value: request.companyId, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: Users.GetNewUsersFromOffice365Error,
      },
      options,
    );
  }

  /**
   * Get New Users From Office 365 (async)
   *
   * @remarks
   * Schedules a background job to retrieve new users from Office 365. Returns a link to the
   * scheduled job for tracking progress. Not supported with S2S authentication.
   *
   * @returns Background job scheduled
   *
   * @throws {@link Users.GetNewUsersFromOffice365AsyncError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link Dynamics365BusinessCentralError} when no usable response was produced: a
   * connection failure, a timeout, a body that would not decode, a value that would not encode, or
   * a credential that could not be obtained
   */
  getNewUsersFromOffice365Async(
    request: Users.GetNewUsersFromOffice365AsyncRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, Users.GetNewUsersFromOffice365AsyncError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.defaultBusinessCentralAutomationApiV20CompaniesApi(
          "/companies({company_id})/users/Microsoft.NAV.getNewUsersFromOffice365Async",
        ),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearerAuth,
        ),
        pathParams: [{ name: "company_id", value: request.companyId, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: Users.GetNewUsersFromOffice365AsyncError,
      },
      options,
    );
  }

  /**
   * Get a User
   *
   * @remarks
   * Retrieves a specific user by user security ID.
   *
   * @returns Successfully retrieved user
   *
   * @throws {@link Users.GetUserError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link Dynamics365BusinessCentralError} when no usable response was produced: a
   * connection failure, a timeout, a body that would not decode, a value that would not encode, or
   * a credential that could not be obtained
   */
  getUser(request: Users.GetUserRequest, options?: RequestOptions): ApiPromise<User, Users.GetUserError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.defaultBusinessCentralAutomationApiV20CompaniesApi(
          "/companies({company_id})/users({user_id})",
        ),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearerAuth,
        ),
        pathParams: [
          { name: "company_id", value: request.companyId, schema: s.string() },
          { name: "user_id", value: request.userId, schema: s.string() },
        ],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: userSchema },
        errorFactory: Users.GetUserError,
      },
      options,
    );
  }

  /**
   * List Users
   *
   * @remarks
   * Returns a list of Business Central users.
   *
   * @returns Successfully retrieved users
   *
   * @throws {@link Users.ListUsersError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link Dynamics365BusinessCentralError} when no usable response was produced: a
   * connection failure, a timeout, a body that would not decode, a value that would not encode, or
   * a credential that could not be obtained
   */
  listUsers(
    request: Users.ListUsersRequest,
    options?: RequestOptions,
  ): ApiPromise<CompaniesApiUsersResponse, Users.ListUsersError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.defaultBusinessCentralAutomationApiV20CompaniesApi(
          "/companies({company_id})/users",
        ),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearerAuth,
        ),
        pathParams: [{ name: "company_id", value: request.companyId, schema: s.string() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: companiesApiUsersResponseSchema },
        errorFactory: Users.ListUsersError,
      },
      options,
    );
  }

  /**
   * Update a User
   *
   * @remarks
   * Updates properties of a Business Central user.
   *
   * @returns User updated successfully
   *
   * @throws {@link Users.UpdateUserError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link Dynamics365BusinessCentralError} when no usable response was produced: a
   * connection failure, a timeout, a body that would not decode, a value that would not encode, or
   * a credential that could not be obtained
   */
  updateUser(
    request: Users.UpdateUserRequest,
    options?: RequestOptions,
  ): ApiPromise<User, Users.UpdateUserError> {
    return this.#rawClient.execute(
      {
        method: "PATCH",
        urlTemplate: this.#servers.defaultBusinessCentralAutomationApiV20CompaniesApi(
          "/companies({company_id})/users({user_id})",
        ),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearerAuth,
        ),
        pathParams: [
          { name: "company_id", value: request.companyId, schema: s.string() },
          { name: "user_id", value: request.userId, schema: s.string() },
        ],
        query: [],
        headers: [
          { name: "If-Match", value: request.ifMatch, schema: s.string() },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "json", value: request.body, schema: userUpdateSchema },
      },
      {
        success: { kind: "json", schema: userSchema },
        errorFactory: Users.UpdateUserError,
      },
      options,
    );
  }
}

export namespace Users {
  export type GetNewUsersFromOffice365Request = {
    /** The unique identifier of the company */
    companyId: string;
  };

  export class GetNewUsersFromOffice365Error extends ApiError {
    declare readonly payload: Declared<"errorResponse", ErrorResponse> | Undeclared;

    static readonly errors: ErrorDecoders<GetNewUsersFromOffice365Error> = [
      { on: 401, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export type GetNewUsersFromOffice365AsyncRequest = {
    /** The unique identifier of the company */
    companyId: string;
  };

  export class GetNewUsersFromOffice365AsyncError extends ApiError {
    declare readonly payload: Declared<"errorResponse", ErrorResponse> | Undeclared;

    static readonly errors: ErrorDecoders<GetNewUsersFromOffice365AsyncError> = [
      { on: 401, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export type GetUserRequest = {
    /** The unique identifier of the company */
    companyId: string;
    /** The user security ID */
    userId: string;
  };

  export class GetUserError extends ApiError {
    declare readonly payload:
      | Declared<"errorResponse", ErrorResponse>
      | Declared<"errorResponse2", ErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetUserError> = [
      { on: 401, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 404, kind: "errorResponse2", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export type ListUsersRequest = {
    /** The unique identifier of the company */
    companyId: string;
  };

  export class ListUsersError extends ApiError {
    declare readonly payload: Declared<"errorResponse", ErrorResponse> | Undeclared;

    static readonly errors: ErrorDecoders<ListUsersError> = [
      { on: 401, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export type UpdateUserRequest = {
    /** The unique identifier of the company */
    companyId: string;
    /** The user security ID */
    userId: string;
    /** ETag value for optimistic concurrency control */
    ifMatch: string;
    body: UserUpdate;
  };

  export class UpdateUserError extends ApiError {
    declare readonly payload: Declared<"errorResponse", ErrorResponse> | Undeclared;

    static readonly errors: ErrorDecoders<UpdateUserError> = [
      { on: 401, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }
}
