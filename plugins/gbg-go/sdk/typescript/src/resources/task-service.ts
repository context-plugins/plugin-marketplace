import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import {
  journeyTaskListRequestSchema,
  type JourneyTaskListRequest,
} from "../models/journey-task-list-request.js";
import {
  journeyTaskListResponseSchema,
  type JourneyTaskListResponse,
} from "../models/journey-task-list-response.js";
import {
  journeyTaskListSchemaRequestSchema,
  type JourneyTaskListSchemaRequest,
} from "../models/journey-task-list-schema-request.js";
import {
  journeyTaskListSchemaResponseSchema,
  type JourneyTaskListSchemaResponse,
} from "../models/journey-task-list-schema-response.js";
import {
  journeyTaskSchemaRequestSchema,
  type JourneyTaskSchemaRequest,
} from "../models/journey-task-schema-request.js";
import {
  journeyTaskSchemaResponseSchema,
  type JourneyTaskSchemaResponse,
} from "../models/journey-task-schema-response.js";
import {
  journeyTaskUpdateRequestSchema,
  type JourneyTaskUpdateRequest,
} from "../models/journey-task-update-request.js";
import {
  journeyTaskUpdateResponseSchema,
  type JourneyTaskUpdateResponse,
} from "../models/journey-task-update-response.js";
import type { Servers } from "../servers.js";

export class TaskService {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Get Task Schema
   *
   * @remarks
   * Get Task Schema
   *
   * @returns Success
   *
   * @throws {@link TaskService.GetTaskSchemaError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link GbgGoNextGenFlowCaptainApiError} when no usable response was produced: a
   * connection failure, a timeout, a body that would not decode, a value that would not encode, or
   * a credential that could not be obtained
   */
  getTaskSchema(
    request: TaskService.GetTaskSchemaRequest,
    options?: RequestOptions,
  ): ApiPromise<JourneyTaskSchemaResponse, TaskService.GetTaskSchemaError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/journey/task/schema"),
        auth: this.#auth.customerAccess,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => journeyTaskSchemaRequestSchema)),
        },
      },
      {
        success: { kind: "json", schema: journeyTaskSchemaResponseSchema },
        errorFactory: TaskService.GetTaskSchemaError,
      },
      options,
    );
  }

  /**
   * Get End User Tasks
   *
   * @remarks
   * Get End User Tasks
   *
   * @returns Success
   *
   * @throws {@link TaskService.GetTasksError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link GbgGoNextGenFlowCaptainApiError} when no usable response was produced: a
   * connection failure, a timeout, a body that would not decode, a value that would not encode, or
   * a credential that could not be obtained
   */
  getTasks(
    request: TaskService.GetTasksRequest,
    options?: RequestOptions,
  ): ApiPromise<JourneyTaskListResponse, TaskService.GetTasksError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/journey/task/list"),
        auth: this.#auth.pingId,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => journeyTaskListRequestSchema)),
        },
      },
      {
        success: { kind: "json", schema: journeyTaskListResponseSchema },
        errorFactory: TaskService.GetTasksError,
      },
      options,
    );
  }

  /**
   * Get Tasks Schema
   *
   * @remarks
   * Get Tasks Schema
   *
   * @returns Success
   *
   * @throws {@link TaskService.GetTasksSchemaError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link GbgGoNextGenFlowCaptainApiError} when no usable response was produced: a
   * connection failure, a timeout, a body that would not decode, a value that would not encode, or
   * a credential that could not be obtained
   */
  getTasksSchema(
    request: TaskService.GetTasksSchemaRequest,
    options?: RequestOptions,
  ): ApiPromise<JourneyTaskListSchemaResponse, TaskService.GetTasksSchemaError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/journey/task/list/schema"),
        auth: this.#auth.customerAccess,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => journeyTaskListSchemaRequestSchema)),
        },
      },
      {
        success: { kind: "json", schema: journeyTaskListSchemaResponseSchema },
        errorFactory: TaskService.GetTasksSchemaError,
      },
      options,
    );
  }

  /**
   * Put End User Data
   *
   * @remarks
   * Put End User Data
   *
   * @returns Success
   *
   * @throws {@link TaskService.UpdateTaskError} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link GbgGoNextGenFlowCaptainApiError} when no usable response was produced: a
   * connection failure, a timeout, a body that would not decode, a value that would not encode, or
   * a credential that could not be obtained
   */
  updateTask(
    request: TaskService.UpdateTaskRequest,
    options?: RequestOptions,
  ): ApiPromise<JourneyTaskUpdateResponse, TaskService.UpdateTaskError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/journey/task/update"),
        auth: this.#auth.pingId,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => journeyTaskUpdateRequestSchema)),
        },
      },
      {
        success: { kind: "json", schema: journeyTaskUpdateResponseSchema },
        errorFactory: TaskService.UpdateTaskError,
      },
      options,
    );
  }
}

