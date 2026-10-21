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
  serverlessToolAssistedChatCompletionBodySchema,
  type ServerlessToolAssistedChatCompletionBody,
} from "../models/serverless-tool-assisted-chat-completion-body.js";
import {
  serverlessToolAssistedChatCompletionStreamBodySchema,
  type ServerlessToolAssistedChatCompletionStreamBody,
} from "../models/serverless-tool-assisted-chat-completion-stream-body.js";
import {
  serverlessToolAssistedChatCompletionStreamSuccessSchema,
  type ServerlessToolAssistedChatCompletionStreamSuccess,
} from "../models/unions/serverless-tool-assisted-chat-completion-stream-success.js";
import { xFriendliTeamSchema, type XFriendliTeam } from "../models/unions/xfriendli-team.js";
import type { Servers } from "../servers.js";

export class ServerlessToolAssistedChat {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Tool assisted chat completions
   *
   * @remarks
   * Generate a model response from a list of messages comprising a conversation. Compatible with
   * the OpenAI Chat Completions API, with support for streaming, tool calls, and structured
   * outputs. Additionally, the model can utilize built-in tools for tool calls, enhancing its
   * capability to provide more comprehensive and actionable responses.
   *
   * @returns Successfully generated a tool assisted chat response.
   *
   * @throws {@link ServerlessToolAssistedChat.ServerlessToolAssistedChatCompleteError} when the API
   * answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link FriendliSuiteApiReferenceError} when no usable response was produced: a
   * connection failure, a timeout, a body that would not decode, a value that would not encode, or
   * a credential that could not be obtained
   */
  serverlessToolAssistedChatComplete(
    request: ServerlessToolAssistedChat.ServerlessToolAssistedChatCompleteRequest,
    options?: RequestOptions,
  ): ApiPromise<ChatResult, ServerlessToolAssistedChat.ServerlessToolAssistedChatCompleteError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/serverless/tools/v1/chat/completions"),
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
        body: { kind: "json", value: request.body, schema: serverlessToolAssistedChatCompletionBodySchema },
      },
      {
        success: { kind: "json", schema: chatResultSchema },
        errorFactory: ServerlessToolAssistedChat.ServerlessToolAssistedChatCompleteError,
      },
      options,
    );
  }

  /**
   * Stream tool assisted chat completions
   *
   * @remarks
   * Generate a model response from a list of messages comprising a conversation. Compatible with
   * the OpenAI Chat Completions API, with support for streaming, tool calls, and structured
   * outputs. Additionally, the model can utilize built-in tools for tool calls, enhancing its
   * capability to provide more comprehensive and actionable responses.
   *
   * @returns Successfully generated a tool assisted chat response.
   *
   * @throws {@link ServerlessToolAssistedChat.ServerlessToolAssistedChatStreamError} when the API
   * answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link FriendliSuiteApiReferenceError} when no usable response was produced: a
   * connection failure, a timeout, a body that would not decode, a value that would not encode, or
   * a credential that could not be obtained
   */
  serverlessToolAssistedChatStream(
    request: ServerlessToolAssistedChat.ServerlessToolAssistedChatStreamRequest,
    options?: RequestOptions,
  ): ApiPromise<
    EventStream<ServerlessToolAssistedChatCompletionStreamSuccess>,
    ServerlessToolAssistedChat.ServerlessToolAssistedChatStreamError
  > {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/serverless/tools/v1/chat/completions#stream"),
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
        body: {
          kind: "json",
          value: request.body,
          schema: serverlessToolAssistedChatCompletionStreamBodySchema,
        },
      },
      {
        success: {
          kind: "eventStreamJson",
          dataSchema: serverlessToolAssistedChatCompletionStreamSuccessSchema,
        },
        errorFactory: ServerlessToolAssistedChat.ServerlessToolAssistedChatStreamError,
      },
      options,
    );
  }
}

export namespace ServerlessToolAssistedChat {
  export type ServerlessToolAssistedChatCompleteRequest = {
    /** ID of team to run requests as (optional parameter). */
    xFriendliTeam?: XFriendliTeam;
    body: ServerlessToolAssistedChatCompletionBody;
  };

  export class ServerlessToolAssistedChatCompleteError extends ApiError {
    declare readonly payload: Declared<"error422", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<ServerlessToolAssistedChatCompleteError> = [
      { on: 422, kind: "error422", decode: { kind: "empty" } },
    ];
  }

  export type ServerlessToolAssistedChatStreamRequest = {
    /** ID of team to run requests as (optional parameter). */
    xFriendliTeam?: XFriendliTeam;
    body: ServerlessToolAssistedChatCompletionStreamBody;
  };

  export class ServerlessToolAssistedChatStreamError extends ApiError {
    declare readonly payload: Declared<"error422", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<ServerlessToolAssistedChatStreamError> = [
      { on: 422, kind: "error422", decode: { kind: "empty" } },
    ];
  }
}
