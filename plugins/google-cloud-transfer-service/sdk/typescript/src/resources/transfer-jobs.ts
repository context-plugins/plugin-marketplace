import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { anyAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import { googleRpcErrorSchema, type GoogleRpcError } from "../models/google-rpc-error.js";
import {
  listTransferJobsResponseSchema,
  type ListTransferJobsResponse,
} from "../models/list-transfer-jobs-response.js";
import { operationSchema, type Operation } from "../models/operation.js";
import {
  runTransferJobRequestSchema,
  type RunTransferJobRequest,
} from "../models/run-transfer-job-request.js";
import { transferJobSchema, type TransferJob } from "../models/transfer-job.js";
import {
  updateTransferJobRequestSchema,
  type UpdateTransferJobRequest,
} from "../models/update-transfer-job-request.js";
import type { Servers } from "../servers.js";

export class TransferJobs {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Create transferJobs
   *
   * @remarks
   * Creates a transfer job that runs periodically.
   *
   * @returns Successful response
   *
   * @throws {@link TransferJobs.StoragetransferTransferJobsCreateError} when the API answers with
   * an error status — narrow on `err.payload.kind`
   *
   * @throws {@link GoogleCloudStorageTransferServiceError} when no usable response was produced: a
   * connection failure, a timeout, a body that would not decode, a value that would not encode, or
   * a credential that could not be obtained
   */
  storagetransferTransferJobsCreate(
    request: TransferJobs.StoragetransferTransferJobsCreateRequest,
    options?: RequestOptions,
  ): ApiPromise<TransferJob, TransferJobs.StoragetransferTransferJobsCreateError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/v1/transferJobs"),
        auth: anyAuth(this.#auth.oauth2, this.#auth.apiKey),
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: transferJobSchema },
      },
      {
        success: { kind: "json", schema: transferJobSchema },
        errorFactory: TransferJobs.StoragetransferTransferJobsCreateError,
      },
      options,
    );
  }

  /**
   * Delete transferJobs
   *
   * @remarks
   * Deletes a transfer job. Deleting a transfer job sets its status to DELETED.
   *
   * @returns Successful response
   *
   * @throws {@link TransferJobs.StoragetransferTransferJobsDeleteError} when the API answers with
   * an error status — narrow on `err.payload.kind`
   *
   * @throws {@link GoogleCloudStorageTransferServiceError} when no usable response was produced: a
   * connection failure, a timeout, a body that would not decode, a value that would not encode, or
   * a credential that could not be obtained
   */
  storagetransferTransferJobsDelete(
    request: TransferJobs.StoragetransferTransferJobsDeleteRequest,
    options?: RequestOptions,
  ): ApiPromise<Record<string, unknown>, TransferJobs.StoragetransferTransferJobsDeleteError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default("/v1/transferJobs/{transferJobsId}"),
        auth: anyAuth(this.#auth.oauth2, this.#auth.apiKey),
        pathParams: [{ name: "transferJobsId", value: request.transferJobsId, schema: s.string() }],
        query: [{ name: "projectId", value: request.projectId, schema: s.string() }],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.record(s.string(), s.unknown()) },
        errorFactory: TransferJobs.StoragetransferTransferJobsDeleteError,
      },
      options,
    );
  }

  /**
   * Get transferJobs
   *
   * @remarks
   * Gets a transfer job.
   *
   * @returns Successful response
   *
   * @throws {@link TransferJobs.StoragetransferTransferJobsGetError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link GoogleCloudStorageTransferServiceError} when no usable response was produced: a
   * connection failure, a timeout, a body that would not decode, a value that would not encode, or
   * a credential that could not be obtained
   */
  storagetransferTransferJobsGet(
    request: TransferJobs.StoragetransferTransferJobsGetRequest,
    options?: RequestOptions,
  ): ApiPromise<TransferJob, TransferJobs.StoragetransferTransferJobsGetError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v1/transferJobs/{transferJobsId}"),
        auth: anyAuth(this.#auth.oauth2, this.#auth.apiKey),
        pathParams: [{ name: "transferJobsId", value: request.transferJobsId, schema: s.string() }],
        query: [{ name: "projectId", value: request.projectId, schema: s.string() }],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: transferJobSchema },
        errorFactory: TransferJobs.StoragetransferTransferJobsGetError,
      },
      options,
    );
  }

  /**
   * List transferJobs
   *
   * @remarks
   * Lists transfer jobs.
   *
   * @returns Successful response
   *
   * @throws {@link TransferJobs.StoragetransferTransferJobsListError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link GoogleCloudStorageTransferServiceError} when no usable response was produced: a
   * connection failure, a timeout, a body that would not decode, a value that would not encode, or
   * a credential that could not be obtained
   */
  storagetransferTransferJobsList(
    request: TransferJobs.StoragetransferTransferJobsListRequest,
    options?: RequestOptions,
  ): ApiPromise<ListTransferJobsResponse, TransferJobs.StoragetransferTransferJobsListError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v1/transferJobs"),
        auth: anyAuth(this.#auth.oauth2, this.#auth.apiKey),
        pathParams: [],
        query: [
          { name: "filter", value: request.filter, schema: s.string() },
          { name: "pageSize", value: request.pageSize, schema: s.optional(s.int()) },
          { name: "pageToken", value: request.pageToken, schema: s.optional(s.string()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: listTransferJobsResponseSchema },
        errorFactory: TransferJobs.StoragetransferTransferJobsListError,
      },
      options,
    );
  }

  /**
   * Patch transferJobs
   *
   * @remarks
   * Updates a transfer job. Updating a job's transfer spec does not affect transfer operations that
   * are running already. **Note:** The job's status field can be modified using this RPC (for
   * example, to set a job's status to DELETED, DISABLED, or ENABLED).
   *
   * @returns Successful response
   *
   * @throws {@link TransferJobs.StoragetransferTransferJobsPatchError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link GoogleCloudStorageTransferServiceError} when no usable response was produced: a
   * connection failure, a timeout, a body that would not decode, a value that would not encode, or
   * a credential that could not be obtained
   */
  storagetransferTransferJobsPatch(
    request: TransferJobs.StoragetransferTransferJobsPatchRequest,
    options?: RequestOptions,
  ): ApiPromise<TransferJob, TransferJobs.StoragetransferTransferJobsPatchError> {
    return this.#rawClient.execute(
      {
        method: "PATCH",
        urlTemplate: this.#servers.default("/v1/transferJobs/{transferJobsId}"),
        auth: anyAuth(this.#auth.oauth2, this.#auth.apiKey),
        pathParams: [{ name: "transferJobsId", value: request.transferJobsId, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: updateTransferJobRequestSchema },
      },
      {
        success: { kind: "json", schema: transferJobSchema },
        errorFactory: TransferJobs.StoragetransferTransferJobsPatchError,
      },
      options,
    );
  }

  /**
   * Run transferJobs
   *
   * @remarks
   * Starts a new operation for the specified transfer job. A `TransferJob` has a maximum of one
   * active `TransferOperation`. If this method is called while a `TransferOperation` is active, an
   * error is returned.
   *
   * @returns Successful response
   *
   * @throws {@link TransferJobs.StoragetransferTransferJobsRunError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link GoogleCloudStorageTransferServiceError} when no usable response was produced: a
   * connection failure, a timeout, a body that would not decode, a value that would not encode, or
   * a credential that could not be obtained
   */
  storagetransferTransferJobsRun(
    request: TransferJobs.StoragetransferTransferJobsRunRequest,
    options?: RequestOptions,
  ): ApiPromise<Operation, TransferJobs.StoragetransferTransferJobsRunError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/v1/transferJobs/{transferJobsId}:run"),
        auth: anyAuth(this.#auth.oauth2, this.#auth.apiKey),
        pathParams: [{ name: "transferJobsId", value: request.transferJobsId, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: runTransferJobRequestSchema },
      },
      {
        success: { kind: "json", schema: operationSchema },
        errorFactory: TransferJobs.StoragetransferTransferJobsRunError,
      },
      options,
    );
  }
}

