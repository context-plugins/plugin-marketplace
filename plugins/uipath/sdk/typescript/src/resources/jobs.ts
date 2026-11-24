import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { errorResponseSchema, type ErrorResponse } from "../models/error-response.js";
import { jobSchema, type Job } from "../models/job.js";
import { oDataJobCollectionSchema, type ODataJobCollection } from "../models/odata-job-collection.js";
import { startJobsRequestSchema, type StartJobsRequest } from "../models/start-jobs-request.js";
import { stopJobRequestSchema, type StopJobRequest } from "../models/stop-job-request.js";
import type { Servers } from "../servers.js";

/**
 * Manage automation job execution, including starting, stopping, and querying job state
 */
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
   * UiPath Get a Job by ID
   *
   * @remarks
   * Retrieves a single job by its unique integer identifier. Returns full job details including
   * state, start and end times, robot information, and associated process.
   *
   * @returns The requested job
   *
   * @throws {@link Jobs.GetJobError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link UiPathError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getJob(request: Jobs.GetJobRequest, options?: RequestOptions): ApiPromise<Job, Jobs.GetJobError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/odata/Jobs({key})"),
        auth: this.#auth.bearerAuth,
        pathParams: [{ name: "key", value: request.key, schema: s.int() }],
        query: [],
        headers: [
          {
            name: "X-UIPATH-OrganizationUnitId",
            value: request.xUipathOrganizationUnitId,
            schema: s.optional(s.int()),
          },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: jobSchema },
        errorFactory: Jobs.GetJobError,
      },
      options,
    );
  }

  /**
   * UiPath List Jobs
   *
   * @remarks
   * Retrieves a list of jobs in the current folder. Supports OData query options including $filter,
   * $orderby, $top, $skip, and $select to control the result set. Jobs represent individual
   * executions of automation processes by robots.
   *
   * @returns A list of jobs matching the query criteria
   *
   * @throws {@link Jobs.ListJobsError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link UiPathError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listJobs(
    request: Jobs.ListJobsRequest = {},
    options?: RequestOptions,
  ): ApiPromise<ODataJobCollection, Jobs.ListJobsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/odata/Jobs"),
        auth: this.#auth.bearerAuth,
        pathParams: [],
        query: [
          { name: "$filter", value: request.filter, schema: s.optional(s.string()) },
          { name: "$orderby", value: request.orderby, schema: s.optional(s.string()) },
          { name: "$top", value: request.top, schema: s.optional(s.int()) },
          { name: "$skip", value: request.skip, schema: s.optional(s.int()) },
          { name: "$select", value: request.select, schema: s.optional(s.string()) },
        ],
        headers: [
          {
            name: "X-UIPATH-OrganizationUnitId",
            value: request.xUipathOrganizationUnitId,
            schema: s.optional(s.int()),
          },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: oDataJobCollectionSchema },
        errorFactory: Jobs.ListJobsError,
      },
      options,
    );
  }

  /**
   * UiPath Start Jobs
   *
   * @remarks
   * Starts one or more automation jobs for a specified process. Allows specifying the strategy for
   * robot allocation (e.g., ModernJobsCount, All, RobotIds), input arguments for the process, job
   * priority, and the target folder. Returns details of the created jobs.
   *
   * @returns Jobs were successfully created and started
   *
   * @throws {@link Jobs.StartJobsError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link UiPathError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  startJobs(
    request: Jobs.StartJobsRequestParams,
    options?: RequestOptions,
  ): ApiPromise<ODataJobCollection, Jobs.StartJobsError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/odata/Jobs/UiPath.Server.Configuration.OData.StartJobs"),
        auth: this.#auth.bearerAuth,
        pathParams: [],
        query: [],
        headers: [
          {
            name: "X-UIPATH-OrganizationUnitId",
            value: request.xUipathOrganizationUnitId,
            schema: s.optional(s.int()),
          },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "json", value: request.body, schema: startJobsRequestSchema },
      },
      {
        success: { kind: "json", schema: oDataJobCollectionSchema },
        errorFactory: Jobs.StartJobsError,
      },
      options,
    );
  }

  /**
   * UiPath Stop a Job
   *
   * @remarks
   * Sends a stop signal to a running job. The strategy can be SoftStop (waits for the current
   * activity to finish) or Kill (forcefully terminates the job immediately). Requires the job ID.
   *
   * @returns Stop signal sent successfully
   *
   * @throws {@link Jobs.StopJobError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link UiPathError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  stopJob(
    request: Jobs.StopJobRequestParams,
    options?: RequestOptions,
  ): ApiPromise<undefined, Jobs.StopJobError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/odata/Jobs/UiPath.Server.Configuration.OData.StopJob"),
        auth: this.#auth.bearerAuth,
        pathParams: [],
        query: [],
        headers: [
          {
            name: "X-UIPATH-OrganizationUnitId",
            value: request.xUipathOrganizationUnitId,
            schema: s.optional(s.int()),
          },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "json", value: request.body, schema: stopJobRequestSchema },
      },
      {
        success: { kind: "empty" },
        errorFactory: Jobs.StopJobError,
      },
      options,
    );
  }
}

export namespace Jobs {
  export type GetJobRequest = {
    /** The unique integer identifier of the entity */
    key: number;
    /**
     * The numeric ID of the folder context for the request. Required when accessing folder-scoped
     * resources. Retrieve folder IDs using the /odata/Folders endpoint.
     */
    xUipathOrganizationUnitId?: number;
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

  export type ListJobsRequest = {
    /** OData filter expression to narrow results (e.g., State eq 'Running') */
    filter?: string;
    /** OData orderby clause (e.g., CreationTime desc) */
    orderby?: string;
    /** Maximum number of records to return (default 100, max 1000) */
    top?: number;
    /** Number of records to skip for pagination */
    skip?: number;
    /** Comma-separated list of property names to include in the response */
    select?: string;
    /**
     * The numeric ID of the folder context for the request. Required when accessing folder-scoped
     * resources. Retrieve folder IDs using the /odata/Folders endpoint.
     */
    xUipathOrganizationUnitId?: number;
  };

  export const listJobsRequestSchema: Schema<ListJobsRequest> = s.lazySchema(() =>
    s.object<ListJobsRequest>({
      filter: s.optional(s.string()),
      orderby: s.optional(s.string()),
      top: s.optional(s.int().check(s.gte(1), s.lte(1000))),
      skip: s.optional(s.int().check(s.gte(0))),
      select: s.optional(s.string()),
      xUipathOrganizationUnitId: s.optional(s.int()),
    }),
  );

  export class ListJobsError extends ApiError {
    declare readonly payload:
      | Declared<"errorResponse", ErrorResponse>
      | Declared<"errorResponse2", ErrorResponse>
      | Declared<"errorResponse3", ErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<ListJobsError> = [
      { on: 400, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 401, kind: "errorResponse2", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 403, kind: "errorResponse3", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export type StartJobsRequestParams = {
    /**
     * The numeric ID of the folder context for the request. Required when accessing folder-scoped
     * resources. Retrieve folder IDs using the /odata/Folders endpoint.
     */
    xUipathOrganizationUnitId?: number;
    body: StartJobsRequest;
  };

  export class StartJobsError extends ApiError {
    declare readonly payload:
      | Declared<"errorResponse", ErrorResponse>
      | Declared<"errorResponse2", ErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<StartJobsError> = [
      { on: 400, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 401, kind: "errorResponse2", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export type StopJobRequestParams = {
    /**
     * The numeric ID of the folder context for the request. Required when accessing folder-scoped
     * resources. Retrieve folder IDs using the /odata/Folders endpoint.
     */
    xUipathOrganizationUnitId?: number;
    body: StopJobRequest;
  };

  export class StopJobError extends ApiError {
    declare readonly payload:
      | Declared<"errorResponse", ErrorResponse>
      | Declared<"errorResponse2", ErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<StopJobError> = [
      { on: 400, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 401, kind: "errorResponse2", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }
}
