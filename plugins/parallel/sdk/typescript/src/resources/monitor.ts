import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import {
  createMonitorRequestInternalSchema,
  type CreateMonitorRequest,
} from "../models/create-monitor-request.js";
import { errorResponseSchema, type ErrorResponse } from "../models/error-response.js";
import { httpValidationErrorSchema, type HttpValidationError } from "../models/http-validation-error.js";
import { monitorResponseSchema, type MonitorResponse } from "../models/monitor-response.js";
import {
  paginatedMonitorEventsSchema,
  type PaginatedMonitorEvents,
} from "../models/paginated-monitor-events.js";
import {
  paginatedMonitorResponseSchema,
  type PaginatedMonitorResponse,
} from "../models/paginated-monitor-response.js";
import { cursorSchema, type Cursor } from "../models/unions/cursor.js";
import { cursor1Schema, type Cursor1 } from "../models/unions/cursor1.js";
import { eventGroupIdSchema, type EventGroupId } from "../models/unions/event-group-id.js";
import { limitInternalSchema, type Limit } from "../models/unions/limit.js";
import { limit1InternalSchema, type Limit1 } from "../models/unions/limit1.js";
import { status11Schema, type Status11 } from "../models/unions/status11.js";
import { type5VariantCchzdoSchema, type Type5VariantCchzdo } from "../models/unions/type5-variant-cchzdo.js";
import { updateMonitorRequestSchema, type UpdateMonitorRequest } from "../models/update-monitor-request.js";
import type { Servers } from "../servers.js";

/**
 * The Monitor API watches the web for material changes on a fixed frequency. Each monitor runs once
 * on creation and then on its configured schedule, emitting events when meaningful changes are
 * detected.
 * - `event_stream` monitors track a search query and emit an event for each new material change.
 * - `snapshot` monitors track a specific task run's output and emit an event when the output
 *   changes.
 *
 * Results can be polled via the events endpoint or delivered via webhooks.
 */