export namespace TaskService {
  export type GetTaskSchemaRequest = {
    body?: JourneyTaskSchemaRequest;
  };

  export class GetTaskSchemaError extends ApiError {
    declare readonly payload:
      | Declared<"error400", undefined>
      | Declared<"error401", undefined>
      | Declared<"error403", undefined>
      | Declared<"error404", undefined>
      | Declared<"error405", undefined>
      | Declared<"error500", undefined>
      | Declared<"error503", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetTaskSchemaError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 401, kind: "error401", decode: { kind: "empty" } },
      { on: 403, kind: "error403", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 405, kind: "error405", decode: { kind: "empty" } },
      { on: 500, kind: "error500", decode: { kind: "empty" } },
      { on: 503, kind: "error503", decode: { kind: "empty" } },
    ];
  }

  export type GetTasksRequest = {
    body?: JourneyTaskListRequest;
  };

  export class GetTasksError extends ApiError {
    declare readonly payload:
      | Declared<"error400", undefined>
      | Declared<"error401", undefined>
      | Declared<"error403", undefined>
      | Declared<"error404", undefined>
      | Declared<"error405", undefined>
      | Declared<"error500", undefined>
      | Declared<"error503", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetTasksError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 401, kind: "error401", decode: { kind: "empty" } },
      { on: 403, kind: "error403", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 405, kind: "error405", decode: { kind: "empty" } },
      { on: 500, kind: "error500", decode: { kind: "empty" } },
      { on: 503, kind: "error503", decode: { kind: "empty" } },
    ];
  }

  export type GetTasksSchemaRequest = {
    body?: JourneyTaskListSchemaRequest;
  };

  export class GetTasksSchemaError extends ApiError {
    declare readonly payload:
      | Declared<"error400", undefined>
      | Declared<"error401", undefined>
      | Declared<"error403", undefined>
      | Declared<"error404", undefined>
      | Declared<"error405", undefined>
      | Declared<"error500", undefined>
      | Declared<"error503", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetTasksSchemaError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 401, kind: "error401", decode: { kind: "empty" } },
      { on: 403, kind: "error403", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 405, kind: "error405", decode: { kind: "empty" } },
      { on: 500, kind: "error500", decode: { kind: "empty" } },
      { on: 503, kind: "error503", decode: { kind: "empty" } },
    ];
  }

  export type UpdateTaskRequest = {
    body?: JourneyTaskUpdateRequest;
  };

  export class UpdateTaskError extends ApiError {
    declare readonly payload:
      | Declared<"error400", undefined>
      | Declared<"error401", undefined>
      | Declared<"error403", undefined>
      | Declared<"error404", undefined>
      | Declared<"error405", undefined>
      | Declared<"error500", undefined>
      | Declared<"error503", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<UpdateTaskError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 401, kind: "error401", decode: { kind: "empty" } },
      { on: 403, kind: "error403", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 405, kind: "error405", decode: { kind: "empty" } },
      { on: 500, kind: "error500", decode: { kind: "empty" } },
      { on: 503, kind: "error503", decode: { kind: "empty" } },
    ];
  }
}
