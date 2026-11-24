import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import { chatMessageSchema, type ChatMessage } from "../models/chat-message.js";
import { chatMessagesResponseSchema, type ChatMessagesResponse } from "../models/chat-messages-response.js";
import { errorSchema, type Error } from "../models/error.js";
import { sendMessageRequestInternalSchema, type SendMessageRequest } from "../models/send-message-request.js";
import type { Servers } from "../servers.js";

/**
 * Endpoints for shopper-customer communication including sending and retrieving chat messages.
 */
export class Chat {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Get chat messages for an order
   *
   * @remarks
   * Retrieves all chat messages associated with an order between the customer and the shopper.
   * Messages are returned in chronological order.
   *
   * @returns List of chat messages
   *
   * @throws {@link Chat.GetChatMessagesError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link InstacartError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getChatMessages(
    request: Chat.GetChatMessagesRequest,
    options?: RequestOptions,
  ): ApiPromise<ChatMessagesResponse, Chat.GetChatMessagesError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v2/post_checkout/chat/{order_id}/messages"),
        auth: this.#auth.bearerAuth,
        pathParams: [{ name: "order_id", value: request.orderId, schema: s.string() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: chatMessagesResponseSchema },
        errorFactory: Chat.GetChatMessagesError,
      },
      options,
    );
  }

  /**
   * Send a message to the shopper
   *
   * @remarks
   * Sends a chat message from the customer to the shopper associated with the order. Used for
   * communicating about replacements, additions, or delivery instructions.
   *
   * @returns Message sent successfully
   *
   * @throws {@link Chat.SendChatMessageError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link InstacartError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  sendChatMessage(
    request: Chat.SendChatMessageRequest,
    options?: RequestOptions,
  ): ApiPromise<ChatMessage, Chat.SendChatMessageError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/v2/post_checkout/chat/{order_id}/messages"),
        auth: this.#auth.bearerAuth,
        pathParams: [{ name: "order_id", value: request.orderId, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: sendMessageRequestInternalSchema },
      },
      {
        success: { kind: "json", schema: chatMessageSchema },
        errorFactory: Chat.SendChatMessageError,
      },
      options,
    );
  }
}

export namespace Chat {
  export type GetChatMessagesRequest = {
    /** The unique identifier for the order in the chat context. */
    orderId: string;
  };

  export class GetChatMessagesError extends ApiError {
    declare readonly payload: Declared<"error", Error> | Declared<"error2", Error> | Undeclared;

    static readonly errors: ErrorDecoders<GetChatMessagesError> = [
      { on: 401, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 404, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type SendChatMessageRequest = {
    /** The unique identifier for the order in the chat context. */
    orderId: string;
    body: SendMessageRequest;
  };

  export class SendChatMessageError extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"error3", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<SendChatMessageError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 404, kind: "error3", decode: { kind: "json", schema: errorSchema } },
    ];
  }
}
