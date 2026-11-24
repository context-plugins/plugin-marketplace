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
  createGeographicAccessCustomRegionRequestInternalSchema,
  type CreateGeographicAccessCustomRegionRequest,
} from "../models/create-geographic-access-custom-region-request.js";
import { errorSchema, type Error } from "../models/error.js";
import {
  geographicAccessCountriesResponseInternalSchema,
  type GeographicAccessCountriesResponse,
} from "../models/geographic-access-countries-response.js";
import {
  geographicAccessCustomRegionInternalSchema,
  type GeographicAccessCustomRegion,
} from "../models/geographic-access-custom-region.js";
import {
  geographicAccessCustomRegionsResponseInternalSchema,
  type GeographicAccessCustomRegionsResponse,
} from "../models/geographic-access-custom-regions-response.js";
import { problemDetailsInternalSchema, type ProblemDetails } from "../models/problem-details.js";
import {
  geographicAccessScopeInternalSchema,
  type GeographicAccessScope,
} from "../models/unions/geographic-access-scope.js";
import {
  updateGeographicAccessScopeRequestInternalSchema,
  updateGeographicAccessScopeRequestSchema,
  type UpdateGeographicAccessScopeRequest,
} from "../models/unions/update-geographic-access-scope-request.js";
import {
  updateGeographicAccessCustomRegionRequestInternalSchema,
  updateGeographicAccessCustomRegionRequestSchema,
  type UpdateGeographicAccessCustomRegionRequest,
} from "../models/update-geographic-access-custom-region-request.js";
import type { Servers } from "../servers.js";

/**
 * Manage country-based access to tenants in your customer hierarchy.
 */
