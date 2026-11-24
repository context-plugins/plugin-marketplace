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
  createRoleRequestInternalSchema,
  createRoleRequestSchema,
  type CreateRoleRequest,
} from "../models/create-role-request.js";
import { errorSchema, type Error } from "../models/error.js";
import { iamV1RolesResponseSchema, type IamV1RolesResponse } from "../models/iam-v1-roles-response.js";
import { problemDetailsInternalSchema, type ProblemDetails } from "../models/problem-details.js";
import { roleDoiTRolesApiSchema, type RoleDoiTRolesApi } from "../models/role-doi-troles-api.js";
import { updateRoleRequestInternalSchema, type UpdateRoleRequest } from "../models/update-role-request.js";
import type { Servers } from "../servers.js";

/**
 * Manage user permissions and access levels in your organization.
 */
export class Roles {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Create role
   *
   * @remarks
   * Creates a custom role in the authenticated customer with the given permission IDs. Permission
   * IDs are the `permissions` values returned by `GET /iam/v1/roles`. A service account of a parent
   * tenant can create the role in a descendant tenant by setting `X-Tenant-Id` to that tenant's
   * customer ID. Requires the `Idempotency-Key` header so a retried request does not create a
   * second role.
   *
   * @returns Created - Role created.
   *
   * @throws {@link Roles.CreateRoleError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link DoiTError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  createRole(
    request: Roles.CreateRoleRequestParams,
    options?: RequestOptions,
  ): ApiPromise<RoleDoiTRolesApi, Roles.CreateRoleError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/iam/v1/roles"),
        auth: anyAuth(this.#auth.apiKey, allAuth(this.#auth.tenantId, this.#auth.apiKey)),
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: request.idempotencyKey, schema: s.string() }],
        body: { kind: "json", value: request.body, schema: createRoleRequestInternalSchema },
      },
      {
        success: { kind: "json", schema: roleDoiTRolesApiSchema },
        errorFactory: Roles.CreateRoleError,
      },
      options,
    );
  }

  /**
   * Delete role
   *
   * @remarks
   * Deletes a custom role. Preset roles cannot be deleted, and a role still assigned to users or
   * groups must be unassigned first. A service account of a parent tenant can delete a descendant
   * tenant's role by setting `X-Tenant-Id` to that tenant's customer ID.
   *
   * @returns No Content - Role deleted.
   *
   * @throws {@link Roles.DeleteRoleError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link DoiTError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  deleteRole(
    request: Roles.DeleteRoleRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, Roles.DeleteRoleError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default("/iam/v1/roles/{id}"),
        auth: anyAuth(this.#auth.apiKey, allAuth(this.#auth.tenantId, this.#auth.apiKey)),
        pathParams: [{ name: "id", value: request.id, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: Roles.DeleteRoleError,
      },
      options,
    );
  }

  /**
   * Get role
   *
   * @remarks
   * Returns a single role by ID. Preset roles are visible to every customer; a custom role is
   * returned only to the customer that owns it. A service account of a parent tenant can read a
   * descendant tenant's role by setting `X-Tenant-Id` to that tenant's customer ID.
   *
   * @returns OK - Role returned.
   *
   * @throws {@link Roles.GetRoleError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link DoiTError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getRole(
    request: Roles.GetRoleRequest,
    options?: RequestOptions,
  ): ApiPromise<RoleDoiTRolesApi, Roles.GetRoleError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/iam/v1/roles/{id}"),
        auth: anyAuth(this.#auth.apiKey, allAuth(this.#auth.tenantId, this.#auth.apiKey)),
        pathParams: [{ name: "id", value: request.id, schema: s.string() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: roleDoiTRolesApiSchema },
        errorFactory: Roles.GetRoleError,
      },
      options,
    );
  }

  /**
   * List roles
   *
   * @remarks
   * Returns a list of roles.
   *
   * @returns OK - List of roles returned.
   *
   * @throws {@link Roles.ListRolesError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link DoiTError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listRoles(options?: RequestOptions): ApiPromise<IamV1RolesResponse, Roles.ListRolesError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/iam/v1/roles"),
        auth: anyAuth(this.#auth.apiKey, allAuth(this.#auth.tenantId, this.#auth.apiKey)),
        pathParams: [],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: iamV1RolesResponseSchema },
        errorFactory: Roles.ListRolesError,
      },
      options,
    );
  }

  /**
   * Update role
   *
   * @remarks
   * Updates the `name`, `description` and/or `permissions` of a custom role. Only the fields
   * present in the body change; `permissions` replaces the full list when present. Preset roles
   * cannot be modified. A service account of a parent tenant can update a descendant tenant's role
   * by setting `X-Tenant-Id` to that tenant's customer ID.
   *
   * @returns OK - Role updated.
   *
   * @throws {@link Roles.UpdateRoleError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link DoiTError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  updateRole(
    request: Roles.UpdateRoleRequestParams,
    options?: RequestOptions,
  ): ApiPromise<RoleDoiTRolesApi, Roles.UpdateRoleError> {
    return this.#rawClient.execute(
      {
        method: "PATCH",
        urlTemplate: this.#servers.default("/iam/v1/roles/{id}"),
        auth: anyAuth(this.#auth.apiKey, allAuth(this.#auth.tenantId, this.#auth.apiKey)),
        pathParams: [{ name: "id", value: request.id, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: updateRoleRequestInternalSchema },
      },
      {
        success: { kind: "json", schema: roleDoiTRolesApiSchema },
        errorFactory: Roles.UpdateRoleError,
      },
      options,
    );
  }
}

export namespace Roles {
  export type CreateRoleRequestParams = {
    /**
     * Caller-chosen key (1-255 characters) that makes retries safe; the same key with the same body
     * returns the original response.
     */
    idempotencyKey: string;
    body: CreateRoleRequest;
  };

  export const createRoleRequestParamsSchema: Schema<CreateRoleRequestParams> = s.lazySchema(() =>
    s.object<CreateRoleRequestParams>({
      idempotencyKey: s.string().check(s.minLength(1), s.maxLength(255)),
      body: createRoleRequestSchema,
    }),
  );

  export class CreateRoleError extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"error3", Error>
      | Declared<"error4", Error>
      | Declared<"problemDetails", ProblemDetails>
      | Declared<"error5", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<CreateRoleError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 403, kind: "error3", decode: { kind: "json", schema: errorSchema } },
      { on: 409, kind: "error4", decode: { kind: "json", schema: errorSchema } },
      { on: 422, kind: "problemDetails", decode: { kind: "json", schema: problemDetailsInternalSchema } },
      { on: 500, kind: "error5", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type DeleteRoleRequest = {
    /** The unique ID of the role to delete. */
    id: string;
  };

  export class DeleteRoleError extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"error3", Error>
      | Declared<"error4", Error>
      | Declared<"error5", Error>
      | Declared<"error6", Error>
      | Declared<"error7", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<DeleteRoleError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 403, kind: "error3", decode: { kind: "json", schema: errorSchema } },
      { on: 404, kind: "error4", decode: { kind: "json", schema: errorSchema } },
      { on: 409, kind: "error5", decode: { kind: "json", schema: errorSchema } },
      { on: 503, kind: "error6", decode: { kind: "json", schema: errorSchema } },
      { on: 500, kind: "error7", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type GetRoleRequest = {
    /** The unique ID of the role. */
    id: string;
  };

  export class GetRoleError extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"error3", Error>
      | Declared<"error4", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetRoleError> = [
      { on: 401, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 403, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 404, kind: "error3", decode: { kind: "json", schema: errorSchema } },
      { on: 500, kind: "error4", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export class ListRolesError extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"error3", Error>
      | Declared<"error4", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<ListRolesError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 403, kind: "error3", decode: { kind: "json", schema: errorSchema } },
      { on: 500, kind: "error4", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type UpdateRoleRequestParams = {
    /** The unique ID of the role to update. */
    id: string;
    body: UpdateRoleRequest;
  };

  export class UpdateRoleError extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"error3", Error>
      | Declared<"error4", Error>
      | Declared<"error5", Error>
      | Declared<"error6", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<UpdateRoleError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 403, kind: "error3", decode: { kind: "json", schema: errorSchema } },
      { on: 404, kind: "error4", decode: { kind: "json", schema: errorSchema } },
      { on: 409, kind: "error5", decode: { kind: "json", schema: errorSchema } },
      { on: 500, kind: "error6", decode: { kind: "json", schema: errorSchema } },
    ];
  }
}
