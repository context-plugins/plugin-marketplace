import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import {
  errorResponseBoomiEventStreamsRestMessagesApiSchema,
  type ErrorResponseBoomiEventStreamsRestMessagesApi,
} from "../models/error-response-boomi-event-streams-rest-messages-api.js";
import { publishResponseSchema, type PublishResponse } from "../models/publish-response.js";
import { requestSchema, type Request } from "../models/unions/request.js";
import type { Servers } from "../servers.js";

/**
 * Endpoints for producing messages to Boomi Event Streams topics via HTTP REST calls.
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
   * Boomi Publish messages to a topic
   *
   * @remarks
   * Publishes one or more messages to the event topic. Supports two operational modes: multiple
   * messages mode (predefined JSON format with payload and properties fields) and single message
   * mode (original format in plain text, JSON, or XML). Messages may be up to 5 MB each and the
   * total HTTP request must not exceed 10 MB. Rate limited to 60,000 requests per IP per 5-minute
   * window.
   *
   * @returns Messages accepted and published successfully.
   *
   * @throws {@link Messages.PublishMessagesError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link BoomiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  publishMessages(
    request: Messages.PublishMessagesRequest,
    options?: RequestOptions,
  ): ApiPromise<PublishResponse, Messages.PublishMessagesError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.defaultBoomiEventStreamsRestMessagesApi("/"),
        auth: this.#auth.bearerAuth,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: requestSchema },
      },
      {
        success: { kind: "json", schema: publishResponseSchema },
        errorFactory: Messages.PublishMessagesError,
      },
      options,
    );
  }
}

export namespace Messages {
  export type PublishMessagesRequest = {
    body: Request;
  };

  export class PublishMessagesError extends ApiError {
    declare readonly payload:
      | Declared<
          "errorResponseBoomiEventStreamsRestMessagesApi",
          ErrorResponseBoomiEventStreamsRestMessagesApi
        >
      | Declared<
          "errorResponseBoomiEventStreamsRestMessagesApi2",
          ErrorResponseBoomiEventStreamsRestMessagesApi
        >
      | Declared<"error413", undefined>
      | Declared<"error429", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<PublishMessagesError> = [
      {
        on: 400,
        kind: "errorResponseBoomiEventStreamsRestMessagesApi",
        decode: { kind: "json", schema: errorResponseBoomiEventStreamsRestMessagesApiSchema },
      },
      {
        on: 401,
        kind: "errorResponseBoomiEventStreamsRestMessagesApi2",
        decode: { kind: "json", schema: errorResponseBoomiEventStreamsRestMessagesApiSchema },
      },
      { on: 413, kind: "error413", decode: { kind: "empty" } },
      { on: 429, kind: "error429", decode: { kind: "empty" } },
    ];
  }
}
