import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { noneAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { envLogsResponseSchema, type EnvLogsResponse } from "../models/env-logs-response.js";
import { errorResponseSchema, type ErrorResponse } from "../models/error-response.js";
import { httpValidationErrorSchema, type HttpValidationError } from "../models/http-validation-error.js";
import { publishTraceResponseSchema, type PublishTraceResponse } from "../models/publish-trace-response.js";
import { relatedKind1Schema, type RelatedKind1 } from "../models/related-kind1.js";
import { relatedOrder1Schema, type RelatedOrder1 } from "../models/related-order1.js";
import { statusResponseSchema, type StatusResponse } from "../models/status-response.js";
import {
  traceAnalysisContextResponseSchema,
  type TraceAnalysisContextResponse,
} from "../models/trace-analysis-context-response.js";
import {
  traceAnalysisPromptResponseSchema,
  type TraceAnalysisPromptResponse,
} from "../models/trace-analysis-prompt-response.js";
import {
  traceBatchValidateRequestSchema,
  type TraceBatchValidateRequest,
} from "../models/trace-batch-validate-request.js";
import {
  traceBatchValidateResponseSchema,
  type TraceBatchValidateResponse,
} from "../models/trace-batch-validate-response.js";
import { traceDetailResponseSchema, type TraceDetailResponse } from "../models/trace-detail-response.js";
import { traceEventsResponseSchema, type TraceEventsResponse } from "../models/trace-events-response.js";
import { traceInfoResponseSchema, type TraceInfoResponse } from "../models/trace-info-response.js";
import { traceLogsResponseSchema, type TraceLogsResponse } from "../models/trace-logs-response.js";
import { traceThumbnailSchema, type TraceThumbnail } from "../models/trace-thumbnail.js";
import { traceUpdateRequestSchema, type TraceUpdateRequest } from "../models/trace-update-request.js";
import { traceUsageBreakdownSchema, type TraceUsageBreakdown } from "../models/trace-usage-breakdown.js";
import { status21Schema, type Status21 } from "../models/unions/status21.js";
import type { Servers } from "../servers.js";

export class Traces {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;

  constructor(rawClient: RawClient, servers: Servers) {
    this.#rawClient = rawClient;
    this.#servers = servers;
  }

  /**
   * Batch Validate Traces
   *
   * @remarks
   * Mark a batch of traces as valid or invalid for leaderboard calculations.
   *
   * @returns Successful Response
   *
   * @throws {@link Traces.BatchValidateTracesV2TraceBatchValidatePostError} when the API answers
   * with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link HudError} when no usable response was produced: a connection failure, a timeout,
   * a body that would not decode, a value that would not encode, or a credential that could not be
   * obtained
   */
  batchValidateTracesV2TraceBatchValidatePost(
    request: Traces.BatchValidateTracesV2TraceBatchValidatePostRequest,
    options?: RequestOptions,
  ): ApiPromise<TraceBatchValidateResponse, Traces.BatchValidateTracesV2TraceBatchValidatePostError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/v2/trace/batch-validate"),
        auth: noneAuth,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: traceBatchValidateRequestSchema },
      },
      {
        success: { kind: "json", schema: traceBatchValidateResponseSchema },
        errorFactory: Traces.BatchValidateTracesV2TraceBatchValidatePostError,
      },
      options,
    );
  }

  /**
   * Get Trace Analysis Context
   *
   * @remarks
   * Aggregate context for analysis environments (QA agents).
   *
   * @returns Successful Response
   *
   * @throws {@link Traces.GetTraceAnalysisContextV2TraceTraceIdAnalysisContextGetError} when the
   * API answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link HudError} when no usable response was produced: a connection failure, a timeout,
   * a body that would not decode, a value that would not encode, or a credential that could not be
   * obtained
   */
  getTraceAnalysisContextV2TraceTraceIdAnalysisContextGet(
    request: Traces.GetTraceAnalysisContextV2TraceTraceIdAnalysisContextGetRequest,
    options?: RequestOptions,
  ): ApiPromise<
    TraceAnalysisContextResponse,
    Traces.GetTraceAnalysisContextV2TraceTraceIdAnalysisContextGetError
  > {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v2/trace/{trace_id}/analysis-context"),
        auth: noneAuth,
        pathParams: [{ name: "trace_id", value: request.traceId, schema: s.string() }],
        query: [
          { name: "include_spans", value: request.includeSpans, schema: s.defaulted(s.boolean(), true) },
          { name: "include_env_logs", value: request.includeEnvLogs, schema: s.defaulted(s.boolean(), true) },
          {
            name: "include_worker_logs",
            value: request.includeWorkerLogs,
            schema: s.defaulted(s.boolean(), true),
          },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: traceAnalysisContextResponseSchema },
        errorFactory: Traces.GetTraceAnalysisContextV2TraceTraceIdAnalysisContextGetError,
      },
      options,
    );
  }

  /**
   * Get Trace Analysis Prompt
   *
   * @remarks
   * Size-bounded debugging prompt: error, task, trajectory, and log tails.
   *
   * @returns Successful Response
   *
   * @throws {@link Traces.GetTraceAnalysisPromptV2TraceTraceIdAnalysisPromptGetError} when the API
   * answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link HudError} when no usable response was produced: a connection failure, a timeout,
   * a body that would not decode, a value that would not encode, or a credential that could not be
   * obtained
   */
  getTraceAnalysisPromptV2TraceTraceIdAnalysisPromptGet(
    request: Traces.GetTraceAnalysisPromptV2TraceTraceIdAnalysisPromptGetRequest,
    options?: RequestOptions,
  ): ApiPromise<
    TraceAnalysisPromptResponse,
    Traces.GetTraceAnalysisPromptV2TraceTraceIdAnalysisPromptGetError
  > {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v2/trace/{trace_id}/analysis-prompt"),
        auth: noneAuth,
        pathParams: [{ name: "trace_id", value: request.traceId, schema: s.string() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: traceAnalysisPromptResponseSchema },
        errorFactory: Traces.GetTraceAnalysisPromptV2TraceTraceIdAnalysisPromptGetError,
      },
      options,
    );
  }

  /**
   * Get Trace Env Logs
   *
   * @remarks
   * Environment logs — the customer container's stdout/stderr.
   *
   * Fetched from the daemon's S3 debug bundle.
   *
   * @returns Successful Response
   *
   * @throws {@link Traces.GetTraceEnvLogsV2TraceTraceIdEnvLogsGetError} when the API answers with
   * an error status — narrow on `err.payload.kind`
   *
   * @throws {@link HudError} when no usable response was produced: a connection failure, a timeout,
   * a body that would not decode, a value that would not encode, or a credential that could not be
   * obtained
   */
  getTraceEnvLogsV2TraceTraceIdEnvLogsGet(
    request: Traces.GetTraceEnvLogsV2TraceTraceIdEnvLogsGetRequest,
    options?: RequestOptions,
  ): ApiPromise<EnvLogsResponse, Traces.GetTraceEnvLogsV2TraceTraceIdEnvLogsGetError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v2/trace/{trace_id}/env-logs"),
        auth: noneAuth,
        pathParams: [{ name: "trace_id", value: request.traceId, schema: s.string() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: envLogsResponseSchema },
        errorFactory: Traces.GetTraceEnvLogsV2TraceTraceIdEnvLogsGetError,
      },
      options,
    );
  }

  /**
   * Get Trace Events
   *
   * @remarks
   * Projected, typed view of a trace's telemetry — drives the trace viewer.
   *
   * @returns Successful Response
   *
   * @throws {@link Traces.GetTraceEventsV2TraceTraceIdEventsGetError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link HudError} when no usable response was produced: a connection failure, a timeout,
   * a body that would not decode, a value that would not encode, or a credential that could not be
   * obtained
   */
  getTraceEventsV2TraceTraceIdEventsGet(
    request: Traces.GetTraceEventsV2TraceTraceIdEventsGetRequest,
    options?: RequestOptions,
  ): ApiPromise<TraceEventsResponse, Traces.GetTraceEventsV2TraceTraceIdEventsGetError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v2/trace/{trace_id}/events"),
        auth: noneAuth,
        pathParams: [{ name: "trace_id", value: request.traceId, schema: s.string() }],
        query: [
          { name: "since_seq", value: request.sinceSeq, schema: s.defaulted(s.int(), -1) },
          { name: "limit", value: request.limit, schema: s.defaulted(s.int(), 100) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: traceEventsResponseSchema },
        errorFactory: Traces.GetTraceEventsV2TraceTraceIdEventsGetError,
      },
      options,
    );
  }

  /**
   * Get Trace Info
   *
   * @remarks
   * Get a trace with its task, job, and model context for the trace viewer.
   *
   * @returns Successful Response
   *
   * @throws {@link Traces.GetTraceInfoV2TraceTraceIdInfoGetError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link HudError} when no usable response was produced: a connection failure, a timeout,
   * a body that would not decode, a value that would not encode, or a credential that could not be
   * obtained
   */
  getTraceInfoV2TraceTraceIdInfoGet(
    request: Traces.GetTraceInfoV2TraceTraceIdInfoGetRequest,
    options?: RequestOptions,
  ): ApiPromise<TraceInfoResponse, Traces.GetTraceInfoV2TraceTraceIdInfoGetError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v2/trace/{trace_id}/info"),
        auth: noneAuth,
        pathParams: [{ name: "trace_id", value: request.traceId, schema: s.string() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: traceInfoResponseSchema },
        errorFactory: Traces.GetTraceInfoV2TraceTraceIdInfoGetError,
      },
      options,
    );
  }

  /**
   * Get Trace Logs
   *
   * @remarks
   * Get a trace's captured worker logs.
   *
   * @returns Successful Response
   *
   * @throws {@link Traces.GetTraceLogsV2TraceTraceIdLogsGetError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link HudError} when no usable response was produced: a connection failure, a timeout,
   * a body that would not decode, a value that would not encode, or a credential that could not be
   * obtained
   */
  getTraceLogsV2TraceTraceIdLogsGet(
    request: Traces.GetTraceLogsV2TraceTraceIdLogsGetRequest,
    options?: RequestOptions,
  ): ApiPromise<TraceLogsResponse, Traces.GetTraceLogsV2TraceTraceIdLogsGetError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v2/trace/{trace_id}/logs"),
        auth: noneAuth,
        pathParams: [{ name: "trace_id", value: request.traceId, schema: s.string() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: traceLogsResponseSchema },
        errorFactory: Traces.GetTraceLogsV2TraceTraceIdLogsGetError,
      },
      options,
    );
  }

  /**
   * Get Trace Usage
   *
   * @remarks
   * Get a trace's compute and inference cost breakdown.
   *
   * @returns Successful Response
   *
   * @throws {@link Traces.GetTraceUsageV2TraceTraceIdUsageGetError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link HudError} when no usable response was produced: a connection failure, a timeout,
   * a body that would not decode, a value that would not encode, or a credential that could not be
   * obtained
   */
  getTraceUsageV2TraceTraceIdUsageGet(
    request: Traces.GetTraceUsageV2TraceTraceIdUsageGetRequest,
    options?: RequestOptions,
  ): ApiPromise<TraceUsageBreakdown, Traces.GetTraceUsageV2TraceTraceIdUsageGetError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v2/trace/{trace_id}/usage"),
        auth: noneAuth,
        pathParams: [{ name: "trace_id", value: request.traceId, schema: s.string() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: traceUsageBreakdownSchema },
        errorFactory: Traces.GetTraceUsageV2TraceTraceIdUsageGetError,
      },
      options,
    );
  }

  /**
   * Get Trace
   *
   * @remarks
   * Get a trace by id.
   *
   * @returns Successful Response
   *
   * @throws {@link Traces.GetTraceV2TraceTraceIdGetError} when the API answers with an error status
   * — narrow on `err.payload.kind`
   *
   * @throws {@link HudError} when no usable response was produced: a connection failure, a timeout,
   * a body that would not decode, a value that would not encode, or a credential that could not be
   * obtained
   */
  getTraceV2TraceTraceIdGet(
    request: Traces.GetTraceV2TraceTraceIdGetRequest,
    options?: RequestOptions,
  ): ApiPromise<TraceDetailResponse, Traces.GetTraceV2TraceTraceIdGetError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v2/trace/{trace_id}"),
        auth: noneAuth,
        pathParams: [{ name: "trace_id", value: request.traceId, schema: s.string() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: traceDetailResponseSchema },
        errorFactory: Traces.GetTraceV2TraceTraceIdGetError,
      },
      options,
    );
  }

  /**
   * List Related Traces
   *
   * @remarks
   * Trace thumbnails related to ``trace_id``.
   *
   * @returns Successful Response
   *
   * @throws {@link Traces.ListRelatedTracesV2TraceTraceIdRelatedGetError} when the API answers with
   * an error status — narrow on `err.payload.kind`
   *
   * @throws {@link HudError} when no usable response was produced: a connection failure, a timeout,
   * a body that would not decode, a value that would not encode, or a credential that could not be
   * obtained
   */
  listRelatedTracesV2TraceTraceIdRelatedGet(
    request: Traces.ListRelatedTracesV2TraceTraceIdRelatedGetRequest,
    options?: RequestOptions,
  ): ApiPromise<TraceThumbnail[], Traces.ListRelatedTracesV2TraceTraceIdRelatedGetError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v2/trace/{trace_id}/related"),
        auth: noneAuth,
        pathParams: [{ name: "trace_id", value: request.traceId, schema: s.string() }],
        query: [
          { name: "kind", value: request.kind, schema: relatedKind1Schema },
          { name: "limit", value: request.limit, schema: s.defaulted(s.int(), 50) },
          { name: "scope_to_job", value: request.scopeToJob, schema: s.defaulted(s.boolean(), false) },
          { name: "status", value: request.status, schema: s.optional(s.lazy(() => status21Schema)) },
          { name: "order", value: request.order, schema: s.optional(s.lazy(() => relatedOrder1Schema)) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => traceThumbnailSchema)) },
        errorFactory: Traces.ListRelatedTracesV2TraceTraceIdRelatedGetError,
      },
      options,
    );
  }

  /**
   * Publish Trace
   *
   * @remarks
   * Set ``traces.public=true`` so anyone with the link can view the trace.
   *
   * @returns Successful Response
   *
   * @throws {@link Traces.PublishTraceV2TraceTraceIdPublishPostError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link HudError} when no usable response was produced: a connection failure, a timeout,
   * a body that would not decode, a value that would not encode, or a credential that could not be
   * obtained
   */
  publishTraceV2TraceTraceIdPublishPost(
    request: Traces.PublishTraceV2TraceTraceIdPublishPostRequest,
    options?: RequestOptions,
  ): ApiPromise<PublishTraceResponse, Traces.PublishTraceV2TraceTraceIdPublishPostError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/v2/trace/{trace_id}/publish"),
        auth: noneAuth,
        pathParams: [{ name: "trace_id", value: request.traceId, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: publishTraceResponseSchema },
        errorFactory: Traces.PublishTraceV2TraceTraceIdPublishPostError,
      },
      options,
    );
  }

  /**
   * Unpublish Trace
   *
   * @remarks
   * Set ``traces.public=false``; the trace returns to invited-only visibility.
   *
   * @returns Successful Response
   *
   * @throws {@link Traces.UnpublishTraceV2TraceTraceIdPublishDeleteError} when the API answers with
   * an error status — narrow on `err.payload.kind`
   *
   * @throws {@link HudError} when no usable response was produced: a connection failure, a timeout,
   * a body that would not decode, a value that would not encode, or a credential that could not be
   * obtained
   */
  unpublishTraceV2TraceTraceIdPublishDelete(
    request: Traces.UnpublishTraceV2TraceTraceIdPublishDeleteRequest,
    options?: RequestOptions,
  ): ApiPromise<StatusResponse, Traces.UnpublishTraceV2TraceTraceIdPublishDeleteError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default("/v2/trace/{trace_id}/publish"),
        auth: noneAuth,
        pathParams: [{ name: "trace_id", value: request.traceId, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: statusResponseSchema },
        errorFactory: Traces.UnpublishTraceV2TraceTraceIdPublishDeleteError,
      },
      options,
    );
  }

  /**
   * Update Trace
   *
   * @remarks
   * Update a trace's metadata fields.
   *
   * @returns Successful Response
   *
   * @throws {@link Traces.UpdateTraceV2TraceTraceIdPatchError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link HudError} when no usable response was produced: a connection failure, a timeout,
   * a body that would not decode, a value that would not encode, or a credential that could not be
   * obtained
   */
  updateTraceV2TraceTraceIdPatch(
    request: Traces.UpdateTraceV2TraceTraceIdPatchRequest,
    options?: RequestOptions,
  ): ApiPromise<TraceInfoResponse, Traces.UpdateTraceV2TraceTraceIdPatchError> {
    return this.#rawClient.execute(
      {
        method: "PATCH",
        urlTemplate: this.#servers.default("/v2/trace/{trace_id}"),
        auth: noneAuth,
        pathParams: [{ name: "trace_id", value: request.traceId, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: traceUpdateRequestSchema },
      },
      {
        success: { kind: "json", schema: traceInfoResponseSchema },
        errorFactory: Traces.UpdateTraceV2TraceTraceIdPatchError,
      },
      options,
    );
  }
}