export class Monitor {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Cancel Monitor
   *
   * @remarks
   * Cancel a monitor.
   *
   * Permanently stops the monitor from running. Cancellation is irreversible — create a new monitor
   * to resume monitoring. Cancelling an already-cancelled monitor is a no-op.
   *
   * @returns Monitor cancelled successfully.
   *
   * @throws {@link Monitor.CancelMonitorV1MonitorsMonitorIdCancelPostError} when the API answers
   * with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link ParallelError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  cancelMonitorV1MonitorsMonitorIdCancelPost(
    request: Monitor.CancelMonitorV1MonitorsMonitorIdCancelPostRequest,
    options?: RequestOptions,
  ): ApiPromise<MonitorResponse, Monitor.CancelMonitorV1MonitorsMonitorIdCancelPostError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/v1/monitors/{monitor_id}/cancel"),
        auth: this.#auth.apiKeyAuth,
        pathParams: [{ name: "monitor_id", value: request.monitorId, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: monitorResponseSchema },
        errorFactory: Monitor.CancelMonitorV1MonitorsMonitorIdCancelPostError,
      },
      options,
    );
  }

  /**
   * Create Monitor
   *
   * @remarks
   * Create a monitor.
   *
   * Monitors run on a fixed frequency to detect material changes in web content. Set
   * `type=event_stream` to monitor a search query, or `type=snapshot` to monitor a specific task
   * run's output. The monitor runs once immediately at creation, then continues on the configured
   * schedule.
   *
   * @returns Monitor created successfully.
   *
   * @throws {@link Monitor.CreateMonitorV1MonitorsPostError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link ParallelError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  createMonitorV1MonitorsPost(
    request: Monitor.CreateMonitorV1MonitorsPostRequest,
    options?: RequestOptions,
  ): ApiPromise<MonitorResponse, Monitor.CreateMonitorV1MonitorsPostError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/v1/monitors"),
        auth: this.#auth.apiKeyAuth,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: createMonitorRequestInternalSchema },
      },
      {
        success: { kind: "json", schema: monitorResponseSchema },
        errorFactory: Monitor.CreateMonitorV1MonitorsPostError,
      },
      options,
    );
  }

  /**
   * List Monitor Events
   *
   * @remarks
   * List events for a monitor, newest first.
   *
   * Pass `event_group_id` to narrow results to a single execution. Otherwise returns all executions
   * newest-first; use `next_cursor` to paginate. Set `include_completions=true` to also include
   * no-change executions.
   *
   * @returns Monitor events retrieved successfully.
   *
   * @throws {@link Monitor.ListMonitorEventsV1MonitorsMonitorIdEventsGetError} when the API answers
   * with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link ParallelError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listMonitorEventsV1MonitorsMonitorIdEventsGet(
    request: Monitor.ListMonitorEventsV1MonitorsMonitorIdEventsGetRequest,
    options?: RequestOptions,
  ): ApiPromise<PaginatedMonitorEvents, Monitor.ListMonitorEventsV1MonitorsMonitorIdEventsGetError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v1/monitors/{monitor_id}/events"),
        auth: this.#auth.apiKeyAuth,
        pathParams: [{ name: "monitor_id", value: request.monitorId, schema: s.string() }],
        query: [
          {
            name: "event_group_id",
            value: request.eventGroupId,
            schema: s.optional(s.lazy(() => eventGroupIdSchema)),
          },
          { name: "cursor", value: request.cursor, schema: s.optional(s.lazy(() => cursor1Schema)) },
          { name: "limit", value: request.limit, schema: s.optional(s.lazy(() => limit1InternalSchema)) },
          {
            name: "include_completions",
            value: request.includeCompletions,
            schema: s.defaulted(s.boolean(), false),
          },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: paginatedMonitorEventsSchema },
        errorFactory: Monitor.ListMonitorEventsV1MonitorsMonitorIdEventsGetError,
      },
      options,
    );
  }

  /**
   * List Monitors
   *
   * @remarks
   * List monitors ordered by creation time, newest first.
   *
   * Monitors are sorted by `created_at` descending. `limit` defaults to 100. Use `next_cursor` from
   * the response and pass it as `cursor` to fetch the next page. Pagination ends when `next_cursor`
   * is absent.
   *
   * By default only `active` monitors are returned. Pass `status=cancelled` or both values to
   * include cancelled monitors.
   *
   * The legacy Monitor API (`/v1alpha/monitors` endpoints) is documented under the `Monitor
   * (Alpha)` tag.
   *
   * @returns Paginated list of monitors.
   *
   * @throws {@link Monitor.ListMonitorsV1MonitorsGetError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link ParallelError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listMonitorsV1MonitorsGet(
    request: Monitor.ListMonitorsV1MonitorsGetRequest = {},
    options?: RequestOptions,
  ): ApiPromise<PaginatedMonitorResponse, Monitor.ListMonitorsV1MonitorsGetError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v1/monitors"),
        auth: this.#auth.apiKeyAuth,
        pathParams: [],
        query: [
          { name: "cursor", value: request.cursor, schema: s.optional(s.lazy(() => cursorSchema)) },
          { name: "limit", value: request.limit, schema: s.optional(s.lazy(() => limitInternalSchema)) },
          { name: "type", value: request.type, schema: s.optional(s.lazy(() => type5VariantCchzdoSchema)) },
          { name: "status", value: request.status, schema: s.optional(s.lazy(() => status11Schema)) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: paginatedMonitorResponseSchema },
        errorFactory: Monitor.ListMonitorsV1MonitorsGetError,
      },
      options,
    );
  }

  /**
   * Retrieve Monitor
   *
   * @remarks
   * Retrieve a monitor.
   *
   * Retrieves a specific monitor by `monitor_id`. Returns the monitor configuration including
   * status, frequency, query, and webhook settings.
   *
   * @returns Monitor retrieved successfully.
   *
   * @throws {@link Monitor.RetrieveMonitorV1MonitorsMonitorIdGetError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link ParallelError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  retrieveMonitorV1MonitorsMonitorIdGet(
    request: Monitor.RetrieveMonitorV1MonitorsMonitorIdGetRequest,
    options?: RequestOptions,
  ): ApiPromise<MonitorResponse, Monitor.RetrieveMonitorV1MonitorsMonitorIdGetError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v1/monitors/{monitor_id}"),
        auth: this.#auth.apiKeyAuth,
        pathParams: [{ name: "monitor_id", value: request.monitorId, schema: s.string() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: monitorResponseSchema },
        errorFactory: Monitor.RetrieveMonitorV1MonitorsMonitorIdGetError,
      },
      options,
    );
  }

  /**
   * Trigger Monitor Run
   *
   * @remarks
   * Trigger an immediate monitor run.
   *
   * Enqueues a one-off execution of the monitor outside its normal schedule. The monitor's regular
   * schedule is not affected. An event is only emitted if the execution detects a material change.
   * Cancelled monitors cannot be triggered.
   *
   * @returns Monitor run enqueued.
   *
   * @throws {@link Monitor.TriggerMonitorRunV1MonitorsMonitorIdTriggerPostError} when the API
   * answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link ParallelError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  triggerMonitorRunV1MonitorsMonitorIdTriggerPost(
    request: Monitor.TriggerMonitorRunV1MonitorsMonitorIdTriggerPostRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, Monitor.TriggerMonitorRunV1MonitorsMonitorIdTriggerPostError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/v1/monitors/{monitor_id}/trigger"),
        auth: this.#auth.apiKeyAuth,
        pathParams: [{ name: "monitor_id", value: request.monitorId, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: Monitor.TriggerMonitorRunV1MonitorsMonitorIdTriggerPostError,
      },
      options,
    );
  }

  /**
   * Update Monitor
   *
   * @remarks
   * Update a monitor.
   *
   * Only fields explicitly included in the request body are changed. Pass `null` for `webhook` or
   * `metadata` to clear those fields. Pass `type` and `settings` to update type-specific settings
   * on an `event_stream` monitor. At least one field must be provided. Cancelled monitors cannot be
   * updated.
   *
   * @returns Monitor updated successfully.
   *
   * @throws {@link Monitor.UpdateMonitorV1MonitorsMonitorIdUpdatePostError} when the API answers
   * with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link ParallelError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  updateMonitorV1MonitorsMonitorIdUpdatePost(
    request: Monitor.UpdateMonitorV1MonitorsMonitorIdUpdatePostRequest,
    options?: RequestOptions,
  ): ApiPromise<MonitorResponse, Monitor.UpdateMonitorV1MonitorsMonitorIdUpdatePostError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/v1/monitors/{monitor_id}/update"),
        auth: this.#auth.apiKeyAuth,
        pathParams: [{ name: "monitor_id", value: request.monitorId, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: updateMonitorRequestSchema },
      },
      {
        success: { kind: "json", schema: monitorResponseSchema },
        errorFactory: Monitor.UpdateMonitorV1MonitorsMonitorIdUpdatePostError,
      },
      options,
    );
  }
}

export namespace Monitor {
  export type CancelMonitorV1MonitorsMonitorIdCancelPostRequest = {
    monitorId: string;
  };

  export class CancelMonitorV1MonitorsMonitorIdCancelPostError extends ApiError {
    declare readonly payload:
      | Declared<"errorResponse", ErrorResponse>
      | Declared<"errorResponse2", ErrorResponse>
      | Declared<"errorResponse3", ErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<CancelMonitorV1MonitorsMonitorIdCancelPostError> = [
      { on: 401, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 404, kind: "errorResponse2", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 422, kind: "errorResponse3", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export type CreateMonitorV1MonitorsPostRequest = {
    body: CreateMonitorRequest;
  };

  export class CreateMonitorV1MonitorsPostError extends ApiError {
    declare readonly payload:
      | Declared<"errorResponse", ErrorResponse>
      | Declared<"errorResponse2", ErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<CreateMonitorV1MonitorsPostError> = [
      { on: 401, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 422, kind: "errorResponse2", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export type ListMonitorEventsV1MonitorsMonitorIdEventsGetRequest = {
    monitorId: string;
    /**
     * Filter to a single execution. Values come from `event_group_id` in webhook events and listed
     * events. Pagination params are ignored when set.
     */
    eventGroupId?: EventGroupId;
    /** Pass `next_cursor` from a previous response to retrieve more events. */
    cursor?: Cursor1;
    /** Maximum number of events to return. Defaults to 20. Between 1 and 100. */
    limit?: Limit1;
    /**
     * When true, include completion events for executions that ran but detected no material
     * changes. Useful for auditing execution history.
     *
     * @default false
     */
    includeCompletions?: boolean;
  };

  export class ListMonitorEventsV1MonitorsMonitorIdEventsGetError extends ApiError {
    declare readonly payload:
      | Declared<"errorResponse", ErrorResponse>
      | Declared<"errorResponse2", ErrorResponse>
      | Declared<"errorResponse3", ErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<ListMonitorEventsV1MonitorsMonitorIdEventsGetError> = [
      { on: 401, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 404, kind: "errorResponse2", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 422, kind: "errorResponse3", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export type ListMonitorsV1MonitorsGetRequest = {
    /**
     * Pagination token from `next_cursor` in a previous response. Omit to start from the most
     * recently created monitor.
     */
    cursor?: Cursor;
    /** Maximum number of monitors to return. Defaults to 100. Between 1 and 10000. */
    limit?: Limit;
    /**
     * Filter by monitor type. Pass multiple times to filter by multiple values. Omit to return all
     * types.
     */
    type?: Type5VariantCchzdo;
    /**
     * Filter by monitor status. Pass multiple times to filter by multiple values. Defaults to
     * `active` only.
     */
    status?: Status11;
  };

  export class ListMonitorsV1MonitorsGetError extends ApiError {
    declare readonly payload:
      | Declared<"errorResponse", ErrorResponse>
      | Declared<"httpValidationError", HttpValidationError>
      | Undeclared;

    static readonly errors: ErrorDecoders<ListMonitorsV1MonitorsGetError> = [
      { on: 401, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 422, kind: "httpValidationError", decode: { kind: "json", schema: httpValidationErrorSchema } },
    ];
  }

  export type RetrieveMonitorV1MonitorsMonitorIdGetRequest = {
    monitorId: string;
  };

  export class RetrieveMonitorV1MonitorsMonitorIdGetError extends ApiError {
    declare readonly payload:
      | Declared<"errorResponse", ErrorResponse>
      | Declared<"errorResponse2", ErrorResponse>
      | Declared<"httpValidationError", HttpValidationError>
      | Undeclared;

    static readonly errors: ErrorDecoders<RetrieveMonitorV1MonitorsMonitorIdGetError> = [
      { on: 401, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 404, kind: "errorResponse2", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 422, kind: "httpValidationError", decode: { kind: "json", schema: httpValidationErrorSchema } },
    ];
  }

  export type TriggerMonitorRunV1MonitorsMonitorIdTriggerPostRequest = {
    monitorId: string;
  };

  export class TriggerMonitorRunV1MonitorsMonitorIdTriggerPostError extends ApiError {
    declare readonly payload:
      | Declared<"errorResponse", ErrorResponse>
      | Declared<"errorResponse2", ErrorResponse>
      | Declared<"errorResponse3", ErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<TriggerMonitorRunV1MonitorsMonitorIdTriggerPostError> = [
      { on: 401, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 404, kind: "errorResponse2", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 422, kind: "errorResponse3", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export type UpdateMonitorV1MonitorsMonitorIdUpdatePostRequest = {
    monitorId: string;
    body: UpdateMonitorRequest;
  };

  export class UpdateMonitorV1MonitorsMonitorIdUpdatePostError extends ApiError {
    declare readonly payload:
      | Declared<"errorResponse", ErrorResponse>
      | Declared<"errorResponse2", ErrorResponse>
      | Declared<"errorResponse3", ErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<UpdateMonitorV1MonitorsMonitorIdUpdatePostError> = [
      { on: 401, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 404, kind: "errorResponse2", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 422, kind: "errorResponse3", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }
}
