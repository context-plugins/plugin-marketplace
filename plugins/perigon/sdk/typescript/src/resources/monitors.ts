import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { classificationType3Schema, type ClassificationType3 } from "../models/classification-type3.js";
import { errorResponseSchema, type ErrorResponse } from "../models/error-response.js";
import {
  monitorEventListResultSchema,
  type MonitorEventListResult,
} from "../models/monitor-event-list-result.js";
import { monitorListResultInternalSchema, type MonitorListResult } from "../models/monitor-list-result.js";
import {
  monitorNewsletterListResultSchema,
  type MonitorNewsletterListResult,
} from "../models/monitor-newsletter-list-result.js";
import { monitorResultInternalSchema, type MonitorResult } from "../models/monitor-result.js";
import {
  monitorSummaryListResultSchema,
  type MonitorSummaryListResult,
} from "../models/monitor-summary-list-result.js";
import { nullsSchema, type Nulls } from "../models/nulls.js";
import {
  signalApiCreateBodyInternalSchema,
  type SignalApiCreateBody,
} from "../models/signal-api-create-body.js";
import {
  signalApiUpdateBodyInternalSchema,
  type SignalApiUpdateBody,
} from "../models/signal-api-update-body.js";
import { sortOrderSchema, type SortOrder } from "../models/sort-order.js";
import { status2Schema, type Status2 } from "../models/status2.js";
import type { Servers } from "../servers.js";

/**
 * Manage AI Monitors — configurable monitors that continuously scan news content for topics,
 * entities, and events of interest. Monitors run asynchronously and emit structured events and
 * AI-generated summaries that can be delivered to contact points.
 */
