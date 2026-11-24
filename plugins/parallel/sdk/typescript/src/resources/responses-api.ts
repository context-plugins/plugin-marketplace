import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import { httpValidationErrorSchema, type HttpValidationError } from "../models/http-validation-error.js";
import {
  responseCreateRequestInternalSchema,
  type ResponseCreateRequest,
} from "../models/response-create-request.js";
import { responseSchema, type Response } from "../models/response.js";
import type { Servers } from "../servers.js";

/**
 * An OpenAI-Responses-compatible interface for answers grounded in live web research, with URL
 * citations.
 */
export class ResponsesApi {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Create Response
   *
   * @remarks
   * Create a response.
   *
   * Generates an answer to the given input, grounded in live web research and annotated with URL
   * citations. Set `model` to `parallel`; `reasoning.effort` (`low`/`medium`/`high`) controls how
   * much research is performed, trading response time for answer quality. Returns an OpenAI-format
   * `Response` as `application/json`, or a `text/event-stream` of OpenAI Responses SSE events when
   * `stream=true`.
   *
   * @returns Returns a Response object for non-streaming requests (application/json), or a stream
   * of OpenAI Responses streaming events (text/event-stream) when `stream=true` is set in the
   * request.
   *
   * @throws {@link ResponsesApi.CreateResponseV1ResponsesPostError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link ParallelError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  createResponseV1ResponsesPost(
    request: ResponsesApi.CreateResponseV1ResponsesPostRequest,
    options?: RequestOptions,
  ): ApiPromise<Response, ResponsesApi.CreateResponseV1ResponsesPostError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/v1/responses"),
        auth: this.#auth.apiKeyAuth,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: responseCreateRequestInternalSchema },
      },
      {
        success: { kind: "json", schema: responseSchema },
        errorFactory: ResponsesApi.CreateResponseV1ResponsesPostError,
      },
      options,
    );
  }
}

export namespace ResponsesApi {
  export type CreateResponseV1ResponsesPostRequest = {
    body: ResponseCreateRequest;
  };

  export class CreateResponseV1ResponsesPostError extends ApiError {
    declare readonly payload: Declared<"httpValidationError", HttpValidationError> | Undeclared;

    static readonly errors: ErrorDecoders<CreateResponseV1ResponsesPostError> = [
      { on: 422, kind: "httpValidationError", decode: { kind: "json", schema: httpValidationErrorSchema } },
    ];
  }
}
