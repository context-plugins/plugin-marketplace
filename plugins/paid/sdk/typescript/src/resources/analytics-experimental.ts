import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { noneAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import {
  analyticsQueryRequestSchema,
  type AnalyticsQueryRequest,
} from "../models/analytics-query-request.js";
import {
  analyticsQueryResponseSchema,
  type AnalyticsQueryResponse,
} from "../models/analytics-query-response.js";
import {
  analyticsSchemaResponseSchema,
  type AnalyticsSchemaResponse,
} from "../models/analytics-schema-response.js";
import { errorResponseSchema, type ErrorResponse } from "../models/error-response.js";
import {
  signalsMetadataResponseSchema,
  type SignalsMetadataResponse,
} from "../models/signals-metadata-response.js";
import type { Servers } from "../servers.js";

export class AnalyticsExperimental {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;

  constructor(rawClient: RawClient, servers: Servers) {
    this.#rawClient = rawClient;
    this.#servers = servers;
  }

  /**
   * Execute a SQL query against your analytics data (experimental)
   *
   * @remarks
   * ⚠️ **Experimental** — this endpoint may change or be removed without notice and is not subject
   * to v2 backwards-compatibility guarantees. Do not build production-critical integrations against
   * it yet.
   *
   * Runs a single ClickHouse SELECT (or WITH … SELECT) against your organization's analytics views.
   * Before writing a query, call `getAnalyticsSchema` (GET /schema) for the available views and
   * columns, and `getSignalsMetadata` (GET /signals/metadata) for the JSON paths inside
   * `fact_signal.data`. Results are automatically scoped to your organization — no org filter is
   * needed or possible. Only SELECT/WITH statements are accepted.
   *
   * Conventions: monetary amounts are minor units (cents — divide by 100 for the major unit); most
   * are integers, but `fact_cost.cost_amount` is fractional cents (Decimal) since a single AI call
   * usually costs less than a cent; 64-bit integers (counts, ids, amounts) are returned as JSON
   * strings to preserve precision, so parse them client-side. Query signal payloads via JSON paths,
   * e.g. `SELECT data.country::String AS country, count() FROM fact_signal GROUP BY country`.
   *
   * Limits: 30 seconds of execution time and 10,000 result rows (truncation is flagged via
   * `meta.truncated`). Prefer aggregates and a `created_at` date filter on large tables — this
   * endpoint is for interactive analytics, not bulk export.
   *
   * @returns 200
   *
   * @throws {@link AnalyticsExperimental.ExecuteAnalyticsQueryError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link PaidError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  executeAnalyticsQuery(
    request: AnalyticsExperimental.ExecuteAnalyticsQueryRequest,
    options?: RequestOptions,
  ): ApiPromise<AnalyticsQueryResponse, AnalyticsExperimental.ExecuteAnalyticsQueryError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.defaultReferenceAnalyticsExperimentalApi("/experimental/analytics/query"),
        auth: noneAuth,
        pathParams: [],
        query: [],
        headers: [
          { name: "Authorization", value: request.authorization, schema: s.string() },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => analyticsQueryRequestSchema)),
        },
      },
      {
        success: { kind: "json", schema: analyticsQueryResponseSchema },
        errorFactory: AnalyticsExperimental.ExecuteAnalyticsQueryError,
      },
      options,
    );
  }

  /**
   * List queryable analytics views, columns, and types (experimental)
   *
   * @remarks
   * ⚠️ **Experimental** — this endpoint may change or be removed without notice and is not subject
   * to v2 backwards-compatibility guarantees. Do not build production-critical integrations against
   * it yet.
   *
   * Returns the analytics views available to POST /query, with column names, ClickHouse types, and
   * descriptions. Dimensions (`dim_*`) describe entities; facts (`fact_*`) are event/transaction
   * tables that join to dimensions via the `*_id` columns described in each comment.
   *
   * @returns 200
   *
   * @throws {@link AnalyticsExperimental.GetAnalyticsSchemaError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link PaidError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getAnalyticsSchema(
    request: AnalyticsExperimental.GetAnalyticsSchemaRequest,
    options?: RequestOptions,
  ): ApiPromise<AnalyticsSchemaResponse, AnalyticsExperimental.GetAnalyticsSchemaError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.defaultReferenceAnalyticsExperimentalApi("/experimental/analytics/schema"),
        auth: noneAuth,
        pathParams: [],
        query: [],
        headers: [{ name: "Authorization", value: request.authorization, schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: analyticsSchemaResponseSchema },
        errorFactory: AnalyticsExperimental.GetAnalyticsSchemaError,
      },
      options,
    );
  }

  /**
   * Discover metadata keys present in your signals (experimental)
   *
   * @remarks
   * ⚠️ **Experimental** — this endpoint may change or be removed without notice and is not subject
   * to v2 backwards-compatibility guarantees. Do not build production-critical integrations against
   * it yet.
   *
   * Lists the JSON paths (and their observed types) present in the `data` payload of your signals
   * within a time window (default: last 30 days), grouped by signal name. Use the returned paths in
   * queries against `fact_signal`, e.g. `WHERE data.::String = '...'`.
   *
   * @returns 200
   *
   * @throws {@link AnalyticsExperimental.GetSignalsMetadataError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link PaidError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getSignalsMetadata(
    request: AnalyticsExperimental.GetSignalsMetadataRequest,
    options?: RequestOptions,
  ): ApiPromise<SignalsMetadataResponse, AnalyticsExperimental.GetSignalsMetadataError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.defaultReferenceAnalyticsExperimentalApi(
          "/experimental/analytics/signals/metadata",
        ),
        auth: noneAuth,
        pathParams: [],
        query: [
          { name: "signalName", value: request.signalName, schema: s.optional(s.string()) },
          { name: "fromDate", value: request.fromDate, schema: s.optional(s.dateTime()) },
          { name: "toDate", value: request.toDate, schema: s.optional(s.dateTime()) },
        ],
        headers: [{ name: "Authorization", value: request.authorization, schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: signalsMetadataResponseSchema },
        errorFactory: AnalyticsExperimental.GetSignalsMetadataError,
      },
      options,
    );
  }
}

export namespace AnalyticsExperimental {
  export type ExecuteAnalyticsQueryRequest = {
    /** API Key authentication using Bearer token */
    authorization: string;
    /** Body */
    body?: AnalyticsQueryRequest;
  };

  export class ExecuteAnalyticsQueryError extends ApiError {
    declare readonly payload:
      | Declared<"errorResponse", ErrorResponse>
      | Declared<"errorResponse2", ErrorResponse>
      | Declared<"errorResponse3", ErrorResponse>
      | Declared<"errorResponse4", ErrorResponse>
      | Declared<"errorResponse5", ErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<ExecuteAnalyticsQueryError> = [
      { on: 400, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 403, kind: "errorResponse2", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 408, kind: "errorResponse3", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 429, kind: "errorResponse4", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 500, kind: "errorResponse5", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export type GetAnalyticsSchemaRequest = {
    /** API Key authentication using Bearer token */
    authorization: string;
  };

  export class GetAnalyticsSchemaError extends ApiError {
    declare readonly payload: Declared<"errorResponse", ErrorResponse> | Undeclared;

    static readonly errors: ErrorDecoders<GetAnalyticsSchemaError> = [
      { on: 500, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export type GetSignalsMetadataRequest = {
    /** Restrict discovery to a single signal name. */
    signalName?: string;
    /** Start of the discovery window. Defaults to 30 days ago. */
    fromDate?: Date;
    /** End of the discovery window. Defaults to now. */
    toDate?: Date;
    /** API Key authentication using Bearer token */
    authorization: string;
  };

  export class GetSignalsMetadataError extends ApiError {
    declare readonly payload:
      | Declared<"errorResponse", ErrorResponse>
      | Declared<"errorResponse2", ErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetSignalsMetadataError> = [
      { on: 400, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 500, kind: "errorResponse2", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }
}
