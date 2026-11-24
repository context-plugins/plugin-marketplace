import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { allAuth, anyAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  analyticsV1ReportsActionsRunRequestInternalSchema,
  type AnalyticsV1ReportsActionsRunRequest,
} from "../models/analytics-v1-reports-actions-run-request.js";
import {
  analyticsV1ReportsOperationsResultsResponseInternalSchema,
  type AnalyticsV1ReportsOperationsResultsResponse,
} from "../models/analytics-v1-reports-operations-results-response.js";
import {
  analyticsV1ReportsQueryRequestInternalSchema,
  type AnalyticsV1ReportsQueryRequest,
} from "../models/analytics-v1-reports-query-request.js";
import {
  analyticsV1ReportsRequestInternalSchema,
  type AnalyticsV1ReportsRequest,
} from "../models/analytics-v1-reports-request.js";
import {
  asyncOperationPollResponseSchema,
  type AsyncOperationPollResponse,
} from "../models/async-operation-poll-response.js";
import {
  asyncOperationResponseSchema,
  type AsyncOperationResponse,
} from "../models/async-operation-response.js";
import { errorSchema, type Error } from "../models/error.js";
import { externalReportInternalSchema, type ExternalReport } from "../models/external-report.js";
import {
  externalUpdateReportInternalSchema,
  type ExternalUpdateReport,
} from "../models/external-update-report.js";
import { fileOutputSchema, type FileOutput } from "../models/file-output.js";
import { getReportResponseSchema, type GetReportResponse } from "../models/get-report-response.js";
import { reportListSchema, type ReportList } from "../models/report-list.js";
import { runReportResultSchema, type RunReportResult } from "../models/run-report-result.js";
import type { Servers } from "../servers.js";

/**
 * Manage Cloud Analytics reports and get reports data in JSON format.
 */
