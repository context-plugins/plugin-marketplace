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
  companiesApiPermissionSetsResponseSchema,
  type CompaniesApiPermissionSetsResponse,
} from "../models/companies-api-permission-sets-response.js";
import {
  companiesApiUsersApiUserPermissionsRequestSchema,
  type CompaniesApiUsersApiUserPermissionsRequest,
} from "../models/companies-api-users-api-user-permissions-request.js";
import {
  companiesApiUsersApiUserPermissionsResponseSchema,
  type CompaniesApiUsersApiUserPermissionsResponse,
} from "../models/companies-api-users-api-user-permissions-response.js";
import { errorResponseSchema, type ErrorResponse } from "../models/error-response.js";
import { userPermissionSchema, type UserPermission } from "../models/user-permission.js";
import type { Servers } from "../servers.js";

/**
 * Manage permission sets and user permissions
 */
export class PermissionSets {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Assign a Permission Set to a User
   *
   * @remarks
   * Assigns a permission set to the specified user.
   *
   * @returns Permission set assigned
   *
   * @throws {@link PermissionSets.CreateUserPermissionError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link Dynamics365BusinessCentralError} when no usable response was produced: a
   * connection failure, a timeout, a body that would not decode, a value that would not encode, or
   * a credential that could not be obtained
   */
  createUserPermission(
    request: PermissionSets.CreateUserPermissionRequest,
    options?: RequestOptions,
  ): ApiPromise<UserPermission, PermissionSets.CreateUserPermissionError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.defaultBusinessCentralAutomationApiV20CompaniesApi(
          "/companies({company_id})/users({user_id})/userPermissions",
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
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: companiesApiUsersApiUserPermissionsRequestSchema },
      },
      {
        success: { kind: "json", schema: userPermissionSchema },
        errorFactory: PermissionSets.CreateUserPermissionError,
      },
      options,
    );
  }

  /**
   * List Permission Sets
   *
   * @remarks
   * Returns a list of available permission sets.
   *
   * @returns Successfully retrieved permission sets
   *
   * @throws {@link PermissionSets.ListPermissionSetsError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link Dynamics365BusinessCentralError} when no usable response was produced: a
   * connection failure, a timeout, a body that would not decode, a value that would not encode, or
   * a credential that could not be obtained
   */
  listPermissionSets(
    request: PermissionSets.ListPermissionSetsRequest,
    options?: RequestOptions,
  ): ApiPromise<CompaniesApiPermissionSetsResponse, PermissionSets.ListPermissionSetsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.defaultBusinessCentralAutomationApiV20CompaniesApi(
          "/companies({company_id})/permissionSets",
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
        success: { kind: "json", schema: companiesApiPermissionSetsResponseSchema },
        errorFactory: PermissionSets.ListPermissionSetsError,
      },
      options,
    );
  }

  /**
   * List User Permissions
   *
   * @remarks
   * Returns permission sets assigned to the user.
   *
   * @returns Successfully retrieved user permissions
   *
   * @throws {@link PermissionSets.ListUserPermissionsError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link Dynamics365BusinessCentralError} when no usable response was produced: a
   * connection failure, a timeout, a body that would not decode, a value that would not encode, or
   * a credential that could not be obtained
   */
  listUserPermissions(
    request: PermissionSets.ListUserPermissionsRequest,
    options?: RequestOptions,
  ): ApiPromise<CompaniesApiUsersApiUserPermissionsResponse, PermissionSets.ListUserPermissionsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.defaultBusinessCentralAutomationApiV20CompaniesApi(
          "/companies({company_id})/users({user_id})/userPermissions",
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
        success: { kind: "json", schema: companiesApiUsersApiUserPermissionsResponseSchema },
        errorFactory: PermissionSets.ListUserPermissionsError,
      },
      options,
    );
  }
}

export namespace PermissionSets {
  export type CreateUserPermissionRequest = {
    /** The unique identifier of the company */
    companyId: string;
    /** The user security ID */
    userId: string;
    body: CompaniesApiUsersApiUserPermissionsRequest;
  };

  export class CreateUserPermissionError extends ApiError {
    declare readonly payload: Declared<"errorResponse", ErrorResponse> | Undeclared;

    static readonly errors: ErrorDecoders<CreateUserPermissionError> = [
      { on: 401, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export type ListPermissionSetsRequest = {
    /** The unique identifier of the company */
    companyId: string;
  };

  export class ListPermissionSetsError extends ApiError {
    declare readonly payload: Declared<"errorResponse", ErrorResponse> | Undeclared;

    static readonly errors: ErrorDecoders<ListPermissionSetsError> = [
      { on: 401, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export type ListUserPermissionsRequest = {
    /** The unique identifier of the company */
    companyId: string;
    /** The user security ID */
    userId: string;
  };

  export class ListUserPermissionsError extends ApiError {
    declare readonly payload: Declared<"errorResponse", ErrorResponse> | Undeclared;

    static readonly errors: ErrorDecoders<ListUserPermissionsError> = [
      { on: 401, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }
}
