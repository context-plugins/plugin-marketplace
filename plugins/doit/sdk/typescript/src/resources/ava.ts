import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { allAuth, anyAuth } from "../core/auth/schemes.js";
import type { EventStream } from "../core/event-stream.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import { avaAskRequestSchema, type AvaAskRequest } from "../models/ava-ask-request.js";
import { avaAskSyncRequestSchema, type AvaAskSyncRequest } from "../models/ava-ask-sync-request.js";
import { avaAskSyncResponseSchema, type AvaAskSyncResponse } from "../models/ava-ask-sync-response.js";
import { avaFeedbackRequestSchema, type AvaFeedbackRequest } from "../models/ava-feedback-request.js";
import { errorSchema, type Error } from "../models/error.js";
import type { Servers } from "../servers.js";

/**
 * Interact with Ava, DoiT's AI-powered cloud assistant.
 */
export class Ava {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Ask Ava (streaming)
   *
   * @remarks
   * Send a question to Ava and receive a streaming response via Server-Sent Events (SSE). The
   * response streams back events containing the answer text, conversation ID, and message metadata.
   *
   * @returns OK - SSE stream of Ava response events.
   *
   * @throws {@link Ava.AskAvaStreamingError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link DoiTError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  askAvaStreaming(
    request: Ava.AskAvaStreamingRequest,
    options?: RequestOptions,
  ): ApiPromise<EventStream<string>, Ava.AskAvaStreamingError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/ava/v1/ask"),
        auth: anyAuth(this.#auth.apiKey, allAuth(this.#auth.tenantId, this.#auth.apiKey)),
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: avaAskRequestSchema },
      },
      {
        success: { kind: "eventStreamText", dataSchema: s.string() },
        errorFactory: Ava.AskAvaStreamingError,
      },
      options,
    );
  }

  /**
   * Ask Ava
   *
   * @remarks
   * Send a question to Ava and receive a synchronous response. Set `ephemeral` to `true` to skip
   * conversation persistence (recommended for programmatic consumers). When `ephemeral` is `false`
   * (default), the response includes a `conversationId` that can be used with the delete endpoint.
   *
   * @returns OK - Ava response returned.
   *
   * @throws {@link Ava.AskAvaSyncError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link DoiTError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  askAvaSync(
    request: Ava.AskAvaSyncRequest,
    options?: RequestOptions,
  ): ApiPromise<AvaAskSyncResponse, Ava.AskAvaSyncError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/ava/v1/askSync"),
        auth: anyAuth(this.#auth.apiKey, allAuth(this.#auth.tenantId, this.#auth.apiKey)),
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: avaAskSyncRequestSchema },
      },
      {
        success: { kind: "json", schema: avaAskSyncResponseSchema },
        errorFactory: Ava.AskAvaSyncError,
      },
      options,
    );
  }

  /**
   * Submit feedback
   *
   * @remarks
   * Submit feedback on an Ava answer to help improve response quality.
   *
   * @returns OK - Feedback submitted.
   *
   * @throws {@link Ava.AvaFeedbackError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link DoiTError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  avaFeedback(
    request: Ava.AvaFeedbackRequestParams,
    options?: RequestOptions,
  ): ApiPromise<undefined, Ava.AvaFeedbackError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/ava/v1/feedback"),
        auth: anyAuth(this.#auth.apiKey, allAuth(this.#auth.tenantId, this.#auth.apiKey)),
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: avaFeedbackRequestSchema },
      },
      {
        success: { kind: "empty" },
        errorFactory: Ava.AvaFeedbackError,
      },
      options,
    );
  }

  /**
   * Delete a conversation
   *
   * @remarks
   * Deletes an Ava conversation by its ID.
   *
   * @returns OK - Conversation deleted.
   *
   * @throws {@link Ava.DeleteAvaConversationError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link DoiTError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  deleteAvaConversation(
    request: Ava.DeleteAvaConversationRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, Ava.DeleteAvaConversationError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default("/ava/v1/deleteConversation"),
        auth: anyAuth(this.#auth.apiKey, allAuth(this.#auth.tenantId, this.#auth.apiKey)),
        pathParams: [],
        query: [{ name: "conversationId", value: request.conversationId, schema: s.string() }],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: Ava.DeleteAvaConversationError,
      },
      options,
    );
  }
}

export namespace Ava {
  export type AskAvaStreamingRequest = {
    body: AvaAskRequest;
  };

  export class AskAvaStreamingError extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"error3", Error>
      | Declared<"error4", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<AskAvaStreamingError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 403, kind: "error3", decode: { kind: "json", schema: errorSchema } },
      { on: 500, kind: "error4", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type AskAvaSyncRequest = {
    body: AvaAskSyncRequest;
  };

  export class AskAvaSyncError extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"error3", Error>
      | Declared<"error4", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<AskAvaSyncError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 403, kind: "error3", decode: { kind: "json", schema: errorSchema } },
      { on: 500, kind: "error4", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type AvaFeedbackRequestParams = {
    body: AvaFeedbackRequest;
  };

  export class AvaFeedbackError extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"error3", Error>
      | Declared<"error4", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<AvaFeedbackError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 403, kind: "error3", decode: { kind: "json", schema: errorSchema } },
      { on: 500, kind: "error4", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type DeleteAvaConversationRequest = {
    /** The ID of the conversation to delete. */
    conversationId: string;
  };

  export class DeleteAvaConversationError extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"error3", Error>
      | Declared<"error4", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<DeleteAvaConversationError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 403, kind: "error3", decode: { kind: "json", schema: errorSchema } },
      { on: 500, kind: "error4", decode: { kind: "json", schema: errorSchema } },
    ];
  }
}
