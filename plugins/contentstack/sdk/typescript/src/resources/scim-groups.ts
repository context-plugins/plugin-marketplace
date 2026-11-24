import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import { scimErrorSchema, type ScimError } from "../models/scim-error.js";
import { scimGroupSchema, type ScimGroup } from "../models/scim-group.js";
import { scimListResponseSchema, type ScimListResponse } from "../models/scim-list-response.js";
import { scimPatchRequestSchema, type ScimPatchRequest } from "../models/scim-patch-request.js";
import type { Servers } from "../servers.js";

/**
 * SCIM group endpoints allow Identity Providers to manage group memberships in Contentstack, which
 * map to role-based access control within the CMS.
 */
export class ScimGroups {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Create a SCIM group
   *
   * @remarks
   * Creates a new group in the Contentstack organization via SCIM. Groups can be mapped to specific
   * roles and stacks in Contentstack to control member access permissions.
   *
   * @returns The newly created SCIM group resource.
   *
   * @throws {@link ScimGroups.CreateScimGroupError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link ContentstackError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  createScimGroup(
    request: ScimGroups.CreateScimGroupRequest,
    options?: RequestOptions,
  ): ApiPromise<ScimGroup, ScimGroups.CreateScimGroupError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.defaultContentstackScimScimGroupsApi(
          "/scim/v2.0/organizations/{organization_uid}/Groups",
        ),
        auth: this.#auth.bearerAuth,
        pathParams: [{ name: "organization_uid", value: request.organizationUid, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: scimGroupSchema },
      },
      {
        success: { kind: "json", schema: scimGroupSchema },
        errorFactory: ScimGroups.CreateScimGroupError,
      },
      options,
    );
  }

  /**
   * Delete a SCIM group
   *
   * @remarks
   * Removes a SCIM group from the Contentstack organization. Members of the group retain their
   * individual user accounts but lose the role permissions granted by the group mapping.
   *
   * @returns Group deleted successfully.
   *
   * @throws {@link ScimGroups.DeleteScimGroupError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link ContentstackError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  deleteScimGroup(
    request: ScimGroups.DeleteScimGroupRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, ScimGroups.DeleteScimGroupError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.defaultContentstackScimScimGroupsApi(
          "/scim/v2.0/organizations/{organization_uid}/Groups/{group_id}",
        ),
        auth: this.#auth.bearerAuth,
        pathParams: [
          { name: "organization_uid", value: request.organizationUid, schema: s.string() },
          { name: "group_id", value: request.groupId, schema: s.string() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: ScimGroups.DeleteScimGroupError,
      },
      options,
    );
  }

  /**
   * Get a SCIM group
   *
   * @remarks
   * Retrieves the SCIM Group resource for a specific group by its SCIM group ID within the
   * organization.
   *
   * @returns The SCIM group resource.
   *
   * @throws {@link ScimGroups.GetScimGroupError} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link ContentstackError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getScimGroup(
    request: ScimGroups.GetScimGroupRequest,
    options?: RequestOptions,
  ): ApiPromise<ScimGroup, ScimGroups.GetScimGroupError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.defaultContentstackScimScimGroupsApi(
          "/scim/v2.0/organizations/{organization_uid}/Groups/{group_id}",
        ),
        auth: this.#auth.bearerAuth,
        pathParams: [
          { name: "organization_uid", value: request.organizationUid, schema: s.string() },
          { name: "group_id", value: request.groupId, schema: s.string() },
        ],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: scimGroupSchema },
        errorFactory: ScimGroups.GetScimGroupError,
      },
      options,
    );
  }

  /**
   * List SCIM groups
   *
   * @remarks
   * Retrieves all groups in the organization following the SCIM 2.0 ListResponse format. Supports
   * filtering by displayName for group lookup during IdP sync operations.
   *
   * @returns A SCIM ListResponse containing group resources.
   *
   * @throws {@link ScimGroups.ListScimGroupsError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link ContentstackError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listScimGroups(
    request: ScimGroups.ListScimGroupsRequest,
    options?: RequestOptions,
  ): ApiPromise<ScimListResponse, ScimGroups.ListScimGroupsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.defaultContentstackScimScimGroupsApi(
          "/scim/v2.0/organizations/{organization_uid}/Groups",
        ),
        auth: this.#auth.bearerAuth,
        pathParams: [{ name: "organization_uid", value: request.organizationUid, schema: s.string() }],
        query: [{ name: "filter", value: request.filter, schema: s.optional(s.string()) }],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: scimListResponseSchema },
        errorFactory: ScimGroups.ListScimGroupsError,
      },
      options,
    );
  }

  /**
   * Replace a SCIM group
   *
   * @remarks
   * Fully replaces a SCIM group resource including all member assignments. Use this to synchronize
   * the complete group membership from the IdP.
   *
   * @returns The updated SCIM group resource.
   *
   * @throws {@link ScimGroups.ReplaceScimGroupError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link ContentstackError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  replaceScimGroup(
    request: ScimGroups.ReplaceScimGroupRequest,
    options?: RequestOptions,
  ): ApiPromise<ScimGroup, ScimGroups.ReplaceScimGroupError> {
    return this.#rawClient.execute(
      {
        method: "PUT",
        urlTemplate: this.#servers.defaultContentstackScimScimGroupsApi(
          "/scim/v2.0/organizations/{organization_uid}/Groups/{group_id}",
        ),
        auth: this.#auth.bearerAuth,
        pathParams: [
          { name: "organization_uid", value: request.organizationUid, schema: s.string() },
          { name: "group_id", value: request.groupId, schema: s.string() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: scimGroupSchema },
      },
      {
        success: { kind: "json", schema: scimGroupSchema },
        errorFactory: ScimGroups.ReplaceScimGroupError,
      },
      options,
    );
  }

  /**
   * Update a SCIM group
   *
   * @remarks
   * Partially updates a SCIM group using SCIM 2.0 PATCH operations. Commonly used to add or remove
   * individual members from the group without replacing the entire membership list.
   *
   * @returns The updated SCIM group resource.
   *
   * @throws {@link ScimGroups.UpdateScimGroupError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link ContentstackError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  updateScimGroup(
    request: ScimGroups.UpdateScimGroupRequest,
    options?: RequestOptions,
  ): ApiPromise<ScimGroup, ScimGroups.UpdateScimGroupError> {
    return this.#rawClient.execute(
      {
        method: "PATCH",
        urlTemplate: this.#servers.defaultContentstackScimScimGroupsApi(
          "/scim/v2.0/organizations/{organization_uid}/Groups/{group_id}",
        ),
        auth: this.#auth.bearerAuth,
        pathParams: [
          { name: "organization_uid", value: request.organizationUid, schema: s.string() },
          { name: "group_id", value: request.groupId, schema: s.string() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: scimPatchRequestSchema },
      },
      {
        success: { kind: "json", schema: scimGroupSchema },
        errorFactory: ScimGroups.UpdateScimGroupError,
      },
      options,
    );
  }
}

export namespace ScimGroups {
  export type CreateScimGroupRequest = {
    /** The unique identifier of the Contentstack organization. */
    organizationUid: string;
    body: ScimGroup;
  };

  export class CreateScimGroupError extends ApiError {
    declare readonly payload:
      | Declared<"scimError", ScimError>
      | Declared<"scimError2", ScimError>
      | Undeclared;

    static readonly errors: ErrorDecoders<CreateScimGroupError> = [
      { on: 400, kind: "scimError", decode: { kind: "json", schema: scimErrorSchema } },
      { on: 401, kind: "scimError2", decode: { kind: "json", schema: scimErrorSchema } },
    ];
  }

  export type DeleteScimGroupRequest = {
    /** The unique identifier of the Contentstack organization. */
    organizationUid: string;
    /** The SCIM group ID of the group within the organization. */
    groupId: string;
  };

  export class DeleteScimGroupError extends ApiError {
    declare readonly payload:
      | Declared<"scimError", ScimError>
      | Declared<"scimError2", ScimError>
      | Undeclared;

    static readonly errors: ErrorDecoders<DeleteScimGroupError> = [
      { on: 401, kind: "scimError", decode: { kind: "json", schema: scimErrorSchema } },
      { on: 404, kind: "scimError2", decode: { kind: "json", schema: scimErrorSchema } },
    ];
  }

  export type GetScimGroupRequest = {
    /** The unique identifier of the Contentstack organization. */
    organizationUid: string;
    /** The SCIM group ID of the group within the organization. */
    groupId: string;
  };

  export class GetScimGroupError extends ApiError {
    declare readonly payload:
      | Declared<"scimError", ScimError>
      | Declared<"scimError2", ScimError>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetScimGroupError> = [
      { on: 401, kind: "scimError", decode: { kind: "json", schema: scimErrorSchema } },
      { on: 404, kind: "scimError2", decode: { kind: "json", schema: scimErrorSchema } },
    ];
  }

  export type ListScimGroupsRequest = {
    /** The unique identifier of the Contentstack organization. */
    organizationUid: string;
    /** SCIM filter expression for searching groups. Example: displayName eq "Editors" */
    filter?: string;
  };

  export class ListScimGroupsError extends ApiError {
    declare readonly payload: Declared<"scimError", ScimError> | Undeclared;

    static readonly errors: ErrorDecoders<ListScimGroupsError> = [
      { on: 401, kind: "scimError", decode: { kind: "json", schema: scimErrorSchema } },
    ];
  }

  export type ReplaceScimGroupRequest = {
    /** The unique identifier of the Contentstack organization. */
    organizationUid: string;
    /** The SCIM group ID of the group within the organization. */
    groupId: string;
    body: ScimGroup;
  };

  export class ReplaceScimGroupError extends ApiError {
    declare readonly payload:
      | Declared<"scimError", ScimError>
      | Declared<"scimError2", ScimError>
      | Undeclared;

    static readonly errors: ErrorDecoders<ReplaceScimGroupError> = [
      { on: 401, kind: "scimError", decode: { kind: "json", schema: scimErrorSchema } },
      { on: 404, kind: "scimError2", decode: { kind: "json", schema: scimErrorSchema } },
    ];
  }

  export type UpdateScimGroupRequest = {
    /** The unique identifier of the Contentstack organization. */
    organizationUid: string;
    /** The SCIM group ID of the group within the organization. */
    groupId: string;
    body: ScimPatchRequest;
  };

  export class UpdateScimGroupError extends ApiError {
    declare readonly payload:
      | Declared<"scimError", ScimError>
      | Declared<"scimError2", ScimError>
      | Undeclared;

    static readonly errors: ErrorDecoders<UpdateScimGroupError> = [
      { on: 401, kind: "scimError", decode: { kind: "json", schema: scimErrorSchema } },
      { on: 404, kind: "scimError2", decode: { kind: "json", schema: scimErrorSchema } },
    ];
  }
}
