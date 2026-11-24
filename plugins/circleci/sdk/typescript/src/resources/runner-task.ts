import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import * as s from "../core/validation/index.js";
import { errorResponseSchema, type ErrorResponse } from "../models/error-response.js";
import { runnerTasksResponseSchema, type RunnerTasksResponse } from "../models/runner-tasks-response.js";
import {
  runnerTasksRunningResponseSchema,
  type RunnerTasksRunningResponse,
} from "../models/runner-tasks-running-response.js";
import type { Servers } from "../servers.js";

/**
 * Endpoints for querying task counts and managing tasks assigned to self-hosted runners.
 */
export class RunnerTask {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Get running task count
   *
   * @remarks
   * Returns the number of running tasks for a given resource class. This endpoint is scoped to a
   * single resource class, so it must be called per resource class to get totals across all
   * classes.
   *
   * @returns Successfully retrieved running task count
   *
   * @throws {@link RunnerTask.GetRunningTaskCountError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link CircleCiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getRunningTaskCount(
    request: RunnerTask.GetRunningTaskCountRequest,
    options?: RequestOptions,
  ): ApiPromise<RunnerTasksRunningResponse, RunnerTask.GetRunningTaskCountError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/runner/tasks/running"),
        auth: this.#auth.apiToken,
        pathParams: [],
        query: [{ name: "resource-class", value: request.resourceClass, schema: s.string() }],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: runnerTasksRunningResponseSchema },
        errorFactory: RunnerTask.GetRunningTaskCountError,
      },
      options,
    );
  }

  /**
   * Get unclaimed task count
   *
   * @remarks
   * Returns the number of unclaimed tasks for a given resource class. This endpoint is scoped to a
   * single resource class, so it must be called per resource class to get totals across all
   * classes.
   *
   * @returns Successfully retrieved unclaimed task count
   *
   * @throws {@link RunnerTask.GetUnclaimedTaskCountError} when the API answers with an error status
   * — narrow on `err.payload.kind`
   *
   * @throws {@link CircleCiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getUnclaimedTaskCount(
    request: RunnerTask.GetUnclaimedTaskCountRequest,
    options?: RequestOptions,
  ): ApiPromise<RunnerTasksResponse, RunnerTask.GetUnclaimedTaskCountError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/runner/tasks"),
        auth: this.#auth.apiToken,
        pathParams: [],
        query: [{ name: "resource-class", value: request.resourceClass, schema: s.string() }],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: runnerTasksResponseSchema },
        errorFactory: RunnerTask.GetUnclaimedTaskCountError,
      },
      options,
    );
  }
}

export namespace RunnerTask {
  export type GetRunningTaskCountRequest = {
    /** The resource class to query running tasks for */
    resourceClass: string;
  };

  export class GetRunningTaskCountError extends ApiError {
    declare readonly payload:
      | Declared<"errorResponse", ErrorResponse>
      | Declared<"errorResponse2", ErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetRunningTaskCountError> = [
      { on: 400, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 401, kind: "errorResponse2", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export type GetUnclaimedTaskCountRequest = {
    /** The resource class to query unclaimed tasks for */
    resourceClass: string;
  };

  export class GetUnclaimedTaskCountError extends ApiError {
    declare readonly payload:
      | Declared<"errorResponse", ErrorResponse>
      | Declared<"errorResponse2", ErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetUnclaimedTaskCountError> = [
      { on: 400, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 401, kind: "errorResponse2", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }
}
