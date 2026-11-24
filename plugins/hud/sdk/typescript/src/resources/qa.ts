import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { noneAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import { errorResponseSchema, type ErrorResponse } from "../models/error-response.js";
import { httpValidationErrorSchema, type HttpValidationError } from "../models/http-validation-error.js";
import { qaCheckListResponseSchema, type QaCheckListResponse } from "../models/qa-check-list-response.js";
import {
  qaResultListResponseInternalSchema,
  type QaResultListResponse,
} from "../models/qa-result-list-response.js";
import {
  qaRunCreateRequestInternalSchema,
  type QaRunCreateRequest,
} from "../models/qa-run-create-request.js";
import { taskIdsInternalSchema, type TaskIds } from "../models/unions/task-ids.js";
import { traceIdsInternalSchema, type TraceIds } from "../models/unions/trace-ids.js";
import type { Servers } from "../servers.js";

export class Qa {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;

  constructor(rawClient: RawClient, servers: Servers) {
    this.#rawClient = rawClient;
    this.#servers = servers;
  }

  /**
   * List Qa Checks
   *
   * @remarks
   * List the QA checks available to run, each with the subject type it judges.
   *
   * @returns Successful Response
   *
   * @throws {@link Qa.ListQaChecksV2QaChecksGetError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link HudError} when no usable response was produced: a connection failure, a timeout,
   * a body that would not decode, a value that would not encode, or a credential that could not be
   * obtained
   */
  listQaChecksV2QaChecksGet(
    options?: RequestOptions,
  ): ApiPromise<QaCheckListResponse, Qa.ListQaChecksV2QaChecksGetError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v2/qa/checks"),
        auth: noneAuth,
        pathParams: [],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: qaCheckListResponseSchema },
        errorFactory: Qa.ListQaChecksV2QaChecksGetError,
      },
      options,
    );
  }

  /**
   * List Qa Results
   *
   * @remarks
   * List the result in effect for every QA check on the given evaluation traces or tasks.
   *
   * A task's results in effect are those on its current version. With ``include_history``, list
   * every result instead, newest first, across a task's versions.
   *
   * @returns Successful Response
   *
   * @throws {@link Qa.ListQaResultsV2QaResultsGetError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link HudError} when no usable response was produced: a connection failure, a timeout,
   * a body that would not decode, a value that would not encode, or a credential that could not be
   * obtained
   */
  listQaResultsV2QaResultsGet(
    request: Qa.ListQaResultsV2QaResultsGetRequest = {},
    options?: RequestOptions,
  ): ApiPromise<QaResultListResponse, Qa.ListQaResultsV2QaResultsGetError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v2/qa/results"),
        auth: noneAuth,
        pathParams: [],
        query: [
          {
            name: "trace_ids",
            value: request.traceIds,
            schema: s.optional(s.lazy(() => traceIdsInternalSchema)),
          },
          {
            name: "task_ids",
            value: request.taskIds,
            schema: s.optional(s.lazy(() => taskIdsInternalSchema)),
          },
          { name: "include_history", value: request.includeHistory, schema: s.defaulted(s.boolean(), false) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: qaResultListResponseInternalSchema },
        errorFactory: Qa.ListQaResultsV2QaResultsGetError,
      },
      options,
    );
  }

  /**
   * Run Qa Checks
   *
   * @remarks
   * Run QA checks against completed evaluation traces or tasks as one run; returns each subject's
   * result of each check.
   *
   * @returns Successful Response
   *
   * @throws {@link Qa.RunQaChecksV2QaRunsPostError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link HudError} when no usable response was produced: a connection failure, a timeout,
   * a body that would not decode, a value that would not encode, or a credential that could not be
   * obtained
   */
  runQaChecksV2QaRunsPost(
    request: Qa.RunQaChecksV2QaRunsPostRequest,
    options?: RequestOptions,
  ): ApiPromise<QaResultListResponse, Qa.RunQaChecksV2QaRunsPostError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/v2/qa/runs"),
        auth: noneAuth,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: qaRunCreateRequestInternalSchema },
      },
      {
        success: { kind: "json", schema: qaResultListResponseInternalSchema },
        errorFactory: Qa.RunQaChecksV2QaRunsPostError,
      },
      options,
    );
  }
}

export namespace Qa {
  export class ListQaChecksV2QaChecksGetError extends ApiError {
    declare readonly payload:
      | Declared<"errorResponse", ErrorResponse>
      | Declared<"errorResponse2", ErrorResponse>
      | Declared<"errorResponse3", ErrorResponse>
      | Declared<"errorResponse4", ErrorResponse>
      | Declared<"errorResponse5", ErrorResponse>
      | Declared<"errorResponse6", ErrorResponse>
      | Declared<"errorResponse7", ErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<ListQaChecksV2QaChecksGetError> = [
      { on: 400, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 401, kind: "errorResponse2", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 403, kind: "errorResponse3", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 404, kind: "errorResponse4", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 409, kind: "errorResponse5", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 429, kind: "errorResponse6", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 503, kind: "errorResponse7", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export type ListQaResultsV2QaResultsGetRequest = {
    traceIds?: TraceIds;
    taskIds?: TaskIds;
    /** @default false */
    includeHistory?: boolean;
  };

  export class ListQaResultsV2QaResultsGetError extends ApiError {
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

    static readonly errors: ErrorDecoders<ListQaResultsV2QaResultsGetError> = [
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

  export type RunQaChecksV2QaRunsPostRequest = {
    body: QaRunCreateRequest;
  };

  export class RunQaChecksV2QaRunsPostError extends ApiError {
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

    static readonly errors: ErrorDecoders<RunQaChecksV2QaRunsPostError> = [
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
