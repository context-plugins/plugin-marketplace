import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import {
  apiV2MessageRequestsRequestSchema,
  type ApiV2MessageRequestsRequest,
} from "../models/api-v2-message-requests-request.js";
import {
  apiV2MessageRequestsResponseSchema,
  type ApiV2MessageRequestsResponse,
} from "../models/api-v2-message-requests-response.js";
import {
  apiV2SentMessagesResponseSchema,
  type ApiV2SentMessagesResponse,
} from "../models/api-v2-sent-messages-response.js";
import {
  apiV2SentMessages400Error1Schema,
  type ApiV2SentMessages400Error1,
} from "../models/api-v2-sent-messages400-error1.js";
import type { Servers } from "../servers.js";

/**
 * Send messages and read message requests and sent messages.
 */
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
   * Send Message
   *
   * @remarks
   * Send a message to a subscriber.
   *
   * @returns 202
   *
   * @throws {@link Messages.CreateMessageError} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link PostscriptError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  createMessage(
    request: Messages.CreateMessageRequest = {},
    options?: RequestOptions,
  ): ApiPromise<ApiV2MessageRequestsResponse, Messages.CreateMessageError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/api/v2/message_requests"),
        auth: this.#auth.sec0,
        pathParams: [],
        query: [],
        headers: [
          {
            name: "X-Postscript-Shop-Token",
            value: request.xPostscriptShopToken,
            schema: s.optional(s.string()),
          },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => apiV2MessageRequestsRequestSchema)),
        },
      },
      {
        success: { kind: "json", schema: apiV2MessageRequestsResponseSchema },
        errorFactory: Messages.CreateMessageError,
      },
      options,
    );
  }

  /**
   * Get Message Request
   *
   * @returns 200
   *
   * @throws {@link Messages.GetMessageRequestError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link PostscriptError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getMessageRequest(
    request: Messages.GetMessageRequestRequest,
    options?: RequestOptions,
  ): ApiPromise<ApiV2MessageRequestsResponse, Messages.GetMessageRequestError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/v2/message_requests/{id}"),
        auth: this.#auth.sec0,
        pathParams: [{ name: "id", value: request.id, schema: s.string() }],
        query: [],
        headers: [
          {
            name: "X-Postscript-Shop-Token",
            value: request.xPostscriptShopToken,
            schema: s.optional(s.string()),
          },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: apiV2MessageRequestsResponseSchema },
        errorFactory: Messages.GetMessageRequestError,
      },
      options,
    );
  }

  /**
   * Get Sent Message
   *
   * @returns 200
   *
   * @throws {@link Messages.GetSentMessageError} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link PostscriptError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getSentMessage(
    request: Messages.GetSentMessageRequest,
    options?: RequestOptions,
  ): ApiPromise<ApiV2SentMessagesResponse, Messages.GetSentMessageError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/v2/sent_messages/{id}"),
        auth: this.#auth.sec0,
        pathParams: [{ name: "id", value: request.id, schema: s.string() }],
        query: [],
        headers: [
          {
            name: "X-Postscript-Shop-Token",
            value: request.xPostscriptShopToken,
            schema: s.optional(s.string()),
          },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: apiV2SentMessagesResponseSchema },
        errorFactory: Messages.GetSentMessageError,
      },
      options,
    );
  }
}

export namespace Messages {
  export type CreateMessageRequest = {
    /**
     * Shop API Token. **Required for partners**. This header should be used *only* by partners.
     * Shops should include their API token in the *Authorization* header.
     */
    xPostscriptShopToken?: string;
    body?: ApiV2MessageRequestsRequest;
  };

  export class CreateMessageError extends ApiError {
    declare readonly payload: Declared<"error400", Record<string, unknown>> | Undeclared;

    static readonly errors: ErrorDecoders<CreateMessageError> = [
      { on: 400, kind: "error400", decode: { kind: "json", schema: s.record(s.string(), s.unknown()) } },
    ];
  }

  export type GetMessageRequestRequest = {
    /** ID of the message request to look up. */
    id: string;
    /**
     * Shop API Token. **Required for partners**. This header should be used *only* by partners.
     * Shops should include their API token in the *Authorization* header.
     */
    xPostscriptShopToken?: string;
  };

  export class GetMessageRequestError extends ApiError {
    declare readonly payload: Declared<"error400", Record<string, unknown>> | Undeclared;

    static readonly errors: ErrorDecoders<GetMessageRequestError> = [
      { on: 400, kind: "error400", decode: { kind: "json", schema: s.record(s.string(), s.unknown()) } },
    ];
  }

  export type GetSentMessageRequest = {
    /** ID of sent message to fetch. */
    id: string;
    /**
     * Shop API Token. **Required for partners**. This header should be used *only* by partners.
     * Shops should include their API token in the *Authorization* header.
     */
    xPostscriptShopToken?: string;
  };

  export class GetSentMessageError extends ApiError {
    declare readonly payload: Declared<"apiV2SentMessages400Error1", ApiV2SentMessages400Error1> | Undeclared;

    static readonly errors: ErrorDecoders<GetSentMessageError> = [
      {
        on: 400,
        kind: "apiV2SentMessages400Error1",
        decode: { kind: "json", schema: apiV2SentMessages400Error1Schema },
      },
    ];
  }
}
