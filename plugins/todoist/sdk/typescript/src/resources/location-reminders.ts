import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { body16InternalSchema, type Body16 } from "../models/body16.js";
import { body31InternalSchema, type Body31 } from "../models/body31.js";
import {
  notificationLocationSyncViewSchema,
  type NotificationLocationSyncView,
} from "../models/notification-location-sync-view.js";
import { paginatedList7Schema, type PaginatedList7 } from "../models/paginated-list7.js";
import { todoistErrorSchema, type TodoistError } from "../models/todoist-error.js";
import type { Servers } from "../servers.js";

/**
 * _Availability of location reminders is dependent on the current user plan._
 */
export class LocationReminders {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Create Location Reminder
   *
   * @remarks
   * Create a new location reminder for a task.
   *
   * @returns Successful Response
   *
   * @throws {@link LocationReminders.CreateLocationReminderApiV1LocationRemindersPostError} when
   * the API answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link TodoistApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  createLocationReminderApiV1LocationRemindersPost(
    request: LocationReminders.CreateLocationReminderApiV1LocationRemindersPostRequest,
    options?: RequestOptions,
  ): ApiPromise<
    NotificationLocationSyncView,
    LocationReminders.CreateLocationReminderApiV1LocationRemindersPostError
  > {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/api/v1/location_reminders"),
        auth: this.#auth.bearerAuth,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: body16InternalSchema },
      },
      {
        success: { kind: "json", schema: notificationLocationSyncViewSchema },
        errorFactory: LocationReminders.CreateLocationReminderApiV1LocationRemindersPostError,
      },
      options,
    );
  }

  /**
   * Delete Location Reminder
   *
   * @remarks
   * Delete a location reminder by ID.
   *
   * @returns No Content (what the live API returns)
   *
   * @throws {@link
   * LocationReminders.DeleteLocationReminderApiV1LocationRemindersReminderIdDeleteError} when the
   * API answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link TodoistApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  deleteLocationReminderApiV1LocationRemindersReminderIdDelete(
    request: LocationReminders.DeleteLocationReminderApiV1LocationRemindersReminderIdDeleteRequest,
    options?: RequestOptions,
  ): ApiPromise<
    undefined,
    LocationReminders.DeleteLocationReminderApiV1LocationRemindersReminderIdDeleteError
  > {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default("/api/v1/location_reminders/{reminder_id}"),
        auth: this.#auth.bearerAuth,
        pathParams: [{ name: "reminder_id", value: request.reminderId, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: LocationReminders.DeleteLocationReminderApiV1LocationRemindersReminderIdDeleteError,
      },
      options,
    );
  }

  /**
   * Get Location Reminder
   *
   * @remarks
   * Return a single location reminder by ID.
   *
   * @returns Successful Response
   *
   * @throws {@link LocationReminders.GetLocationReminderApiV1LocationRemindersReminderIdGetError}
   * when the API answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link TodoistApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getLocationReminderApiV1LocationRemindersReminderIdGet(
    request: LocationReminders.GetLocationReminderApiV1LocationRemindersReminderIdGetRequest,
    options?: RequestOptions,
  ): ApiPromise<
    NotificationLocationSyncView,
    LocationReminders.GetLocationReminderApiV1LocationRemindersReminderIdGetError
  > {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/v1/location_reminders/{reminder_id}"),
        auth: this.#auth.bearerAuth,
        pathParams: [{ name: "reminder_id", value: request.reminderId, schema: s.string() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: notificationLocationSyncViewSchema },
        errorFactory: LocationReminders.GetLocationReminderApiV1LocationRemindersReminderIdGetError,
      },
      options,
    );
  }

  /**
   * Get Location Reminders
   *
   * @remarks
   * Get all active location reminders.
   *
   * Optionally filter by `task_id` to return only location reminders for a specific task.
   *
   * This is a paginated endpoint. See the [Pagination guide](#tag/Pagination) for details on using
   * cursor-based pagination.
   *
   * @returns Successful Response
   *
   * @throws {@link LocationReminders.GetLocationRemindersApiV1LocationRemindersGetError} when the
   * API answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link TodoistApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getLocationRemindersApiV1LocationRemindersGet(
    request: LocationReminders.GetLocationRemindersApiV1LocationRemindersGetRequest = {},
    options?: RequestOptions,
  ): ApiPromise<PaginatedList7, LocationReminders.GetLocationRemindersApiV1LocationRemindersGetError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/v1/location_reminders"),
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
        success: { kind: "json", schema: paginatedList7Schema },
        errorFactory: LocationReminders.GetLocationRemindersApiV1LocationRemindersGetError,
      },
      options,
    );
  }

  /**
   * Update Location Reminder
   *
   * @remarks
   * Update an existing location reminder.
   *
   * @returns Successful Response
   *
   * @throws {@link
   * LocationReminders.UpdateLocationReminderApiV1LocationRemindersReminderIdPostError} when the API
   * answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link TodoistApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  updateLocationReminderApiV1LocationRemindersReminderIdPost(
    request: LocationReminders.UpdateLocationReminderApiV1LocationRemindersReminderIdPostRequest,
    options?: RequestOptions,
  ): ApiPromise<
    NotificationLocationSyncView,
    LocationReminders.UpdateLocationReminderApiV1LocationRemindersReminderIdPostError
  > {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/api/v1/location_reminders/{reminder_id}"),
        auth: this.#auth.bearerAuth,
        pathParams: [{ name: "reminder_id", value: request.reminderId, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: body31InternalSchema },
      },
      {
        success: { kind: "json", schema: notificationLocationSyncViewSchema },
        errorFactory: LocationReminders.UpdateLocationReminderApiV1LocationRemindersReminderIdPostError,
      },
      options,
    );
  }
}

export namespace LocationReminders {
  export type CreateLocationReminderApiV1LocationRemindersPostRequest = {
    body: Body16;
  };

  export class CreateLocationReminderApiV1LocationRemindersPostError extends ApiError {
    declare readonly payload:
      | Declared<"todoistError", TodoistError>
      | Declared<"todoistError2", TodoistError>
      | Declared<"todoistError3", TodoistError>
      | Declared<"todoistError4", TodoistError>
      | Undeclared;

    static readonly errors: ErrorDecoders<CreateLocationReminderApiV1LocationRemindersPostError> = [
      { on: 400, kind: "todoistError", decode: { kind: "json", schema: todoistErrorSchema } },
      { on: 401, kind: "todoistError2", decode: { kind: "json", schema: todoistErrorSchema } },
      { on: 403, kind: "todoistError3", decode: { kind: "json", schema: todoistErrorSchema } },
      { on: 404, kind: "todoistError4", decode: { kind: "json", schema: todoistErrorSchema } },
    ];
  }

  export type DeleteLocationReminderApiV1LocationRemindersReminderIdDeleteRequest = {
    reminderId: string;
  };

  export class DeleteLocationReminderApiV1LocationRemindersReminderIdDeleteError extends ApiError {
    declare readonly payload:
      | Declared<"todoistError", TodoistError>
      | Declared<"todoistError2", TodoistError>
      | Declared<"todoistError3", TodoistError>
      | Declared<"todoistError4", TodoistError>
      | Undeclared;

    static readonly errors: ErrorDecoders<DeleteLocationReminderApiV1LocationRemindersReminderIdDeleteError> =
      [
        { on: 400, kind: "todoistError", decode: { kind: "json", schema: todoistErrorSchema } },
        { on: 401, kind: "todoistError2", decode: { kind: "json", schema: todoistErrorSchema } },
        { on: 403, kind: "todoistError3", decode: { kind: "json", schema: todoistErrorSchema } },
        { on: 404, kind: "todoistError4", decode: { kind: "json", schema: todoistErrorSchema } },
      ];
  }

  export type GetLocationReminderApiV1LocationRemindersReminderIdGetRequest = {
    reminderId: string;
  };

  export class GetLocationReminderApiV1LocationRemindersReminderIdGetError extends ApiError {
    declare readonly payload:
      | Declared<"todoistError", TodoistError>
      | Declared<"todoistError2", TodoistError>
      | Declared<"todoistError3", TodoistError>
      | Declared<"todoistError4", TodoistError>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetLocationReminderApiV1LocationRemindersReminderIdGetError> = [
      { on: 400, kind: "todoistError", decode: { kind: "json", schema: todoistErrorSchema } },
      { on: 401, kind: "todoistError2", decode: { kind: "json", schema: todoistErrorSchema } },
      { on: 403, kind: "todoistError3", decode: { kind: "json", schema: todoistErrorSchema } },
      { on: 404, kind: "todoistError4", decode: { kind: "json", schema: todoistErrorSchema } },
    ];
  }

  export type GetLocationRemindersApiV1LocationRemindersGetRequest = {
    taskId?: string | null;
    cursor?: string | null;
    /** @default 50 */
    limit?: number;
  };

  export const getLocationRemindersApiV1LocationRemindersGetRequestSchema: Schema<GetLocationRemindersApiV1LocationRemindersGetRequest> =
    s.lazySchema(() =>
      s.object<GetLocationRemindersApiV1LocationRemindersGetRequest>({
        taskId: s.optionalNullable(s.string()),
        cursor: s.optionalNullable(
          s.string().check(s.minLength(1), s.pattern("^[0-9a-zA-Z_-]+\\.[0-9a-zA-Z_-]+$")),
        ),
        limit: s.defaulted(s.int().check(s.gt(0), s.lte(200)), 50),
      }),
    );

  export class GetLocationRemindersApiV1LocationRemindersGetError extends ApiError {
    declare readonly payload:
      | Declared<"todoistError", TodoistError>
      | Declared<"todoistError2", TodoistError>
      | Declared<"todoistError3", TodoistError>
      | Declared<"todoistError4", TodoistError>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetLocationRemindersApiV1LocationRemindersGetError> = [
      { on: 400, kind: "todoistError", decode: { kind: "json", schema: todoistErrorSchema } },
      { on: 401, kind: "todoistError2", decode: { kind: "json", schema: todoistErrorSchema } },
      { on: 403, kind: "todoistError3", decode: { kind: "json", schema: todoistErrorSchema } },
      { on: 404, kind: "todoistError4", decode: { kind: "json", schema: todoistErrorSchema } },
    ];
  }

  export type UpdateLocationReminderApiV1LocationRemindersReminderIdPostRequest = {
    reminderId: string;
    body: Body31;
  };

  export class UpdateLocationReminderApiV1LocationRemindersReminderIdPostError extends ApiError {
    declare readonly payload:
      | Declared<"todoistError", TodoistError>
      | Declared<"todoistError2", TodoistError>
      | Declared<"todoistError3", TodoistError>
      | Declared<"todoistError4", TodoistError>
      | Undeclared;

    static readonly errors: ErrorDecoders<UpdateLocationReminderApiV1LocationRemindersReminderIdPostError> = [
      { on: 400, kind: "todoistError", decode: { kind: "json", schema: todoistErrorSchema } },
      { on: 401, kind: "todoistError2", decode: { kind: "json", schema: todoistErrorSchema } },
      { on: 403, kind: "todoistError3", decode: { kind: "json", schema: todoistErrorSchema } },
      { on: 404, kind: "todoistError4", decode: { kind: "json", schema: todoistErrorSchema } },
    ];
  }
}
