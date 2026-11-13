import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { body28Schema, type Body28 } from "../models/body28.js";
import { body3Schema, type Body3 } from "../models/body3.js";
import { notificationSyncViewSchema, type NotificationSyncView } from "../models/notification-sync-view.js";
import { paginatedList8Schema, type PaginatedList8 } from "../models/paginated-list8.js";
import { todoistErrorSchema, type TodoistError } from "../models/todoist-error.js";
import type { Servers } from "../servers.js";

/**
 * _Availability of reminders is dependent on the current user plan._
 */
export class Reminders {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Create Reminder
   *
   * @remarks
   * Create a new reminder for a task.
   *
   * For **relative** reminders, provide `minute_offset` (minutes before the task's due time). For
   * **absolute** reminders, provide a `due` dictionary with a specific date/time. Supported `due`
   * keys are `date` or `string`, with optional `lang`, `timezone`, and `is_recurring`.
   *
   * @returns Successful Response
   *
   * @throws {@link Reminders.CreateReminderApiV1RemindersPostError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link TodoistApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  createReminderApiV1RemindersPost(
    request: Reminders.CreateReminderApiV1RemindersPostRequest,
    options?: RequestOptions,
  ): ApiPromise<NotificationSyncView, Reminders.CreateReminderApiV1RemindersPostError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/api/v1/reminders"),
        auth: this.#auth.bearerAuth,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: body28Schema },
      },
      {
        success: { kind: "json", schema: notificationSyncViewSchema },
        errorFactory: Reminders.CreateReminderApiV1RemindersPostError,
      },
      options,
    );
  }

  /**
   * Delete Reminder
   *
   * @remarks
   * Delete a reminder by ID.
   *
   * @returns No Content (what the live API returns)
   *
   * @throws {@link Reminders.DeleteReminderApiV1RemindersReminderIdDeleteError} when the API
   * answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link TodoistApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  deleteReminderApiV1RemindersReminderIdDelete(
    request: Reminders.DeleteReminderApiV1RemindersReminderIdDeleteRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, Reminders.DeleteReminderApiV1RemindersReminderIdDeleteError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default("/api/v1/reminders/{reminder_id}"),
        auth: this.#auth.bearerAuth,
        pathParams: [{ name: "reminder_id", value: request.reminderId, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: Reminders.DeleteReminderApiV1RemindersReminderIdDeleteError,
      },
      options,
    );
  }

  /**
   * Get Reminder
   *
   * @remarks
   * Return a single reminder by ID.
   *
   * @returns Successful Response
   *
   * @throws {@link Reminders.GetReminderApiV1RemindersReminderIdGetError} when the API answers with
   * an error status — narrow on `err.payload.kind`
   *
   * @throws {@link TodoistApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getReminderApiV1RemindersReminderIdGet(
    request: Reminders.GetReminderApiV1RemindersReminderIdGetRequest,
    options?: RequestOptions,
  ): ApiPromise<NotificationSyncView, Reminders.GetReminderApiV1RemindersReminderIdGetError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/v1/reminders/{reminder_id}"),
        auth: this.#auth.bearerAuth,
        pathParams: [{ name: "reminder_id", value: request.reminderId, schema: s.string() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: notificationSyncViewSchema },
        errorFactory: Reminders.GetReminderApiV1RemindersReminderIdGetError,
      },
      options,
    );
  }

  /**
   * Get Reminders
   *
   * @remarks
   * Get all active reminders.
   *
   * Optionally filter by `task_id` to return only reminders for a specific task.
   *
   * This is a paginated endpoint. See the [Pagination guide](#tag/Pagination) for details on using
   * cursor-based pagination.
   *
   * @returns Successful Response
   *
   * @throws {@link Reminders.GetRemindersApiV1RemindersGetError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link TodoistApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getRemindersApiV1RemindersGet(
    request: Reminders.GetRemindersApiV1RemindersGetRequest = {},
    options?: RequestOptions,
  ): ApiPromise<PaginatedList8, Reminders.GetRemindersApiV1RemindersGetError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/v1/reminders"),
        auth: this.#auth.bearerAuth,
        pathParams: [],
        query: [
          { name: "task_id", value: request.taskId, schema: s.optionalNullable(s.string()) },
          { name: "cursor", value: request.cursor, schema: s.optionalNullable(s.string()) },
          { name: "limit", value: request.limit, schema: s.defaulted(s.int(), 50) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: paginatedList8Schema },
        errorFactory: Reminders.GetRemindersApiV1RemindersGetError,
      },
      options,
    );
  }

  /**
   * Update Reminder
   *
   * @remarks
   * Update an existing reminder.
   *
   * @returns Successful Response
   *
   * @throws {@link Reminders.UpdateReminderApiV1RemindersReminderIdPostError} when the API answers
   * with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link TodoistApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  updateReminderApiV1RemindersReminderIdPost(
    request: Reminders.UpdateReminderApiV1RemindersReminderIdPostRequest,
    options?: RequestOptions,
  ): ApiPromise<NotificationSyncView, Reminders.UpdateReminderApiV1RemindersReminderIdPostError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/api/v1/reminders/{reminder_id}"),
        auth: this.#auth.bearerAuth,
        pathParams: [{ name: "reminder_id", value: request.reminderId, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: body3Schema },
      },
      {
        success: { kind: "json", schema: notificationSyncViewSchema },
        errorFactory: Reminders.UpdateReminderApiV1RemindersReminderIdPostError,
      },
      options,
    );
  }
}

export namespace Reminders {
  export type CreateReminderApiV1RemindersPostRequest = {
    body: Body28;
  };

  export class CreateReminderApiV1RemindersPostError extends ApiError {
    declare readonly payload:
      | Declared<"todoistError", TodoistError>
      | Declared<"todoistError2", TodoistError>
      | Declared<"todoistError3", TodoistError>
      | Declared<"todoistError4", TodoistError>
      | Undeclared;

    static readonly errors: ErrorDecoders<CreateReminderApiV1RemindersPostError> = [
      { on: 400, kind: "todoistError", decode: { kind: "json", schema: todoistErrorSchema } },
      { on: 401, kind: "todoistError2", decode: { kind: "json", schema: todoistErrorSchema } },
      { on: 403, kind: "todoistError3", decode: { kind: "json", schema: todoistErrorSchema } },
      { on: 404, kind: "todoistError4", decode: { kind: "json", schema: todoistErrorSchema } },
    ];
  }

  export type DeleteReminderApiV1RemindersReminderIdDeleteRequest = {
    reminderId: string;
  };

  export class DeleteReminderApiV1RemindersReminderIdDeleteError extends ApiError {
    declare readonly payload:
      | Declared<"todoistError", TodoistError>
      | Declared<"todoistError2", TodoistError>
      | Declared<"todoistError3", TodoistError>
      | Declared<"todoistError4", TodoistError>
      | Undeclared;

    static readonly errors: ErrorDecoders<DeleteReminderApiV1RemindersReminderIdDeleteError> = [
      { on: 400, kind: "todoistError", decode: { kind: "json", schema: todoistErrorSchema } },
      { on: 401, kind: "todoistError2", decode: { kind: "json", schema: todoistErrorSchema } },
      { on: 403, kind: "todoistError3", decode: { kind: "json", schema: todoistErrorSchema } },
      { on: 404, kind: "todoistError4", decode: { kind: "json", schema: todoistErrorSchema } },
    ];
  }

  export type GetReminderApiV1RemindersReminderIdGetRequest = {
    reminderId: string;
  };

  export class GetReminderApiV1RemindersReminderIdGetError extends ApiError {
    declare readonly payload:
      | Declared<"todoistError", TodoistError>
      | Declared<"todoistError2", TodoistError>
      | Declared<"todoistError3", TodoistError>
      | Declared<"todoistError4", TodoistError>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetReminderApiV1RemindersReminderIdGetError> = [
      { on: 400, kind: "todoistError", decode: { kind: "json", schema: todoistErrorSchema } },
      { on: 401, kind: "todoistError2", decode: { kind: "json", schema: todoistErrorSchema } },
      { on: 403, kind: "todoistError3", decode: { kind: "json", schema: todoistErrorSchema } },
      { on: 404, kind: "todoistError4", decode: { kind: "json", schema: todoistErrorSchema } },
    ];
  }

  export type GetRemindersApiV1RemindersGetRequest = {
    taskId?: string | null;
    cursor?: string | null;
    /** @default 50 */
    limit?: number;
  };

  export const getRemindersApiV1RemindersGetRequestSchema: Schema<GetRemindersApiV1RemindersGetRequest> =
    s.lazySchema(() =>
      s.object<GetRemindersApiV1RemindersGetRequest>({
        taskId: s.optionalNullable(s.string()),
        cursor: s.optionalNullable(
          s.string().check(s.minLength(1), s.pattern("^[0-9a-zA-Z_-]+\\.[0-9a-zA-Z_-]+$")),
        ),
        limit: s.defaulted(s.int().check(s.gt(0), s.lte(200)), 50),
      }),
    );

  export class GetRemindersApiV1RemindersGetError extends ApiError {
    declare readonly payload:
      | Declared<"todoistError", TodoistError>
      | Declared<"todoistError2", TodoistError>
      | Declared<"todoistError3", TodoistError>
      | Declared<"todoistError4", TodoistError>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetRemindersApiV1RemindersGetError> = [
      { on: 400, kind: "todoistError", decode: { kind: "json", schema: todoistErrorSchema } },
      { on: 401, kind: "todoistError2", decode: { kind: "json", schema: todoistErrorSchema } },
      { on: 403, kind: "todoistError3", decode: { kind: "json", schema: todoistErrorSchema } },
      { on: 404, kind: "todoistError4", decode: { kind: "json", schema: todoistErrorSchema } },
    ];
  }

  export type UpdateReminderApiV1RemindersReminderIdPostRequest = {
    reminderId: string;
    body: Body3;
  };

  export class UpdateReminderApiV1RemindersReminderIdPostError extends ApiError {
    declare readonly payload:
      | Declared<"todoistError", TodoistError>
      | Declared<"todoistError2", TodoistError>
      | Declared<"todoistError3", TodoistError>
      | Declared<"todoistError4", TodoistError>
      | Undeclared;

    static readonly errors: ErrorDecoders<UpdateReminderApiV1RemindersReminderIdPostError> = [
      { on: 400, kind: "todoistError", decode: { kind: "json", schema: todoistErrorSchema } },
      { on: 401, kind: "todoistError2", decode: { kind: "json", schema: todoistErrorSchema } },
      { on: 403, kind: "todoistError3", decode: { kind: "json", schema: todoistErrorSchema } },
      { on: 404, kind: "todoistError4", decode: { kind: "json", schema: todoistErrorSchema } },
    ];
  }
}
