import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { EventStream } from "../core/event-stream.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import { apiChatRequestSchema, type ApiChatRequest } from "../models/api-chat-request.js";
import { apiChatStreamRequestSchema, type ApiChatStreamRequest } from "../models/api-chat-stream-request.js";
import {
  platformChatCompletedResponseSchema,
  type PlatformChatCompletedResponse,
} from "../models/platform-chat-completed-response.js";
import {
  platformChatStreamEventServerSentEventSchema,
  type PlatformChatStreamEventServerSentEvent,
} from "../models/unions/platform-chat-stream-event-server-sent-event.js";
import type { Servers } from "../servers.js";

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
   * Create a chat response
   *
   * @remarks
   * Run an assistant turn. The default response is JSON. HTTP clients request server-sent events by
   * setting `stream` to true in the JSON body. An `Accept: text/event-stream` header does not
   * replace `stream`.
   *
   * @returns Successful response.
   *
   * @throws {@link Chat.PlatformChatCreateError} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link GleanPlatformApiError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  platformChatCreate(
    request: Chat.PlatformChatCreateRequestParams,
    options?: RequestOptions,
  ): ApiPromise<PlatformChatCompletedResponse, Chat.PlatformChatCreateError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/api/chat"),
        auth: this.#auth.apiToken,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: apiChatRequestSchema },
      },
      {
        success: { kind: "json", schema: platformChatCompletedResponseSchema },
        errorFactory: Chat.PlatformChatCreateError,
      },
      options,
    );
  }

  /**
   * Create a streaming chat response
   *
   * @remarks
   * SDK-only logical operation. HTTP clients must call the base path; the URL fragment is not sent.
   * Run an assistant turn as server-sent events. HTTP clients request this mode by setting `stream`
   * to true in the JSON body.
   *
   * @returns Successful response.
   *
   * @throws {@link Chat.PlatformChatCreateStreamError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link GleanPlatformApiError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  platformChatCreateStream(
    request: Chat.PlatformChatCreateStreamRequest,
    options?: RequestOptions,
  ): ApiPromise<EventStream<PlatformChatStreamEventServerSentEvent>, Chat.PlatformChatCreateStreamError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/api/chat#stream"),
        auth: this.#auth.apiToken,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: apiChatStreamRequestSchema },
      },
      {
        success: { kind: "eventStreamJson", dataSchema: platformChatStreamEventServerSentEventSchema },
        errorFactory: Chat.PlatformChatCreateStreamError,
      },
      options,
    );
  }
}

export namespace Chat {
  export type PlatformChatCreateRequestParams = {
    body: ApiChatRequest;
  };

  export class PlatformChatCreateError extends ApiError {
    declare readonly payload:
      | Declared<"error400", undefined>
      | Declared<"error401", undefined>
      | Declared<"error403", undefined>
      | Declared<"error404", undefined>
      | Declared<"error408", undefined>
      | Declared<"error413", undefined>
      | Declared<"error422", undefined>
      | Declared<"error429", undefined>
      | Declared<"error500", undefined>
      | Declared<"error503", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<PlatformChatCreateError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 401, kind: "error401", decode: { kind: "empty" } },
      { on: 403, kind: "error403", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 408, kind: "error408", decode: { kind: "empty" } },
      { on: 413, kind: "error413", decode: { kind: "empty" } },
      { on: 422, kind: "error422", decode: { kind: "empty" } },
      { on: 429, kind: "error429", decode: { kind: "empty" } },
      { on: 500, kind: "error500", decode: { kind: "empty" } },
      { on: 503, kind: "error503", decode: { kind: "empty" } },
    ];
  }

  export type PlatformChatCreateStreamRequest = {
    body: ApiChatStreamRequest;
  };

  export class PlatformChatCreateStreamError extends ApiError {
    declare readonly payload:
      | Declared<"error400", undefined>
      | Declared<"error401", undefined>
      | Declared<"error403", undefined>
      | Declared<"error404", undefined>
      | Declared<"error408", undefined>
      | Declared<"error413", undefined>
      | Declared<"error422", undefined>
      | Declared<"error429", undefined>
      | Declared<"error500", undefined>
      | Declared<"error503", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<PlatformChatCreateStreamError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 401, kind: "error401", decode: { kind: "empty" } },
      { on: 403, kind: "error403", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 408, kind: "error408", decode: { kind: "empty" } },
      { on: 413, kind: "error413", decode: { kind: "empty" } },
      { on: 422, kind: "error422", decode: { kind: "empty" } },
      { on: 429, kind: "error429", decode: { kind: "empty" } },
      { on: 500, kind: "error500", decode: { kind: "empty" } },
      { on: 503, kind: "error503", decode: { kind: "empty" } },
    ];
  }
}
