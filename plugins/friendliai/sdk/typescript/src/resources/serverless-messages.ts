import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { EventStream } from "../core/event-stream.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import {
  messagesErrorResponseSchema,
  type MessagesErrorResponse,
} from "../models/messages-error-response.js";
import {
  serverlessMessagesBodySchema,
  type ServerlessMessagesBody,
} from "../models/serverless-messages-body.js";
import {
  serverlessMessagesStreamBodySchema,
  type ServerlessMessagesStreamBody,
} from "../models/serverless-messages-stream-body.js";
import {
  serverlessMessagesStreamSuccessSchema,
  type ServerlessMessagesStreamSuccess,
} from "../models/serverless-messages-stream-success.js";
import {
  serverlessMessagesSuccessSchema,
  type ServerlessMessagesSuccess,
} from "../models/serverless-messages-success.js";
import { xFriendliTeamSchema, type XFriendliTeam } from "../models/unions/xfriendli-team.js";
import type { Servers } from "../servers.js";

export class ServerlessMessages {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Messages
   *
   * @remarks
   * Generate a model response from a conversation using the Anthropic Messages API format. Supports
   * streaming, function tool calls, and extended thinking.
   *
   * @returns Successfully generated a Messages-style response. For streaming (`text/event-stream`)
   * event and chunk details, see [Messages chunk
   * object](/openapi/model-apis/messages-chunk-object).
   *
   * @throws {@link ServerlessMessages.ServerlessMessagesError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link FriendliSuiteApiReferenceError} when no usable response was produced: a
   * connection failure, a timeout, a body that would not decode, a value that would not encode, or
   * a credential that could not be obtained
   */
  serverlessMessages(
    request: ServerlessMessages.ServerlessMessagesRequest,
    options?: RequestOptions,
  ): ApiPromise<ServerlessMessagesSuccess, ServerlessMessages.ServerlessMessagesError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/serverless/v1/messages"),
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
        body: { kind: "json", value: request.body, schema: serverlessMessagesBodySchema },
      },
      {
        success: { kind: "json", schema: serverlessMessagesSuccessSchema },
        errorFactory: ServerlessMessages.ServerlessMessagesError,
      },
      options,
    );
  }

  /**
   * Stream messages
   *
   * @remarks
   * Generate a model response from a conversation using the Anthropic Messages API format. Supports
   * streaming, function tool calls, and extended thinking.
   *
   * @returns Successfully generated a streamed Messages-style response.
   *
   * @throws {@link ServerlessMessages.ServerlessMessagesStreamError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link FriendliSuiteApiReferenceError} when no usable response was produced: a
   * connection failure, a timeout, a body that would not decode, a value that would not encode, or
   * a credential that could not be obtained
   */
  serverlessMessagesStream(
    request: ServerlessMessages.ServerlessMessagesStreamRequest,
    options?: RequestOptions,
  ): ApiPromise<
    EventStream<ServerlessMessagesStreamSuccess>,
    ServerlessMessages.ServerlessMessagesStreamError
  > {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/serverless/v1/messages#stream"),
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
        body: { kind: "json", value: request.body, schema: serverlessMessagesStreamBodySchema },
      },
      {
        success: { kind: "eventStreamJson", dataSchema: serverlessMessagesStreamSuccessSchema },
        errorFactory: ServerlessMessages.ServerlessMessagesStreamError,
      },
      options,
    );
  }
}

export namespace ServerlessMessages {
  export type ServerlessMessagesRequest = {
    /** ID of team to run requests as (optional parameter). */
    xFriendliTeam?: XFriendliTeam;
    body: ServerlessMessagesBody;
  };

  export class ServerlessMessagesError extends ApiError {
    declare readonly payload: Declared<"messagesErrorResponse", MessagesErrorResponse> | Undeclared;

    static readonly errors: ErrorDecoders<ServerlessMessagesError> = [
      {
        on: 422,
        kind: "messagesErrorResponse",
        decode: { kind: "json", schema: messagesErrorResponseSchema },
      },
    ];
  }

  export type ServerlessMessagesStreamRequest = {
    /** ID of team to run requests as (optional parameter). */
    xFriendliTeam?: XFriendliTeam;
    body: ServerlessMessagesStreamBody;
  };

  export class ServerlessMessagesStreamError extends ApiError {
    declare readonly payload: Declared<"messagesErrorResponse", MessagesErrorResponse> | Undeclared;

    static readonly errors: ErrorDecoders<ServerlessMessagesStreamError> = [
      {
        on: 422,
        kind: "messagesErrorResponse",
        decode: { kind: "json", schema: messagesErrorResponseSchema },
      },
    ];
  }
}
