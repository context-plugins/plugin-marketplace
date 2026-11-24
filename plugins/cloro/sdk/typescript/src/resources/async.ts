import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  asyncStatusResponseInternalSchema,
  type AsyncStatusResponse,
} from "../models/async-status-response.js";
import {
  asyncTaskCreateResponseInternalSchema,
  type AsyncTaskCreateResponse,
} from "../models/async-task-create-response.js";
import { authenticationErrorSchema, type AuthenticationError } from "../models/authentication-error.js";
import {
  batchTaskRequestInternalSchema,
  batchTaskRequestSchema,
  type BatchTaskRequest,
} from "../models/batch-task-request.js";
import { batchTaskResponseInternalSchema, type BatchTaskResponse } from "../models/batch-task-response.js";
import { clearQueueResponseSchema, type ClearQueueResponse } from "../models/clear-queue-response.js";
import { forbiddenErrorSchema, type ForbiddenError } from "../models/forbidden-error.js";
import {
  idempotencyConflictErrorSchema,
  type IdempotencyConflictError,
} from "../models/idempotency-conflict-error.js";
import { internalErrorSchema, type InternalError } from "../models/internal-error.js";
import { notFoundErrorSchema, type NotFoundError } from "../models/not-found-error.js";
import { queueLimitErrorSchema, type QueueLimitError } from "../models/queue-limit-error.js";
import { rateLimitErrorSchema, type RateLimitError } from "../models/rate-limit-error.js";
import { taskStatusResponseInternalSchema, type TaskStatusResponse } from "../models/task-status-response.js";
import { validationErrorSchema, type ValidationError } from "../models/validation-error.js";
import type { Servers } from "../servers.js";

