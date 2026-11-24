import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { noneAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { bulkStageRequestInternalSchema, type BulkStageRequest } from "../models/bulk-stage-request.js";
import { bulkStatusRequestInternalSchema, type BulkStatusRequest } from "../models/bulk-status-request.js";
import { bulkStatusResponseSchema, type BulkStatusResponse } from "../models/bulk-status-response.js";
import {
  createTaskCommentRequestSchema,
  type CreateTaskCommentRequest,
} from "../models/create-task-comment-request.js";
import { errorResponseSchema, type ErrorResponse } from "../models/error-response.js";
import { httpValidationErrorSchema, type HttpValidationError } from "../models/http-validation-error.js";
import {
  paginatedResponseTaskTraceSchema,
  type PaginatedResponseTaskTrace,
} from "../models/paginated-response-task-trace.js";
import { taskActivityResponseSchema, type TaskActivityResponse } from "../models/task-activity-response.js";
import { taskCommentItemSchema, type TaskCommentItem } from "../models/task-comment-item.js";
import {
  taskCommentsListResponseSchema,
  type TaskCommentsListResponse,
} from "../models/task-comments-list-response.js";
import { taskUploadRequestInternalSchema, type TaskUploadRequest } from "../models/task-upload-request.js";
import { taskUploadResponseSchema, type TaskUploadResponse } from "../models/task-upload-response.js";
import {
  taskWithVersionResponseInternalSchema,
  type TaskWithVersionResponse,
} from "../models/task-with-version-response.js";
import { modelIdSchema, type ModelId } from "../models/unions/model-id.js";
import {
  responseGetTaskReadyCheckV2TasksTaskIdReadyCheckGetInternalSchema,
  type ResponseGetTaskReadyCheckV2TasksTaskIdReadyCheckGet,
} from "../models/unions/response-get-task-ready-check-v2-tasks-task-id-ready-check-get.js";
import { taskVersionIdSchema, type TaskVersionId } from "../models/unions/task-version-id.js";
import {
  updateTaskCommentRequestSchema,
  type UpdateTaskCommentRequest,
} from "../models/update-task-comment-request.js";
import type { Servers } from "../servers.js";

export class Tasks {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;

  constructor(rawClient: RawClient, servers: Servers) {
    this.#rawClient = rawClient;
    this.#servers = servers;
  }

  /**
   * Bulk Update Task Stage
   *
   * @remarks
   * Bulk lifecycle-stage move (advance one stage / send back); non-atomic.
   *
   * @returns Successful Response
   *
   * @throws {@link Tasks.BulkUpdateTaskStageV2TasksStagePatchError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link HudError} when no usable response was produced: a connection failure, a timeout,
   * a body that would not decode, a value that would not encode, or a credential that could not be
   * obtained
   */
  bulkUpdateTaskStageV2TasksStagePatch(
    request: Tasks.BulkUpdateTaskStageV2TasksStagePatchRequest,
    options?: RequestOptions,
  ): ApiPromise<BulkStatusResponse, Tasks.BulkUpdateTaskStageV2TasksStagePatchError> {
    return this.#rawClient.execute(
      {
        method: "PATCH",
        urlTemplate: this.#servers.default("/v2/tasks/stage"),
        auth: noneAuth,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: bulkStageRequestInternalSchema },
      },
      {
        success: { kind: "json", schema: bulkStatusResponseSchema },
        errorFactory: Tasks.BulkUpdateTaskStageV2TasksStagePatchError,
      },
      options,
    );
  }

  /**
   * Bulk Update Task Status
   *
   * @remarks
   * Bulk status mutation; reviewer-only clear resets directly to pending; non-atomic.
   *
   * @returns Successful Response
   *
   * @throws {@link Tasks.BulkUpdateTaskStatusV2TasksStatusPatchError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link HudError} when no usable response was produced: a connection failure, a timeout,
   * a body that would not decode, a value that would not encode, or a credential that could not be
   * obtained
   */
  bulkUpdateTaskStatusV2TasksStatusPatch(
    request: Tasks.BulkUpdateTaskStatusV2TasksStatusPatchRequest,
    options?: RequestOptions,
  ): ApiPromise<BulkStatusResponse, Tasks.BulkUpdateTaskStatusV2TasksStatusPatchError> {
    return this.#rawClient.execute(
      {
        method: "PATCH",
        urlTemplate: this.#servers.default("/v2/tasks/status"),
        auth: noneAuth,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: bulkStatusRequestInternalSchema },
      },
      {
        success: { kind: "json", schema: bulkStatusResponseSchema },
        errorFactory: Tasks.BulkUpdateTaskStatusV2TasksStatusPatchError,
      },
      options,
    );
  }

  /**
   * Create Task Comment
   *
   * @remarks
   * Add a comment to a task and notify mentioned users.
   *
   * @returns Successful Response
   *
   * @throws {@link Tasks.CreateTaskCommentV2TasksTaskIdCommentsPostError} when the API answers with
   * an error status — narrow on `err.payload.kind`
   *
   * @throws {@link HudError} when no usable response was produced: a connection failure, a timeout,
   * a body that would not decode, a value that would not encode, or a credential that could not be
   * obtained
   */
  createTaskCommentV2TasksTaskIdCommentsPost(
    request: Tasks.CreateTaskCommentV2TasksTaskIdCommentsPostRequest,
    options?: RequestOptions,
  ): ApiPromise<TaskCommentItem, Tasks.CreateTaskCommentV2TasksTaskIdCommentsPostError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/v2/tasks/{task_id}/comments"),
        auth: noneAuth,
        pathParams: [{ name: "task_id", value: request.taskId, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: createTaskCommentRequestSchema },
      },
      {
        success: { kind: "json", schema: taskCommentItemSchema },
        errorFactory: Tasks.CreateTaskCommentV2TasksTaskIdCommentsPostError,
      },
      options,
    );
  }

  /**
   * Delete Task Comment
   *
   * @remarks
   * Delete a task comment.
   *
   * @returns Successful Response
   *
   * @throws {@link Tasks.DeleteTaskCommentV2TasksTaskIdCommentsCommentIdDeleteError} when the API
   * answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link HudError} when no usable response was produced: a connection failure, a timeout,
   * a body that would not decode, a value that would not encode, or a credential that could not be
   * obtained
   */
  deleteTaskCommentV2TasksTaskIdCommentsCommentIdDelete(
    request: Tasks.DeleteTaskCommentV2TasksTaskIdCommentsCommentIdDeleteRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, Tasks.DeleteTaskCommentV2TasksTaskIdCommentsCommentIdDeleteError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default("/v2/tasks/{task_id}/comments/{comment_id}"),
        auth: noneAuth,
        pathParams: [
          { name: "task_id", value: request.taskId, schema: s.string() },
          { name: "comment_id", value: request.commentId, schema: s.string() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: Tasks.DeleteTaskCommentV2TasksTaskIdCommentsCommentIdDeleteError,
      },
      options,
    );
  }

  /**
   * Get Task Activity
   *
   * @remarks
   * Get a task's combined activity feed of comments and state changes.
   *
   * @returns Successful Response
   *
   * @throws {@link Tasks.GetTaskActivityV2TasksTaskIdActivityGetError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link HudError} when no usable response was produced: a connection failure, a timeout,
   * a body that would not decode, a value that would not encode, or a credential that could not be
   * obtained
   */
  getTaskActivityV2TasksTaskIdActivityGet(
    request: Tasks.GetTaskActivityV2TasksTaskIdActivityGetRequest,
    options?: RequestOptions,
  ): ApiPromise<TaskActivityResponse, Tasks.GetTaskActivityV2TasksTaskIdActivityGetError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v2/tasks/{task_id}/activity"),
        auth: noneAuth,
        pathParams: [{ name: "task_id", value: request.taskId, schema: s.string() }],
        query: [{ name: "limit", value: request.limit, schema: s.defaulted(s.int(), 50) }],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: taskActivityResponseSchema },
        errorFactory: Tasks.GetTaskActivityV2TasksTaskIdActivityGetError,
      },
      options,
    );
  }

  /**
   * Get Task Comments
   *
   * @remarks
   * List comments on a task.
   *
   * @returns Successful Response
   *
   * @throws {@link Tasks.GetTaskCommentsV2TasksTaskIdCommentsGetError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link HudError} when no usable response was produced: a connection failure, a timeout,
   * a body that would not decode, a value that would not encode, or a credential that could not be
   * obtained
   */
  getTaskCommentsV2TasksTaskIdCommentsGet(
    request: Tasks.GetTaskCommentsV2TasksTaskIdCommentsGetRequest,
    options?: RequestOptions,
  ): ApiPromise<TaskCommentsListResponse, Tasks.GetTaskCommentsV2TasksTaskIdCommentsGetError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v2/tasks/{task_id}/comments"),
        auth: noneAuth,
        pathParams: [{ name: "task_id", value: request.taskId, schema: s.string() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: taskCommentsListResponseSchema },
        errorFactory: Tasks.GetTaskCommentsV2TasksTaskIdCommentsGetError,
      },
      options,
    );
  }

  /**
   * Get Task Ready Check
   *
   * @remarks
   * Evaluate the taskset's ready requirements against the task's latest version.
   *
   * Informational: the Ready click is not blocked server-side.
   *
   * @returns Successful Response
   *
   * @throws {@link Tasks.GetTaskReadyCheckV2TasksTaskIdReadyCheckGetError} when the API answers
   * with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link HudError} when no usable response was produced: a connection failure, a timeout,
   * a body that would not decode, a value that would not encode, or a credential that could not be
   * obtained
   */
  getTaskReadyCheckV2TasksTaskIdReadyCheckGet(
    request: Tasks.GetTaskReadyCheckV2TasksTaskIdReadyCheckGetRequest,
    options?: RequestOptions,
  ): ApiPromise<
    ResponseGetTaskReadyCheckV2TasksTaskIdReadyCheckGet,
    Tasks.GetTaskReadyCheckV2TasksTaskIdReadyCheckGetError
  > {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v2/tasks/{task_id}/ready-check"),
        auth: noneAuth,
        pathParams: [{ name: "task_id", value: request.taskId, schema: s.string() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: responseGetTaskReadyCheckV2TasksTaskIdReadyCheckGetInternalSchema },
        errorFactory: Tasks.GetTaskReadyCheckV2TasksTaskIdReadyCheckGetError,
      },
      options,
    );
  }

  /**
   * Get Task Traces
   *
   * @remarks
   * List the task's traces, newest first, optionally for one version or model.
   *
   * Callers without scoped access to the task receive traces from public jobs only.
   *
   * @returns Successful Response
   *
   * @throws {@link Tasks.GetTaskTracesV2TasksTaskIdTracesGetError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link HudError} when no usable response was produced: a connection failure, a timeout,
   * a body that would not decode, a value that would not encode, or a credential that could not be
   * obtained
   */
  getTaskTracesV2TasksTaskIdTracesGet(
    request: Tasks.GetTaskTracesV2TasksTaskIdTracesGetRequest,
    options?: RequestOptions,
  ): ApiPromise<PaginatedResponseTaskTrace, Tasks.GetTaskTracesV2TasksTaskIdTracesGetError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v2/tasks/{task_id}/traces"),
        auth: noneAuth,
        pathParams: [{ name: "task_id", value: request.taskId, schema: s.string() }],
        query: [
          { name: "limit", value: request.limit, schema: s.defaulted(s.int(), 20) },
          { name: "offset", value: request.offset, schema: s.defaulted(s.int(), 0) },
          {
            name: "task_version_id",
            value: request.taskVersionId,
            schema: s.optional(s.lazy(() => taskVersionIdSchema)),
          },
          { name: "model_id", value: request.modelId, schema: s.optional(s.lazy(() => modelIdSchema)) },
          {
            name: "exclude_training",
            value: request.excludeTraining,
            schema: s.defaulted(s.boolean(), false),
          },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: paginatedResponseTaskTraceSchema },
        errorFactory: Tasks.GetTaskTracesV2TasksTaskIdTracesGetError,
      },
      options,
    );
  }

  /**
   * Get Task Version
   *
   * @remarks
   * Task plus one of its versions, by version id.
   *
   * @returns Successful Response
   *
   * @throws {@link Tasks.GetTaskVersionV2TasksTaskIdVersionsVersionIdGetError} when the API answers
   * with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link HudError} when no usable response was produced: a connection failure, a timeout,
   * a body that would not decode, a value that would not encode, or a credential that could not be
   * obtained
   */
  getTaskVersionV2TasksTaskIdVersionsVersionIdGet(
    request: Tasks.GetTaskVersionV2TasksTaskIdVersionsVersionIdGetRequest,
    options?: RequestOptions,
  ): ApiPromise<TaskWithVersionResponse, Tasks.GetTaskVersionV2TasksTaskIdVersionsVersionIdGetError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v2/tasks/{task_id}/versions/{version_id}"),
        auth: noneAuth,
        pathParams: [
          { name: "task_id", value: request.taskId, schema: s.string() },
          { name: "version_id", value: request.versionId, schema: s.string() },
        ],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: taskWithVersionResponseInternalSchema },
        errorFactory: Tasks.GetTaskVersionV2TasksTaskIdVersionsVersionIdGetError,
      },
      options,
    );
  }

  /**
   * Update Task Comment
   *
   * @remarks
   * Edit one of the caller's task comments.
   *
   * @returns Successful Response
   *
   * @throws {@link Tasks.UpdateTaskCommentV2TasksTaskIdCommentsCommentIdPatchError} when the API
   * answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link HudError} when no usable response was produced: a connection failure, a timeout,
   * a body that would not decode, a value that would not encode, or a credential that could not be
   * obtained
   */
  updateTaskCommentV2TasksTaskIdCommentsCommentIdPatch(
    request: Tasks.UpdateTaskCommentV2TasksTaskIdCommentsCommentIdPatchRequest,
    options?: RequestOptions,
  ): ApiPromise<TaskCommentItem, Tasks.UpdateTaskCommentV2TasksTaskIdCommentsCommentIdPatchError> {
    return this.#rawClient.execute(
      {
        method: "PATCH",
        urlTemplate: this.#servers.default("/v2/tasks/{task_id}/comments/{comment_id}"),
        auth: noneAuth,
        pathParams: [
          { name: "task_id", value: request.taskId, schema: s.string() },
          { name: "comment_id", value: request.commentId, schema: s.string() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: updateTaskCommentRequestSchema },
      },
      {
        success: { kind: "json", schema: taskCommentItemSchema },
        errorFactory: Tasks.UpdateTaskCommentV2TasksTaskIdCommentsCommentIdPatchError,
      },
      options,
    );
  }

  /**
   * Upload Tasks
   *
   * @remarks
   * Bulk-upload tasks into a taskset, creating the taskset if needed.
   *
   * @returns Successful Response
   *
   * @throws {@link Tasks.UploadTasksV2TasksUploadPostError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link HudError} when no usable response was produced: a connection failure, a timeout,
   * a body that would not decode, a value that would not encode, or a credential that could not be
   * obtained
   */
  uploadTasksV2TasksUploadPost(
    request: Tasks.UploadTasksV2TasksUploadPostRequest,
    options?: RequestOptions,
  ): ApiPromise<TaskUploadResponse, Tasks.UploadTasksV2TasksUploadPostError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/v2/tasks/upload"),
        auth: noneAuth,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: taskUploadRequestInternalSchema },
      },
      {
        success: { kind: "json", schema: taskUploadResponseSchema },
        errorFactory: Tasks.UploadTasksV2TasksUploadPostError,
      },
      options,
    );
  }
}

