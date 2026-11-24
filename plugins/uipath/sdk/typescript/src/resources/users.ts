import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { addUserRequestInternalSchema, type AddUserRequest } from "../models/add-user-request.js";
import { createUserRequestInternalSchema, type CreateUserRequest } from "../models/create-user-request.js";
import { editUserRequestSchema, type EditUserRequest } from "../models/edit-user-request.js";
import {
  errorResponseUiPathAutomationHubAppInventoryApiSchema,
  type ErrorResponseUiPathAutomationHubAppInventoryApi,
} from "../models/error-response-ui-path-automation-hub-app-inventory-api.js";
import { errorResponse3Schema, type ErrorResponse3 } from "../models/error-response3.js";
import {
  oDataUserCollectionInternalSchema,
  type ODataUserCollection,
} from "../models/odata-user-collection.js";
import { rolesResponseSchema, type RolesResponse } from "../models/roles-response.js";
import { userListResponseInternalSchema, type UserListResponse } from "../models/user-list-response.js";
import { userInternalSchema, type User } from "../models/user.js";
import { user2InternalSchema, type User2 } from "../models/user2.js";
import type { Servers } from "../servers.js";

/**
 * Manage users and their roles within Automation Hub
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
   * UiPath Add a User
   *
   * @remarks
   * Adds a new user to Automation Hub. The user must already exist in the UiPath identity
   * directory. This endpoint assigns the user a role within Automation Hub and makes them available
   * for collaboration and idea submission.
   *
   * @returns User added successfully
   *
   * @throws {@link Users.AddUserError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link UiPathError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  addUser(
    request: Users.AddUserRequestParams,
    options?: RequestOptions,
  ): ApiPromise<User, Users.AddUserError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.defaultUiPathAutomationHubAppInventoryApi("/adduser"),
        auth: this.#auth.apiKeyAuth,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: addUserRequestInternalSchema },
      },
      {
        success: { kind: "json", schema: userInternalSchema },
        errorFactory: Users.AddUserError,
      },
      options,
    );
  }

  /**
   * UiPath Create a User
   *
   * @remarks
   * Creates a new user account in the UiPath organization. The user will receive an invitation
   * email to set up their credentials. The request must include the user's email address, display
   * name, and the tenants or roles to initially assign. Requires the PM.Users OAuth scope.
   *
   * @returns User created successfully
   *
   * @throws {@link Users.CreateUserError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link UiPathError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  createUser(
    request: Users.CreateUserRequestParams,
    options?: RequestOptions,
  ): ApiPromise<User2, Users.CreateUserError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.defaultUiPathAutomationHubAppInventoryApi(
          "/{organizationName}/identity_/api/User",
        ),
        auth: this.#auth.bearerAuth,
        pathParams: [{ name: "organizationName", value: request.organizationName, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: createUserRequestInternalSchema },
      },
      {
        success: { kind: "json", schema: user2InternalSchema },
        errorFactory: Users.CreateUserError,
      },
      options,
    );
  }

  /**
   * UiPath Delete a User
   *
   * @remarks
   * Permanently deletes a user account from the organization by their unique identifier. This
   * action removes the user from all tenants and revokes their access to UiPath Automation Cloud.
   * This action cannot be undone. Requires the PM.Users OAuth scope.
   *
   * @returns User deleted successfully
   *
   * @throws {@link Users.DeleteUserError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link UiPathError} when no usable response was produced: a connection failure, a
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
        urlTemplate: this.#servers.defaultUiPathAutomationHubAppInventoryApi(
          "/{organizationName}/identity_/api/User/{userId}",
        ),
        auth: this.#auth.bearerAuth,
        pathParams: [
          { name: "organizationName", value: request.organizationName, schema: s.string() },
          { name: "userId", value: request.userId, schema: s.string() },
        ],
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
   * UiPath Edit a User
   *
   * @remarks
   * Updates an existing user's properties in Automation Hub, such as their assigned role or active
   * status. The user is identified by their unique ID in the request body.
   *
   * @returns User updated successfully
   *
   * @throws {@link Users.EditUserError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link UiPathError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  editUser(
    request: Users.EditUserRequestParams,
    options?: RequestOptions,
  ): ApiPromise<User, Users.EditUserError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.defaultUiPathAutomationHubAppInventoryApi("/edituser"),
        auth: this.#auth.apiKeyAuth,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: editUserRequestSchema },
      },
      {
        success: { kind: "json", schema: userInternalSchema },
        errorFactory: Users.EditUserError,
      },
      options,
    );
  }

  /**
   * UiPath List Users
   *
   * @remarks
   * Retrieves a list of users registered in Orchestrator. Each user has associated roles, robot
   * configurations, and folder memberships. Supports OData filtering and pagination.
   *
   * @returns A list of users
   *
   * @throws {@link Users.GetOdataUsersError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link UiPathError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getOdataUsers(
    request: Users.GetOdataUsersRequest = {},
    options?: RequestOptions,
  ): ApiPromise<ODataUserCollection, Users.GetOdataUsersError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.defaultUiPathAutomationHubAppInventoryApi("/odata/Users"),
        auth: this.#auth.bearerAuth,
        pathParams: [],
        query: [
          { name: "$filter", value: request.filter, schema: s.optional(s.string()) },
          { name: "$top", value: request.top, schema: s.optional(s.int()) },
          { name: "$skip", value: request.skip, schema: s.optional(s.int()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: oDataUserCollectionInternalSchema },
        errorFactory: Users.GetOdataUsersError,
      },
      options,
    );
  }

  /**
   * UiPath Get a User by ID
   *
   * @remarks
   * Retrieves user account information by the user's unique identifier. Returns user properties
   * including name, email address, active status, and authentication configuration. Requires the
   * PM.Users or PM.Users.Read OAuth scope.
   *
   * @returns The requested user account
   *
   * @throws {@link Users.GetUserError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link UiPathError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getUser(request: Users.GetUserRequest, options?: RequestOptions): ApiPromise<User2, Users.GetUserError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.defaultUiPathAutomationHubAppInventoryApi(
          "/{organizationName}/identity_/api/User/{userId}",
        ),
        auth: this.#auth.bearerAuth,
        pathParams: [
          { name: "organizationName", value: request.organizationName, schema: s.string() },
          { name: "userId", value: request.userId, schema: s.string() },
        ],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: user2InternalSchema },
        errorFactory: Users.GetUserError,
      },
      options,
    );
  }

  /**
   * UiPath List Roles
   *
   * @remarks
   * Retrieves the list of roles available in Automation Hub. Each role defines a set of permissions
   * controlling what a user can view and perform within the platform. Roles are assigned when
   * adding or editing users.
   *
   * @returns A list of available roles
   *
   * @throws {@link Users.ListRoles2Error} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link UiPathError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listRoles2(options?: RequestOptions): ApiPromise<RolesResponse, Users.ListRoles2Error> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.defaultUiPathAutomationHubAppInventoryApi("/roles"),
        auth: this.#auth.apiKeyAuth,
        pathParams: [],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: rolesResponseSchema },
        errorFactory: Users.ListRoles2Error,
      },
      options,
    );
  }

  /**
   * UiPath List Users
   *
   * @remarks
   * Retrieves a list of users registered in Automation Hub. Returns user identifiers, names, email
   * addresses, and assigned roles. Used by administrators to manage user assignments and role
   * configurations.
   *
   * @returns A list of users
   *
   * @throws {@link Users.ListUsersError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link UiPathError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listUsers(
    request: Users.ListUsersRequest = {},
    options?: RequestOptions,
  ): ApiPromise<UserListResponse, Users.ListUsersError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.defaultUiPathAutomationHubAppInventoryApi("/users"),
        auth: this.#auth.apiKeyAuth,
        pathParams: [],
        query: [
          { name: "page", value: request.page, schema: s.defaulted(s.int(), 1) },
          { name: "pageSize", value: request.pageSize, schema: s.defaulted(s.int(), 20) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: userListResponseInternalSchema },
        errorFactory: Users.ListUsersError,
      },
      options,
    );
  }
}

export namespace Users {
  export type AddUserRequestParams = {
    body: AddUserRequest;
  };

  export class AddUserError extends ApiError {
    declare readonly payload:
      | Declared<
          "errorResponseUiPathAutomationHubAppInventoryApi",
          ErrorResponseUiPathAutomationHubAppInventoryApi
        >
      | Declared<
          "errorResponseUiPathAutomationHubAppInventoryApi2",
          ErrorResponseUiPathAutomationHubAppInventoryApi
        >
      | Undeclared;

    static readonly errors: ErrorDecoders<AddUserError> = [
      {
        on: 400,
        kind: "errorResponseUiPathAutomationHubAppInventoryApi",
        decode: { kind: "json", schema: errorResponseUiPathAutomationHubAppInventoryApiSchema },
      },
      {
        on: 401,
        kind: "errorResponseUiPathAutomationHubAppInventoryApi2",
        decode: { kind: "json", schema: errorResponseUiPathAutomationHubAppInventoryApiSchema },
      },
    ];
  }

  export type CreateUserRequestParams = {
    /** The name of the UiPath organization */
    organizationName: string;
    body: CreateUserRequest;
  };

  export class CreateUserError extends ApiError {
    declare readonly payload:
      | Declared<
          "errorResponseUiPathAutomationHubAppInventoryApi",
          ErrorResponseUiPathAutomationHubAppInventoryApi
        >
      | Declared<
          "errorResponseUiPathAutomationHubAppInventoryApi2",
          ErrorResponseUiPathAutomationHubAppInventoryApi
        >
      | Undeclared;

    static readonly errors: ErrorDecoders<CreateUserError> = [
      {
        on: 400,
        kind: "errorResponseUiPathAutomationHubAppInventoryApi",
        decode: { kind: "json", schema: errorResponseUiPathAutomationHubAppInventoryApiSchema },
      },
      {
        on: 401,
        kind: "errorResponseUiPathAutomationHubAppInventoryApi2",
        decode: { kind: "json", schema: errorResponseUiPathAutomationHubAppInventoryApiSchema },
      },
    ];
  }

  export type DeleteUserRequest = {
    /** The name of the UiPath organization */
    organizationName: string;
    /** Unique identifier of the user */
    userId: string;
  };

  export class DeleteUserError extends ApiError {
    declare readonly payload:
      | Declared<
          "errorResponseUiPathAutomationHubAppInventoryApi",
          ErrorResponseUiPathAutomationHubAppInventoryApi
        >
      | Declared<"errorResponse3", ErrorResponse3>
      | Undeclared;

    static readonly errors: ErrorDecoders<DeleteUserError> = [
      {
        on: 401,
        kind: "errorResponseUiPathAutomationHubAppInventoryApi",
        decode: { kind: "json", schema: errorResponseUiPathAutomationHubAppInventoryApiSchema },
      },
      { on: 404, kind: "errorResponse3", decode: { kind: "json", schema: errorResponse3Schema } },
    ];
  }

  export type EditUserRequestParams = {
    body: EditUserRequest;
  };

  export class EditUserError extends ApiError {
    declare readonly payload:
      | Declared<
          "errorResponseUiPathAutomationHubAppInventoryApi",
          ErrorResponseUiPathAutomationHubAppInventoryApi
        >
      | Declared<
          "errorResponseUiPathAutomationHubAppInventoryApi2",
          ErrorResponseUiPathAutomationHubAppInventoryApi
        >
      | Undeclared;

    static readonly errors: ErrorDecoders<EditUserError> = [
      {
        on: 400,
        kind: "errorResponseUiPathAutomationHubAppInventoryApi",
        decode: { kind: "json", schema: errorResponseUiPathAutomationHubAppInventoryApiSchema },
      },
      {
        on: 401,
        kind: "errorResponseUiPathAutomationHubAppInventoryApi2",
        decode: { kind: "json", schema: errorResponseUiPathAutomationHubAppInventoryApiSchema },
      },
    ];
  }

  export type GetOdataUsersRequest = {
    /** OData filter expression to narrow results (e.g., State eq 'Running') */
    filter?: string;
    /** Maximum number of records to return (default 100, max 1000) */
    top?: number;
    /** Number of records to skip for pagination */
    skip?: number;
  };

  export const getOdataUsersRequestSchema: Schema<GetOdataUsersRequest> = s.lazySchema(() =>
    s.object<GetOdataUsersRequest>({
      filter: s.optional(s.string()),
      top: s.optional(s.int().check(s.gte(1), s.lte(1000))),
      skip: s.optional(s.int().check(s.gte(0))),
    }),
  );

  export class GetOdataUsersError extends ApiError {
    declare readonly payload:
      | Declared<
          "errorResponseUiPathAutomationHubAppInventoryApi",
          ErrorResponseUiPathAutomationHubAppInventoryApi
        >
      | Undeclared;

    static readonly errors: ErrorDecoders<GetOdataUsersError> = [
      {
        on: 401,
        kind: "errorResponseUiPathAutomationHubAppInventoryApi",
        decode: { kind: "json", schema: errorResponseUiPathAutomationHubAppInventoryApiSchema },
      },
    ];
  }

  export type GetUserRequest = {
    /** The name of the UiPath organization */
    organizationName: string;
    /** Unique identifier of the user */
    userId: string;
  };

  export class GetUserError extends ApiError {
    declare readonly payload:
      | Declared<
          "errorResponseUiPathAutomationHubAppInventoryApi",
          ErrorResponseUiPathAutomationHubAppInventoryApi
        >
      | Declared<"errorResponse3", ErrorResponse3>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetUserError> = [
      {
        on: 401,
        kind: "errorResponseUiPathAutomationHubAppInventoryApi",
        decode: { kind: "json", schema: errorResponseUiPathAutomationHubAppInventoryApiSchema },
      },
      { on: 404, kind: "errorResponse3", decode: { kind: "json", schema: errorResponse3Schema } },
    ];
  }

  export class ListRoles2Error extends ApiError {
    declare readonly payload:
      | Declared<
          "errorResponseUiPathAutomationHubAppInventoryApi",
          ErrorResponseUiPathAutomationHubAppInventoryApi
        >
      | Undeclared;

    static readonly errors: ErrorDecoders<ListRoles2Error> = [
      {
        on: 401,
        kind: "errorResponseUiPathAutomationHubAppInventoryApi",
        decode: { kind: "json", schema: errorResponseUiPathAutomationHubAppInventoryApiSchema },
      },
    ];
  }

  export type ListUsersRequest = {
    /** Page number for pagination (1-based) @default 1 */
    page?: number;
    /** Number of records per page @default 20 */
    pageSize?: number;
  };

  export const listUsersRequestSchema: Schema<ListUsersRequest> = s.lazySchema(() =>
    s.object<ListUsersRequest>({
      page: s.defaulted(s.int().check(s.gte(1)), 1),
      pageSize: s.defaulted(s.int().check(s.gte(1), s.lte(100)), 20),
    }),
  );

  export class ListUsersError extends ApiError {
    declare readonly payload:
      | Declared<
          "errorResponseUiPathAutomationHubAppInventoryApi",
          ErrorResponseUiPathAutomationHubAppInventoryApi
        >
      | Undeclared;

    static readonly errors: ErrorDecoders<ListUsersError> = [
      {
        on: 401,
        kind: "errorResponseUiPathAutomationHubAppInventoryApi",
        decode: { kind: "json", schema: errorResponseUiPathAutomationHubAppInventoryApiSchema },
      },
    ];
  }
}
