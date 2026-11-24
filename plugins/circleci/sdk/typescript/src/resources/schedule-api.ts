import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import {
  createScheduleRequestInternalSchema,
  type CreateScheduleRequest,
} from "../models/create-schedule-request.js";
import { errorResponseSchema, type ErrorResponse } from "../models/error-response.js";
import { messageResponseSchema, type MessageResponse } from "../models/message-response.js";
import { scheduleListInternalSchema, type ScheduleList } from "../models/schedule-list.js";
import { scheduleInternalSchema, type Schedule } from "../models/schedule.js";
import {
  updateScheduleRequestInternalSchema,
  type UpdateScheduleRequest,
} from "../models/update-schedule-request.js";
import type { Servers } from "../servers.js";

/**
 * Endpoints for creating, updating, and managing scheduled pipeline triggers.
 */
export class ScheduleApi {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Create a schedule
   *
   * @remarks
   * Creates a scheduled pipeline trigger for the specified project.
   *
   * @returns Schedule created successfully
   *
   * @throws {@link ScheduleApi.CreateScheduleError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link CircleCiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  createSchedule(
    request: ScheduleApi.CreateScheduleRequestParams,
    options?: RequestOptions,
  ): ApiPromise<Schedule, ScheduleApi.CreateScheduleError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.defaultCircleCiRestApiV2ContextApi("/project/{project-slug}/schedule"),
        auth: this.#auth.apiToken,
        pathParams: [{ name: "project-slug", value: request.projectSlug, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: createScheduleRequestInternalSchema },
      },
      {
        success: { kind: "json", schema: scheduleInternalSchema },
        errorFactory: ScheduleApi.CreateScheduleError,
      },
      options,
    );
  }

  /**
   * Delete a schedule
   *
   * @remarks
   * Deletes a schedule by its unique identifier.
   *
   * @returns Schedule deleted successfully
   *
   * @throws {@link ScheduleApi.DeleteScheduleError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link CircleCiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  deleteSchedule(
    request: ScheduleApi.DeleteScheduleRequest,
    options?: RequestOptions,
  ): ApiPromise<MessageResponse, ScheduleApi.DeleteScheduleError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.defaultCircleCiRestApiV2ContextApi("/schedule/{schedule-id}"),
        auth: this.#auth.apiToken,
        pathParams: [{ name: "schedule-id", value: request.scheduleId, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: messageResponseSchema },
        errorFactory: ScheduleApi.DeleteScheduleError,
      },
      options,
    );
  }

  /**
   * Get a schedule by ID
   *
   * @remarks
   * Returns a schedule by its unique identifier.
   *
   * @returns Successfully retrieved schedule
   *
   * @throws {@link ScheduleApi.GetScheduleError} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link CircleCiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getSchedule(
    request: ScheduleApi.GetScheduleRequest,
    options?: RequestOptions,
  ): ApiPromise<Schedule, ScheduleApi.GetScheduleError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.defaultCircleCiRestApiV2ContextApi("/schedule/{schedule-id}"),
        auth: this.#auth.apiToken,
        pathParams: [{ name: "schedule-id", value: request.scheduleId, schema: s.string() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: scheduleInternalSchema },
        errorFactory: ScheduleApi.GetScheduleError,
      },
      options,
    );
  }

  /**
   * List schedules for a project
   *
   * @remarks
   * Returns a list of scheduled pipeline triggers for a given project.
   *
   * @returns Successfully retrieved schedules
   *
   * @throws {@link ScheduleApi.ListSchedulesError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link CircleCiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listSchedules(
    request: ScheduleApi.ListSchedulesRequest,
    options?: RequestOptions,
  ): ApiPromise<ScheduleList, ScheduleApi.ListSchedulesError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.defaultCircleCiRestApiV2ContextApi("/project/{project-slug}/schedule"),
        auth: this.#auth.apiToken,
        pathParams: [{ name: "project-slug", value: request.projectSlug, schema: s.string() }],
        query: [{ name: "page-token", value: request.pageToken, schema: s.optional(s.string()) }],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: scheduleListInternalSchema },
        errorFactory: ScheduleApi.ListSchedulesError,
      },
      options,
    );
  }

  /**
   * Update a schedule
   *
   * @remarks
   * Updates an existing schedule with the provided parameters.
   *
   * @returns Schedule updated successfully
   *
   * @throws {@link ScheduleApi.UpdateScheduleError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link CircleCiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  updateSchedule(
    request: ScheduleApi.UpdateScheduleRequestParams,
    options?: RequestOptions,
  ): ApiPromise<Schedule, ScheduleApi.UpdateScheduleError> {
    return this.#rawClient.execute(
      {
        method: "PATCH",
        urlTemplate: this.#servers.defaultCircleCiRestApiV2ContextApi("/schedule/{schedule-id}"),
        auth: this.#auth.apiToken,
        pathParams: [{ name: "schedule-id", value: request.scheduleId, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: updateScheduleRequestInternalSchema },
      },
      {
        success: { kind: "json", schema: scheduleInternalSchema },
        errorFactory: ScheduleApi.UpdateScheduleError,
      },
      options,
    );
  }
}

export namespace ScheduleApi {
  export type CreateScheduleRequestParams = {
    /**
     * The project slug in the form vcs-slug/org-name/repo-name (e.g.,
     * gh/CircleCI-Public/api-preview-docs)
     */
    projectSlug: string;
    body: CreateScheduleRequest;
  };

  export class CreateScheduleError extends ApiError {
    declare readonly payload:
      | Declared<"errorResponse", ErrorResponse>
      | Declared<"errorResponse2", ErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<CreateScheduleError> = [
      { on: 400, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 401, kind: "errorResponse2", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export type DeleteScheduleRequest = {
    /** The unique identifier of the schedule */
    scheduleId: string;
  };

  export class DeleteScheduleError extends ApiError {
    declare readonly payload: Declared<"errorResponse", ErrorResponse> | Undeclared;

    static readonly errors: ErrorDecoders<DeleteScheduleError> = [
      { on: 401, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export type GetScheduleRequest = {
    /** The unique identifier of the schedule */
    scheduleId: string;
  };

  export class GetScheduleError extends ApiError {
    declare readonly payload:
      | Declared<"errorResponse", ErrorResponse>
      | Declared<"errorResponse2", ErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetScheduleError> = [
      { on: 401, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 404, kind: "errorResponse2", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export type ListSchedulesRequest = {
    /**
     * The project slug in the form vcs-slug/org-name/repo-name (e.g.,
     * gh/CircleCI-Public/api-preview-docs)
     */
    projectSlug: string;
    /** Token for retrieving the next page of results */
    pageToken?: string;
  };

  export class ListSchedulesError extends ApiError {
    declare readonly payload: Declared<"errorResponse", ErrorResponse> | Undeclared;

    static readonly errors: ErrorDecoders<ListSchedulesError> = [
      { on: 401, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export type UpdateScheduleRequestParams = {
    /** The unique identifier of the schedule */
    scheduleId: string;
    body: UpdateScheduleRequest;
  };

  export class UpdateScheduleError extends ApiError {
    declare readonly payload: Declared<"errorResponse", ErrorResponse> | Undeclared;

    static readonly errors: ErrorDecoders<UpdateScheduleError> = [
      { on: 401, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }
}
