import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import {
  bulkIndexGroupsRequestSchema,
  type BulkIndexGroupsRequest,
} from "../models/bulk-index-groups-request.js";
import {
  bulkIndexMembershipsRequestSchema,
  type BulkIndexMembershipsRequest,
} from "../models/bulk-index-memberships-request.js";
import {
  bulkIndexUsersRequestSchema,
  type BulkIndexUsersRequest,
} from "../models/bulk-index-users-request.js";
import { deleteGroupRequestSchema, type DeleteGroupRequest } from "../models/delete-group-request.js";
import {
  deleteMembershipRequestSchema,
  type DeleteMembershipRequest,
} from "../models/delete-membership-request.js";
import { deleteUserRequestSchema, type DeleteUserRequest } from "../models/delete-user-request.js";
import {
  greenlistUsersRequestSchema,
  type GreenlistUsersRequest,
} from "../models/greenlist-users-request.js";
import { indexGroupRequestSchema, type IndexGroupRequest } from "../models/index-group-request.js";
import {
  indexMembershipRequestSchema,
  type IndexMembershipRequest,
} from "../models/index-membership-request.js";
import { indexUserRequestSchema, type IndexUserRequest } from "../models/index-user-request.js";
import {
  processAllMembershipsRequestSchema,
  type ProcessAllMembershipsRequest,
} from "../models/process-all-memberships-request.js";
import type { Servers } from "../servers.js";

/**
 * Manage users, groups and membership.
 */