export class Reports {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Run a report asynchronously
   *
   * @remarks
   * Submits an async report execution job using an inline configuration. Returns 202 immediately
   * with a Location header pointing to the operation status endpoint. Requires the Idempotency-Key
   * header to ensure at-most-once submission. Duplicate requests with the same config for the same
   * customer return the existing in-flight operation. Use ?dryRun=true to validate the config
   * without creating an operation.
   *
   * @returns Accepted — async operation created. The Location header contains the URL to poll for
   * status.
   *
   * @throws {@link Reports.AsyncRunInlineError} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link DoiTError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  asyncRunInline(
    request: Reports.AsyncRunInlineRequest,
    options?: RequestOptions,
  ): ApiPromise<AsyncOperationResponse, Reports.AsyncRunInlineError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/analytics/v1/reports/actions/run"),
        auth: anyAuth(this.#auth.apiKey, allAuth(this.#auth.tenantId, this.#auth.apiKey)),
        pathParams: [],
        query: [{ name: "dryRun", value: request.dryRun, schema: s.optional(s.boolean()) }],
        headers: [{ name: "Idempotency-Key", value: request.idempotencyKey, schema: s.string() }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => analyticsV1ReportsActionsRunRequestInternalSchema)),
        },
      },
      {
        success: { kind: "json", schema: asyncOperationResponseSchema },
        errorFactory: Reports.AsyncRunInlineError,
      },
      options,
    );
  }

  /**
   * Run a saved report asynchronously
   *
   * @remarks
   * Submits an async execution job for a saved report identified by ID. Returns 202 immediately
   * with a Location header pointing to the operation status endpoint. Requires the Idempotency-Key
   * header. Use ?dryRun=true to validate without creating an operation.
   *
   * @returns Accepted — async operation created. The Location header contains the URL to poll for
   * status.
   *
   * @throws {@link Reports.AsyncRunReportByIdError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link DoiTError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  asyncRunReportById(
    request: Reports.AsyncRunReportByIdRequest,
    options?: RequestOptions,
  ): ApiPromise<AsyncOperationResponse, Reports.AsyncRunReportByIdError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/analytics/v1/reports/{id}/actions/run"),
        auth: anyAuth(this.#auth.apiKey, allAuth(this.#auth.tenantId, this.#auth.apiKey)),
        pathParams: [{ name: "id", value: request.id, schema: s.string() }],
        query: [
          { name: "dryRun", value: request.dryRun, schema: s.optional(s.boolean()) },
          { name: "timeRange", value: request.timeRange, schema: s.optional(s.string()) },
          { name: "startDate", value: request.startDate, schema: s.optional(s.dateOnly()) },
          { name: "endDate", value: request.endDate, schema: s.optional(s.dateOnly()) },
        ],
        headers: [{ name: "Idempotency-Key", value: request.idempotencyKey, schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: asyncOperationResponseSchema },
        errorFactory: Reports.AsyncRunReportByIdError,
      },
      options,
    );
  }

  /**
   * Cancel an async report run operation
   *
   * @remarks
   * Cancels a pending or running async report operation. Already-terminal operations (succeeded,
   * failed, canceled) are returned as-is without any state change (idempotent). Returns 404 if the
   * operationId does not exist or belongs to a different tenant. Use ?dryRun=true to validate the
   * request without modifying any state.
   *
   * @returns OK — operation state returned. On dry-run, the X-Dry-Run response header is set to
   * "true" and status is "dry_run".
   *
   * @throws {@link Reports.CancelAsyncOperationError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link DoiTError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  cancelAsyncOperation(
    request: Reports.CancelAsyncOperationRequest,
    options?: RequestOptions,
  ): ApiPromise<AsyncOperationResponse, Reports.CancelAsyncOperationError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/analytics/v1/reports/operations/{operationId}/actions/cancel"),
        auth: anyAuth(this.#auth.apiKey, allAuth(this.#auth.tenantId, this.#auth.apiKey)),
        pathParams: [{ name: "operationId", value: request.operationId, schema: s.string() }],
        query: [{ name: "dryRun", value: request.dryRun, schema: s.optional(s.boolean()) }],
        headers: [{ name: "Idempotency-Key", value: request.idempotencyKey, schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: asyncOperationResponseSchema },
        errorFactory: Reports.CancelAsyncOperationError,
      },
      options,
    );
  }

  /**
   * Create a report
   *
   * @remarks
   * Creates a new report.
   *
   * @returns Created - The request succeeded.
   *
   * @throws {@link Reports.CreateReportError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link DoiTError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  createReport(
    request: Reports.CreateReportRequest = {},
    options?: RequestOptions,
  ): ApiPromise<ExternalReport, Reports.CreateReportError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/analytics/v1/reports"),
        auth: anyAuth(this.#auth.apiKey, allAuth(this.#auth.tenantId, this.#auth.apiKey)),
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => analyticsV1ReportsRequestInternalSchema)),
        },
      },
      {
        success: { kind: "json", schema: externalReportInternalSchema },
        errorFactory: Reports.CreateReportError,
      },
      options,
    );
  }

  /**
   * Delete a report
   *
   * @remarks
   * Deletes the specified Cloud Analytics report.
   *
   * @returns OK - Report deleted.
   *
   * @throws {@link Reports.DeleteReportError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link DoiTError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  deleteReport(
    request: Reports.DeleteReportRequest,
    options?: RequestOptions,
  ): ApiPromise<Record<string, unknown>, Reports.DeleteReportError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default("/analytics/v1/reports/{id}"),
        auth: anyAuth(this.#auth.apiKey, allAuth(this.#auth.tenantId, this.#auth.apiKey)),
        pathParams: [{ name: "id", value: request.id, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.record(s.string(), s.unknown()) },
        errorFactory: Reports.DeleteReportError,
      },
      options,
    );
  }

  /**
   * Poll an async report run operation
   *
   * @remarks
   * Returns the current status of an async report operation. Non-terminal operations (pending,
   * running) include a Retry-After header suggesting when to poll again. This endpoint does not
   * return result data — once status is "succeeded", fetch the result from the operation's results
   * endpoint. When status is "failed", the error field contains an RFC 9457-shaped error. Returns
   * 404 if the operationId does not exist, belongs to a different tenant, or has expired.
   *
   * @returns OK — current operation state. The Retry-After response header is present only on
   * pending/running responses.
   *
   * @throws {@link Reports.GetAsyncOperationError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link DoiTError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getAsyncOperation(
    request: Reports.GetAsyncOperationRequest,
    options?: RequestOptions,
  ): ApiPromise<AsyncOperationPollResponse, Reports.GetAsyncOperationError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/analytics/v1/reports/operations/{operationId}"),
        auth: anyAuth(this.#auth.apiKey, allAuth(this.#auth.tenantId, this.#auth.apiKey)),
        pathParams: [{ name: "operationId", value: request.operationId, schema: s.string() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: asyncOperationPollResponseSchema },
        errorFactory: Reports.GetAsyncOperationError,
      },
      options,
    );
  }

  /**
   * Get results of an async report run operation
   *
   * @remarks
   * Returns the result of a succeeded async report operation, including report metadata (id,
   * reportName, owner, type, createTime, updateTime, urlUI) when the operation was started against
   * a saved report — the same shape as the sync GetReportResponse, instead of requiring a second
   * call to GET /analytics/v1/reports/{id}/config for it. Returns 404 if the operationId does not
   * exist, has expired, or belongs to a different tenant. Returns 425 Too Early if the operation
   * has not yet reached a terminal state — poll the operation status endpoint, which returns its
   * own Retry-After guidance, until it succeeds. Returns 422 if the operation terminated as failed
   * or canceled. The poll status endpoint response does not include result data inline — this is
   * the only endpoint that returns it.
   *
   * @returns OK — the operation succeeded; body is the report result, plus report metadata when the
   * operation was started against a saved report, plus a fileOutput URL when one was requested.
   *
   * @throws {@link Reports.GetAsyncOperationResultsError} when the API answers with an error status
   * — narrow on `err.payload.kind`
   *
   * @throws {@link DoiTError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getAsyncOperationResults(
    request: Reports.GetAsyncOperationResultsRequest,
    options?: RequestOptions,
  ): ApiPromise<AnalyticsV1ReportsOperationsResultsResponse, Reports.GetAsyncOperationResultsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/analytics/v1/reports/operations/{operationId}/results"),
        auth: anyAuth(this.#auth.apiKey, allAuth(this.#auth.tenantId, this.#auth.apiKey)),
        pathParams: [{ name: "operationId", value: request.operationId, schema: s.string() }],
        query: [
          {
            name: "fileOutput",
            value: request.fileOutput,
            schema: s.optional(s.lazy(() => fileOutputSchema)),
          },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: analyticsV1ReportsOperationsResultsResponseInternalSchema },
        errorFactory: Reports.GetAsyncOperationResultsError,
      },
      options,
    );
  }

  /**
   * Get report results
   *
   * @remarks
   * Returns the results of the specified report.
   *
   * @returns OK - The request succeeded.
   *
   * @throws {@link Reports.GetReportError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link DoiTError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getReport(
    request: Reports.GetReportRequest,
    options?: RequestOptions,
  ): ApiPromise<GetReportResponse, Reports.GetReportError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/analytics/v1/reports/{id}"),
        auth: anyAuth(this.#auth.apiKey, allAuth(this.#auth.tenantId, this.#auth.apiKey)),
        pathParams: [{ name: "id", value: request.id, schema: s.string() }],
        query: [
          { name: "timeRange", value: request.timeRange, schema: s.optional(s.string()) },
          { name: "startDate", value: request.startDate, schema: s.optional(s.dateOnly()) },
          { name: "endDate", value: request.endDate, schema: s.optional(s.dateOnly()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: getReportResponseSchema },
        errorFactory: Reports.GetReportError,
      },
      options,
    );
  }

  /**
   * Get report config
   *
   * @remarks
   * Returns the configuration of the specified Cloud Analytics report.
   *
   * @returns OK - Report configuration returned.
   *
   * @throws {@link Reports.GetReportConfigError} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link DoiTError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getReportConfig(
    request: Reports.GetReportConfigRequest,
    options?: RequestOptions,
  ): ApiPromise<ExternalReport, Reports.GetReportConfigError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/analytics/v1/reports/{id}/config"),
        auth: anyAuth(this.#auth.apiKey, allAuth(this.#auth.tenantId, this.#auth.apiKey)),
        pathParams: [{ name: "id", value: request.id, schema: s.string() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: externalReportInternalSchema },
        errorFactory: Reports.GetReportConfigError,
      },
      options,
    );
  }

  /**
   * List reports
   *
   * @remarks
   * Returns a list of all Cloud Analytics reports that your account has access to. Reports are
   * returned in reverse chronological order by default.
   *
   * @returns OK - The request succeeded.
   *
   * @throws {@link Reports.ListReportsError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link DoiTError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listReports(
    request: Reports.ListReportsRequest = {},
    options?: RequestOptions,
  ): ApiPromise<ReportList, Reports.ListReportsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/analytics/v1/reports"),
        auth: anyAuth(this.#auth.apiKey, allAuth(this.#auth.tenantId, this.#auth.apiKey)),
        pathParams: [],
        query: [
          { name: "maxResults", value: request.maxResults, schema: s.defaulted(s.int(), 50) },
          { name: "pageToken", value: request.pageToken, schema: s.optional(s.string()) },
          { name: "filter", value: request.filter, schema: s.optional(s.string()) },
          { name: "nameContains", value: request.nameContains, schema: s.optional(s.string()) },
          { name: "minCreationTime", value: request.minCreationTime, schema: s.optional(s.string()) },
          { name: "maxCreationTime", value: request.maxCreationTime, schema: s.optional(s.string()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: reportListSchema },
        errorFactory: Reports.ListReportsError,
      },
      options,
    );
  }

  /**
   * Run a query
   *
   * @remarks
   * Runs a report query with the specified configuration without persisting it. Fields that are not
   * populated will use their default values if needed.
   *
   * @returns OK - The request succeeded.
   *
   * @throws {@link Reports.QueryError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link DoiTError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  query(
    request: Reports.QueryRequest = {},
    options?: RequestOptions,
  ): ApiPromise<RunReportResult, Reports.QueryError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/analytics/v1/reports/query"),
        auth: anyAuth(this.#auth.apiKey, allAuth(this.#auth.tenantId, this.#auth.apiKey)),
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => analyticsV1ReportsQueryRequestInternalSchema)),
        },
      },
      {
        success: { kind: "json", schema: runReportResultSchema },
        errorFactory: Reports.QueryError,
      },
      options,
    );
  }

  /**
   * Update a report
   *
   * @remarks
   * Updates a report with the specified configuration.
   *
   * Only specified fields will be updated.
   *
   * @returns OK - Report updated.
   *
   * @throws {@link Reports.UpdateReportError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link DoiTError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  updateReport(
    request: Reports.UpdateReportRequest,
    options?: RequestOptions,
  ): ApiPromise<ExternalReport, Reports.UpdateReportError> {
    return this.#rawClient.execute(
      {
        method: "PATCH",
        urlTemplate: this.#servers.default("/analytics/v1/reports/{id}"),
        auth: anyAuth(this.#auth.apiKey, allAuth(this.#auth.tenantId, this.#auth.apiKey)),
        pathParams: [{ name: "id", value: request.id, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => externalUpdateReportInternalSchema)),
        },
      },
      {
        success: { kind: "json", schema: externalReportInternalSchema },
        errorFactory: Reports.UpdateReportError,
      },
      options,
    );
  }
}

export namespace Reports {
  export type AsyncRunInlineRequest = {
    /**
     * If true, validates the request and returns 200 without creating an operation or submitting a
     * job. The response body will have status "dry_run" and no operationId.
     */
    dryRun?: boolean;
    /**
     * Unique key for this submission. Required on every request. Deduplication is based on config
     * content, not this key.
     */
    idempotencyKey: string;
    body?: AnalyticsV1ReportsActionsRunRequest;
  };

  export class AsyncRunInlineError extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"error3", Error>
      | Declared<"error4", Error>
      | Declared<"error5", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<AsyncRunInlineError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 403, kind: "error3", decode: { kind: "json", schema: errorSchema } },
      { on: 404, kind: "error4", decode: { kind: "json", schema: errorSchema } },
      { on: 500, kind: "error5", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type AsyncRunReportByIdRequest = {
    /** The saved report ID. */
    id: string;
    /**
     * If true, validates the request and returns 200 without creating an operation or submitting a
     * job.
     */
    dryRun?: boolean;
    /**
     * An optional parameter to override the report time settings. Value should be represented in
     * the format P[n]Y[n]M[n]D[n]. In the representations, the [n] is replaced by the value for
     * each of the date and time elements that follow the [n]. Cannot be combined with
     * startDate/endDate.
     */
    timeRange?: string;
    /**
     * An optional parameter to override the report time settings. Must be provided together with
     * endDate. Format: yyyy-mm-dd
     */
    startDate?: string;
    /**
     * An optional parameter to override the report time settings. Must be provided together with
     * startDate. Format: yyyy-mm-dd
     */
    endDate?: string;
    /** Unique key for this submission. Required on every request. */
    idempotencyKey: string;
  };

  export const asyncRunReportByIdRequestSchema: Schema<AsyncRunReportByIdRequest> = s.lazySchema(() =>
    s.object<AsyncRunReportByIdRequest>({
      id: s.string(),
      dryRun: s.optional(s.boolean()),
      timeRange: s.optional(s.string().check(s.pattern("^P(\\d+Y)?(\\d+M)?(\\d+D)?$"))),
      startDate: s.optional(s.dateOnly()),
      endDate: s.optional(s.dateOnly()),
      idempotencyKey: s.string(),
    }),
  );

  export class AsyncRunReportByIdError extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"error3", Error>
      | Declared<"error4", Error>
      | Declared<"error5", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<AsyncRunReportByIdError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 403, kind: "error3", decode: { kind: "json", schema: errorSchema } },
      { on: 404, kind: "error4", decode: { kind: "json", schema: errorSchema } },
      { on: 500, kind: "error5", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type CancelAsyncOperationRequest = {
    /** The unique ID of the async operation to cancel. */
    operationId: string;
    /**
     * If true, validates the request and returns 200 without modifying any state. The response body
     * will have status "dry_run" and the X-Dry-Run response header will be set to "true".
     */
    dryRun?: boolean;
    /** Unique key for this submission. Required on every request. */
    idempotencyKey: string;
  };

  export class CancelAsyncOperationError extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"error3", Error>
      | Declared<"error4", Error>
      | Declared<"error5", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<CancelAsyncOperationError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 403, kind: "error3", decode: { kind: "json", schema: errorSchema } },
      { on: 404, kind: "error4", decode: { kind: "json", schema: errorSchema } },
      { on: 500, kind: "error5", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type CreateReportRequest = {
    body?: AnalyticsV1ReportsRequest;
  };

  export class CreateReportError extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"error3", Error>
      | Declared<"error4", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<CreateReportError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 403, kind: "error3", decode: { kind: "json", schema: errorSchema } },
      { on: 500, kind: "error4", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type DeleteReportRequest = {
    /** Report ID. See [Resource IDs](https://developer.doit.com/docs/resource-ids). */
    id: string;
  };

  export class DeleteReportError extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"error3", Error>
      | Declared<"error4", Error>
      | Declared<"error5", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<DeleteReportError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 403, kind: "error3", decode: { kind: "json", schema: errorSchema } },
      { on: 404, kind: "error4", decode: { kind: "json", schema: errorSchema } },
      { on: 500, kind: "error5", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type GetAsyncOperationRequest = {
    /** The unique ID of the async operation to poll. */
    operationId: string;
  };

  export class GetAsyncOperationError extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"error3", Error>
      | Declared<"error4", Error>
      | Declared<"error5", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetAsyncOperationError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 403, kind: "error3", decode: { kind: "json", schema: errorSchema } },
      { on: 404, kind: "error4", decode: { kind: "json", schema: errorSchema } },
      { on: 500, kind: "error5", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type GetAsyncOperationResultsRequest = {
    /** The unique ID of the async operation. */
    operationId: string;
    /**
     * Additionally render the operation's result as a file and return a signed URL to it in
     * `fileOutput`. The file is generated from the result the operation already produced, not by
     * re-running the query, and is stored beside that result for the operation's lifetime, so a
     * repeat request for the same operation and format returns a fresh signed URL to the same file
     * rather than rendering it again. Omit the parameter and the response is unchanged. Returns 422
     * when the operation predates file output support and has no stored render input; a transient
     * rendering failure instead returns 200 with `result` and no `fileOutput`, so retry the request
     * for the file. `pdf` is the chart and data table as a document, `png` the chart image, and
     * `csv` every row of the result as raw data, one line per row with the report's dimensions and
     * metrics, never truncated.
     */
    fileOutput?: FileOutput;
  };

  export class GetAsyncOperationResultsError extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"error3", Error>
      | Declared<"error4", Error>
      | Declared<"error5", Error>
      | Declared<"error6", Error>
      | Declared<"error7", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetAsyncOperationResultsError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 403, kind: "error3", decode: { kind: "json", schema: errorSchema } },
      { on: 404, kind: "error4", decode: { kind: "json", schema: errorSchema } },
      { on: 422, kind: "error5", decode: { kind: "json", schema: errorSchema } },
      { on: 425, kind: "error6", decode: { kind: "json", schema: errorSchema } },
      { on: 500, kind: "error7", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type GetReportRequest = {
    /** Report ID. See [Resource IDs](https://developer.doit.com/docs/resource-ids). */
    id: string;
    /**
     * An optional parameter to override the report time settings. Value should be represented in
     * the format P[n]Y[n]M[n]D[n]. In the representations, the [n] is replaced by the value for
     * each of the date and time elements that follow the [n].
     */
    timeRange?: string;
    /**
     * An optional parameter to override the report time settings. Must be provided together with
     * endDate. Format: yyyy-mm-dd
     */
    startDate?: string;
    /**
     * An optional parameter to override the report time settings. Must be provided together with
     * startDate. Format: yyyy-mm-dd
     */
    endDate?: string;
  };

  export const getReportRequestSchema: Schema<GetReportRequest> = s.lazySchema(() =>
    s.object<GetReportRequest>({
      id: s.string(),
      timeRange: s.optional(s.string().check(s.pattern("^P(\\d+Y)?(\\d+M)?(\\d+D)?$"))),
      startDate: s.optional(s.dateOnly()),
      endDate: s.optional(s.dateOnly()),
    }),
  );

  export class GetReportError extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"error3", Error>
      | Declared<"error4", Error>
      | Declared<"error5", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetReportError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 403, kind: "error3", decode: { kind: "json", schema: errorSchema } },
      { on: 404, kind: "error4", decode: { kind: "json", schema: errorSchema } },
      { on: 429, kind: "error5", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type GetReportConfigRequest = {
    /** Report ID. See [Resource IDs](https://developer.doit.com/docs/resource-ids). */
    id: string;
  };

  export class GetReportConfigError extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"error3", Error>
      | Declared<"error4", Error>
      | Declared<"error5", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetReportConfigError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 403, kind: "error3", decode: { kind: "json", schema: errorSchema } },
      { on: 404, kind: "error4", decode: { kind: "json", schema: errorSchema } },
      { on: 500, kind: "error5", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type ListReportsRequest = {
    /**
     * The maximum number of results to return in a single page. Use the page tokens to iterate
     * through the entire collection.
     *
     * @default 50
     */
    maxResults?: number;
    /** Page token, returned by a previous call, to request the next page of results */
    pageToken?: string;
    /**
     * An expression for filtering the results. The syntax is `key:[<value>]`. Multiple filters can
     * be connected using a pipe |. See [Filters](https://developer.doit.com/docs/filters). Possible
     * filter keys: **reportName**, **owner**, **type**, **updateTime**, **folderId**
     */
    filter?: string;
    /**
     * Case-insensitive substring match against the resource name. Combined with the "filter"
     * parameter using AND semantics.
     */
    nameContains?: string;
    /**
     * Min value for reports creation time, in milliseconds since the POSIX epoch. If set, only
     * reports created after or at this timestamp are returned.
     */
    minCreationTime?: string;
    /**
     * Max value for reports creation time, in milliseconds since the POSIX epoch. If set, only
     * reports created before or at this timestamp are returned.
     */
    maxCreationTime?: string;
  };

  export class ListReportsError extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"error3", Error>
      | Declared<"error4", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<ListReportsError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 403, kind: "error3", decode: { kind: "json", schema: errorSchema } },
      { on: 404, kind: "error4", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type QueryRequest = {
    body?: AnalyticsV1ReportsQueryRequest;
  };

  export class QueryError extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"error3", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<QueryError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 500, kind: "error3", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type UpdateReportRequest = {
    /** Report ID. See [Resource IDs](https://developer.doit.com/docs/resource-ids). */
    id: string;
    body?: ExternalUpdateReport;
  };

  export class UpdateReportError extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"error3", Error>
      | Declared<"error4", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<UpdateReportError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 403, kind: "error3", decode: { kind: "json", schema: errorSchema } },
      { on: 500, kind: "error4", decode: { kind: "json", schema: errorSchema } },
    ];
  }
}