export namespace Traces {
  export type BatchValidateTracesV2TraceBatchValidatePostRequest = {
    body: TraceBatchValidateRequest;
  };

  export class BatchValidateTracesV2TraceBatchValidatePostError extends ApiError {
    declare readonly payload:
      | Declared<"errorResponse", ErrorResponse>
      | Declared<"errorResponse2", ErrorResponse>
      | Declared<"errorResponse3", ErrorResponse>
      | Declared<"errorResponse4", ErrorResponse>
      | Declared<"errorResponse5", ErrorResponse>
      | Declared<"httpValidationError", HttpValidationError>
      | Declared<"errorResponse6", ErrorResponse>
      | Declared<"errorResponse7", ErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<BatchValidateTracesV2TraceBatchValidatePostError> = [
      { on: 400, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 401, kind: "errorResponse2", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 403, kind: "errorResponse3", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 404, kind: "errorResponse4", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 409, kind: "errorResponse5", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 422, kind: "httpValidationError", decode: { kind: "json", schema: httpValidationErrorSchema } },
      { on: 429, kind: "errorResponse6", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 503, kind: "errorResponse7", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export type GetTraceAnalysisContextV2TraceTraceIdAnalysisContextGetRequest = {
    traceId: string;
    /** @default true */
    includeSpans?: boolean;
    /** @default true */
    includeEnvLogs?: boolean;
    /** @default true */
    includeWorkerLogs?: boolean;
  };

  export class GetTraceAnalysisContextV2TraceTraceIdAnalysisContextGetError extends ApiError {
    declare readonly payload:
      | Declared<"errorResponse", ErrorResponse>
      | Declared<"errorResponse2", ErrorResponse>
      | Declared<"errorResponse3", ErrorResponse>
      | Declared<"errorResponse4", ErrorResponse>
      | Declared<"errorResponse5", ErrorResponse>
      | Declared<"httpValidationError", HttpValidationError>
      | Declared<"errorResponse6", ErrorResponse>
      | Declared<"errorResponse7", ErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetTraceAnalysisContextV2TraceTraceIdAnalysisContextGetError> = [
      { on: 400, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 401, kind: "errorResponse2", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 403, kind: "errorResponse3", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 404, kind: "errorResponse4", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 409, kind: "errorResponse5", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 422, kind: "httpValidationError", decode: { kind: "json", schema: httpValidationErrorSchema } },
      { on: 429, kind: "errorResponse6", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 503, kind: "errorResponse7", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export type GetTraceAnalysisPromptV2TraceTraceIdAnalysisPromptGetRequest = {
    traceId: string;
  };

  export class GetTraceAnalysisPromptV2TraceTraceIdAnalysisPromptGetError extends ApiError {
    declare readonly payload:
      | Declared<"errorResponse", ErrorResponse>
      | Declared<"errorResponse2", ErrorResponse>
      | Declared<"errorResponse3", ErrorResponse>
      | Declared<"errorResponse4", ErrorResponse>
      | Declared<"errorResponse5", ErrorResponse>
      | Declared<"httpValidationError", HttpValidationError>
      | Declared<"errorResponse6", ErrorResponse>
      | Declared<"errorResponse7", ErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetTraceAnalysisPromptV2TraceTraceIdAnalysisPromptGetError> = [
      { on: 400, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 401, kind: "errorResponse2", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 403, kind: "errorResponse3", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 404, kind: "errorResponse4", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 409, kind: "errorResponse5", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 422, kind: "httpValidationError", decode: { kind: "json", schema: httpValidationErrorSchema } },
      { on: 429, kind: "errorResponse6", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 503, kind: "errorResponse7", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export type GetTraceEnvLogsV2TraceTraceIdEnvLogsGetRequest = {
    traceId: string;
  };

  export class GetTraceEnvLogsV2TraceTraceIdEnvLogsGetError extends ApiError {
    declare readonly payload:
      | Declared<"errorResponse", ErrorResponse>
      | Declared<"errorResponse2", ErrorResponse>
      | Declared<"errorResponse3", ErrorResponse>
      | Declared<"errorResponse4", ErrorResponse>
      | Declared<"errorResponse5", ErrorResponse>
      | Declared<"httpValidationError", HttpValidationError>
      | Declared<"errorResponse6", ErrorResponse>
      | Declared<"errorResponse7", ErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetTraceEnvLogsV2TraceTraceIdEnvLogsGetError> = [
      { on: 400, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 401, kind: "errorResponse2", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 403, kind: "errorResponse3", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 404, kind: "errorResponse4", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 409, kind: "errorResponse5", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 422, kind: "httpValidationError", decode: { kind: "json", schema: httpValidationErrorSchema } },
      { on: 429, kind: "errorResponse6", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 503, kind: "errorResponse7", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export type GetTraceEventsV2TraceTraceIdEventsGetRequest = {
    traceId: string;
    /**
     * Return only events derived from spans with sequence > since_seq. Use -1 (default) for the
     * first page, then pass the previous `next_seq` while `has_more` is true. Once caught up, use
     * `latest_seq` for incremental polling.
     *
     * @default -1
     */
    sinceSeq?: number;
    /** Maximum completed span references to project in this page. @default 100 */
    limit?: number;
  };

  export const getTraceEventsV2TraceTraceIdEventsGetRequestSchema: Schema<GetTraceEventsV2TraceTraceIdEventsGetRequest> =
    s.lazySchema(() =>
      s.object<GetTraceEventsV2TraceTraceIdEventsGetRequest>({
        traceId: s.string(),
        sinceSeq: s.defaulted(s.int(), -1),
        limit: s.defaulted(s.int().check(s.gte(1), s.lte(200)), 100),
      }),
    );

  export class GetTraceEventsV2TraceTraceIdEventsGetError extends ApiError {
    declare readonly payload:
      | Declared<"errorResponse", ErrorResponse>
      | Declared<"errorResponse2", ErrorResponse>
      | Declared<"errorResponse3", ErrorResponse>
      | Declared<"errorResponse4", ErrorResponse>
      | Declared<"errorResponse5", ErrorResponse>
      | Declared<"httpValidationError", HttpValidationError>
      | Declared<"errorResponse6", ErrorResponse>
      | Declared<"errorResponse7", ErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetTraceEventsV2TraceTraceIdEventsGetError> = [
      { on: 400, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 401, kind: "errorResponse2", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 403, kind: "errorResponse3", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 404, kind: "errorResponse4", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 409, kind: "errorResponse5", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 422, kind: "httpValidationError", decode: { kind: "json", schema: httpValidationErrorSchema } },
      { on: 429, kind: "errorResponse6", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 503, kind: "errorResponse7", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export type GetTraceInfoV2TraceTraceIdInfoGetRequest = {
    traceId: string;
  };

  export class GetTraceInfoV2TraceTraceIdInfoGetError extends ApiError {
    declare readonly payload:
      | Declared<"errorResponse", ErrorResponse>
      | Declared<"errorResponse2", ErrorResponse>
      | Declared<"errorResponse3", ErrorResponse>
      | Declared<"errorResponse4", ErrorResponse>
      | Declared<"errorResponse5", ErrorResponse>
      | Declared<"httpValidationError", HttpValidationError>
      | Declared<"errorResponse6", ErrorResponse>
      | Declared<"errorResponse7", ErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetTraceInfoV2TraceTraceIdInfoGetError> = [
      { on: 400, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 401, kind: "errorResponse2", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 403, kind: "errorResponse3", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 404, kind: "errorResponse4", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 409, kind: "errorResponse5", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 422, kind: "httpValidationError", decode: { kind: "json", schema: httpValidationErrorSchema } },
      { on: 429, kind: "errorResponse6", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 503, kind: "errorResponse7", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export type GetTraceLogsV2TraceTraceIdLogsGetRequest = {
    traceId: string;
  };

  export class GetTraceLogsV2TraceTraceIdLogsGetError extends ApiError {
    declare readonly payload:
      | Declared<"errorResponse", ErrorResponse>
      | Declared<"errorResponse2", ErrorResponse>
      | Declared<"errorResponse3", ErrorResponse>
      | Declared<"errorResponse4", ErrorResponse>
      | Declared<"errorResponse5", ErrorResponse>
      | Declared<"httpValidationError", HttpValidationError>
      | Declared<"errorResponse6", ErrorResponse>
      | Declared<"errorResponse7", ErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetTraceLogsV2TraceTraceIdLogsGetError> = [
      { on: 400, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 401, kind: "errorResponse2", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 403, kind: "errorResponse3", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 404, kind: "errorResponse4", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 409, kind: "errorResponse5", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 422, kind: "httpValidationError", decode: { kind: "json", schema: httpValidationErrorSchema } },
      { on: 429, kind: "errorResponse6", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 503, kind: "errorResponse7", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export type GetTraceUsageV2TraceTraceIdUsageGetRequest = {
    traceId: string;
  };

  export class GetTraceUsageV2TraceTraceIdUsageGetError extends ApiError {
    declare readonly payload:
      | Declared<"errorResponse", ErrorResponse>
      | Declared<"errorResponse2", ErrorResponse>
      | Declared<"errorResponse3", ErrorResponse>
      | Declared<"errorResponse4", ErrorResponse>
      | Declared<"errorResponse5", ErrorResponse>
      | Declared<"httpValidationError", HttpValidationError>
      | Declared<"errorResponse6", ErrorResponse>
      | Declared<"errorResponse7", ErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetTraceUsageV2TraceTraceIdUsageGetError> = [
      { on: 400, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 401, kind: "errorResponse2", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 403, kind: "errorResponse3", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 404, kind: "errorResponse4", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 409, kind: "errorResponse5", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 422, kind: "httpValidationError", decode: { kind: "json", schema: httpValidationErrorSchema } },
      { on: 429, kind: "errorResponse6", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 503, kind: "errorResponse7", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export type GetTraceV2TraceTraceIdGetRequest = {
    traceId: string;
  };

  export class GetTraceV2TraceTraceIdGetError extends ApiError {
    declare readonly payload:
      | Declared<"errorResponse", ErrorResponse>
      | Declared<"errorResponse2", ErrorResponse>
      | Declared<"errorResponse3", ErrorResponse>
      | Declared<"errorResponse4", ErrorResponse>
      | Declared<"errorResponse5", ErrorResponse>
      | Declared<"httpValidationError", HttpValidationError>
      | Declared<"errorResponse6", ErrorResponse>
      | Declared<"errorResponse7", ErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetTraceV2TraceTraceIdGetError> = [
      { on: 400, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 401, kind: "errorResponse2", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 403, kind: "errorResponse3", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 404, kind: "errorResponse4", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 409, kind: "errorResponse5", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 422, kind: "httpValidationError", decode: { kind: "json", schema: httpValidationErrorSchema } },
      { on: 429, kind: "errorResponse6", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 503, kind: "errorResponse7", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export type ListRelatedTracesV2TraceTraceIdRelatedGetRequest = {
    traceId: string;
    /**
     * `job` (same job_id), `task` (every version of the same task), `recent` (caller's own traces,
     * requires auth), or `discover` (most-recent visible traces overall).
     */
    kind: RelatedKind1;
    /** @default 50 */
    limit?: number;
    /**
     * Only meaningful with `kind=task`: further restrict to the source trace's job. Used by the
     * info-card sibling-run squares.
     *
     * @default false
     */
    scopeToJob?: boolean;
    /**
     * Comma-separated status whitelist applied to ``Trace.status`` — e.g. `completed` to exclude
     * live/cancelled rows.
     */
    status?: Status21;
    /** Sort by created_at. */
    order?: RelatedOrder1;
  };

  export const listRelatedTracesV2TraceTraceIdRelatedGetRequestSchema: Schema<ListRelatedTracesV2TraceTraceIdRelatedGetRequest> =
    s.lazySchema(() =>
      s.object<ListRelatedTracesV2TraceTraceIdRelatedGetRequest>({
        traceId: s.string(),
        kind: relatedKind1Schema,
        limit: s.defaulted(s.int().check(s.gte(1), s.lte(100)), 50),
        scopeToJob: s.defaulted(s.boolean(), false),
        status: s.optional(s.lazy(() => status21Schema)),
        order: s.optional(s.lazy(() => relatedOrder1Schema)),
      }),
    );

  export class ListRelatedTracesV2TraceTraceIdRelatedGetError extends ApiError {
    declare readonly payload:
      | Declared<"errorResponse", ErrorResponse>
      | Declared<"errorResponse2", ErrorResponse>
      | Declared<"errorResponse3", ErrorResponse>
      | Declared<"errorResponse4", ErrorResponse>
      | Declared<"errorResponse5", ErrorResponse>
      | Declared<"httpValidationError", HttpValidationError>
      | Declared<"errorResponse6", ErrorResponse>
      | Declared<"errorResponse7", ErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<ListRelatedTracesV2TraceTraceIdRelatedGetError> = [
      { on: 400, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 401, kind: "errorResponse2", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 403, kind: "errorResponse3", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 404, kind: "errorResponse4", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 409, kind: "errorResponse5", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 422, kind: "httpValidationError", decode: { kind: "json", schema: httpValidationErrorSchema } },
      { on: 429, kind: "errorResponse6", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 503, kind: "errorResponse7", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export type PublishTraceV2TraceTraceIdPublishPostRequest = {
    traceId: string;
  };

  export class PublishTraceV2TraceTraceIdPublishPostError extends ApiError {
    declare readonly payload:
      | Declared<"errorResponse", ErrorResponse>
      | Declared<"errorResponse2", ErrorResponse>
      | Declared<"errorResponse3", ErrorResponse>
      | Declared<"errorResponse4", ErrorResponse>
      | Declared<"errorResponse5", ErrorResponse>
      | Declared<"httpValidationError", HttpValidationError>
      | Declared<"errorResponse6", ErrorResponse>
      | Declared<"errorResponse7", ErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<PublishTraceV2TraceTraceIdPublishPostError> = [
      { on: 400, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 401, kind: "errorResponse2", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 403, kind: "errorResponse3", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 404, kind: "errorResponse4", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 409, kind: "errorResponse5", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 422, kind: "httpValidationError", decode: { kind: "json", schema: httpValidationErrorSchema } },
      { on: 429, kind: "errorResponse6", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 503, kind: "errorResponse7", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export type UnpublishTraceV2TraceTraceIdPublishDeleteRequest = {
    traceId: string;
  };

  export class UnpublishTraceV2TraceTraceIdPublishDeleteError extends ApiError {
    declare readonly payload:
      | Declared<"errorResponse", ErrorResponse>
      | Declared<"errorResponse2", ErrorResponse>
      | Declared<"errorResponse3", ErrorResponse>
      | Declared<"errorResponse4", ErrorResponse>
      | Declared<"errorResponse5", ErrorResponse>
      | Declared<"httpValidationError", HttpValidationError>
      | Declared<"errorResponse6", ErrorResponse>
      | Declared<"errorResponse7", ErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<UnpublishTraceV2TraceTraceIdPublishDeleteError> = [
      { on: 400, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 401, kind: "errorResponse2", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 403, kind: "errorResponse3", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 404, kind: "errorResponse4", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 409, kind: "errorResponse5", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 422, kind: "httpValidationError", decode: { kind: "json", schema: httpValidationErrorSchema } },
      { on: 429, kind: "errorResponse6", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 503, kind: "errorResponse7", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export type UpdateTraceV2TraceTraceIdPatchRequest = {
    traceId: string;
    body: TraceUpdateRequest;
  };

  export class UpdateTraceV2TraceTraceIdPatchError extends ApiError {
    declare readonly payload:
      | Declared<"errorResponse", ErrorResponse>
      | Declared<"errorResponse2", ErrorResponse>
      | Declared<"errorResponse3", ErrorResponse>
      | Declared<"errorResponse4", ErrorResponse>
      | Declared<"errorResponse5", ErrorResponse>
      | Declared<"httpValidationError", HttpValidationError>
      | Declared<"errorResponse6", ErrorResponse>
      | Declared<"errorResponse7", ErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<UpdateTraceV2TraceTraceIdPatchError> = [
      { on: 400, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 401, kind: "errorResponse2", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 403, kind: "errorResponse3", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 404, kind: "errorResponse4", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 409, kind: "errorResponse5", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 422, kind: "httpValidationError", decode: { kind: "json", schema: httpValidationErrorSchema } },
      { on: 429, kind: "errorResponse6", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 503, kind: "errorResponse7", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }
}