export namespace Tasks {
  export type BulkUpdateTaskStageV2TasksStagePatchRequest = {
    body: BulkStageRequest;
  };

  export class BulkUpdateTaskStageV2TasksStagePatchError extends ApiError {
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

    static readonly errors: ErrorDecoders<BulkUpdateTaskStageV2TasksStagePatchError> = [
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

  export type BulkUpdateTaskStatusV2TasksStatusPatchRequest = {
    body: BulkStatusRequest;
  };

  export class BulkUpdateTaskStatusV2TasksStatusPatchError extends ApiError {
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

    static readonly errors: ErrorDecoders<BulkUpdateTaskStatusV2TasksStatusPatchError> = [
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

  export type CreateTaskCommentV2TasksTaskIdCommentsPostRequest = {
    taskId: string;
    body: CreateTaskCommentRequest;
  };

  export class CreateTaskCommentV2TasksTaskIdCommentsPostError extends ApiError {
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

    static readonly errors: ErrorDecoders<CreateTaskCommentV2TasksTaskIdCommentsPostError> = [
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

  export type DeleteTaskCommentV2TasksTaskIdCommentsCommentIdDeleteRequest = {
    taskId: string;
    commentId: string;
  };

  export class DeleteTaskCommentV2TasksTaskIdCommentsCommentIdDeleteError extends ApiError {
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

    static readonly errors: ErrorDecoders<DeleteTaskCommentV2TasksTaskIdCommentsCommentIdDeleteError> = [
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

  export type GetTaskActivityV2TasksTaskIdActivityGetRequest = {
    taskId: string;
    /** @default 50 */
    limit?: number;
  };

  export const getTaskActivityV2TasksTaskIdActivityGetRequestSchema: Schema<GetTaskActivityV2TasksTaskIdActivityGetRequest> =
    s.lazySchema(() =>
      s.object<GetTaskActivityV2TasksTaskIdActivityGetRequest>({
        taskId: s.string(),
        limit: s.defaulted(s.int().check(s.gte(1), s.lte(200)), 50),
      }),
    );

  export class GetTaskActivityV2TasksTaskIdActivityGetError extends ApiError {
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

    static readonly errors: ErrorDecoders<GetTaskActivityV2TasksTaskIdActivityGetError> = [
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

  export type GetTaskCommentsV2TasksTaskIdCommentsGetRequest = {
    taskId: string;
  };

  export class GetTaskCommentsV2TasksTaskIdCommentsGetError extends ApiError {
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

    static readonly errors: ErrorDecoders<GetTaskCommentsV2TasksTaskIdCommentsGetError> = [
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

  export type GetTaskReadyCheckV2TasksTaskIdReadyCheckGetRequest = {
    taskId: string;
  };

  export class GetTaskReadyCheckV2TasksTaskIdReadyCheckGetError extends ApiError {
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

    static readonly errors: ErrorDecoders<GetTaskReadyCheckV2TasksTaskIdReadyCheckGetError> = [
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

  export type GetTaskTracesV2TasksTaskIdTracesGetRequest = {
    taskId: string;
    /** @default 20 */
    limit?: number;
    /** @default 0 */
    offset?: number;
    taskVersionId?: TaskVersionId;
    modelId?: ModelId;
    /** @default false */
    excludeTraining?: boolean;
  };

  export const getTaskTracesV2TasksTaskIdTracesGetRequestSchema: Schema<GetTaskTracesV2TasksTaskIdTracesGetRequest> =
    s.lazySchema(() =>
      s.object<GetTaskTracesV2TasksTaskIdTracesGetRequest>({
        taskId: s.string(),
        limit: s.defaulted(s.int().check(s.gte(1), s.lte(200)), 20),
        offset: s.defaulted(s.int().check(s.gte(0), s.lte(2147483647)), 0),
        taskVersionId: s.optional(s.lazy(() => taskVersionIdSchema)),
        modelId: s.optional(s.lazy(() => modelIdSchema)),
        excludeTraining: s.defaulted(s.boolean(), false),
      }),
    );

  export class GetTaskTracesV2TasksTaskIdTracesGetError extends ApiError {
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

    static readonly errors: ErrorDecoders<GetTaskTracesV2TasksTaskIdTracesGetError> = [
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

  export type GetTaskVersionV2TasksTaskIdVersionsVersionIdGetRequest = {
    taskId: string;
    versionId: string;
  };

  export class GetTaskVersionV2TasksTaskIdVersionsVersionIdGetError extends ApiError {
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

    static readonly errors: ErrorDecoders<GetTaskVersionV2TasksTaskIdVersionsVersionIdGetError> = [
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

  export type UpdateTaskCommentV2TasksTaskIdCommentsCommentIdPatchRequest = {
    taskId: string;
    commentId: string;
    body: UpdateTaskCommentRequest;
  };

  export class UpdateTaskCommentV2TasksTaskIdCommentsCommentIdPatchError extends ApiError {
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

    static readonly errors: ErrorDecoders<UpdateTaskCommentV2TasksTaskIdCommentsCommentIdPatchError> = [
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

  export type UploadTasksV2TasksUploadPostRequest = {
    body: TaskUploadRequest;
  };

  export class UploadTasksV2TasksUploadPostError extends ApiError {
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

    static readonly errors: ErrorDecoders<UploadTasksV2TasksUploadPostError> = [
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
}
