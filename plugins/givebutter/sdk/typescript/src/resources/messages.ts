import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import * as s from "../core/validation/index.js";
import { messageResourceSchema, type MessageResource } from "../models/message-resource.js";
import {
  modelNotFoundException1Schema,
  type ModelNotFoundException1,
} from "../models/model-not-found-exception1.js";
import { v1MessagesResponseInternalSchema, type V1MessagesResponse } from "../models/v1-messages-response.js";
import type { Servers } from "../servers.js";

export class Messages {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * List all messages
   *
   * @returns Paginated set of `MessageResource`
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link GivebutterError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  messagesIndex(options?: RequestOptions): ApiPromise<V1MessagesResponse, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v1/messages"),
        auth: this.#auth.http,
        pathParams: [],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: v1MessagesResponseInternalSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Get a message
   *
   * @returns `MessageResource`
   *
   * @throws {@link Messages.MessagesShowError} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link GivebutterError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  messagesShow(
    request: Messages.MessagesShowRequest,
    options?: RequestOptions,
  ): ApiPromise<MessageResource, Messages.MessagesShowError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v1/messages/{message}"),
        auth: this.#auth.http,
        pathParams: [{ name: "message", value: request.message, schema: s.int() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: messageResourceSchema },
        errorFactory: Messages.MessagesShowError,
      },
      options,
    );
  }
}

export namespace Messages {
  export type MessagesShowRequest = {
    /** The message ID */
    message: number;
  };

  export class MessagesShowError extends ApiError {
    declare readonly payload: Declared<"modelNotFoundException1", ModelNotFoundException1> | Undeclared;

    static readonly errors: ErrorDecoders<MessagesShowError> = [
      {
        on: 404,
        kind: "modelNotFoundException1",
        decode: { kind: "json", schema: modelNotFoundException1Schema },
      },
    ];
  }
}