export class GeographicAccess {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Create a custom region
   *
   * @remarks
   * Creates a custom region owned by the authenticated tenant. The tenant must be a
   * customer-hierarchy root. Requires the UsersManager permission.
   *
   * @returns Created
   *
   * @throws {@link GeographicAccess.CreateGeographicAccessCustomRegionError} when the API answers
   * with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link DoiTError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  createGeographicAccessCustomRegion(
    request: GeographicAccess.CreateGeographicAccessCustomRegionRequestParams,
    options?: RequestOptions,
  ): ApiPromise<GeographicAccessCustomRegion, GeographicAccess.CreateGeographicAccessCustomRegionError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/rbac/v1/custom-regions"),
        auth: anyAuth(this.#auth.apiKey, allAuth(this.#auth.tenantId, this.#auth.apiKey)),
        pathParams: [],
        query: [],
        headers: [
          { name: "X-Tenant-Id", value: request.xTenantId, schema: s.optional(s.string()) },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: {
          kind: "json",
          value: request.body,
          schema: createGeographicAccessCustomRegionRequestInternalSchema,
        },
      },
      {
        success: { kind: "json", schema: geographicAccessCustomRegionInternalSchema },
        errorFactory: GeographicAccess.CreateGeographicAccessCustomRegionError,
      },
      options,
    );
  }

  /**
   * Clear a customer's geographic scope
   *
   * @remarks
   * Clears the geographic scope for a target customer, leaving it unassigned. The authenticated
   * tenant must be the hierarchy root, and the target must be that root customer or one of its
   * child customers. Repeating the request is idempotent. Requires the UsersManager permission.
   *
   * @returns Cleared
   *
   * @throws {@link GeographicAccess.DeleteCustomerGeographicAccessScopeError} when the API answers
   * with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link DoiTError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  deleteCustomerGeographicAccessScope(
    request: GeographicAccess.DeleteCustomerGeographicAccessScopeRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, GeographicAccess.DeleteCustomerGeographicAccessScopeError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default("/rbac/v1/customers/{targetCustomerId}/geographic-scope"),
        auth: anyAuth(this.#auth.apiKey, allAuth(this.#auth.tenantId, this.#auth.apiKey)),
        pathParams: [{ name: "targetCustomerId", value: request.targetCustomerId, schema: s.string() }],
        query: [],
        headers: [
          { name: "X-Tenant-Id", value: request.xTenantId, schema: s.optional(s.string()) },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: GeographicAccess.DeleteCustomerGeographicAccessScopeError,
      },
      options,
    );
  }

  /**
   * Delete a custom region
   *
   * @remarks
   * Deletes a custom region owned by the authenticated tenant. Assigned regions cannot be deleted.
   * Requires the UsersManager permission.
   *
   * @returns Deleted
   *
   * @throws {@link GeographicAccess.DeleteGeographicAccessCustomRegionError} when the API answers
   * with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link DoiTError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  deleteGeographicAccessCustomRegion(
    request: GeographicAccess.DeleteGeographicAccessCustomRegionRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, GeographicAccess.DeleteGeographicAccessCustomRegionError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default("/rbac/v1/custom-regions/{customRegionId}"),
        auth: anyAuth(this.#auth.apiKey, allAuth(this.#auth.tenantId, this.#auth.apiKey)),
        pathParams: [{ name: "customRegionId", value: request.customRegionId, schema: s.string() }],
        query: [],
        headers: [
          { name: "X-Tenant-Id", value: request.xTenantId, schema: s.optional(s.string()) },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: GeographicAccess.DeleteGeographicAccessCustomRegionError,
      },
      options,
    );
  }

  /**
   * Clear a user's geographic scope
   *
   * @remarks
   * Clears the geographic scope assigned to a user who belongs to the target customer, leaving it
   * unassigned. The authenticated tenant must be the hierarchy root, and the target must be that
   * root customer or one of its child customers. Repeating the request is idempotent. Requires the
   * UsersManager permission.
   *
   * @returns Cleared
   *
   * @throws {@link GeographicAccess.DeleteUserGeographicAccessScopeError} when the API answers with
   * an error status — narrow on `err.payload.kind`
   *
   * @throws {@link DoiTError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  deleteUserGeographicAccessScope(
    request: GeographicAccess.DeleteUserGeographicAccessScopeRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, GeographicAccess.DeleteUserGeographicAccessScopeError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default(
          "/rbac/v1/customers/{targetCustomerId}/users/{userId}/geographic-scope",
        ),
        auth: anyAuth(this.#auth.apiKey, allAuth(this.#auth.tenantId, this.#auth.apiKey)),
        pathParams: [
          { name: "targetCustomerId", value: request.targetCustomerId, schema: s.string() },
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
        errorFactory: GeographicAccess.DeleteUserGeographicAccessScopeError,
      },
      options,
    );
  }

  /**
   * Get a customer's geographic scope
   *
   * @remarks
   * Returns the geographic scope for a target customer. The authenticated tenant must be the
   * hierarchy root, and the target must be that root customer or one of its child customers.
   * Targets outside that hierarchy are returned as not found. Requires the UsersManager permission.
   *
   * @returns OK
   *
   * @throws {@link GeographicAccess.GetCustomerGeographicAccessScopeError} when the API answers
   * with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link DoiTError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getCustomerGeographicAccessScope(
    request: GeographicAccess.GetCustomerGeographicAccessScopeRequest,
    options?: RequestOptions,
  ): ApiPromise<GeographicAccessScope, GeographicAccess.GetCustomerGeographicAccessScopeError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/rbac/v1/customers/{targetCustomerId}/geographic-scope"),
        auth: anyAuth(this.#auth.apiKey, allAuth(this.#auth.tenantId, this.#auth.apiKey)),
        pathParams: [{ name: "targetCustomerId", value: request.targetCustomerId, schema: s.string() }],
        query: [],
        headers: [{ name: "X-Tenant-Id", value: request.xTenantId, schema: s.optional(s.string()) }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: geographicAccessScopeInternalSchema },
        errorFactory: GeographicAccess.GetCustomerGeographicAccessScopeError,
      },
      options,
    );
  }

  /**
   * Get a custom region
   *
   * @remarks
   * Returns a custom region owned by the authenticated tenant. Requires the UsersManager
   * permission.
   *
   * @returns OK
   *
   * @throws {@link GeographicAccess.GetGeographicAccessCustomRegionError} when the API answers with
   * an error status — narrow on `err.payload.kind`
   *
   * @throws {@link DoiTError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getGeographicAccessCustomRegion(
    request: GeographicAccess.GetGeographicAccessCustomRegionRequest,
    options?: RequestOptions,
  ): ApiPromise<GeographicAccessCustomRegion, GeographicAccess.GetGeographicAccessCustomRegionError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/rbac/v1/custom-regions/{customRegionId}"),
        auth: anyAuth(this.#auth.apiKey, allAuth(this.#auth.tenantId, this.#auth.apiKey)),
        pathParams: [{ name: "customRegionId", value: request.customRegionId, schema: s.string() }],
        query: [],
        headers: [{ name: "X-Tenant-Id", value: request.xTenantId, schema: s.optional(s.string()) }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: geographicAccessCustomRegionInternalSchema },
        errorFactory: GeographicAccess.GetGeographicAccessCustomRegionError,
      },
      options,
    );
  }

  /**
   * Get a user's geographic scope
   *
   * @remarks
   * Returns the geographic scope assigned to a user who belongs to the target customer. The
   * authenticated tenant must be the hierarchy root, and the target must be that root customer or
   * one of its child customers. Targets outside that hierarchy are returned as not found. Requires
   * the UsersManager permission.
   *
   * @returns OK
   *
   * @throws {@link GeographicAccess.GetUserGeographicAccessScopeError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link DoiTError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getUserGeographicAccessScope(
    request: GeographicAccess.GetUserGeographicAccessScopeRequest,
    options?: RequestOptions,
  ): ApiPromise<GeographicAccessScope, GeographicAccess.GetUserGeographicAccessScopeError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default(
          "/rbac/v1/customers/{targetCustomerId}/users/{userId}/geographic-scope",
        ),
        auth: anyAuth(this.#auth.apiKey, allAuth(this.#auth.tenantId, this.#auth.apiKey)),
        pathParams: [
          { name: "targetCustomerId", value: request.targetCustomerId, schema: s.string() },
          { name: "userId", value: request.userId, schema: s.string() },
        ],
        query: [],
        headers: [{ name: "X-Tenant-Id", value: request.xTenantId, schema: s.optional(s.string()) }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: geographicAccessScopeInternalSchema },
        errorFactory: GeographicAccess.GetUserGeographicAccessScopeError,
      },
      options,
    );
  }

  /**
   * List countries available for geographic access
   *
   * @remarks
   * Returns the canonical ISO 3166-1 alpha-2 country catalogue used by geographic access policies.
   *
   * @returns OK
   *
   * @throws {@link GeographicAccess.ListGeographicAccessCountriesError} when the API answers with
   * an error status — narrow on `err.payload.kind`
   *
   * @throws {@link DoiTError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listGeographicAccessCountries(
    request: GeographicAccess.ListGeographicAccessCountriesRequest = {},
    options?: RequestOptions,
  ): ApiPromise<GeographicAccessCountriesResponse, GeographicAccess.ListGeographicAccessCountriesError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/rbac/v1/countries"),
        auth: anyAuth(this.#auth.apiKey, allAuth(this.#auth.tenantId, this.#auth.apiKey)),
        pathParams: [],
        query: [],
        headers: [{ name: "X-Tenant-Id", value: request.xTenantId, schema: s.optional(s.string()) }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: geographicAccessCountriesResponseInternalSchema },
        errorFactory: GeographicAccess.ListGeographicAccessCountriesError,
      },
      options,
    );
  }

  /**
   * List custom regions
   *
   * @remarks
   * Returns the ready custom regions owned by the authenticated tenant. Requires the UsersManager
   * permission.
   *
   * @returns OK
   *
   * @throws {@link GeographicAccess.ListGeographicAccessCustomRegionsError} when the API answers
   * with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link DoiTError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listGeographicAccessCustomRegions(
    request: GeographicAccess.ListGeographicAccessCustomRegionsRequest = {},
    options?: RequestOptions,
  ): ApiPromise<
    GeographicAccessCustomRegionsResponse,
    GeographicAccess.ListGeographicAccessCustomRegionsError
  > {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/rbac/v1/custom-regions"),
        auth: anyAuth(this.#auth.apiKey, allAuth(this.#auth.tenantId, this.#auth.apiKey)),
        pathParams: [],
        query: [],
        headers: [{ name: "X-Tenant-Id", value: request.xTenantId, schema: s.optional(s.string()) }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: geographicAccessCustomRegionsResponseInternalSchema },
        errorFactory: GeographicAccess.ListGeographicAccessCustomRegionsError,
      },
      options,
    );
  }

  /**
   * Replace a customer's geographic scope
   *
   * @remarks
   * Atomically replaces the geographic scope for a target customer. The authenticated tenant must
   * be the hierarchy root, and the target must be that root customer or one of its child customers.
   * Repeating an identical request is idempotent. Requires the UsersManager permission.
   *
   * @returns Updated
   *
   * @throws {@link GeographicAccess.UpdateCustomerGeographicAccessScopeError} when the API answers
   * with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link DoiTError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  updateCustomerGeographicAccessScope(
    request: GeographicAccess.UpdateCustomerGeographicAccessScopeRequest,
    options?: RequestOptions,
  ): ApiPromise<GeographicAccessScope, GeographicAccess.UpdateCustomerGeographicAccessScopeError> {
    return this.#rawClient.execute(
      {
        method: "PUT",
        urlTemplate: this.#servers.default("/rbac/v1/customers/{targetCustomerId}/geographic-scope"),
        auth: anyAuth(this.#auth.apiKey, allAuth(this.#auth.tenantId, this.#auth.apiKey)),
        pathParams: [{ name: "targetCustomerId", value: request.targetCustomerId, schema: s.string() }],
        query: [],
        headers: [
          { name: "X-Tenant-Id", value: request.xTenantId, schema: s.optional(s.string()) },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "json", value: request.body, schema: updateGeographicAccessScopeRequestInternalSchema },
      },
      {
        success: { kind: "json", schema: geographicAccessScopeInternalSchema },
        errorFactory: GeographicAccess.UpdateCustomerGeographicAccessScopeError,
      },
      options,
    );
  }

  /**
   * Update a custom region
   *
   * @remarks
   * Updates the name, country membership, or both for a custom region owned by the authenticated
   * tenant. Requires the UsersManager permission.
   *
   * @returns OK
   *
   * @throws {@link GeographicAccess.UpdateGeographicAccessCustomRegionError} when the API answers
   * with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link DoiTError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  updateGeographicAccessCustomRegion(
    request: GeographicAccess.UpdateGeographicAccessCustomRegionRequestParams,
    options?: RequestOptions,
  ): ApiPromise<GeographicAccessCustomRegion, GeographicAccess.UpdateGeographicAccessCustomRegionError> {
    return this.#rawClient.execute(
      {
        method: "PATCH",
        urlTemplate: this.#servers.default("/rbac/v1/custom-regions/{customRegionId}"),
        auth: anyAuth(this.#auth.apiKey, allAuth(this.#auth.tenantId, this.#auth.apiKey)),
        pathParams: [{ name: "customRegionId", value: request.customRegionId, schema: s.string() }],
        query: [],
        headers: [
          { name: "X-Tenant-Id", value: request.xTenantId, schema: s.optional(s.string()) },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: {
          kind: "json",
          value: request.body,
          schema: updateGeographicAccessCustomRegionRequestInternalSchema,
        },
      },
      {
        success: { kind: "json", schema: geographicAccessCustomRegionInternalSchema },
        errorFactory: GeographicAccess.UpdateGeographicAccessCustomRegionError,
      },
      options,
    );
  }

  /**
   * Replace a user's geographic scope
   *
   * @remarks
   * Atomically replaces the geographic scope assigned to a user who belongs to the target customer.
   * The authenticated tenant must be the hierarchy root, and the target must be that root customer
   * or one of its child customers. Repeating an identical request is idempotent. Requires the
   * UsersManager permission.
   *
   * @returns Updated
   *
   * @throws {@link GeographicAccess.UpdateUserGeographicAccessScopeError} when the API answers with
   * an error status — narrow on `err.payload.kind`
   *
   * @throws {@link DoiTError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  updateUserGeographicAccessScope(
    request: GeographicAccess.UpdateUserGeographicAccessScopeRequest,
    options?: RequestOptions,
  ): ApiPromise<GeographicAccessScope, GeographicAccess.UpdateUserGeographicAccessScopeError> {
    return this.#rawClient.execute(
      {
        method: "PUT",
        urlTemplate: this.#servers.default(
          "/rbac/v1/customers/{targetCustomerId}/users/{userId}/geographic-scope",
        ),
        auth: anyAuth(this.#auth.apiKey, allAuth(this.#auth.tenantId, this.#auth.apiKey)),
        pathParams: [
          { name: "targetCustomerId", value: request.targetCustomerId, schema: s.string() },
          { name: "userId", value: request.userId, schema: s.string() },
        ],
        query: [],
        headers: [
          { name: "X-Tenant-Id", value: request.xTenantId, schema: s.optional(s.string()) },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "json", value: request.body, schema: updateGeographicAccessScopeRequestInternalSchema },
      },
      {
        success: { kind: "json", schema: geographicAccessScopeInternalSchema },
        errorFactory: GeographicAccess.UpdateUserGeographicAccessScopeError,
      },
      options,
    );
  }
}

export namespace GeographicAccess {
  export type CreateGeographicAccessCustomRegionRequestParams = {
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
    body: CreateGeographicAccessCustomRegionRequest;
  };

  export class CreateGeographicAccessCustomRegionError extends ApiError {
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

    static readonly errors: ErrorDecoders<CreateGeographicAccessCustomRegionError> = [
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

  export type DeleteCustomerGeographicAccessScopeRequest = {
    /**
     * Customer ID within the authenticated tenant's hierarchy whose geographic scope is managed.
     */
    targetCustomerId: string;
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

  export const deleteCustomerGeographicAccessScopeRequestSchema: Schema<DeleteCustomerGeographicAccessScopeRequest> =
    s.lazySchema(() =>
      s.object<DeleteCustomerGeographicAccessScopeRequest>({
        targetCustomerId: s.string().check(s.minLength(1), s.maxLength(200)),
        xTenantId: s.optional(s.string()),
      }),
    );

  export class DeleteCustomerGeographicAccessScopeError extends ApiError {
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

    static readonly errors: ErrorDecoders<DeleteCustomerGeographicAccessScopeError> = [
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

  export type DeleteGeographicAccessCustomRegionRequest = {
    /** Stable service-generated custom-region ID. */
    customRegionId: string;
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

  export const deleteGeographicAccessCustomRegionRequestSchema: Schema<DeleteGeographicAccessCustomRegionRequest> =
    s.lazySchema(() =>
      s.object<DeleteGeographicAccessCustomRegionRequest>({
        customRegionId: s.string().check(s.minLength(1), s.maxLength(200)),
        xTenantId: s.optional(s.string()),
      }),
    );

  export class DeleteGeographicAccessCustomRegionError extends ApiError {
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

    static readonly errors: ErrorDecoders<DeleteGeographicAccessCustomRegionError> = [
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

  export type DeleteUserGeographicAccessScopeRequest = {
    /**
     * Customer ID within the authenticated tenant's hierarchy whose geographic scope is managed.
     */
    targetCustomerId: string;
    /** Unique user ID returned by GET /iam/v1/users that belongs to the target customer. */
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

  export const deleteUserGeographicAccessScopeRequestSchema: Schema<DeleteUserGeographicAccessScopeRequest> =
    s.lazySchema(() =>
      s.object<DeleteUserGeographicAccessScopeRequest>({
        targetCustomerId: s.string().check(s.minLength(1), s.maxLength(200)),
        userId: s.string().check(s.minLength(1), s.maxLength(200)),
        xTenantId: s.optional(s.string()),
      }),
    );

  export class DeleteUserGeographicAccessScopeError extends ApiError {
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

    static readonly errors: ErrorDecoders<DeleteUserGeographicAccessScopeError> = [
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

  export type GetCustomerGeographicAccessScopeRequest = {
    /**
     * Customer ID within the authenticated tenant's hierarchy whose geographic scope is managed.
     */
    targetCustomerId: string;
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

  export const getCustomerGeographicAccessScopeRequestSchema: Schema<GetCustomerGeographicAccessScopeRequest> =
    s.lazySchema(() =>
      s.object<GetCustomerGeographicAccessScopeRequest>({
        targetCustomerId: s.string().check(s.minLength(1), s.maxLength(200)),
        xTenantId: s.optional(s.string()),
      }),
    );

  export class GetCustomerGeographicAccessScopeError extends ApiError {
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

    static readonly errors: ErrorDecoders<GetCustomerGeographicAccessScopeError> = [
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

  export type GetGeographicAccessCustomRegionRequest = {
    /** Stable service-generated custom-region ID. */
    customRegionId: string;
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

  export const getGeographicAccessCustomRegionRequestSchema: Schema<GetGeographicAccessCustomRegionRequest> =
    s.lazySchema(() =>
      s.object<GetGeographicAccessCustomRegionRequest>({
        customRegionId: s.string().check(s.minLength(1), s.maxLength(200)),
        xTenantId: s.optional(s.string()),
      }),
    );

  export class GetGeographicAccessCustomRegionError extends ApiError {
    declare readonly payload:
      | Declared<"problemDetails", ProblemDetails>
      | Declared<"problemDetails2", ProblemDetails>
      | Declared<"problemDetails3", ProblemDetails>
      | Declared<"problemDetails4", ProblemDetails>
      | Declared<"problemDetails5", ProblemDetails>
      | Declared<"problemDetails6", ProblemDetails>
      | Declared<"problemDetails7", ProblemDetails>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetGeographicAccessCustomRegionError> = [
      { on: 400, kind: "problemDetails", decode: { kind: "json", schema: problemDetailsInternalSchema } },
      { on: 401, kind: "problemDetails2", decode: { kind: "json", schema: problemDetailsInternalSchema } },
      { on: 403, kind: "problemDetails3", decode: { kind: "json", schema: problemDetailsInternalSchema } },
      { on: 404, kind: "problemDetails4", decode: { kind: "json", schema: problemDetailsInternalSchema } },
      { on: 429, kind: "problemDetails5", decode: { kind: "json", schema: problemDetailsInternalSchema } },
      { on: 500, kind: "problemDetails6", decode: { kind: "json", schema: problemDetailsInternalSchema } },
      { on: 503, kind: "problemDetails7", decode: { kind: "json", schema: problemDetailsInternalSchema } },
    ];
  }

  export type GetUserGeographicAccessScopeRequest = {
    /**
     * Customer ID within the authenticated tenant's hierarchy whose geographic scope is managed.
     */
    targetCustomerId: string;
    /** Unique user ID returned by GET /iam/v1/users that belongs to the target customer. */
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

  export const getUserGeographicAccessScopeRequestSchema: Schema<GetUserGeographicAccessScopeRequest> =
    s.lazySchema(() =>
      s.object<GetUserGeographicAccessScopeRequest>({
        targetCustomerId: s.string().check(s.minLength(1), s.maxLength(200)),
        userId: s.string().check(s.minLength(1), s.maxLength(200)),
        xTenantId: s.optional(s.string()),
      }),
    );

  export class GetUserGeographicAccessScopeError extends ApiError {
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

    static readonly errors: ErrorDecoders<GetUserGeographicAccessScopeError> = [
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

  export type ListGeographicAccessCountriesRequest = {
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

  export class ListGeographicAccessCountriesError extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"error3", Error>
      | Declared<"error4", Error>
      | Declared<"error5", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<ListGeographicAccessCountriesError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 403, kind: "error3", decode: { kind: "json", schema: errorSchema } },
      { on: 429, kind: "error4", decode: { kind: "json", schema: errorSchema } },
      { on: 503, kind: "error5", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type ListGeographicAccessCustomRegionsRequest = {
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

  export class ListGeographicAccessCustomRegionsError extends ApiError {
    declare readonly payload:
      | Declared<"problemDetails", ProblemDetails>
      | Declared<"problemDetails2", ProblemDetails>
      | Declared<"problemDetails3", ProblemDetails>
      | Declared<"problemDetails4", ProblemDetails>
      | Declared<"problemDetails5", ProblemDetails>
      | Declared<"problemDetails6", ProblemDetails>
      | Undeclared;

    static readonly errors: ErrorDecoders<ListGeographicAccessCustomRegionsError> = [
      { on: 400, kind: "problemDetails", decode: { kind: "json", schema: problemDetailsInternalSchema } },
      { on: 401, kind: "problemDetails2", decode: { kind: "json", schema: problemDetailsInternalSchema } },
      { on: 403, kind: "problemDetails3", decode: { kind: "json", schema: problemDetailsInternalSchema } },
      { on: 429, kind: "problemDetails4", decode: { kind: "json", schema: problemDetailsInternalSchema } },
      { on: 500, kind: "problemDetails5", decode: { kind: "json", schema: problemDetailsInternalSchema } },
      { on: 503, kind: "problemDetails6", decode: { kind: "json", schema: problemDetailsInternalSchema } },
    ];
  }

  export type UpdateCustomerGeographicAccessScopeRequest = {
    /**
     * Customer ID within the authenticated tenant's hierarchy whose geographic scope is managed.
     */
    targetCustomerId: string;
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
    body: UpdateGeographicAccessScopeRequest;
  };

  export const updateCustomerGeographicAccessScopeRequestSchema: Schema<UpdateCustomerGeographicAccessScopeRequest> =
    s.lazySchema(() =>
      s.object<UpdateCustomerGeographicAccessScopeRequest>({
        targetCustomerId: s.string().check(s.minLength(1), s.maxLength(200)),
        xTenantId: s.optional(s.string()),
        body: updateGeographicAccessScopeRequestSchema,
      }),
    );

  export class UpdateCustomerGeographicAccessScopeError extends ApiError {
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

    static readonly errors: ErrorDecoders<UpdateCustomerGeographicAccessScopeError> = [
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

  export type UpdateGeographicAccessCustomRegionRequestParams = {
    /** Stable service-generated custom-region ID. */
    customRegionId: string;
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
    body: UpdateGeographicAccessCustomRegionRequest;
  };

  export const updateGeographicAccessCustomRegionRequestParamsSchema: Schema<UpdateGeographicAccessCustomRegionRequestParams> =
    s.lazySchema(() =>
      s.object<UpdateGeographicAccessCustomRegionRequestParams>({
        customRegionId: s.string().check(s.minLength(1), s.maxLength(200)),
        xTenantId: s.optional(s.string()),
        body: updateGeographicAccessCustomRegionRequestSchema,
      }),
    );

  export class UpdateGeographicAccessCustomRegionError extends ApiError {
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

    static readonly errors: ErrorDecoders<UpdateGeographicAccessCustomRegionError> = [
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

  export type UpdateUserGeographicAccessScopeRequest = {
    /**
     * Customer ID within the authenticated tenant's hierarchy whose geographic scope is managed.
     */
    targetCustomerId: string;
    /** Unique user ID returned by GET /iam/v1/users that belongs to the target customer. */
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
    body: UpdateGeographicAccessScopeRequest;
  };

  export const updateUserGeographicAccessScopeRequestSchema: Schema<UpdateUserGeographicAccessScopeRequest> =
    s.lazySchema(() =>
      s.object<UpdateUserGeographicAccessScopeRequest>({
        targetCustomerId: s.string().check(s.minLength(1), s.maxLength(200)),
        userId: s.string().check(s.minLength(1), s.maxLength(200)),
        xTenantId: s.optional(s.string()),
        body: updateGeographicAccessScopeRequestSchema,
      }),
    );

  export class UpdateUserGeographicAccessScopeError extends ApiError {
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

    static readonly errors: ErrorDecoders<UpdateUserGeographicAccessScopeError> = [
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