export namespace TransferJobs {
  export type StoragetransferTransferJobsCreateRequest = {
    body: TransferJob;
  };

  export class StoragetransferTransferJobsCreateError extends ApiError {
    declare readonly payload: Declared<"googleRpcError", GoogleRpcError> | Undeclared;

    static readonly errors: ErrorDecoders<StoragetransferTransferJobsCreateError> = [
      { on: [400, 499], kind: "googleRpcError", decode: { kind: "json", schema: googleRpcErrorSchema } },
    ];
  }

  export type StoragetransferTransferJobsDeleteRequest = {
    /** Resource name segment (transferJobsId). */
    transferJobsId: string;
    /** Required. The ID of the Google Cloud project that owns the job. */
    projectId: string;
  };

  export class StoragetransferTransferJobsDeleteError extends ApiError {
    declare readonly payload: Declared<"googleRpcError", GoogleRpcError> | Undeclared;

    static readonly errors: ErrorDecoders<StoragetransferTransferJobsDeleteError> = [
      { on: [400, 499], kind: "googleRpcError", decode: { kind: "json", schema: googleRpcErrorSchema } },
    ];
  }

  export type StoragetransferTransferJobsGetRequest = {
    /** Resource name segment (transferJobsId). */
    transferJobsId: string;
    /** Required. The ID of the Google Cloud project that owns the job. */
    projectId: string;
  };

