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
  listOperationsResponseSchema,
  type ListOperationsResponse,
} from "../models/list-operations-response.js";
import { operationSchema, type Operation } from "../models/operation.js";
import type { Servers } from "../servers.js";

export class TransferOperations {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Cancel transferOperations
   *
   * @remarks
   * Cancels a transfer. Use the transferOperations.get method to check if the cancellation
   * succeeded or if the operation completed despite the `cancel` request. When you cancel an
   * operation, the currently running transfer is interrupted. For recurring transfer jobs, the next
   * instance of the transfer job will still run. For example, if your job is configured to run
   * every day at 1pm and you cancel Monday's operation at 1:05pm, Monday's transfer will stop.
   * However, a transfer job will still be attempted on Tuesday. This applies only to currently
   * running operations. If an operation is not currently running, `cancel` does nothing. *Caution:*
   * Canceling a transfer job can leave your data in an unknown state. We recommend that you restore
   * the state at both the destination and the source after the `cancel` request completes so that
   * your data is in a consistent state. When you cancel a job, the next job computes a delta of
   * files and may repair any inconsistent state. For instance, if you run a job every day, and
   * today's job found 10 new files and transferred five files before you canceled the job,
   * tomorrow's transfer operation will compute a new delta with the five files that were not copied
   * today plus any new files discovered tomorrow.
   *
   * @returns Successful response
   *
   * @throws {@link TransferOperations.StoragetransferTransferOperationsCancelError} when the API
   * answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link GoogleCloudStorageTransferServiceError} when no usable response was produced: a
   * connection failure, a timeout, a body that would not decode, a value that would not encode, or
   * a credential that could not be obtained
   */
  storagetransferTransferOperationsCancel(
    request: TransferOperations.StoragetransferTransferOperationsCancelRequest,
    options?: RequestOptions,
  ): ApiPromise<Record<string, unknown>, TransferOperations.StoragetransferTransferOperationsCancelError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/v1/transferOperations/{transferOperationsId}:cancel"),
        auth: anyAuth(this.#auth.oauth2, this.#auth.apiKey),
        pathParams: [
          { name: "transferOperationsId", value: request.transferOperationsId, schema: s.string() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: s.record(s.string(), s.unknown()) },
      },
      {
        success: { kind: "json", schema: s.record(s.string(), s.unknown()) },
        errorFactory: TransferOperations.StoragetransferTransferOperationsCancelError,
      },
      options,
    );
  }

  /**
   * Get transferOperations
   *
   * @remarks
   * Gets the latest state of a long-running operation. Clients can use this method to poll the
   * operation result at intervals as recommended by the API service.
   *
   * @returns Successful response
   *
   * @throws {@link TransferOperations.StoragetransferTransferOperationsGetError} when the API
   * answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link GoogleCloudStorageTransferServiceError} when no usable response was produced: a
   * connection failure, a timeout, a body that would not decode, a value that would not encode, or
   * a credential that could not be obtained
   */
  storagetransferTransferOperationsGet(
    request: TransferOperations.StoragetransferTransferOperationsGetRequest,
    options?: RequestOptions,
  ): ApiPromise<Operation, TransferOperations.StoragetransferTransferOperationsGetError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v1/transferOperations/{transferOperationsId}"),
        auth: anyAuth(this.#auth.oauth2, this.#auth.apiKey),
        pathParams: [
          { name: "transferOperationsId", value: request.transferOperationsId, schema: s.string() },
        ],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: operationSchema },
        errorFactory: TransferOperations.StoragetransferTransferOperationsGetError,
      },
      options,
    );
  }

  /**
   * List transferOperations
   *
   * @remarks
   * Lists transfer operations. Operations are ordered by their creation time in reverse
   * chronological order.
   *
   * @returns Successful response
   *
   * @throws {@link TransferOperations.StoragetransferTransferOperationsListError} when the API
   * answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link GoogleCloudStorageTransferServiceError} when no usable response was produced: a
   * connection failure, a timeout, a body that would not decode, a value that would not encode, or
   * a credential that could not be obtained
   */
  storagetransferTransferOperationsList(
    request: TransferOperations.StoragetransferTransferOperationsListRequest,
    options?: RequestOptions,
  ): ApiPromise<ListOperationsResponse, TransferOperations.StoragetransferTransferOperationsListError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v1/transferOperations"),
        auth: anyAuth(this.#auth.oauth2, this.#auth.apiKey),
        pathParams: [],
        query: [
          { name: "filter", value: request.filter, schema: s.string() },
          { name: "pageSize", value: request.pageSize, schema: s.optional(s.int()) },
          { name: "pageToken", value: request.pageToken, schema: s.optional(s.string()) },
          {
            name: "returnPartialSuccess",
            value: request.returnPartialSuccess,
            schema: s.optional(s.boolean()),
          },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: listOperationsResponseSchema },
        errorFactory: TransferOperations.StoragetransferTransferOperationsListError,
      },
      options,
    );
  }

  /**
   * Pause transferOperations
   *
   * @remarks
   * Pauses a transfer operation.
   *
   * @returns Successful response
   *
   * @throws {@link TransferOperations.StoragetransferTransferOperationsPauseError} when the API
   * answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link GoogleCloudStorageTransferServiceError} when no usable response was produced: a
   * connection failure, a timeout, a body that would not decode, a value that would not encode, or
   * a credential that could not be obtained
   */
  storagetransferTransferOperationsPause(
    request: TransferOperations.StoragetransferTransferOperationsPauseRequest,
    options?: RequestOptions,
  ): ApiPromise<Record<string, unknown>, TransferOperations.StoragetransferTransferOperationsPauseError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/v1/transferOperations/{transferOperationsId}:pause"),
        auth: anyAuth(this.#auth.oauth2, this.#auth.apiKey),
        pathParams: [
          { name: "transferOperationsId", value: request.transferOperationsId, schema: s.string() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: s.record(s.string(), s.unknown()) },
      },
      {
        success: { kind: "json", schema: s.record(s.string(), s.unknown()) },
        errorFactory: TransferOperations.StoragetransferTransferOperationsPauseError,
      },
      options,
    );
  }

  /**
   * Resume transferOperations
   *
   * @remarks
   * Resumes a transfer operation that is paused.
   *
   * @returns Successful response
   *
   * @throws {@link TransferOperations.StoragetransferTransferOperationsResumeError} when the API
   * answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link GoogleCloudStorageTransferServiceError} when no usable response was produced: a
   * connection failure, a timeout, a body that would not decode, a value that would not encode, or
   * a credential that could not be obtained
   */
  storagetransferTransferOperationsResume(
    request: TransferOperations.StoragetransferTransferOperationsResumeRequest,
    options?: RequestOptions,
  ): ApiPromise<Record<string, unknown>, TransferOperations.StoragetransferTransferOperationsResumeError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/v1/transferOperations/{transferOperationsId}:resume"),
        auth: anyAuth(this.#auth.oauth2, this.#auth.apiKey),
        pathParams: [
          { name: "transferOperationsId", value: request.transferOperationsId, schema: s.string() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: s.record(s.string(), s.unknown()) },
      },
      {
        success: { kind: "json", schema: s.record(s.string(), s.unknown()) },
        errorFactory: TransferOperations.StoragetransferTransferOperationsResumeError,
      },
      options,
    );
  }
}

