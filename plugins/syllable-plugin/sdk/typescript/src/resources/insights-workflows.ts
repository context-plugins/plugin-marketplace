import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import { httpValidationErrorSchema, type HttpValidationError } from "../models/http-validation-error.js";
import {
  insightWorkflowActivateSchema,
  type InsightWorkflowActivate,
} from "../models/insight-workflow-activate.js";
import {
  insightWorkflowExecutionSummarySchema,
  type InsightWorkflowExecutionSummary,
} from "../models/insight-workflow-execution-summary.js";
import { insightWorkflowInputSchema, type InsightWorkflowInput } from "../models/insight-workflow-input.js";
import {
  insightWorkflowOutputSchema,
  type InsightWorkflowOutput,
} from "../models/insight-workflow-output.js";
import {
  insightWorkflowPropertiesSchema,
  type InsightWorkflowProperties,
} from "../models/insight-workflow-properties.js";
import {
  insightWorkflowResponseSchema,
  type InsightWorkflowResponse,
} from "../models/insight-workflow-response.js";
import {
  insightsWorkflowQueueSessionSchema,
  type InsightsWorkflowQueueSession,
} from "../models/insights-workflow-queue-session.js";
import {
  listResponseInsightWorkflowExecutionOutputSchema,
  type ListResponseInsightWorkflowExecutionOutput,
} from "../models/list-response-insight-workflow-execution-output.js";
import {
  listResponseInsightWorkflowResponseSchema,
  type ListResponseInsightWorkflowResponse,
} from "../models/list-response-insight-workflow-response.js";
import {
  listResponseWorkflowFileRowSchema,
  type ListResponseWorkflowFileRow,
} from "../models/list-response-workflow-file-row.js";
import {
  listResponseWorkflowSessionRowSchema,
  type ListResponseWorkflowSessionRow,
} from "../models/list-response-workflow-session-row.js";
import { searchFieldSchema, type SearchField } from "../models/search-field.js";
import { searchField1Schema, type SearchField1 } from "../models/search-field1.js";
import { searchField2Schema, type SearchField2 } from "../models/search-field2.js";
import { endDatetime18Schema, type EndDatetime18 } from "../models/unions/end-datetime18.js";
import { endDatetime3Schema, type EndDatetime3 } from "../models/unions/end-datetime3.js";
import { fields11Schema, type Fields11 } from "../models/unions/fields11.js";
import { fields12Schema, type Fields12 } from "../models/unions/fields12.js";
import { orderByDirection1Schema, type OrderByDirection1 } from "../models/unions/order-by-direction1.js";
import { orderBy111Schema, type OrderBy111 } from "../models/unions/order-by111.js";
import { orderBy12Schema, type OrderBy12 } from "../models/unions/order-by12.js";
import { orderBy13Schema, type OrderBy13 } from "../models/unions/order-by13.js";
import { orderBy211Schema, type OrderBy211 } from "../models/unions/order-by211.js";
import { pageSchema, type Page } from "../models/unions/page.js";
import { startDatetime18Schema, type StartDatetime18 } from "../models/unions/start-datetime18.js";
import { startDatetime3Schema, type StartDatetime3 } from "../models/unions/start-datetime3.js";
import type { Servers } from "../servers.js";

/**
 * Operations related to insights workflows. An workflow is series of tool invocations that
 * processes conversation data to extract information and generate reports.
 */
