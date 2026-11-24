import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { apiErrorModelSchema, type ApiErrorModel } from "../models/api-error-model.js";
import { Format, formatSchema } from "../models/format.js";
import {
  statusZillapiZillowPropertyDataJobsApiSchema,
  type StatusZillapiZillowPropertyDataJobsApi,
} from "../models/status-zillapi-zillow-property-data-jobs-api.js";
import { typeSchema, type Type } from "../models/type.js";
import { v1JobsResponseSchema, type V1JobsResponse } from "../models/v1-jobs-response.js";
import { v1JobsResponse1Schema, type V1JobsResponse1 } from "../models/v1-jobs-response1.js";
import {
  v1JobsResultsResponseSchema,
  type V1JobsResultsResponse,
} from "../models/v1-jobs-results-response.js";
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
   * Get a job by id
   *
   * @remarks
   * Fetch a single job row including status, result_count, chain_stage, and timestamps. For
   * chained_search_detail jobs, status: succeeded means both stages finished. Control-plane
   * endpoint — free.
   *
   * @returns OK
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link ZillapiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getJob(request: Jobs.GetJobRequest, options?: RequestOptions): ApiPromise<V1JobsResponse1, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v1/jobs/{id}"),
        auth: this.#auth.bearerAuth,
        pathParams: [{ name: "id", value: request.id, schema: s.string() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: v1JobsResponse1Schema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Get job results
   *
   * @remarks
   * Fetch paginated results for a succeeded job in JSON, CSV, or NDJSON. Returns 409 job_not_ready
   * until the job status is succeeded. Free — billing happens once when the job completes, not on
   * result reads.
   *
   * @returns Job results
   *
   * @throws {@link Jobs.GetJobResultsError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link ZillapiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getJobResults(
    request: Jobs.GetJobResultsRequest,
    options?: RequestOptions,
  ): ApiPromise<V1JobsResultsResponse, Jobs.GetJobResultsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v1/jobs/{id}/results"),
        auth: this.#auth.bearerAuth,
        pathParams: [{ name: "id", value: request.id, schema: s.string() }],
        query: [
          { name: "limit", value: request.limit, schema: s.defaulted(s.int(), 100) },
          { name: "offset", value: request.offset, schema: s.defaulted(s.int(), 0) },
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: v1JobsResultsResponseSchema },
        errorFactory: Jobs.GetJobResultsError,
      },
      options,
    );
  }

  /**
   * List async jobs
   *
   * @remarks
   * List your async jobs filtered by status, type, and creation time. Control-plane endpoint —
   * free, does not consume credits.
   *
   * @returns OK
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link ZillapiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listJobs(
    request: Jobs.ListJobsRequest = {},
    options?: RequestOptions,
  ): ApiPromise<V1JobsResponse, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v1/jobs"),
        auth: this.#auth.bearerAuth,
        pathParams: [],
        query: [
          {
            name: "status",
            value: request.status,
            schema: s.optional(s.lazy(() => statusZillapiZillowPropertyDataJobsApiSchema)),
          },
          { name: "type", value: request.type, schema: s.optional(s.lazy(() => typeSchema)) },
          { name: "since", value: request.since, schema: s.optional(s.dateTime()) },
          { name: "limit", value: request.limit, schema: s.defaulted(s.int(), 50) },
          { name: "offset", value: request.offset, schema: s.defaulted(s.int(), 0) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: v1JobsResponseSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }
}

export namespace Jobs {
  export type GetJobRequest = {
    /** Job UUID. */
    id: string;
  };

  export type GetJobResultsRequest = {
    /** Job UUID. */
    id: string;
    /** Page size (max 1000). @default 100 */
    limit?: number;
    /** Pagination offset (unbounded). @default 0 */
    offset?: number;
    /** Response format. @default Format.Json */
    format?: Format;
  };

  export const getJobResultsRequestSchema: Schema<GetJobResultsRequest> = s.lazySchema(() =>
    s.object<GetJobResultsRequest>({
      id: s.string(),
      limit: s.defaulted(s.int().check(s.lte(1000)), 100),
      offset: s.defaulted(s.int(), 0),
      format: s.defaulted(formatSchema, Format.Json),
    }),
  );

  export class GetJobResultsError extends ApiError {
    declare readonly payload:
      | Declared<"apiErrorModel", ApiErrorModel>
      | Declared<"apiErrorModel2", ApiErrorModel>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetJobResultsError> = [
      { on: 404, kind: "apiErrorModel", decode: { kind: "json", schema: apiErrorModelSchema } },
      { on: 409, kind: "apiErrorModel2", decode: { kind: "json", schema: apiErrorModelSchema } },
    ];
  }

  export type ListJobsRequest = {
    /** Filter by job status. */
    status?: StatusZillapiZillowPropertyDataJobsApi;
    /** Filter by job type. */
    type?: Type;
    /** Return jobs with created_at >= this ISO timestamp. */
    since?: Date;
    /** Page size (max 500). @default 50 */
    limit?: number;
    /** Pagination offset. @default 0 */
    offset?: number;
  };

  export const listJobsRequestSchema: Schema<ListJobsRequest> = s.lazySchema(() =>
    s.object<ListJobsRequest>({
      status: s.optional(s.lazy(() => statusZillapiZillowPropertyDataJobsApiSchema)),
      type: s.optional(s.lazy(() => typeSchema)),
      since: s.optional(s.dateTime()),
      limit: s.defaulted(s.int().check(s.lte(500)), 50),
      offset: s.defaulted(s.int(), 0),
    }),
  );
}