export namespace TransferOperations {
  export type StoragetransferTransferOperationsCancelRequest = {
    /** Resource name segment (transferOperationsId). */
    transferOperationsId: string;
    body: Record<string, unknown>;
  };

  export class StoragetransferTransferOperationsCancelError extends ApiError {
    declare readonly payload: Declared<"googleRpcError", GoogleRpcError> | Undeclared;

    static readonly errors: ErrorDecoders<StoragetransferTransferOperationsCancelError> = [
      { on: [400, 499], kind: "googleRpcError", decode: { kind: "json", schema: googleRpcErrorSchema } },
    ];
  }

  export type StoragetransferTransferOperationsGetRequest = {
    /** Resource name segment (transferOperationsId). */
    transferOperationsId: string;
  };

  export class StoragetransferTransferOperationsGetError extends ApiError {
    declare readonly payload: Declared<"googleRpcError", GoogleRpcError> | Undeclared;

    static readonly errors: ErrorDecoders<StoragetransferTransferOperationsGetError> = [
      { on: [400, 499], kind: "googleRpcError", decode: { kind: "json", schema: googleRpcErrorSchema } },
    ];
  }

  export type StoragetransferTransferOperationsListRequest = {
    /**
     * Required. A list of query parameters specified as JSON text in the form of:
     * `{"projectId":"my_project_id", "jobNames":["jobid1","jobid2",...], "jobNamePattern":
     * "job_name_pattern", "operationNames":["opid1","opid2",...], "operationNamePattern":
     * "operation_name_pattern", "minCreationTime": "min_creation_time", "maxCreationTime":
     * "max_creation_time", "transferStatuses":["status1","status2",...]}` Since `jobNames`,
     * `operationNames`, and `transferStatuses` support multiple values, they must be specified with
     * array notation. `projectId` is the only argument that is required. If specified,
     * `jobNamePattern` and `operationNamePattern` must match the full job or operation name
     * respectively. '*' is a wildcard matching 0 or more characters. `minCreationTime` and
     * `maxCreationTime` should be timestamps encoded as a string in the [RFC
     * 3339](https://www.ietf.org/rfc/rfc3339.txt) format. The valid values for `transferStatuses`
     * are case-insensitive: IN_PROGRESS, PAUSED, SUCCESS, FAILED, and ABORTED.
     */
    filter: string;
    /** The list page size. The max allowed value is 256. */
    pageSize?: number;
    /** The list page token. */
    pageToken?: string;
    /**
     * When set to `true`, operations that are reachable are returned as normal, and those that are
     * unreachable are returned in the ListOperationsResponse.unreachable field. This can only be
     * `true` when reading across collections. For example, when `parent` is set to
     * `"projects/example/locations/-"`. This field is not supported by default and will result in
     * an `UNIMPLEMENTED` error if set unless explicitly documented otherwise in service or product
     * specific documentation.
     */
    returnPartialSuccess?: boolean;
  };

