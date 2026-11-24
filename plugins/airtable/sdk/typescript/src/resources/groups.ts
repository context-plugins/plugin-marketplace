import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { scimErrorSchema, type ScimError } from "../models/scim-error.js";
import {
  scimGroupCreateRequestSchema,
  type ScimGroupCreateRequest,
} from "../models/scim-group-create-request.js";
import {
  scimGroupListResponseSchema,
  type ScimGroupListResponse,
} from "../models/scim-group-list-response.js";
import { scimGroupSchema, type ScimGroup } from "../models/scim-group.js";
import { scimPatchRequestSchema, type ScimPatchRequest } from "../models/scim-patch-request.js";
import type { Servers } from "../servers.js";

/**
 * SCIM group provisioning and management
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
   * Airtable Create a SCIM Group
   *
   * @remarks
   * Creates a new SCIM group in the enterprise account. Groups can contain user members and are
   * used for access management.
   *
   * @returns The newly created SCIM group resource.
   *
   * @throws {@link Groups.CreateScimGroupError} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link AirtableError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  createScimGroup(
    request: Groups.CreateScimGroupRequest,
    options?: RequestOptions,
  ): ApiPromise<ScimGroup, Groups.CreateScimGroupError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.defaultAirtableScimGroupsApi("/Groups"),
        auth: this.#auth.bearerAuth,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: scimGroupCreateRequestSchema },
      },
      {
        success: { kind: "json", schema: scimGroupSchema },
        errorFactory: Groups.CreateScimGroupError,
      },
      options,
    );
  }

  /**
   * Airtable Delete a SCIM Group
   *
   * @remarks
   * Permanently deletes a SCIM group from the enterprise account. Members are not deleted but are
   * removed from the group.
   *
   * @returns The group was successfully deleted. No content returned.
   *
   * @throws {@link Groups.DeleteScimGroupError} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link AirtableError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  deleteScimGroup(
    request: Groups.DeleteScimGroupRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, Groups.DeleteScimGroupError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.defaultAirtableScimGroupsApi("/Groups/{groupId}"),
        auth: this.#auth.bearerAuth,
        pathParams: [{ name: "groupId", value: request.groupId, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: Groups.DeleteScimGroupError,
      },
      options,
    );
  }

  /**
   * Airtable Get a SCIM Group
   *
   * @remarks
   * Retrieves a single SCIM group resource by its unique identifier, including its member list.
   *
   * @returns The requested SCIM group resource.
   *
   * @throws {@link Groups.GetScimGroupError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link AirtableError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getScimGroup(
    request: Groups.GetScimGroupRequest,
    options?: RequestOptions,
  ): ApiPromise<ScimGroup, Groups.GetScimGroupError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.defaultAirtableScimGroupsApi("/Groups/{groupId}"),
        auth: this.#auth.bearerAuth,
        pathParams: [{ name: "groupId", value: request.groupId, schema: s.string() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: scimGroupSchema },
        errorFactory: Groups.GetScimGroupError,
      },
      options,
    );
  }

  /**
   * Airtable List SCIM Groups
   *
   * @remarks
   * Returns a paginated list of SCIM group resources. Supports filtering by group display name and
   * pagination using startIndex and count.
   *
   * @returns A SCIM ListResponse containing group resources.
   *
   * @throws {@link Groups.ListScimGroupsError} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link AirtableError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listScimGroups(
    request: Groups.ListScimGroupsRequest = {},
    options?: RequestOptions,
  ): ApiPromise<ScimGroupListResponse, Groups.ListScimGroupsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.defaultAirtableScimGroupsApi("/Groups"),
        auth: this.#auth.bearerAuth,
        pathParams: [],
        query: [
          { name: "filter", value: request.filter, schema: s.optional(s.string()) },
          { name: "startIndex", value: request.startIndex, schema: s.defaulted(s.int(), 1) },
          { name: "count", value: request.count, schema: s.optional(s.int()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: scimGroupListResponseSchema },
        errorFactory: Groups.ListScimGroupsError,
      },
      options,
    );
  }

  /**
   * Airtable Replace a SCIM Group
   *
   * @remarks
   * Replaces a SCIM group resource entirely with the provided data. The complete member list must
   * be included in the request.
   *
   * @returns The replaced SCIM group resource.
   *
   * @throws {@link Groups.ReplaceScimGroupError} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link AirtableError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  replaceScimGroup(
    request: Groups.ReplaceScimGroupRequest,
    options?: RequestOptions,
  ): ApiPromise<ScimGroup, Groups.ReplaceScimGroupError> {
    return this.#rawClient.execute(
      {
        method: "PUT",
        urlTemplate: this.#servers.defaultAirtableScimGroupsApi("/Groups/{groupId}"),
        auth: this.#auth.bearerAuth,
        pathParams: [{ name: "groupId", value: request.groupId, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: scimGroupCreateRequestSchema },
      },
      {
        success: { kind: "json", schema: scimGroupSchema },
        errorFactory: Groups.ReplaceScimGroupError,
      },
      options,
    );
  }

  /**
   * Airtable Update a SCIM Group (partial)
   *
   * @remarks
   * Partially updates a SCIM group resource using SCIM PATCH operations. Commonly used to add or
   * remove members from the group without replacing the entire resource.
   *
   * @returns The updated SCIM group resource.
   *
   * @throws {@link Groups.UpdateScimGroupError} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link AirtableError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  updateScimGroup(
    request: Groups.UpdateScimGroupRequest,
    options?: RequestOptions,
  ): ApiPromise<ScimGroup, Groups.UpdateScimGroupError> {
    return this.#rawClient.execute(
      {
        method: "PATCH",
        urlTemplate: this.#servers.defaultAirtableScimGroupsApi("/Groups/{groupId}"),
        auth: this.#auth.bearerAuth,
        pathParams: [{ name: "groupId", value: request.groupId, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: scimPatchRequestSchema },
      },
      {
        success: { kind: "json", schema: scimGroupSchema },
        errorFactory: Groups.UpdateScimGroupError,
      },
      options,
    );
  }
}

export namespace Groups {
  export type CreateScimGroupRequest = {
    body: ScimGroupCreateRequest;
  };

  export class CreateScimGroupError extends ApiError {
    declare readonly payload:
      | Declared<"scimError", ScimError>
      | Declared<"scimError2", ScimError>
      | Declared<"scimError3", ScimError>
      | Declared<"scimError4", ScimError>
      | Declared<"scimError5", ScimError>
      | Undeclared;

    static readonly errors: ErrorDecoders<CreateScimGroupError> = [
      { on: 400, kind: "scimError", decode: { kind: "json", schema: scimErrorSchema } },
      { on: 401, kind: "scimError2", decode: { kind: "json", schema: scimErrorSchema } },
      { on: 403, kind: "scimError3", decode: { kind: "json", schema: scimErrorSchema } },
      { on: 409, kind: "scimError4", decode: { kind: "json", schema: scimErrorSchema } },
      { on: 429, kind: "scimError5", decode: { kind: "json", schema: scimErrorSchema } },
    ];
  }

  export type DeleteScimGroupRequest = {
    /** The unique identifier of the SCIM group resource. */
    groupId: string;
  };

  export class DeleteScimGroupError extends ApiError {
    declare readonly payload:
      | Declared<"scimError", ScimError>
      | Declared<"scimError2", ScimError>
      | Declared<"scimError3", ScimError>
      | Declared<"scimError4", ScimError>
      | Undeclared;

    static readonly errors: ErrorDecoders<DeleteScimGroupError> = [
      { on: 401, kind: "scimError", decode: { kind: "json", schema: scimErrorSchema } },
      { on: 403, kind: "scimError2", decode: { kind: "json", schema: scimErrorSchema } },
      { on: 404, kind: "scimError3", decode: { kind: "json", schema: scimErrorSchema } },
      { on: 429, kind: "scimError4", decode: { kind: "json", schema: scimErrorSchema } },
    ];
  }

  export type GetScimGroupRequest = {
    /** The unique identifier of the SCIM group resource. */
    groupId: string;
  };

  export class GetScimGroupError extends ApiError {
    declare readonly payload:
      | Declared<"scimError", ScimError>
      | Declared<"scimError2", ScimError>
      | Declared<"scimError3", ScimError>
      | Declared<"scimError4", ScimError>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetScimGroupError> = [
      { on: 401, kind: "scimError", decode: { kind: "json", schema: scimErrorSchema } },
      { on: 403, kind: "scimError2", decode: { kind: "json", schema: scimErrorSchema } },
      { on: 404, kind: "scimError3", decode: { kind: "json", schema: scimErrorSchema } },
      { on: 429, kind: "scimError4", decode: { kind: "json", schema: scimErrorSchema } },
    ];
  }

  export type ListScimGroupsRequest = {
    /** SCIM filter expression (e.g., displayName eq "Engineering"). */
    filter?: string;
    /** The 1-based index of the first result to return. @default 1 */
    startIndex?: number;
    /** The maximum number of results to return per page. */
    count?: number;
  };

  export const listScimGroupsRequestSchema: Schema<ListScimGroupsRequest> = s.lazySchema(() =>
    s.object<ListScimGroupsRequest>({
      filter: s.optional(s.string()),
      startIndex: s.defaulted(s.int().check(s.gte(1)), 1),
      count: s.optional(s.int().check(s.gte(1), s.lte(100))),
    }),
  );

  export class ListScimGroupsError extends ApiError {
    declare readonly payload:
      | Declared<"scimError", ScimError>
      | Declared<"scimError2", ScimError>
      | Declared<"scimError3", ScimError>
      | Undeclared;

    static readonly errors: ErrorDecoders<ListScimGroupsError> = [
      { on: 401, kind: "scimError", decode: { kind: "json", schema: scimErrorSchema } },
      { on: 403, kind: "scimError2", decode: { kind: "json", schema: scimErrorSchema } },
      { on: 429, kind: "scimError3", decode: { kind: "json", schema: scimErrorSchema } },
    ];
  }

  export type ReplaceScimGroupRequest = {
    /** The unique identifier of the SCIM group resource. */
    groupId: string;
    body: ScimGroupCreateRequest;
  };

  export class ReplaceScimGroupError extends ApiError {
    declare readonly payload:
      | Declared<"scimError", ScimError>
      | Declared<"scimError2", ScimError>
      | Declared<"scimError3", ScimError>
      | Declared<"scimError4", ScimError>
      | Declared<"scimError5", ScimError>
      | Undeclared;

    static readonly errors: ErrorDecoders<ReplaceScimGroupError> = [
      { on: 400, kind: "scimError", decode: { kind: "json", schema: scimErrorSchema } },
      { on: 401, kind: "scimError2", decode: { kind: "json", schema: scimErrorSchema } },
      { on: 403, kind: "scimError3", decode: { kind: "json", schema: scimErrorSchema } },
      { on: 404, kind: "scimError4", decode: { kind: "json", schema: scimErrorSchema } },
      { on: 429, kind: "scimError5", decode: { kind: "json", schema: scimErrorSchema } },
    ];
  }

  export type UpdateScimGroupRequest = {
    /** The unique identifier of the SCIM group resource. */
    groupId: string;
    body: ScimPatchRequest;
  };

  export class UpdateScimGroupError extends ApiError {
    declare readonly payload:
      | Declared<"scimError", ScimError>
      | Declared<"scimError2", ScimError>
      | Declared<"scimError3", ScimError>
      | Declared<"scimError4", ScimError>
      | Declared<"scimError5", ScimError>
      | Undeclared;

    static readonly errors: ErrorDecoders<UpdateScimGroupError> = [
      { on: 400, kind: "scimError", decode: { kind: "json", schema: scimErrorSchema } },
      { on: 401, kind: "scimError2", decode: { kind: "json", schema: scimErrorSchema } },
      { on: 403, kind: "scimError3", decode: { kind: "json", schema: scimErrorSchema } },
      { on: 404, kind: "scimError4", decode: { kind: "json", schema: scimErrorSchema } },
      { on: 429, kind: "scimError5", decode: { kind: "json", schema: scimErrorSchema } },
    ];
  }
}
