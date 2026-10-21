import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { anyAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import * as s from "../core/validation/index.js";
import { errorResponseSchema, type ErrorResponse } from "../models/error-response.js";
import {
  getTaskStatusResponseSchema,
  type GetTaskStatusResponse,
} from "../models/get-task-status-response.js";
import { rateLimitedResponse1Schema, type RateLimitedResponse1 } from "../models/rate-limited-response1.js";
import type { Servers } from "../servers.js";

/**
 * Query the status of analysis tasks.
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
   * Get analysis task status
   *
   * @remarks
   * Get the status of an analysis task.
   *
   * @returns Analysis task status
   *
   * @throws {@link Tasks.GetAnalysisTaskStatusError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link AnalyzeApiBetaError} when no usable response was produced: a connection failure,
   * a timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getAnalysisTaskStatus(
    request: Tasks.GetAnalysisTaskStatusRequest,
    options?: RequestOptions,
  ): ApiPromise<GetTaskStatusResponse, Tasks.GetAnalysisTaskStatusError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/tasks/{task_id}"),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.oAuth2),
        pathParams: [{ name: "task_id", value: request.taskId, schema: s.string() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: getTaskStatusResponseSchema },
        errorFactory: Tasks.GetAnalysisTaskStatusError,
      },
      options,
    );
  }
}

export namespace Tasks {
  export type GetAnalysisTaskStatusRequest = {
    /** The ID of the analysis task */
    taskId: string;
  };

  export class GetAnalysisTaskStatusError extends ApiError {
    declare readonly payload:
      | Declared<"errorResponse", ErrorResponse>
      | Declared<"errorResponse2", ErrorResponse>
      | Declared<"errorResponse3", ErrorResponse>
      | Declared<"errorResponse4", ErrorResponse>
      | Declared<"rateLimitedResponse1", RateLimitedResponse1 | null>
      | Declared<"errorResponse5", ErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetAnalysisTaskStatusError> = [
      { on: 400, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 401, kind: "errorResponse2", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 403, kind: "errorResponse3", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 404, kind: "errorResponse4", decode: { kind: "json", schema: errorResponseSchema } },
      {
        on: 429,
        kind: "rateLimitedResponse1",
        decode: { kind: "json", schema: s.nullable(s.lazy(() => rateLimitedResponse1Schema)) },
      },
      { on: 500, kind: "errorResponse5", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }
}
