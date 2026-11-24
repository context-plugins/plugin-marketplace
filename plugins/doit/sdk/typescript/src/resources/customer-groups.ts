import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { allAuth, anyAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  createCustomerGroupRequestInternalSchema,
  type CreateCustomerGroupRequest,
} from "../models/create-customer-group-request.js";
import {
  customerGroupUserGroupsResponseInternalSchema,
  type CustomerGroupUserGroupsResponse,
} from "../models/customer-group-user-groups-response.js";
import {
  customerGroupUsersResponseInternalSchema,
  type CustomerGroupUsersResponse,
} from "../models/customer-group-users-response.js";
import { customerGroupInternalSchema, type CustomerGroup } from "../models/customer-group.js";
import {
  customerGroupsResponseInternalSchema,
  type CustomerGroupsResponse,
} from "../models/customer-groups-response.js";
import { problemDetailsInternalSchema, type ProblemDetails } from "../models/problem-details.js";
import {
  updateCustomerGroupRequestInternalSchema,
  updateCustomerGroupRequestSchema,
  type UpdateCustomerGroupRequest,
} from "../models/update-customer-group-request.js";
import type { Servers } from "../servers.js";

/**
 * Manage explicit, named groups of downstream customers and the users scoped to them.
 */
export class CustomerGroups {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Assign a user to a customer group
   *
   * @remarks
   * Assigns a user to a customer group owned by the authenticated tenant. Requires the UsersManager
   * permission.
   *
   * @returns Assigned
   *
   * @throws {@link CustomerGroups.AssignCustomerGroupUserError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link DoiTError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  assignCustomerGroupUser(
    request: CustomerGroups.AssignCustomerGroupUserRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, CustomerGroups.AssignCustomerGroupUserError> {
    return this.#rawClient.execute(
      {
        method: "PUT",
        urlTemplate: this.#servers.default("/rbac/v1/customer-groups/{customerGroupId}/users/{userId}"),
        auth: anyAuth(this.#auth.apiKey, allAuth(this.#auth.tenantId, this.#auth.apiKey)),
        pathParams: [
          { name: "customerGroupId", value: request.customerGroupId, schema: s.string() },
          { name: "userId", value: request.userId, schema: s.string() },
        ],
        query: [],
        headers: [
          { name: "X-Tenant-Id", value: request.xTenantId, schema: s.optional(s.string()) },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: CustomerGroups.AssignCustomerGroupUserError,
      },
      options,
    );
  }

  /**
   * Assign a user group to a customer group
   *
   * @remarks
   * Assigns a user group owned by the authenticated tenant to a customer group owned by that
   * tenant. Membership changes in the user group apply without reassigning it. Requires the
   * UsersManager permission.
   *
   * @returns Assigned
   *
   * @throws {@link CustomerGroups.AssignCustomerGroupUserGroupError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link DoiTError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  assignCustomerGroupUserGroup(
    request: CustomerGroups.AssignCustomerGroupUserGroupRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, CustomerGroups.AssignCustomerGroupUserGroupError> {
    return this.#rawClient.execute(
      {
        method: "PUT",
        urlTemplate: this.#servers.default(
          "/rbac/v1/customer-groups/{customerGroupId}/user-groups/{userGroupId}",
        ),
        auth: anyAuth(this.#auth.apiKey, allAuth(this.#auth.tenantId, this.#auth.apiKey)),
        pathParams: [
          { name: "customerGroupId", value: request.customerGroupId, schema: s.string() },
          { name: "userGroupId", value: request.userGroupId, schema: s.string() },
        ],
        query: [],
        headers: [
          { name: "X-Tenant-Id", value: request.xTenantId, schema: s.optional(s.string()) },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: CustomerGroups.AssignCustomerGroupUserGroupError,
      },
      options,
    );
  }

  /**
   * Create a customer group
   *
   * @remarks
   * Creates a customer group owned by the authenticated tenant. Requires the UsersManager
   * permission.
   *
   * @returns Created
   *
   * @throws {@link CustomerGroups.CreateCustomerGroupError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link DoiTError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  createCustomerGroup(
    request: CustomerGroups.CreateCustomerGroupRequestParams,
    options?: RequestOptions,
  ): ApiPromise<CustomerGroup, CustomerGroups.CreateCustomerGroupError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/rbac/v1/customer-groups"),
        auth: anyAuth(this.#auth.apiKey, allAuth(this.#auth.tenantId, this.#auth.apiKey)),
        pathParams: [],
        query: [],
        headers: [
          { name: "X-Tenant-Id", value: request.xTenantId, schema: s.optional(s.string()) },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "json", value: request.body, schema: createCustomerGroupRequestInternalSchema },
      },
      {
        success: { kind: "json", schema: customerGroupInternalSchema },
        errorFactory: CustomerGroups.CreateCustomerGroupError,
      },
      options,
    );
  }

  /**
   * Delete a customer group
   *
   * @remarks
   * Deletes a customer group owned by the authenticated tenant. Groups with assigned users or user
   * groups cannot be deleted. Requires the UsersManager permission.
   *
   * @returns Deleted
   *
   * @throws {@link CustomerGroups.DeleteCustomerGroupError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link DoiTError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  deleteCustomerGroup(
    request: CustomerGroups.DeleteCustomerGroupRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, CustomerGroups.DeleteCustomerGroupError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default("/rbac/v1/customer-groups/{customerGroupId}"),
        auth: anyAuth(this.#auth.apiKey, allAuth(this.#auth.tenantId, this.#auth.apiKey)),
        pathParams: [{ name: "customerGroupId", value: request.customerGroupId, schema: s.string() }],
        query: [],
        headers: [
          { name: "X-Tenant-Id", value: request.xTenantId, schema: s.optional(s.string()) },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: CustomerGroups.DeleteCustomerGroupError,
      },
      options,
    );
  }

  /**
   * Get a customer group
   *
   * @remarks
   * Returns a customer group owned by the authenticated tenant. Requires the UsersManager
   * permission.
   *
   * @returns OK
   *
   * @throws {@link CustomerGroups.GetCustomerGroupError} when the API answers with an error status
   * — narrow on `err.payload.kind`
   *
   * @throws {@link DoiTError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getCustomerGroup(
    request: CustomerGroups.GetCustomerGroupRequest,
    options?: RequestOptions,
  ): ApiPromise<CustomerGroup, CustomerGroups.GetCustomerGroupError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/rbac/v1/customer-groups/{customerGroupId}"),
        auth: anyAuth(this.#auth.apiKey, allAuth(this.#auth.tenantId, this.#auth.apiKey)),
        pathParams: [{ name: "customerGroupId", value: request.customerGroupId, schema: s.string() }],
        query: [],
        headers: [{ name: "X-Tenant-Id", value: request.xTenantId, schema: s.optional(s.string()) }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: customerGroupInternalSchema },
        errorFactory: CustomerGroups.GetCustomerGroupError,
      },
      options,
    );
  }

  /**
   * List user groups assigned to a customer group
   *
   * @remarks
   * Returns the user groups assigned to a customer group owned by the authenticated tenant, sorted
   * by user-group ID. Requires the UsersManager permission.
   *
   * @returns OK
   *
   * @throws {@link CustomerGroups.ListCustomerGroupUserGroupsError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link DoiTError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listCustomerGroupUserGroups(
    request: CustomerGroups.ListCustomerGroupUserGroupsRequest,
    options?: RequestOptions,
  ): ApiPromise<CustomerGroupUserGroupsResponse, CustomerGroups.ListCustomerGroupUserGroupsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/rbac/v1/customer-groups/{customerGroupId}/user-groups"),
        auth: anyAuth(this.#auth.apiKey, allAuth(this.#auth.tenantId, this.#auth.apiKey)),
        pathParams: [{ name: "customerGroupId", value: request.customerGroupId, schema: s.string() }],
        query: [],
        headers: [{ name: "X-Tenant-Id", value: request.xTenantId, schema: s.optional(s.string()) }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: customerGroupUserGroupsResponseInternalSchema },
        errorFactory: CustomerGroups.ListCustomerGroupUserGroupsError,
      },
      options,
    );
  }

  /**
   * List users assigned to a customer group
   *
   * @remarks
   * Returns the users assigned to a customer group owned by the authenticated tenant, sorted by
   * user ID. Requires the UsersManager permission.
   *
   * @returns OK
   *
   * @throws {@link CustomerGroups.ListCustomerGroupUsersError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link DoiTError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listCustomerGroupUsers(
    request: CustomerGroups.ListCustomerGroupUsersRequest,
    options?: RequestOptions,
  ): ApiPromise<CustomerGroupUsersResponse, CustomerGroups.ListCustomerGroupUsersError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/rbac/v1/customer-groups/{customerGroupId}/users"),
        auth: anyAuth(this.#auth.apiKey, allAuth(this.#auth.tenantId, this.#auth.apiKey)),
        pathParams: [{ name: "customerGroupId", value: request.customerGroupId, schema: s.string() }],
        query: [],
        headers: [{ name: "X-Tenant-Id", value: request.xTenantId, schema: s.optional(s.string()) }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: customerGroupUsersResponseInternalSchema },
        errorFactory: CustomerGroups.ListCustomerGroupUsersError,
      },
      options,
    );
  }

  /**
   * List customer groups
   *
   * @remarks
   * Returns the ready customer groups owned by the authenticated tenant. Requires the UsersManager
   * permission.
   *
   * @returns OK
   *
   * @throws {@link CustomerGroups.ListCustomerGroupsError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link DoiTError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listCustomerGroups(
    request: CustomerGroups.ListCustomerGroupsRequest = {},
    options?: RequestOptions,
  ): ApiPromise<CustomerGroupsResponse, CustomerGroups.ListCustomerGroupsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/rbac/v1/customer-groups"),
        auth: anyAuth(this.#auth.apiKey, allAuth(this.#auth.tenantId, this.#auth.apiKey)),
        pathParams: [],
        query: [],
        headers: [{ name: "X-Tenant-Id", value: request.xTenantId, schema: s.optional(s.string()) }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: customerGroupsResponseInternalSchema },
        errorFactory: CustomerGroups.ListCustomerGroupsError,
      },
      options,
    );
  }

  /**
   * Unassign a user from a customer group
   *
   * @remarks
   * Unassigns a user from a customer group owned by the authenticated tenant. Requires the
   * UsersManager permission.
   *
   * @returns Unassigned
   *
   * @throws {@link CustomerGroups.UnassignCustomerGroupUserError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link DoiTError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  unassignCustomerGroupUser(
    request: CustomerGroups.UnassignCustomerGroupUserRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, CustomerGroups.UnassignCustomerGroupUserError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default("/rbac/v1/customer-groups/{customerGroupId}/users/{userId}"),
        auth: anyAuth(this.#auth.apiKey, allAuth(this.#auth.tenantId, this.#auth.apiKey)),
        pathParams: [
          { name: "customerGroupId", value: request.customerGroupId, schema: s.string() },
          { name: "userId", value: request.userId, schema: s.string() },
        ],
        query: [],
        headers: [
          { name: "X-Tenant-Id", value: request.xTenantId, schema: s.optional(s.string()) },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: CustomerGroups.UnassignCustomerGroupUserError,
      },
      options,
    );
  }

  /**
   * Unassign a user group from a customer group
   *
   * @remarks
   * Unassigns a user group from a customer group owned by the authenticated tenant. Requires the
   * UsersManager permission.
   *
   * @returns Unassigned
   *
   * @throws {@link CustomerGroups.UnassignCustomerGroupUserGroupError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link DoiTError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  unassignCustomerGroupUserGroup(
    request: CustomerGroups.UnassignCustomerGroupUserGroupRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, CustomerGroups.UnassignCustomerGroupUserGroupError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default(
          "/rbac/v1/customer-groups/{customerGroupId}/user-groups/{userGroupId}",
        ),
        auth: anyAuth(this.#auth.apiKey, allAuth(this.#auth.tenantId, this.#auth.apiKey)),
        pathParams: [
          { name: "customerGroupId", value: request.customerGroupId, schema: s.string() },
          { name: "userGroupId", value: request.userGroupId, schema: s.string() },
        ],
        query: [],
        headers: [
          { name: "X-Tenant-Id", value: request.xTenantId, schema: s.optional(s.string()) },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: CustomerGroups.UnassignCustomerGroupUserGroupError,
      },
      options,
    );
  }

  /**
   * Update a customer group
   *
   * @remarks
   * Updates the name, customer membership, or both for a customer group owned by the authenticated
   * tenant. Requires the UsersManager permission.
   *
   * @returns OK
   *
   * @throws {@link CustomerGroups.UpdateCustomerGroupError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link DoiTError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  updateCustomerGroup(
    request: CustomerGroups.UpdateCustomerGroupRequestParams,
    options?: RequestOptions,
  ): ApiPromise<CustomerGroup, CustomerGroups.UpdateCustomerGroupError> {
    return this.#rawClient.execute(
      {
        method: "PATCH",
        urlTemplate: this.#servers.default("/rbac/v1/customer-groups/{customerGroupId}"),
        auth: anyAuth(this.#auth.apiKey, allAuth(this.#auth.tenantId, this.#auth.apiKey)),
        pathParams: [{ name: "customerGroupId", value: request.customerGroupId, schema: s.string() }],
        query: [],
        headers: [
          { name: "X-Tenant-Id", value: request.xTenantId, schema: s.optional(s.string()) },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "json", value: request.body, schema: updateCustomerGroupRequestInternalSchema },
      },
      {
        success: { kind: "json", schema: customerGroupInternalSchema },
        errorFactory: CustomerGroups.UpdateCustomerGroupError,
      },
      options,
    );
  }
}

export namespace CustomerGroups {
  export type AssignCustomerGroupUserRequest = {
    /** Stable service-generated customer-group ID. */
    customerGroupId: string;
    /** User ID to assign to or unassign from the customer group. */
    userId: string;
    /**
     * Customer (tenant) ID for the request. This is separate from authentication: you still pass
     * your personal or service account API token in the `Authorization` header (`Bearer <token>`).
     * See [Get Started](https://developer.doit.com/docs/start).
     *
     * **When to omit (most callers):** If your personal or service account token belongs to a
     * single customer, omit this header. The API resolves that customer from the token.
     *
     * **When to send:** If your credential can access more than one customer, set `X-Tenant-Id` to
     * the customer ID you want to act on. A service account can select an active direct or nested
     * descendant of its home customer; the endpoint's normal permissions, entitlements, and
     * resource-ownership checks still apply. A service-account target outside that customer subtree
     * returns `403 Forbidden`. Prefer this header over the legacy `customerContext` query
     * parameter, which only applies to legacy API keys and is ignored by personal and service
     * account tokens.
     */
    xTenantId?: string;
  };

  export const assignCustomerGroupUserRequestSchema: Schema<AssignCustomerGroupUserRequest> = s.lazySchema(
    () =>
      s.object<AssignCustomerGroupUserRequest>({
        customerGroupId: s.string().check(s.minLength(1), s.maxLength(200)),
        userId: s.string().check(s.minLength(1), s.maxLength(200)),
        xTenantId: s.optional(s.string()),
      }),
  );

  export class AssignCustomerGroupUserError extends ApiError {
    declare readonly payload:
      | Declared<"problemDetails", ProblemDetails>
      | Declared<"problemDetails2", ProblemDetails>
      | Declared<"problemDetails3", ProblemDetails>
      | Declared<"problemDetails4", ProblemDetails>
      | Declared<"problemDetails5", ProblemDetails>
      | Declared<"problemDetails6", ProblemDetails>
      | Declared<"problemDetails7", ProblemDetails>
      | Undeclared;

    static readonly errors: ErrorDecoders<AssignCustomerGroupUserError> = [
      { on: 400, kind: "problemDetails", decode: { kind: "json", schema: problemDetailsInternalSchema } },
      { on: 401, kind: "problemDetails2", decode: { kind: "json", schema: problemDetailsInternalSchema } },
      { on: 403, kind: "problemDetails3", decode: { kind: "json", schema: problemDetailsInternalSchema } },
      { on: 404, kind: "problemDetails4", decode: { kind: "json", schema: problemDetailsInternalSchema } },
      { on: 429, kind: "problemDetails5", decode: { kind: "json", schema: problemDetailsInternalSchema } },
      { on: 500, kind: "problemDetails6", decode: { kind: "json", schema: problemDetailsInternalSchema } },
      { on: 503, kind: "problemDetails7", decode: { kind: "json", schema: problemDetailsInternalSchema } },
    ];
  }

  export type AssignCustomerGroupUserGroupRequest = {
    /** Stable service-generated customer-group ID. */
    customerGroupId: string;
    /** Stable ID of a user group owned by the authenticated tenant. */
    userGroupId: string;
    /**
     * Customer (tenant) ID for the request. This is separate from authentication: you still pass
     * your personal or service account API token in the `Authorization` header (`Bearer <token>`).
     * See [Get Started](https://developer.doit.com/docs/start).
     *
     * **When to omit (most callers):** If your personal or service account token belongs to a
     * single customer, omit this header. The API resolves that customer from the token.
     *
     * **When to send:** If your credential can access more than one customer, set `X-Tenant-Id` to
     * the customer ID you want to act on. A service account can select an active direct or nested
     * descendant of its home customer; the endpoint's normal permissions, entitlements, and
     * resource-ownership checks still apply. A service-account target outside that customer subtree
     * returns `403 Forbidden`. Prefer this header over the legacy `customerContext` query
     * parameter, which only applies to legacy API keys and is ignored by personal and service
     * account tokens.
     */
    xTenantId?: string;
  };

  export const assignCustomerGroupUserGroupRequestSchema: Schema<AssignCustomerGroupUserGroupRequest> =
    s.lazySchema(() =>
      s.object<AssignCustomerGroupUserGroupRequest>({
        customerGroupId: s.string().check(s.minLength(1), s.maxLength(200)),
        userGroupId: s.string().check(s.minLength(1), s.maxLength(200)),
        xTenantId: s.optional(s.string()),
      }),
    );

  export class AssignCustomerGroupUserGroupError extends ApiError {
    declare readonly payload:
      | Declared<"problemDetails", ProblemDetails>
      | Declared<"problemDetails2", ProblemDetails>
      | Declared<"problemDetails3", ProblemDetails>
      | Declared<"problemDetails4", ProblemDetails>
      | Declared<"problemDetails5", ProblemDetails>
      | Declared<"problemDetails6", ProblemDetails>
      | Declared<"problemDetails7", ProblemDetails>
      | Undeclared;

    static readonly errors: ErrorDecoders<AssignCustomerGroupUserGroupError> = [
      { on: 400, kind: "problemDetails", decode: { kind: "json", schema: problemDetailsInternalSchema } },
      { on: 401, kind: "problemDetails2", decode: { kind: "json", schema: problemDetailsInternalSchema } },
      { on: 403, kind: "problemDetails3", decode: { kind: "json", schema: problemDetailsInternalSchema } },
      { on: 404, kind: "problemDetails4", decode: { kind: "json", schema: problemDetailsInternalSchema } },
      { on: 429, kind: "problemDetails5", decode: { kind: "json", schema: problemDetailsInternalSchema } },
      { on: 500, kind: "problemDetails6", decode: { kind: "json", schema: problemDetailsInternalSchema } },
      { on: 503, kind: "problemDetails7", decode: { kind: "json", schema: problemDetailsInternalSchema } },
    ];
  }

  export type CreateCustomerGroupRequestParams = {
    /**
     * Customer (tenant) ID for the request. This is separate from authentication: you still pass
     * your personal or service account API token in the `Authorization` header (`Bearer <token>`).
     * See [Get Started](https://developer.doit.com/docs/start).
     *
     * **When to omit (most callers):** If your personal or service account token belongs to a
     * single customer, omit this header. The API resolves that customer from the token.
     *
     * **When to send:** If your credential can access more than one customer, set `X-Tenant-Id` to
     * the customer ID you want to act on. A service account can select an active direct or nested
     * descendant of its home customer; the endpoint's normal permissions, entitlements, and
     * resource-ownership checks still apply. A service-account target outside that customer subtree
     * returns `403 Forbidden`. Prefer this header over the legacy `customerContext` query
     * parameter, which only applies to legacy API keys and is ignored by personal and service
     * account tokens.
     */
    xTenantId?: string;
    body: CreateCustomerGroupRequest;
  };

  export class CreateCustomerGroupError extends ApiError {
    declare readonly payload:
      | Declared<"problemDetails", ProblemDetails>
      | Declared<"problemDetails2", ProblemDetails>
      | Declared<"problemDetails3", ProblemDetails>
      | Declared<"problemDetails4", ProblemDetails>
      | Declared<"problemDetails5", ProblemDetails>
      | Declared<"problemDetails6", ProblemDetails>
      | Declared<"problemDetails7", ProblemDetails>
      | Declared<"problemDetails8", ProblemDetails>
      | Undeclared;

    static readonly errors: ErrorDecoders<CreateCustomerGroupError> = [
      { on: 400, kind: "problemDetails", decode: { kind: "json", schema: problemDetailsInternalSchema } },
      { on: 401, kind: "problemDetails2", decode: { kind: "json", schema: problemDetailsInternalSchema } },
      { on: 403, kind: "problemDetails3", decode: { kind: "json", schema: problemDetailsInternalSchema } },
      { on: 404, kind: "problemDetails4", decode: { kind: "json", schema: problemDetailsInternalSchema } },
      { on: 409, kind: "problemDetails5", decode: { kind: "json", schema: problemDetailsInternalSchema } },
      { on: 429, kind: "problemDetails6", decode: { kind: "json", schema: problemDetailsInternalSchema } },
      { on: 500, kind: "problemDetails7", decode: { kind: "json", schema: problemDetailsInternalSchema } },
      { on: 503, kind: "problemDetails8", decode: { kind: "json", schema: problemDetailsInternalSchema } },
    ];
  }

  export type DeleteCustomerGroupRequest = {
    /** Stable service-generated customer-group ID. */
    customerGroupId: string;
    /**
     * Customer (tenant) ID for the request. This is separate from authentication: you still pass
     * your personal or service account API token in the `Authorization` header (`Bearer <token>`).
     * See [Get Started](https://developer.doit.com/docs/start).
     *
     * **When to omit (most callers):** If your personal or service account token belongs to a
     * single customer, omit this header. The API resolves that customer from the token.
     *
     * **When to send:** If your credential can access more than one customer, set `X-Tenant-Id` to
     * the customer ID you want to act on. A service account can select an active direct or nested
     * descendant of its home customer; the endpoint's normal permissions, entitlements, and
     * resource-ownership checks still apply. A service-account target outside that customer subtree
     * returns `403 Forbidden`. Prefer this header over the legacy `customerContext` query
     * parameter, which only applies to legacy API keys and is ignored by personal and service
     * account tokens.
     */
    xTenantId?: string;
  };

  export const deleteCustomerGroupRequestSchema: Schema<DeleteCustomerGroupRequest> = s.lazySchema(() =>
    s.object<DeleteCustomerGroupRequest>({
      customerGroupId: s.string().check(s.minLength(1), s.maxLength(200)),
      xTenantId: s.optional(s.string()),
    }),
  );

  export class DeleteCustomerGroupError extends ApiError {
    declare readonly payload:
      | Declared<"problemDetails", ProblemDetails>
      | Declared<"problemDetails2", ProblemDetails>
      | Declared<"problemDetails3", ProblemDetails>
      | Declared<"problemDetails4", ProblemDetails>
      | Declared<"problemDetails5", ProblemDetails>
      | Declared<"problemDetails6", ProblemDetails>
      | Declared<"problemDetails7", ProblemDetails>
      | Declared<"problemDetails8", ProblemDetails>
      | Undeclared;

    static readonly errors: ErrorDecoders<DeleteCustomerGroupError> = [
      { on: 400, kind: "problemDetails", decode: { kind: "json", schema: problemDetailsInternalSchema } },
      { on: 401, kind: "problemDetails2", decode: { kind: "json", schema: problemDetailsInternalSchema } },
      { on: 403, kind: "problemDetails3", decode: { kind: "json", schema: problemDetailsInternalSchema } },
      { on: 404, kind: "problemDetails4", decode: { kind: "json", schema: problemDetailsInternalSchema } },
      { on: 409, kind: "problemDetails5", decode: { kind: "json", schema: problemDetailsInternalSchema } },
      { on: 429, kind: "problemDetails6", decode: { kind: "json", schema: problemDetailsInternalSchema } },
      { on: 500, kind: "problemDetails7", decode: { kind: "json", schema: problemDetailsInternalSchema } },
      { on: 503, kind: "problemDetails8", decode: { kind: "json", schema: problemDetailsInternalSchema } },
    ];
  }

  export type GetCustomerGroupRequest = {
    /** Stable service-generated customer-group ID. */
    customerGroupId: string;
    /**
     * Customer (tenant) ID for the request. This is separate from authentication: you still pass
     * your personal or service account API token in the `Authorization` header (`Bearer <token>`).
     * See [Get Started](https://developer.doit.com/docs/start).
     *
     * **When to omit (most callers):** If your personal or service account token belongs to a
     * single customer, omit this header. The API resolves that customer from the token.
     *
     * **When to send:** If your credential can access more than one customer, set `X-Tenant-Id` to
     * the customer ID you want to act on. A service account can select an active direct or nested
     * descendant of its home customer; the endpoint's normal permissions, entitlements, and
     * resource-ownership checks still apply. A service-account target outside that customer subtree
     * returns `403 Forbidden`. Prefer this header over the legacy `customerContext` query
     * parameter, which only applies to legacy API keys and is ignored by personal and service
     * account tokens.
     */
    xTenantId?: string;
  };

  export const getCustomerGroupRequestSchema: Schema<GetCustomerGroupRequest> = s.lazySchema(() =>
    s.object<GetCustomerGroupRequest>({
      customerGroupId: s.string().check(s.minLength(1), s.maxLength(200)),
      xTenantId: s.optional(s.string()),
    }),
  );

  export class GetCustomerGroupError extends ApiError {
    declare readonly payload:
      | Declared<"problemDetails", ProblemDetails>
      | Declared<"problemDetails2", ProblemDetails>
      | Declared<"problemDetails3", ProblemDetails>
      | Declared<"problemDetails4", ProblemDetails>
      | Declared<"problemDetails5", ProblemDetails>
      | Declared<"problemDetails6", ProblemDetails>
      | Declared<"problemDetails7", ProblemDetails>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetCustomerGroupError> = [
      { on: 400, kind: "problemDetails", decode: { kind: "json", schema: problemDetailsInternalSchema } },
      { on: 401, kind: "problemDetails2", decode: { kind: "json", schema: problemDetailsInternalSchema } },
      { on: 403, kind: "problemDetails3", decode: { kind: "json", schema: problemDetailsInternalSchema } },
      { on: 404, kind: "problemDetails4", decode: { kind: "json", schema: problemDetailsInternalSchema } },
      { on: 429, kind: "problemDetails5", decode: { kind: "json", schema: problemDetailsInternalSchema } },
      { on: 500, kind: "problemDetails6", decode: { kind: "json", schema: problemDetailsInternalSchema } },
      { on: 503, kind: "problemDetails7", decode: { kind: "json", schema: problemDetailsInternalSchema } },
    ];
  }

  export type ListCustomerGroupUserGroupsRequest = {
    /** Stable service-generated customer-group ID. */
    customerGroupId: string;
    /**
     * Customer (tenant) ID for the request. This is separate from authentication: you still pass
     * your personal or service account API token in the `Authorization` header (`Bearer <token>`).
     * See [Get Started](https://developer.doit.com/docs/start).
     *
     * **When to omit (most callers):** If your personal or service account token belongs to a
     * single customer, omit this header. The API resolves that customer from the token.
     *
     * **When to send:** If your credential can access more than one customer, set `X-Tenant-Id` to
     * the customer ID you want to act on. A service account can select an active direct or nested
     * descendant of its home customer; the endpoint's normal permissions, entitlements, and
     * resource-ownership checks still apply. A service-account target outside that customer subtree
     * returns `403 Forbidden`. Prefer this header over the legacy `customerContext` query
     * parameter, which only applies to legacy API keys and is ignored by personal and service
     * account tokens.
     */
    xTenantId?: string;
  };

  export const listCustomerGroupUserGroupsRequestSchema: Schema<ListCustomerGroupUserGroupsRequest> =
    s.lazySchema(() =>
      s.object<ListCustomerGroupUserGroupsRequest>({
        customerGroupId: s.string().check(s.minLength(1), s.maxLength(200)),
        xTenantId: s.optional(s.string()),
      }),
    );

  export class ListCustomerGroupUserGroupsError extends ApiError {
    declare readonly payload:
      | Declared<"problemDetails", ProblemDetails>
      | Declared<"problemDetails2", ProblemDetails>
      | Declared<"problemDetails3", ProblemDetails>
      | Declared<"problemDetails4", ProblemDetails>
      | Declared<"problemDetails5", ProblemDetails>
      | Declared<"problemDetails6", ProblemDetails>
      | Declared<"problemDetails7", ProblemDetails>
      | Undeclared;

    static readonly errors: ErrorDecoders<ListCustomerGroupUserGroupsError> = [
      { on: 400, kind: "problemDetails", decode: { kind: "json", schema: problemDetailsInternalSchema } },
      { on: 401, kind: "problemDetails2", decode: { kind: "json", schema: problemDetailsInternalSchema } },
      { on: 403, kind: "problemDetails3", decode: { kind: "json", schema: problemDetailsInternalSchema } },
      { on: 404, kind: "problemDetails4", decode: { kind: "json", schema: problemDetailsInternalSchema } },
      { on: 429, kind: "problemDetails5", decode: { kind: "json", schema: problemDetailsInternalSchema } },
      { on: 500, kind: "problemDetails6", decode: { kind: "json", schema: problemDetailsInternalSchema } },
      { on: 503, kind: "problemDetails7", decode: { kind: "json", schema: problemDetailsInternalSchema } },
    ];
  }

  export type ListCustomerGroupUsersRequest = {
    /** Stable service-generated customer-group ID. */
    customerGroupId: string;
    /**
     * Customer (tenant) ID for the request. This is separate from authentication: you still pass
     * your personal or service account API token in the `Authorization` header (`Bearer <token>`).
     * See [Get Started](https://developer.doit.com/docs/start).
     *
     * **When to omit (most callers):** If your personal or service account token belongs to a
     * single customer, omit this header. The API resolves that customer from the token.
     *
     * **When to send:** If your credential can access more than one customer, set `X-Tenant-Id` to
     * the customer ID you want to act on. A service account can select an active direct or nested
     * descendant of its home customer; the endpoint's normal permissions, entitlements, and
     * resource-ownership checks still apply. A service-account target outside that customer subtree
     * returns `403 Forbidden`. Prefer this header over the legacy `customerContext` query
     * parameter, which only applies to legacy API keys and is ignored by personal and service
     * account tokens.
     */
    xTenantId?: string;
  };

  export const listCustomerGroupUsersRequestSchema: Schema<ListCustomerGroupUsersRequest> = s.lazySchema(() =>
    s.object<ListCustomerGroupUsersRequest>({
      customerGroupId: s.string().check(s.minLength(1), s.maxLength(200)),
      xTenantId: s.optional(s.string()),
    }),
  );

  export class ListCustomerGroupUsersError extends ApiError {
    declare readonly payload:
      | Declared<"problemDetails", ProblemDetails>
      | Declared<"problemDetails2", ProblemDetails>
      | Declared<"problemDetails3", ProblemDetails>
      | Declared<"problemDetails4", ProblemDetails>
      | Declared<"problemDetails5", ProblemDetails>
      | Declared<"problemDetails6", ProblemDetails>
      | Declared<"problemDetails7", ProblemDetails>
      | Undeclared;

    static readonly errors: ErrorDecoders<ListCustomerGroupUsersError> = [
      { on: 400, kind: "problemDetails", decode: { kind: "json", schema: problemDetailsInternalSchema } },
      { on: 401, kind: "problemDetails2", decode: { kind: "json", schema: problemDetailsInternalSchema } },
      { on: 403, kind: "problemDetails3", decode: { kind: "json", schema: problemDetailsInternalSchema } },
      { on: 404, kind: "problemDetails4", decode: { kind: "json", schema: problemDetailsInternalSchema } },
      { on: 429, kind: "problemDetails5", decode: { kind: "json", schema: problemDetailsInternalSchema } },
      { on: 500, kind: "problemDetails6", decode: { kind: "json", schema: problemDetailsInternalSchema } },
      { on: 503, kind: "problemDetails7", decode: { kind: "json", schema: problemDetailsInternalSchema } },
    ];
  }

  export type ListCustomerGroupsRequest = {
    /**
     * Customer (tenant) ID for the request. This is separate from authentication: you still pass
     * your personal or service account API token in the `Authorization` header (`Bearer <token>`).
     * See [Get Started](https://developer.doit.com/docs/start).
     *
     * **When to omit (most callers):** If your personal or service account token belongs to a
     * single customer, omit this header. The API resolves that customer from the token.
     *
     * **When to send:** If your credential can access more than one customer, set `X-Tenant-Id` to
     * the customer ID you want to act on. A service account can select an active direct or nested
     * descendant of its home customer; the endpoint's normal permissions, entitlements, and
     * resource-ownership checks still apply. A service-account target outside that customer subtree
     * returns `403 Forbidden`. Prefer this header over the legacy `customerContext` query
     * parameter, which only applies to legacy API keys and is ignored by personal and service
     * account tokens.
     */
    xTenantId?: string;
  };

  export class ListCustomerGroupsError extends ApiError {
    declare readonly payload:
      | Declared<"problemDetails", ProblemDetails>
      | Declared<"problemDetails2", ProblemDetails>
      | Declared<"problemDetails3", ProblemDetails>
      | Declared<"problemDetails4", ProblemDetails>
      | Declared<"problemDetails5", ProblemDetails>
      | Declared<"problemDetails6", ProblemDetails>
      | Undeclared;

    static readonly errors: ErrorDecoders<ListCustomerGroupsError> = [
      { on: 400, kind: "problemDetails", decode: { kind: "json", schema: problemDetailsInternalSchema } },
      { on: 401, kind: "problemDetails2", decode: { kind: "json", schema: problemDetailsInternalSchema } },
      { on: 403, kind: "problemDetails3", decode: { kind: "json", schema: problemDetailsInternalSchema } },
      { on: 429, kind: "problemDetails4", decode: { kind: "json", schema: problemDetailsInternalSchema } },
      { on: 500, kind: "problemDetails5", decode: { kind: "json", schema: problemDetailsInternalSchema } },
      { on: 503, kind: "problemDetails6", decode: { kind: "json", schema: problemDetailsInternalSchema } },
    ];
  }

  export type UnassignCustomerGroupUserRequest = {
    /** Stable service-generated customer-group ID. */
    customerGroupId: string;
    /** User ID to assign to or unassign from the customer group. */
    userId: string;
    /**
     * Customer (tenant) ID for the request. This is separate from authentication: you still pass
     * your personal or service account API token in the `Authorization` header (`Bearer <token>`).
     * See [Get Started](https://developer.doit.com/docs/start).
     *
     * **When to omit (most callers):** If your personal or service account token belongs to a
     * single customer, omit this header. The API resolves that customer from the token.
     *
     * **When to send:** If your credential can access more than one customer, set `X-Tenant-Id` to
     * the customer ID you want to act on. A service account can select an active direct or nested
     * descendant of its home customer; the endpoint's normal permissions, entitlements, and
     * resource-ownership checks still apply. A service-account target outside that customer subtree
     * returns `403 Forbidden`. Prefer this header over the legacy `customerContext` query
     * parameter, which only applies to legacy API keys and is ignored by personal and service
     * account tokens.
     */
    xTenantId?: string;
  };

  export const unassignCustomerGroupUserRequestSchema: Schema<UnassignCustomerGroupUserRequest> =
    s.lazySchema(() =>
      s.object<UnassignCustomerGroupUserRequest>({
        customerGroupId: s.string().check(s.minLength(1), s.maxLength(200)),
        userId: s.string().check(s.minLength(1), s.maxLength(200)),
        xTenantId: s.optional(s.string()),
      }),
    );

  export class UnassignCustomerGroupUserError extends ApiError {
    declare readonly payload:
      | Declared<"problemDetails", ProblemDetails>
      | Declared<"problemDetails2", ProblemDetails>
      | Declared<"problemDetails3", ProblemDetails>
      | Declared<"problemDetails4", ProblemDetails>
      | Declared<"problemDetails5", ProblemDetails>
      | Declared<"problemDetails6", ProblemDetails>
      | Declared<"problemDetails7", ProblemDetails>
      | Undeclared;

    static readonly errors: ErrorDecoders<UnassignCustomerGroupUserError> = [
      { on: 400, kind: "problemDetails", decode: { kind: "json", schema: problemDetailsInternalSchema } },
      { on: 401, kind: "problemDetails2", decode: { kind: "json", schema: problemDetailsInternalSchema } },
      { on: 403, kind: "problemDetails3", decode: { kind: "json", schema: problemDetailsInternalSchema } },
      { on: 404, kind: "problemDetails4", decode: { kind: "json", schema: problemDetailsInternalSchema } },
      { on: 429, kind: "problemDetails5", decode: { kind: "json", schema: problemDetailsInternalSchema } },
      { on: 500, kind: "problemDetails6", decode: { kind: "json", schema: problemDetailsInternalSchema } },
      { on: 503, kind: "problemDetails7", decode: { kind: "json", schema: problemDetailsInternalSchema } },
    ];
  }

  export type UnassignCustomerGroupUserGroupRequest = {
    /** Stable service-generated customer-group ID. */
    customerGroupId: string;
    /** Stable ID of a user group owned by the authenticated tenant. */
    userGroupId: string;
    /**
     * Customer (tenant) ID for the request. This is separate from authentication: you still pass
     * your personal or service account API token in the `Authorization` header (`Bearer <token>`).
     * See [Get Started](https://developer.doit.com/docs/start).
     *
     * **When to omit (most callers):** If your personal or service account token belongs to a
     * single customer, omit this header. The API resolves that customer from the token.
     *
     * **When to send:** If your credential can access more than one customer, set `X-Tenant-Id` to
     * the customer ID you want to act on. A service account can select an active direct or nested
     * descendant of its home customer; the endpoint's normal permissions, entitlements, and
     * resource-ownership checks still apply. A service-account target outside that customer subtree
     * returns `403 Forbidden`. Prefer this header over the legacy `customerContext` query
     * parameter, which only applies to legacy API keys and is ignored by personal and service
     * account tokens.
     */
    xTenantId?: string;
  };

  export const unassignCustomerGroupUserGroupRequestSchema: Schema<UnassignCustomerGroupUserGroupRequest> =
    s.lazySchema(() =>
      s.object<UnassignCustomerGroupUserGroupRequest>({
        customerGroupId: s.string().check(s.minLength(1), s.maxLength(200)),
        userGroupId: s.string().check(s.minLength(1), s.maxLength(200)),
        xTenantId: s.optional(s.string()),
      }),
    );

  export class UnassignCustomerGroupUserGroupError extends ApiError {
    declare readonly payload:
      | Declared<"problemDetails", ProblemDetails>
      | Declared<"problemDetails2", ProblemDetails>
      | Declared<"problemDetails3", ProblemDetails>
      | Declared<"problemDetails4", ProblemDetails>
      | Declared<"problemDetails5", ProblemDetails>
      | Declared<"problemDetails6", ProblemDetails>
      | Declared<"problemDetails7", ProblemDetails>
      | Undeclared;

    static readonly errors: ErrorDecoders<UnassignCustomerGroupUserGroupError> = [
      { on: 400, kind: "problemDetails", decode: { kind: "json", schema: problemDetailsInternalSchema } },
      { on: 401, kind: "problemDetails2", decode: { kind: "json", schema: problemDetailsInternalSchema } },
      { on: 403, kind: "problemDetails3", decode: { kind: "json", schema: problemDetailsInternalSchema } },
      { on: 404, kind: "problemDetails4", decode: { kind: "json", schema: problemDetailsInternalSchema } },
      { on: 429, kind: "problemDetails5", decode: { kind: "json", schema: problemDetailsInternalSchema } },
      { on: 500, kind: "problemDetails6", decode: { kind: "json", schema: problemDetailsInternalSchema } },
      { on: 503, kind: "problemDetails7", decode: { kind: "json", schema: problemDetailsInternalSchema } },
    ];
  }

  export type UpdateCustomerGroupRequestParams = {
    /** Stable service-generated customer-group ID. */
    customerGroupId: string;
    /**
     * Customer (tenant) ID for the request. This is separate from authentication: you still pass
     * your personal or service account API token in the `Authorization` header (`Bearer <token>`).
     * See [Get Started](https://developer.doit.com/docs/start).
     *
     * **When to omit (most callers):** If your personal or service account token belongs to a
     * single customer, omit this header. The API resolves that customer from the token.
     *
     * **When to send:** If your credential can access more than one customer, set `X-Tenant-Id` to
     * the customer ID you want to act on. A service account can select an active direct or nested
     * descendant of its home customer; the endpoint's normal permissions, entitlements, and
     * resource-ownership checks still apply. A service-account target outside that customer subtree
     * returns `403 Forbidden`. Prefer this header over the legacy `customerContext` query
     * parameter, which only applies to legacy API keys and is ignored by personal and service
     * account tokens.
     */
    xTenantId?: string;
    body: UpdateCustomerGroupRequest;
  };

  export const updateCustomerGroupRequestParamsSchema: Schema<UpdateCustomerGroupRequestParams> =
    s.lazySchema(() =>
      s.object<UpdateCustomerGroupRequestParams>({
        customerGroupId: s.string().check(s.minLength(1), s.maxLength(200)),
        xTenantId: s.optional(s.string()),
        body: updateCustomerGroupRequestSchema,
      }),
    );

  export class UpdateCustomerGroupError extends ApiError {
    declare readonly payload:
      | Declared<"problemDetails", ProblemDetails>
      | Declared<"problemDetails2", ProblemDetails>
      | Declared<"problemDetails3", ProblemDetails>
      | Declared<"problemDetails4", ProblemDetails>
      | Declared<"problemDetails5", ProblemDetails>
      | Declared<"problemDetails6", ProblemDetails>
      | Declared<"problemDetails7", ProblemDetails>
      | Declared<"problemDetails8", ProblemDetails>
      | Undeclared;

    static readonly errors: ErrorDecoders<UpdateCustomerGroupError> = [
      { on: 400, kind: "problemDetails", decode: { kind: "json", schema: problemDetailsInternalSchema } },
      { on: 401, kind: "problemDetails2", decode: { kind: "json", schema: problemDetailsInternalSchema } },
      { on: 403, kind: "problemDetails3", decode: { kind: "json", schema: problemDetailsInternalSchema } },
      { on: 404, kind: "problemDetails4", decode: { kind: "json", schema: problemDetailsInternalSchema } },
      { on: 409, kind: "problemDetails5", decode: { kind: "json", schema: problemDetailsInternalSchema } },
      { on: 429, kind: "problemDetails6", decode: { kind: "json", schema: problemDetailsInternalSchema } },
      { on: 500, kind: "problemDetails7", decode: { kind: "json", schema: problemDetailsInternalSchema } },
      { on: 503, kind: "problemDetails8", decode: { kind: "json", schema: problemDetailsInternalSchema } },
    ];
  }
}
