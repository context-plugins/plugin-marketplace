import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import { createGroupRequestSchema, type CreateGroupRequest } from "../models/create-group-request.js";
import {
  errorResponseUiPathPlatformManagementAuditLogsApiSchema,
  type ErrorResponseUiPathPlatformManagementAuditLogsApi,
} from "../models/error-response-ui-path-platform-management-audit-logs-api.js";
import { groupSchema, type Group } from "../models/group.js";
import {
  identityApiGroupResponseSchema,
  type IdentityApiGroupResponse,
} from "../models/identity-api-group-response.js";
import type { Servers } from "../servers.js";

/**
 * Manage user groups and group memberships
 */
export class Groups {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * UiPath Create a Group
   *
   * @remarks
   * Creates a new user group in the organization. Groups are used to assign roles in bulk, allocate
   * licenses, and control access to automation resources. Members can be added after group
   * creation. Requires the PM.Groups OAuth scope.
   *
   * @returns Group created successfully
   *
   * @throws {@link Groups.CreateGroupError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link UiPathError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  createGroup(
    request: Groups.CreateGroupRequestParams,
    options?: RequestOptions,
  ): ApiPromise<Group, Groups.CreateGroupError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.defaultUiPathPlatformManagementAuditLogsApi(
          "/{organizationName}/identity_/api/Group",
        ),
        auth: this.#auth.bearerAuth,
        pathParams: [{ name: "organizationName", value: request.organizationName, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: createGroupRequestSchema },
      },
      {
        success: { kind: "json", schema: groupSchema },
        errorFactory: Groups.CreateGroupError,
      },
      options,
    );
  }

  /**
   * UiPath Get a Group by ID
   *
   * @remarks
   * Retrieves a specific user group by its unique identifier within the specified organizational
   * partition. Returns group details including name, description, and member count. Requires the
   * PM.Groups or PM.Groups.Read OAuth scope.
   *
   * @returns The requested group
   *
   * @throws {@link Groups.GetGroupError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link UiPathError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getGroup(
    request: Groups.GetGroupRequest,
    options?: RequestOptions,
  ): ApiPromise<Group, Groups.GetGroupError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.defaultUiPathPlatformManagementAuditLogsApi(
          "/{organizationName}/identity_/api/Group/{partitionGlobalId}/{groupId}",
        ),
        auth: this.#auth.bearerAuth,
        pathParams: [
          { name: "organizationName", value: request.organizationName, schema: s.string() },
          { name: "partitionGlobalId", value: request.partitionGlobalId, schema: s.string() },
          { name: "groupId", value: request.groupId, schema: s.string() },
        ],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: groupSchema },
        errorFactory: Groups.GetGroupError,
      },
      options,
    );
  }

  /**
   * UiPath List Groups
   *
   * @remarks
   * Retrieves all user groups within the specified organizational partition (tenant or
   * organization). Groups aggregate users for role assignment and license allocation. Requires the
   * PM.Groups or PM.Groups.Read OAuth scope.
   *
   * @returns A list of user groups
   *
   * @throws {@link Groups.ListGroupsError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link UiPathError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listGroups(
    request: Groups.ListGroupsRequest,
    options?: RequestOptions,
  ): ApiPromise<IdentityApiGroupResponse, Groups.ListGroupsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.defaultUiPathPlatformManagementAuditLogsApi(
          "/{organizationName}/identity_/api/Group/{partitionGlobalId}",
        ),
        auth: this.#auth.bearerAuth,
        pathParams: [
          { name: "organizationName", value: request.organizationName, schema: s.string() },
          { name: "partitionGlobalId", value: request.partitionGlobalId, schema: s.string() },
        ],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: identityApiGroupResponseSchema },
        errorFactory: Groups.ListGroupsError,
      },
      options,
    );
  }
}

export namespace Groups {
  export type CreateGroupRequestParams = {
    /** The name of the UiPath organization */
    organizationName: string;
    body: CreateGroupRequest;
  };

  export class CreateGroupError extends ApiError {
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

    static readonly errors: ErrorDecoders<CreateGroupError> = [
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

  export type GetGroupRequest = {
    /** The name of the UiPath organization */
    organizationName: string;
    /** Global partition identifier for the organization or tenant scope */
    partitionGlobalId: string;
    /** Unique identifier of the group */
    groupId: string;
  };

  export class GetGroupError extends ApiError {
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

    static readonly errors: ErrorDecoders<GetGroupError> = [
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

  export type ListGroupsRequest = {
    /** The name of the UiPath organization */
    organizationName: string;
    /** Global partition identifier for the organization or tenant scope */
    partitionGlobalId: string;
  };

  export class ListGroupsError extends ApiError {
    declare readonly payload:
      | Declared<
          "errorResponseUiPathPlatformManagementAuditLogsApi",
          ErrorResponseUiPathPlatformManagementAuditLogsApi
        >
      | Undeclared;

    static readonly errors: ErrorDecoders<ListGroupsError> = [
      {
        on: 401,
        kind: "errorResponseUiPathPlatformManagementAuditLogsApi",
        decode: { kind: "json", schema: errorResponseUiPathPlatformManagementAuditLogsApiSchema },
      },
    ];
  }
}
