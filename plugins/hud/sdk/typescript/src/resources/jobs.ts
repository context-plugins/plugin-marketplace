import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { noneAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { atifTrajectoryInternalSchema, type AtifTrajectory } from "../models/atif-trajectory.js";
import {
  batchValidateResponseSchema,
  type BatchValidateResponse,
} from "../models/batch-validate-response.js";
import { chartDataResponseSchema, type ChartDataResponse } from "../models/chart-data-response.js";
import { enrichJobsResponseSchema, type EnrichJobsResponse } from "../models/enrich-jobs-response.js";
import { errorResponseSchema, type ErrorResponse } from "../models/error-response.js";
import { httpValidationErrorSchema, type HttpValidationError } from "../models/http-validation-error.js";
import {
  jobEntityLinksResponseSchema,
  type JobEntityLinksResponse,
} from "../models/job-entity-links-response.js";
import {
  jobImportFinishResponseSchema,
  type JobImportFinishResponse,
} from "../models/job-import-finish-response.js";
import { jobImportRequestInternalSchema, type JobImportRequest } from "../models/job-import-request.js";
import { jobImportResponseSchema, type JobImportResponse } from "../models/job-import-response.js";
import {
  jobImportTraceResultResponseSchema,
  type JobImportTraceResultResponse,
} from "../models/job-import-trace-result-response.js";
import {
  jobImportTraceResultInternalSchema,
  type JobImportTraceResult,
} from "../models/job-import-trace-result.js";
import {
  jobImportTrajectoryResponseSchema,
  type JobImportTrajectoryResponse,
} from "../models/job-import-trajectory-response.js";
import { jobResponseSchema, type JobResponse } from "../models/job-response.js";
import { jobSummarySchema, type JobSummary } from "../models/job-summary.js";
import {
  jobThumbnailsResponseInternalSchema,
  type JobThumbnailsResponse,
} from "../models/job-thumbnails-response.js";
import { jobUpdateRequestSchema, type JobUpdateRequest } from "../models/job-update-request.js";
import { jobUsageResponseSchema, type JobUsageResponse } from "../models/job-usage-response.js";
import {
  paginatedResponseJobResponseSchema,
  type PaginatedResponseJobResponse,
} from "../models/paginated-response-job-response.js";
import {
  paginatedResponseTraceResponseInternalSchema,
  type PaginatedResponseTraceResponse,
} from "../models/paginated-response-trace-response.js";
import { publishJobResponseSchema, type PublishJobResponse } from "../models/publish-job-response.js";
import { statusResponseSchema, type StatusResponse } from "../models/status-response.js";
import {
  tasksetCoverageResponseSchema,
  type TasksetCoverageResponse,
} from "../models/taskset-coverage-response.js";
import {
  tasksetJobsEnrichedResponseSchema,
  type TasksetJobsEnrichedResponse,
} from "../models/taskset-jobs-enriched-response.js";
import { projectId1Schema, type ProjectId1 } from "../models/unions/project-id1.js";
import { status11Schema, type Status11 } from "../models/unions/status11.js";
import { tasksetIdSchema, type TasksetId } from "../models/unions/taskset-id.js";
import type { Servers } from "../servers.js";

export class Jobs {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;

  constructor(rawClient: RawClient, servers: Servers) {
    this.#rawClient = rawClient;
    this.#servers = servers;
  }

  /**
   * Enrich Jobs
   *
   * @remarks
   * Fetch enrichment data (chart points, task coverage, models) for a batch of jobs.
   *
   * @returns Successful Response
   *
   * @throws {@link Jobs.EnrichJobsV2JobsEnrichPostError} when the API answers with an error status
   * — narrow on `err.payload.kind`
   *
   * @throws {@link HudError} when no usable response was produced: a connection failure, a timeout,
   * a body that would not decode, a value that would not encode, or a credential that could not be
   * obtained
   */
  enrichJobsV2JobsEnrichPost(
    request: Jobs.EnrichJobsV2JobsEnrichPostRequest,
    options?: RequestOptions,
  ): ApiPromise<EnrichJobsResponse, Jobs.EnrichJobsV2JobsEnrichPostError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/v2/jobs/enrich"),
        auth: noneAuth,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: s.array(s.string()) },
      },
      {
        success: { kind: "json", schema: enrichJobsResponseSchema },
        errorFactory: Jobs.EnrichJobsV2JobsEnrichPostError,
      },
      options,
    );
  }

  /**
   * Finish Imported Job
   *
   * @remarks
   * Finish an imported job once each of its traces has been finished.
   *
   * @returns Successful Response
   *
   * @throws {@link Jobs.FinishImportedJobV2JobsImportJobIdFinishPostError} when the API answers
   * with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link HudError} when no usable response was produced: a connection failure, a timeout,
   * a body that would not decode, a value that would not encode, or a credential that could not be
   * obtained
   */
  finishImportedJobV2JobsImportJobIdFinishPost(
    request: Jobs.FinishImportedJobV2JobsImportJobIdFinishPostRequest,
    options?: RequestOptions,
  ): ApiPromise<JobImportFinishResponse, Jobs.FinishImportedJobV2JobsImportJobIdFinishPostError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/v2/jobs/import/{job_id}/finish"),
        auth: noneAuth,
        pathParams: [{ name: "job_id", value: request.jobId, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: jobImportFinishResponseSchema },
        errorFactory: Jobs.FinishImportedJobV2JobsImportJobIdFinishPostError,
      },
      options,
    );
  }

  /**
   * Finish Imported Trace
   *
   * @remarks
   * Record the outcome of one imported trace after its trajectory is uploaded.
   *
   * @returns Successful Response
   *
   * @throws {@link Jobs.FinishImportedTraceV2JobsImportJobIdTracesTraceIdFinishPostError} when the
   * API answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link HudError} when no usable response was produced: a connection failure, a timeout,
   * a body that would not decode, a value that would not encode, or a credential that could not be
   * obtained
   */
  finishImportedTraceV2JobsImportJobIdTracesTraceIdFinishPost(
    request: Jobs.FinishImportedTraceV2JobsImportJobIdTracesTraceIdFinishPostRequest,
    options?: RequestOptions,
  ): ApiPromise<
    JobImportTraceResultResponse,
    Jobs.FinishImportedTraceV2JobsImportJobIdTracesTraceIdFinishPostError
  > {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/v2/jobs/import/{job_id}/traces/{trace_id}/finish"),
        auth: noneAuth,
        pathParams: [
          { name: "job_id", value: request.jobId, schema: s.string() },
          { name: "trace_id", value: request.traceId, schema: s.string() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: jobImportTraceResultInternalSchema },
      },
      {
        success: { kind: "json", schema: jobImportTraceResultResponseSchema },
        errorFactory: Jobs.FinishImportedTraceV2JobsImportJobIdTracesTraceIdFinishPostError,
      },
      options,
    );
  }

  /**
   * Get Job Chart Data
   *
   * @remarks
   * Get per-trace reward data points for charting a job's results.
   *
   * @returns Successful Response
   *
   * @throws {@link Jobs.GetJobChartDataV2JobsJobIdChartDataGetError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link HudError} when no usable response was produced: a connection failure, a timeout,
   * a body that would not decode, a value that would not encode, or a credential that could not be
   * obtained
   */
  getJobChartDataV2JobsJobIdChartDataGet(
    request: Jobs.GetJobChartDataV2JobsJobIdChartDataGetRequest,
    options?: RequestOptions,
  ): ApiPromise<ChartDataResponse, Jobs.GetJobChartDataV2JobsJobIdChartDataGetError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v2/jobs/{job_id}/chart-data"),
        auth: noneAuth,
        pathParams: [{ name: "job_id", value: request.jobId, schema: s.string() }],
        query: [{ name: "limit", value: request.limit, schema: s.defaulted(s.int(), 5000) }],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: chartDataResponseSchema },
        errorFactory: Jobs.GetJobChartDataV2JobsJobIdChartDataGetError,
      },
      options,
    );
  }

  /**
   * Get Job Entity Links
   *
   * @remarks
   * List tasksets and registries linked to a job.
   *
   * @returns Successful Response
   *
   * @throws {@link Jobs.GetJobEntityLinksV2JobsJobIdEntityLinksGetError} when the API answers with
   * an error status — narrow on `err.payload.kind`
   *
   * @throws {@link HudError} when no usable response was produced: a connection failure, a timeout,
   * a body that would not decode, a value that would not encode, or a credential that could not be
   * obtained
   */
  getJobEntityLinksV2JobsJobIdEntityLinksGet(
    request: Jobs.GetJobEntityLinksV2JobsJobIdEntityLinksGetRequest,
    options?: RequestOptions,
  ): ApiPromise<JobEntityLinksResponse, Jobs.GetJobEntityLinksV2JobsJobIdEntityLinksGetError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v2/jobs/{job_id}/entity-links"),
        auth: noneAuth,
        pathParams: [{ name: "job_id", value: request.jobId, schema: s.string() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: jobEntityLinksResponseSchema },
        errorFactory: Jobs.GetJobEntityLinksV2JobsJobIdEntityLinksGetError,
      },
      options,
    );
  }

  /**
   * Get Job Taskset Coverage
   *
   * @remarks
   * Get per-task coverage of the job's taskset, including unattempted tasks.
   *
   * @returns Successful Response
   *
   * @throws {@link Jobs.GetJobTasksetCoverageV2JobsJobIdTasksetCoverageGetError} when the API
   * answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link HudError} when no usable response was produced: a connection failure, a timeout,
   * a body that would not decode, a value that would not encode, or a credential that could not be
   * obtained
   */
  getJobTasksetCoverageV2JobsJobIdTasksetCoverageGet(
    request: Jobs.GetJobTasksetCoverageV2JobsJobIdTasksetCoverageGetRequest,
    options?: RequestOptions,
  ): ApiPromise<TasksetCoverageResponse, Jobs.GetJobTasksetCoverageV2JobsJobIdTasksetCoverageGetError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v2/jobs/{job_id}/taskset-coverage"),
        auth: noneAuth,
        pathParams: [{ name: "job_id", value: request.jobId, schema: s.string() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: tasksetCoverageResponseSchema },
        errorFactory: Jobs.GetJobTasksetCoverageV2JobsJobIdTasksetCoverageGetError,
      },
      options,
    );
  }

  /**
   * Get Job Usage
   *
   * @remarks
   * Get per-trace compute and inference usage for a job.
   *
   * @returns Successful Response
   *
   * @throws {@link Jobs.GetJobUsageV2JobsJobIdUsageGetError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link HudError} when no usable response was produced: a connection failure, a timeout,
   * a body that would not decode, a value that would not encode, or a credential that could not be
   * obtained
   */
  getJobUsageV2JobsJobIdUsageGet(
    request: Jobs.GetJobUsageV2JobsJobIdUsageGetRequest,
    options?: RequestOptions,
  ): ApiPromise<JobUsageResponse, Jobs.GetJobUsageV2JobsJobIdUsageGetError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v2/jobs/{job_id}/usage"),
        auth: noneAuth,
        pathParams: [{ name: "job_id", value: request.jobId, schema: s.string() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: jobUsageResponseSchema },
        errorFactory: Jobs.GetJobUsageV2JobsJobIdUsageGetError,
      },
      options,
    );
  }

  /**
   * Get Job
   *
   * @remarks
   * Get a job by id.
   *
   * @returns Successful Response
   *
   * @throws {@link Jobs.GetJobV2JobsJobIdGetError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link HudError} when no usable response was produced: a connection failure, a timeout,
   * a body that would not decode, a value that would not encode, or a credential that could not be
   * obtained
   */
  getJobV2JobsJobIdGet(
    request: Jobs.GetJobV2JobsJobIdGetRequest,
    options?: RequestOptions,
  ): ApiPromise<JobResponse, Jobs.GetJobV2JobsJobIdGetError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v2/jobs/{job_id}"),
        auth: noneAuth,
        pathParams: [{ name: "job_id", value: request.jobId, schema: s.string() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: jobResponseSchema },
        errorFactory: Jobs.GetJobV2JobsJobIdGetError,
      },
      options,
    );
  }

  /**
   * Import Job
   *
   * @remarks
   * Add runs done outside HUD to an imported job, creating the job on first call.
   *
   * Each trace is linked to its task by content digest and starts running. A running trace with no
   * span upload for an hour is errored, so add traces as they are uploaded rather than all at once.
   * Retried traces are reported as already imported.
   *
   * @returns Successful Response
   *
   * @throws {@link Jobs.ImportJobV2JobsImportPostError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link HudError} when no usable response was produced: a connection failure, a timeout,
   * a body that would not decode, a value that would not encode, or a credential that could not be
   * obtained
   */
  importJobV2JobsImportPost(
    request: Jobs.ImportJobV2JobsImportPostRequest,
    options?: RequestOptions,
  ): ApiPromise<JobImportResponse, Jobs.ImportJobV2JobsImportPostError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/v2/jobs/import"),
        auth: noneAuth,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: jobImportRequestInternalSchema },
      },
      {
        success: { kind: "json", schema: jobImportResponseSchema },
        errorFactory: Jobs.ImportJobV2JobsImportPostError,
      },
      options,
    );
  }

  /**
   * Invalidate Job
   *
   * @remarks
   * Mark every trace in this job as invalid (excluded from leaderboards).
   *
   * @returns Successful Response
   *
   * @throws {@link Jobs.InvalidateJobV2JobsJobIdInvalidatePostError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link HudError} when no usable response was produced: a connection failure, a timeout,
   * a body that would not decode, a value that would not encode, or a credential that could not be
   * obtained
   */
  invalidateJobV2JobsJobIdInvalidatePost(
    request: Jobs.InvalidateJobV2JobsJobIdInvalidatePostRequest,
    options?: RequestOptions,
  ): ApiPromise<BatchValidateResponse, Jobs.InvalidateJobV2JobsJobIdInvalidatePostError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/v2/jobs/{job_id}/invalidate"),
        auth: noneAuth,
        pathParams: [{ name: "job_id", value: request.jobId, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: batchValidateResponseSchema },
        errorFactory: Jobs.InvalidateJobV2JobsJobIdInvalidatePostError,
      },
      options,
    );
  }

  /**
   * Job Summary
   *
   * @remarks
   * Get aggregate trace statistics for a job.
   *
   * @returns Successful Response
   *
   * @throws {@link Jobs.JobSummaryV2JobsJobIdSummaryGetError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link HudError} when no usable response was produced: a connection failure, a timeout,
   * a body that would not decode, a value that would not encode, or a credential that could not be
   * obtained
   */
  jobSummaryV2JobsJobIdSummaryGet(
    request: Jobs.JobSummaryV2JobsJobIdSummaryGetRequest,
    options?: RequestOptions,
  ): ApiPromise<JobSummary, Jobs.JobSummaryV2JobsJobIdSummaryGetError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v2/jobs/{job_id}/summary"),
        auth: noneAuth,
        pathParams: [{ name: "job_id", value: request.jobId, schema: s.string() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: jobSummarySchema },
        errorFactory: Jobs.JobSummaryV2JobsJobIdSummaryGetError,
      },
      options,
    );
  }

  /**
   * List Active Jobs
   *
   * @remarks
   * List a bounded page of currently running jobs for the caller's team.
   *
   * @returns Successful Response
   *
   * @throws {@link Jobs.ListActiveJobsV2JobsActiveGetError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link HudError} when no usable response was produced: a connection failure, a timeout,
   * a body that would not decode, a value that would not encode, or a credential that could not be
   * obtained
   */
  listActiveJobsV2JobsActiveGet(
    request: Jobs.ListActiveJobsV2JobsActiveGetRequest = {},
    options?: RequestOptions,
  ): ApiPromise<JobResponse[], Jobs.ListActiveJobsV2JobsActiveGetError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v2/jobs/active"),
        auth: noneAuth,
        pathParams: [],
        query: [
          { name: "limit", value: request.limit, schema: s.defaulted(s.int(), 50) },
          { name: "offset", value: request.offset, schema: s.defaulted(s.int(), 0) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => jobResponseSchema)) },
        errorFactory: Jobs.ListActiveJobsV2JobsActiveGetError,
      },
      options,
    );
  }

  /**
   * List Enriched Jobs
   *
   * @remarks
   * List enriched taskset jobs; public-only viewers receive public jobs.
   *
   * @returns Successful Response
   *
   * @throws {@link Jobs.ListEnrichedJobsV2JobsEnrichedGetError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link HudError} when no usable response was produced: a connection failure, a timeout,
   * a body that would not decode, a value that would not encode, or a credential that could not be
   * obtained
   */
  listEnrichedJobsV2JobsEnrichedGet(
    request: Jobs.ListEnrichedJobsV2JobsEnrichedGetRequest,
    options?: RequestOptions,
  ): ApiPromise<TasksetJobsEnrichedResponse, Jobs.ListEnrichedJobsV2JobsEnrichedGetError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v2/jobs/enriched"),
        auth: noneAuth,
        pathParams: [],
        query: [
          { name: "taskset_id", value: request.tasksetId, schema: s.string() },
          { name: "limit", value: request.limit, schema: s.defaulted(s.int(), 50) },
          { name: "offset", value: request.offset, schema: s.defaulted(s.int(), 0) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: tasksetJobsEnrichedResponseSchema },
        errorFactory: Jobs.ListEnrichedJobsV2JobsEnrichedGetError,
      },
      options,
    );
  }

  /**
   * List Job Thumbnails
   *
   * @remarks
   * List trace thumbnails for a job with presigned image URLs.
   *
   * @returns Successful Response
   *
   * @throws {@link Jobs.ListJobThumbnailsV2JobsJobIdThumbnailsGetError} when the API answers with
   * an error status — narrow on `err.payload.kind`
   *
   * @throws {@link HudError} when no usable response was produced: a connection failure, a timeout,
   * a body that would not decode, a value that would not encode, or a credential that could not be
   * obtained
   */
  listJobThumbnailsV2JobsJobIdThumbnailsGet(
    request: Jobs.ListJobThumbnailsV2JobsJobIdThumbnailsGetRequest,
    options?: RequestOptions,
  ): ApiPromise<JobThumbnailsResponse, Jobs.ListJobThumbnailsV2JobsJobIdThumbnailsGetError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v2/jobs/{job_id}/thumbnails"),
        auth: noneAuth,
        pathParams: [{ name: "job_id", value: request.jobId, schema: s.string() }],
        query: [
          { name: "limit", value: request.limit, schema: s.defaulted(s.int(), 100) },
          { name: "offset", value: request.offset, schema: s.defaulted(s.int(), 0) },
          { name: "status", value: request.status, schema: s.optional(s.lazy(() => status11Schema)) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: jobThumbnailsResponseInternalSchema },
        errorFactory: Jobs.ListJobThumbnailsV2JobsJobIdThumbnailsGetError,
      },
      options,
    );
  }

  /**
   * List Job Traces
   *
   * @remarks
   * List traces belonging to a job.
   *
   * @returns Successful Response
   *
   * @throws {@link Jobs.ListJobTracesV2JobsJobIdTracesGetError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link HudError} when no usable response was produced: a connection failure, a timeout,
   * a body that would not decode, a value that would not encode, or a credential that could not be
   * obtained
   */
  listJobTracesV2JobsJobIdTracesGet(
    request: Jobs.ListJobTracesV2JobsJobIdTracesGetRequest,
    options?: RequestOptions,
  ): ApiPromise<PaginatedResponseTraceResponse, Jobs.ListJobTracesV2JobsJobIdTracesGetError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v2/jobs/{job_id}/traces"),
        auth: noneAuth,
        pathParams: [{ name: "job_id", value: request.jobId, schema: s.string() }],
        query: [
          { name: "limit", value: request.limit, schema: s.defaulted(s.int(), 50) },
          { name: "offset", value: request.offset, schema: s.defaulted(s.int(), 0) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: paginatedResponseTraceResponseInternalSchema },
        errorFactory: Jobs.ListJobTracesV2JobsJobIdTracesGetError,
      },
      options,
    );
  }

  /**
   * List Jobs
   *
   * @remarks
   * List jobs for the caller's team, optionally filtered by taskset or Project.
   *
   * @returns Successful Response
   *
   * @throws {@link Jobs.ListJobsV2JobsGetError} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link HudError} when no usable response was produced: a connection failure, a timeout,
   * a body that would not decode, a value that would not encode, or a credential that could not be
   * obtained
   */
  listJobsV2JobsGet(
    request: Jobs.ListJobsV2JobsGetRequest = {},
    options?: RequestOptions,
  ): ApiPromise<PaginatedResponseJobResponse, Jobs.ListJobsV2JobsGetError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v2/jobs"),
        auth: noneAuth,
        pathParams: [],
        query: [
          { name: "limit", value: request.limit, schema: s.defaulted(s.int(), 50) },
          { name: "offset", value: request.offset, schema: s.defaulted(s.int(), 0) },
          { name: "taskset_id", value: request.tasksetId, schema: s.optional(s.lazy(() => tasksetIdSchema)) },
          {
            name: "project_id",
            value: request.projectId,
            schema: s.optional(s.lazy(() => projectId1Schema)),
          },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: paginatedResponseJobResponseSchema },
        errorFactory: Jobs.ListJobsV2JobsGetError,
      },
      options,
    );
  }

  /**
   * Publish Job
   *
   * @remarks
   * Set ``jobs.public=true`` so the job is visible on the public taskset page.
   *
   * @returns Successful Response
   *
   * @throws {@link Jobs.PublishJobV2JobsJobIdPublishPostError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link HudError} when no usable response was produced: a connection failure, a timeout,
   * a body that would not decode, a value that would not encode, or a credential that could not be
   * obtained
   */
  publishJobV2JobsJobIdPublishPost(
    request: Jobs.PublishJobV2JobsJobIdPublishPostRequest,
    options?: RequestOptions,
  ): ApiPromise<PublishJobResponse, Jobs.PublishJobV2JobsJobIdPublishPostError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/v2/jobs/{job_id}/publish"),
        auth: noneAuth,
        pathParams: [{ name: "job_id", value: request.jobId, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: publishJobResponseSchema },
        errorFactory: Jobs.PublishJobV2JobsJobIdPublishPostError,
      },
      options,
    );
  }

  /**
   * Revalidate Job
   *
   * @remarks
   * Re-include every trace in this job in leaderboard calculations.
   *
   * @returns Successful Response
   *
   * @throws {@link Jobs.RevalidateJobV2JobsJobIdRevalidatePostError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link HudError} when no usable response was produced: a connection failure, a timeout,
   * a body that would not decode, a value that would not encode, or a credential that could not be
   * obtained
   */
  revalidateJobV2JobsJobIdRevalidatePost(
    request: Jobs.RevalidateJobV2JobsJobIdRevalidatePostRequest,
    options?: RequestOptions,
  ): ApiPromise<BatchValidateResponse, Jobs.RevalidateJobV2JobsJobIdRevalidatePostError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/v2/jobs/{job_id}/revalidate"),
        auth: noneAuth,
        pathParams: [{ name: "job_id", value: request.jobId, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: batchValidateResponseSchema },
        errorFactory: Jobs.RevalidateJobV2JobsJobIdRevalidatePostError,
      },
      options,
    );
  }

  /**
   * Unpublish Job
   *
   * @remarks
   * Set ``jobs.public=false``; the job and its traces return to invited-only visibility.
   *
   * @returns Successful Response
   *
   * @throws {@link Jobs.UnpublishJobV2JobsJobIdPublishDeleteError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link HudError} when no usable response was produced: a connection failure, a timeout,
   * a body that would not decode, a value that would not encode, or a credential that could not be
   * obtained
   */
  unpublishJobV2JobsJobIdPublishDelete(
    request: Jobs.UnpublishJobV2JobsJobIdPublishDeleteRequest,
    options?: RequestOptions,
  ): ApiPromise<StatusResponse, Jobs.UnpublishJobV2JobsJobIdPublishDeleteError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default("/v2/jobs/{job_id}/publish"),
        auth: noneAuth,
        pathParams: [{ name: "job_id", value: request.jobId, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: statusResponseSchema },
        errorFactory: Jobs.UnpublishJobV2JobsJobIdPublishDeleteError,
      },
      options,
    );
  }

  /**
   * Update Job
   *
   * @remarks
   * Update a job's mutable fields, such as its name.
   *
   * @returns Successful Response
   *
   * @throws {@link Jobs.UpdateJobV2JobsJobIdPatchError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link HudError} when no usable response was produced: a connection failure, a timeout,
   * a body that would not decode, a value that would not encode, or a credential that could not be
   * obtained
   */
  updateJobV2JobsJobIdPatch(
    request: Jobs.UpdateJobV2JobsJobIdPatchRequest,
    options?: RequestOptions,
  ): ApiPromise<JobResponse, Jobs.UpdateJobV2JobsJobIdPatchError> {
    return this.#rawClient.execute(
      {
        method: "PATCH",
        urlTemplate: this.#servers.default("/v2/jobs/{job_id}"),
        auth: noneAuth,
        pathParams: [{ name: "job_id", value: request.jobId, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: jobUpdateRequestSchema },
      },
      {
        success: { kind: "json", schema: jobResponseSchema },
        errorFactory: Jobs.UpdateJobV2JobsJobIdPatchError,
      },
      options,
    );
  }

  /**
   * Upload Imported Trajectory
   *
   * @remarks
   * Store an ATIF agent trajectory as an imported trace's telemetry.
   *
   * Upload it before finishing the trace. A trace keeps the first trajectory it receives; a
   * repeated upload reports `ingested: false`.
   *
   * @returns Successful Response
   *
   * @throws {@link Jobs.UploadImportedTrajectoryV2JobsImportJobIdTracesTraceIdTrajectoryPostError}
   * when the API answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link HudError} when no usable response was produced: a connection failure, a timeout,
   * a body that would not decode, a value that would not encode, or a credential that could not be
   * obtained
   */
  uploadImportedTrajectoryV2JobsImportJobIdTracesTraceIdTrajectoryPost(
    request: Jobs.UploadImportedTrajectoryV2JobsImportJobIdTracesTraceIdTrajectoryPostRequest,
    options?: RequestOptions,
  ): ApiPromise<
    JobImportTrajectoryResponse,
    Jobs.UploadImportedTrajectoryV2JobsImportJobIdTracesTraceIdTrajectoryPostError
  > {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/v2/jobs/import/{job_id}/traces/{trace_id}/trajectory"),
        auth: noneAuth,
        pathParams: [
          { name: "job_id", value: request.jobId, schema: s.string() },
          { name: "trace_id", value: request.traceId, schema: s.string() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: atifTrajectoryInternalSchema },
      },
      {
        success: { kind: "json", schema: jobImportTrajectoryResponseSchema },
        errorFactory: Jobs.UploadImportedTrajectoryV2JobsImportJobIdTracesTraceIdTrajectoryPostError,
      },
      options,
    );
  }
}

