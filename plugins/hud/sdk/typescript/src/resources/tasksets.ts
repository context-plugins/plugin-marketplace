import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { noneAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { errorResponseSchema, type ErrorResponse } from "../models/error-response.js";
import { httpValidationErrorSchema, type HttpValidationError } from "../models/http-validation-error.js";
import {
  paginatedResponseTaskResponseInternalSchema,
  type PaginatedResponseTaskResponse,
} from "../models/paginated-response-task-response.js";
import {
  paginatedResponseTasksetResponseInternalSchema,
  type PaginatedResponseTasksetResponse,
} from "../models/paginated-response-taskset-response.js";
import {
  SortByHudPlatformTasksetsApi,
  sortByHudPlatformTasksetsApiSchema,
} from "../models/sort-by-hud-platform-tasksets-api.js";
import {
  tasksetCreateRequestInternalSchema,
  type TasksetCreateRequest,
} from "../models/taskset-create-request.js";
import {
  tasksetExportResponseInternalSchema,
  type TasksetExportResponse,
} from "../models/taskset-export-response.js";
import { tasksetResponseInternalSchema, type TasksetResponse } from "../models/taskset-response.js";
import { minTasksInternalSchema, minTasksSchema, type MinTasks } from "../models/unions/min-tasks.js";
import { projectId2Schema, type ProjectId2 } from "../models/unions/project-id2.js";
import { registryId2Schema, type RegistryId2 } from "../models/unions/registry-id2.js";
import { scenarioIdSchema, type ScenarioId } from "../models/unions/scenario-id.js";
import {
  searchHudPlatformTasksetsApiSchema,
  type SearchHudPlatformTasksetsApi,
} from "../models/unions/search-hud-platform-tasksets-api.js";
import type { Servers } from "../servers.js";

export class Tasksets {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;

  constructor(rawClient: RawClient, servers: Servers) {
    this.#rawClient = rawClient;
    this.#servers = servers;
  }

  /**
   * Create Taskset
   *
   * @remarks
   * Create a taskset for the caller's team.
   *
   * @returns Successful Response
   *
   * @throws {@link Tasksets.CreateTasksetV2TasksetsPostError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link HudError} when no usable response was produced: a connection failure, a timeout,
   * a body that would not decode, a value that would not encode, or a credential that could not be
   * obtained
   */
  createTasksetV2TasksetsPost(
    request: Tasksets.CreateTasksetV2TasksetsPostRequest,
    options?: RequestOptions,
  ): ApiPromise<TasksetResponse, Tasksets.CreateTasksetV2TasksetsPostError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/v2/tasksets"),
        auth: noneAuth,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: tasksetCreateRequestInternalSchema },
      },
      {
        success: { kind: "json", schema: tasksetResponseInternalSchema },
        errorFactory: Tasksets.CreateTasksetV2TasksetsPostError,
      },
      options,
    );
  }

  /**
   * Export Taskset
   *
   * @remarks
   * Fetch a taskset by UUID in the task wire format.
   *
   * Same shape as the by-name lookup, and the only fetch path for cross-team public tasksets.
   *
   * @returns Successful Response
   *
   * @throws {@link Tasksets.ExportTasksetV2TasksetsTasksetIdExportGetError} when the API answers
   * with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link HudError} when no usable response was produced: a connection failure, a timeout,
   * a body that would not decode, a value that would not encode, or a credential that could not be
   * obtained
   */
  exportTasksetV2TasksetsTasksetIdExportGet(
    request: Tasksets.ExportTasksetV2TasksetsTasksetIdExportGetRequest,
    options?: RequestOptions,
  ): ApiPromise<TasksetExportResponse, Tasksets.ExportTasksetV2TasksetsTasksetIdExportGetError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v2/tasksets/{taskset_id}/export"),
        auth: noneAuth,
        pathParams: [{ name: "taskset_id", value: request.tasksetId, schema: s.string() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: tasksetExportResponseInternalSchema },
        errorFactory: Tasksets.ExportTasksetV2TasksetsTasksetIdExportGetError,
      },
      options,
    );
  }

  /**
   * Get Taskset By Name
   *
   * @remarks
   * Resolve a taskset by name and return its tasks in the task wire format.
   *
   * Returns the latest version per task — the read-side counterpart of `POST /tasks/upload`.
   *
   * Scoped to the caller's team. Cross-team public tasksets are accessible by UUID (`GET
   * /tasksets/{id}/export`) only — name uniqueness is per team, so resolving by name across teams
   * would be ambiguous.
   *
   * @returns Successful Response
   *
   * @throws {@link Tasksets.GetTasksetByNameV2TasksetsByNameNameGetError} when the API answers with
   * an error status — narrow on `err.payload.kind`
   *
   * @throws {@link HudError} when no usable response was produced: a connection failure, a timeout,
   * a body that would not decode, a value that would not encode, or a credential that could not be
   * obtained
   */
  getTasksetByNameV2TasksetsByNameNameGet(
    request: Tasksets.GetTasksetByNameV2TasksetsByNameNameGetRequest,
    options?: RequestOptions,
  ): ApiPromise<TasksetExportResponse, Tasksets.GetTasksetByNameV2TasksetsByNameNameGetError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v2/tasksets/by-name/{name}"),
        auth: noneAuth,
        pathParams: [{ name: "name", value: request.name, schema: s.string() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: tasksetExportResponseInternalSchema },
        errorFactory: Tasksets.GetTasksetByNameV2TasksetsByNameNameGetError,
      },
      options,
    );
  }

  /**
   * Get Taskset
   *
   * @remarks
   * Get a taskset by id.
   *
   * @returns Successful Response
   *
   * @throws {@link Tasksets.GetTasksetV2TasksetsTasksetIdGetError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link HudError} when no usable response was produced: a connection failure, a timeout,
   * a body that would not decode, a value that would not encode, or a credential that could not be
   * obtained
   */
  getTasksetV2TasksetsTasksetIdGet(
    request: Tasksets.GetTasksetV2TasksetsTasksetIdGetRequest,
    options?: RequestOptions,
  ): ApiPromise<TasksetResponse, Tasksets.GetTasksetV2TasksetsTasksetIdGetError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v2/tasksets/{taskset_id}"),
        auth: noneAuth,
        pathParams: [{ name: "taskset_id", value: request.tasksetId, schema: s.string() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: tasksetResponseInternalSchema },
        errorFactory: Tasksets.GetTasksetV2TasksetsTasksetIdGetError,
      },
      options,
    );
  }

  /**
   * List Taskset Tasks
   *
   * @remarks
   * List live task definitions, including for public-only viewers.
   *
   * @returns Successful Response
   *
   * @throws {@link Tasksets.ListTasksetTasksV2TasksetsTasksetIdTasksGetError} when the API answers
   * with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link HudError} when no usable response was produced: a connection failure, a timeout,
   * a body that would not decode, a value that would not encode, or a credential that could not be
   * obtained
   */
  listTasksetTasksV2TasksetsTasksetIdTasksGet(
    request: Tasksets.ListTasksetTasksV2TasksetsTasksetIdTasksGetRequest,
    options?: RequestOptions,
  ): ApiPromise<PaginatedResponseTaskResponse, Tasksets.ListTasksetTasksV2TasksetsTasksetIdTasksGetError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v2/tasksets/{taskset_id}/tasks"),
        auth: noneAuth,
        pathParams: [{ name: "taskset_id", value: request.tasksetId, schema: s.string() }],
        query: [
          { name: "limit", value: request.limit, schema: s.defaulted(s.int(), 50) },
          { name: "offset", value: request.offset, schema: s.defaulted(s.int(), 0) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: paginatedResponseTaskResponseInternalSchema },
        errorFactory: Tasksets.ListTasksetTasksV2TasksetsTasksetIdTasksGetError,
      },
      options,
    );
  }

  /**
   * List Tasksets
   *
   * @remarks
   * List tasksets visible to the caller, with search, ownership, and sort filters.
   *
   * @returns Successful Response
   *
   * @throws {@link Tasksets.ListTasksetsV2TasksetsGetError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link HudError} when no usable response was produced: a connection failure, a timeout,
   * a body that would not decode, a value that would not encode, or a credential that could not be
   * obtained
   */
  listTasksetsV2TasksetsGet(
    request: Tasksets.ListTasksetsV2TasksetsGetRequest = {},
    options?: RequestOptions,
  ): ApiPromise<PaginatedResponseTasksetResponse, Tasksets.ListTasksetsV2TasksetsGetError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v2/tasksets"),
        auth: noneAuth,
        pathParams: [],
        query: [
          { name: "limit", value: request.limit, schema: s.defaulted(s.int(), 50) },
          { name: "offset", value: request.offset, schema: s.defaulted(s.int(), 0) },
          {
            name: "search",
            value: request.search,
            schema: s.optional(s.lazy(() => searchHudPlatformTasksetsApiSchema)),
          },
          { name: "public_only", value: request.publicOnly, schema: s.defaulted(s.boolean(), false) },
          { name: "featured_only", value: request.featuredOnly, schema: s.defaulted(s.boolean(), false) },
          { name: "owner_only", value: request.ownerOnly, schema: s.defaulted(s.boolean(), false) },
          {
            name: "min_tasks",
            value: request.minTasks,
            schema: s.optional(s.lazy(() => minTasksInternalSchema)),
          },
          {
            name: "registry_id",
            value: request.registryId,
            schema: s.optional(s.lazy(() => registryId2Schema)),
          },
          {
            name: "scenario_id",
            value: request.scenarioId,
            schema: s.optional(s.lazy(() => scenarioIdSchema)),
          },
          {
            name: "project_id",
            value: request.projectId,
            schema: s.optional(s.lazy(() => projectId2Schema)),
          },
          {
            name: "sort_by",
            value: request.sortBy,
            schema: s.defaulted(sortByHudPlatformTasksetsApiSchema, SortByHudPlatformTasksetsApi.Starred),
          },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: paginatedResponseTasksetResponseInternalSchema },
        errorFactory: Tasksets.ListTasksetsV2TasksetsGetError,
      },
      options,
    );
  }
}

