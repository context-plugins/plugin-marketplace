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
  serverlessChatCompletionBodySchema,
  type ServerlessChatCompletionBody,
} from "../models/serverless-chat-completion-body.js";
import {
  serverlessChatCompletionStreamBodySchema,
  type ServerlessChatCompletionStreamBody,
} from "../models/serverless-chat-completion-stream-body.js";
import { streamedChatResultSchema, type StreamedChatResult } from "../models/streamed-chat-result.js";
import { xFriendliTeamSchema, type XFriendliTeam } from "../models/unions/xfriendli-team.js";
import type { Servers } from "../servers.js";

export class ServerlessChat {
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
   * @throws {@link ServerlessChat.ServerlessChatCompleteError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link FriendliSuiteApiReferenceError} when no usable response was produced: a
   * connection failure, a timeout, a body that would not decode, a value that would not encode, or
   * a credential that could not be obtained
   */
  serverlessChatComplete(
    request: ServerlessChat.ServerlessChatCompleteRequest,
    options?: RequestOptions,
  ): ApiPromise<ChatResult, ServerlessChat.ServerlessChatCompleteError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/serverless/v1/chat/completions"),
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
        body: { kind: "json", value: request.body, schema: serverlessChatCompletionBodySchema },
      },
      {
        success: { kind: "json", schema: chatResultSchema },
        errorFactory: ServerlessChat.ServerlessChatCompleteError,
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
   * @throws {@link ServerlessChat.ServerlessChatStreamError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link FriendliSuiteApiReferenceError} when no usable response was produced: a
   * connection failure, a timeout, a body that would not decode, a value that would not encode, or
   * a credential that could not be obtained
   */
  serverlessChatStream(
    request: ServerlessChat.ServerlessChatStreamRequest,
    options?: RequestOptions,
  ): ApiPromise<EventStream<StreamedChatResult>, ServerlessChat.ServerlessChatStreamError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/serverless/v1/chat/completions#stream"),
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
        body: { kind: "json", value: request.body, schema: serverlessChatCompletionStreamBodySchema },
      },
      {
        success: { kind: "eventStreamJson", dataSchema: streamedChatResultSchema },
        errorFactory: ServerlessChat.ServerlessChatStreamError,
      },
      options,
    );
  }
}

export namespace ServerlessChat {
  export type ServerlessChatCompleteRequest = {
    /** ID of team to run requests as (optional parameter). */
    xFriendliTeam?: XFriendliTeam;
    body: ServerlessChatCompletionBody;
  };

  export class ServerlessChatCompleteError extends ApiError {
    declare readonly payload: Declared<"error422", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<ServerlessChatCompleteError> = [
      { on: 422, kind: "error422", decode: { kind: "empty" } },
    ];
  }

  export type ServerlessChatStreamRequest = {
    /** ID of team to run requests as (optional parameter). */
    xFriendliTeam?: XFriendliTeam;
    body: ServerlessChatCompletionStreamBody;
  };

  export class ServerlessChatStreamError extends ApiError {
    declare readonly payload: Declared<"error422", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<ServerlessChatStreamError> = [
      { on: 422, kind: "error422", decode: { kind: "empty" } },
    ];
  }
}
