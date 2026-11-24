import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { anyAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import { jobJobSchema, type JobJob } from "../models/job-job.js";
import { jobsResponseSchema, type JobsResponse } from "../models/jobs-response.js";
import { jobsResponse1Schema, type JobsResponse1 } from "../models/jobs-response1.js";
import type { Servers } from "../servers.js";

export class Jobs {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Get jobs
   *
   * @returns Paginated jobs
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link MrScraperError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getJobs(request: Jobs.GetJobsRequest = {}, options?: RequestOptions): ApiPromise<JobsResponse, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.defaultScraperServiceGatewayAuthApi("/jobs"),
        auth: anyAuth(this.#auth.apiKey, this.#auth.bearerAuth),
        pathParams: [],
        query: [
          { name: "pageSize", value: request.pageSize, schema: s.optional(s.int()) },
          { name: "page", value: request.page, schema: s.optional(s.int()) },
          { name: "sortField", value: request.sortField, schema: s.optional(s.string()) },
          { name: "sortOrder", value: request.sortOrder, schema: s.optional(s.string()) },
          { name: "search", value: request.search, schema: s.optional(s.string()) },
          { name: "startAt", value: request.startAt, schema: s.optional(s.string()) },
          { name: "endAt", value: request.endAt, schema: s.optional(s.string()) },
          { name: "dateRangeColumn", value: request.dateRangeColumn, schema: s.optional(s.string()) },
          { name: "name", value: request.name, schema: s.optional(s.string()) },
          { name: "status", value: request.status, schema: s.optional(s.string()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: jobsResponseSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Get jobs by id
   *
   * @returns Job retrieved
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link MrScraperError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getJobsById(
    request: Jobs.GetJobsByIdRequest,
    options?: RequestOptions,
  ): ApiPromise<JobsResponse1, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.defaultScraperServiceGatewayAuthApi("/jobs/{id}"),
        auth: anyAuth(this.#auth.apiKey, this.#auth.bearerAuth),
        pathParams: [{ name: "id", value: request.id, schema: s.int() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: jobsResponse1Schema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Create jobs
   *
   * @returns Job created
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link MrScraperError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  postJobs(request: Jobs.PostJobsRequest, options?: RequestOptions): ApiPromise<JobsResponse1, ApiError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.defaultScraperServiceGatewayAuthApi("/jobs"),
        auth: anyAuth(this.#auth.apiKey, this.#auth.bearerAuth),
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: jobJobSchema },
      },
      {
        success: { kind: "json", schema: jobsResponse1Schema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Replace jobs by id
   *
   * @returns Job updated
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link MrScraperError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  putJobsById(
    request: Jobs.PutJobsByIdRequest,
    options?: RequestOptions,
  ): ApiPromise<JobsResponse1, ApiError> {
    return this.#rawClient.execute(
      {
        method: "PUT",
        urlTemplate: this.#servers.defaultScraperServiceGatewayAuthApi("/jobs/{id}"),
        auth: anyAuth(this.#auth.apiKey, this.#auth.bearerAuth),
        pathParams: [{ name: "id", value: request.id, schema: s.int() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: jobJobSchema },
      },
      {
        success: { kind: "json", schema: jobsResponse1Schema },
        errorFactory: ApiError,
      },
      options,
    );
  }
}

export namespace Jobs {
  export type GetJobsRequest = {
    /** Page size */
    pageSize?: number;
    /** Page number */
    page?: number;
    /** Sort field */
    sortField?: string;
    /** Sort order (ASC/DESC) */
    sortOrder?: string;
    /** Search term */
    search?: string;
    /** Start date for created_at filter */
    startAt?: string;
    /** End date for created_at filter */
    endAt?: string;
    /** Custom date range column */
    dateRangeColumn?: string;
    /** Filter by name */
    name?: string;
    /** Filter by status */
    status?: string;
  };

  export type GetJobsByIdRequest = {
    /** Job ID */
    id: number;
  };

  export type PostJobsRequest = {
    /** Job object (ID will be auto-generated, do not include) */
    body: JobJob;
  };

  export type PutJobsByIdRequest = {
    /** Job ID */
    id: number;
    /** Job object */
    body: JobJob;
  };
}
