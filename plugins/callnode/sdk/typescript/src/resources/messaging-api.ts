import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { allAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import { errorSchema, type Error } from "../models/error.js";
import { messageInternalSchema, type Message } from "../models/message.js";
import { sendMessageRequestInternalSchema, type SendMessageRequest } from "../models/send-message-request.js";
import { sendMessageResponseSchema, type SendMessageResponse } from "../models/send-message-response.js";
import type { Servers } from "../servers.js";

/**
 * Send and retrieve SMS/MMS messages.
 */
export class MessagingApi {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Retrieve a message
   *
   * @returns The message, including its latest delivery status.
   *
   * @throws {@link MessagingApi.GetMessageError} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link CallNodeError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getMessage(
    request: MessagingApi.GetMessageRequest,
    options?: RequestOptions,
  ): ApiPromise<Message, MessagingApi.GetMessageError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/v1/messages/{id}"),
        auth: allAuth(this.#auth.apiKeyAuth, this.#auth.timestampAuth, this.#auth.signatureAuth),
        pathParams: [{ name: "id", value: request.id, schema: s.string() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: messageInternalSchema },
        errorFactory: MessagingApi.GetMessageError,
      },
      options,
    );
  }

  /**
   * Send an SMS or MMS
   *
   * @remarks
   * Sends a message from one of your numbers. Supplying `media` makes it an MMS. Four gates run in
   * order: number ownership, recipient opt-out status, the TCPA window, and carrier registration
   * (10DLC for local numbers, Toll-Free Verification for toll-free).
   *
   * @returns Message accepted by the carrier.
   *
   * @throws {@link MessagingApi.SendMessageError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link CallNodeError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  sendMessage(
    request: MessagingApi.SendMessageRequestParams,
    options?: RequestOptions,
  ): ApiPromise<SendMessageResponse, MessagingApi.SendMessageError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/api/v1/messages"),
        auth: allAuth(this.#auth.apiKeyAuth, this.#auth.timestampAuth, this.#auth.signatureAuth),
        pathParams: [],
        query: [],
        headers: [
          { name: "X-Idempotency-Key", value: request.xIdempotencyKey, schema: s.optional(s.string()) },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "json", value: request.body, schema: sendMessageRequestInternalSchema },
      },
      {
        success: { kind: "json", schema: sendMessageResponseSchema },
        errorFactory: MessagingApi.SendMessageError,
      },
      options,
    );
  }
}

export namespace MessagingApi {
  export type GetMessageRequest = {
    id: string;
  };

  export class GetMessageError extends ApiError {
    declare readonly payload: Declared<"error", Error> | Declared<"error2", Error> | Undeclared;

    static readonly errors: ErrorDecoders<GetMessageError> = [
      { on: 401, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 404, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type SendMessageRequestParams = {
    /** A UUID. Replaying the same key returns the original result rather than acting twice. */
    xIdempotencyKey?: string;
    body: SendMessageRequest;
  };

  export class SendMessageError extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"error3", Error>
      | Declared<"error4", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<SendMessageError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 403, kind: "error3", decode: { kind: "json", schema: errorSchema } },
      { on: 429, kind: "error4", decode: { kind: "json", schema: errorSchema } },
    ];
  }
}