export class Monitors {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Activate monitor
   *
   * @remarks
   * Activate a monitor, starting its processing pipeline.
   *
   * @returns 200 - Success
   *
   * @throws {@link Monitors.ActivateMonitorApiError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link PerigonError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  activateMonitorApi(
    request: Monitors.ActivateMonitorApiRequest,
    options?: RequestOptions,
  ): ApiPromise<MonitorResult, Monitors.ActivateMonitorApiError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/v1/api/monitors/{uuid}/activate"),
        auth: this.#auth.apiKeyAuth,
        pathParams: [{ name: "uuid", value: request.uuid, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: monitorResultInternalSchema },
        errorFactory: Monitors.ActivateMonitorApiError,
      },
      options,
    );
  }

  /**
   * Archive monitor
   *
   * @remarks
   * Archive a monitor. Archived monitors are excluded from list results by default.
   *
   * @returns 200 - Success
   *
   * @throws {@link Monitors.ArchiveMonitorApiError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link PerigonError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  archiveMonitorApi(
    request: Monitors.ArchiveMonitorApiRequest,
    options?: RequestOptions,
  ): ApiPromise<MonitorResult, Monitors.ArchiveMonitorApiError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default("/v1/api/monitors/{uuid}"),
        auth: this.#auth.apiKeyAuth,
        pathParams: [{ name: "uuid", value: request.uuid, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: monitorResultInternalSchema },
        errorFactory: Monitors.ArchiveMonitorApiError,
      },
      options,
    );
  }

  /**
   * Create monitor
   *
   * @remarks
   * Create a new AI monitor. Only AI_SIGNAL type is supported; status is required and accepts
   * ACTIVE or DRAFT.
   *
   * @returns 200 - Success
   *
   * @throws {@link Monitors.CreateMonitorApiError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link PerigonError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  createMonitorApi(
    request: Monitors.CreateMonitorApiRequest,
    options?: RequestOptions,
  ): ApiPromise<MonitorResult, Monitors.CreateMonitorApiError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/v1/api/monitors"),
        auth: this.#auth.apiKeyAuth,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: signalApiCreateBodyInternalSchema },
      },
      {
        success: { kind: "json", schema: monitorResultInternalSchema },
        errorFactory: Monitors.CreateMonitorApiError,
      },
      options,
    );
  }

  /**
   * Get monitor
   *
   * @remarks
   * Retrieve a monitor by UUID for the organization associated with the API key.
   *
   * @returns 200 - Success
   *
   * @throws {@link Monitors.GetMonitorApiError} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link PerigonError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getMonitorApi(
    request: Monitors.GetMonitorApiRequest,
    options?: RequestOptions,
  ): ApiPromise<MonitorResult, Monitors.GetMonitorApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v1/api/monitors/{uuid}"),
        auth: this.#auth.apiKeyAuth,
        pathParams: [{ name: "uuid", value: request.uuid, schema: s.string() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: monitorResultInternalSchema },
        errorFactory: Monitors.GetMonitorApiError,
      },
      options,
    );
  }

  /**
   * List monitor events
   *
   * @remarks
   * List structured events emitted by a monitor. Events represent individual matches detected by
   * the monitor (e.g. a news article matching the monitor's criteria) and are produced
   * asynchronously as new content is ingested.
   *
   * @returns 200 - Success
   *
   * @throws {@link Monitors.ListMonitorEventsApiError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link PerigonError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listMonitorEventsApi(
    request: Monitors.ListMonitorEventsApiRequest,
    options?: RequestOptions,
  ): ApiPromise<MonitorEventListResult, Monitors.ListMonitorEventsApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v1/api/monitors/{uuid}/events"),
        auth: this.#auth.apiKeyAuth,
        pathParams: [{ name: "uuid", value: request.uuid, schema: s.string() }],
        query: [
          { name: "sortBy", value: request.sortBy, schema: s.string() },
          { name: "sortOrder", value: request.sortOrder, schema: sortOrderSchema },
          { name: "eventType", value: request.eventType, schema: s.optional(s.string()) },
          { name: "from", value: request.from, schema: s.optional(s.dateTime()) },
          { name: "to", value: request.to, schema: s.optional(s.dateTime()) },
          { name: "page", value: request.page, schema: s.defaulted(s.int(), 0) },
          { name: "size", value: request.size, schema: s.defaulted(s.int(), 10) },
          { name: "nulls", value: request.nulls, schema: s.optional(s.lazy(() => nullsSchema)) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: monitorEventListResultSchema },
        errorFactory: Monitors.ListMonitorEventsApiError,
      },
      options,
    );
  }

  /**
   * List monitor newsletters
   *
   * @remarks
   * List newsletters generated for a monitor. Newsletters bundle a monitor's recent events into a
   * human-readable digest and are produced on the monitor's configured schedule.
   *
   * @returns 200 - Success
   *
   * @throws {@link Monitors.ListMonitorNewslettersApiError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link PerigonError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listMonitorNewslettersApi(
    request: Monitors.ListMonitorNewslettersApiRequest,
    options?: RequestOptions,
  ): ApiPromise<MonitorNewsletterListResult, Monitors.ListMonitorNewslettersApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v1/api/monitors/{uuid}/newsletters"),
        auth: this.#auth.apiKeyAuth,
        pathParams: [{ name: "uuid", value: request.uuid, schema: s.string() }],
        query: [
          { name: "sortBy", value: request.sortBy, schema: s.string() },
          { name: "sortOrder", value: request.sortOrder, schema: sortOrderSchema },
          { name: "title", value: request.title, schema: s.optional(s.string()) },
          { name: "from", value: request.from, schema: s.optional(s.dateTime()) },
          { name: "to", value: request.to, schema: s.optional(s.dateTime()) },
          { name: "page", value: request.page, schema: s.defaulted(s.int(), 0) },
          { name: "size", value: request.size, schema: s.defaulted(s.int(), 10) },
          { name: "nulls", value: request.nulls, schema: s.optional(s.lazy(() => nullsSchema)) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: monitorNewsletterListResultSchema },
        errorFactory: Monitors.ListMonitorNewslettersApiError,
      },
      options,
    );
  }

  /**
   * List monitor summaries
   *
   * @remarks
   * List AI-generated summaries produced for a monitor as matching content is processed.
   *
   * @returns 200 - Success
   *
   * @throws {@link Monitors.ListMonitorSummariesApiError} when the API answers with an error status
   * — narrow on `err.payload.kind`
   *
   * @throws {@link PerigonError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listMonitorSummariesApi(
    request: Monitors.ListMonitorSummariesApiRequest,
    options?: RequestOptions,
  ): ApiPromise<MonitorSummaryListResult, Monitors.ListMonitorSummariesApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v1/api/monitors/{uuid}/summary"),
        auth: this.#auth.apiKeyAuth,
        pathParams: [{ name: "uuid", value: request.uuid, schema: s.string() }],
        query: [
          { name: "sortBy", value: request.sortBy, schema: s.string() },
          { name: "sortOrder", value: request.sortOrder, schema: sortOrderSchema },
          { name: "from", value: request.from, schema: s.optional(s.dateTime()) },
          { name: "to", value: request.to, schema: s.optional(s.dateTime()) },
          { name: "page", value: request.page, schema: s.defaulted(s.int(), 0) },
          { name: "size", value: request.size, schema: s.defaulted(s.int(), 10) },
          { name: "nulls", value: request.nulls, schema: s.optional(s.lazy(() => nullsSchema)) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: monitorSummaryListResultSchema },
        errorFactory: Monitors.ListMonitorSummariesApiError,
      },
      options,
    );
  }

  /**
   * List monitors
   *
   * @remarks
   * List AI monitors for the organization associated with the API key. Excludes archived monitors
   * by default. Use the status parameter to filter.
   *
   * @returns 200 - Success
   *
   * @throws {@link Monitors.ListMonitorsApiError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link PerigonError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listMonitorsApi(
    request: Monitors.ListMonitorsApiRequest,
    options?: RequestOptions,
  ): ApiPromise<MonitorListResult, Monitors.ListMonitorsApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v1/api/monitors"),
        auth: this.#auth.apiKeyAuth,
        pathParams: [],
        query: [
          { name: "sortBy", value: request.sortBy, schema: s.string() },
          { name: "sortOrder", value: request.sortOrder, schema: sortOrderSchema },
          { name: "uuid", value: request.uuid, schema: s.optional(s.array(s.string())) },
          { name: "name", value: request.name, schema: s.optional(s.string()) },
          { name: "status", value: request.status, schema: s.optional(s.array(s.lazy(() => status2Schema))) },
          {
            name: "classificationType",
            value: request.classificationType,
            schema: s.optional(s.array(s.lazy(() => classificationType3Schema))),
          },
          { name: "page", value: request.page, schema: s.defaulted(s.int(), 0) },
          { name: "size", value: request.size, schema: s.defaulted(s.int(), 10) },
          { name: "nulls", value: request.nulls, schema: s.optional(s.lazy(() => nullsSchema)) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: monitorListResultInternalSchema },
        errorFactory: Monitors.ListMonitorsApiError,
      },
      options,
    );
  }

  /**
   * Pause monitor
   *
   * @remarks
   * Pause a monitor, stopping its processing pipeline.
   *
   * @returns 200 - Success
   *
   * @throws {@link Monitors.PauseMonitorApiError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link PerigonError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  pauseMonitorApi(
    request: Monitors.PauseMonitorApiRequest,
    options?: RequestOptions,
  ): ApiPromise<MonitorResult, Monitors.PauseMonitorApiError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/v1/api/monitors/{uuid}/pause"),
        auth: this.#auth.apiKeyAuth,
        pathParams: [{ name: "uuid", value: request.uuid, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: monitorResultInternalSchema },
        errorFactory: Monitors.PauseMonitorApiError,
      },
      options,
    );
  }

  /**
   * Update monitor
   *
   * @remarks
   * Partially update a monitor. Only provided fields are modified. Use /activate, /pause, or DELETE
   * to change monitor status.
   *
   * @returns 200 - Success
   *
   * @throws {@link Monitors.UpdateMonitorApiError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link PerigonError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  updateMonitorApi(
    request: Monitors.UpdateMonitorApiRequest,
    options?: RequestOptions,
  ): ApiPromise<MonitorResult, Monitors.UpdateMonitorApiError> {
    return this.#rawClient.execute(
      {
        method: "PATCH",
        urlTemplate: this.#servers.default("/v1/api/monitors/{uuid}"),
        auth: this.#auth.apiKeyAuth,
        pathParams: [{ name: "uuid", value: request.uuid, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: signalApiUpdateBodyInternalSchema },
      },
      {
        success: { kind: "json", schema: monitorResultInternalSchema },
        errorFactory: Monitors.UpdateMonitorApiError,
      },
      options,
    );
  }
}

export namespace Monitors {
  export type ActivateMonitorApiRequest = {
    /** UUID of the monitor to activate. */
    uuid: string;
  };

  export class ActivateMonitorApiError extends ApiError {
    declare readonly payload:
      | Declared<"errorResponse", ErrorResponse>
      | Declared<"errorResponse2", ErrorResponse>
      | Declared<"errorResponse3", ErrorResponse>
      | Declared<"errorResponse4", ErrorResponse>
      | Declared<"errorResponse5", ErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<ActivateMonitorApiError> = [
      { on: 401, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 500, kind: "errorResponse2", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 400, kind: "errorResponse3", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 403, kind: "errorResponse4", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 429, kind: "errorResponse5", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export type ArchiveMonitorApiRequest = {
    /** UUID of the monitor to archive. */
    uuid: string;
  };

  export class ArchiveMonitorApiError extends ApiError {
    declare readonly payload:
      | Declared<"errorResponse", ErrorResponse>
      | Declared<"errorResponse2", ErrorResponse>
      | Declared<"errorResponse3", ErrorResponse>
      | Declared<"errorResponse4", ErrorResponse>
      | Declared<"errorResponse5", ErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<ArchiveMonitorApiError> = [
      { on: 401, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 500, kind: "errorResponse2", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 400, kind: "errorResponse3", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 403, kind: "errorResponse4", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 429, kind: "errorResponse5", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export type CreateMonitorApiRequest = {
    body: SignalApiCreateBody;
  };

  export class CreateMonitorApiError extends ApiError {
    declare readonly payload:
      | Declared<"errorResponse", ErrorResponse>
      | Declared<"errorResponse2", ErrorResponse>
      | Declared<"errorResponse3", ErrorResponse>
      | Declared<"errorResponse4", ErrorResponse>
      | Declared<"errorResponse5", ErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<CreateMonitorApiError> = [
      { on: 401, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 500, kind: "errorResponse2", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 400, kind: "errorResponse3", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 403, kind: "errorResponse4", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 429, kind: "errorResponse5", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export type GetMonitorApiRequest = {
    /** UUID of the monitor to retrieve. */
    uuid: string;
  };

  export class GetMonitorApiError extends ApiError {
    declare readonly payload:
      | Declared<"errorResponse", ErrorResponse>
      | Declared<"errorResponse2", ErrorResponse>
      | Declared<"errorResponse3", ErrorResponse>
      | Declared<"errorResponse4", ErrorResponse>
      | Declared<"errorResponse5", ErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetMonitorApiError> = [
      { on: 401, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 500, kind: "errorResponse2", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 400, kind: "errorResponse3", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 403, kind: "errorResponse4", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 429, kind: "errorResponse5", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export type ListMonitorEventsApiRequest = {
    /** UUID of the monitor whose events to retrieve. */
    uuid: string;
    /** Required field used to sort events. Accepts createdAt, updatedAt, or eventDate. */
    sortBy: string;
    /** Required direction used to sort results. Accepts asc or desc. */
    sortOrder: SortOrder;
    /** Filter for events with this exact event type. */
    eventType?: string;
    /** Filter for events created on or after this date. Accepts ISO 8601 or yyyy-mm-dd format. */
    from?: Date;
    /** Filter for events created on or before this date. Accepts ISO 8601 or yyyy-mm-dd format. */
    to?: Date;
    /** Zero-based page number to retrieve. Defaults to 0. @default 0 */
    page?: number;
    /** Number of results per page. Must be between 1 and 100; defaults to 10. @default 10 */
    size?: number;
    /** Placement of null values in sorted results. Accepts first or last. */
    nulls?: Nulls;
  };

  export const listMonitorEventsApiRequestSchema: Schema<ListMonitorEventsApiRequest> = s.lazySchema(() =>
    s.object<ListMonitorEventsApiRequest>({
      uuid: s.string(),
      sortBy: s.string(),
      sortOrder: sortOrderSchema,
      eventType: s.optional(s.string()),
      from: s.optional(s.dateTime()),
      to: s.optional(s.dateTime()),
      page: s.defaulted(s.int().check(s.gte(0)), 0),
      size: s.defaulted(s.int().check(s.gte(1), s.lte(100)), 10),
      nulls: s.optional(s.lazy(() => nullsSchema)),
    }),
  );

  export class ListMonitorEventsApiError extends ApiError {
    declare readonly payload:
      | Declared<"errorResponse", ErrorResponse>
      | Declared<"errorResponse2", ErrorResponse>
      | Declared<"errorResponse3", ErrorResponse>
      | Declared<"errorResponse4", ErrorResponse>
      | Declared<"errorResponse5", ErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<ListMonitorEventsApiError> = [
      { on: 401, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 500, kind: "errorResponse2", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 400, kind: "errorResponse3", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 403, kind: "errorResponse4", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 429, kind: "errorResponse5", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export type ListMonitorNewslettersApiRequest = {
    /** UUID of the monitor whose newsletters to retrieve. */
    uuid: string;
    /** Required field used to sort newsletters. Accepts createdAt or updatedAt. */
    sortBy: string;
    /** Required direction used to sort results. Accepts asc or desc. */
    sortOrder: SortOrder;
    /** Filter by newsletter title using a case-insensitive partial match. */
    title?: string;
    /**
     * Filter for newsletters created on or after this date. Accepts ISO 8601 or yyyy-mm-dd format.
     */
    from?: Date;
    /**
     * Filter for newsletters created on or before this date. Accepts ISO 8601 or yyyy-mm-dd format.
     */
    to?: Date;
    /** Zero-based page number to retrieve. Defaults to 0. @default 0 */
    page?: number;
    /** Number of results per page. Must be between 1 and 100; defaults to 10. @default 10 */
    size?: number;
    /** Placement of null values in sorted results. Accepts first or last. */
    nulls?: Nulls;
  };

  export const listMonitorNewslettersApiRequestSchema: Schema<ListMonitorNewslettersApiRequest> =
    s.lazySchema(() =>
      s.object<ListMonitorNewslettersApiRequest>({
        uuid: s.string(),
        sortBy: s.string(),
        sortOrder: sortOrderSchema,
        title: s.optional(s.string()),
        from: s.optional(s.dateTime()),
        to: s.optional(s.dateTime()),
        page: s.defaulted(s.int().check(s.gte(0)), 0),
        size: s.defaulted(s.int().check(s.gte(1), s.lte(100)), 10),
        nulls: s.optional(s.lazy(() => nullsSchema)),
      }),
    );

  export class ListMonitorNewslettersApiError extends ApiError {
    declare readonly payload:
      | Declared<"errorResponse", ErrorResponse>
      | Declared<"errorResponse2", ErrorResponse>
      | Declared<"errorResponse3", ErrorResponse>
      | Declared<"errorResponse4", ErrorResponse>
      | Declared<"errorResponse5", ErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<ListMonitorNewslettersApiError> = [
      { on: 401, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 500, kind: "errorResponse2", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 400, kind: "errorResponse3", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 403, kind: "errorResponse4", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 429, kind: "errorResponse5", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export type ListMonitorSummariesApiRequest = {
    /** UUID of the monitor whose summaries to retrieve. */
    uuid: string;
    /** Required field used to sort summaries. Accepts createdAt or updatedAt. */
    sortBy: string;
    /** Required direction used to sort results. Accepts asc or desc. */
    sortOrder: SortOrder;
    /**
     * Filter for summaries created on or after this date. Accepts ISO 8601 or yyyy-mm-dd format.
     */
    from?: Date;
    /**
     * Filter for summaries created on or before this date. Accepts ISO 8601 or yyyy-mm-dd format.
     */
    to?: Date;
    /** Zero-based page number to retrieve. Defaults to 0. @default 0 */
    page?: number;
    /** Number of results per page. Must be between 1 and 100; defaults to 10. @default 10 */
    size?: number;
    /** Placement of null values in sorted results. Accepts first or last. */
    nulls?: Nulls;
  };

  export const listMonitorSummariesApiRequestSchema: Schema<ListMonitorSummariesApiRequest> = s.lazySchema(
    () =>
      s.object<ListMonitorSummariesApiRequest>({
        uuid: s.string(),
        sortBy: s.string(),
        sortOrder: sortOrderSchema,
        from: s.optional(s.dateTime()),
        to: s.optional(s.dateTime()),
        page: s.defaulted(s.int().check(s.gte(0)), 0),
        size: s.defaulted(s.int().check(s.gte(1), s.lte(100)), 10),
        nulls: s.optional(s.lazy(() => nullsSchema)),
      }),
  );

  export class ListMonitorSummariesApiError extends ApiError {
    declare readonly payload:
      | Declared<"errorResponse", ErrorResponse>
      | Declared<"errorResponse2", ErrorResponse>
      | Declared<"errorResponse3", ErrorResponse>
      | Declared<"errorResponse4", ErrorResponse>
      | Declared<"errorResponse5", ErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<ListMonitorSummariesApiError> = [
      { on: 401, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 500, kind: "errorResponse2", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 400, kind: "errorResponse3", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 403, kind: "errorResponse4", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 429, kind: "errorResponse5", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export type ListMonitorsApiRequest = {
    /** Required field used to sort monitors. Accepts createdAt or updatedAt. */
    sortBy: string;
    /** Required direction used to sort results. Accepts asc or desc. */
    sortOrder: SortOrder;
    /** Filter by one or more monitor UUIDs. Multiple values are combined with OR. */
    uuid?: string[];
    /** Filter by monitor name using a case-insensitive partial match. */
    name?: string;
    /**
     * Filter by status: DRAFT, ACTIVE, STOPPED, or ARCHIVED. When omitted, archived monitors are
     * excluded.
     */
    status?: Status2[];
    /**
     * Filter by classification type: EVENT, MENTIONS, or TOPIC. Multiple values are combined with
     * OR.
     */
    classificationType?: ClassificationType3[];
    /** Zero-based page number to retrieve. Defaults to 0. @default 0 */
    page?: number;
    /** Number of results per page. Must be between 1 and 100; defaults to 10. @default 10 */
    size?: number;
    /** Placement of null values in sorted results. Accepts first or last. */
    nulls?: Nulls;
  };

  export const listMonitorsApiRequestSchema: Schema<ListMonitorsApiRequest> = s.lazySchema(() =>
    s.object<ListMonitorsApiRequest>({
      sortBy: s.string(),
      sortOrder: sortOrderSchema,
      uuid: s.optional(s.array(s.string())),
      name: s.optional(s.string()),
      status: s.optional(s.array(s.lazy(() => status2Schema)).check(s.uniqueItems())),
      classificationType: s.optional(s.array(s.lazy(() => classificationType3Schema)).check(s.uniqueItems())),
      page: s.defaulted(s.int().check(s.gte(0)), 0),
      size: s.defaulted(s.int().check(s.gte(1), s.lte(100)), 10),
      nulls: s.optional(s.lazy(() => nullsSchema)),
    }),
  );

  export class ListMonitorsApiError extends ApiError {
    declare readonly payload:
      | Declared<"errorResponse", ErrorResponse>
      | Declared<"errorResponse2", ErrorResponse>
      | Declared<"errorResponse3", ErrorResponse>
      | Declared<"errorResponse4", ErrorResponse>
      | Declared<"errorResponse5", ErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<ListMonitorsApiError> = [
      { on: 401, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 500, kind: "errorResponse2", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 400, kind: "errorResponse3", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 403, kind: "errorResponse4", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 429, kind: "errorResponse5", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export type PauseMonitorApiRequest = {
    /** UUID of the monitor to pause. */
    uuid: string;
  };

  export class PauseMonitorApiError extends ApiError {
    declare readonly payload:
      | Declared<"errorResponse", ErrorResponse>
      | Declared<"errorResponse2", ErrorResponse>
      | Declared<"errorResponse3", ErrorResponse>
      | Declared<"errorResponse4", ErrorResponse>
      | Declared<"errorResponse5", ErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<PauseMonitorApiError> = [
      { on: 401, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 500, kind: "errorResponse2", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 400, kind: "errorResponse3", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 403, kind: "errorResponse4", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 429, kind: "errorResponse5", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export type UpdateMonitorApiRequest = {
    /** UUID of the monitor to update. */
    uuid: string;
    body: SignalApiUpdateBody;
  };

  export class UpdateMonitorApiError extends ApiError {
    declare readonly payload:
      | Declared<"errorResponse", ErrorResponse>
      | Declared<"errorResponse2", ErrorResponse>
      | Declared<"errorResponse3", ErrorResponse>
      | Declared<"errorResponse4", ErrorResponse>
      | Declared<"errorResponse5", ErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<UpdateMonitorApiError> = [
      { on: 401, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 500, kind: "errorResponse2", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 400, kind: "errorResponse3", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 403, kind: "errorResponse4", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 429, kind: "errorResponse5", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }
}
