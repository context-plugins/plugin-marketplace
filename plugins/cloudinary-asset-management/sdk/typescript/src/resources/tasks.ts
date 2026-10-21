import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { anyAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import * as s from "../core/validation/index.js";
import { errorResponseSchema, type ErrorResponse } from "../models/error-response.js";
import { rateLimitedResponse1Schema, type RateLimitedResponse1 } from "../models/rate-limited-response1.js";
import { taskResponseSchema, type TaskResponse } from "../models/task-response.js";
import type { Servers } from "../servers.js";

/**
 * Query the status of async generation tasks.
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
   * Get a generation task
   *
   * @remarks
   * Get the status of a generation task.
   *
   * @returns Generation task status.
   *
   * @throws {@link Tasks.GetGenerationTaskStatusError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link CloudinaryAssetManagementApiError} when no usable response was produced: a
   * connection failure, a timeout, a body that would not decode, a value that would not encode, or
   * a credential that could not be obtained
   */
  getGenerationTaskStatus(
    request: Tasks.GetGenerationTaskStatusRequest,
    options?: RequestOptions,
  ): ApiPromise<TaskResponse, Tasks.GetGenerationTaskStatusError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v2/generate/{cloud_name}/tasks/{task_id}"),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.oauth2),
        pathParams: [
          { name: "cloud_name", value: request.cloudName, schema: s.string() },
          { name: "task_id", value: request.taskId, schema: s.string() },
        ],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: taskResponseSchema },
        errorFactory: Tasks.GetGenerationTaskStatusError,
      },
      options,
    );
  }
}

export namespace Tasks {
  export type GetGenerationTaskStatusRequest = {
    /** The cloud name of your Cloudinary product environment. */
    cloudName: string;
    /** The ID of the generation task. */
    taskId: string;
  };

  export class GetGenerationTaskStatusError extends ApiError {
    declare readonly payload:
      | Declared<"errorResponse", ErrorResponse>
      | Declared<"errorResponse2", ErrorResponse>
      | Declared<"errorResponse3", ErrorResponse>
      | Declared<"rateLimitedResponse1", RateLimitedResponse1>
      | Declared<"errorResponse4", ErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetGenerationTaskStatusError> = [
      { on: 400, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 401, kind: "errorResponse2", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 404, kind: "errorResponse3", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 429, kind: "rateLimitedResponse1", decode: { kind: "json", schema: rateLimitedResponse1Schema } },
      { on: 500, kind: "errorResponse4", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }
}