export class InsightsWorkflows {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Activate Insights Workflow
   *
   * @remarks
   * Activate an InsightWorkflow.
   *
   * @returns Successful Response
   *
   * @throws {@link InsightsWorkflows.InsightsWorkflowActivateError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link SyllableSdkError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  insightsWorkflowActivate(
    request: InsightsWorkflows.InsightsWorkflowActivateRequest,
    options?: RequestOptions,
  ): ApiPromise<InsightWorkflowOutput, InsightsWorkflows.InsightsWorkflowActivateError> {
    return this.#rawClient.execute(
      {
        method: "PUT",
        urlTemplate: this.#servers.default("/api/v1/insights/workflows/{workflow_id}/activate"),
        auth: this.#auth.apiKeyHeader,
        pathParams: [{ name: "workflow_id", value: request.workflowId, schema: s.int() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: insightWorkflowActivateSchema },
      },
      {
        success: { kind: "json", schema: insightWorkflowOutputSchema },
        errorFactory: InsightsWorkflows.InsightsWorkflowActivateError,
      },
      options,
    );
  }

  /**
   * Create Insight Workflow
   *
   * @remarks
   * Create a new tool in the insights
   *
   * @returns Successful Response
   *
   * @throws {@link InsightsWorkflows.InsightsWorkflowCreateError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link SyllableSdkError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  insightsWorkflowCreate(
    request: InsightsWorkflows.InsightsWorkflowCreateRequest,
    options?: RequestOptions,
  ): ApiPromise<InsightWorkflowOutput, InsightsWorkflows.InsightsWorkflowCreateError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/api/v1/insights/workflows/"),
        auth: this.#auth.apiKeyHeader,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: insightWorkflowInputSchema },
      },
      {
        success: { kind: "json", schema: insightWorkflowOutputSchema },
        errorFactory: InsightsWorkflows.InsightsWorkflowCreateError,
      },
      options,
    );
  }

  /**
   * Delete Insights Workflow
   *
   * @remarks
   * Delete an Insights workflow.
   *
   * @returns Successful Response
   *
   * @throws {@link InsightsWorkflows.InsightsWorkflowDeleteError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link SyllableSdkError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  insightsWorkflowDelete(
    request: InsightsWorkflows.InsightsWorkflowDeleteRequest,
    options?: RequestOptions,
  ): ApiPromise<Record<string, unknown>, InsightsWorkflows.InsightsWorkflowDeleteError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default("/api/v1/insights/workflows/{workflow_id}"),
        auth: this.#auth.apiKeyHeader,
        pathParams: [{ name: "workflow_id", value: request.workflowId, schema: s.int() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.record(s.string(), s.unknown()) },
        errorFactory: InsightsWorkflows.InsightsWorkflowDeleteError,
      },
      options,
    );
  }

  /**
   * List Insight Workflow Executions
   *
   * @remarks
   * List a workflow's execution rows.
   *
   * @returns Successful Response
   *
   * @throws {@link InsightsWorkflows.InsightsWorkflowExecutionsError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link SyllableSdkError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  insightsWorkflowExecutions(
    request: InsightsWorkflows.InsightsWorkflowExecutionsRequest,
    options?: RequestOptions,
  ): ApiPromise<
    ListResponseInsightWorkflowExecutionOutput,
    InsightsWorkflows.InsightsWorkflowExecutionsError
  > {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/v1/insights/workflows/{workflow_id}/executions"),
        auth: this.#auth.apiKeyHeader,
        pathParams: [{ name: "workflow_id", value: request.workflowId, schema: s.int() }],
        query: [
          { name: "page", value: request.page, schema: s.optional(s.lazy(() => pageSchema)) },
          { name: "limit", value: request.limit, schema: s.defaulted(s.int(), 25) },
          {
            name: "search_fields",
            value: request.searchFields,
            schema: s.optional(s.array(s.lazy(() => searchFieldSchema))),
          },
          {
            name: "search_field_values",
            value: request.searchFieldValues,
            schema: s.optional(s.array(s.string())),
          },
          { name: "order_by", value: request.orderBy, schema: s.optional(s.lazy(() => orderBy12Schema)) },
          {
            name: "order_by_direction",
            value: request.orderByDirection,
            schema: s.optional(s.lazy(() => orderByDirection1Schema)),
          },
          { name: "fields", value: request.fields, schema: s.optional(s.lazy(() => fields12Schema)) },
          {
            name: "start_datetime",
            value: request.startDatetime,
            schema: s.optional(s.lazy(() => startDatetime3Schema)),
          },
          {
            name: "end_datetime",
            value: request.endDatetime,
            schema: s.optional(s.lazy(() => endDatetime3Schema)),
          },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: listResponseInsightWorkflowExecutionOutputSchema },
        errorFactory: InsightsWorkflows.InsightsWorkflowExecutionsError,
      },
      options,
    );
  }

  /**
   * Insight Workflow Executions Summary
   *
   * @remarks
   * Return how many of a workflow's executions are in each status, optionally within a created_at
   * range (for example, since the workflow's `updated_at` passed as `start_datetime`).
   *
   * @returns Successful Response
   *
   * @throws {@link InsightsWorkflows.InsightsWorkflowExecutionsSummaryError} when the API answers
   * with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link SyllableSdkError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  insightsWorkflowExecutionsSummary(
    request: InsightsWorkflows.InsightsWorkflowExecutionsSummaryRequest,
    options?: RequestOptions,
  ): ApiPromise<InsightWorkflowExecutionSummary, InsightsWorkflows.InsightsWorkflowExecutionsSummaryError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/v1/insights/workflows/{workflow_id}/executions/summary"),
        auth: this.#auth.apiKeyHeader,
        pathParams: [{ name: "workflow_id", value: request.workflowId, schema: s.int() }],
        query: [
          {
            name: "start_datetime",
            value: request.startDatetime,
            schema: s.optional(s.lazy(() => startDatetime18Schema)),
          },
          {
            name: "end_datetime",
            value: request.endDatetime,
            schema: s.optional(s.lazy(() => endDatetime18Schema)),
          },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: insightWorkflowExecutionSummarySchema },
        errorFactory: InsightsWorkflows.InsightsWorkflowExecutionsSummaryError,
      },
      options,
    );
  }

  /**
   * List Insight Workflow Files
   *
   * @remarks
   * List the uploaded files under a workflow, one row per file, with each tool's results grouped
   * into a ``results`` dict keyed by tool name.
   *
   * Files come from the workflow's execution queue, so pending, processing and failed files show up
   * too, not just completed ones. A file that was queued more than once appears only once. Insights
   * reused from another workflow still show up here.
   *
   * @returns Successful Response
   *
   * @throws {@link InsightsWorkflows.InsightsWorkflowFilesError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link SyllableSdkError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  insightsWorkflowFiles(
    request: InsightsWorkflows.InsightsWorkflowFilesRequest,
    options?: RequestOptions,
  ): ApiPromise<ListResponseWorkflowFileRow, InsightsWorkflows.InsightsWorkflowFilesError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/v1/insights/workflows/{workflow_id}/files"),
        auth: this.#auth.apiKeyHeader,
        pathParams: [{ name: "workflow_id", value: request.workflowId, schema: s.int() }],
        query: [
          { name: "page", value: request.page, schema: s.optional(s.lazy(() => pageSchema)) },
          { name: "limit", value: request.limit, schema: s.defaulted(s.int(), 25) },
          {
            name: "search_fields",
            value: request.searchFields,
            schema: s.optional(s.array(s.lazy(() => searchField2Schema))),
          },
          {
            name: "search_field_values",
            value: request.searchFieldValues,
            schema: s.optional(s.array(s.string())),
          },
          { name: "order_by", value: request.orderBy, schema: s.optional(s.lazy(() => orderBy211Schema)) },
          {
            name: "order_by_direction",
            value: request.orderByDirection,
            schema: s.optional(s.lazy(() => orderByDirection1Schema)),
          },
          {
            name: "start_datetime",
            value: request.startDatetime,
            schema: s.optional(s.lazy(() => startDatetime3Schema)),
          },
          {
            name: "end_datetime",
            value: request.endDatetime,
            schema: s.optional(s.lazy(() => endDatetime3Schema)),
          },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: listResponseWorkflowFileRowSchema },
        errorFactory: InsightsWorkflows.InsightsWorkflowFilesError,
      },
      options,
    );
  }

  /**
   * Get Insight Workflow By Id
   *
   * @remarks
   * Get a InsightWorkflow by ID.
   *
   * @returns Successful Response
   *
   * @throws {@link InsightsWorkflows.InsightsWorkflowGetByIdError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link SyllableSdkError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  insightsWorkflowGetById(
    request: InsightsWorkflows.InsightsWorkflowGetByIdRequest,
    options?: RequestOptions,
  ): ApiPromise<InsightWorkflowResponse, InsightsWorkflows.InsightsWorkflowGetByIdError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/v1/insights/workflows/{workflow_id}"),
        auth: this.#auth.apiKeyHeader,
        pathParams: [{ name: "workflow_id", value: request.workflowId, schema: s.int() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: insightWorkflowResponseSchema },
        errorFactory: InsightsWorkflows.InsightsWorkflowGetByIdError,
      },
      options,
    );
  }

  /**
   * Inactivate Insights Workflow
   *
   * @remarks
   * Inactivate an InsightWorkflow.
   *
   * @returns Successful Response
   *
   * @throws {@link InsightsWorkflows.InsightsWorkflowInactivateError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link SyllableSdkError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  insightsWorkflowInactivate(
    request: InsightsWorkflows.InsightsWorkflowInactivateRequest,
    options?: RequestOptions,
  ): ApiPromise<InsightWorkflowOutput, InsightsWorkflows.InsightsWorkflowInactivateError> {
    return this.#rawClient.execute(
      {
        method: "PUT",
        urlTemplate: this.#servers.default("/api/v1/insights/workflows/{workflow_id}/inactivate"),
        auth: this.#auth.apiKeyHeader,
        pathParams: [{ name: "workflow_id", value: request.workflowId, schema: s.int() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: insightWorkflowOutputSchema },
        errorFactory: InsightsWorkflows.InsightsWorkflowInactivateError,
      },
      options,
    );
  }

  /**
   * Insight Workflow List
   *
   * @remarks
   * List the existing insight_workflows
   *
   * @returns Successful Response
   *
   * @throws {@link InsightsWorkflows.InsightsWorkflowListError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link SyllableSdkError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  insightsWorkflowList(
    request: InsightsWorkflows.InsightsWorkflowListRequest,
    options?: RequestOptions,
  ): ApiPromise<ListResponseInsightWorkflowResponse, InsightsWorkflows.InsightsWorkflowListError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/v1/insights/workflows/"),
        auth: this.#auth.apiKeyHeader,
        pathParams: [],
        query: [
          { name: "page", value: request.page, schema: s.optional(s.lazy(() => pageSchema)) },
          { name: "limit", value: request.limit, schema: s.defaulted(s.int(), 25) },
          {
            name: "search_fields",
            value: request.searchFields,
            schema: s.optional(s.array(s.lazy(() => insightWorkflowPropertiesSchema))),
          },
          {
            name: "search_field_values",
            value: request.searchFieldValues,
            schema: s.optional(s.array(s.string())),
          },
          { name: "order_by", value: request.orderBy, schema: s.optional(s.lazy(() => orderBy111Schema)) },
          {
            name: "order_by_direction",
            value: request.orderByDirection,
            schema: s.optional(s.lazy(() => orderByDirection1Schema)),
          },
          { name: "fields", value: request.fields, schema: s.optional(s.lazy(() => fields11Schema)) },
          {
            name: "start_datetime",
            value: request.startDatetime,
            schema: s.optional(s.lazy(() => startDatetime3Schema)),
          },
          {
            name: "end_datetime",
            value: request.endDatetime,
            schema: s.optional(s.lazy(() => endDatetime3Schema)),
          },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: listResponseInsightWorkflowResponseSchema },
        errorFactory: InsightsWorkflows.InsightsWorkflowListError,
      },
      options,
    );
  }

  /**
   * Queue Insights Workflow For Sessions/Files
   *
   * @remarks
   * Manually queue sessions for insights workflow evaluation.
   *
   * @returns Successful Response
   *
   * @throws {@link InsightsWorkflows.InsightsWorkflowQueueWorkError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link SyllableSdkError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  insightsWorkflowQueueWork(
    request: InsightsWorkflows.InsightsWorkflowQueueWorkRequest,
    options?: RequestOptions,
  ): ApiPromise<Record<string, unknown>, InsightsWorkflows.InsightsWorkflowQueueWorkError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/api/v1/insights/workflows/queue-work"),
        auth: this.#auth.apiKeyHeader,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: insightsWorkflowQueueSessionSchema },
      },
      {
        success: { kind: "json", schema: s.record(s.string(), s.unknown()) },
        errorFactory: InsightsWorkflows.InsightsWorkflowQueueWorkError,
      },
      options,
    );
  }

  /**
   * List Insight Workflow Sessions
   *
   * @remarks
   * List the sessions under a workflow, one row per session, with each tool's results grouped into
   * a ``results`` dict keyed by tool name.
   *
   * Sessions come from the workflow's execution queue, so pending, processing and failed sessions
   * show up too, not just completed ones. A session that was queued more than once appears only
   * once. Insights reused from another workflow still show up here.
   *
   * @returns Successful Response
   *
   * @throws {@link InsightsWorkflows.InsightsWorkflowSessionsError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link SyllableSdkError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  insightsWorkflowSessions(
    request: InsightsWorkflows.InsightsWorkflowSessionsRequest,
    options?: RequestOptions,
  ): ApiPromise<ListResponseWorkflowSessionRow, InsightsWorkflows.InsightsWorkflowSessionsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/v1/insights/workflows/{workflow_id}/sessions"),
        auth: this.#auth.apiKeyHeader,
        pathParams: [{ name: "workflow_id", value: request.workflowId, schema: s.int() }],
        query: [
          { name: "page", value: request.page, schema: s.optional(s.lazy(() => pageSchema)) },
          { name: "limit", value: request.limit, schema: s.defaulted(s.int(), 25) },
          {
            name: "search_fields",
            value: request.searchFields,
            schema: s.optional(s.array(s.lazy(() => searchField1Schema))),
          },
          {
            name: "search_field_values",
            value: request.searchFieldValues,
            schema: s.optional(s.array(s.string())),
          },
          { name: "order_by", value: request.orderBy, schema: s.optional(s.lazy(() => orderBy13Schema)) },
          {
            name: "order_by_direction",
            value: request.orderByDirection,
            schema: s.optional(s.lazy(() => orderByDirection1Schema)),
          },
          {
            name: "start_datetime",
            value: request.startDatetime,
            schema: s.optional(s.lazy(() => startDatetime3Schema)),
          },
          {
            name: "end_datetime",
            value: request.endDatetime,
            schema: s.optional(s.lazy(() => endDatetime3Schema)),
          },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: listResponseWorkflowSessionRowSchema },
        errorFactory: InsightsWorkflows.InsightsWorkflowSessionsError,
      },
      options,
    );
  }

  /**
   * Update Insights Workflow
   *
   * @remarks
   * Update a InsightWorkflow.
   *
   * @returns Successful Response
   *
   * @throws {@link InsightsWorkflows.InsightsWorkflowUpdateError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link SyllableSdkError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  insightsWorkflowUpdate(
    request: InsightsWorkflows.InsightsWorkflowUpdateRequest,
    options?: RequestOptions,
  ): ApiPromise<InsightWorkflowOutput, InsightsWorkflows.InsightsWorkflowUpdateError> {
    return this.#rawClient.execute(
      {
        method: "PUT",
        urlTemplate: this.#servers.default("/api/v1/insights/workflows/{workflow_id}"),
        auth: this.#auth.apiKeyHeader,
        pathParams: [{ name: "workflow_id", value: request.workflowId, schema: s.int() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: insightWorkflowInputSchema },
      },
      {
        success: { kind: "json", schema: insightWorkflowOutputSchema },
        errorFactory: InsightsWorkflows.InsightsWorkflowUpdateError,
      },
      options,
    );
  }
}

export namespace InsightsWorkflows {
  export type InsightsWorkflowActivateRequest = {
    workflowId: number;
    body: InsightWorkflowActivate;
  };

  export class InsightsWorkflowActivateError extends ApiError {
    declare readonly payload:
      | Declared<"error404", undefined>
      | Declared<"error500", undefined>
      | Declared<"httpValidationError", HttpValidationError>
      | Undeclared;

    static readonly errors: ErrorDecoders<InsightsWorkflowActivateError> = [
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 500, kind: "error500", decode: { kind: "empty" } },
      { on: 422, kind: "httpValidationError", decode: { kind: "json", schema: httpValidationErrorSchema } },
    ];
  }

  export type InsightsWorkflowCreateRequest = {
    body: InsightWorkflowInput;
  };

  export class InsightsWorkflowCreateError extends ApiError {
    declare readonly payload: Declared<"httpValidationError", HttpValidationError> | Undeclared;

    static readonly errors: ErrorDecoders<InsightsWorkflowCreateError> = [
      { on: 422, kind: "httpValidationError", decode: { kind: "json", schema: httpValidationErrorSchema } },
    ];
  }

  export type InsightsWorkflowDeleteRequest = {
    workflowId: number;
  };

  export class InsightsWorkflowDeleteError extends ApiError {
    declare readonly payload:
      | Declared<"error400", undefined>
      | Declared<"error404", undefined>
      | Declared<"error500", undefined>
      | Declared<"httpValidationError", HttpValidationError>
      | Undeclared;

    static readonly errors: ErrorDecoders<InsightsWorkflowDeleteError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 500, kind: "error500", decode: { kind: "empty" } },
      { on: 422, kind: "httpValidationError", decode: { kind: "json", schema: httpValidationErrorSchema } },
    ];
  }

  export type InsightsWorkflowExecutionsRequest = {
    workflowId: number;
    /** The page number from which to start (0-based) */
    page?: Page;
    /** The maximum number of items to return @default 25 */
    limit?: number;
    /** String names of fields to search. Correspond by index to search field values */
    searchFields?: SearchField[];
    /**
     * Values of fields to search. Correspond by index to search fields. Unless field name contains
     * "list", an individual search field value cannot be a list
     */
    searchFieldValues?: string[];
    /** The field whose value should be used to order the results */
    orderBy?: OrderBy12;
    /** The direction in which to order the results */
    orderByDirection?: OrderByDirection1;
    /** The fields to include in the response */
    fields?: Fields12;
    /** The start datetime for filtering results */
    startDatetime?: StartDatetime3;
    /** The end datetime for filtering results */
    endDatetime?: EndDatetime3;
  };

