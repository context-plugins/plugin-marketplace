import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { EventStream } from "../core/event-stream.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import {
  createTaskGroupRequestSchema,
  type CreateTaskGroupRequest,
} from "../models/create-task-group-request.js";
import { errorResponseSchema, type ErrorResponse } from "../models/error-response.js";
import { httpValidationErrorSchema, type HttpValidationError } from "../models/http-validation-error.js";
import { taskGroupResponseSchema, type TaskGroupResponse } from "../models/task-group-response.js";
import {
  taskGroupRunRequestInternalSchema,
  type TaskGroupRunRequest,
} from "../models/task-group-run-request.js";
import { taskGroupRunResponseSchema, type TaskGroupRunResponse } from "../models/task-group-run-response.js";
import { taskRunInputInternalSchema, type TaskRunInput } from "../models/task-run-input.js";
import { taskRunResultSchema, type TaskRunResult } from "../models/task-run-result.js";
import { taskRunSchema, type TaskRun } from "../models/task-run.js";
import { lastEventIdSchema, type LastEventId } from "../models/unions/last-event-id.js";
import { parallelBeta1Schema, type ParallelBeta1 } from "../models/unions/parallel-beta1.js";
import {
  response200TasksRunsEventsGetV1BetaTasksRunsRunIdEventsGetInternalSchema,
  type Response200TasksRunsEventsGetV1BetaTasksRunsRunIdEventsGet,
} from "../models/unions/response200-tasks-runs-events-get-v1-beta-tasks-runs-run-id-events-get.js";
import {
  response200TasksRunsEventsGetV1TasksRunsRunIdEventsGetInternalSchema,
  type Response200TasksRunsEventsGetV1TasksRunsRunIdEventsGet,
} from "../models/unions/response200-tasks-runs-events-get-v1-tasks-runs-run-id-events-get.js";
import {
  response200TasksSessionsEventsGetV1TasksGroupsTaskgroupIdEventsGetInternalSchema,
  type Response200TasksSessionsEventsGetV1TasksGroupsTaskgroupIdEventsGet,
} from "../models/unions/response200-tasks-sessions-events-get-v1-tasks-groups-taskgroup-id-events-get.js";
import {
  response200TasksTaskgroupsRunsGetV1TasksGroupsTaskgroupIdRunsGetInternalSchema,
  type Response200TasksTaskgroupsRunsGetV1TasksGroupsTaskgroupIdRunsGet,
} from "../models/unions/response200-tasks-taskgroups-runs-get-v1-tasks-groups-taskgroup-id-runs-get.js";
import {
  status11ParallelAiTasksApiSchema,
  type Status11ParallelAiTasksApi,
} from "../models/unions/status11-parallel-ai-tasks-api.js";
import { timeoutSchema, type Timeout } from "../models/unions/timeout.js";
import type { Servers } from "../servers.js";

/**
 * The Task API executes web research and extraction tasks.
 */
export class Tasks {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Stream Task Run Events
   *
   * @remarks
   * Streams events for a task run.
   *
   * Returns a stream of events showing progress updates and state changes for the task run.
   *
   * For task runs that did not have enable_events set to true during creation, the frequency of
   * events will be reduced.
   *
   * @returns Successful Response
   *
   * @throws {@link Tasks.TasksRunsEventsGetV1TasksRunsRunIdEventsGetError} when the API answers
   * with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link ParallelError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  tasksRunsEventsGetV1TasksRunsRunIdEventsGet(
    request: Tasks.TasksRunsEventsGetV1TasksRunsRunIdEventsGetRequest,
    options?: RequestOptions,
  ): ApiPromise<
    EventStream<Response200TasksRunsEventsGetV1TasksRunsRunIdEventsGet>,
    Tasks.TasksRunsEventsGetV1TasksRunsRunIdEventsGetError
  > {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v1/tasks/runs/{run_id}/events"),
        auth: this.#auth.apiKeyAuth,
        pathParams: [{ name: "run_id", value: request.runId, schema: s.string() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: {
          kind: "eventStreamJson",
          dataSchema: response200TasksRunsEventsGetV1TasksRunsRunIdEventsGetInternalSchema,
        },
        errorFactory: Tasks.TasksRunsEventsGetV1TasksRunsRunIdEventsGetError,
      },
      options,
    );
  }

