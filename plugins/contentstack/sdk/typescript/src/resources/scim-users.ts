import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import { scimErrorSchema, type ScimError } from "../models/scim-error.js";
import { scimListResponseSchema, type ScimListResponse } from "../models/scim-list-response.js";
import { scimPatchRequestSchema, type ScimPatchRequest } from "../models/scim-patch-request.js";
import { scimUserInternalSchema, type ScimUser } from "../models/scim-user.js";
import type { Servers } from "../servers.js";

/**
 * SCIM user endpoints enable Identity Providers to provision, update, and deprovision user accounts
 * within a Contentstack organization following the SCIM 2.0 User schema.
 */
export class ScimUsers {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Create a SCIM user
   *
   * @remarks
   * Provisions a new user in the Contentstack organization via SCIM. The user is created with the
   * attributes provided in the SCIM User resource and assigned to the organization's default role
   * unless group mappings specify otherwise.
   *
   * @returns The newly provisioned SCIM user resource.
   *
   * @throws {@link ScimUsers.CreateScimUserError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link ContentstackError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  createScimUser(
    request: ScimUsers.CreateScimUserRequest,
    options?: RequestOptions,
  ): ApiPromise<ScimUser, ScimUsers.CreateScimUserError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.defaultContentstackScimScimGroupsApi(
          "/scim/v2.0/organizations/{organization_uid}/Users",
        ),
        auth: this.#auth.bearerAuth,
        pathParams: [{ name: "organization_uid", value: request.organizationUid, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: scimUserInternalSchema },
      },
      {
        success: { kind: "json", schema: scimUserInternalSchema },
        errorFactory: ScimUsers.CreateScimUserError,
      },
      options,
    );
  }

  /**
   * Get a SCIM user
   *
   * @remarks
   * Retrieves the SCIM User resource for a specific user by their SCIM user ID within the
   * organization.
   *
   * @returns The SCIM user resource.
   *
   * @throws {@link ScimUsers.GetScimUserError} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link ContentstackError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getScimUser(
    request: ScimUsers.GetScimUserRequest,
    options?: RequestOptions,
  ): ApiPromise<ScimUser, ScimUsers.GetScimUserError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.defaultContentstackScimScimGroupsApi(
          "/scim/v2.0/organizations/{organization_uid}/Users/{user_id}",
        ),
        auth: this.#auth.bearerAuth,
        pathParams: [
          { name: "organization_uid", value: request.organizationUid, schema: s.string() },
          { name: "user_id", value: request.userId, schema: s.string() },
        ],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: scimUserInternalSchema },
        errorFactory: ScimUsers.GetScimUserError,
      },
      options,
    );
  }

  /**
   * List SCIM users
   *
   * @remarks
   * Retrieves all users in the organization following the SCIM 2.0 ListResponse format. Supports
   * filtering by userName (email address) using the filter query parameter for user lookup during
   * IdP sync operations.
   *
   * @returns A SCIM ListResponse containing user resources.
   *
   * @throws {@link ScimUsers.ListScimUsersError} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link ContentstackError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listScimUsers(
    request: ScimUsers.ListScimUsersRequest,
    options?: RequestOptions,
  ): ApiPromise<ScimListResponse, ScimUsers.ListScimUsersError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.defaultContentstackScimScimGroupsApi(
          "/scim/v2.0/organizations/{organization_uid}/Users",
        ),
        auth: this.#auth.bearerAuth,
        pathParams: [{ name: "organization_uid", value: request.organizationUid, schema: s.string() }],
        query: [{ name: "filter", value: request.filter, schema: s.optional(s.string()) }],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: scimListResponseSchema },
        errorFactory: ScimUsers.ListScimUsersError,
      },
      options,
    );
  }

  /**
   * Replace a SCIM user
   *
   * @remarks
   * Fully replaces a SCIM user resource with the provided attributes. All attributes not included
   * in the request will be cleared or reset to defaults following SCIM 2.0 PUT semantics.
   *
   * @returns The updated SCIM user resource.
   *
   * @throws {@link ScimUsers.ReplaceScimUserError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link ContentstackError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  replaceScimUser(
    request: ScimUsers.ReplaceScimUserRequest,
    options?: RequestOptions,
  ): ApiPromise<ScimUser, ScimUsers.ReplaceScimUserError> {
    return this.#rawClient.execute(
      {
        method: "PUT",
        urlTemplate: this.#servers.defaultContentstackScimScimGroupsApi(
          "/scim/v2.0/organizations/{organization_uid}/Users/{user_id}",
        ),
        auth: this.#auth.bearerAuth,
        pathParams: [
          { name: "organization_uid", value: request.organizationUid, schema: s.string() },
          { name: "user_id", value: request.userId, schema: s.string() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: scimUserInternalSchema },
      },
      {
        success: { kind: "json", schema: scimUserInternalSchema },
        errorFactory: ScimUsers.ReplaceScimUserError,
      },
      options,
    );
  }

  /**
   * Update a SCIM user
   *
   * @remarks
   * Partially updates a SCIM user resource using SCIM 2.0 PATCH operations. Commonly used to
   * activate or deactivate users by setting the active attribute, or to update specific profile
   * attributes without replacing the entire resource.
   *
   * @returns The updated SCIM user resource.
   *
   * @throws {@link ScimUsers.UpdateScimUserError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link ContentstackError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  updateScimUser(
    request: ScimUsers.UpdateScimUserRequest,
    options?: RequestOptions,
  ): ApiPromise<ScimUser, ScimUsers.UpdateScimUserError> {
    return this.#rawClient.execute(
      {
        method: "PATCH",
        urlTemplate: this.#servers.defaultContentstackScimScimGroupsApi(
          "/scim/v2.0/organizations/{organization_uid}/Users/{user_id}",
        ),
        auth: this.#auth.bearerAuth,
        pathParams: [
          { name: "organization_uid", value: request.organizationUid, schema: s.string() },
          { name: "user_id", value: request.userId, schema: s.string() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: scimPatchRequestSchema },
      },
      {
        success: { kind: "json", schema: scimUserInternalSchema },
        errorFactory: ScimUsers.UpdateScimUserError,
      },
      options,
    );
  }
}

export namespace ScimUsers {
  export type CreateScimUserRequest = {
    /** The unique identifier of the Contentstack organization. */
    organizationUid: string;
    body: ScimUser;
  };

  export class CreateScimUserError extends ApiError {
    declare readonly payload:
      | Declared<"scimError", ScimError>
      | Declared<"scimError2", ScimError>
      | Declared<"scimError3", ScimError>
      | Undeclared;

    static readonly errors: ErrorDecoders<CreateScimUserError> = [
      { on: 400, kind: "scimError", decode: { kind: "json", schema: scimErrorSchema } },
      { on: 401, kind: "scimError2", decode: { kind: "json", schema: scimErrorSchema } },
      { on: 409, kind: "scimError3", decode: { kind: "json", schema: scimErrorSchema } },
    ];
  }

  export type GetScimUserRequest = {
    /** The unique identifier of the Contentstack organization. */
    organizationUid: string;
    /** The SCIM user ID of the user within the organization. */
    userId: string;
  };

  export class GetScimUserError extends ApiError {
    declare readonly payload:
      | Declared<"scimError", ScimError>
      | Declared<"scimError2", ScimError>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetScimUserError> = [
      { on: 401, kind: "scimError", decode: { kind: "json", schema: scimErrorSchema } },
      { on: 404, kind: "scimError2", decode: { kind: "json", schema: scimErrorSchema } },
    ];
  }

  export type ListScimUsersRequest = {
    /** The unique identifier of the Contentstack organization. */
    organizationUid: string;
    /** SCIM filter expression for searching users. Example: userName eq "user@example.com" */
    filter?: string;
  };

  export class ListScimUsersError extends ApiError {
    declare readonly payload: Declared<"scimError", ScimError> | Undeclared;

    static readonly errors: ErrorDecoders<ListScimUsersError> = [
      { on: 401, kind: "scimError", decode: { kind: "json", schema: scimErrorSchema } },
    ];
  }

  export type ReplaceScimUserRequest = {
    /** The unique identifier of the Contentstack organization. */
    organizationUid: string;
    /** The SCIM user ID of the user within the organization. */
    userId: string;
    body: ScimUser;
  };

  export class ReplaceScimUserError extends ApiError {
    declare readonly payload:
      | Declared<"scimError", ScimError>
      | Declared<"scimError2", ScimError>
      | Declared<"scimError3", ScimError>
      | Undeclared;

    static readonly errors: ErrorDecoders<ReplaceScimUserError> = [
      { on: 400, kind: "scimError", decode: { kind: "json", schema: scimErrorSchema } },
      { on: 401, kind: "scimError2", decode: { kind: "json", schema: scimErrorSchema } },
      { on: 404, kind: "scimError3", decode: { kind: "json", schema: scimErrorSchema } },
    ];
  }

  export type UpdateScimUserRequest = {
    /** The unique identifier of the Contentstack organization. */
    organizationUid: string;
    /** The SCIM user ID of the user within the organization. */
    userId: string;
    body: ScimPatchRequest;
  };

  export class UpdateScimUserError extends ApiError {
    declare readonly payload:
      | Declared<"scimError", ScimError>
      | Declared<"scimError2", ScimError>
      | Declared<"scimError3", ScimError>
      | Undeclared;

    static readonly errors: ErrorDecoders<UpdateScimUserError> = [
      { on: 400, kind: "scimError", decode: { kind: "json", schema: scimErrorSchema } },
      { on: 401, kind: "scimError2", decode: { kind: "json", schema: scimErrorSchema } },
      { on: 404, kind: "scimError3", decode: { kind: "json", schema: scimErrorSchema } },
    ];
  }
}
