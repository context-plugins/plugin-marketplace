import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import {
  chatCompletionRequestSchema,
  type ChatCompletionRequest,
} from "../models/chat-completion-request.js";
import { chatCompletionSchema, type ChatCompletion } from "../models/chat-completion.js";
import { httpValidationErrorSchema, type HttpValidationError } from "../models/http-validation-error.js";
import type { Servers } from "../servers.js";

/**
 * The Chat API provides a programmatic chat-style text generation interface. It accepts a sequence
 * of messages and returns model responses. Intended for assistant-like interactions and evaluation.
 * Streaming responses are supported.
 */
export class ChatApiBeta {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Chat Completions
   *
   * @remarks
   * Chat completions.
   *
   * This endpoint can be used to get realtime chat completions. It can also be used with the Task
   * API processors to get structured, research outputs via a chat interface.
   *
   * @returns Returns a ChatCompletion object for non-streaming requests (application/json), or a
   * stream of ChatCompletionResponseChunk objects for streaming requests (text/event-stream) when
   * `stream=true` is set in the request.
   *
   * @throws {@link ChatApiBeta.ChatCompletionsV1BetaChatCompletionsPostError} when the API answers
   * with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link ParallelError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  chatCompletionsV1BetaChatCompletionsPost(
    request: ChatApiBeta.ChatCompletionsV1BetaChatCompletionsPostRequest,
    options?: RequestOptions,
  ): ApiPromise<ChatCompletion, ChatApiBeta.ChatCompletionsV1BetaChatCompletionsPostError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/v1beta/chat/completions"),
        auth: this.#auth.apiKeyAuth,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: chatCompletionRequestSchema },
      },
      {
        success: { kind: "json", schema: chatCompletionSchema },
        errorFactory: ChatApiBeta.ChatCompletionsV1BetaChatCompletionsPostError,
      },
      options,
    );
  }
}

export namespace ChatApiBeta {
  export type ChatCompletionsV1BetaChatCompletionsPostRequest = {
    body: ChatCompletionRequest;
  };

  export class ChatCompletionsV1BetaChatCompletionsPostError extends ApiError {
    declare readonly payload: Declared<"httpValidationError", HttpValidationError> | Undeclared;

    static readonly errors: ErrorDecoders<ChatCompletionsV1BetaChatCompletionsPostError> = [
      { on: 422, kind: "httpValidationError", decode: { kind: "json", schema: httpValidationErrorSchema } },
    ];
  }
}