  /**
   * Stream Task Run Events
   *
   * @remarks
   * Streams events for a task run.
   *
   * Returns a stream of events showing progress updates and state changes for the task run.
   *
   * For task runs that did not have enable_events set to true during creation, the frequency of
   * events will be reduced.
   *
   * @returns Successful Response
   *
   * @throws {@link Tasks.TasksRunsEventsGetV1BetaTasksRunsRunIdEventsGetError} when the API answers
   * with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link ParallelError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  tasksRunsEventsGetV1BetaTasksRunsRunIdEventsGet(
    request: Tasks.TasksRunsEventsGetV1BetaTasksRunsRunIdEventsGetRequest,
    options?: RequestOptions,
  ): ApiPromise<
    EventStream<Response200TasksRunsEventsGetV1BetaTasksRunsRunIdEventsGet>,
    Tasks.TasksRunsEventsGetV1BetaTasksRunsRunIdEventsGetError
  > {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v1beta/tasks/runs/{run_id}/events"),
        auth: this.#auth.apiKeyAuth,
        pathParams: [{ name: "run_id", value: request.runId, schema: s.string() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: {
          kind: "eventStreamJson",
          dataSchema: response200TasksRunsEventsGetV1BetaTasksRunsRunIdEventsGetInternalSchema,
        },
        errorFactory: Tasks.TasksRunsEventsGetV1BetaTasksRunsRunIdEventsGetError,
      },
      options,
    );
  }

  /**
   * Retrieve Task Run
   *
   * @remarks
   * Retrieves run status by run_id.
   *
   * The run result is available from the `/result` endpoint.
   *
   * @returns Successful Response
   *
   * @throws {@link Tasks.TasksRunsGetV1TasksRunsRunIdGetError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link ParallelError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  tasksRunsGetV1TasksRunsRunIdGet(
    request: Tasks.TasksRunsGetV1TasksRunsRunIdGetRequest,
    options?: RequestOptions,
  ): ApiPromise<TaskRun, Tasks.TasksRunsGetV1TasksRunsRunIdGetError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v1/tasks/runs/{run_id}"),
        auth: this.#auth.apiKeyAuth,
        pathParams: [{ name: "run_id", value: request.runId, schema: s.string() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: taskRunSchema },
        errorFactory: Tasks.TasksRunsGetV1TasksRunsRunIdGetError,
      },
      options,
    );
  }

  /**
   * Retrieve Task Run Input
   *
   * @remarks
   * Retrieves the input of a run by run_id.
   *
   * @returns Successful Response
   *
   * @throws {@link Tasks.TasksRunsInputGetV1TasksRunsRunIdInputGetError} when the API answers with
   * an error status — narrow on `err.payload.kind`
   *
   * @throws {@link ParallelError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  tasksRunsInputGetV1TasksRunsRunIdInputGet(
    request: Tasks.TasksRunsInputGetV1TasksRunsRunIdInputGetRequest,
    options?: RequestOptions,
  ): ApiPromise<TaskRunInput, Tasks.TasksRunsInputGetV1TasksRunsRunIdInputGetError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v1/tasks/runs/{run_id}/input"),
        auth: this.#auth.apiKeyAuth,
        pathParams: [{ name: "run_id", value: request.runId, schema: s.string() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: taskRunInputInternalSchema },
        errorFactory: Tasks.TasksRunsInputGetV1TasksRunsRunIdInputGetError,
      },
      options,
    );
  }

  /**
   * Create Task Run
   *
   * @remarks
   * Initiates a task run.
   *
   * Returns immediately with a run object in status 'queued'.
   *
   * Beta features can be enabled by setting the 'parallel-beta' header.
   *
   * @returns Successful Response
   *
   * @throws {@link Tasks.TasksRunsPostV1TasksRunsPostError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link ParallelError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  tasksRunsPostV1TasksRunsPost(
    request: Tasks.TasksRunsPostV1TasksRunsPostRequest,
    options?: RequestOptions,
  ): ApiPromise<TaskRun, Tasks.TasksRunsPostV1TasksRunsPostError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/v1/tasks/runs"),
        auth: this.#auth.apiKeyAuth,
        pathParams: [],
        query: [],
        headers: [
          {
            name: "parallel-beta",
            value: request.parallelBeta,
            schema: s.optional(s.lazy(() => parallelBeta1Schema)),
          },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "json", value: request.body, schema: taskRunInputInternalSchema },
      },
      {
        success: { kind: "json", schema: taskRunSchema },
        errorFactory: Tasks.TasksRunsPostV1TasksRunsPostError,
      },
      options,
    );
  }

  /**
   * Retrieve Task Run Result
   *
   * @remarks
   * Retrieves a run result by run_id, blocking until the run is completed.
   *
   * @returns Successful Response
   *
   * @throws {@link Tasks.TasksRunsResultGetV1TasksRunsRunIdResultGetError} when the API answers
   * with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link ParallelError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  tasksRunsResultGetV1TasksRunsRunIdResultGet(
    request: Tasks.TasksRunsResultGetV1TasksRunsRunIdResultGetRequest,
    options?: RequestOptions,
  ): ApiPromise<TaskRunResult, Tasks.TasksRunsResultGetV1TasksRunsRunIdResultGetError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v1/tasks/runs/{run_id}/result"),
        auth: this.#auth.apiKeyAuth,
        pathParams: [{ name: "run_id", value: request.runId, schema: s.string() }],
        query: [{ name: "timeout", value: request.timeout, schema: s.defaulted(s.int(), 600) }],
        headers: [
          {
            name: "parallel-beta",
            value: request.parallelBeta,
            schema: s.optional(s.lazy(() => parallelBeta1Schema)),
          },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: taskRunResultSchema },
        errorFactory: Tasks.TasksRunsResultGetV1TasksRunsRunIdResultGetError,
      },
      options,
    );
  }

  /**
   * Stream Task Group Events
   *
   * @remarks
   * Streams events from a TaskGroup: status updates and run completions.
   *
   * The connection will remain open for up to an hour as long as at least one run in the group is
   * still active.
   *
   * @returns Successful Response
   *
   * @throws {@link Tasks.TasksSessionsEventsGetV1TasksGroupsTaskgroupIdEventsGetError} when the API
   * answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link ParallelError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  tasksSessionsEventsGetV1TasksGroupsTaskgroupIdEventsGet(
    request: Tasks.TasksSessionsEventsGetV1TasksGroupsTaskgroupIdEventsGetRequest,
    options?: RequestOptions,
  ): ApiPromise<
    EventStream<Response200TasksSessionsEventsGetV1TasksGroupsTaskgroupIdEventsGet>,
    Tasks.TasksSessionsEventsGetV1TasksGroupsTaskgroupIdEventsGetError
  > {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v1/tasks/groups/{taskgroup_id}/events"),
        auth: this.#auth.apiKeyAuth,
        pathParams: [{ name: "taskgroup_id", value: request.taskgroupId, schema: s.string() }],
        query: [
          {
            name: "last_event_id",
            value: request.lastEventId,
            schema: s.optional(s.lazy(() => lastEventIdSchema)),
          },
          { name: "timeout", value: request.timeout, schema: s.optional(s.lazy(() => timeoutSchema)) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: {
          kind: "eventStreamJson",
          dataSchema: response200TasksSessionsEventsGetV1TasksGroupsTaskgroupIdEventsGetInternalSchema,
        },
        errorFactory: Tasks.TasksSessionsEventsGetV1TasksGroupsTaskgroupIdEventsGetError,
      },
      options,
    );
  }

  /**
   * Retrieve Task Group
   *
   * @remarks
   * Retrieves aggregated status across runs in a TaskGroup.
   *
   * @returns Successful Response
   *
   * @throws {@link Tasks.TasksTaskgroupsGetV1TasksGroupsTaskgroupIdGetError} when the API answers
   * with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link ParallelError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  tasksTaskgroupsGetV1TasksGroupsTaskgroupIdGet(
    request: Tasks.TasksTaskgroupsGetV1TasksGroupsTaskgroupIdGetRequest,
    options?: RequestOptions,
  ): ApiPromise<TaskGroupResponse, Tasks.TasksTaskgroupsGetV1TasksGroupsTaskgroupIdGetError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v1/tasks/groups/{taskgroup_id}"),
        auth: this.#auth.apiKeyAuth,
        pathParams: [{ name: "taskgroup_id", value: request.taskgroupId, schema: s.string() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: taskGroupResponseSchema },
        errorFactory: Tasks.TasksTaskgroupsGetV1TasksGroupsTaskgroupIdGetError,
      },
      options,
    );
  }

  /**
   * Create Task Group
   *
   * @remarks
   * Initiates a TaskGroup to group and track multiple runs.
   *
   * @returns Successful Response
   *
   * @throws {@link Tasks.TasksTaskgroupsPostV1TasksGroupsPostError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link ParallelError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  tasksTaskgroupsPostV1TasksGroupsPost(
    request: Tasks.TasksTaskgroupsPostV1TasksGroupsPostRequest,
    options?: RequestOptions,
  ): ApiPromise<TaskGroupResponse, Tasks.TasksTaskgroupsPostV1TasksGroupsPostError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/v1/tasks/groups"),
        auth: this.#auth.apiKeyAuth,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: createTaskGroupRequestSchema },
      },
      {
        success: { kind: "json", schema: taskGroupResponseSchema },
        errorFactory: Tasks.TasksTaskgroupsPostV1TasksGroupsPostError,
      },
      options,
    );
  }

  /**
   * Fetch Task Group Runs
   *
   * @remarks
   * Retrieves task runs in a TaskGroup and optionally their inputs and outputs.
   *
   * All runs within a TaskGroup are returned as a stream. To get the inputs and/or outputs back in
   * the stream, set the corresponding `include_input` and `include_output` parameters to `true`.
   *
   * The stream is resumable using the `event_id` as the cursor. To resume a stream, specify the
   * `last_event_id` parameter with the `event_id` of the last event in the stream. The stream will
   * resume from the next event after the `last_event_id`.
   *
   * @returns Successful Response
   *
   * @throws {@link Tasks.TasksTaskgroupsRunsGetV1TasksGroupsTaskgroupIdRunsGetError} when the API
   * answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link ParallelError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  tasksTaskgroupsRunsGetV1TasksGroupsTaskgroupIdRunsGet(
    request: Tasks.TasksTaskgroupsRunsGetV1TasksGroupsTaskgroupIdRunsGetRequest,
    options?: RequestOptions,
  ): ApiPromise<
    EventStream<Response200TasksTaskgroupsRunsGetV1TasksGroupsTaskgroupIdRunsGet>,
    Tasks.TasksTaskgroupsRunsGetV1TasksGroupsTaskgroupIdRunsGetError
  > {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v1/tasks/groups/{taskgroup_id}/runs"),
        auth: this.#auth.apiKeyAuth,
        pathParams: [{ name: "taskgroup_id", value: request.taskgroupId, schema: s.string() }],
        query: [
          {
            name: "last_event_id",
            value: request.lastEventId,
            schema: s.optional(s.lazy(() => lastEventIdSchema)),
          },
          {
            name: "status",
            value: request.status,
            schema: s.optional(s.lazy(() => status11ParallelAiTasksApiSchema)),
          },
          { name: "include_input", value: request.includeInput, schema: s.defaulted(s.boolean(), false) },
          { name: "include_output", value: request.includeOutput, schema: s.defaulted(s.boolean(), false) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: {
          kind: "eventStreamJson",
          dataSchema: response200TasksTaskgroupsRunsGetV1TasksGroupsTaskgroupIdRunsGetInternalSchema,
        },
        errorFactory: Tasks.TasksTaskgroupsRunsGetV1TasksGroupsTaskgroupIdRunsGetError,
      },
      options,
    );
  }

  /**
   * Retrieve Task Group Run
   *
   * @remarks
   * Retrieves run status by run_id.
   *
   * This endpoint is equivalent to fetching run status directly using the `retrieve()` method or
   * the `tasks/runs` GET endpoint.
   *
   * The run result is available from the `/result` endpoint.
   *
   * @returns Successful Response
   *
   * @throws {@link Tasks.TasksTaskgroupsRunsIdGetV1TasksGroupsTaskgroupIdRunsRunIdGetError} when
   * the API answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link ParallelError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  tasksTaskgroupsRunsIdGetV1TasksGroupsTaskgroupIdRunsRunIdGet(
    request: Tasks.TasksTaskgroupsRunsIdGetV1TasksGroupsTaskgroupIdRunsRunIdGetRequest,
    options?: RequestOptions,
  ): ApiPromise<TaskRun, Tasks.TasksTaskgroupsRunsIdGetV1TasksGroupsTaskgroupIdRunsRunIdGetError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v1/tasks/groups/{taskgroup_id}/runs/{run_id}"),
        auth: this.#auth.apiKeyAuth,
        pathParams: [
          { name: "taskgroup_id", value: request.taskgroupId, schema: s.string() },
          { name: "run_id", value: request.runId, schema: s.string() },
        ],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: taskRunSchema },
        errorFactory: Tasks.TasksTaskgroupsRunsIdGetV1TasksGroupsTaskgroupIdRunsRunIdGetError,
      },
      options,
    );
  }

  /**
   * Add Runs to Task Group
   *
   * @remarks
   * Initiates multiple task runs within a TaskGroup.
   *
   * @returns Successful Response
   *
   * @throws {@link Tasks.TasksTaskgroupsRunsPostV1TasksGroupsTaskgroupIdRunsPostError} when the API
   * answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link ParallelError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  tasksTaskgroupsRunsPostV1TasksGroupsTaskgroupIdRunsPost(
    request: Tasks.TasksTaskgroupsRunsPostV1TasksGroupsTaskgroupIdRunsPostRequest,
    options?: RequestOptions,
  ): ApiPromise<TaskGroupRunResponse, Tasks.TasksTaskgroupsRunsPostV1TasksGroupsTaskgroupIdRunsPostError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/v1/tasks/groups/{taskgroup_id}/runs"),
        auth: this.#auth.apiKeyAuth,
        pathParams: [{ name: "taskgroup_id", value: request.taskgroupId, schema: s.string() }],
        query: [
          { name: "refresh_status", value: request.refreshStatus, schema: s.defaulted(s.boolean(), true) },
        ],
        headers: [
          {
            name: "parallel-beta",
            value: request.parallelBeta,
            schema: s.optional(s.lazy(() => parallelBeta1Schema)),
          },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "json", value: request.body, schema: taskGroupRunRequestInternalSchema },
      },
      {
        success: { kind: "json", schema: taskGroupRunResponseSchema },
        errorFactory: Tasks.TasksTaskgroupsRunsPostV1TasksGroupsTaskgroupIdRunsPostError,
      },
      options,
    );
  }
}

export namespace Tasks {
  export type TasksRunsEventsGetV1TasksRunsRunIdEventsGetRequest = {
    runId: string;
  };

  export class TasksRunsEventsGetV1TasksRunsRunIdEventsGetError extends ApiError {
    declare readonly payload:
      | Declared<"errorResponse", ErrorResponse>
      | Declared<"errorResponse2", ErrorResponse>
      | Declared<"errorResponse3", ErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<TasksRunsEventsGetV1TasksRunsRunIdEventsGetError> = [
      { on: 401, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 404, kind: "errorResponse2", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 422, kind: "errorResponse3", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export type TasksRunsEventsGetV1BetaTasksRunsRunIdEventsGetRequest = {
    runId: string;
  };

  export class TasksRunsEventsGetV1BetaTasksRunsRunIdEventsGetError extends ApiError {
    declare readonly payload:
      | Declared<"errorResponse", ErrorResponse>
      | Declared<"errorResponse2", ErrorResponse>
      | Declared<"errorResponse3", ErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<TasksRunsEventsGetV1BetaTasksRunsRunIdEventsGetError> = [
      { on: 401, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 404, kind: "errorResponse2", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 422, kind: "errorResponse3", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export type TasksRunsGetV1TasksRunsRunIdGetRequest = {
    runId: string;
  };

  export class TasksRunsGetV1TasksRunsRunIdGetError extends ApiError {
    declare readonly payload:
      | Declared<"errorResponse", ErrorResponse>
      | Declared<"errorResponse2", ErrorResponse>
      | Declared<"errorResponse3", ErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<TasksRunsGetV1TasksRunsRunIdGetError> = [
      { on: 401, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 404, kind: "errorResponse2", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 422, kind: "errorResponse3", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export type TasksRunsInputGetV1TasksRunsRunIdInputGetRequest = {
    runId: string;
  };

  export class TasksRunsInputGetV1TasksRunsRunIdInputGetError extends ApiError {
    declare readonly payload:
      | Declared<"errorResponse", ErrorResponse>
      | Declared<"errorResponse2", ErrorResponse>
      | Declared<"errorResponse3", ErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<TasksRunsInputGetV1TasksRunsRunIdInputGetError> = [
      { on: 401, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 404, kind: "errorResponse2", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 422, kind: "errorResponse3", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export type TasksRunsPostV1TasksRunsPostRequest = {
    parallelBeta?: ParallelBeta1;
    body: TaskRunInput;
  };

  export class TasksRunsPostV1TasksRunsPostError extends ApiError {
    declare readonly payload:
      | Declared<"errorResponse", ErrorResponse>
      | Declared<"errorResponse2", ErrorResponse>
      | Declared<"errorResponse3", ErrorResponse>
      | Declared<"errorResponse4", ErrorResponse>
      | Declared<"errorResponse5", ErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<TasksRunsPostV1TasksRunsPostError> = [
      { on: 401, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 402, kind: "errorResponse2", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 403, kind: "errorResponse3", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 422, kind: "errorResponse4", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 429, kind: "errorResponse5", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export type TasksRunsResultGetV1TasksRunsRunIdResultGetRequest = {
    runId: string;
    /** @default 600 */
    timeout?: number;
    parallelBeta?: ParallelBeta1;
  };

  export class TasksRunsResultGetV1TasksRunsRunIdResultGetError extends ApiError {
    declare readonly payload:
      | Declared<"errorResponse", ErrorResponse>
      | Declared<"errorResponse2", ErrorResponse>
      | Declared<"errorResponse3", ErrorResponse>
      | Declared<"errorResponse4", ErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<TasksRunsResultGetV1TasksRunsRunIdResultGetError> = [
      { on: 401, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 404, kind: "errorResponse2", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 408, kind: "errorResponse3", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 422, kind: "errorResponse4", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export type TasksSessionsEventsGetV1TasksGroupsTaskgroupIdEventsGetRequest = {
    taskgroupId: string;
    lastEventId?: LastEventId;
    timeout?: Timeout;
  };

  export class TasksSessionsEventsGetV1TasksGroupsTaskgroupIdEventsGetError extends ApiError {
    declare readonly payload:
      | Declared<"errorResponse", ErrorResponse>
      | Declared<"httpValidationError", HttpValidationError>
      | Undeclared;

    static readonly errors: ErrorDecoders<TasksSessionsEventsGetV1TasksGroupsTaskgroupIdEventsGetError> = [
      { on: 404, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 422, kind: "httpValidationError", decode: { kind: "json", schema: httpValidationErrorSchema } },
    ];
  }

  export type TasksTaskgroupsGetV1TasksGroupsTaskgroupIdGetRequest = {
    taskgroupId: string;
  };

  export class TasksTaskgroupsGetV1TasksGroupsTaskgroupIdGetError extends ApiError {
    declare readonly payload: Declared<"httpValidationError", HttpValidationError> | Undeclared;

    static readonly errors: ErrorDecoders<TasksTaskgroupsGetV1TasksGroupsTaskgroupIdGetError> = [
      { on: 422, kind: "httpValidationError", decode: { kind: "json", schema: httpValidationErrorSchema } },
    ];
  }

  export type TasksTaskgroupsPostV1TasksGroupsPostRequest = {
    body: CreateTaskGroupRequest;
  };

  export class TasksTaskgroupsPostV1TasksGroupsPostError extends ApiError {
    declare readonly payload: Declared<"httpValidationError", HttpValidationError> | Undeclared;

    static readonly errors: ErrorDecoders<TasksTaskgroupsPostV1TasksGroupsPostError> = [
      { on: 422, kind: "httpValidationError", decode: { kind: "json", schema: httpValidationErrorSchema } },
    ];
  }

  export type TasksTaskgroupsRunsGetV1TasksGroupsTaskgroupIdRunsGetRequest = {
    taskgroupId: string;
    lastEventId?: LastEventId;
    status?: Status11ParallelAiTasksApi;
    /** @default false */
    includeInput?: boolean;
    /** @default false */
    includeOutput?: boolean;
  };

  export class TasksTaskgroupsRunsGetV1TasksGroupsTaskgroupIdRunsGetError extends ApiError {
    declare readonly payload:
      | Declared<"errorResponse", ErrorResponse>
      | Declared<"httpValidationError", HttpValidationError>
      | Undeclared;

    static readonly errors: ErrorDecoders<TasksTaskgroupsRunsGetV1TasksGroupsTaskgroupIdRunsGetError> = [
      { on: 404, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 422, kind: "httpValidationError", decode: { kind: "json", schema: httpValidationErrorSchema } },
    ];
  }

  export type TasksTaskgroupsRunsIdGetV1TasksGroupsTaskgroupIdRunsRunIdGetRequest = {
    taskgroupId: string;
    runId: string;
  };

  export class TasksTaskgroupsRunsIdGetV1TasksGroupsTaskgroupIdRunsRunIdGetError extends ApiError {
    declare readonly payload:
      | Declared<"errorResponse", ErrorResponse>
      | Declared<"errorResponse2", ErrorResponse>
      | Declared<"errorResponse3", ErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<TasksTaskgroupsRunsIdGetV1TasksGroupsTaskgroupIdRunsRunIdGetError> =
      [
        { on: 401, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
        { on: 404, kind: "errorResponse2", decode: { kind: "json", schema: errorResponseSchema } },
        { on: 422, kind: "errorResponse3", decode: { kind: "json", schema: errorResponseSchema } },
      ];
  }

  export type TasksTaskgroupsRunsPostV1TasksGroupsTaskgroupIdRunsPostRequest = {
    taskgroupId: string;
    /** @default true */
    refreshStatus?: boolean;
    parallelBeta?: ParallelBeta1;
    body: TaskGroupRunRequest;
  };

  export class TasksTaskgroupsRunsPostV1TasksGroupsTaskgroupIdRunsPostError extends ApiError {
    declare readonly payload: Declared<"httpValidationError", HttpValidationError> | Undeclared;

    static readonly errors: ErrorDecoders<TasksTaskgroupsRunsPostV1TasksGroupsTaskgroupIdRunsPostError> = [
      { on: 422, kind: "httpValidationError", decode: { kind: "json", schema: httpValidationErrorSchema } },
    ];
  }
}
