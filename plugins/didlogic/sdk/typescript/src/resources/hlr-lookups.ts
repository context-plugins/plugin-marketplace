import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  apiV2HlrHistoryResponseSchema,
  type ApiV2HlrHistoryResponse,
} from "../models/api-v2-hlr-history-response.js";
import {
  apiV2HlrHistory401Error1Schema,
  type ApiV2HlrHistory401Error1,
} from "../models/api-v2-hlr-history401-error1.js";
import {
  apiV2HlrHistory403Error1Schema,
  type ApiV2HlrHistory403Error1,
} from "../models/api-v2-hlr-history403-error1.js";
import { apiV2HlrRequestSchema, type ApiV2HlrRequest } from "../models/api-v2-hlr-request.js";
import { apiV2HlrResponseSchema, type ApiV2HlrResponse } from "../models/api-v2-hlr-response.js";
import { apiV2Hlr401Error1Schema, type ApiV2Hlr401Error1 } from "../models/api-v2-hlr401-error1.js";
import { apiV2Hlr403Error1Schema, type ApiV2Hlr403Error1 } from "../models/api-v2-hlr403-error1.js";
import { apiV2Hlr422Error1Schema, type ApiV2Hlr422Error1 } from "../models/api-v2-hlr422-error1.js";
import { Order, orderSchema } from "../models/order.js";
import { status1Schema, type Status1 } from "../models/status1.js";
import type { Servers } from "../servers.js";

