import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import {
  idrQueueForReprocessingInputInternalSchema,
  type IdrQueueForReprocessingInput,
} from "../models/idr-queue-for-reprocessing-input.js";
import {
  idrQueueForReprocessingOutputSchema,
  type IdrQueueForReprocessingOutput,
} from "../models/idr-queue-for-reprocessing-output.js";
import {
  idrReprocessStatusOutputSchema,
  type IdrReprocessStatusOutput,
} from "../models/idr-reprocess-status-output.js";
import { listIdrRunsOutputSchema, type ListIdrRunsOutput } from "../models/list-idr-runs-output.js";
import {
  OrderByHightouchIdrApi,
  orderByHightouchIdrApiSchema,
} from "../models/order-by-hightouch-idr-api.js";
import { triggerRunIdrInputSchema, type TriggerRunIdrInput } from "../models/trigger-run-idr-input.js";
import { triggerRunIdrOutputSchema, type TriggerRunIdrOutput } from "../models/trigger-run-idr-output.js";
import { validateErrorJsonSchema, type ValidateErrorJson } from "../models/validate-error-json.js";
import type { Servers } from "../servers.js";

export class Idr {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * List IDR runs
   *
   * @remarks
   * List runs for a given IDR graph
   *
   * @returns Ok
   *
   * @throws {@link Idr.ListIdrRunsError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link HightouchError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listIdrRuns(
    request: Idr.ListIdrRunsRequest,
    options?: RequestOptions,
  ): ApiPromise<ListIdrRunsOutput, Idr.ListIdrRunsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/idr/{graphId}/runs"),
        auth: this.#auth.bearerAuth,
        pathParams: [{ name: "graphId", value: request.graphId, schema: s.string() }],
        query: [
          { name: "runId", value: request.runId, schema: s.optional(s.string()) },
          { name: "after", value: request.after, schema: s.optional(s.dateTime()) },
          { name: "before", value: request.before, schema: s.optional(s.dateTime()) },
          { name: "limit", value: request.limit, schema: s.defaulted(s.float64(), 20) },
          { name: "offset", value: request.offset, schema: s.defaulted(s.float64(), 0) },
          {
            name: "orderBy",
            value: request.orderBy,
            schema: s.defaulted(orderByHightouchIdrApiSchema, OrderByHightouchIdrApi.CreatedAt),
          },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: listIdrRunsOutputSchema },
        errorFactory: Idr.ListIdrRunsError,
      },
      options,
    );
  }

  /**
   * Queue identifier values for reprocessing
   *
   * @remarks
   * Trigger an async job to queue identifier values for reprocessing, optionally adding them to the
   * blocklist. If `block` is true (the default), identifier values will be added to the blocklist
   * and ignored in future runs. Clusters containing these identifier values will be queued for
   * reprocessing.
   *
   * @returns ID associated with the reprocessing request. This can be used to query the status of
   * the request.
   *
   * @throws {@link Idr.QueueForReprocessingError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link HightouchError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  queueForReprocessing(
    request: Idr.QueueForReprocessingRequest,
    options?: RequestOptions,
  ): ApiPromise<IdrQueueForReprocessingOutput, Idr.QueueForReprocessingError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/idr/{graphId}/queue-for-reprocessing"),
        auth: this.#auth.bearerAuth,
        pathParams: [{ name: "graphId", value: request.graphId, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => idrQueueForReprocessingInputInternalSchema)),
        },
      },
      {
        success: { kind: "json", schema: idrQueueForReprocessingOutputSchema },
        errorFactory: Idr.QueueForReprocessingError,
      },
      options,
    );
  }

  /**
   * Reprocess status
   *
   * @remarks
   * Get the status of a reprocessing request
   *
   * @returns The status of the reprocessing request.
   *
   * @throws {@link Idr.ReprocessStatusError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link HightouchError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  reprocessStatus(
    request: Idr.ReprocessStatusRequest,
    options?: RequestOptions,
  ): ApiPromise<IdrReprocessStatusOutput, Idr.ReprocessStatusError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/idr/{graphId}/reprocess-status/{requestId}"),
        auth: this.#auth.bearerAuth,
        pathParams: [
          { name: "graphId", value: request.graphId, schema: s.string() },
          { name: "requestId", value: request.requestId, schema: s.string() },
        ],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: idrReprocessStatusOutputSchema },
        errorFactory: Idr.ReprocessStatusError,
      },
      options,
    );
  }

  /**
   * Trigger IDR run
   *
   * @remarks
   * Trigger a new IDR run for a graph
   *
   * @returns Ok
   *
   * @throws {@link Idr.TriggerIdrRunError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link HightouchError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  triggerIdrRun(
    request: Idr.TriggerIdrRunRequest,
    options?: RequestOptions,
  ): ApiPromise<TriggerRunIdrOutput, Idr.TriggerIdrRunError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/idr/{graphId}/trigger"),
        auth: this.#auth.bearerAuth,
        pathParams: [{ name: "graphId", value: request.graphId, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => triggerRunIdrInputSchema)),
        },
      },
      {
        success: { kind: "json", schema: triggerRunIdrOutputSchema },
        errorFactory: Idr.TriggerIdrRunError,
      },
      options,
    );
  }
}

export namespace Idr {
  export type ListIdrRunsRequest = {
    /** Required. ID of the graph to list runs for. */
    graphId: string;
    /** Run ID to query for. */
    runId?: string;
    /** Select runs that started on or after this ISO timestamp. */
    after?: Date;
    /** Select runs that started on or before this ISO timestamp. */
    before?: Date;
    /** Maximum number of runs to return. @default 20 */
    limit?: number;
    /** Offset to start at for pagination. @default 0 */
    offset?: number;
    /** Field to sort by. @default OrderByHightouchIdrApi.CreatedAt */
    orderBy?: OrderByHightouchIdrApi;
  };

  export class ListIdrRunsError extends ApiError {
    declare readonly payload:
      | Declared<"error400", undefined>
      | Declared<"error401", undefined>
      | Declared<"error403", undefined>
      | Declared<"error404", undefined>
      | Declared<"validateErrorJson", ValidateErrorJson>
      | Undeclared;

    static readonly errors: ErrorDecoders<ListIdrRunsError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 401, kind: "error401", decode: { kind: "empty" } },
      { on: 403, kind: "error403", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 422, kind: "validateErrorJson", decode: { kind: "json", schema: validateErrorJsonSchema } },
    ];
  }

  export type QueueForReprocessingRequest = {
    /** Required. ID of the graph containing the identifiers. */
    graphId: string;
    body?: IdrQueueForReprocessingInput;
  };

  export class QueueForReprocessingError extends ApiError {
    declare readonly payload:
      | Declared<"error400", undefined>
      | Declared<"error401", undefined>
      | Declared<"error403", undefined>
      | Declared<"error404", undefined>
      | Declared<"validateErrorJson", ValidateErrorJson>
      | Undeclared;

    static readonly errors: ErrorDecoders<QueueForReprocessingError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 401, kind: "error401", decode: { kind: "empty" } },
      { on: 403, kind: "error403", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 422, kind: "validateErrorJson", decode: { kind: "json", schema: validateErrorJsonSchema } },
    ];
  }

  export type ReprocessStatusRequest = {
    /** Required. ID of the graph for the reprocessing request. */
    graphId: string;
    /** Required. ID of the reprocessing request. */
    requestId: string;
  };

  export class ReprocessStatusError extends ApiError {
    declare readonly payload:
      | Declared<"error400", undefined>
      | Declared<"error401", undefined>
      | Declared<"error403", undefined>
      | Declared<"error404", undefined>
      | Declared<"validateErrorJson", ValidateErrorJson>
      | Undeclared;

    static readonly errors: ErrorDecoders<ReprocessStatusError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 401, kind: "error401", decode: { kind: "empty" } },
      { on: 403, kind: "error403", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 422, kind: "validateErrorJson", decode: { kind: "json", schema: validateErrorJsonSchema } },
    ];
  }

  export type TriggerIdrRunRequest = {
    graphId: string;
    body?: TriggerRunIdrInput;
  };

  export class TriggerIdrRunError extends ApiError {
    declare readonly payload:
      | Declared<"error400", undefined>
      | Declared<"error401", undefined>
      | Declared<"error403", undefined>
      | Declared<"error404", undefined>
      | Declared<"validateErrorJson", ValidateErrorJson>
      | Undeclared;

    static readonly errors: ErrorDecoders<TriggerIdrRunError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 401, kind: "error401", decode: { kind: "empty" } },
      { on: 403, kind: "error403", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 422, kind: "validateErrorJson", decode: { kind: "json", schema: validateErrorJsonSchema } },
    ];
  }
}