  export class StoragetransferTransferOperationsListError extends ApiError {
    declare readonly payload: Declared<"googleRpcError", GoogleRpcError> | Undeclared;

    static readonly errors: ErrorDecoders<StoragetransferTransferOperationsListError> = [
      { on: [400, 499], kind: "googleRpcError", decode: { kind: "json", schema: googleRpcErrorSchema } },
    ];
  }

  export type StoragetransferTransferOperationsPauseRequest = {
    /** Resource name segment (transferOperationsId). */
    transferOperationsId: string;
    body: Record<string, unknown>;
  };

  export class StoragetransferTransferOperationsPauseError extends ApiError {
    declare readonly payload: Declared<"googleRpcError", GoogleRpcError> | Undeclared;

    static readonly errors: ErrorDecoders<StoragetransferTransferOperationsPauseError> = [
      { on: [400, 499], kind: "googleRpcError", decode: { kind: "json", schema: googleRpcErrorSchema } },
    ];
  }

  export type StoragetransferTransferOperationsResumeRequest = {
    /** Resource name segment (transferOperationsId). */
    transferOperationsId: string;
    body: Record<string, unknown>;
  };

  export class StoragetransferTransferOperationsResumeError extends ApiError {
    declare readonly payload: Declared<"googleRpcError", GoogleRpcError> | Undeclared;

    static readonly errors: ErrorDecoders<StoragetransferTransferOperationsResumeError> = [
      { on: [400, 499], kind: "googleRpcError", decode: { kind: "json", schema: googleRpcErrorSchema } },
    ];
  }
}
