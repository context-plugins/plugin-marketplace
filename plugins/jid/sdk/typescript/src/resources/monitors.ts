import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import { errorSchema, type Error } from "../models/error.js";
import { v1MonitorsRequestInternalSchema, type V1MonitorsRequest } from "../models/v1-monitors-request.js";
import type { Servers } from "../servers.js";

/**
 * Change monitoring with signed webhooks
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
   * Watch a file; each change is delivered with old and new values
   *
   * @returns Created. webhook_secret is returned once.
   *
   * @throws {@link Monitors.CreateMonitorError} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link JidError} when no usable response was produced: a connection failure, a timeout,
   * a body that would not decode, a value that would not encode, or a credential that could not be
   * obtained
   */
  createMonitor(
    request: Monitors.CreateMonitorRequest,
    options?: RequestOptions,
  ): ApiPromise<Record<string, unknown>, Monitors.CreateMonitorError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/v1/monitors"),
        auth: this.#auth.bearer,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: v1MonitorsRequestInternalSchema },
      },
      {
        success: { kind: "json", schema: s.record(s.string(), s.unknown()) },
        errorFactory: Monitors.CreateMonitorError,
      },
      options,
    );
  }

  /**
   * Delete a monitor
   *
   * @returns Deleted
   *
   * @throws {@link Monitors.DeleteMonitorError} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link JidError} when no usable response was produced: a connection failure, a timeout,
   * a body that would not decode, a value that would not encode, or a credential that could not be
   * obtained
   */
  deleteMonitor(
    request: Monitors.DeleteMonitorRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, Monitors.DeleteMonitorError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default("/v1/monitors"),
        auth: this.#auth.bearer,
        pathParams: [],
        query: [{ name: "id", value: request.id, schema: s.string() }],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: Monitors.DeleteMonitorError,
      },
      options,
    );
  }

  /**
   * List your monitors
   *
   * @returns Monitors
   *
   * @throws {@link Monitors.ListMonitorsError} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link JidError} when no usable response was produced: a connection failure, a timeout,
   * a body that would not decode, a value that would not encode, or a credential that could not be
   * obtained
   */
  listMonitors(options?: RequestOptions): ApiPromise<Record<string, unknown>, Monitors.ListMonitorsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v1/monitors"),
        auth: this.#auth.bearer,
        pathParams: [],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.record(s.string(), s.unknown()) },
        errorFactory: Monitors.ListMonitorsError,
      },
      options,
    );
  }
}

export namespace Monitors {
  export type CreateMonitorRequest = {
    body: V1MonitorsRequest;
  };

  export class CreateMonitorError extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"error3", Error>
      | Declared<"error4", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<CreateMonitorError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 402, kind: "error3", decode: { kind: "json", schema: errorSchema } },
      { on: 404, kind: "error4", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type DeleteMonitorRequest = {
    id: string;
  };

  export class DeleteMonitorError extends ApiError {
    declare readonly payload: Declared<"error", Error> | Undeclared;

    static readonly errors: ErrorDecoders<DeleteMonitorError> = [
      { on: 404, kind: "error", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export class ListMonitorsError extends ApiError {
    declare readonly payload: Declared<"error", Error> | Undeclared;

    static readonly errors: ErrorDecoders<ListMonitorsError> = [
      { on: 401, kind: "error", decode: { kind: "json", schema: errorSchema } },
    ];
  }
}
