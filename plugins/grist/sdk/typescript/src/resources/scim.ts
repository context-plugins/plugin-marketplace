import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import { gristErrorSchema, type GristError } from "../models/grist-error.js";
import { scimV2BulkResponseSchema, type ScimV2BulkResponse } from "../models/unions/scim-v2-bulk-response.js";
import {
  scimV2ResourceTypesResponseSchema,
  type ScimV2ResourceTypesResponse,
} from "../models/unions/scim-v2-resource-types-response.js";
import {
  scimV2SchemasResponseSchema,
  type ScimV2SchemasResponse,
} from "../models/unions/scim-v2-schemas-response.js";
import {
  scimV2ServiceProviderConfigResponseSchema,
  type ScimV2ServiceProviderConfigResponse,
} from "../models/unions/scim-v2-service-provider-config-response.js";
import type { Servers } from "../servers.js";

/**
 * SCIM
 */
export class Scim {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Bulk operation
   *
   * @returns Bulk operations executed successfully.
   *
   * @throws {@link Scim.BulkOperationError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link GristApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  bulkOperation(options?: RequestOptions): ApiPromise<ScimV2BulkResponse, Scim.BulkOperationError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/scim/v2/Bulk"),
        auth: this.#auth.apiKey,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: scimV2BulkResponseSchema },
        errorFactory: Scim.BulkOperationError,
      },
      options,
    );
  }

  /**
   * Create a new group
   *
   * @returns Group created successfully.
   *
   * @throws {@link Scim.CreateGroupError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link GristApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  createGroup(options?: RequestOptions): ApiPromise<undefined, Scim.CreateGroupError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/scim/v2/Groups"),
        auth: this.#auth.apiKey,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: Scim.CreateGroupError,
      },
      options,
    );
  }

  /**
   * Create a new user
   *
   * @returns User created successfully.
   *
   * @throws {@link Scim.CreateUserError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link GristApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  createUser(options?: RequestOptions): ApiPromise<undefined, Scim.CreateUserError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/scim/v2/Users"),
        auth: this.#auth.apiKey,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: Scim.CreateUserError,
      },
      options,
    );
  }

  /**
   * Delete a group by ID.
   *
   * @remarks
   * ⚠️ **This action cannot be undone, please be cautious when using this endpoint** ⚠️
   *
   * @returns Group deleted successfully.
   *
   * @throws {@link Scim.DeleteGroupByIdError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link GristApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  deleteGroupById(
    request: Scim.DeleteGroupByIdRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, Scim.DeleteGroupByIdError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default("/scim/v2/Groups/{groupId}"),
        auth: this.#auth.apiKey,
        pathParams: [{ name: "groupId", value: request.groupId, schema: s.int() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: Scim.DeleteGroupByIdError,
      },
      options,
    );
  }

  /**
   * Delete a user by ID.
   *
   * @remarks
   * ⚠️ **This action cannot be undone, please be cautious when using this endpoint** ⚠️
   *
   * @returns User deleted successfully.
   *
   * @throws {@link Scim.DeleteUserByIdError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link GristApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  deleteUserById(
    request: Scim.DeleteUserByIdRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, Scim.DeleteUserByIdError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default("/scim/v2/Users/{userId}"),
        auth: this.#auth.apiKey,
        pathParams: [{ name: "userId", value: request.userId, schema: s.int() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: Scim.DeleteUserByIdError,
      },
      options,
    );
  }

  /**
   * Retrieve group by ID
   *
   * @returns Successfully retrieved group details.
   *
   * @throws {@link Scim.GetGroupByIdError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link GristApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getGroupById(
    request: Scim.GetGroupByIdRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, Scim.GetGroupByIdError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/scim/v2/Groups/{groupId}"),
        auth: this.#auth.apiKey,
        pathParams: [{ name: "groupId", value: request.groupId, schema: s.int() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: Scim.GetGroupByIdError,
      },
      options,
    );
  }

  /**
   * Retrieve list of groups
   *
   * @returns Successfully retrieved list of groups.
   *
   * @throws {@link Scim.GetGroupsError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link GristApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getGroups(
    request: Scim.GetGroupsRequest = {},
    options?: RequestOptions,
  ): ApiPromise<undefined, Scim.GetGroupsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/scim/v2/Groups"),
        auth: this.#auth.apiKey,
        pathParams: [],
        query: [
          { name: "startIndex", value: request.startIndex, schema: s.optional(s.int()) },
          { name: "count", value: request.count, schema: s.optional(s.int()) },
          { name: "filter", value: request.filter, schema: s.optional(s.string()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: Scim.GetGroupsError,
      },
      options,
    );
  }

  /**
   * Retrieve information about oneself
   *
   * @remarks
   * When SCIM is enabled, this endpoint is accessible by anyone authentified in Grist.
   *
   * @returns Successfully retrieved user details.
   *
   * @throws {@link Scim.GetMeError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link GristApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getMe(options?: RequestOptions): ApiPromise<undefined, Scim.GetMeError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/scim/v2/Me"),
        auth: this.#auth.apiKey,
        pathParams: [],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: Scim.GetMeError,
      },
      options,
    );
  }

  /**
   * Retrieve SCIM resource types
   *
   * @returns Successfully retrieved resource types.
   *
   * @throws {@link Scim.GetResourceTypesError} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link GristApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getResourceTypes(
    options?: RequestOptions,
  ): ApiPromise<ScimV2ResourceTypesResponse, Scim.GetResourceTypesError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/scim/v2/ResourceTypes"),
        auth: this.#auth.apiKey,
        pathParams: [],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: scimV2ResourceTypesResponseSchema },
        errorFactory: Scim.GetResourceTypesError,
      },
      options,
    );
  }

  /**
   * Retrieve role by ID
   *
   * @returns Successfully retrieved role details.
   *
   * @throws {@link Scim.GetRoleByIdError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link GristApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getRoleById(
    request: Scim.GetRoleByIdRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, Scim.GetRoleByIdError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/scim/v2/Roles/{roleId}"),
        auth: this.#auth.apiKey,
        pathParams: [{ name: "roleId", value: request.roleId, schema: s.int() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: Scim.GetRoleByIdError,
      },
      options,
    );
  }

  /**
   * Retrieve list of roles.
   *
   * @remarks
   * Roles are system-defined entities giving particular permissions to a given resource (document,
   * workspace or organization). This API returns by default all these roles associated to all the
   * resources. You may use the parameters to filter the results.
   *
   * @returns Successfully retrieved list of roles.
   *
   * @throws {@link Scim.GetRolesError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link GristApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getRoles(
    request: Scim.GetRolesRequest = {},
    options?: RequestOptions,
  ): ApiPromise<undefined, Scim.GetRolesError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/scim/v2/Roles"),
        auth: this.#auth.apiKey,
        pathParams: [],
        query: [
          { name: "startIndex", value: request.startIndex, schema: s.optional(s.int()) },
          { name: "count", value: request.count, schema: s.optional(s.int()) },
          { name: "filter", value: request.filter, schema: s.optional(s.string()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: Scim.GetRolesError,
      },
      options,
    );
  }

  /**
   * Retrieve SCIM schemas
   *
   * @returns Successfully retrieved schemas.
   *
   * @throws {@link Scim.GetSchemasError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link GristApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getSchemas(options?: RequestOptions): ApiPromise<ScimV2SchemasResponse, Scim.GetSchemasError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/scim/v2/Schemas"),
        auth: this.#auth.apiKey,
        pathParams: [],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: scimV2SchemasResponseSchema },
        errorFactory: Scim.GetSchemasError,
      },
      options,
    );
  }

  /**
   * Retrieve service provider configuration
   *
   * @returns Successfully retrieved service provider configuration.
   *
   * @throws {@link Scim.GetServiceProviderConfigError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link GristApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getServiceProviderConfig(
    options?: RequestOptions,
  ): ApiPromise<ScimV2ServiceProviderConfigResponse, Scim.GetServiceProviderConfigError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/scim/v2/ServiceProviderConfig"),
        auth: this.#auth.apiKey,
        pathParams: [],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: scimV2ServiceProviderConfigResponseSchema },
        errorFactory: Scim.GetServiceProviderConfigError,
      },
      options,
    );
  }

  /**
   * Retrieve user by ID
   *
   * @returns Successfully retrieved user details.
   *
   * @throws {@link Scim.GetUserByIdError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link GristApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getUserById(
    request: Scim.GetUserByIdRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, Scim.GetUserByIdError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/scim/v2/Users/{userId}"),
        auth: this.#auth.apiKey,
        pathParams: [{ name: "userId", value: request.userId, schema: s.int() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: Scim.GetUserByIdError,
      },
      options,
    );
  }

  /**
   * Retrieve list of users
   *
   * @returns Successfully retrieved list of users.
   *
   * @throws {@link Scim.GetUsersError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link GristApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getUsers(
    request: Scim.GetUsersRequest = {},
    options?: RequestOptions,
  ): ApiPromise<undefined, Scim.GetUsersError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/scim/v2/Users"),
        auth: this.#auth.apiKey,
        pathParams: [],
        query: [
          { name: "startIndex", value: request.startIndex, schema: s.optional(s.int()) },
          { name: "count", value: request.count, schema: s.optional(s.int()) },
          { name: "filter", value: request.filter, schema: s.optional(s.string()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: Scim.GetUsersError,
      },
      options,
    );
  }

  /**
   * Partially update a group by ID
   *
   * @returns Group partially updated successfully.
   *
   * @throws {@link Scim.PatchGroupByIdError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link GristApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  patchGroupById(
    request: Scim.PatchGroupByIdRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, Scim.PatchGroupByIdError> {
    return this.#rawClient.execute(
      {
        method: "PATCH",
        urlTemplate: this.#servers.default("/scim/v2/Groups/{groupId}"),
        auth: this.#auth.apiKey,
        pathParams: [{ name: "groupId", value: request.groupId, schema: s.int() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: Scim.PatchGroupByIdError,
      },
      options,
    );
  }

  /**
   * Partially update a role by ID
   *
   * @remarks
   * Only the memberships are authorized to be modified through this endpoint, other properties will
   * be ignored.
   *
   * @returns Role partially updated successfully.
   *
   * @throws {@link Scim.PatchRoleByIdError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link GristApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  patchRoleById(
    request: Scim.PatchRoleByIdRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, Scim.PatchRoleByIdError> {
    return this.#rawClient.execute(
      {
        method: "PATCH",
        urlTemplate: this.#servers.default("/scim/v2/Roles/{roleId}"),
        auth: this.#auth.apiKey,
        pathParams: [{ name: "roleId", value: request.roleId, schema: s.int() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: Scim.PatchRoleByIdError,
      },
      options,
    );
  }

  /**
   * Partially update a user by ID
   *
   * @returns User partially updated successfully.
   *
   * @throws {@link Scim.PatchUserByIdError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link GristApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  patchUserById(
    request: Scim.PatchUserByIdRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, Scim.PatchUserByIdError> {
    return this.#rawClient.execute(
      {
        method: "PATCH",
        urlTemplate: this.#servers.default("/scim/v2/Users/{userId}"),
        auth: this.#auth.apiKey,
        pathParams: [{ name: "userId", value: request.userId, schema: s.int() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: Scim.PatchUserByIdError,
      },
      options,
    );
  }

  /**
   * Search groups
   *
   * @returns Groups retrieved based on search criteria.
   *
   * @throws {@link Scim.SearchGroupsError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link GristApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  searchGroups(options?: RequestOptions): ApiPromise<undefined, Scim.SearchGroupsError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/scim/v2/Groups/.search"),
        auth: this.#auth.apiKey,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: Scim.SearchGroupsError,
      },
      options,
    );
  }

  /**
   * Search users
   *
   * @returns Users retrieved based on search criteria.
   *
   * @throws {@link Scim.SearchUsersError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link GristApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  searchUsers(options?: RequestOptions): ApiPromise<undefined, Scim.SearchUsersError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/scim/v2/Users/.search"),
        auth: this.#auth.apiKey,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: Scim.SearchUsersError,
      },
      options,
    );
  }

  /**
   * Update a group by ID
   *
   * @remarks
   * ⚠️ This operation overwrites all the group's information. In order to pass only some properties
   * to update, please use [PATCH](#tag/scim/operation/patchGroupById) instead.
   *
   * @returns Group updated successfully.
   *
   * @throws {@link Scim.UpdateGroupByIdError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link GristApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  updateGroupById(
    request: Scim.UpdateGroupByIdRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, Scim.UpdateGroupByIdError> {
    return this.#rawClient.execute(
      {
        method: "PUT",
        urlTemplate: this.#servers.default("/scim/v2/Groups/{groupId}"),
        auth: this.#auth.apiKey,
        pathParams: [{ name: "groupId", value: request.groupId, schema: s.int() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: Scim.UpdateGroupByIdError,
      },
      options,
    );
  }

  /**
   * Update a role by ID
   *
   * @remarks
   * ⚠️ This operation overwrites all the memberships (the "members" property). In order to update
   * part of the membership, please use [PATCH](#tag/scim/operation/patchRoleById) instead. Only the
   * memberships are authorized to be modified through this endpoint, other properties will be
   * ignored.
   *
   * @returns Role updated successfully.
   *
   * @throws {@link Scim.UpdateRoleByIdError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link GristApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  updateRoleById(
    request: Scim.UpdateRoleByIdRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, Scim.UpdateRoleByIdError> {
    return this.#rawClient.execute(
      {
        method: "PUT",
        urlTemplate: this.#servers.default("/scim/v2/Roles/{roleId}"),
        auth: this.#auth.apiKey,
        pathParams: [{ name: "roleId", value: request.roleId, schema: s.int() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: Scim.UpdateRoleByIdError,
      },
      options,
    );
  }

  /**
   * Update a user by ID
   *
   * @remarks
   * ⚠️ This operation overwrites all the user's information. In order to pass only some properties
   * to update, please use [PATCH](#tag/scim/operation/patchUserById) instead.
   *
   * @returns User updated successfully.
   *
   * @throws {@link Scim.UpdateUserByIdError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link GristApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  updateUserById(
    request: Scim.UpdateUserByIdRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, Scim.UpdateUserByIdError> {
    return this.#rawClient.execute(
      {
        method: "PUT",
        urlTemplate: this.#servers.default("/scim/v2/Users/{userId}"),
        auth: this.#auth.apiKey,
        pathParams: [{ name: "userId", value: request.userId, schema: s.int() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: Scim.UpdateUserByIdError,
      },
      options,
    );
  }
}

export namespace Scim {
  export class BulkOperationError extends ApiError {
    declare readonly payload:
      | Declared<"gristError", GristError>
      | Declared<"error500", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<BulkOperationError> = [
      { on: 400, kind: "gristError", decode: { kind: "json", schema: gristErrorSchema } },
      { on: 500, kind: "error500", decode: { kind: "empty" } },
    ];
  }

  export class CreateGroupError extends ApiError {
    declare readonly payload:
      | Declared<"gristError", GristError>
      | Declared<"gristError2", GristError>
      | Declared<"gristError3", GristError>
      | Declared<"gristError4", GristError>
      | Declared<"error500", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<CreateGroupError> = [
      { on: 400, kind: "gristError", decode: { kind: "json", schema: gristErrorSchema } },
      { on: 401, kind: "gristError2", decode: { kind: "json", schema: gristErrorSchema } },
      { on: 403, kind: "gristError3", decode: { kind: "json", schema: gristErrorSchema } },
      { on: 409, kind: "gristError4", decode: { kind: "json", schema: gristErrorSchema } },
      { on: 500, kind: "error500", decode: { kind: "empty" } },
    ];
  }

  export class CreateUserError extends ApiError {
    declare readonly payload:
      | Declared<"gristError", GristError>
      | Declared<"gristError2", GristError>
      | Declared<"gristError3", GristError>
      | Declared<"gristError4", GristError>
      | Declared<"error500", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<CreateUserError> = [
      { on: 400, kind: "gristError", decode: { kind: "json", schema: gristErrorSchema } },
      { on: 401, kind: "gristError2", decode: { kind: "json", schema: gristErrorSchema } },
      { on: 403, kind: "gristError3", decode: { kind: "json", schema: gristErrorSchema } },
      { on: 409, kind: "gristError4", decode: { kind: "json", schema: gristErrorSchema } },
      { on: 500, kind: "error500", decode: { kind: "empty" } },
    ];
  }

  export type DeleteGroupByIdRequest = {
    /** A group id */
    groupId: number;
  };

  export class DeleteGroupByIdError extends ApiError {
    declare readonly payload:
      | Declared<"gristError", GristError>
      | Declared<"gristError2", GristError>
      | Declared<"gristError3", GristError>
      | Declared<"error500", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<DeleteGroupByIdError> = [
      { on: 401, kind: "gristError", decode: { kind: "json", schema: gristErrorSchema } },
      { on: 403, kind: "gristError2", decode: { kind: "json", schema: gristErrorSchema } },
      { on: 404, kind: "gristError3", decode: { kind: "json", schema: gristErrorSchema } },
      { on: 500, kind: "error500", decode: { kind: "empty" } },
    ];
  }

  export type DeleteUserByIdRequest = {
    /** A user id */
    userId: number;
  };

  export class DeleteUserByIdError extends ApiError {
    declare readonly payload:
      | Declared<"gristError", GristError>
      | Declared<"gristError2", GristError>
      | Declared<"gristError3", GristError>
      | Declared<"error500", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<DeleteUserByIdError> = [
      { on: 401, kind: "gristError", decode: { kind: "json", schema: gristErrorSchema } },
      { on: 403, kind: "gristError2", decode: { kind: "json", schema: gristErrorSchema } },
      { on: 404, kind: "gristError3", decode: { kind: "json", schema: gristErrorSchema } },
      { on: 500, kind: "error500", decode: { kind: "empty" } },
    ];
  }

  export type GetGroupByIdRequest = {
    /** A group id */
    groupId: number;
  };

  export class GetGroupByIdError extends ApiError {
    declare readonly payload:
      | Declared<"gristError", GristError>
      | Declared<"gristError2", GristError>
      | Declared<"gristError3", GristError>
      | Declared<"error500", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetGroupByIdError> = [
      { on: 401, kind: "gristError", decode: { kind: "json", schema: gristErrorSchema } },
      { on: 403, kind: "gristError2", decode: { kind: "json", schema: gristErrorSchema } },
      { on: 404, kind: "gristError3", decode: { kind: "json", schema: gristErrorSchema } },
      { on: 500, kind: "error500", decode: { kind: "empty" } },
    ];
  }

  export type GetGroupsRequest = {
    /** The starting index for pagination. */
    startIndex?: number;
    /** The number of resources to retrieve. */
    count?: number;
    /** Filter resources based on specific criteria. */
    filter?: string;
  };

  export class GetGroupsError extends ApiError {
    declare readonly payload:
      | Declared<"gristError", GristError>
      | Declared<"gristError2", GristError>
      | Declared<"error500", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetGroupsError> = [
      { on: 401, kind: "gristError", decode: { kind: "json", schema: gristErrorSchema } },
      { on: 403, kind: "gristError2", decode: { kind: "json", schema: gristErrorSchema } },
      { on: 500, kind: "error500", decode: { kind: "empty" } },
    ];
  }

  export class GetMeError extends ApiError {
    declare readonly payload:
      | Declared<"gristError", GristError>
      | Declared<"gristError2", GristError>
      | Declared<"gristError3", GristError>
      | Declared<"error500", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetMeError> = [
      { on: 401, kind: "gristError", decode: { kind: "json", schema: gristErrorSchema } },
      { on: 403, kind: "gristError2", decode: { kind: "json", schema: gristErrorSchema } },
      { on: 404, kind: "gristError3", decode: { kind: "json", schema: gristErrorSchema } },
      { on: 500, kind: "error500", decode: { kind: "empty" } },
    ];
  }

  export class GetResourceTypesError extends ApiError {
    declare readonly payload:
      | Declared<"gristError", GristError>
      | Declared<"error500", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetResourceTypesError> = [
      { on: 401, kind: "gristError", decode: { kind: "json", schema: gristErrorSchema } },
      { on: 500, kind: "error500", decode: { kind: "empty" } },
    ];
  }

  export type GetRoleByIdRequest = {
    /** A role id */
    roleId: number;
  };

  export class GetRoleByIdError extends ApiError {
    declare readonly payload:
      | Declared<"gristError", GristError>
      | Declared<"gristError2", GristError>
      | Declared<"gristError3", GristError>
      | Declared<"error500", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetRoleByIdError> = [
      { on: 401, kind: "gristError", decode: { kind: "json", schema: gristErrorSchema } },
      { on: 403, kind: "gristError2", decode: { kind: "json", schema: gristErrorSchema } },
      { on: 404, kind: "gristError3", decode: { kind: "json", schema: gristErrorSchema } },
      { on: 500, kind: "error500", decode: { kind: "empty" } },
    ];
  }

  export type GetRolesRequest = {
    /** The starting index for pagination. */
    startIndex?: number;
    /** The number of resources to retrieve. */
    count?: number;
    /** Filter resources based on specific criteria. */
    filter?: string;
  };

  export class GetRolesError extends ApiError {
    declare readonly payload:
      | Declared<"gristError", GristError>
      | Declared<"gristError2", GristError>
      | Declared<"error500", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetRolesError> = [
      { on: 401, kind: "gristError", decode: { kind: "json", schema: gristErrorSchema } },
      { on: 403, kind: "gristError2", decode: { kind: "json", schema: gristErrorSchema } },
      { on: 500, kind: "error500", decode: { kind: "empty" } },
    ];
  }

  export class GetSchemasError extends ApiError {
    declare readonly payload:
      | Declared<"gristError", GristError>
      | Declared<"error500", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetSchemasError> = [
      { on: 401, kind: "gristError", decode: { kind: "json", schema: gristErrorSchema } },
      { on: 500, kind: "error500", decode: { kind: "empty" } },
    ];
  }

  export class GetServiceProviderConfigError extends ApiError {
    declare readonly payload:
      | Declared<"gristError", GristError>
      | Declared<"error500", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetServiceProviderConfigError> = [
      { on: 401, kind: "gristError", decode: { kind: "json", schema: gristErrorSchema } },
      { on: 500, kind: "error500", decode: { kind: "empty" } },
    ];
  }

  export type GetUserByIdRequest = {
    /** A user id */
    userId: number;
  };

  export class GetUserByIdError extends ApiError {
    declare readonly payload:
      | Declared<"gristError", GristError>
      | Declared<"gristError2", GristError>
      | Declared<"gristError3", GristError>
      | Declared<"error500", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetUserByIdError> = [
      { on: 401, kind: "gristError", decode: { kind: "json", schema: gristErrorSchema } },
      { on: 403, kind: "gristError2", decode: { kind: "json", schema: gristErrorSchema } },
      { on: 404, kind: "gristError3", decode: { kind: "json", schema: gristErrorSchema } },
      { on: 500, kind: "error500", decode: { kind: "empty" } },
    ];
  }

  export type GetUsersRequest = {
    /** The starting index for pagination. */
    startIndex?: number;
    /** The number of resources to retrieve. */
    count?: number;
    /** Filter resources based on specific criteria. */
    filter?: string;
  };

  export class GetUsersError extends ApiError {
    declare readonly payload:
      | Declared<"gristError", GristError>
      | Declared<"gristError2", GristError>
      | Declared<"error500", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetUsersError> = [
      { on: 401, kind: "gristError", decode: { kind: "json", schema: gristErrorSchema } },
      { on: 403, kind: "gristError2", decode: { kind: "json", schema: gristErrorSchema } },
      { on: 500, kind: "error500", decode: { kind: "empty" } },
    ];
  }

  export type PatchGroupByIdRequest = {
    /** A group id */
    groupId: number;
  };

  export class PatchGroupByIdError extends ApiError {
    declare readonly payload:
      | Declared<"gristError", GristError>
      | Declared<"gristError2", GristError>
      | Declared<"gristError3", GristError>
      | Declared<"gristError4", GristError>
      | Declared<"gristError5", GristError>
      | Declared<"error500", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<PatchGroupByIdError> = [
      { on: 400, kind: "gristError", decode: { kind: "json", schema: gristErrorSchema } },
      { on: 401, kind: "gristError2", decode: { kind: "json", schema: gristErrorSchema } },
      { on: 403, kind: "gristError3", decode: { kind: "json", schema: gristErrorSchema } },
      { on: 404, kind: "gristError4", decode: { kind: "json", schema: gristErrorSchema } },
      { on: 409, kind: "gristError5", decode: { kind: "json", schema: gristErrorSchema } },
      { on: 500, kind: "error500", decode: { kind: "empty" } },
    ];
  }

  export type PatchRoleByIdRequest = {
    /** A role id */
    roleId: number;
  };

  export class PatchRoleByIdError extends ApiError {
    declare readonly payload:
      | Declared<"gristError", GristError>
      | Declared<"gristError2", GristError>
      | Declared<"gristError3", GristError>
      | Declared<"gristError4", GristError>
      | Declared<"gristError5", GristError>
      | Declared<"error500", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<PatchRoleByIdError> = [
      { on: 400, kind: "gristError", decode: { kind: "json", schema: gristErrorSchema } },
      { on: 401, kind: "gristError2", decode: { kind: "json", schema: gristErrorSchema } },
      { on: 403, kind: "gristError3", decode: { kind: "json", schema: gristErrorSchema } },
      { on: 404, kind: "gristError4", decode: { kind: "json", schema: gristErrorSchema } },
      { on: 409, kind: "gristError5", decode: { kind: "json", schema: gristErrorSchema } },
      { on: 500, kind: "error500", decode: { kind: "empty" } },
    ];
  }

  export type PatchUserByIdRequest = {
    /** A user id */
    userId: number;
  };

  export class PatchUserByIdError extends ApiError {
    declare readonly payload:
      | Declared<"gristError", GristError>
      | Declared<"gristError2", GristError>
      | Declared<"gristError3", GristError>
      | Declared<"gristError4", GristError>
      | Declared<"gristError5", GristError>
      | Declared<"error500", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<PatchUserByIdError> = [
      { on: 400, kind: "gristError", decode: { kind: "json", schema: gristErrorSchema } },
      { on: 401, kind: "gristError2", decode: { kind: "json", schema: gristErrorSchema } },
      { on: 403, kind: "gristError3", decode: { kind: "json", schema: gristErrorSchema } },
      { on: 404, kind: "gristError4", decode: { kind: "json", schema: gristErrorSchema } },
      { on: 409, kind: "gristError5", decode: { kind: "json", schema: gristErrorSchema } },
      { on: 500, kind: "error500", decode: { kind: "empty" } },
    ];
  }

  export class SearchGroupsError extends ApiError {
    declare readonly payload:
      | Declared<"gristError", GristError>
      | Declared<"gristError2", GristError>
      | Declared<"gristError3", GristError>
      | Declared<"error500", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<SearchGroupsError> = [
      { on: 400, kind: "gristError", decode: { kind: "json", schema: gristErrorSchema } },
      { on: 401, kind: "gristError2", decode: { kind: "json", schema: gristErrorSchema } },
      { on: 403, kind: "gristError3", decode: { kind: "json", schema: gristErrorSchema } },
      { on: 500, kind: "error500", decode: { kind: "empty" } },
    ];
  }

  export class SearchUsersError extends ApiError {
    declare readonly payload:
      | Declared<"gristError", GristError>
      | Declared<"gristError2", GristError>
      | Declared<"gristError3", GristError>
      | Declared<"error500", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<SearchUsersError> = [
      { on: 400, kind: "gristError", decode: { kind: "json", schema: gristErrorSchema } },
      { on: 401, kind: "gristError2", decode: { kind: "json", schema: gristErrorSchema } },
      { on: 403, kind: "gristError3", decode: { kind: "json", schema: gristErrorSchema } },
      { on: 500, kind: "error500", decode: { kind: "empty" } },
    ];
  }

  export type UpdateGroupByIdRequest = {
    /** A group id */
    groupId: number;
  };

  export class UpdateGroupByIdError extends ApiError {
    declare readonly payload:
      | Declared<"gristError", GristError>
      | Declared<"gristError2", GristError>
      | Declared<"gristError3", GristError>
      | Declared<"gristError4", GristError>
      | Declared<"error500", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<UpdateGroupByIdError> = [
      { on: 401, kind: "gristError", decode: { kind: "json", schema: gristErrorSchema } },
      { on: 403, kind: "gristError2", decode: { kind: "json", schema: gristErrorSchema } },
      { on: 404, kind: "gristError3", decode: { kind: "json", schema: gristErrorSchema } },
      { on: 409, kind: "gristError4", decode: { kind: "json", schema: gristErrorSchema } },
      { on: 500, kind: "error500", decode: { kind: "empty" } },
    ];
  }

  export type UpdateRoleByIdRequest = {
    /** A role id */
    roleId: number;
  };

  export class UpdateRoleByIdError extends ApiError {
    declare readonly payload:
      | Declared<"gristError", GristError>
      | Declared<"gristError2", GristError>
      | Declared<"gristError3", GristError>
      | Declared<"gristError4", GristError>
      | Declared<"error500", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<UpdateRoleByIdError> = [
      { on: 401, kind: "gristError", decode: { kind: "json", schema: gristErrorSchema } },
      { on: 403, kind: "gristError2", decode: { kind: "json", schema: gristErrorSchema } },
      { on: 404, kind: "gristError3", decode: { kind: "json", schema: gristErrorSchema } },
      { on: 409, kind: "gristError4", decode: { kind: "json", schema: gristErrorSchema } },
      { on: 500, kind: "error500", decode: { kind: "empty" } },
    ];
  }

  export type UpdateUserByIdRequest = {
    /** A user id */
    userId: number;
  };

  export class UpdateUserByIdError extends ApiError {
    declare readonly payload:
      | Declared<"gristError", GristError>
      | Declared<"gristError2", GristError>
      | Declared<"gristError3", GristError>
      | Declared<"gristError4", GristError>
      | Declared<"error500", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<UpdateUserByIdError> = [
      { on: 401, kind: "gristError", decode: { kind: "json", schema: gristErrorSchema } },
      { on: 403, kind: "gristError2", decode: { kind: "json", schema: gristErrorSchema } },
      { on: 404, kind: "gristError3", decode: { kind: "json", schema: gristErrorSchema } },
      { on: 409, kind: "gristError4", decode: { kind: "json", schema: gristErrorSchema } },
      { on: 500, kind: "error500", decode: { kind: "empty" } },
    ];
  }
}
