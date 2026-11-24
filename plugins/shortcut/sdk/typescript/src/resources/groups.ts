import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import { createGroupInternalSchema, type CreateGroup } from "../models/create-group.js";
import { groupInternalSchema, type Group } from "../models/group.js";
import { storySlimInternalSchema, type StorySlim } from "../models/story-slim.js";
import {
  unusableEntitlementErrorInternalSchema,
  type UnusableEntitlementError,
} from "../models/unusable-entitlement-error.js";
import { updateGroupInternalSchema, type UpdateGroup } from "../models/update-group.js";
import type { Servers } from "../servers.js";

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
   * Create Group
   *
   * @returns Resource
   *
   * @throws {@link Groups.CreateGroupError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link ShortcutError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  createGroup(
    request: Groups.CreateGroupRequest,
    options?: RequestOptions,
  ): ApiPromise<Group, Groups.CreateGroupError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/api/v3/groups"),
        auth: this.#auth.apiToken,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: createGroupInternalSchema },
      },
      {
        success: { kind: "json", schema: groupInternalSchema },
        errorFactory: Groups.CreateGroupError,
      },
      options,
    );
  }

  /**
   * Get Group
   *
   * @returns Resource
   *
   * @throws {@link Groups.GetGroupError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link ShortcutError} when no usable response was produced: a connection failure, a
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
        urlTemplate: this.#servers.default("/api/v3/groups/{group-public-id}"),
        auth: this.#auth.apiToken,
        pathParams: [{ name: "group-public-id", value: request.groupPublicId, schema: s.string() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: groupInternalSchema },
        errorFactory: Groups.GetGroupError,
      },
      options,
    );
  }

  /**
   * List Group Stories
   *
   * @remarks
   * List the Stories assigned to the Group. (By default, limited to 1,000).
   *
   * @returns Resource
   *
   * @throws {@link Groups.ListGroupStoriesError} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link ShortcutError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listGroupStories(
    request: Groups.ListGroupStoriesRequest,
    options?: RequestOptions,
  ): ApiPromise<StorySlim[], Groups.ListGroupStoriesError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/v3/groups/{group-public-id}/stories"),
        auth: this.#auth.apiToken,
        pathParams: [{ name: "group-public-id", value: request.groupPublicId, schema: s.string() }],
        query: [
          { name: "limit", value: request.limit, schema: s.optional(s.int()) },
          { name: "offset", value: request.offset, schema: s.optional(s.int()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => storySlimInternalSchema)) },
        errorFactory: Groups.ListGroupStoriesError,
      },
      options,
    );
  }

  /**
   * List Groups
   *
   * @remarks
   * A group in our API maps to a "Team" within the Shortcut Product. A Team is a collection of
   * Users that can be associated to Stories, Epics, and Iterations within Shortcut.
   *
   * @returns Resource
   *
   * @throws {@link Groups.ListGroupsError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link ShortcutError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listGroups(
    request: Groups.ListGroupsRequest = {},
    options?: RequestOptions,
  ): ApiPromise<Group[], Groups.ListGroupsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/v3/groups"),
        auth: this.#auth.apiToken,
        pathParams: [],
        query: [{ name: "archived", value: request.archived, schema: s.optional(s.boolean()) }],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => groupInternalSchema)) },
        errorFactory: Groups.ListGroupsError,
      },
      options,
    );
  }

  /**
   * Update Group
   *
   * @returns Resource
   *
   * @throws {@link Groups.UpdateGroupError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link ShortcutError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  updateGroup(
    request: Groups.UpdateGroupRequest,
    options?: RequestOptions,
  ): ApiPromise<Group, Groups.UpdateGroupError> {
    return this.#rawClient.execute(
      {
        method: "PUT",
        urlTemplate: this.#servers.default("/api/v3/groups/{group-public-id}"),
        auth: this.#auth.apiToken,
        pathParams: [{ name: "group-public-id", value: request.groupPublicId, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: updateGroupInternalSchema },
      },
      {
        success: { kind: "json", schema: groupInternalSchema },
        errorFactory: Groups.UpdateGroupError,
      },
      options,
    );
  }
}

export namespace Groups {
  export type CreateGroupRequest = {
    body: CreateGroup;
  };

  export class CreateGroupError extends ApiError {
    declare readonly payload:
      | Declared<"error400", undefined>
      | Declared<"unusableEntitlementError", UnusableEntitlementError>
      | Declared<"error404", undefined>
      | Declared<"error422", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<CreateGroupError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      {
        on: 403,
        kind: "unusableEntitlementError",
        decode: { kind: "json", schema: unusableEntitlementErrorInternalSchema },
      },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 422, kind: "error422", decode: { kind: "empty" } },
    ];
  }

  export type GetGroupRequest = {
    /** The unique ID of the Group. */
    groupPublicId: string;
  };

  export class GetGroupError extends ApiError {
    declare readonly payload:
      | Declared<"error400", undefined>
      | Declared<"error404", undefined>
      | Declared<"error422", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetGroupError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 422, kind: "error422", decode: { kind: "empty" } },
    ];
  }

  export type ListGroupStoriesRequest = {
    /** The unique ID of the Group. */
    groupPublicId: string;
    /** The maximum number of results to return. (Defaults to 1000, max 1000) */
    limit?: number;
    /** The offset at which to begin returning results. (Defaults to 0) */
    offset?: number;
  };

  export class ListGroupStoriesError extends ApiError {
    declare readonly payload:
      | Declared<"error400", undefined>
      | Declared<"error404", undefined>
      | Declared<"error422", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<ListGroupStoriesError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 422, kind: "error422", decode: { kind: "empty" } },
    ];
  }

  export type ListGroupsRequest = {
    /**
     * Filter groups by their archived state. If true, returns only archived groups. If false,
     * returns only unarchived groups. If not provided, returns all groups
     */
    archived?: boolean;
  };

  export class ListGroupsError extends ApiError {
    declare readonly payload:
      | Declared<"error400", undefined>
      | Declared<"error404", undefined>
      | Declared<"error422", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<ListGroupsError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 422, kind: "error422", decode: { kind: "empty" } },
    ];
  }

  export type UpdateGroupRequest = {
    /** The unique ID of the Group. */
    groupPublicId: string;
    body: UpdateGroup;
  };

  export class UpdateGroupError extends ApiError {
    declare readonly payload:
      | Declared<"error400", undefined>
      | Declared<"unusableEntitlementError", UnusableEntitlementError>
      | Declared<"error404", undefined>
      | Declared<"error422", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<UpdateGroupError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      {
        on: 403,
        kind: "unusableEntitlementError",
        decode: { kind: "json", schema: unusableEntitlementErrorInternalSchema },
      },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 422, kind: "error422", decode: { kind: "empty" } },
    ];
  }
}