  export class InsightsWorkflowExecutionsError extends ApiError {
    declare readonly payload: Declared<"httpValidationError", HttpValidationError> | Undeclared;

    static readonly errors: ErrorDecoders<InsightsWorkflowExecutionsError> = [
      { on: 422, kind: "httpValidationError", decode: { kind: "json", schema: httpValidationErrorSchema } },
    ];
  }

  export type InsightsWorkflowExecutionsSummaryRequest = {
    workflowId: number;
    /** ISO 8601 start datetime (inclusive) for created_at filtering */
    startDatetime?: StartDatetime18;
    /** ISO 8601 end datetime (exclusive) for created_at filtering */
    endDatetime?: EndDatetime18;
  };

  export class InsightsWorkflowExecutionsSummaryError extends ApiError {
    declare readonly payload: Declared<"httpValidationError", HttpValidationError> | Undeclared;

    static readonly errors: ErrorDecoders<InsightsWorkflowExecutionsSummaryError> = [
      { on: 422, kind: "httpValidationError", decode: { kind: "json", schema: httpValidationErrorSchema } },
    ];
  }

  export type InsightsWorkflowFilesRequest = {
    workflowId: number;
    /** The page number from which to start (0-based) */
    page?: Page;
    /** The maximum number of items to return @default 25 */
    limit?: number;
    /** String names of fields to search. Correspond by index to search field values */
    searchFields?: SearchField2[];
    /**
     * Values of fields to search. Correspond by index to search fields. Unless field name contains
     * "list", an individual search field value cannot be a list
     */
    searchFieldValues?: string[];
    /** The field whose value should be used to order the results */
    orderBy?: OrderBy211;
    /** The direction in which to order the results */
    orderByDirection?: OrderByDirection1;
    /** The start datetime for filtering results */
    startDatetime?: StartDatetime3;
    /** The end datetime for filtering results */
    endDatetime?: EndDatetime3;
  };