export class Permissions {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Beta users
   *
   * @remarks
   * Allow the datasource be visible to the specified beta users. The default behaviour is
   * datasource being visible to all users if it is enabled and not visible to any user if it is not
   * enabled.
   *
   * @returns OK
   *
   * @throws {@link Permissions.BetaUsersError} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link GleanIndexingApiError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  betaUsers(
    request: Permissions.BetaUsersRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, Permissions.BetaUsersError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/api/index/v1/betausers"),
        auth: this.#auth.apiToken,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: greenlistUsersRequestSchema },
      },
      {
        success: { kind: "empty" },
        errorFactory: Permissions.BetaUsersError,
      },
      options,
    );
  }

  /**
   * Bulk index groups
   *
   * @remarks
   * Replaces the groups in a datasource using paginated batch API calls. Please refer to the [bulk
   * indexing](https://developers.glean.com/indexing/documents/bulk-upload-model) documentation for
   * an explanation of how to use bulk endpoints. Note: Any groups deleted from the existing set
   * will have their associated memberships deleted as well.
   *
   * @returns OK
   *
   * @throws {@link Permissions.BulkIndexGroupsError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link GleanIndexingApiError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  bulkIndexGroups(
    request: Permissions.BulkIndexGroupsRequestParams,
    options?: RequestOptions,
  ): ApiPromise<undefined, Permissions.BulkIndexGroupsError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/api/index/v1/bulkindexgroups"),
        auth: this.#auth.apiToken,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: bulkIndexGroupsRequestSchema },
      },
      {
        success: { kind: "empty" },
        errorFactory: Permissions.BulkIndexGroupsError,
      },
      options,
    );
  }

  /**
   * Bulk index memberships for a group
   *
   * @remarks
   * Replaces the memberships for a group in a datasource using paginated batch API calls. Please
   * refer to the [bulk indexing](https://developers.glean.com/indexing/documents/bulk-upload-model)
   * documentation for an explanation of how to use bulk endpoints.
   *
   * @returns OK
   *
   * @throws {@link Permissions.BulkIndexMembershipsForAGroupError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link GleanIndexingApiError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  bulkIndexMembershipsForAGroup(
    request: Permissions.BulkIndexMembershipsForAGroupRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, Permissions.BulkIndexMembershipsForAGroupError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/api/index/v1/bulkindexmemberships"),
        auth: this.#auth.apiToken,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: bulkIndexMembershipsRequestSchema },
      },
      {
        success: { kind: "empty" },
        errorFactory: Permissions.BulkIndexMembershipsForAGroupError,
      },
      options,
    );
  }

  /**
   * Bulk index users
   *
   * @remarks
   * Replaces the users in a datasource using paginated batch API calls. Please refer to the [bulk
   * indexing](https://developers.glean.com/indexing/documents/bulk-upload-model) documentation for
   * an explanation of how to use bulk endpoints. Note: Any users deleted from the existing set will
   * have their associated memberships deleted as well.
   *
   * @returns OK
   *
   * @throws {@link Permissions.BulkIndexUsersError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link GleanIndexingApiError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  bulkIndexUsers(
    request: Permissions.BulkIndexUsersRequestParams,
    options?: RequestOptions,
  ): ApiPromise<undefined, Permissions.BulkIndexUsersError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/api/index/v1/bulkindexusers"),
        auth: this.#auth.apiToken,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: bulkIndexUsersRequestSchema },
      },
      {
        success: { kind: "empty" },
        errorFactory: Permissions.BulkIndexUsersError,
      },
      options,
    );
  }

  /**
   * Delete group
   *
   * @remarks
   * Delete group from the datasource. Silently succeeds if group is not present. Note: All
   * memberships associated with the deleted group will also be deleted.
   *
   * @returns OK
   *
   * @throws {@link Permissions.DeleteGroupError} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link GleanIndexingApiError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  deleteGroup(
    request: Permissions.DeleteGroupRequestParams,
    options?: RequestOptions,
  ): ApiPromise<undefined, Permissions.DeleteGroupError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/api/index/v1/deletegroup"),
        auth: this.#auth.apiToken,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: deleteGroupRequestSchema },
      },
      {
        success: { kind: "empty" },
        errorFactory: Permissions.DeleteGroupError,
      },
      options,
    );
  }

  /**
   * Delete membership
   *
   * @remarks
   * Delete membership to a group in the specified datasource. Silently succeeds if membership is
   * not present.
   *
   * @returns OK
   *
   * @throws {@link Permissions.DeleteMembershipError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link GleanIndexingApiError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  deleteMembership(
    request: Permissions.DeleteMembershipRequestParams,
    options?: RequestOptions,
  ): ApiPromise<undefined, Permissions.DeleteMembershipError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/api/index/v1/deletemembership"),
        auth: this.#auth.apiToken,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: deleteMembershipRequestSchema },
      },
      {
        success: { kind: "empty" },
        errorFactory: Permissions.DeleteMembershipError,
      },
      options,
    );
  }

  /**
   * Delete user
   *
   * @remarks
   * Delete the user from the datasource. Silently succeeds if user is not present. Note: All
   * memberships associated with the deleted user will also be deleted.
   *
   * @returns OK
   *
   * @throws {@link Permissions.DeleteUserError} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link GleanIndexingApiError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  deleteUser(
    request: Permissions.DeleteUserRequestParams,
    options?: RequestOptions,
  ): ApiPromise<undefined, Permissions.DeleteUserError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/api/index/v1/deleteuser"),
        auth: this.#auth.apiToken,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: deleteUserRequestSchema },
      },
      {
        success: { kind: "empty" },
        errorFactory: Permissions.DeleteUserError,
      },
      options,
    );
  }

  /**
   * Index group
   *
   * @remarks
   * Add or update a group in the datasource.
   *
   * @returns OK
   *
   * @throws {@link Permissions.IndexGroupError} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link GleanIndexingApiError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  indexGroup(
    request: Permissions.IndexGroupRequestParams,
    options?: RequestOptions,
  ): ApiPromise<undefined, Permissions.IndexGroupError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/api/index/v1/indexgroup"),
        auth: this.#auth.apiToken,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: indexGroupRequestSchema },
      },
      {
        success: { kind: "empty" },
        errorFactory: Permissions.IndexGroupError,
      },
      options,
    );
  }

  /**
   * Index membership
   *
   * @remarks
   * Add the memberships of a group in the datasource.
   *
   * @returns OK
   *
   * @throws {@link Permissions.IndexMembershipError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link GleanIndexingApiError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  indexMembership(
    request: Permissions.IndexMembershipRequestParams,
    options?: RequestOptions,
  ): ApiPromise<undefined, Permissions.IndexMembershipError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/api/index/v1/indexmembership"),
        auth: this.#auth.apiToken,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: indexMembershipRequestSchema },
      },
      {
        success: { kind: "empty" },
        errorFactory: Permissions.IndexMembershipError,
      },
      options,
    );
  }

  /**
   * Index user
   *
   * @remarks
   * Adds a datasource user or updates an existing user.
   *
   * @returns OK
   *
   * @throws {@link Permissions.IndexUserError} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link GleanIndexingApiError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  indexUser(
    request: Permissions.IndexUserRequestParams,
    options?: RequestOptions,
  ): ApiPromise<undefined, Permissions.IndexUserError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/api/index/v1/indexuser"),
        auth: this.#auth.apiToken,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: indexUserRequestSchema },
      },
      {
        success: { kind: "empty" },
        errorFactory: Permissions.IndexUserError,
      },
      options,
    );
  }

  /**
   * Schedules the processing of group memberships
   *
   * @remarks
   * Schedules the immediate processing of all group memberships uploaded through the indexing API.
   * By default the uploaded group memberships will be processed asynchronously but this API can be
   * used to schedule processing of all memberships on demand.
   *
   * @returns OK
   *
   * @throws {@link Permissions.SchedulesTheProcessingOfGroupMembershipsError} when the API answers
   * with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link GleanIndexingApiError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  schedulesTheProcessingOfGroupMemberships(
    request: Permissions.SchedulesTheProcessingOfGroupMembershipsRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, Permissions.SchedulesTheProcessingOfGroupMembershipsError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/api/index/v1/processallmemberships"),
        auth: this.#auth.apiToken,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => processAllMembershipsRequestSchema)),
        },
      },
      {
        success: { kind: "empty" },
        errorFactory: Permissions.SchedulesTheProcessingOfGroupMembershipsError,
      },
      options,
    );
  }
}

export namespace Permissions {
  export type BetaUsersRequest = {
    body: GreenlistUsersRequest;
  };

  export class BetaUsersError extends ApiError {
    declare readonly payload:
      | Declared<"error400", undefined>
      | Declared<"error401", undefined>
      | Declared<"error409", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<BetaUsersError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 401, kind: "error401", decode: { kind: "empty" } },
      { on: 409, kind: "error409", decode: { kind: "empty" } },
    ];
  }

  export type BulkIndexGroupsRequestParams = {
    body: BulkIndexGroupsRequest;
  };

  export class BulkIndexGroupsError extends ApiError {
    declare readonly payload:
      | Declared<"error400", undefined>
      | Declared<"error401", undefined>
      | Declared<"error409", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<BulkIndexGroupsError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 401, kind: "error401", decode: { kind: "empty" } },
      { on: 409, kind: "error409", decode: { kind: "empty" } },
    ];
  }

  export type BulkIndexMembershipsForAGroupRequest = {
    body: BulkIndexMembershipsRequest;
  };

  export class BulkIndexMembershipsForAGroupError extends ApiError {
    declare readonly payload:
      | Declared<"error400", undefined>
      | Declared<"error401", undefined>
      | Declared<"error409", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<BulkIndexMembershipsForAGroupError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 401, kind: "error401", decode: { kind: "empty" } },
      { on: 409, kind: "error409", decode: { kind: "empty" } },
    ];
  }

  export type BulkIndexUsersRequestParams = {
    body: BulkIndexUsersRequest;
  };

  export class BulkIndexUsersError extends ApiError {
    declare readonly payload:
      | Declared<"error400", undefined>
      | Declared<"error401", undefined>
      | Declared<"error409", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<BulkIndexUsersError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 401, kind: "error401", decode: { kind: "empty" } },
      { on: 409, kind: "error409", decode: { kind: "empty" } },
    ];
  }

  export type DeleteGroupRequestParams = {
    body: DeleteGroupRequest;
  };

  export class DeleteGroupError extends ApiError {
    declare readonly payload:
      | Declared<"error400", undefined>
      | Declared<"error401", undefined>
      | Declared<"error409", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<DeleteGroupError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 401, kind: "error401", decode: { kind: "empty" } },
      { on: 409, kind: "error409", decode: { kind: "empty" } },
    ];
  }

  export type DeleteMembershipRequestParams = {
    body: DeleteMembershipRequest;
  };

  export class DeleteMembershipError extends ApiError {
    declare readonly payload:
      | Declared<"error400", undefined>
      | Declared<"error401", undefined>
      | Declared<"error409", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<DeleteMembershipError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 401, kind: "error401", decode: { kind: "empty" } },
      { on: 409, kind: "error409", decode: { kind: "empty" } },
    ];
  }

  export type DeleteUserRequestParams = {
    body: DeleteUserRequest;
  };

  export class DeleteUserError extends ApiError {
    declare readonly payload:
      | Declared<"error400", undefined>
      | Declared<"error401", undefined>
      | Declared<"error409", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<DeleteUserError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 401, kind: "error401", decode: { kind: "empty" } },
      { on: 409, kind: "error409", decode: { kind: "empty" } },
    ];
  }

  export type IndexGroupRequestParams = {
    body: IndexGroupRequest;
  };

  export class IndexGroupError extends ApiError {
    declare readonly payload:
      | Declared<"error400", undefined>
      | Declared<"error401", undefined>
      | Declared<"error409", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<IndexGroupError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 401, kind: "error401", decode: { kind: "empty" } },
      { on: 409, kind: "error409", decode: { kind: "empty" } },
    ];
  }

  export type IndexMembershipRequestParams = {
    body: IndexMembershipRequest;
  };

  export class IndexMembershipError extends ApiError {
    declare readonly payload:
      | Declared<"error400", undefined>
      | Declared<"error401", undefined>
      | Declared<"error409", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<IndexMembershipError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 401, kind: "error401", decode: { kind: "empty" } },
      { on: 409, kind: "error409", decode: { kind: "empty" } },
    ];
  }

  export type IndexUserRequestParams = {
    body: IndexUserRequest;
  };

  export class IndexUserError extends ApiError {
    declare readonly payload:
      | Declared<"error400", undefined>
      | Declared<"error401", undefined>
      | Declared<"error409", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<IndexUserError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 401, kind: "error401", decode: { kind: "empty" } },
      { on: 409, kind: "error409", decode: { kind: "empty" } },
    ];
  }

  export type SchedulesTheProcessingOfGroupMembershipsRequest = {
    body?: ProcessAllMembershipsRequest;
  };

  export class SchedulesTheProcessingOfGroupMembershipsError extends ApiError {
    declare readonly payload: Declared<"error400", undefined> | Declared<"error401", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<SchedulesTheProcessingOfGroupMembershipsError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 401, kind: "error401", decode: { kind: "empty" } },
    ];
  }
}
