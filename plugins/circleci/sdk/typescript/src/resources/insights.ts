import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import * as s from "../core/validation/index.js";
import { errorResponseSchema, type ErrorResponse } from "../models/error-response.js";
import { insightsJobMetricsSchema, type InsightsJobMetrics } from "../models/insights-job-metrics.js";
import { insightsTestMetricsSchema, type InsightsTestMetrics } from "../models/insights-test-metrics.js";
import {
  insightsWorkflowMetricsSchema,
  type InsightsWorkflowMetrics,
} from "../models/insights-workflow-metrics.js";
import { insightsWorkflowRunsSchema, type InsightsWorkflowRuns } from "../models/insights-workflow-runs.js";
import { reportingWindowSchema, type ReportingWindow } from "../models/reporting-window.js";
import type { Servers } from "../servers.js";

/**
 * Endpoints for retrieving workflow and job metrics, summary data, and test performance insights.
 */
export class Insights {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Get project workflow metrics
   *
   * @remarks
   * Returns summary metrics for the workflows of a given project, including success rates, duration
   * metrics, and throughput.
   *
   * @returns Successfully retrieved workflow metrics
   *
   * @throws {@link Insights.GetProjectWorkflowMetricsError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link CircleCiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getProjectWorkflowMetrics(
    request: Insights.GetProjectWorkflowMetricsRequest,
    options?: RequestOptions,
  ): ApiPromise<InsightsWorkflowMetrics, Insights.GetProjectWorkflowMetricsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.defaultCircleCiRestApiV2ContextApi("/insights/{project-slug}/workflows"),
        auth: this.#auth.apiToken,
        pathParams: [{ name: "project-slug", value: request.projectSlug, schema: s.string() }],
        query: [
          { name: "branch", value: request.branch, schema: s.optional(s.string()) },
          {
            name: "reporting-window",
            value: request.reportingWindow,
            schema: s.optional(s.lazy(() => reportingWindowSchema)),
          },
          { name: "page-token", value: request.pageToken, schema: s.optional(s.string()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: insightsWorkflowMetricsSchema },
        errorFactory: Insights.GetProjectWorkflowMetricsError,
      },
      options,
    );
  }

