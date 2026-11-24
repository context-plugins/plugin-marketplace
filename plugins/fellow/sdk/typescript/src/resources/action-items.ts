import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import { actionItemResponseSchema, type ActionItemResponse } from "../models/action-item-response.js";
import {
  actionItemsListResponseSchema,
  type ActionItemsListResponse,
} from "../models/action-items-list-response.js";
import {
  getActionItemsRequestInternalSchema,
  type GetActionItemsRequest,
} from "../models/get-action-items-request.js";
import {
  markActionItemCompleteRequestSchema,
  type MarkActionItemCompleteRequest,
} from "../models/mark-action-item-complete-request.js";
import type { Servers } from "../servers.js";

/**
 * Access and manage action items from meetings. Retrieve, list, complete, or archive action items
 * with optional filters and pagination.
 */
export class ActionItems {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Archive Action Item
   *
   * @remarks
   * Archive an action item by marking it as won't do.
   *
   * @returns OK
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link FellowError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  appsDeveloperApiApiArchiveActionItem(
    request: ActionItems.AppsDeveloperApiApiArchiveActionItemRequest,
    options?: RequestOptions,
  ): ApiPromise<ActionItemResponse, ApiError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/api/v1/action_item/{action_item_id}/archive"),
        auth: this.#auth.developerApiKeyAuth,
        pathParams: [{ name: "action_item_id", value: request.actionItemId, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: actionItemResponseSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Retrieve Action Item
   *
   * @remarks
   * Retrieve an action item by its ID.
   *
   * @returns OK
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link FellowError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  appsDeveloperApiApiGetActionItemById(
    request: ActionItems.AppsDeveloperApiApiGetActionItemByIdRequest,
    options?: RequestOptions,
  ): ApiPromise<ActionItemResponse, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/v1/action_item/{action_item_id}"),
        auth: this.#auth.developerApiKeyAuth,
        pathParams: [{ name: "action_item_id", value: request.actionItemId, schema: s.string() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: actionItemResponseSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * List Action Items
   *
   * @remarks
   * List action items with optional filters and pagination. Privileged access allows you to get
   * action items for the account. Non-privileged access allows you to get action items for the
   * authenticated user only.
   *
   * The `scope` filter controls which action items are returned:
   * - (no scope - default): All action items the user has access to
   * - assigned_to_me: Only action items assigned to the authenticated user
   * - assigned_to_others: Only action items the user can edit, assigned to teammates
   *
   * The `created_at_start`, `created_at_end`, `updated_at_start` and `updated_at_end` filters take
   * a YYYY-MM-DD date or an ISO datetime and are inclusive. A value without a time means midnight
   * UTC, so pass a time on an end bound (`2024-01-05T23:59:59`) to cover the whole day. To page
   * through a window of changes, combine `updated_at_start` with `order_by: updated_at_asc`.
   *
   * Whether `updated_at` moves depends on where the change was made. Edits in the note itself,
   * including its text, completion, assignees and due date, all bump `updated_at`. An assignee or
   * due date changed outside the note, such as from the action items list, is written to a separate
   * record and leaves `updated_at` unchanged, so the `updated_at` filters do not pick that item up.
   *
   * @returns OK
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link FellowError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  appsDeveloperApiApiGetActionItems(
    request: ActionItems.AppsDeveloperApiApiGetActionItemsRequest,
    options?: RequestOptions,
  ): ApiPromise<ActionItemsListResponse, ApiError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/api/v1/action_items"),
        auth: this.#auth.developerApiKeyAuth,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: getActionItemsRequestInternalSchema },
      },
      {
        success: { kind: "json", schema: actionItemsListResponseSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Mark Action Item Complete
   *
   * @remarks
   * Mark an action item as complete or incomplete.
   *
   * @returns OK
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link FellowError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  appsDeveloperApiApiMarkActionItemComplete(
    request: ActionItems.AppsDeveloperApiApiMarkActionItemCompleteRequest,
    options?: RequestOptions,
  ): ApiPromise<ActionItemResponse, ApiError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/api/v1/action_item/{action_item_id}/complete"),
        auth: this.#auth.developerApiKeyAuth,
        pathParams: [{ name: "action_item_id", value: request.actionItemId, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: markActionItemCompleteRequestSchema },
      },
      {
        success: { kind: "json", schema: actionItemResponseSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }
}

export namespace ActionItems {
  export type AppsDeveloperApiApiArchiveActionItemRequest = {
    actionItemId: string;
  };

  export type AppsDeveloperApiApiGetActionItemByIdRequest = {
    actionItemId: string;
  };

  export type AppsDeveloperApiApiGetActionItemsRequest = {
    body: GetActionItemsRequest;
  };

  export type AppsDeveloperApiApiMarkActionItemCompleteRequest = {
    actionItemId: string;
    body: MarkActionItemCompleteRequest;
  };
}
