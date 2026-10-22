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
  listResponseRoleResponseSchema,
  type ListResponseRoleResponse,
} from "../models/list-response-role-response.js";
import { roleCreateRequestSchema, type RoleCreateRequest } from "../models/role-create-request.js";
import { rolePropertiesSchema, type RoleProperties } from "../models/role-properties.js";
import { roleResponseSchema, type RoleResponse } from "../models/role-response.js";
import { roleUpdateRequestSchema, type RoleUpdateRequest } from "../models/role-update-request.js";
import { endDatetime3Schema, type EndDatetime3 } from "../models/unions/end-datetime3.js";
import { fields1Schema, type Fields1 } from "../models/unions/fields1.js";
import { newRoleIdSchema, type NewRoleId } from "../models/unions/new-role-id.js";
import { orderByDirection1Schema, type OrderByDirection1 } from "../models/unions/order-by-direction1.js";
import { orderBy11Schema, type OrderBy11 } from "../models/unions/order-by11.js";
import { pageSchema, type Page } from "../models/unions/page.js";
import { startDatetime3Schema, type StartDatetime3 } from "../models/unions/start-datetime3.js";
import type { Servers } from "../servers.js";

/**
 * Operations related to roles. A role is a collection of permissions that can be assigned to users
 * to control their access to various features within the Syllable system.
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
   * Create Role
   *
   * @remarks
   * Create a new role.
   *
   * @returns Successful Response
   *
   * @throws {@link Roles.RolesCreateError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link SyllableSdkError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  rolesCreate(
    request: Roles.RolesCreateRequest,
    options?: RequestOptions,
  ): ApiPromise<RoleResponse, Roles.RolesCreateError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/api/v1/roles/"),
        auth: this.#auth.apiKeyHeader,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: roleCreateRequestSchema },
      },
      {
        success: { kind: "json", schema: roleResponseSchema },
        errorFactory: Roles.RolesCreateError,
      },
      options,
    );
  }

  /**
   * Delete Role
   *
   * @remarks
   * Delete a role. Optionally, reassign existing users with that role to a new role.
   *
   * @returns Successful Response
   *
   * @throws {@link Roles.RolesDeleteError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link SyllableSdkError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  rolesDelete(
    request: Roles.RolesDeleteRequest,
    options?: RequestOptions,
  ): ApiPromise<Record<string, unknown>, Roles.RolesDeleteError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default("/api/v1/roles/{role_id}"),
        auth: this.#auth.apiKeyHeader,
        pathParams: [{ name: "role_id", value: request.roleId, schema: s.int() }],
        query: [
          { name: "reason", value: request.reason, schema: s.string() },
          {
            name: "new_role_id",
            value: request.newRoleId,
            schema: s.optional(s.lazy(() => newRoleIdSchema)),
          },
        ],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.record(s.string(), s.unknown()) },
        errorFactory: Roles.RolesDeleteError,
      },
      options,
    );
  }

  /**
   * Get Role
   *
   * @remarks
   * Fetch a given role.
   *
   * @returns Successful Response
   *
   * @throws {@link Roles.RolesGetByIdError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link SyllableSdkError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  rolesGetById(
    request: Roles.RolesGetByIdRequest,
    options?: RequestOptions,
  ): ApiPromise<RoleResponse, Roles.RolesGetByIdError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/v1/roles/{role_id}"),
        auth: this.#auth.apiKeyHeader,
        pathParams: [{ name: "role_id", value: request.roleId, schema: s.int() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: roleResponseSchema },
        errorFactory: Roles.RolesGetByIdError,
      },
      options,
    );
  }

  /**
   * List Roles
   *
   * @remarks
   * List the existing roles.
   *
   * @returns Successful Response
   *
   * @throws {@link Roles.RolesListError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link SyllableSdkError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  rolesList(
    request: Roles.RolesListRequest,
    options?: RequestOptions,
  ): ApiPromise<ListResponseRoleResponse, Roles.RolesListError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/v1/roles/"),
        auth: this.#auth.apiKeyHeader,
        pathParams: [],
        query: [
          { name: "page", value: request.page, schema: s.optional(s.lazy(() => pageSchema)) },
          { name: "limit", value: request.limit, schema: s.defaulted(s.int(), 25) },
          {
            name: "search_fields",
            value: request.searchFields,
            schema: s.optional(s.array(s.lazy(() => rolePropertiesSchema))),
          },
          {
            name: "search_field_values",
            value: request.searchFieldValues,
            schema: s.optional(s.array(s.string())),
          },
          { name: "order_by", value: request.orderBy, schema: s.optional(s.lazy(() => orderBy11Schema)) },
          {
            name: "order_by_direction",
            value: request.orderByDirection,
            schema: s.optional(s.lazy(() => orderByDirection1Schema)),
          },
          { name: "fields", value: request.fields, schema: s.optional(s.lazy(() => fields1Schema)) },
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
        success: { kind: "json", schema: listResponseRoleResponseSchema },
        errorFactory: Roles.RolesListError,
      },
      options,
    );
  }

  /**
   * Update Role
   *
   * @remarks
   * Update an existing role.
   *
   * @returns Successful Response
   *
   * @throws {@link Roles.RolesUpdateError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link SyllableSdkError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  rolesUpdate(
    request: Roles.RolesUpdateRequest,
    options?: RequestOptions,
  ): ApiPromise<RoleResponse, Roles.RolesUpdateError> {
    return this.#rawClient.execute(
      {
        method: "PUT",
        urlTemplate: this.#servers.default("/api/v1/roles/"),
        auth: this.#auth.apiKeyHeader,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: roleUpdateRequestSchema },
      },
      {
        success: { kind: "json", schema: roleResponseSchema },
        errorFactory: Roles.RolesUpdateError,
      },
      options,
    );
  }
}

export namespace Roles {
  export type RolesCreateRequest = {
    body: RoleCreateRequest;
  };

  export class RolesCreateError extends ApiError {
    declare readonly payload: Declared<"httpValidationError", HttpValidationError> | Undeclared;

    static readonly errors: ErrorDecoders<RolesCreateError> = [
      { on: 422, kind: "httpValidationError", decode: { kind: "json", schema: httpValidationErrorSchema } },
    ];
  }

  export type RolesDeleteRequest = {
    /** The ID of the role to delete */
    roleId: number;
    /** The reason for deleting the role */
    reason: string;
    /**
     * Users with the deleted role will be reassigned to the new role, if a new role ID is provided
     */
    newRoleId?: NewRoleId;
  };

  export class RolesDeleteError extends ApiError {
    declare readonly payload: Declared<"httpValidationError", HttpValidationError> | Undeclared;

    static readonly errors: ErrorDecoders<RolesDeleteError> = [
      { on: 422, kind: "httpValidationError", decode: { kind: "json", schema: httpValidationErrorSchema } },
    ];
  }

  export type RolesGetByIdRequest = {
    roleId: number;
  };

  export class RolesGetByIdError extends ApiError {
    declare readonly payload: Declared<"httpValidationError", HttpValidationError> | Undeclared;

    static readonly errors: ErrorDecoders<RolesGetByIdError> = [
      { on: 422, kind: "httpValidationError", decode: { kind: "json", schema: httpValidationErrorSchema } },
    ];
  }

  export type RolesListRequest = {
    /** The page number from which to start (0-based) */
    page?: Page;
    /** The maximum number of items to return @default 25 */
    limit?: number;
    /** String names of fields to search. Correspond by index to search field values */
    searchFields?: RoleProperties[];
    /**
     * Values of fields to search. Correspond by index to search fields. Unless field name contains
     * "list", an individual search field value cannot be a list
     */
    searchFieldValues?: string[];
    /** The field whose value should be used to order the results */
    orderBy?: OrderBy11;
    /** The direction in which to order the results */
    orderByDirection?: OrderByDirection1;
    /** The fields to include in the response */
    fields?: Fields1;
    /** The start datetime for filtering results */
    startDatetime?: StartDatetime3;
    /** The end datetime for filtering results */
    endDatetime?: EndDatetime3;
  };

  export class RolesListError extends ApiError {
    declare readonly payload: Declared<"httpValidationError", HttpValidationError> | Undeclared;

    static readonly errors: ErrorDecoders<RolesListError> = [
      { on: 422, kind: "httpValidationError", decode: { kind: "json", schema: httpValidationErrorSchema } },
    ];
  }

  export type RolesUpdateRequest = {
    body: RoleUpdateRequest;
  };

  export class RolesUpdateError extends ApiError {
    declare readonly payload: Declared<"httpValidationError", HttpValidationError> | Undeclared;

    static readonly errors: ErrorDecoders<RolesUpdateError> = [
      { on: 422, kind: "httpValidationError", decode: { kind: "json", schema: httpValidationErrorSchema } },
    ];
  }
}
