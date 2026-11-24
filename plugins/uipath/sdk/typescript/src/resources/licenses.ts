import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import {
  errorResponseUiPathPlatformManagementAuditLogsApiSchema,
  type ErrorResponseUiPathPlatformManagementAuditLogsApi,
} from "../models/error-response-ui-path-platform-management-audit-logs-api.js";
import {
  groupLicenseAllocationSchema,
  type GroupLicenseAllocation,
} from "../models/group-license-allocation.js";
import {
  updateGroupLicenseAllocationRequestSchema,
  type UpdateGroupLicenseAllocationRequest,
} from "../models/update-group-license-allocation-request.js";
import type { Servers } from "../servers.js";

/**
 * Manage license allocations across user groups and services
 */
export class Licenses {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * UiPath Get License Allocation for a Group
   *
   * @remarks
   * Retrieves the user license allocation rule for a specific group within the organization
   * account. Returns the license types allocated to the group and the current usage count. Requires
   * the PM.License or PM.License.Read OAuth scope.
   *
   * @returns License allocation for the group
   *
   * @throws {@link Licenses.GetGroupLicenseAllocationError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link UiPathError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getGroupLicenseAllocation(
    request: Licenses.GetGroupLicenseAllocationRequest,
    options?: RequestOptions,
  ): ApiPromise<GroupLicenseAllocation, Licenses.GetGroupLicenseAllocationError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.defaultUiPathPlatformManagementAuditLogsApi(
          "/{organizationName}/la/api/account/{accountId}/user-license/group/{groupId}",
        ),
        auth: this.#auth.bearerAuth,
        pathParams: [
          { name: "organizationName", value: request.organizationName, schema: s.string() },
          { name: "accountId", value: request.accountId, schema: s.string() },
          { name: "groupId", value: request.groupId, schema: s.string() },
        ],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: groupLicenseAllocationSchema },
        errorFactory: Licenses.GetGroupLicenseAllocationError,
      },
      options,
    );
  }

  /**
   * UiPath Update License Allocation for a Group
   *
   * @remarks
   * Allocates or updates user licenses for a specific group. The rule defines which license types
   * members of this group are entitled to. This controls the licenses automatically assigned when a
   * member of the group first logs in. Requires the PM.License OAuth scope.
   *
   * @returns License allocation updated successfully
   *
   * @throws {@link Licenses.UpdateGroupLicenseAllocationError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link UiPathError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  updateGroupLicenseAllocation(
    request: Licenses.UpdateGroupLicenseAllocationRequestParams,
    options?: RequestOptions,
  ): ApiPromise<GroupLicenseAllocation, Licenses.UpdateGroupLicenseAllocationError> {
    return this.#rawClient.execute(
      {
        method: "PUT",
        urlTemplate: this.#servers.defaultUiPathPlatformManagementAuditLogsApi(
          "/{organizationName}/la/api/account/{accountId}/user-license/group/{groupId}",
        ),
        auth: this.#auth.bearerAuth,
        pathParams: [
          { name: "organizationName", value: request.organizationName, schema: s.string() },
          { name: "accountId", value: request.accountId, schema: s.string() },
          { name: "groupId", value: request.groupId, schema: s.string() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: updateGroupLicenseAllocationRequestSchema },
      },
      {
        success: { kind: "json", schema: groupLicenseAllocationSchema },
        errorFactory: Licenses.UpdateGroupLicenseAllocationError,
      },
      options,
    );
  }
}

export namespace Licenses {
  export type GetGroupLicenseAllocationRequest = {
    /** The name of the UiPath organization */
    organizationName: string;
    /** Unique identifier of the organization account */
    accountId: string;
    /** Unique identifier of the user group */
    groupId: string;
  };

  export class GetGroupLicenseAllocationError extends ApiError {
    declare readonly payload:
      | Declared<
          "errorResponseUiPathPlatformManagementAuditLogsApi",
          ErrorResponseUiPathPlatformManagementAuditLogsApi
        >
      | Declared<
          "errorResponseUiPathPlatformManagementAuditLogsApi2",
          ErrorResponseUiPathPlatformManagementAuditLogsApi
        >
      | Undeclared;

    static readonly errors: ErrorDecoders<GetGroupLicenseAllocationError> = [
      {
        on: 401,
        kind: "errorResponseUiPathPlatformManagementAuditLogsApi",
        decode: { kind: "json", schema: errorResponseUiPathPlatformManagementAuditLogsApiSchema },
      },
      {
        on: 404,
        kind: "errorResponseUiPathPlatformManagementAuditLogsApi2",
        decode: { kind: "json", schema: errorResponseUiPathPlatformManagementAuditLogsApiSchema },
      },
    ];
  }

  export type UpdateGroupLicenseAllocationRequestParams = {
    /** The name of the UiPath organization */
    organizationName: string;
    /** Unique identifier of the organization account */
    accountId: string;
    /** Unique identifier of the user group */
    groupId: string;
    body: UpdateGroupLicenseAllocationRequest;
  };

  export class UpdateGroupLicenseAllocationError extends ApiError {
    declare readonly payload:
      | Declared<
          "errorResponseUiPathPlatformManagementAuditLogsApi",
          ErrorResponseUiPathPlatformManagementAuditLogsApi
        >
      | Declared<
          "errorResponseUiPathPlatformManagementAuditLogsApi2",
          ErrorResponseUiPathPlatformManagementAuditLogsApi
        >
      | Undeclared;

    static readonly errors: ErrorDecoders<UpdateGroupLicenseAllocationError> = [
      {
        on: 400,
        kind: "errorResponseUiPathPlatformManagementAuditLogsApi",
        decode: { kind: "json", schema: errorResponseUiPathPlatformManagementAuditLogsApiSchema },
      },
      {
        on: 401,
        kind: "errorResponseUiPathPlatformManagementAuditLogsApi2",
        decode: { kind: "json", schema: errorResponseUiPathPlatformManagementAuditLogsApiSchema },
      },
    ];
  }
}