  export class StoragetransferTransferJobsGetError extends ApiError {
    declare readonly payload: Declared<"googleRpcError", GoogleRpcError> | Undeclared;

    static readonly errors: ErrorDecoders<StoragetransferTransferJobsGetError> = [
      { on: [400, 499], kind: "googleRpcError", decode: { kind: "json", schema: googleRpcErrorSchema } },
    ];
  }

  export type StoragetransferTransferJobsListRequest = {
    /**
     * Required. A list of query parameters specified as JSON text in the form of: ``` {
     * "projectId":"my_project_id", "jobNames":["jobid1","jobid2",...],
     * "jobStatuses":["status1","status2",...], "dataBackend":"QUERY_REPLICATION_CONFIGS",
     * "sourceBucket":"source-bucket-name", "sinkBucket":"sink-bucket-name", } ``` The JSON
     * formatting in the example is for display only; provide the query parameters without spaces or
     * line breaks. * `projectId` is required. * Since `jobNames` and `jobStatuses` support multiple
     * values, their values must be specified with array notation. `jobNames` and `jobStatuses` are
     * optional. Valid values are case-insensitive: * ENABLED * DISABLED * DELETED * Specify
     * `"dataBackend":"QUERY_REPLICATION_CONFIGS"` to return a list of cross-bucket replication
     * jobs. * Limit the results to jobs from a particular bucket with `sourceBucket` and/or to a
     * particular bucket with `sinkBucket`.
     */
    filter: string;
    /** The list page size. The max allowed value is 256. */
    pageSize?: number;
    /** The list page token. */
    pageToken?: string;
  };

  export class StoragetransferTransferJobsListError extends ApiError {
    declare readonly payload: Declared<"googleRpcError", GoogleRpcError> | Undeclared;

    static readonly errors: ErrorDecoders<StoragetransferTransferJobsListError> = [
      { on: [400, 499], kind: "googleRpcError", decode: { kind: "json", schema: googleRpcErrorSchema } },
    ];
  }

  export type StoragetransferTransferJobsPatchRequest = {
    /** Resource name segment (transferJobsId). */
    transferJobsId: string;
    body: UpdateTransferJobRequest;
  };

  export class StoragetransferTransferJobsPatchError extends ApiError {
    declare readonly payload: Declared<"googleRpcError", GoogleRpcError> | Undeclared;

    static readonly errors: ErrorDecoders<StoragetransferTransferJobsPatchError> = [
      { on: [400, 499], kind: "googleRpcError", decode: { kind: "json", schema: googleRpcErrorSchema } },
    ];
  }

  export type StoragetransferTransferJobsRunRequest = {
    /** Resource name segment (transferJobsId). */
    transferJobsId: string;
    body: RunTransferJobRequest;
  };

  export class StoragetransferTransferJobsRunError extends ApiError {
    declare readonly payload: Declared<"googleRpcError", GoogleRpcError> | Undeclared;

    static readonly errors: ErrorDecoders<StoragetransferTransferJobsRunError> = [
      { on: [400, 499], kind: "googleRpcError", decode: { kind: "json", schema: googleRpcErrorSchema } },
    ];
  }
}