export namespace Jobs {
  export type EnrichJobsV2JobsEnrichPostRequest = {
    body: string[];
  };

  export const enrichJobsV2JobsEnrichPostRequestSchema: Schema<EnrichJobsV2JobsEnrichPostRequest> =
    s.lazySchema(() =>
      s.object<EnrichJobsV2JobsEnrichPostRequest>({
        body: s.array(s.string()).check(s.maxLength(100)),
      }),
    );

  export class EnrichJobsV2JobsEnrichPostError extends ApiError {
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

    static readonly errors: ErrorDecoders<EnrichJobsV2JobsEnrichPostError> = [
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

  export type FinishImportedJobV2JobsImportJobIdFinishPostRequest = {
    jobId: string;
  };

  export class FinishImportedJobV2JobsImportJobIdFinishPostError extends ApiError {
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

    static readonly errors: ErrorDecoders<FinishImportedJobV2JobsImportJobIdFinishPostError> = [
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

  export type FinishImportedTraceV2JobsImportJobIdTracesTraceIdFinishPostRequest = {
    jobId: string;
    traceId: string;
    body: JobImportTraceResult;
  };

  export class FinishImportedTraceV2JobsImportJobIdTracesTraceIdFinishPostError extends ApiError {
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

    static readonly errors: ErrorDecoders<FinishImportedTraceV2JobsImportJobIdTracesTraceIdFinishPostError> =
      [
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

  export type GetJobChartDataV2JobsJobIdChartDataGetRequest = {
    jobId: string;
    /** @default 5000 */
    limit?: number;
  };

  export const getJobChartDataV2JobsJobIdChartDataGetRequestSchema: Schema<GetJobChartDataV2JobsJobIdChartDataGetRequest> =
    s.lazySchema(() =>
      s.object<GetJobChartDataV2JobsJobIdChartDataGetRequest>({
        jobId: s.string(),
        limit: s.defaulted(s.int().check(s.gte(1), s.lte(10000)), 5000),
      }),
    );

  export class GetJobChartDataV2JobsJobIdChartDataGetError extends ApiError {
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

    static readonly errors: ErrorDecoders<GetJobChartDataV2JobsJobIdChartDataGetError> = [
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

  export type GetJobEntityLinksV2JobsJobIdEntityLinksGetRequest = {
    jobId: string;
  };

  export class GetJobEntityLinksV2JobsJobIdEntityLinksGetError extends ApiError {
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

    static readonly errors: ErrorDecoders<GetJobEntityLinksV2JobsJobIdEntityLinksGetError> = [
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

  export type GetJobTasksetCoverageV2JobsJobIdTasksetCoverageGetRequest = {
    jobId: string;
  };

  export class GetJobTasksetCoverageV2JobsJobIdTasksetCoverageGetError extends ApiError {
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

    static readonly errors: ErrorDecoders<GetJobTasksetCoverageV2JobsJobIdTasksetCoverageGetError> = [
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

  export type GetJobUsageV2JobsJobIdUsageGetRequest = {
    jobId: string;
  };

  export class GetJobUsageV2JobsJobIdUsageGetError extends ApiError {
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

    static readonly errors: ErrorDecoders<GetJobUsageV2JobsJobIdUsageGetError> = [
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

  export type GetJobV2JobsJobIdGetRequest = {
    jobId: string;
  };

  export class GetJobV2JobsJobIdGetError extends ApiError {
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

    static readonly errors: ErrorDecoders<GetJobV2JobsJobIdGetError> = [
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

  export type ImportJobV2JobsImportPostRequest = {
    body: JobImportRequest;
  };

  export class ImportJobV2JobsImportPostError extends ApiError {
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

    static readonly errors: ErrorDecoders<ImportJobV2JobsImportPostError> = [
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

  export type InvalidateJobV2JobsJobIdInvalidatePostRequest = {
    jobId: string;
  };

  export class InvalidateJobV2JobsJobIdInvalidatePostError extends ApiError {
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

    static readonly errors: ErrorDecoders<InvalidateJobV2JobsJobIdInvalidatePostError> = [
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

  export type JobSummaryV2JobsJobIdSummaryGetRequest = {
    jobId: string;
  };

  export class JobSummaryV2JobsJobIdSummaryGetError extends ApiError {
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

    static readonly errors: ErrorDecoders<JobSummaryV2JobsJobIdSummaryGetError> = [
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

  export type ListActiveJobsV2JobsActiveGetRequest = {
    /** @default 50 */
    limit?: number;
    /** @default 0 */
    offset?: number;
  };

  export const listActiveJobsV2JobsActiveGetRequestSchema: Schema<ListActiveJobsV2JobsActiveGetRequest> =
    s.lazySchema(() =>
      s.object<ListActiveJobsV2JobsActiveGetRequest>({
        limit: s.defaulted(s.int().check(s.gte(1), s.lte(100)), 50),
        offset: s.defaulted(s.int().check(s.gte(0), s.lte(2147483647)), 0),
      }),
    );

  export class ListActiveJobsV2JobsActiveGetError extends ApiError {
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

    static readonly errors: ErrorDecoders<ListActiveJobsV2JobsActiveGetError> = [
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

  export type ListEnrichedJobsV2JobsEnrichedGetRequest = {
    tasksetId: string;
    /** @default 50 */
    limit?: number;
    /** @default 0 */
    offset?: number;
  };

  export const listEnrichedJobsV2JobsEnrichedGetRequestSchema: Schema<ListEnrichedJobsV2JobsEnrichedGetRequest> =
    s.lazySchema(() =>
      s.object<ListEnrichedJobsV2JobsEnrichedGetRequest>({
        tasksetId: s.string(),
        limit: s.defaulted(s.int().check(s.gte(1), s.lte(1000)), 50),
        offset: s.defaulted(s.int().check(s.gte(0), s.lte(2147483647)), 0),
      }),
    );

  export class ListEnrichedJobsV2JobsEnrichedGetError extends ApiError {
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

    static readonly errors: ErrorDecoders<ListEnrichedJobsV2JobsEnrichedGetError> = [
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

  export type ListJobThumbnailsV2JobsJobIdThumbnailsGetRequest = {
    jobId: string;
    /** @default 100 */
    limit?: number;
    /** @default 0 */
    offset?: number;
    /** Only traces in these statuses; the category counts cover the same traces. */
    status?: Status11;
  };

  export const listJobThumbnailsV2JobsJobIdThumbnailsGetRequestSchema: Schema<ListJobThumbnailsV2JobsJobIdThumbnailsGetRequest> =
    s.lazySchema(() =>
      s.object<ListJobThumbnailsV2JobsJobIdThumbnailsGetRequest>({
        jobId: s.string(),
        limit: s.defaulted(s.int().check(s.gte(1), s.lte(1000)), 100),
        offset: s.defaulted(s.int().check(s.gte(0), s.lte(2147483647)), 0),
        status: s.optional(s.lazy(() => status11Schema)),
      }),
    );

  export class ListJobThumbnailsV2JobsJobIdThumbnailsGetError extends ApiError {
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

    static readonly errors: ErrorDecoders<ListJobThumbnailsV2JobsJobIdThumbnailsGetError> = [
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

  export type ListJobTracesV2JobsJobIdTracesGetRequest = {
    jobId: string;
    /** @default 50 */
    limit?: number;
    /** @default 0 */
    offset?: number;
  };

  export const listJobTracesV2JobsJobIdTracesGetRequestSchema: Schema<ListJobTracesV2JobsJobIdTracesGetRequest> =
    s.lazySchema(() =>
      s.object<ListJobTracesV2JobsJobIdTracesGetRequest>({
        jobId: s.string(),
        limit: s.defaulted(s.int().check(s.gte(1), s.lte(1000)), 50),
        offset: s.defaulted(s.int().check(s.gte(0), s.lte(2147483647)), 0),
      }),
    );

  export class ListJobTracesV2JobsJobIdTracesGetError extends ApiError {
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

    static readonly errors: ErrorDecoders<ListJobTracesV2JobsJobIdTracesGetError> = [
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

  export type ListJobsV2JobsGetRequest = {
    /** @default 50 */
    limit?: number;
    /** @default 0 */
    offset?: number;
    tasksetId?: TasksetId;
    /** Only jobs contained by this Project; omitted lists every Project */
    projectId?: ProjectId1;
  };

  export const listJobsV2JobsGetRequestSchema: Schema<ListJobsV2JobsGetRequest> = s.lazySchema(() =>
    s.object<ListJobsV2JobsGetRequest>({
      limit: s.defaulted(s.int().check(s.gte(1), s.lte(100)), 50),
      offset: s.defaulted(s.int().check(s.gte(0), s.lte(2147483647)), 0),
      tasksetId: s.optional(s.lazy(() => tasksetIdSchema)),
      projectId: s.optional(s.lazy(() => projectId1Schema)),
    }),
  );

  export class ListJobsV2JobsGetError extends ApiError {
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

    static readonly errors: ErrorDecoders<ListJobsV2JobsGetError> = [
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

  export type PublishJobV2JobsJobIdPublishPostRequest = {
    jobId: string;
  };

  export class PublishJobV2JobsJobIdPublishPostError extends ApiError {
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

    static readonly errors: ErrorDecoders<PublishJobV2JobsJobIdPublishPostError> = [
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

  export type RevalidateJobV2JobsJobIdRevalidatePostRequest = {
    jobId: string;
  };

  export class RevalidateJobV2JobsJobIdRevalidatePostError extends ApiError {
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

    static readonly errors: ErrorDecoders<RevalidateJobV2JobsJobIdRevalidatePostError> = [
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

  export type UnpublishJobV2JobsJobIdPublishDeleteRequest = {
    jobId: string;
  };

  export class UnpublishJobV2JobsJobIdPublishDeleteError extends ApiError {
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

    static readonly errors: ErrorDecoders<UnpublishJobV2JobsJobIdPublishDeleteError> = [
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

  export type UpdateJobV2JobsJobIdPatchRequest = {
    jobId: string;
    body: JobUpdateRequest;
  };

  export class UpdateJobV2JobsJobIdPatchError extends ApiError {
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

    static readonly errors: ErrorDecoders<UpdateJobV2JobsJobIdPatchError> = [
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

  export type UploadImportedTrajectoryV2JobsImportJobIdTracesTraceIdTrajectoryPostRequest = {
    jobId: string;
    traceId: string;
    body: AtifTrajectory;
  };

  export class UploadImportedTrajectoryV2JobsImportJobIdTracesTraceIdTrajectoryPostError extends ApiError {
    declare readonly payload:
      | Declared<"errorResponse", ErrorResponse>
      | Declared<"errorResponse2", ErrorResponse>
      | Declared<"errorResponse3", ErrorResponse>
      | Declared<"errorResponse4", ErrorResponse>
      | Declared<"errorResponse5", ErrorResponse>
      | Declared<"errorResponse6", ErrorResponse>
      | Declared<"httpValidationError", HttpValidationError>
      | Declared<"errorResponse7", ErrorResponse>
      | Declared<"errorResponse8", ErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<UploadImportedTrajectoryV2JobsImportJobIdTracesTraceIdTrajectoryPostError> =
      [
        { on: 400, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
        { on: 401, kind: "errorResponse2", decode: { kind: "json", schema: errorResponseSchema } },
        { on: 403, kind: "errorResponse3", decode: { kind: "json", schema: errorResponseSchema } },
        { on: 404, kind: "errorResponse4", decode: { kind: "json", schema: errorResponseSchema } },
        { on: 409, kind: "errorResponse5", decode: { kind: "json", schema: errorResponseSchema } },
        { on: 413, kind: "errorResponse6", decode: { kind: "json", schema: errorResponseSchema } },
        { on: 422, kind: "httpValidationError", decode: { kind: "json", schema: httpValidationErrorSchema } },
        { on: 429, kind: "errorResponse7", decode: { kind: "json", schema: errorResponseSchema } },
        { on: 503, kind: "errorResponse8", decode: { kind: "json", schema: errorResponseSchema } },
      ];
  }
}
