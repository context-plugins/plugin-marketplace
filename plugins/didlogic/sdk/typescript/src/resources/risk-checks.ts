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
  apiV2NumbersRiskChecksLogsResponseSchema,
  type ApiV2NumbersRiskChecksLogsResponse,
} from "../models/api-v2-numbers-risk-checks-logs-response.js";
import {
  apiV2NumbersRiskChecksLogs401Error1Schema,
  type ApiV2NumbersRiskChecksLogs401Error1,
} from "../models/api-v2-numbers-risk-checks-logs401-error1.js";
import {
  apiV2NumbersRiskChecksLogs403Error1Schema,
  type ApiV2NumbersRiskChecksLogs403Error1,
} from "../models/api-v2-numbers-risk-checks-logs403-error1.js";
import {
  apiV2NumbersRiskChecksRequestSchema,
  type ApiV2NumbersRiskChecksRequest,
} from "../models/api-v2-numbers-risk-checks-request.js";
import {
  apiV2NumbersRiskChecksResponseSchema,
  type ApiV2NumbersRiskChecksResponse,
} from "../models/api-v2-numbers-risk-checks-response.js";
import {
  apiV2NumbersRiskChecksResponse1Schema,
  type ApiV2NumbersRiskChecksResponse1,
} from "../models/api-v2-numbers-risk-checks-response1.js";
import {
  apiV2NumbersRiskChecks401Error1Schema,
  type ApiV2NumbersRiskChecks401Error1,
} from "../models/api-v2-numbers-risk-checks401-error1.js";
import {
  apiV2NumbersRiskChecks403Error1Schema,
  type ApiV2NumbersRiskChecks403Error1,
} from "../models/api-v2-numbers-risk-checks403-error1.js";
import { Order, orderSchema } from "../models/order.js";
import { riskLevelSchema, type RiskLevel } from "../models/risk-level.js";
import {
  statusDidlogicComRiskChecksApiSchema,
  type StatusDidlogicComRiskChecksApi,
} from "../models/status-didlogic-com-risk-checks-api.js";
import {
  apiV2NumbersRiskChecksResponse21Schema,
  type ApiV2NumbersRiskChecksResponse21,
} from "../models/unions/api-v2-numbers-risk-checks-response21.js";
import type { Servers } from "../servers.js";