export class Async {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Clear queued async tasks
   *
   * @remarks
   * Deletes every task still in the `QUEUED` state for the authenticated organization, letting you
   * drain a pending backlog in one call instead of opening a support request. Tasks that are
   * already `PROCESSING` are in-flight on a worker and are left untouched, as are `COMPLETED` and
   * `FAILED` tasks. Queued tasks have not been charged, so clearing them does not affect your
   * credit balance. The call is safe to repeat — if the queue is already empty it simply returns
   * `cleared: 0`.
   *
   * @returns Queue cleared. Returns the number of queued tasks that were removed.
   *
   * @throws {@link Async.ClearAsyncQueueError} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link CloroError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  clearAsyncQueue(options?: RequestOptions): ApiPromise<ClearQueueResponse, Async.ClearAsyncQueueError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default("/v1/async/queue"),
        auth: this.#auth.bearerAuth,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: clearQueueResponseSchema },
        errorFactory: Async.ClearAsyncQueueError,
      },
      options,
    );
  }

  /**
   * Create async task
   *
   * @remarks
   * Submit an asynchronous task for background processing. Returns a task ID that you can use to
   * poll for results or receive via webhook.
   *
   * @returns Task created successfully. Returns task ID and initial status.
   *
   * @throws {@link Async.CreateAsyncTaskError} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link CloroError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  createAsyncTask(
    request: Async.CreateAsyncTaskRequest,
    options?: RequestOptions,
  ): ApiPromise<AsyncTaskCreateResponse, Async.CreateAsyncTaskError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/v1/async/task"),
        auth: this.#auth.bearerAuth,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: batchTaskRequestInternalSchema },
      },
      {
        success: { kind: "json", schema: asyncTaskCreateResponseInternalSchema },
        errorFactory: Async.CreateAsyncTaskError,
      },
      options,
    );
  }

  /**
   * Create batch async tasks
   *
   * @remarks
   * Submit up to 500 async tasks in one request. Each task is validated independently, so one
   * invalid task does not block the rest. Returns per-task results.
   *
   * @returns Batch processed. Check the summary and individual results for per-task success or
   * failure.
   *
   * @throws {@link Async.CreateBatchAsyncTasksError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link CloroError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  createBatchAsyncTasks(
    request: Async.CreateBatchAsyncTasksRequest,
    options?: RequestOptions,
  ): ApiPromise<BatchTaskResponse, Async.CreateBatchAsyncTasksError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/v1/async/task/batch"),
        auth: this.#auth.bearerAuth,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.array(s.lazy(() => batchTaskRequestInternalSchema)),
        },
      },
      {
        success: { kind: "json", schema: batchTaskResponseInternalSchema },
        errorFactory: Async.CreateBatchAsyncTasksError,
      },
      options,
    );
  }

  /**
   * Get async queue status
   *
   * @remarks
   * Get organization-wide async queue metrics including queued and processing task counts, and
   * concurrency usage.
   *
   * @returns Successful response with queue metrics.
   *
   * @throws {@link Async.GetAsyncStatusError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link CloroError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getAsyncStatus(options?: RequestOptions): ApiPromise<AsyncStatusResponse, Async.GetAsyncStatusError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v1/async/status"),
        auth: this.#auth.bearerAuth,
        pathParams: [],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: asyncStatusResponseInternalSchema },
        errorFactory: Async.GetAsyncStatusError,
      },
      options,
    );
  }

  /**
   * Get async task status
   *
   * @remarks
   * Poll the status and result of an asynchronous task by ID. Returns the task state and, once
   * complete, the full structured result payload.
   *
   * @returns Successful response with the task status and result if completed.
   *
   * @throws {@link Async.GetTaskStatusError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link CloroError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getTaskStatus(
    request: Async.GetTaskStatusRequest,
    options?: RequestOptions,
  ): ApiPromise<TaskStatusResponse, Async.GetTaskStatusError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v1/async/task/{taskId}"),
        auth: this.#auth.bearerAuth,
        pathParams: [{ name: "taskId", value: request.taskId, schema: s.string() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: taskStatusResponseInternalSchema },
        errorFactory: Async.GetTaskStatusError,
      },
      options,
    );
  }
}

export namespace Async {
  export class ClearAsyncQueueError extends ApiError {
    declare readonly payload:
      | Declared<"authenticationError", AuthenticationError>
      | Declared<"rateLimitError", RateLimitError>
      | Declared<"internalError", InternalError>
      | Undeclared;

    static readonly errors: ErrorDecoders<ClearAsyncQueueError> = [
      { on: 401, kind: "authenticationError", decode: { kind: "json", schema: authenticationErrorSchema } },
      { on: 429, kind: "rateLimitError", decode: { kind: "json", schema: rateLimitErrorSchema } },
      { on: 500, kind: "internalError", decode: { kind: "json", schema: internalErrorSchema } },
    ];
  }

  export type CreateAsyncTaskRequest = {
    body: BatchTaskRequest;
  };

  export class CreateAsyncTaskError extends ApiError {
    declare readonly payload:
      | Declared<"validationError", ValidationError>
      | Declared<"authenticationError", AuthenticationError>
      | Declared<"forbiddenError", ForbiddenError>
      | Declared<"idempotencyConflictError", IdempotencyConflictError>
      | Declared<"queueLimitError", QueueLimitError>
      | Declared<"internalError", InternalError>
      | Undeclared;

    static readonly errors: ErrorDecoders<CreateAsyncTaskError> = [
      { on: 400, kind: "validationError", decode: { kind: "json", schema: validationErrorSchema } },
      { on: 401, kind: "authenticationError", decode: { kind: "json", schema: authenticationErrorSchema } },
      { on: 403, kind: "forbiddenError", decode: { kind: "json", schema: forbiddenErrorSchema } },
      {
        on: 409,
        kind: "idempotencyConflictError",
        decode: { kind: "json", schema: idempotencyConflictErrorSchema },
      },
      { on: 429, kind: "queueLimitError", decode: { kind: "json", schema: queueLimitErrorSchema } },
      { on: 500, kind: "internalError", decode: { kind: "json", schema: internalErrorSchema } },
    ];
  }

  export type CreateBatchAsyncTasksRequest = {
    body: BatchTaskRequest[];
  };

  export const createBatchAsyncTasksRequestSchema: Schema<CreateBatchAsyncTasksRequest> = s.lazySchema(() =>
    s.object<CreateBatchAsyncTasksRequest>({
      body: s.array(s.lazy(() => batchTaskRequestSchema)).check(s.minLength(1), s.maxLength(500)),
    }),
  );

  export class CreateBatchAsyncTasksError extends ApiError {
    declare readonly payload:
      | Declared<"validationError", ValidationError>
      | Declared<"authenticationError", AuthenticationError>
      | Declared<"queueLimitError", QueueLimitError>
      | Declared<"internalError", InternalError>
      | Undeclared;

    static readonly errors: ErrorDecoders<CreateBatchAsyncTasksError> = [
      { on: 400, kind: "validationError", decode: { kind: "json", schema: validationErrorSchema } },
      { on: 401, kind: "authenticationError", decode: { kind: "json", schema: authenticationErrorSchema } },
      { on: 429, kind: "queueLimitError", decode: { kind: "json", schema: queueLimitErrorSchema } },
      { on: 500, kind: "internalError", decode: { kind: "json", schema: internalErrorSchema } },
    ];
  }

  export class GetAsyncStatusError extends ApiError {
    declare readonly payload:
      | Declared<"authenticationError", AuthenticationError>
      | Declared<"rateLimitError", RateLimitError>
      | Declared<"internalError", InternalError>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetAsyncStatusError> = [
      { on: 401, kind: "authenticationError", decode: { kind: "json", schema: authenticationErrorSchema } },
      { on: 429, kind: "rateLimitError", decode: { kind: "json", schema: rateLimitErrorSchema } },
      { on: 500, kind: "internalError", decode: { kind: "json", schema: internalErrorSchema } },
    ];
  }

  export type GetTaskStatusRequest = {
    /** The ID of the task to fetch. */
    taskId: string;
  };

  export class GetTaskStatusError extends ApiError {
    declare readonly payload:
      | Declared<"authenticationError", AuthenticationError>
      | Declared<"notFoundError", NotFoundError>
      | Declared<"rateLimitError", RateLimitError>
      | Declared<"internalError", InternalError>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetTaskStatusError> = [
      { on: 401, kind: "authenticationError", decode: { kind: "json", schema: authenticationErrorSchema } },
      { on: 404, kind: "notFoundError", decode: { kind: "json", schema: notFoundErrorSchema } },
      { on: 429, kind: "rateLimitError", decode: { kind: "json", schema: rateLimitErrorSchema } },
      { on: 500, kind: "internalError", decode: { kind: "json", schema: internalErrorSchema } },
    ];
  }
}
