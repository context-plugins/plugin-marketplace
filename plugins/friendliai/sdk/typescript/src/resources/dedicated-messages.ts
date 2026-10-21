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
  dedicatedMessagesBodySchema,
  type DedicatedMessagesBody,
} from "../models/dedicated-messages-body.js";
import {
  dedicatedMessagesStreamBodySchema,
  type DedicatedMessagesStreamBody,
} from "../models/dedicated-messages-stream-body.js";
import {
  dedicatedMessagesStreamSuccessSchema,
  type DedicatedMessagesStreamSuccess,
} from "../models/dedicated-messages-stream-success.js";
import {
  dedicatedMessagesSuccessSchema,
  type DedicatedMessagesSuccess,
} from "../models/dedicated-messages-success.js";
import {
  messagesErrorResponseSchema,
  type MessagesErrorResponse,
} from "../models/messages-error-response.js";
import { xFriendliTeamSchema, type XFriendliTeam } from "../models/unions/xfriendli-team.js";
import type { Servers } from "../servers.js";

export class DedicatedMessages {
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
   * object](/openapi/dedicated/inference/messages-chunk-object).
   *
   * @throws {@link DedicatedMessages.DedicatedMessagesError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link FriendliSuiteApiReferenceError} when no usable response was produced: a
   * connection failure, a timeout, a body that would not decode, a value that would not encode, or
   * a credential that could not be obtained
   */
  dedicatedMessages(
    request: DedicatedMessages.DedicatedMessagesRequest,
    options?: RequestOptions,
  ): ApiPromise<DedicatedMessagesSuccess, DedicatedMessages.DedicatedMessagesError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/dedicated/v1/messages"),
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
        body: { kind: "json", value: request.body, schema: dedicatedMessagesBodySchema },
      },
      {
        success: { kind: "json", schema: dedicatedMessagesSuccessSchema },
        errorFactory: DedicatedMessages.DedicatedMessagesError,
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
   * @throws {@link DedicatedMessages.DedicatedMessagesStreamError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link FriendliSuiteApiReferenceError} when no usable response was produced: a
   * connection failure, a timeout, a body that would not decode, a value that would not encode, or
   * a credential that could not be obtained
   */
  dedicatedMessagesStream(
    request: DedicatedMessages.DedicatedMessagesStreamRequest,
    options?: RequestOptions,
  ): ApiPromise<EventStream<DedicatedMessagesStreamSuccess>, DedicatedMessages.DedicatedMessagesStreamError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/dedicated/v1/messages#stream"),
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
        body: { kind: "json", value: request.body, schema: dedicatedMessagesStreamBodySchema },
      },
      {
        success: { kind: "eventStreamJson", dataSchema: dedicatedMessagesStreamSuccessSchema },
        errorFactory: DedicatedMessages.DedicatedMessagesStreamError,
      },
      options,
    );
  }
}

export namespace DedicatedMessages {
  export type DedicatedMessagesRequest = {
    /** ID of team to run requests as (optional parameter). */
    xFriendliTeam?: XFriendliTeam;
    body: DedicatedMessagesBody;
  };

  export class DedicatedMessagesError extends ApiError {
    declare readonly payload: Declared<"messagesErrorResponse", MessagesErrorResponse> | Undeclared;

    static readonly errors: ErrorDecoders<DedicatedMessagesError> = [
      {
        on: 422,
        kind: "messagesErrorResponse",
        decode: { kind: "json", schema: messagesErrorResponseSchema },
      },
    ];
  }

  export type DedicatedMessagesStreamRequest = {
    /** ID of team to run requests as (optional parameter). */
    xFriendliTeam?: XFriendliTeam;
    body: DedicatedMessagesStreamBody;
  };

  export class DedicatedMessagesStreamError extends ApiError {
    declare readonly payload: Declared<"messagesErrorResponse", MessagesErrorResponse> | Undeclared;

    static readonly errors: ErrorDecoders<DedicatedMessagesStreamError> = [
      {
        on: 422,
        kind: "messagesErrorResponse",
        decode: { kind: "json", schema: messagesErrorResponseSchema },
      },
    ];
  }
}
