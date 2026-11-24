import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { noneAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import { completionRequestInternalSchema, type CompletionRequest } from "../models/completion-request.js";
import { completionResponseSchema, type CompletionResponse } from "../models/completion-response.js";
import { errorResponseSchema, type ErrorResponse } from "../models/error-response.js";
import { httpValidationErrorSchema, type HttpValidationError } from "../models/http-validation-error.js";
import type { Servers } from "../servers.js";

export class Completions {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;

  constructor(rawClient: RawClient, servers: Servers) {
    this.#rawClient = rawClient;
    this.#servers = servers;
  }

  /**
   * Post Completion
   *
   * @remarks
   * One-shot chat completion proxied to the inference gateway.
   *
   * @returns Successful Response
   *
   * @throws {@link Completions.PostCompletionV2CompletionsPostError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link HudError} when no usable response was produced: a connection failure, a timeout,
   * a body that would not decode, a value that would not encode, or a credential that could not be
   * obtained
   */
  postCompletionV2CompletionsPost(
    request: Completions.PostCompletionV2CompletionsPostRequest,
    options?: RequestOptions,
  ): ApiPromise<CompletionResponse, Completions.PostCompletionV2CompletionsPostError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/v2/completions"),
        auth: noneAuth,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: completionRequestInternalSchema },
      },
      {
        success: { kind: "json", schema: completionResponseSchema },
        errorFactory: Completions.PostCompletionV2CompletionsPostError,
      },
      options,
    );
  }
}

export namespace Completions {
  export type PostCompletionV2CompletionsPostRequest = {
    body: CompletionRequest;
  };

  export class PostCompletionV2CompletionsPostError extends ApiError {
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

    static readonly errors: ErrorDecoders<PostCompletionV2CompletionsPostError> = [
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
