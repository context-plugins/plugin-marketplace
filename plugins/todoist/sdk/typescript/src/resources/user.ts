import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import { body20Schema, type Body20 } from "../models/body20.js";
import {
  productivityStatsResponseSchema,
  type ProductivityStatsResponse,
} from "../models/productivity-stats-response.js";
import { todoistErrorSchema, type TodoistError } from "../models/todoist-error.js";
import { userSyncViewInternalSchema, type UserSyncView } from "../models/user-sync-view.js";
import type { Servers } from "../servers.js";

export class User {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Get Productivity Stats
   *
   * @remarks
   * Get comprehensive productivity statistics for the authenticated user. This endpoint is used to
   * display information about the [Karma
   * system](https://www.todoist.com/help/articles/introduction-to-karma-OgWkWy).
   *
   * Returns detailed completion statistics including:
   *
   * - Daily completion counts with per-project breakdowns for the last 7 days
   * - Weekly completion counts with per-project breakdowns for the last 4 weeks
   * - Total completed task count
   * - Karma score, trend, graph data, and update history
   * - Goal settings (daily/weekly goals, ignore days, vacation mode)
   * - Streak information (current, last, and maximum daily and weekly streaks)
   * - Project color mappings for visualization
   *
   * @returns Successful Response
   *
   * @throws {@link User.GetProductivityStatsApiV1TasksCompletedStatsGetError} when the API answers
   * with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link TodoistApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getProductivityStatsApiV1TasksCompletedStatsGet(
    options?: RequestOptions,
  ): ApiPromise<ProductivityStatsResponse, User.GetProductivityStatsApiV1TasksCompletedStatsGetError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/v1/tasks/completed/stats"),
        auth: this.#auth.bearerAuth,
        pathParams: [],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: productivityStatsResponseSchema },
        errorFactory: User.GetProductivityStatsApiV1TasksCompletedStatsGetError,
      },
      options,
    );
  }

  /**
   * Update Notification Setting
   *
   * @remarks
   * Update a notification delivery preference.
   *
   * The API accepts the legacy `dont_notify` flag and stores the inverse as the user's delivery
   * preference for the requested notification type and channel.
   *
   * @returns Successful Response
   *
   * @throws {@link User.UpdateNotificationSettingApiV1NotificationSettingPutError} when the API
   * answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link TodoistApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  updateNotificationSettingApiV1NotificationSettingPut(
    request: User.UpdateNotificationSettingApiV1NotificationSettingPutRequest,
    options?: RequestOptions,
  ): ApiPromise<Record<string, boolean>, User.UpdateNotificationSettingApiV1NotificationSettingPutError> {
    return this.#rawClient.execute(
      {
        method: "PUT",
        urlTemplate: this.#servers.default("/api/v1/notification_setting"),
        auth: this.#auth.bearerAuth,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: body20Schema },
      },
      {
        success: { kind: "json", schema: s.record(s.string(), s.boolean()) },
        errorFactory: User.UpdateNotificationSettingApiV1NotificationSettingPutError,
      },
      options,
    );
  }

  /**
   * User Info
   *
   * @remarks
   * Get information about the currently authenticated user.
   *
   * This is the OIDC userinfo endpoint. OAuth tokens of any product audience are accepted as long
   * as they carry the `user:read` scope (implied by `data:read`).
   *
   * @returns Successful Response
   *
   * @throws {@link User.UserInfoApiV1UserGetError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link TodoistApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  userInfoApiV1UserGet(options?: RequestOptions): ApiPromise<UserSyncView, User.UserInfoApiV1UserGetError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/v1/user"),
        auth: this.#auth.bearerAuth,
        pathParams: [],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: userSyncViewInternalSchema },
        errorFactory: User.UserInfoApiV1UserGetError,
      },
      options,
    );
  }
}

export namespace User {
  export class GetProductivityStatsApiV1TasksCompletedStatsGetError extends ApiError {
    declare readonly payload:
      | Declared<"todoistError", TodoistError>
      | Declared<"todoistError2", TodoistError>
      | Declared<"todoistError3", TodoistError>
      | Declared<"todoistError4", TodoistError>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetProductivityStatsApiV1TasksCompletedStatsGetError> = [
      { on: 400, kind: "todoistError", decode: { kind: "json", schema: todoistErrorSchema } },
      { on: 401, kind: "todoistError2", decode: { kind: "json", schema: todoistErrorSchema } },
      { on: 403, kind: "todoistError3", decode: { kind: "json", schema: todoistErrorSchema } },
      { on: 404, kind: "todoistError4", decode: { kind: "json", schema: todoistErrorSchema } },
    ];
  }

  export type UpdateNotificationSettingApiV1NotificationSettingPutRequest = {
    body: Body20;
  };

  export class UpdateNotificationSettingApiV1NotificationSettingPutError extends ApiError {
    declare readonly payload:
      | Declared<"todoistError", TodoistError>
      | Declared<"todoistError2", TodoistError>
      | Declared<"todoistError3", TodoistError>
      | Declared<"todoistError4", TodoistError>
      | Undeclared;

    static readonly errors: ErrorDecoders<UpdateNotificationSettingApiV1NotificationSettingPutError> = [
      { on: 400, kind: "todoistError", decode: { kind: "json", schema: todoistErrorSchema } },
      { on: 401, kind: "todoistError2", decode: { kind: "json", schema: todoistErrorSchema } },
      { on: 403, kind: "todoistError3", decode: { kind: "json", schema: todoistErrorSchema } },
      { on: 404, kind: "todoistError4", decode: { kind: "json", schema: todoistErrorSchema } },
    ];
  }

  export class UserInfoApiV1UserGetError extends ApiError {
    declare readonly payload:
      | Declared<"todoistError", TodoistError>
      | Declared<"todoistError2", TodoistError>
      | Declared<"todoistError3", TodoistError>
      | Declared<"todoistError4", TodoistError>
      | Undeclared;

    static readonly errors: ErrorDecoders<UserInfoApiV1UserGetError> = [
      { on: 400, kind: "todoistError", decode: { kind: "json", schema: todoistErrorSchema } },
      { on: 401, kind: "todoistError2", decode: { kind: "json", schema: todoistErrorSchema } },
      { on: 403, kind: "todoistError3", decode: { kind: "json", schema: todoistErrorSchema } },
      { on: 404, kind: "todoistError4", decode: { kind: "json", schema: todoistErrorSchema } },
    ];
  }
}
