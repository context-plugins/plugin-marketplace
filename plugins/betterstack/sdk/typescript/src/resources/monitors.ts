import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { monitorCreateInternalSchema, type MonitorCreate } from "../models/monitor-create.js";
import { monitorListSchema, type MonitorList } from "../models/monitor-list.js";
import { monitorResourceSchema, type MonitorResource } from "../models/monitor-resource.js";
import type { Servers } from "../servers.js";

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
   * Create monitor
   *
   * @returns Created monitor.
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link BetterStackError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  createMonitor(
    request: Monitors.CreateMonitorRequest,
    options?: RequestOptions,
  ): ApiPromise<MonitorResource, ApiError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/monitors"),
        auth: this.#auth.bearerAuth,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: monitorCreateInternalSchema },
      },
      {
        success: { kind: "json", schema: monitorResourceSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Delete monitor
   *
   * @returns Removed.
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link BetterStackError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  deleteMonitor(
    request: Monitors.DeleteMonitorRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, ApiError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default("/monitors/{id}"),
        auth: this.#auth.bearerAuth,
        pathParams: [{ name: "id", value: request.id, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Get monitor
   *
   * @returns Monitor.
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link BetterStackError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getMonitor(
    request: Monitors.GetMonitorRequest,
    options?: RequestOptions,
  ): ApiPromise<MonitorResource, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/monitors/{id}"),
        auth: this.#auth.bearerAuth,
        pathParams: [{ name: "id", value: request.id, schema: s.string() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: monitorResourceSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Monitor availability
   *
   * @returns Availability summary.
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link BetterStackError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getMonitorAvailability(
    request: Monitors.GetMonitorAvailabilityRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/monitors/{id}/availability"),
        auth: this.#auth.bearerAuth,
        pathParams: [{ name: "id", value: request.id, schema: s.string() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Monitor response times
   *
   * @returns Response time series.
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link BetterStackError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getMonitorResponseTimes(
    request: Monitors.GetMonitorResponseTimesRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/monitors/{id}/response-times"),
        auth: this.#auth.bearerAuth,
        pathParams: [{ name: "id", value: request.id, schema: s.string() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * List monitors
   *
   * @returns A page of monitors.
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link BetterStackError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listMonitors(
    request: Monitors.ListMonitorsRequest = {},
    options?: RequestOptions,
  ): ApiPromise<MonitorList, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/monitors"),
        auth: this.#auth.bearerAuth,
        pathParams: [],
        query: [
          { name: "per_page", value: request.perPage, schema: s.optional(s.int()) },
          { name: "page", value: request.page, schema: s.optional(s.int()) },
          { name: "url", value: request.url, schema: s.optional(s.string()) },
          { name: "pronounceable_name", value: request.pronounceableName, schema: s.optional(s.string()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: monitorListSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Update monitor
   *
   * @returns Updated monitor.
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link BetterStackError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  updateMonitor(
    request: Monitors.UpdateMonitorRequest,
    options?: RequestOptions,
  ): ApiPromise<MonitorResource, ApiError> {
    return this.#rawClient.execute(
      {
        method: "PATCH",
        urlTemplate: this.#servers.default("/monitors/{id}"),
        auth: this.#auth.bearerAuth,
        pathParams: [{ name: "id", value: request.id, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: monitorCreateInternalSchema },
      },
      {
        success: { kind: "json", schema: monitorResourceSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }
}

export namespace Monitors {
  export type CreateMonitorRequest = {
    body: MonitorCreate;
  };

  export type DeleteMonitorRequest = {
    id: string;
  };

  export type GetMonitorRequest = {
    id: string;
  };

  export type GetMonitorAvailabilityRequest = {
    id: string;
  };

  export type GetMonitorResponseTimesRequest = {
    id: string;
  };

  export type ListMonitorsRequest = {
    perPage?: number;
    page?: number;
    url?: string;
    pronounceableName?: string;
  };

  export const listMonitorsRequestSchema: Schema<ListMonitorsRequest> = s.lazySchema(() =>
    s.object<ListMonitorsRequest>({
      perPage: s.optional(s.int().check(s.gte(1), s.lte(50))),
      page: s.optional(s.int().check(s.gte(1))),
      url: s.optional(s.string()),
      pronounceableName: s.optional(s.string()),
    }),
  );

  export type UpdateMonitorRequest = {
    id: string;
    body: MonitorCreate;
  };
}