  /**
   * Get workflow job metrics
   *
   * @remarks
   * Returns summary metrics for the jobs within a named workflow, including success rates and
   * duration metrics.
   *
   * @returns Successfully retrieved job metrics
   *
   * @throws {@link Insights.GetWorkflowJobMetricsError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link CircleCiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getWorkflowJobMetrics(
    request: Insights.GetWorkflowJobMetricsRequest,
    options?: RequestOptions,
  ): ApiPromise<InsightsJobMetrics, Insights.GetWorkflowJobMetricsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.defaultCircleCiRestApiV2ContextApi(
          "/insights/{project-slug}/workflows/{workflow-name}/jobs",
        ),
        auth: this.#auth.apiToken,
        pathParams: [
          { name: "project-slug", value: request.projectSlug, schema: s.string() },
          { name: "workflow-name", value: request.workflowName, schema: s.string() },
        ],
        query: [
          { name: "branch", value: request.branch, schema: s.optional(s.string()) },
          {
            name: "reporting-window",
            value: request.reportingWindow,
            schema: s.optional(s.lazy(() => reportingWindowSchema)),
          },
          { name: "page-token", value: request.pageToken, schema: s.optional(s.string()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: insightsJobMetricsSchema },
        errorFactory: Insights.GetWorkflowJobMetricsError,
      },
      options,
    );
  }

  /**
   * Get recent runs of a workflow
   *
   * @remarks
   * Returns recent runs of a named workflow, containing status, duration, and credits consumed.
   *
   * @returns Successfully retrieved workflow runs
   *
   * @throws {@link Insights.GetWorkflowRunsError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link CircleCiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getWorkflowRuns(
    request: Insights.GetWorkflowRunsRequest,
    options?: RequestOptions,
  ): ApiPromise<InsightsWorkflowRuns, Insights.GetWorkflowRunsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.defaultCircleCiRestApiV2ContextApi(
          "/insights/{project-slug}/workflows/{workflow-name}",
        ),
        auth: this.#auth.apiToken,
        pathParams: [
          { name: "project-slug", value: request.projectSlug, schema: s.string() },
          { name: "workflow-name", value: request.workflowName, schema: s.string() },
        ],
        query: [
          { name: "branch", value: request.branch, schema: s.optional(s.string()) },
          { name: "page-token", value: request.pageToken, schema: s.optional(s.string()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: insightsWorkflowRunsSchema },
        errorFactory: Insights.GetWorkflowRunsError,
      },
      options,
    );
  }

  /**
   * Get test metrics for a workflow
   *
   * @remarks
   * Returns test metrics for a named workflow, including most frequently failing tests and slowest
   * tests.
   *
   * @returns Successfully retrieved test metrics
   *
   * @throws {@link Insights.GetWorkflowTestMetricsError} when the API answers with an error status
   * — narrow on `err.payload.kind`
   *
   * @throws {@link CircleCiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getWorkflowTestMetrics(
    request: Insights.GetWorkflowTestMetricsRequest,
    options?: RequestOptions,
  ): ApiPromise<InsightsTestMetrics, Insights.GetWorkflowTestMetricsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.defaultCircleCiRestApiV2ContextApi(
          "/insights/{project-slug}/workflows/{workflow-name}/test-metrics",
        ),
        auth: this.#auth.apiToken,
        pathParams: [
          { name: "project-slug", value: request.projectSlug, schema: s.string() },
          { name: "workflow-name", value: request.workflowName, schema: s.string() },
        ],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: insightsTestMetricsSchema },
        errorFactory: Insights.GetWorkflowTestMetricsError,
      },
      options,
    );
  }
}

export namespace Insights {
  export type GetProjectWorkflowMetricsRequest = {
    /**
     * The project slug in the form vcs-slug/org-name/repo-name (e.g.,
     * gh/CircleCI-Public/api-preview-docs)
     */
    projectSlug: string;
    /** Filter by branch name */
    branch?: string;
    /** The time window for metrics */
    reportingWindow?: ReportingWindow;
    /** Token for retrieving the next page of results */
    pageToken?: string;
  };

  export class GetProjectWorkflowMetricsError extends ApiError {
    declare readonly payload: Declared<"errorResponse", ErrorResponse> | Undeclared;

    static readonly errors: ErrorDecoders<GetProjectWorkflowMetricsError> = [
      { on: 401, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export type GetWorkflowJobMetricsRequest = {
    /**
     * The project slug in the form vcs-slug/org-name/repo-name (e.g.,
     * gh/CircleCI-Public/api-preview-docs)
     */
    projectSlug: string;
    /** The name of the workflow */
    workflowName: string;
    /** Filter by branch name */
    branch?: string;
    /** The time window for metrics */
    reportingWindow?: ReportingWindow;
    /** Token for retrieving the next page of results */
    pageToken?: string;
  };

  export class GetWorkflowJobMetricsError extends ApiError {
    declare readonly payload: Declared<"errorResponse", ErrorResponse> | Undeclared;

    static readonly errors: ErrorDecoders<GetWorkflowJobMetricsError> = [
      { on: 401, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export type GetWorkflowRunsRequest = {
    /**
     * The project slug in the form vcs-slug/org-name/repo-name (e.g.,
     * gh/CircleCI-Public/api-preview-docs)
     */
    projectSlug: string;
    /** The name of the workflow */
    workflowName: string;
    /** Filter by branch name */
    branch?: string;
    /** Token for retrieving the next page of results */
    pageToken?: string;
  };

  export class GetWorkflowRunsError extends ApiError {
    declare readonly payload: Declared<"errorResponse", ErrorResponse> | Undeclared;

    static readonly errors: ErrorDecoders<GetWorkflowRunsError> = [
      { on: 401, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export type GetWorkflowTestMetricsRequest = {
    /**
     * The project slug in the form vcs-slug/org-name/repo-name (e.g.,
     * gh/CircleCI-Public/api-preview-docs)
     */
    projectSlug: string;
    /** The name of the workflow */
    workflowName: string;
  };

  export class GetWorkflowTestMetricsError extends ApiError {
    declare readonly payload: Declared<"errorResponse", ErrorResponse> | Undeclared;

    static readonly errors: ErrorDecoders<GetWorkflowTestMetricsError> = [
      { on: 401, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }
}