export class RiskChecks {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Create risk check
   *
   * @remarks
   * Creates a new risk check task for the provided phone numbers (maximum 1500 numbers per
   * request).
   *
   * `risk_check_request.task_id` feeds numbers_risk_checks_index and numbers_risk_checks_logs
   * (`task_ids`): the task status and the per-number results.
   *
   * **Note:** Results are informational only. Use at your own discretion.
   *
   * @returns returns created risk check task
   *
   * @throws {@link RiskChecks.NumbersRiskChecksCreateError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link DidLogicError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  numbersRiskChecksCreate(
    request: RiskChecks.NumbersRiskChecksCreateRequest,
    options?: RequestOptions,
  ): ApiPromise<ApiV2NumbersRiskChecksResponse1, RiskChecks.NumbersRiskChecksCreateError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/api/v2/numbers/risk_checks"),
        auth: this.#auth.bearerAuth,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: apiV2NumbersRiskChecksRequestSchema },
      },
      {
        success: { kind: "json", schema: apiV2NumbersRiskChecksResponse1Schema },
        errorFactory: RiskChecks.NumbersRiskChecksCreateError,
      },
      options,
    );
  }

  /**
   * List risk checks
   *
   * @remarks
   * Retrieves a list of risk check tasks.
   *
   * Returns information about all risk check tasks created by your organization, including task
   * status, number counts, and processing timestamps. Supports filtering by various criteria and
   * pagination.
   *
   * `tasks[].id` feeds numbers_risk_checks_logs (`task_ids`). Rows: numbers_risk_checks_logs.
   *
   * @returns returns risk check tasks
   *
   * @throws {@link RiskChecks.NumbersRiskChecksIndexError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link DidLogicError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  numbersRiskChecksIndex(
    request: RiskChecks.NumbersRiskChecksIndexRequest = {},
    options?: RequestOptions,
  ): ApiPromise<ApiV2NumbersRiskChecksResponse, RiskChecks.NumbersRiskChecksIndexError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/v2/numbers/risk_checks"),
        auth: this.#auth.bearerAuth,
        pathParams: [],
        query: [
          { name: "task_ids", value: request.taskIds, schema: s.optional(s.string()) },
          {
            name: "status",
            value: request.status,
            schema: s.optional(s.lazy(() => statusDidlogicComRiskChecksApiSchema)),
          },
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
        success: { kind: "json", schema: apiV2NumbersRiskChecksResponseSchema },
        errorFactory: RiskChecks.NumbersRiskChecksIndexError,
      },
      options,
    );
  }

  /**
   * List risk check logs
   *
   * @remarks
   * Retrieves risk check logs for individual phone numbers.
   *
   * Returns detailed information about each number that was checked, including its risk level,
   * status, and processing time. Supports filtering by various criteria and pagination.
   *
   * `logs[].task_id` feeds numbers_risk_checks_index (`task_ids`).
   *
   * @returns returns risk check logs
   *
   * @throws {@link RiskChecks.NumbersRiskChecksLogsError} when the API answers with an error status
   * — narrow on `err.payload.kind`
   *
   * @throws {@link DidLogicError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  numbersRiskChecksLogs(
    request: RiskChecks.NumbersRiskChecksLogsRequest = {},
    options?: RequestOptions,
  ): ApiPromise<ApiV2NumbersRiskChecksLogsResponse, RiskChecks.NumbersRiskChecksLogsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/v2/numbers/risk_checks/logs"),
        auth: this.#auth.bearerAuth,
        pathParams: [],
        query: [
          { name: "ids", value: request.ids, schema: s.optional(s.string()) },
          { name: "task_ids", value: request.taskIds, schema: s.optional(s.int()) },
          { name: "number", value: request.number, schema: s.optional(s.string()) },
          {
            name: "status",
            value: request.status,
            schema: s.optional(s.lazy(() => statusDidlogicComRiskChecksApiSchema)),
          },
          { name: "risk_level", value: request.riskLevel, schema: s.optional(s.lazy(() => riskLevelSchema)) },
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
        success: { kind: "json", schema: apiV2NumbersRiskChecksLogsResponseSchema },
        errorFactory: RiskChecks.NumbersRiskChecksLogsError,
      },
      options,
    );
  }
}

export namespace RiskChecks {
  export type NumbersRiskChecksCreateRequest = {
    body: ApiV2NumbersRiskChecksRequest;
  };

  export class NumbersRiskChecksCreateError extends ApiError {
    declare readonly payload:
      | Declared<"apiV2NumbersRiskChecks401Error1", ApiV2NumbersRiskChecks401Error1>
      | Declared<"apiV2NumbersRiskChecks403Error1", ApiV2NumbersRiskChecks403Error1>
      | Declared<"apiV2NumbersRiskChecksResponse21", ApiV2NumbersRiskChecksResponse21>
      | Undeclared;

    static readonly errors: ErrorDecoders<NumbersRiskChecksCreateError> = [
      {
        on: 401,
        kind: "apiV2NumbersRiskChecks401Error1",
        decode: { kind: "json", schema: apiV2NumbersRiskChecks401Error1Schema },
      },
      {
        on: 403,
        kind: "apiV2NumbersRiskChecks403Error1",
        decode: { kind: "json", schema: apiV2NumbersRiskChecks403Error1Schema },
      },
      {
        on: 422,
        kind: "apiV2NumbersRiskChecksResponse21",
        decode: { kind: "json", schema: apiV2NumbersRiskChecksResponse21Schema },
      },
    ];
  }

  export type NumbersRiskChecksIndexRequest = {
    /** Task IDs (comma-separated) from numbers_risk_checks_create, numbers_risk_checks_logs */
    taskIds?: string;
    /** Filter by status */
    status?: StatusDidlogicComRiskChecksApi;
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

  export const numbersRiskChecksIndexRequestSchema: Schema<NumbersRiskChecksIndexRequest> = s.lazySchema(() =>
    s.object<NumbersRiskChecksIndexRequest>({
      taskIds: s.optional(s.string()),
      status: s.optional(s.lazy(() => statusDidlogicComRiskChecksApiSchema)),
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

  export class NumbersRiskChecksIndexError extends ApiError {
    declare readonly payload:
      | Declared<"apiV2NumbersRiskChecks401Error1", ApiV2NumbersRiskChecks401Error1>
      | Declared<"apiV2NumbersRiskChecks403Error1", ApiV2NumbersRiskChecks403Error1>
      | Undeclared;

    static readonly errors: ErrorDecoders<NumbersRiskChecksIndexError> = [
      {
        on: 401,
        kind: "apiV2NumbersRiskChecks401Error1",
        decode: { kind: "json", schema: apiV2NumbersRiskChecks401Error1Schema },
      },
      {
        on: 403,
        kind: "apiV2NumbersRiskChecks403Error1",
        decode: { kind: "json", schema: apiV2NumbersRiskChecks403Error1Schema },
      },
    ];
  }

  export type NumbersRiskChecksLogsRequest = {
    /** Filter logs by log IDs (comma-separated) */
    ids?: string;
    /** Task IDs (comma-separated) from numbers_risk_checks_create, numbers_risk_checks_index */
    taskIds?: number;
    /** Filter logs by specific phone numbers (comma-separated) */
    number?: string;
    /** Filter by status */
    status?: StatusDidlogicComRiskChecksApi;
    /** Filter logs by risk level */
    riskLevel?: RiskLevel;
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

  export const numbersRiskChecksLogsRequestSchema: Schema<NumbersRiskChecksLogsRequest> = s.lazySchema(() =>
    s.object<NumbersRiskChecksLogsRequest>({
      ids: s.optional(s.string()),
      taskIds: s.optional(s.int()),
      number: s.optional(s.string()),
      status: s.optional(s.lazy(() => statusDidlogicComRiskChecksApiSchema)),
      riskLevel: s.optional(s.lazy(() => riskLevelSchema)),
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

  export class NumbersRiskChecksLogsError extends ApiError {
    declare readonly payload:
      | Declared<"apiV2NumbersRiskChecksLogs401Error1", ApiV2NumbersRiskChecksLogs401Error1>
      | Declared<"apiV2NumbersRiskChecksLogs403Error1", ApiV2NumbersRiskChecksLogs403Error1>
      | Undeclared;

    static readonly errors: ErrorDecoders<NumbersRiskChecksLogsError> = [
      {
        on: 401,
        kind: "apiV2NumbersRiskChecksLogs401Error1",
        decode: { kind: "json", schema: apiV2NumbersRiskChecksLogs401Error1Schema },
      },
      {
        on: 403,
        kind: "apiV2NumbersRiskChecksLogs403Error1",
        decode: { kind: "json", schema: apiV2NumbersRiskChecksLogs403Error1Schema },
      },
    ];
  }
}
