import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import * as s from "../core/validation/index.js";
import {
  batchStatusResponseInternalSchema,
  type BatchStatusResponse,
} from "../models/batch-status-response.js";
import { errorResponseSchema, type ErrorResponse } from "../models/error-response.js";
import { jobStatusResponseInternalSchema, type JobStatusResponse } from "../models/job-status-response.js";
import type { Servers } from "../servers.js";

/**
 * Async job and batch status polling
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
   * Poll batch status
   *
   * @remarks
   * Returns the current status of a batch capture request, including per-URL job statuses and
   * progress.
   *
   * @returns Batch status
   *
   * @throws {@link Jobs.GetBatchStatusError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link RendexError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getBatchStatus(
    request: Jobs.GetBatchStatusRequest,
    options?: RequestOptions,
  ): ApiPromise<BatchStatusResponse, Jobs.GetBatchStatusError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v1/batches/{batchId}"),
        auth: this.#auth.bearerAuth,
        pathParams: [{ name: "batchId", value: request.batchId, schema: s.string() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: batchStatusResponseInternalSchema },
        errorFactory: Jobs.GetBatchStatusError,
      },
      options,
    );
  }

  /**
   * Poll async job status
   *
   * @remarks
   * Returns the current status of an async screenshot job. When status is `completed`, the response
   * includes the image URL or base64 data.
   *
   * @returns Job status
   *
   * @throws {@link Jobs.GetJobStatusError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link RendexError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getJobStatus(
    request: Jobs.GetJobStatusRequest,
    options?: RequestOptions,
  ): ApiPromise<JobStatusResponse, Jobs.GetJobStatusError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v1/jobs/{jobId}"),
        auth: this.#auth.bearerAuth,
        pathParams: [{ name: "jobId", value: request.jobId, schema: s.string() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: jobStatusResponseInternalSchema },
        errorFactory: Jobs.GetJobStatusError,
      },
      options,
    );
  }
}

export namespace Jobs {
  export type GetBatchStatusRequest = {
    /** Batch identifier (returned by `POST /v1/screenshot/batch`) */
    batchId: string;
  };

  export class GetBatchStatusError extends ApiError {
    declare readonly payload:
      | Declared<"errorResponse", ErrorResponse>
      | Declared<"errorResponse2", ErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetBatchStatusError> = [
      { on: 401, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 404, kind: "errorResponse2", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export type GetJobStatusRequest = {
    /** Async job identifier (returned when `async: true`) */
    jobId: string;
  };

  export class GetJobStatusError extends ApiError {
    declare readonly payload:
      | Declared<"errorResponse", ErrorResponse>
      | Declared<"errorResponse2", ErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetJobStatusError> = [
      { on: 401, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 404, kind: "errorResponse2", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }
}