  export class InsightsWorkflowFilesError extends ApiError {
    declare readonly payload: Declared<"httpValidationError", HttpValidationError> | Undeclared;

    static readonly errors: ErrorDecoders<InsightsWorkflowFilesError> = [
      { on: 422, kind: "httpValidationError", decode: { kind: "json", schema: httpValidationErrorSchema } },
    ];
  }

  export type InsightsWorkflowGetByIdRequest = {
    workflowId: number;
  };

  export class InsightsWorkflowGetByIdError extends ApiError {
    declare readonly payload: Declared<"httpValidationError", HttpValidationError> | Undeclared;

    static readonly errors: ErrorDecoders<InsightsWorkflowGetByIdError> = [
      { on: 422, kind: "httpValidationError", decode: { kind: "json", schema: httpValidationErrorSchema } },
    ];
  }

  export type InsightsWorkflowInactivateRequest = {
    workflowId: number;
  };

  export class InsightsWorkflowInactivateError extends ApiError {
    declare readonly payload:
      | Declared<"error404", undefined>
      | Declared<"error500", undefined>
      | Declared<"httpValidationError", HttpValidationError>
      | Undeclared;

    static readonly errors: ErrorDecoders<InsightsWorkflowInactivateError> = [
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 500, kind: "error500", decode: { kind: "empty" } },
      { on: 422, kind: "httpValidationError", decode: { kind: "json", schema: httpValidationErrorSchema } },
    ];
  }

  export type InsightsWorkflowListRequest = {
    /** The page number from which to start (0-based) */
    page?: Page;
    /** The maximum number of items to return @default 25 */
    limit?: number;
    /** String names of fields to search. Correspond by index to search field values */
    searchFields?: InsightWorkflowProperties[];
    /**
     * Values of fields to search. Correspond by index to search fields. Unless field name contains
     * "list", an individual search field value cannot be a list
     */
    searchFieldValues?: string[];
    /** The field whose value should be used to order the results */
    orderBy?: OrderBy111;
    /** The direction in which to order the results */
    orderByDirection?: OrderByDirection1;
    /** The fields to include in the response */
    fields?: Fields11;
    /** The start datetime for filtering results */
    startDatetime?: StartDatetime3;
    /** The end datetime for filtering results */
    endDatetime?: EndDatetime3;
  };

  export class InsightsWorkflowListError extends ApiError {
    declare readonly payload: Declared<"httpValidationError", HttpValidationError> | Undeclared;

    static readonly errors: ErrorDecoders<InsightsWorkflowListError> = [
      { on: 422, kind: "httpValidationError", decode: { kind: "json", schema: httpValidationErrorSchema } },
    ];
  }

  export type InsightsWorkflowQueueWorkRequest = {
    body: InsightsWorkflowQueueSession;
  };

  export class InsightsWorkflowQueueWorkError extends ApiError {
    declare readonly payload:
      | Declared<"error400", undefined>
      | Declared<"error404", undefined>
      | Declared<"error500", undefined>
      | Declared<"httpValidationError", HttpValidationError>
      | Undeclared;

    static readonly errors: ErrorDecoders<InsightsWorkflowQueueWorkError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 500, kind: "error500", decode: { kind: "empty" } },
      { on: 422, kind: "httpValidationError", decode: { kind: "json", schema: httpValidationErrorSchema } },
    ];
  }

  export type InsightsWorkflowSessionsRequest = {
    workflowId: number;
    /** The page number from which to start (0-based) */
    page?: Page;
    /** The maximum number of items to return @default 25 */
    limit?: number;
    /** String names of fields to search. Correspond by index to search field values */
    searchFields?: SearchField1[];
    /**
     * Values of fields to search. Correspond by index to search fields. Unless field name contains
     * "list", an individual search field value cannot be a list
     */
    searchFieldValues?: string[];
    /** The field whose value should be used to order the results */
    orderBy?: OrderBy13;
    /** The direction in which to order the results */
    orderByDirection?: OrderByDirection1;
    /** The start datetime for filtering results */
    startDatetime?: StartDatetime3;
    /** The end datetime for filtering results */
    endDatetime?: EndDatetime3;
  };

  export class InsightsWorkflowSessionsError extends ApiError {
    declare readonly payload: Declared<"httpValidationError", HttpValidationError> | Undeclared;

    static readonly errors: ErrorDecoders<InsightsWorkflowSessionsError> = [
      { on: 422, kind: "httpValidationError", decode: { kind: "json", schema: httpValidationErrorSchema } },
    ];
  }

  export type InsightsWorkflowUpdateRequest = {
    workflowId: number;
    body: InsightWorkflowInput;
  };

  export class InsightsWorkflowUpdateError extends ApiError {
    declare readonly payload:
      | Declared<"error400", undefined>
      | Declared<"error404", undefined>
      | Declared<"error412", undefined>
      | Declared<"error500", undefined>
      | Declared<"httpValidationError", HttpValidationError>
      | Undeclared;

    static readonly errors: ErrorDecoders<InsightsWorkflowUpdateError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 412, kind: "error412", decode: { kind: "empty" } },
      { on: 500, kind: "error500", decode: { kind: "empty" } },
      { on: 422, kind: "httpValidationError", decode: { kind: "json", schema: httpValidationErrorSchema } },
    ];
  }
}
