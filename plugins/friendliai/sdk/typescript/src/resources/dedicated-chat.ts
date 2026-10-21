import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { EventStream } from "../core/event-stream.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import { chatResultSchema, type ChatResult } from "../models/chat-result.js";
import {
  dedicatedChatCompletionBodySchema,
  type DedicatedChatCompletionBody,
} from "../models/dedicated-chat-completion-body.js";
import {
  dedicatedChatCompletionStreamBodySchema,
  type DedicatedChatCompletionStreamBody,
} from "../models/dedicated-chat-completion-stream-body.js";
import { streamedChatResultSchema, type StreamedChatResult } from "../models/streamed-chat-result.js";
import { xFriendliTeamSchema, type XFriendliTeam } from "../models/unions/xfriendli-team.js";
import type { Servers } from "../servers.js";

export class DedicatedChat {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
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
   * @throws {@link DedicatedChat.DedicatedChatCompleteError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link FriendliSuiteApiReferenceError} when no usable response was produced: a
   * connection failure, a timeout, a body that would not decode, a value that would not encode, or
   * a credential that could not be obtained
   */
  dedicatedChatComplete(
    request: DedicatedChat.DedicatedChatCompleteRequest,
    options?: RequestOptions,
  ): ApiPromise<ChatResult, DedicatedChat.DedicatedChatCompleteError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/dedicated/v1/chat/completions"),
        auth: this.#auth.token,
        pathParams: [],
        query: [],
        headers: [
          {
            name: "X-Friendli-Team",
            value: request.xFriendliTeam,
            schema: s.optional(s.lazy(() => xFriendliTeamSchema)),
          },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "json", value: request.body, schema: dedicatedChatCompletionBodySchema },
      },
      {
        success: { kind: "json", schema: chatResultSchema },
        errorFactory: DedicatedChat.DedicatedChatCompleteError,
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
   * @throws {@link DedicatedChat.DedicatedChatStreamError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link FriendliSuiteApiReferenceError} when no usable response was produced: a
   * connection failure, a timeout, a body that would not decode, a value that would not encode, or
   * a credential that could not be obtained
   */
  dedicatedChatStream(
    request: DedicatedChat.DedicatedChatStreamRequest,
    options?: RequestOptions,
  ): ApiPromise<EventStream<StreamedChatResult>, DedicatedChat.DedicatedChatStreamError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/dedicated/v1/chat/completions#stream"),
        auth: this.#auth.token,
        pathParams: [],
        query: [],
        headers: [
          {
            name: "X-Friendli-Team",
            value: request.xFriendliTeam,
            schema: s.optional(s.lazy(() => xFriendliTeamSchema)),
          },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "json", value: request.body, schema: dedicatedChatCompletionStreamBodySchema },
      },
      {
        success: { kind: "eventStreamJson", dataSchema: streamedChatResultSchema },
        errorFactory: DedicatedChat.DedicatedChatStreamError,
      },
      options,
    );
  }
}

export namespace DedicatedChat {
  export type DedicatedChatCompleteRequest = {
    /** ID of team to run requests as (optional parameter). */
    xFriendliTeam?: XFriendliTeam;
    body: DedicatedChatCompletionBody;
  };

  export class DedicatedChatCompleteError extends ApiError {
    declare readonly payload: Declared<"error422", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<DedicatedChatCompleteError> = [
      { on: 422, kind: "error422", decode: { kind: "empty" } },
    ];
  }

  export type DedicatedChatStreamRequest = {
    /** ID of team to run requests as (optional parameter). */
    xFriendliTeam?: XFriendliTeam;
    body: DedicatedChatCompletionStreamBody;
  };

  export class DedicatedChatStreamError extends ApiError {
    declare readonly payload: Declared<"error422", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<DedicatedChatStreamError> = [
      { on: 422, kind: "error422", decode: { kind: "empty" } },
    ];
  }
}
