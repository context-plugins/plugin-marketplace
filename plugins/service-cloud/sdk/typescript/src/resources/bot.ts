import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { anyAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import { chatMessageEnvelopeSchema, type ChatMessageEnvelope } from "../models/chat-message-envelope.js";
import {
  chatMessageResponseEnvelopeSchema,
  type ChatMessageResponseEnvelope,
} from "../models/chat-message-response-envelope.js";
import { endSessionReasonSchema, type EndSessionReason } from "../models/end-session-reason.js";
import { errorSchema, type Error } from "../models/error.js";
import { initMessageEnvelopeSchema, type InitMessageEnvelope } from "../models/init-message-envelope.js";
import { responseEnvelopeSchema, type ResponseEnvelope } from "../models/response-envelope.js";
import type { Servers } from "../servers.js";

export class Bot {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Continue an active session
   *
   * @remarks
   * Send a message to the bots API on an active session.
   *
   * @returns OK
   *
   * @throws {@link Bot.ContinueSessionError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link SalesforceServiceCloudError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  continueSession(
    request: Bot.ContinueSessionRequest,
    options?: RequestOptions,
  ): ApiPromise<ChatMessageResponseEnvelope, Bot.ContinueSessionError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/v5.3.0/sessions/{session-id}/messages"),
        auth: anyAuth(
          this.#auth.chatbotAuthAuthorizationCode,
          this.#auth.chatbotAuthImplicit,
          this.#auth.jwtBearer,
        ),
        pathParams: [{ name: "session-id", value: request.sessionId, schema: s.string() }],
        query: [],
        headers: [
          { name: "X-Org-Id", value: request.xOrgId, schema: s.string() },
          { name: "X-Request-ID", value: request.xRequestId, schema: s.optional(s.string()) },
          { name: "X-Runtime-CRC", value: request.xRuntimeCrc, schema: s.optional(s.string()) },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "json", value: request.body, schema: chatMessageEnvelopeSchema },
      },
      {
        success: { kind: "json", schema: chatMessageResponseEnvelopeSchema },
        errorFactory: Bot.ContinueSessionError,
      },
      options,
    );
  }

  /**
   * End an active session
   *
   * @remarks
   * Send a message to the bots API to end a session
   *
   * @returns OK
   *
   * @throws {@link Bot.EndSessionError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link SalesforceServiceCloudError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  endSession(
    request: Bot.EndSessionRequest,
    options?: RequestOptions,
  ): ApiPromise<ChatMessageResponseEnvelope, Bot.EndSessionError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default("/v5.3.0/sessions/{session-id}"),
        auth: anyAuth(
          this.#auth.chatbotAuthAuthorizationCode,
          this.#auth.chatbotAuthImplicit,
          this.#auth.jwtBearer,
        ),
        pathParams: [{ name: "session-id", value: request.sessionId, schema: s.string() }],
        query: [],
        headers: [
          { name: "X-Org-Id", value: request.xOrgId, schema: s.string() },
          { name: "X-Session-End-Reason", value: request.xSessionEndReason, schema: endSessionReasonSchema },
          { name: "X-Request-ID", value: request.xRequestId, schema: s.optional(s.string()) },
          { name: "X-Runtime-CRC", value: request.xRuntimeCrc, schema: s.optional(s.string()) },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: chatMessageResponseEnvelopeSchema },
        errorFactory: Bot.EndSessionError,
      },
      options,
    );
  }

  /**
   * Start a session
   *
   * @remarks
   * Send a message to the bots API to start a new session.
   *
   * @returns OK
   *
   * @throws {@link Bot.StartSessionError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link SalesforceServiceCloudError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  startSession(
    request: Bot.StartSessionRequest,
    options?: RequestOptions,
  ): ApiPromise<ResponseEnvelope, Bot.StartSessionError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/v5.3.0/bots/{bot-id}/sessions"),
        auth: anyAuth(
          this.#auth.chatbotAuthAuthorizationCode,
          this.#auth.chatbotAuthImplicit,
          this.#auth.jwtBearer,
        ),
        pathParams: [{ name: "bot-id", value: request.botId, schema: s.string() }],
        query: [],
        headers: [
          { name: "X-Org-Id", value: request.xOrgId, schema: s.string() },
          { name: "X-Request-ID", value: request.xRequestId, schema: s.optional(s.string()) },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "json", value: request.body, schema: initMessageEnvelopeSchema },
      },
      {
        success: { kind: "json", schema: responseEnvelopeSchema },
        errorFactory: Bot.StartSessionError,
      },
      options,
    );
  }
}

export namespace Bot {
  export type ContinueSessionRequest = {
    /**
     * ID of an active session, which is the `sessionId` returned by the bot when you start a
     * session.
     */
    sessionId: string;
    /** 18-character org ID of the Salesforce org associated with the bot. */
    xOrgId: string;
    /** Request ID. A UUID in string format created by you to help with request tracking. */
    xRequestId?: string;
    /** Internal runtime CRC, which is the `X-Runtime-CRC` value from previous response. */
    xRuntimeCrc?: string;
    /** Request payload to continue the chat. */
    body: ChatMessageEnvelope;
  };

  export class ContinueSessionError extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"error3", Error>
      | Declared<"error4", Error>
      | Declared<"error5", Error>
      | Declared<"error6", Error>
      | Declared<"error7", Error>
      | Declared<"error8", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<ContinueSessionError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 403, kind: "error3", decode: { kind: "json", schema: errorSchema } },
      { on: 404, kind: "error4", decode: { kind: "json", schema: errorSchema } },
      { on: 422, kind: "error5", decode: { kind: "json", schema: errorSchema } },
      { on: 423, kind: "error6", decode: { kind: "json", schema: errorSchema } },
      { on: 429, kind: "error7", decode: { kind: "json", schema: errorSchema } },
      { on: 503, kind: "error8", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type EndSessionRequest = {
    /**
     * ID of an active session, which is the `sessionId` returned by the bot when you start a
     * session.
     */
    sessionId: string;
    /** 18-character org ID of the Salesforce org associated with the bot. */
    xOrgId: string;
    /** Reason session ended. */
    xSessionEndReason: EndSessionReason;
    /** Request ID. A UUID in string format created by you to help with request tracking. */
    xRequestId?: string;
    /** Internal runtime CRC, which is the `X-Runtime-CRC` value from previous response. */
    xRuntimeCrc?: string;
  };

  export class EndSessionError extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"error3", Error>
      | Declared<"error4", Error>
      | Declared<"error5", Error>
      | Declared<"error6", Error>
      | Declared<"error7", Error>
      | Declared<"error8", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<EndSessionError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 403, kind: "error3", decode: { kind: "json", schema: errorSchema } },
      { on: 404, kind: "error4", decode: { kind: "json", schema: errorSchema } },
      { on: 422, kind: "error5", decode: { kind: "json", schema: errorSchema } },
      { on: 423, kind: "error6", decode: { kind: "json", schema: errorSchema } },
      { on: 429, kind: "error7", decode: { kind: "json", schema: errorSchema } },
      { on: 503, kind: "error8", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type StartSessionRequest = {
    /** ID of the Einstein Bot that you want to interact with. */
    botId: string;
    /** 18-character org ID of the Salesforce org associated with the bot. */
    xOrgId: string;
    /** Request ID. A UUID in string format created by you to help with request tracking. */
    xRequestId?: string;
    /** Request payload to initiate a session. */
    body: InitMessageEnvelope;
  };

  export class StartSessionError extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"error3", Error>
      | Declared<"error4", Error>
      | Declared<"error5", Error>
      | Declared<"error6", Error>
      | Declared<"error7", Error>
      | Declared<"error8", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<StartSessionError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 403, kind: "error3", decode: { kind: "json", schema: errorSchema } },
      { on: 404, kind: "error4", decode: { kind: "json", schema: errorSchema } },
      { on: 422, kind: "error5", decode: { kind: "json", schema: errorSchema } },
      { on: 423, kind: "error6", decode: { kind: "json", schema: errorSchema } },
      { on: 429, kind: "error7", decode: { kind: "json", schema: errorSchema } },
      { on: 503, kind: "error8", decode: { kind: "json", schema: errorSchema } },
    ];
  }
}
