import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { anyAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import { errorResponseSchema, type ErrorResponse } from "../models/error-response.js";
import {
  publicApiCreateUserGroupRequestDtoSchema,
  type PublicApiCreateUserGroupRequestDto,
} from "../models/public-api-create-user-group-request-dto.js";
import {
  publicApiInviteUserRequestDtoSchema,
  type PublicApiInviteUserRequestDto,
} from "../models/public-api-invite-user-request-dto.js";
import {
  publicApiInviteUserResponseSchema,
  type PublicApiInviteUserResponse,
} from "../models/public-api-invite-user-response.js";
import {
  publicApiUpdateUserGroupRequestDtoSchema,
  type PublicApiUpdateUserGroupRequestDto,
} from "../models/public-api-update-user-group-request-dto.js";
import {
  publicApiUserGroupsResponseSchema,
  type PublicApiUserGroupsResponse,
} from "../models/public-api-user-groups-response.js";
import {
  publicApiUsersResponseSchema,
  type PublicApiUsersResponse,
} from "../models/public-api-users-response.js";
import { userGroupContentDtoSchema, type UserGroupContentDto } from "../models/user-group-content-dto.js";
import type { Servers } from "../servers.js";

/**
 * Soda Cloud API Users Endpoints
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
   * Delete user group
   *
   * @remarks
   * This endpoint enables you to delete an existing user group from your organization's Soda Cloud
   * account.
   *
   * In case of success, the response returns a `200` (OK) response.
   *
   * In case user group is not found, the response returns a `404` (Not found) response.
   *
   * ## Authorization
   *
   * Only users with **Manage organization settings** permission can update user groups.**See Manage
   * global roles for more information.**
   *
   * ## Authentication
   *
   * User authentication required: `true`
   *
   * This endpoint accepts authentication via API keys in the `Basic` authentication header, or a
   * pre-authenticated token in HTTP cookie `token`. Cookie sessions extend automatically on each
   * request.
   *
   * ## Authorization
   *
   * Users must have global role permission MANAGE_ORGANISATION_SETTINGS to execute this call.
   *
   * ## Tags
   *
   * `Users`
   *
   * ## Rate limiting
   *
   * 60 requests/60 seconds
   *
   * @returns Successful response
   *
   * @throws {@link Users.DeleteApiV1UserGroupsUserGroupIdError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link SodaError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  deleteApiV1UserGroupsUserGroupId(
    request: Users.DeleteApiV1UserGroupsUserGroupIdRequest,
    options?: RequestOptions,
  ): ApiPromise<Record<string, unknown>, Users.DeleteApiV1UserGroupsUserGroupIdError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default("/api/v1/userGroups/{userGroupId}"),
        auth: anyAuth(this.#auth.basicAuthApiKey, this.#auth.cookieToken),
        pathParams: [{ name: "userGroupId", value: request.userGroupId, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.record(s.string(), s.unknown()) },
        errorFactory: Users.DeleteApiV1UserGroupsUserGroupIdError,
      },
      options,
    );
  }

  /**
   * Get user groups
   *
   * @remarks
   * This endpoint enables you to gather information about the user groups in your organization's
   * Soda Cloud account, including lists of members.
   *
   * This GET is a paginated API that uses the following parameters to request specific details:
   *
   * - `size`: Supply an integer value between 10 and 1000, inclusive. The default value is 1000.
   *
   * - `page`: Supply an integer value. The default value is 0.
   *
   * - `search`: Optionally, use this parameter to perform a fuzzy search on the user group name.
   *
   * If not specified, the query gathers information for all user groups in the account and sorts
   * the results by user group name in ascending order.
   *
   * ## Authentication
   *
   * User authentication required: `true`
   *
   * This endpoint accepts authentication via API keys in the `Basic` authentication header, or a
   * pre-authenticated token in HTTP cookie `token`. Cookie sessions extend automatically on each
   * request.
   *
   * ## Authorization
   *
   * Any Soda Cloud user in your organization may execute this query.
   *
   * ## Tags
   *
   * `Users`
   *
   * ## Rate limiting
   *
   * 60 requests/60 seconds
   *
   * @returns Successful response
   *
   * @throws {@link Users.GetApiV1UserGroupsError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link SodaError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getApiV1UserGroups(
    request: Users.GetApiV1UserGroupsRequest = {},
    options?: RequestOptions,
  ): ApiPromise<PublicApiUserGroupsResponse, Users.GetApiV1UserGroupsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/v1/userGroups"),
        auth: anyAuth(this.#auth.basicAuthApiKey, this.#auth.cookieToken),
        pathParams: [],
        query: [
          { name: "page", value: request.page, schema: s.optional(s.int()) },
          { name: "search", value: request.search, schema: s.optional(s.string()) },
          { name: "size", value: request.size, schema: s.optional(s.int()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: publicApiUserGroupsResponseSchema },
        errorFactory: Users.GetApiV1UserGroupsError,
      },
      options,
    );
  }

  /**
   * Get user group
   *
   * @remarks
   * This endpoint enables you to gather information about a single user group in your
   * organization's Soda Cloud account, including lists of members.
   *
   * This GET is a non-paginated API that returns a single organization based on its ID.
   *
   * ## Authentication
   *
   * User authentication required: `true`
   *
   * This endpoint accepts authentication via API keys in the `Basic` authentication header, or a
   * pre-authenticated token in HTTP cookie `token`. Cookie sessions extend automatically on each
   * request.
   *
   * ## Authorization
   *
   * Any Soda Cloud user in your organization may execute this query.
   *
   * ## Tags
   *
   * `Users`
   *
   * ## Rate limiting
   *
   * 60 requests/60 seconds
   *
   * @returns Successful response
   *
   * @throws {@link Users.GetApiV1UserGroupsUserGroupIdError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link SodaError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getApiV1UserGroupsUserGroupId(
    request: Users.GetApiV1UserGroupsUserGroupIdRequest,
    options?: RequestOptions,
  ): ApiPromise<UserGroupContentDto, Users.GetApiV1UserGroupsUserGroupIdError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/v1/userGroups/{userGroupId}"),
        auth: anyAuth(this.#auth.basicAuthApiKey, this.#auth.cookieToken),
        pathParams: [{ name: "userGroupId", value: request.userGroupId, schema: s.string() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: userGroupContentDtoSchema },
        errorFactory: Users.GetApiV1UserGroupsUserGroupIdError,
      },
      options,
    );
  }

  /**
   * Get users
   *
   * @remarks
   * This endpoint enables you to gather information about the users in your organization's Soda
   * Cloud account.
   *
   * This GET is a paginated API that uses the following parameters to request specific details:
   *
   * - `size`: Supply an integer value between 1 and 1000, inclusive. The default value is 1000.
   *
   * - `page`: Supply an integer value. The default value is 0.
   *
   * - `search`: Optionally, use this parameter to perform a fuzzy search on the user first name,
   *   last name, or email address.
   *
   * If not specified, the query gathers information for all users in the account and sorts the
   * results by user name in ascending order.
   *
   * ## Authentication
   *
   * User authentication required: `true`
   *
   * This endpoint accepts authentication via API keys in the `Basic` authentication header, or a
   * pre-authenticated token in HTTP cookie `token`. Cookie sessions extend automatically on each
   * request.
   *
   * ## Authorization
   *
   * Any Soda Cloud user in your organization may execute this query.
   *
   * ## Tags
   *
   * `Users`
   *
   * ## Rate limiting
   *
   * 60 requests/60 seconds
   *
   * @returns Successful response
   *
   * @throws {@link Users.GetApiV1UsersError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link SodaError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getApiV1Users(
    request: Users.GetApiV1UsersRequest = {},
    options?: RequestOptions,
  ): ApiPromise<PublicApiUsersResponse, Users.GetApiV1UsersError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/v1/users"),
        auth: anyAuth(this.#auth.basicAuthApiKey, this.#auth.cookieToken),
        pathParams: [],
        query: [
          { name: "page", value: request.page, schema: s.optional(s.int()) },
          { name: "search", value: request.search, schema: s.optional(s.string()) },
          { name: "size", value: request.size, schema: s.optional(s.int()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: publicApiUsersResponseSchema },
        errorFactory: Users.GetApiV1UsersError,
      },
      options,
    );
  }

  /**
   * Create user group
   *
   * @remarks
   * This endpoint enables you to create a new user group in your organization's Soda Cloud account.
   *
   * The Response of this call, when successful, is `201` and contains headers `Location` which is a
   * reference to the newly created User Group.
   *
   * ## Authorization
   *
   * Only users with **Manage organization settings** permission can update user groups.**See Manage
   * global roles for more information.**
   *
   * ## Authentication
   *
   * User authentication required: `true`
   *
   * This endpoint accepts authentication via API keys in the `Basic` authentication header, or a
   * pre-authenticated token in HTTP cookie `token`. Cookie sessions extend automatically on each
   * request.
   *
   * ## Authorization
   *
   * Users must have global role permission MANAGE_ORGANISATION_SETTINGS to execute this call.
   *
   * ## Tags
   *
   * `Users`
   *
   * ## Rate limiting
   *
   * 60 requests/60 seconds
   *
   * @returns Successful response
   *
   * @throws {@link Users.PostApiV1UserGroupsError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link SodaError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  postApiV1UserGroups(
    request: Users.PostApiV1UserGroupsRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, Users.PostApiV1UserGroupsError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/api/v1/userGroups"),
        auth: anyAuth(this.#auth.basicAuthApiKey, this.#auth.cookieToken),
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: publicApiCreateUserGroupRequestDtoSchema },
      },
      {
        success: { kind: "empty" },
        errorFactory: Users.PostApiV1UserGroupsError,
      },
      options,
    );
  }

  /**
   * Update user group
   *
   * @remarks
   * This endpoint enables you to update an existing user group in your organization's Soda Cloud
   * account.
   *
   * The Response of this call, when successful, is `200` and contains updated User Group details.
   *
   * ## Authorization
   *
   * Only users with **Manage organization settings** permission can update user groups.**See Manage
   * global roles for more information.**
   *
   * ## Authentication
   *
   * User authentication required: `true`
   *
   * This endpoint accepts authentication via API keys in the `Basic` authentication header, or a
   * pre-authenticated token in HTTP cookie `token`. Cookie sessions extend automatically on each
   * request.
   *
   * ## Authorization
   *
   * Users must have global role permission MANAGE_ORGANISATION_SETTINGS to execute this call.
   *
   * ## Tags
   *
   * `Users`
   *
   * ## Rate limiting
   *
   * 60 requests/60 seconds
   *
   * @returns Successful response
   *
   * @throws {@link Users.PostApiV1UserGroupsUserGroupIdError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link SodaError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  postApiV1UserGroupsUserGroupId(
    request: Users.PostApiV1UserGroupsUserGroupIdRequest,
    options?: RequestOptions,
  ): ApiPromise<UserGroupContentDto, Users.PostApiV1UserGroupsUserGroupIdError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/api/v1/userGroups/{userGroupId}"),
        auth: anyAuth(this.#auth.basicAuthApiKey, this.#auth.cookieToken),
        pathParams: [{ name: "userGroupId", value: request.userGroupId, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: publicApiUpdateUserGroupRequestDtoSchema },
      },
      {
        success: { kind: "json", schema: userGroupContentDtoSchema },
        errorFactory: Users.PostApiV1UserGroupsUserGroupIdError,
      },
      options,
    );
  }

  /**
   * Invite users
   *
   * @remarks
   * This endpoint enables you to invite users to your organization's Soda Cloud account.
   *
   * Invited users will receive an email with a link to set their password and join your
   * organization in Soda Cloud. Once they complete the setup, they will have access to Soda Cloud
   * based on the roles and permissions you assign.
   *
   * If your organization is using SSO, invited users will receive an invitation email with a link
   * to Soda Cloud. When they log in using SSO, they are immediately added to the Soda Cloud
   * organization.
   *
   * You can invite up to 10 users per request. The response contains lists of successful and failed
   * invitations.
   *
   * ## Authentication
   *
   * User authentication required: `true`
   *
   * This endpoint accepts authentication via API keys in the `Basic` authentication header, or a
   * pre-authenticated token in HTTP cookie `token`. Cookie sessions extend automatically on each
   * request.
   *
   * ## Authorization
   *
   * Users must have global role permission MANAGE_ORGANISATION_SETTINGS to execute this call.
   *
   * ## Tags
   *
   * `Users`
   *
   * ## Rate limiting
   *
   * 10 requests/60 seconds
   *
   * @returns Successful response
   *
   * @throws {@link Users.PostApiV1UsersError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link SodaError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  postApiV1Users(
    request: Users.PostApiV1UsersRequest,
    options?: RequestOptions,
  ): ApiPromise<PublicApiInviteUserResponse, Users.PostApiV1UsersError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/api/v1/users"),
        auth: anyAuth(this.#auth.basicAuthApiKey, this.#auth.cookieToken),
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: publicApiInviteUserRequestDtoSchema },
      },
      {
        success: { kind: "json", schema: publicApiInviteUserResponseSchema },
        errorFactory: Users.PostApiV1UsersError,
      },
      options,
    );
  }

  /**
   * Disable user
   *
   * @remarks
   * This endpoint disables a user in your organization's Soda Cloud account.
   *
   * Disabling a user deactivates their membership in the organization. The user is not deleted and
   * can be reactivated later.
   *
   * Users in SSO-enabled organizations cannot be disabled via this endpoint, as they are managed by
   * the identity provider.
   *
   * ## Authentication
   *
   * User authentication required: `true`
   *
   * This endpoint accepts authentication via API keys in the `Basic` authentication header, or a
   * pre-authenticated token in HTTP cookie `token`. Cookie sessions extend automatically on each
   * request.
   *
   * ## Authorization
   *
   * Users must have global role permission MANAGE_ORGANISATION_SETTINGS to execute this call.
   *
   * ## Tags
   *
   * `Users`
   *
   * ## Rate limiting
   *
   * 60 requests/60 seconds
   *
   * @returns Successful response
   *
   * @throws {@link Users.PostApiV1UsersUserIdDisableError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link SodaError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  postApiV1UsersUserIdDisable(
    request: Users.PostApiV1UsersUserIdDisableRequest,
    options?: RequestOptions,
  ): ApiPromise<Record<string, unknown>, Users.PostApiV1UsersUserIdDisableError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/api/v1/users/{userId}/disable"),
        auth: anyAuth(this.#auth.basicAuthApiKey, this.#auth.cookieToken),
        pathParams: [{ name: "userId", value: request.userId, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.record(s.string(), s.unknown()) },
        errorFactory: Users.PostApiV1UsersUserIdDisableError,
      },
      options,
    );
  }
}

export namespace Users {
  export type DeleteApiV1UserGroupsUserGroupIdRequest = {
    userGroupId: string;
  };

  export class DeleteApiV1UserGroupsUserGroupIdError extends ApiError {
    declare readonly payload:
      | Declared<"errorResponse", ErrorResponse>
      | Declared<"errorResponse2", ErrorResponse>
      | Declared<"errorResponse3", ErrorResponse>
      | Declared<"errorResponse4", ErrorResponse>
      | Declared<"errorResponse5", ErrorResponse>
      | Declared<"errorResponse6", ErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<DeleteApiV1UserGroupsUserGroupIdError> = [
      { on: 400, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 401, kind: "errorResponse2", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 403, kind: "errorResponse3", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 404, kind: "errorResponse4", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 429, kind: "errorResponse5", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 500, kind: "errorResponse6", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export type GetApiV1UserGroupsRequest = {
    page?: number;
    search?: string;
    size?: number;
  };

  export class GetApiV1UserGroupsError extends ApiError {
    declare readonly payload:
      | Declared<"errorResponse", ErrorResponse>
      | Declared<"errorResponse2", ErrorResponse>
      | Declared<"errorResponse3", ErrorResponse>
      | Declared<"errorResponse4", ErrorResponse>
      | Declared<"errorResponse5", ErrorResponse>
      | Declared<"errorResponse6", ErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetApiV1UserGroupsError> = [
      { on: 400, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 401, kind: "errorResponse2", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 403, kind: "errorResponse3", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 404, kind: "errorResponse4", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 429, kind: "errorResponse5", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 500, kind: "errorResponse6", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export type GetApiV1UserGroupsUserGroupIdRequest = {
    userGroupId: string;
  };

  export class GetApiV1UserGroupsUserGroupIdError extends ApiError {
    declare readonly payload:
      | Declared<"errorResponse", ErrorResponse>
      | Declared<"errorResponse2", ErrorResponse>
      | Declared<"errorResponse3", ErrorResponse>
      | Declared<"errorResponse4", ErrorResponse>
      | Declared<"errorResponse5", ErrorResponse>
      | Declared<"errorResponse6", ErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetApiV1UserGroupsUserGroupIdError> = [
      { on: 400, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 401, kind: "errorResponse2", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 403, kind: "errorResponse3", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 404, kind: "errorResponse4", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 429, kind: "errorResponse5", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 500, kind: "errorResponse6", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export type GetApiV1UsersRequest = {
    page?: number;
    search?: string;
    size?: number;
  };

  export class GetApiV1UsersError extends ApiError {
    declare readonly payload:
      | Declared<"errorResponse", ErrorResponse>
      | Declared<"errorResponse2", ErrorResponse>
      | Declared<"errorResponse3", ErrorResponse>
      | Declared<"errorResponse4", ErrorResponse>
      | Declared<"errorResponse5", ErrorResponse>
      | Declared<"errorResponse6", ErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetApiV1UsersError> = [
      { on: 400, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 401, kind: "errorResponse2", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 403, kind: "errorResponse3", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 404, kind: "errorResponse4", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 429, kind: "errorResponse5", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 500, kind: "errorResponse6", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export type PostApiV1UserGroupsRequest = {
    body: PublicApiCreateUserGroupRequestDto;
  };

  export class PostApiV1UserGroupsError extends ApiError {
    declare readonly payload:
      | Declared<"errorResponse", ErrorResponse>
      | Declared<"errorResponse2", ErrorResponse>
      | Declared<"errorResponse3", ErrorResponse>
      | Declared<"errorResponse4", ErrorResponse>
      | Declared<"errorResponse5", ErrorResponse>
      | Declared<"errorResponse6", ErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<PostApiV1UserGroupsError> = [
      { on: 400, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 401, kind: "errorResponse2", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 403, kind: "errorResponse3", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 404, kind: "errorResponse4", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 429, kind: "errorResponse5", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 500, kind: "errorResponse6", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export type PostApiV1UserGroupsUserGroupIdRequest = {
    userGroupId: string;
    body: PublicApiUpdateUserGroupRequestDto;
  };

  export class PostApiV1UserGroupsUserGroupIdError extends ApiError {
    declare readonly payload:
      | Declared<"errorResponse", ErrorResponse>
      | Declared<"errorResponse2", ErrorResponse>
      | Declared<"errorResponse3", ErrorResponse>
      | Declared<"errorResponse4", ErrorResponse>
      | Declared<"errorResponse5", ErrorResponse>
      | Declared<"errorResponse6", ErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<PostApiV1UserGroupsUserGroupIdError> = [
      { on: 400, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 401, kind: "errorResponse2", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 403, kind: "errorResponse3", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 404, kind: "errorResponse4", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 429, kind: "errorResponse5", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 500, kind: "errorResponse6", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export type PostApiV1UsersRequest = {
    body: PublicApiInviteUserRequestDto;
  };

  export class PostApiV1UsersError extends ApiError {
    declare readonly payload:
      | Declared<"errorResponse", ErrorResponse>
      | Declared<"errorResponse2", ErrorResponse>
      | Declared<"errorResponse3", ErrorResponse>
      | Declared<"errorResponse4", ErrorResponse>
      | Declared<"errorResponse5", ErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<PostApiV1UsersError> = [
      { on: 400, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 401, kind: "errorResponse2", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 403, kind: "errorResponse3", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 429, kind: "errorResponse4", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 500, kind: "errorResponse5", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export type PostApiV1UsersUserIdDisableRequest = {
    userId: string;
  };

  export class PostApiV1UsersUserIdDisableError extends ApiError {
    declare readonly payload:
      | Declared<"errorResponse", ErrorResponse>
      | Declared<"errorResponse2", ErrorResponse>
      | Declared<"errorResponse3", ErrorResponse>
      | Declared<"errorResponse4", ErrorResponse>
      | Declared<"errorResponse5", ErrorResponse>
      | Declared<"errorResponse6", ErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<PostApiV1UsersUserIdDisableError> = [
      { on: 400, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 401, kind: "errorResponse2", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 403, kind: "errorResponse3", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 404, kind: "errorResponse4", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 429, kind: "errorResponse5", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 500, kind: "errorResponse6", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }
}