export class HlrLookups {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Create HLR lookup
   *
   * @remarks
   * Submits phone numbers for an HLR (Home Location Register) lookup (maximum 1500 numbers per
   * request).
   *
   * Numbers must be supplied in **E.164 format** (e.g. `+14155552671`); a leading `+` is added
   * automatically when omitted.
   *
   * A single number resolves synchronously; larger batches are processed asynchronously — poll
   * hlr_history for results. Lookups are performed independently of call setup and do not affect
   * PDD. Results are not cached: each request re-queries the provider.
   *
   * `hlr_request.task_id` feeds hlr_history (`task_ids`).
   *
   * @returns returns the created HLR lookup task
   *
   * @throws {@link HlrLookups.HlrCreateError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link DidLogicError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  hlrCreate(
    request: HlrLookups.HlrCreateRequest,
    options?: RequestOptions,
  ): ApiPromise<ApiV2HlrResponse, HlrLookups.HlrCreateError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/api/v2/hlr"),
        auth: this.#auth.bearerAuth,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: apiV2HlrRequestSchema },
      },
      {
        success: { kind: "json", schema: apiV2HlrResponseSchema },
        errorFactory: HlrLookups.HlrCreateError,
      },
      options,
    );
  }

  /**
   * List HLR lookup history
   *
   * @remarks
   * Returns the caller's HLR lookup logs — one per number checked — with the lookup result
   * (validity, carrier, MCC/MNC, phone type, ported and risky flags, country). Supports filtering
   * by number prefix, status, and date ranges, plus pagination.
   *
   * @returns returns the caller HLR logs filtered by number prefix
   *
   * @throws {@link HlrLookups.HlrHistoryError} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link DidLogicError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  hlrHistory(
    request: HlrLookups.HlrHistoryRequest = {},
    options?: RequestOptions,
  ): ApiPromise<ApiV2HlrHistoryResponse, HlrLookups.HlrHistoryError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/v2/hlr/history"),
        auth: this.#auth.bearerAuth,
        pathParams: [],
        query: [
          { name: "ids", value: request.ids, schema: s.optional(s.string()) },
          { name: "task_ids", value: request.taskIds, schema: s.optional(s.string()) },
          { name: "number", value: request.number, schema: s.optional(s.string()) },
          { name: "number_start", value: request.numberStart, schema: s.optional(s.int()) },
          { name: "status", value: request.status, schema: s.optional(s.lazy(() => status1Schema)) },
          { name: "created_at_from", value: request.createdAtFrom, schema: s.optional(s.dateOnly()) },
          { name: "created_at_to", value: request.createdAtTo, schema: s.optional(s.dateOnly()) },
          { name: "processed_at_from", value: request.processedAtFrom, schema: s.optional(s.dateOnly()) },
          { name: "processed_at_to", value: request.processedAtTo, schema: s.optional(s.dateOnly()) },
          { name: "order_by", value: request.orderBy, schema: s.optional(s.string()) },
          { name: "order", value: request.order, schema: s.defaulted(orderSchema, Order.Desc) },
          { name: "page", value: request.page, schema: s.defaulted(s.int(), 1) },
          { name: "per_page", value: request.perPage, schema: s.defaulted(s.int(), 20) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: apiV2HlrHistoryResponseSchema },
        errorFactory: HlrLookups.HlrHistoryError,
      },
      options,
    );
  }
}

export namespace HlrLookups {
  export type HlrCreateRequest = {
    body: ApiV2HlrRequest;
  };

  export class HlrCreateError extends ApiError {
    declare readonly payload:
      | Declared<"apiV2Hlr401Error1", ApiV2Hlr401Error1>
      | Declared<"apiV2Hlr403Error1", ApiV2Hlr403Error1>
      | Declared<"apiV2Hlr422Error1", ApiV2Hlr422Error1>
      | Undeclared;

    static readonly errors: ErrorDecoders<HlrCreateError> = [
      { on: 401, kind: "apiV2Hlr401Error1", decode: { kind: "json", schema: apiV2Hlr401Error1Schema } },
      { on: 403, kind: "apiV2Hlr403Error1", decode: { kind: "json", schema: apiV2Hlr403Error1Schema } },
      { on: 422, kind: "apiV2Hlr422Error1", decode: { kind: "json", schema: apiV2Hlr422Error1Schema } },
    ];
  }

  export type HlrHistoryRequest = {
    /** Filter logs by log IDs (comma-separated) */
    ids?: string;
    /** Filter logs by task IDs (comma-separated), from hlr_create */
    taskIds?: string;
    /** Filter logs by specific phone numbers (comma-separated) */
    number?: string;
    /** Filter logs by phone-number prefix (starts-with) */
    numberStart?: number;
    /** Filter by status */
    status?: Status1;
    /** Filter created from this date (YYYY-MM-DD) */
    createdAtFrom?: string;
    /** Filter created until this date (YYYY-MM-DD) */
    createdAtTo?: string;
    /** Filter processed from this date (YYYY-MM-DD) */
    processedAtFrom?: string;
    /** Filter processed until this date (YYYY-MM-DD) */
    processedAtTo?: string;
    /** Field to sort by */
    orderBy?: string;
    /** Sort order @default Order.Desc */
    order?: Order;
    /** Page number for pagination (starts from 1) @default 1 */
    page?: number;
    /** Number of items per page @default 20 */
    perPage?: number;
  };

  export const hlrHistoryRequestSchema: Schema<HlrHistoryRequest> = s.lazySchema(() =>
    s.object<HlrHistoryRequest>({
      ids: s.optional(s.string()),
      taskIds: s.optional(s.string()),
      number: s.optional(s.string()),
      numberStart: s.optional(s.int()),
      status: s.optional(s.lazy(() => status1Schema)),
      createdAtFrom: s.optional(s.dateOnly()),
      createdAtTo: s.optional(s.dateOnly()),
      processedAtFrom: s.optional(s.dateOnly()),
      processedAtTo: s.optional(s.dateOnly()),
      orderBy: s.optional(s.string()),
      order: s.defaulted(orderSchema, Order.Desc),
      page: s.defaulted(s.int().check(s.gte(1)), 1),
      perPage: s.defaulted(s.int().check(s.gte(1), s.lte(100)), 20),
    }),
  );

  export class HlrHistoryError extends ApiError {
    declare readonly payload:
      | Declared<"apiV2HlrHistory401Error1", ApiV2HlrHistory401Error1>
      | Declared<"apiV2HlrHistory403Error1", ApiV2HlrHistory403Error1>
      | Undeclared;

    static readonly errors: ErrorDecoders<HlrHistoryError> = [
      {
        on: 401,
        kind: "apiV2HlrHistory401Error1",
        decode: { kind: "json", schema: apiV2HlrHistory401Error1Schema },
      },
      {
        on: 403,
        kind: "apiV2HlrHistory403Error1",
        decode: { kind: "json", schema: apiV2HlrHistory403Error1Schema },
      },
    ];
  }
}
