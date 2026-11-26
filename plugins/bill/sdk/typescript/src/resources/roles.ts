import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { noneAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { bdcErrorInternalSchema, type BdcError } from "../models/bdc-error.js";
import {
  listResponseDtoRoleResponseDtoSchema,
  type ListResponseDtoRoleResponseDto,
} from "../models/list-response-dto-role-response-dto.js";
import { roleResponseDtoSchema, type RoleResponseDto } from "../models/role-response-dto.js";
import type { Servers } from "../servers.js";

export class Roles {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;

  constructor(rawClient: RawClient, servers: Servers) {
    this.#rawClient = rawClient;
    this.#servers = servers;
  }

  /**
   * Get user role details
   *
   * @remarks
   * Get details about an existing user role.
   *
   * @returns Get user role details response
   *
   * @throws {@link Roles.GetOrganizationUserRoleError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link BillError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getOrganizationUserRole(
    request: Roles.GetOrganizationUserRoleRequest,
    options?: RequestOptions,
  ): ApiPromise<RoleResponseDto, Roles.GetOrganizationUserRoleError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v3/roles/{roleId}"),
        auth: noneAuth,
        pathParams: [{ name: "roleId", value: request.roleId, schema: s.string() }],
        query: [],
        headers: [
          { name: "sessionId", value: request.sessionId, schema: s.optionalNullable(s.string()) },
          { name: "devKey", value: request.devKey, schema: s.optionalNullable(s.string()) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: roleResponseDtoSchema },
        errorFactory: Roles.GetOrganizationUserRoleError,
      },
      options,
    );
  }

  /**
   * Get list of user roles
   *
   * @remarks
   * Get a list of user role objects. By default, you get 20 results on one page of results. Set
   * `max` in your request to get up to 100 results on one page.
   *
   * See Search operations with lists in the Guides section for filtering, sorting, and pagination
   * examples.
   *
   * @returns Get list of user roles response
   *
   * @throws {@link Roles.ListOrganizationUserRolesError} when the API answers with an error status
   * — narrow on `err.payload.kind`
   *
   * @throws {@link BillError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listOrganizationUserRoles(
    request: Roles.ListOrganizationUserRolesRequest = {},
    options?: RequestOptions,
  ): ApiPromise<ListResponseDtoRoleResponseDto, Roles.ListOrganizationUserRolesError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v3/roles"),
        auth: noneAuth,
        pathParams: [],
        query: [
          { name: "max", value: request.max, schema: s.optionalNullable(s.int()) },
          { name: "sort", value: request.sort, schema: s.optionalNullable(s.string()) },
          { name: "filters", value: request.filters, schema: s.optionalNullable(s.string()) },
          { name: "page", value: request.page, schema: s.optionalNullable(s.string()) },
        ],
        headers: [
          { name: "sessionId", value: request.sessionId, schema: s.optionalNullable(s.string()) },
          { name: "devKey", value: request.devKey, schema: s.optionalNullable(s.string()) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: listResponseDtoRoleResponseDtoSchema },
        errorFactory: Roles.ListOrganizationUserRolesError,
      },
      options,
    );
  }
}

export namespace Roles {
  export type GetOrganizationUserRoleRequest = {
    roleId: string;
    sessionId?: string | null;
    devKey?: string | null;
  };

  export const getOrganizationUserRoleRequestSchema: Schema<GetOrganizationUserRoleRequest> = s.lazySchema(
    () =>
      s.object<GetOrganizationUserRoleRequest>({
        roleId: s.string().check(s.minLength(1)),
        sessionId: s.optionalNullable(s.string()),
        devKey: s.optionalNullable(s.string()),
      }),
  );

  export class GetOrganizationUserRoleError extends ApiError {
    declare readonly payload:
      | Declared<"error4XX", BdcError[]>
      | Declared<"error5XX", BdcError[]>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetOrganizationUserRoleError> = [
      {
        on: [400, 499],
        kind: "error4XX",
        decode: { kind: "json", schema: s.array(s.lazy(() => bdcErrorInternalSchema)) },
      },
      {
        on: [500, 599],
        kind: "error5XX",
        decode: { kind: "json", schema: s.array(s.lazy(() => bdcErrorInternalSchema)) },
      },
    ];
  }

  export type ListOrganizationUserRolesRequest = {
    max?: number | null;
    sort?: string | null;
    filters?: string | null;
    page?: string | null;
    sessionId?: string | null;
    devKey?: string | null;
  };

  export const listOrganizationUserRolesRequestSchema: Schema<ListOrganizationUserRolesRequest> =
    s.lazySchema(() =>
      s.object<ListOrganizationUserRolesRequest>({
        max: s.optionalNullable(s.int().check(s.gte(1), s.lte(100))),
        sort: s.optionalNullable(s.string()),
        filters: s.optionalNullable(s.string()),
        page: s.optionalNullable(s.string()),
        sessionId: s.optionalNullable(s.string()),
        devKey: s.optionalNullable(s.string()),
      }),
    );

  export class ListOrganizationUserRolesError extends ApiError {
    declare readonly payload:
      | Declared<"error4XX", BdcError[]>
      | Declared<"error5XX", BdcError[]>
      | Undeclared;

    static readonly errors: ErrorDecoders<ListOrganizationUserRolesError> = [
      {
        on: [400, 499],
        kind: "error4XX",
        decode: { kind: "json", schema: s.array(s.lazy(() => bdcErrorInternalSchema)) },
      },
      {
        on: [500, 599],
        kind: "error5XX",
        decode: { kind: "json", schema: s.array(s.lazy(() => bdcErrorInternalSchema)) },
      },
    ];
  }
}
