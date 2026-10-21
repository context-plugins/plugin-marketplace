import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { noneAuth } from "../core/auth/schemes.js";
import type { EventStream } from "../core/event-stream.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import {
  containerMessagesBodySchema,
  type ContainerMessagesBody,
} from "../models/container-messages-body.js";
import {
  containerMessagesStreamBodySchema,
  type ContainerMessagesStreamBody,
} from "../models/container-messages-stream-body.js";
import {
  containerMessagesStreamSuccessSchema,
  type ContainerMessagesStreamSuccess,
} from "../models/container-messages-stream-success.js";
import {
  containerMessagesSuccessSchema,
  type ContainerMessagesSuccess,
} from "../models/container-messages-success.js";
import {
  messagesErrorResponseSchema,
  type MessagesErrorResponse,
} from "../models/messages-error-response.js";
import type { Servers } from "../servers.js";

export class ContainerMessages {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;

  constructor(rawClient: RawClient, servers: Servers) {
    this.#rawClient = rawClient;
    this.#servers = servers;
  }

  /**
   * Messages
   *
   * @remarks
   * Generate a model response from a conversation using the Anthropic Messages API format. Supports
   * streaming, function tool calls, and extended thinking.
   *
   * @returns Successfully generated a Messages-style response. For streaming (`text/event-stream`)
   * event and chunk details, see [Messages chunk object](/openapi/container/messages-chunk-object).
   *
   * @throws {@link ContainerMessages.ContainerMessagesError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link FriendliSuiteApiReferenceError} when no usable response was produced: a
   * connection failure, a timeout, a body that would not decode, a value that would not encode, or
   * a credential that could not be obtained
   */
  containerMessages(
    request: ContainerMessages.ContainerMessagesRequest,
    options?: RequestOptions,
  ): ApiPromise<ContainerMessagesSuccess, ContainerMessages.ContainerMessagesError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/v1/messages"),
        auth: noneAuth,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: containerMessagesBodySchema },
      },
      {
        success: { kind: "json", schema: containerMessagesSuccessSchema },
        errorFactory: ContainerMessages.ContainerMessagesError,
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
   * @throws {@link ContainerMessages.ContainerMessagesStreamError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link FriendliSuiteApiReferenceError} when no usable response was produced: a
   * connection failure, a timeout, a body that would not decode, a value that would not encode, or
   * a credential that could not be obtained
   */
  containerMessagesStream(
    request: ContainerMessages.ContainerMessagesStreamRequest,
    options?: RequestOptions,
  ): ApiPromise<EventStream<ContainerMessagesStreamSuccess>, ContainerMessages.ContainerMessagesStreamError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/v1/messages#stream"),
        auth: noneAuth,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: containerMessagesStreamBodySchema },
      },
      {
        success: { kind: "eventStreamJson", dataSchema: containerMessagesStreamSuccessSchema },
        errorFactory: ContainerMessages.ContainerMessagesStreamError,
      },
      options,
    );
  }
}

export namespace ContainerMessages {
  export type ContainerMessagesRequest = {
    body: ContainerMessagesBody;
  };

  export class ContainerMessagesError extends ApiError {
    declare readonly payload: Declared<"messagesErrorResponse", MessagesErrorResponse> | Undeclared;

    static readonly errors: ErrorDecoders<ContainerMessagesError> = [
      {
        on: 422,
        kind: "messagesErrorResponse",
        decode: { kind: "json", schema: messagesErrorResponseSchema },
      },
    ];
  }

  export type ContainerMessagesStreamRequest = {
    body: ContainerMessagesStreamBody;
  };

  export class ContainerMessagesStreamError extends ApiError {
    declare readonly payload: Declared<"messagesErrorResponse", MessagesErrorResponse> | Undeclared;

    static readonly errors: ErrorDecoders<ContainerMessagesStreamError> = [
      {
        on: 422,
        kind: "messagesErrorResponse",
        decode: { kind: "json", schema: messagesErrorResponseSchema },
      },
    ];
  }
}
