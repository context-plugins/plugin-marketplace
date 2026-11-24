import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import { artifactListInternalSchema, type ArtifactList } from "../models/artifact-list.js";
import { errorResponseSchema, type ErrorResponse } from "../models/error-response.js";
import { jobInternalSchema, type Job } from "../models/job.js";
import { messageResponseSchema, type MessageResponse } from "../models/message-response.js";
import { testListSchema, type TestList } from "../models/test-list.js";
import type { Servers } from "../servers.js";

/**
 * Endpoints for retrieving job details, artifacts, and test metadata associated with pipeline jobs.
 */
export class JobApi {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Cancel a job
   *
   * @remarks
   * Cancels a running job by its job number.
   *
   * @returns Job cancelled successfully
   *
   * @throws {@link JobApi.CancelJobError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link CircleCiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  cancelJob(
    request: JobApi.CancelJobRequest,
    options?: RequestOptions,
  ): ApiPromise<MessageResponse, JobApi.CancelJobError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.defaultCircleCiRestApiV2ContextApi(
          "/project/{project-slug}/job/{job-number}/cancel",
        ),
        auth: this.#auth.apiToken,
        pathParams: [
          { name: "project-slug", value: request.projectSlug, schema: s.string() },
          { name: "job-number", value: request.jobNumber, schema: s.int() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: messageResponseSchema },
        errorFactory: JobApi.CancelJobError,
      },
      options,
    );
  }

  /**
   * Get job details
   *
   * @remarks
   * Returns detailed information about a specific job, including its status, duration, and executor
   * configuration.
   *
   * @returns Successfully retrieved job details
   *
   * @throws {@link JobApi.GetJobError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link CircleCiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getJob(request: JobApi.GetJobRequest, options?: RequestOptions): ApiPromise<Job, JobApi.GetJobError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.defaultCircleCiRestApiV2ContextApi(
          "/project/{project-slug}/job/{job-number}",
        ),
        auth: this.#auth.apiToken,
        pathParams: [
          { name: "project-slug", value: request.projectSlug, schema: s.string() },
          { name: "job-number", value: request.jobNumber, schema: s.int() },
        ],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: jobInternalSchema },
        errorFactory: JobApi.GetJobError,
      },
      options,
    );
  }

  /**
   * List artifacts for a job
   *
   * @remarks
   * Returns a paginated list of artifacts produced by a given job.
   *
   * @returns Successfully retrieved artifacts
   *
   * @throws {@link JobApi.ListJobArtifactsError} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link CircleCiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listJobArtifacts(
    request: JobApi.ListJobArtifactsRequest,
    options?: RequestOptions,
  ): ApiPromise<ArtifactList, JobApi.ListJobArtifactsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.defaultCircleCiRestApiV2ContextApi(
          "/project/{project-slug}/{job-number}/artifacts",
        ),
        auth: this.#auth.apiToken,
        pathParams: [
          { name: "project-slug", value: request.projectSlug, schema: s.string() },
          { name: "job-number", value: request.jobNumber, schema: s.int() },
        ],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: artifactListInternalSchema },
        errorFactory: JobApi.ListJobArtifactsError,
      },
      options,
    );
  }

  /**
   * List test metadata for a job
   *
   * @remarks
   * Returns test metadata for a given job, collected from JUnit XML or similar test result files.
   *
   * @returns Successfully retrieved test metadata
   *
   * @throws {@link JobApi.ListJobTestsError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link CircleCiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listJobTests(
    request: JobApi.ListJobTestsRequest,
    options?: RequestOptions,
  ): ApiPromise<TestList, JobApi.ListJobTestsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.defaultCircleCiRestApiV2ContextApi(
          "/project/{project-slug}/{job-number}/tests",
        ),
        auth: this.#auth.apiToken,
        pathParams: [
          { name: "project-slug", value: request.projectSlug, schema: s.string() },
          { name: "job-number", value: request.jobNumber, schema: s.int() },
        ],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: testListSchema },
        errorFactory: JobApi.ListJobTestsError,
      },
      options,
    );
  }
}

export namespace JobApi {
  export type CancelJobRequest = {
    /**
     * The project slug in the form vcs-slug/org-name/repo-name (e.g.,
     * gh/CircleCI-Public/api-preview-docs)
     */
    projectSlug: string;
    /** The number of the job */
    jobNumber: number;
  };

  export class CancelJobError extends ApiError {
    declare readonly payload: Declared<"errorResponse", ErrorResponse> | Undeclared;

    static readonly errors: ErrorDecoders<CancelJobError> = [
      { on: 401, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export type GetJobRequest = {
    /**
     * The project slug in the form vcs-slug/org-name/repo-name (e.g.,
     * gh/CircleCI-Public/api-preview-docs)
     */
    projectSlug: string;
    /** The number of the job */
    jobNumber: number;
  };

  export class GetJobError extends ApiError {
    declare readonly payload:
      | Declared<"errorResponse", ErrorResponse>
      | Declared<"errorResponse2", ErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetJobError> = [
      { on: 401, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 404, kind: "errorResponse2", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export type ListJobArtifactsRequest = {
    /**
     * The project slug in the form vcs-slug/org-name/repo-name (e.g.,
     * gh/CircleCI-Public/api-preview-docs)
     */
    projectSlug: string;
    /** The number of the job */
    jobNumber: number;
  };

  export class ListJobArtifactsError extends ApiError {
    declare readonly payload: Declared<"errorResponse", ErrorResponse> | Undeclared;

    static readonly errors: ErrorDecoders<ListJobArtifactsError> = [
      { on: 401, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export type ListJobTestsRequest = {
    /**
     * The project slug in the form vcs-slug/org-name/repo-name (e.g.,
     * gh/CircleCI-Public/api-preview-docs)
     */
    projectSlug: string;
    /** The number of the job */
    jobNumber: number;
  };

  export class ListJobTestsError extends ApiError {
    declare readonly payload: Declared<"errorResponse", ErrorResponse> | Undeclared;

    static readonly errors: ErrorDecoders<ListJobTestsError> = [
      { on: 401, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }
}
