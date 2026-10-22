import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { noneAuth } from "../core/auth/schemes.js";
import type { EventStream } from "../core/event-stream.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import { chatResultSchema, type ChatResult } from "../models/chat-result.js";
import {
  containerChatCompletionBodySchema,
  type ContainerChatCompletionBody,
} from "../models/container-chat-completion-body.js";
import {
  containerChatCompletionStreamBodySchema,
  type ContainerChatCompletionStreamBody,
} from "../models/container-chat-completion-stream-body.js";
import { streamedChatResultSchema, type StreamedChatResult } from "../models/streamed-chat-result.js";
import type { Servers } from "../servers.js";

export class ContainerChat {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;

  constructor(rawClient: RawClient, servers: Servers) {
    this.#rawClient = rawClient;
    this.#servers = servers;
  }

  /**
   * Chat completions
   *
   * @remarks
   * Generate a model response from a list of messages comprising a conversation. Compatible with
   * the OpenAI Chat Completions API, with support for streaming, tool calls, and structured
   * outputs.
   *
   * @returns Successfully generated a chat response.
   *
   * @throws {@link ContainerChat.ContainerChatCompleteError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link FriendliSuiteApiReferenceError} when no usable response was produced: a
   * connection failure, a timeout, a body that would not decode, a value that would not encode, or
   * a credential that could not be obtained
   */
  containerChatComplete(
    request: ContainerChat.ContainerChatCompleteRequest,
    options?: RequestOptions,
  ): ApiPromise<ChatResult, ContainerChat.ContainerChatCompleteError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/v1/chat/completions"),
        auth: noneAuth,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: containerChatCompletionBodySchema },
      },
      {
        success: { kind: "json", schema: chatResultSchema },
        errorFactory: ContainerChat.ContainerChatCompleteError,
      },
      options,
    );
  }

  /**
   * Stream chat completions
   *
   * @remarks
   * Generate a model response from a list of messages comprising a conversation. Compatible with
   * the OpenAI Chat Completions API, with support for streaming, tool calls, and structured
   * outputs.
   *
   * @returns Successfully generated a chat response.
   *
   * @throws {@link ContainerChat.ContainerChatStreamError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link FriendliSuiteApiReferenceError} when no usable response was produced: a
   * connection failure, a timeout, a body that would not decode, a value that would not encode, or
   * a credential that could not be obtained
   */
  containerChatStream(
    request: ContainerChat.ContainerChatStreamRequest,
    options?: RequestOptions,
  ): ApiPromise<EventStream<StreamedChatResult>, ContainerChat.ContainerChatStreamError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/v1/chat/completions#stream"),
        auth: noneAuth,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: containerChatCompletionStreamBodySchema },
      },
      {
        success: { kind: "eventStreamJson", dataSchema: streamedChatResultSchema },
        errorFactory: ContainerChat.ContainerChatStreamError,
      },
      options,
    );
  }
}

export namespace ContainerChat {
  export type ContainerChatCompleteRequest = {
    body: ContainerChatCompletionBody;
  };

  export class ContainerChatCompleteError extends ApiError {
    declare readonly payload: Declared<"error422", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<ContainerChatCompleteError> = [
      { on: 422, kind: "error422", decode: { kind: "empty" } },
    ];
  }

  export type ContainerChatStreamRequest = {
    body: ContainerChatCompletionStreamBody;
  };

  export class ContainerChatStreamError extends ApiError {
    declare readonly payload: Declared<"error422", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<ContainerChatStreamError> = [
      { on: 422, kind: "error422", decode: { kind: "empty" } },
    ];
  }
}