export namespace Tasksets {
  export type CreateTasksetV2TasksetsPostRequest = {
    body: TasksetCreateRequest;
  };

  export class CreateTasksetV2TasksetsPostError extends ApiError {
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

    static readonly errors: ErrorDecoders<CreateTasksetV2TasksetsPostError> = [
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

  export type ExportTasksetV2TasksetsTasksetIdExportGetRequest = {
    tasksetId: string;
  };

  export class ExportTasksetV2TasksetsTasksetIdExportGetError extends ApiError {
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

    static readonly errors: ErrorDecoders<ExportTasksetV2TasksetsTasksetIdExportGetError> = [
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

  export type GetTasksetByNameV2TasksetsByNameNameGetRequest = {
    name: string;
  };

  export class GetTasksetByNameV2TasksetsByNameNameGetError extends ApiError {
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

    static readonly errors: ErrorDecoders<GetTasksetByNameV2TasksetsByNameNameGetError> = [
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

  export type GetTasksetV2TasksetsTasksetIdGetRequest = {
    tasksetId: string;
  };

  export class GetTasksetV2TasksetsTasksetIdGetError extends ApiError {
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

    static readonly errors: ErrorDecoders<GetTasksetV2TasksetsTasksetIdGetError> = [
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

  export type ListTasksetTasksV2TasksetsTasksetIdTasksGetRequest = {
    tasksetId: string;
    /** @default 50 */
    limit?: number;
    /** @default 0 */
    offset?: number;
  };

  export const listTasksetTasksV2TasksetsTasksetIdTasksGetRequestSchema: Schema<ListTasksetTasksV2TasksetsTasksetIdTasksGetRequest> =
    s.lazySchema(() =>
      s.object<ListTasksetTasksV2TasksetsTasksetIdTasksGetRequest>({
        tasksetId: s.string(),
        limit: s.defaulted(s.int().check(s.gte(1), s.lte(1000)), 50),
        offset: s.defaulted(s.int().check(s.gte(0), s.lte(2147483647)), 0),
      }),
    );

  export class ListTasksetTasksV2TasksetsTasksetIdTasksGetError extends ApiError {
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

    static readonly errors: ErrorDecoders<ListTasksetTasksV2TasksetsTasksetIdTasksGetError> = [
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

  export type ListTasksetsV2TasksetsGetRequest = {
    /** @default 50 */
    limit?: number;
    /** @default 0 */
    offset?: number;
    /** ILIKE-match on taskset name */
    search?: SearchHudPlatformTasksetsApi;
    /** Only public tasksets; anonymous browsing requires this or featured_only @default false */
    publicOnly?: boolean;
    /** Only platform-featured tasksets, which are always public @default false */
    featuredOnly?: boolean;
    /**
     * Only tasksets owned by the caller's membership; ignored when public_only=True
     *
     * @default false
     */
    ownerOnly?: boolean;
    /** Only tasksets with at least this many live tasks */
    minTasks?: MinTasks;
    /** Only tasksets with a live task whose latest version uses a scenario on this registry */
    registryId?: RegistryId2;
    /** Only tasksets with a live task whose latest version uses this scenario */
    scenarioId?: ScenarioId;
    /** Only tasksets contained by this Project; omitted lists every Project */
    projectId?: ProjectId2;
    /**
     * Sort order: starred (caller's starred first), date (updated_at DESC), name (A-Z), stars
     * (star_count DESC), tasks (task_count DESC)
     *
     * @default SortByHudPlatformTasksetsApi.Starred
     */
    sortBy?: SortByHudPlatformTasksetsApi;
  };

  export const listTasksetsV2TasksetsGetRequestSchema: Schema<ListTasksetsV2TasksetsGetRequest> =
    s.lazySchema(() =>
      s.object<ListTasksetsV2TasksetsGetRequest>({
        limit: s.defaulted(s.int().check(s.gte(1), s.lte(500)), 50),
        offset: s.defaulted(s.int().check(s.gte(0), s.lte(2147483647)), 0),
        search: s.optional(s.lazy(() => searchHudPlatformTasksetsApiSchema)),
        publicOnly: s.defaulted(s.boolean(), false),
        featuredOnly: s.defaulted(s.boolean(), false),
        ownerOnly: s.defaulted(s.boolean(), false),
        minTasks: s.optional(s.lazy(() => minTasksSchema)),
        registryId: s.optional(s.lazy(() => registryId2Schema)),
        scenarioId: s.optional(s.lazy(() => scenarioIdSchema)),
        projectId: s.optional(s.lazy(() => projectId2Schema)),
        sortBy: s.defaulted(sortByHudPlatformTasksetsApiSchema, SortByHudPlatformTasksetsApi.Starred),
      }),
    );

  export class ListTasksetsV2TasksetsGetError extends ApiError {
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

    static readonly errors: ErrorDecoders<ListTasksetsV2TasksetsGetError> = [
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
