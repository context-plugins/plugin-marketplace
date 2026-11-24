import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { anyAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { activityInputSchema, type ActivityInput } from "../models/activity-input.js";
import { activityListSchema, type ActivityList } from "../models/activity-list.js";
import { activitySchema, type Activity } from "../models/activity.js";
import { deletedSchema, type Deleted } from "../models/deleted.js";
import type { Servers } from "../servers.js";

export class Activities {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Log an activity (attach to a contact and/or deal)
   *
   * @returns Created
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link RelmCrmError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  createActivity(
    request: Activities.CreateActivityRequest,
    options?: RequestOptions,
  ): ApiPromise<Activity, ApiError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/activities"),
        auth: anyAuth(this.#auth.bearerAuth, this.#auth.oauth2),
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: request.idempotencyKey, schema: s.optional(s.string()) }],
        body: { kind: "json", value: request.body, schema: activityInputSchema },
      },
      {
        success: { kind: "json", schema: activitySchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Soft-delete an activity
   *
   * @returns Deleted
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link RelmCrmError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  deleteActivity(
    request: Activities.DeleteActivityRequest,
    options?: RequestOptions,
  ): ApiPromise<Deleted, ApiError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default("/activities/{id}"),
        auth: anyAuth(this.#auth.bearerAuth, this.#auth.oauth2),
        pathParams: [{ name: "id", value: request.id, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: deletedSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Fetch an activity
   *
   * @returns Activity
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link RelmCrmError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getActivity(
    request: Activities.GetActivityRequest,
    options?: RequestOptions,
  ): ApiPromise<Activity, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/activities/{id}"),
        auth: anyAuth(this.#auth.bearerAuth, this.#auth.oauth2),
        pathParams: [{ name: "id", value: request.id, schema: s.string() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: activitySchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * List activities
   *
   * @returns Activity list
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link RelmCrmError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listActivities(
    request: Activities.ListActivitiesRequest = {},
    options?: RequestOptions,
  ): ApiPromise<ActivityList, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/activities"),
        auth: anyAuth(this.#auth.bearerAuth, this.#auth.oauth2),
        pathParams: [],
        query: [
          { name: "limit", value: request.limit, schema: s.defaulted(s.int(), 25) },
          { name: "cursor", value: request.cursor, schema: s.optional(s.string()) },
          { name: "include_deleted", value: request.includeDeleted, schema: s.optional(s.boolean()) },
          { name: "contact_id", value: request.contactId, schema: s.optional(s.string()) },
          { name: "deal_id", value: request.dealId, schema: s.optional(s.string()) },
          { name: "type", value: request.type, schema: s.optional(s.string()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: activityListSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Restore an activity
   *
   * @returns Restored
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link RelmCrmError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  restoreActivity(
    request: Activities.RestoreActivityRequest,
    options?: RequestOptions,
  ): ApiPromise<Activity, ApiError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/activities/{id}/restore"),
        auth: anyAuth(this.#auth.bearerAuth, this.#auth.oauth2),
        pathParams: [{ name: "id", value: request.id, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: activitySchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Update an activity
   *
   * @returns Updated
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link RelmCrmError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  updateActivity(
    request: Activities.UpdateActivityRequest,
    options?: RequestOptions,
  ): ApiPromise<Activity, ApiError> {
    return this.#rawClient.execute(
      {
        method: "PATCH",
        urlTemplate: this.#servers.default("/activities/{id}"),
        auth: anyAuth(this.#auth.bearerAuth, this.#auth.oauth2),
        pathParams: [{ name: "id", value: request.id, schema: s.string() }],
        query: [],
        headers: [
          { name: "If-Match", value: request.ifMatch, schema: s.optional(s.string()) },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "json", value: request.body, schema: activityInputSchema },
      },
      {
        success: { kind: "json", schema: activitySchema },
        errorFactory: ApiError,
      },
      options,
    );
  }
}

export namespace Activities {
  export type CreateActivityRequest = {
    /** Safely retry a create: same key + same body replays the original result. */
    idempotencyKey?: string;
    body: ActivityInput;
  };

  export type DeleteActivityRequest = {
    id: string;
  };

  export type GetActivityRequest = {
    id: string;
  };

  export type ListActivitiesRequest = {
    /** Page size (default 25, max 100). @default 25 */
    limit?: number;
    /** Opaque keyset cursor from a prior next_cursor. */
    cursor?: string;
    /** Include soft-deleted rows. */
    includeDeleted?: boolean;
    contactId?: string;
    dealId?: string;
    /** A registered activity.type value (validated). */
    type?: string;
  };

  export const listActivitiesRequestSchema: Schema<ListActivitiesRequest> = s.lazySchema(() =>
    s.object<ListActivitiesRequest>({
      limit: s.defaulted(s.int().check(s.lte(100)), 25),
      cursor: s.optional(s.string()),
      includeDeleted: s.optional(s.boolean()),
      contactId: s.optional(s.string()),
      dealId: s.optional(s.string()),
      type: s.optional(s.string()),
    }),
  );

  export type RestoreActivityRequest = {
    id: string;
  };

  export type UpdateActivityRequest = {
    id: string;
    /**
     * The record's current version for optimistic concurrency; a mismatch returns 412
     * version_conflict.
     */
    ifMatch?: string;
    body: ActivityInput;
  };
}
