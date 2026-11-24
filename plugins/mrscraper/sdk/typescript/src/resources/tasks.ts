import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { anyAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import {
  taskBatchCreateRequestSchema,
  type TaskBatchCreateRequest,
} from "../models/task-batch-create-request.js";
import {
  taskBatchUpdateRequestSchema,
  type TaskBatchUpdateRequest,
} from "../models/task-batch-update-request.js";
import { taskTaskSwaggerSchema, type TaskTaskSwagger } from "../models/task-task-swagger.js";
import {
  taskUpdateTaskStatusRequestSchema,
  type TaskUpdateTaskStatusRequest,
} from "../models/task-update-task-status-request.js";
import { tasksBulkResponseSchema, type TasksBulkResponse } from "../models/tasks-bulk-response.js";
import { tasksBulkResponse1Schema, type TasksBulkResponse1 } from "../models/tasks-bulk-response1.js";
import { tasksResponseSchema, type TasksResponse } from "../models/tasks-response.js";
import { tasksResponse1Schema, type TasksResponse1 } from "../models/tasks-response1.js";
import { tasksResponse3Schema, type TasksResponse3 } from "../models/tasks-response3.js";
import { tasksStatusResponseSchema, type TasksStatusResponse } from "../models/tasks-status-response.js";
import type { Servers } from "../servers.js";

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
   * Get tasks
   *
   * @returns Paginated tasks; countOnly=true returns an empty data array
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link MrScraperError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getTasks(request: Tasks.GetTasksRequest, options?: RequestOptions): ApiPromise<TasksResponse, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.defaultScraperServiceGatewayAuthApi("/tasks"),
        auth: anyAuth(this.#auth.apiKey, this.#auth.bearerAuth),
        pathParams: [],
        query: [
          { name: "startAt", value: request.startAt, schema: s.string() },
          { name: "endAt", value: request.endAt, schema: s.string() },
          { name: "pageSize", value: request.pageSize, schema: s.optional(s.int()) },
          { name: "page", value: request.page, schema: s.optional(s.int()) },
          { name: "sortField", value: request.sortField, schema: s.optional(s.string()) },
          { name: "sortOrder", value: request.sortOrder, schema: s.optional(s.string()) },
          { name: "search", value: request.search, schema: s.optional(s.string()) },
          { name: "dateRangeColumn", value: request.dateRangeColumn, schema: s.optional(s.string()) },
          { name: "domain", value: request.domain, schema: s.optional(s.string()) },
          { name: "action", value: request.action, schema: s.optional(s.string()) },
          { name: "status", value: request.status, schema: s.optional(s.string()) },
          { name: "jobId", value: request.jobId, schema: s.optional(s.int()) },
          { name: "isParent", value: request.isParent, schema: s.optional(s.boolean()) },
          { name: "countOnly", value: request.countOnly, schema: s.optional(s.boolean()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: tasksResponseSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Get tasks by id
   *
   * @returns Task envelope; data has Task fields, with result decoded as JSON when result=json
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link MrScraperError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getTasksById(
    request: Tasks.GetTasksByIdRequest,
    options?: RequestOptions,
  ): ApiPromise<TasksResponse3, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.defaultScraperServiceGatewayAuthApi("/tasks/{id}"),
        auth: anyAuth(this.#auth.apiKey, this.#auth.bearerAuth),
        pathParams: [{ name: "id", value: request.id, schema: s.int() }],
        query: [{ name: "result", value: request.result, schema: s.optional(s.string()) }],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: tasksResponse3Schema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Create tasks
   *
   * @returns Task created
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link MrScraperError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  postTasks(request: Tasks.PostTasksRequest, options?: RequestOptions): ApiPromise<TasksResponse1, ApiError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.defaultScraperServiceGatewayAuthApi("/tasks"),
        auth: anyAuth(this.#auth.apiKey, this.#auth.bearerAuth),
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: taskTaskSwaggerSchema },
      },
      {
        success: { kind: "json", schema: tasksResponse1Schema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Create tasks bulk
   *
   * @returns Tasks created
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link MrScraperError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  postTasksBulk(
    request: Tasks.PostTasksBulkRequest,
    options?: RequestOptions,
  ): ApiPromise<TasksBulkResponse1, ApiError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.defaultScraperServiceGatewayAuthApi("/tasks/bulk"),
        auth: anyAuth(this.#auth.apiKey, this.#auth.bearerAuth),
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: taskBatchCreateRequestSchema },
      },
      {
        success: { kind: "json", schema: tasksBulkResponse1Schema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Replace tasks bulk
   *
   * @returns Updated tasks; originalTaskId appears only on tasks cloned from a locked period
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link MrScraperError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  putTasksBulk(
    request: Tasks.PutTasksBulkRequest,
    options?: RequestOptions,
  ): ApiPromise<TasksBulkResponse, ApiError> {
    return this.#rawClient.execute(
      {
        method: "PUT",
        urlTemplate: this.#servers.defaultScraperServiceGatewayAuthApi("/tasks/bulk"),
        auth: anyAuth(this.#auth.apiKey, this.#auth.bearerAuth),
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: taskBatchUpdateRequestSchema },
      },
      {
        success: { kind: "json", schema: tasksBulkResponseSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Replace tasks by id
   *
   * @returns Task updated
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link MrScraperError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  putTasksById(
    request: Tasks.PutTasksByIdRequest,
    options?: RequestOptions,
  ): ApiPromise<TasksResponse1, ApiError> {
    return this.#rawClient.execute(
      {
        method: "PUT",
        urlTemplate: this.#servers.defaultScraperServiceGatewayAuthApi("/tasks/{id}"),
        auth: anyAuth(this.#auth.apiKey, this.#auth.bearerAuth),
        pathParams: [{ name: "id", value: request.id, schema: s.int() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: taskTaskSwaggerSchema },
      },
      {
        success: { kind: "json", schema: tasksResponse1Schema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Replace tasks by id status
   *
   * @returns Task status updated
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link MrScraperError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  putTasksByIdStatus(
    request: Tasks.PutTasksByIdStatusRequest,
    options?: RequestOptions,
  ): ApiPromise<TasksStatusResponse, ApiError> {
    return this.#rawClient.execute(
      {
        method: "PUT",
        urlTemplate: this.#servers.defaultScraperServiceGatewayAuthApi("/tasks/{id}/status"),
        auth: anyAuth(this.#auth.apiKey, this.#auth.bearerAuth),
        pathParams: [{ name: "id", value: request.id, schema: s.int() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: taskUpdateTaskStatusRequestSchema },
      },
      {
        success: { kind: "json", schema: tasksStatusResponseSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }
}

export namespace Tasks {
  export type GetTasksRequest = {
    /**
     * Start date for created_at filter (RFC3339, YYYY-MM-DD HH:mm:ss, or YYYY-MM-DD; maximum range
     * 7 days)
     */
    startAt: string;
    /**
     * End date for created_at filter (RFC3339, YYYY-MM-DD HH:mm:ss, or YYYY-MM-DD; maximum range 7
     * days)
     */
    endAt: string;
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
    /** Custom date range column */
    dateRangeColumn?: string;
    /** Filter by domain */
    domain?: string;
    /** Filter by action */
    action?: string;
    /** Filter by status */
    status?: string;
    /** Filter by jobId */
    jobId?: number;
    /** Filter tokenUsage batch parent tasks */
    isParent?: boolean;
    /** Return only total count without loading task data */
    countOnly?: boolean;
  };

  export type GetTasksByIdRequest = {
    /** Task ID */
    id: number;
    /**
     * Use json to decode the result body and include available callbackStatus/callbackError fields
     */
    result?: string;
  };

  export type PostTasksRequest = {
    /** Task object (ID will be auto-generated, do not include) */
    body: TaskTaskSwagger;
  };

  export type PostTasksBulkRequest = {
    /** Array of tasks to create */
    body: TaskBatchCreateRequest;
  };

  export type PutTasksBulkRequest = {
    /** Array of tasks to update; each task must include its ID */
    body: TaskBatchUpdateRequest;
  };

  export type PutTasksByIdRequest = {
    /** Task ID */
    id: number;
    /** Task object */
    body: TaskTaskSwagger;
  };

  export type PutTasksByIdStatusRequest = {
    /** Task ID */
    id: number;
    /** Task status update object */
    body: TaskUpdateTaskStatusRequest;
  };
}
