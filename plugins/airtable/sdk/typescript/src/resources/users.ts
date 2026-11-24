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
import { scimPatchRequestSchema, type ScimPatchRequest } from "../models/scim-patch-request.js";
import {
  scimUserCreateRequestInternalSchema,
  type ScimUserCreateRequest,
} from "../models/scim-user-create-request.js";
import {
  scimUserListResponseInternalSchema,
  type ScimUserListResponse,
} from "../models/scim-user-list-response.js";
import { scimUserInternalSchema, type ScimUser } from "../models/scim-user.js";
import type { Servers } from "../servers.js";

/**
 * SCIM user provisioning and management
 */
export class Users {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Airtable Create a SCIM User
   *
   * @remarks
   * Provisions a new user in Airtable through the SCIM protocol. The user will be added to the
   * enterprise account. SSO must be configured as Airtable does not allow setting passwords through
   * SCIM.
   *
   * @returns The newly created SCIM user resource.
   *
   * @throws {@link Users.CreateScimUserError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link AirtableError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  createScimUser(
    request: Users.CreateScimUserRequest,
    options?: RequestOptions,
  ): ApiPromise<ScimUser, Users.CreateScimUserError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.defaultAirtableScimGroupsApi("/Users"),
        auth: this.#auth.bearerAuth,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: scimUserCreateRequestInternalSchema },
      },
      {
        success: { kind: "json", schema: scimUserInternalSchema },
        errorFactory: Users.CreateScimUserError,
      },
      options,
    );
  }

  /**
   * Airtable Delete a SCIM User
   *
   * @remarks
   * Permanently deletes a SCIM user resource from the enterprise account. The user will lose access
   * to all Airtable resources associated with the enterprise.
   *
   * @returns The user was successfully deleted. No content returned.
   *
   * @throws {@link Users.DeleteScimUserError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link AirtableError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  deleteScimUser(
    request: Users.DeleteScimUserRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, Users.DeleteScimUserError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.defaultAirtableScimGroupsApi("/Users/{userId}"),
        auth: this.#auth.bearerAuth,
        pathParams: [{ name: "userId", value: request.userId, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: Users.DeleteScimUserError,
      },
      options,
    );
  }

  /**
   * Airtable Get a SCIM User
   *
   * @remarks
   * Retrieves a single SCIM user resource by its unique identifier. Returns the complete user
   * profile including name, email, and active status.
   *
   * @returns The requested SCIM user resource.
   *
   * @throws {@link Users.GetScimUserError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link AirtableError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getScimUser(
    request: Users.GetScimUserRequest,
    options?: RequestOptions,
  ): ApiPromise<ScimUser, Users.GetScimUserError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.defaultAirtableScimGroupsApi("/Users/{userId}"),
        auth: this.#auth.bearerAuth,
        pathParams: [{ name: "userId", value: request.userId, schema: s.string() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: scimUserInternalSchema },
        errorFactory: Users.GetScimUserError,
      },
      options,
    );
  }

  /**
   * Airtable List SCIM Users
   *
   * @remarks
   * Returns a paginated list of SCIM user resources. Supports filtering by user attributes and
   * pagination using startIndex and count parameters per the SCIM 2.0 specification.
   *
   * @returns A SCIM ListResponse containing user resources.
   *
   * @throws {@link Users.ListScimUsersError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link AirtableError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listScimUsers(
    request: Users.ListScimUsersRequest = {},
    options?: RequestOptions,
  ): ApiPromise<ScimUserListResponse, Users.ListScimUsersError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.defaultAirtableScimGroupsApi("/Users"),
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
        success: { kind: "json", schema: scimUserListResponseInternalSchema },
        errorFactory: Users.ListScimUsersError,
      },
      options,
    );
  }

  /**
   * Airtable Replace a SCIM User
   *
   * @remarks
   * Replaces a SCIM user resource entirely. All attributes are overwritten with the values in the
   * request body. This is a full replacement, not a partial update.
   *
   * @returns The replaced SCIM user resource.
   *
   * @throws {@link Users.ReplaceScimUserError} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link AirtableError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  replaceScimUser(
    request: Users.ReplaceScimUserRequest,
    options?: RequestOptions,
  ): ApiPromise<ScimUser, Users.ReplaceScimUserError> {
    return this.#rawClient.execute(
      {
        method: "PUT",
        urlTemplate: this.#servers.defaultAirtableScimGroupsApi("/Users/{userId}"),
        auth: this.#auth.bearerAuth,
        pathParams: [{ name: "userId", value: request.userId, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: scimUserCreateRequestInternalSchema },
      },
      {
        success: { kind: "json", schema: scimUserInternalSchema },
        errorFactory: Users.ReplaceScimUserError,
      },
      options,
    );
  }

  /**
   * Airtable Update a SCIM User (partial)
   *
   * @remarks
   * Partially updates a SCIM user resource using SCIM PATCH operations. Supports add, replace, and
   * remove operations on user attributes. Commonly used to activate or deactivate users.
   *
   * @returns The updated SCIM user resource.
   *
   * @throws {@link Users.UpdateScimUserError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link AirtableError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  updateScimUser(
    request: Users.UpdateScimUserRequest,
    options?: RequestOptions,
  ): ApiPromise<ScimUser, Users.UpdateScimUserError> {
    return this.#rawClient.execute(
      {
        method: "PATCH",
        urlTemplate: this.#servers.defaultAirtableScimGroupsApi("/Users/{userId}"),
        auth: this.#auth.bearerAuth,
        pathParams: [{ name: "userId", value: request.userId, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: scimPatchRequestSchema },
      },
      {
        success: { kind: "json", schema: scimUserInternalSchema },
        errorFactory: Users.UpdateScimUserError,
      },
      options,
    );
  }
}

export namespace Users {
  export type CreateScimUserRequest = {
    body: ScimUserCreateRequest;
  };

  export class CreateScimUserError extends ApiError {
    declare readonly payload:
      | Declared<"scimError", ScimError>
      | Declared<"scimError2", ScimError>
      | Declared<"scimError3", ScimError>
      | Declared<"scimError4", ScimError>
      | Declared<"scimError5", ScimError>
      | Undeclared;

    static readonly errors: ErrorDecoders<CreateScimUserError> = [
      { on: 400, kind: "scimError", decode: { kind: "json", schema: scimErrorSchema } },
      { on: 401, kind: "scimError2", decode: { kind: "json", schema: scimErrorSchema } },
      { on: 403, kind: "scimError3", decode: { kind: "json", schema: scimErrorSchema } },
      { on: 409, kind: "scimError4", decode: { kind: "json", schema: scimErrorSchema } },
      { on: 429, kind: "scimError5", decode: { kind: "json", schema: scimErrorSchema } },
    ];
  }

  export type DeleteScimUserRequest = {
    /** The unique identifier of the SCIM user resource. */
    userId: string;
  };

  export class DeleteScimUserError extends ApiError {
    declare readonly payload:
      | Declared<"scimError", ScimError>
      | Declared<"scimError2", ScimError>
      | Declared<"scimError3", ScimError>
      | Declared<"scimError4", ScimError>
      | Undeclared;

    static readonly errors: ErrorDecoders<DeleteScimUserError> = [
      { on: 401, kind: "scimError", decode: { kind: "json", schema: scimErrorSchema } },
      { on: 403, kind: "scimError2", decode: { kind: "json", schema: scimErrorSchema } },
      { on: 404, kind: "scimError3", decode: { kind: "json", schema: scimErrorSchema } },
      { on: 429, kind: "scimError4", decode: { kind: "json", schema: scimErrorSchema } },
    ];
  }

  export type GetScimUserRequest = {
    /** The unique identifier of the SCIM user resource. */
    userId: string;
  };

  export class GetScimUserError extends ApiError {
    declare readonly payload:
      | Declared<"scimError", ScimError>
      | Declared<"scimError2", ScimError>
      | Declared<"scimError3", ScimError>
      | Declared<"scimError4", ScimError>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetScimUserError> = [
      { on: 401, kind: "scimError", decode: { kind: "json", schema: scimErrorSchema } },
      { on: 403, kind: "scimError2", decode: { kind: "json", schema: scimErrorSchema } },
      { on: 404, kind: "scimError3", decode: { kind: "json", schema: scimErrorSchema } },
      { on: 429, kind: "scimError4", decode: { kind: "json", schema: scimErrorSchema } },
    ];
  }

  export type ListScimUsersRequest = {
    /**
     * SCIM filter expression (e.g., userName eq "user@example.com"). Supports eq operator on
     * userName.
     */
    filter?: string;
    /** The 1-based index of the first result to return. @default 1 */
    startIndex?: number;
    /** The maximum number of results to return per page. */
    count?: number;
  };

  export const listScimUsersRequestSchema: Schema<ListScimUsersRequest> = s.lazySchema(() =>
    s.object<ListScimUsersRequest>({
      filter: s.optional(s.string()),
      startIndex: s.defaulted(s.int().check(s.gte(1)), 1),
      count: s.optional(s.int().check(s.gte(1), s.lte(100))),
    }),
  );

  export class ListScimUsersError extends ApiError {
    declare readonly payload:
      | Declared<"scimError", ScimError>
      | Declared<"scimError2", ScimError>
      | Declared<"scimError3", ScimError>
      | Undeclared;

    static readonly errors: ErrorDecoders<ListScimUsersError> = [
      { on: 401, kind: "scimError", decode: { kind: "json", schema: scimErrorSchema } },
      { on: 403, kind: "scimError2", decode: { kind: "json", schema: scimErrorSchema } },
      { on: 429, kind: "scimError3", decode: { kind: "json", schema: scimErrorSchema } },
    ];
  }

  export type ReplaceScimUserRequest = {
    /** The unique identifier of the SCIM user resource. */
    userId: string;
    body: ScimUserCreateRequest;
  };

  export class ReplaceScimUserError extends ApiError {
    declare readonly payload:
      | Declared<"scimError", ScimError>
      | Declared<"scimError2", ScimError>
      | Declared<"scimError3", ScimError>
      | Declared<"scimError4", ScimError>
      | Declared<"scimError5", ScimError>
      | Undeclared;

    static readonly errors: ErrorDecoders<ReplaceScimUserError> = [
      { on: 400, kind: "scimError", decode: { kind: "json", schema: scimErrorSchema } },
      { on: 401, kind: "scimError2", decode: { kind: "json", schema: scimErrorSchema } },
      { on: 403, kind: "scimError3", decode: { kind: "json", schema: scimErrorSchema } },
      { on: 404, kind: "scimError4", decode: { kind: "json", schema: scimErrorSchema } },
      { on: 429, kind: "scimError5", decode: { kind: "json", schema: scimErrorSchema } },
    ];
  }

  export type UpdateScimUserRequest = {
    /** The unique identifier of the SCIM user resource. */
    userId: string;
    body: ScimPatchRequest;
  };

  export class UpdateScimUserError extends ApiError {
    declare readonly payload:
      | Declared<"scimError", ScimError>
      | Declared<"scimError2", ScimError>
      | Declared<"scimError3", ScimError>
      | Declared<"scimError4", ScimError>
      | Declared<"scimError5", ScimError>
      | Undeclared;

    static readonly errors: ErrorDecoders<UpdateScimUserError> = [
      { on: 400, kind: "scimError", decode: { kind: "json", schema: scimErrorSchema } },
      { on: 401, kind: "scimError2", decode: { kind: "json", schema: scimErrorSchema } },
      { on: 403, kind: "scimError3", decode: { kind: "json", schema: scimErrorSchema } },
      { on: 404, kind: "scimError4", decode: { kind: "json", schema: scimErrorSchema } },
      { on: 429, kind: "scimError5", decode: { kind: "json", schema: scimErrorSchema } },
    ];
  }
}
