import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import { httpValidationErrorSchema, type HttpValidationError } from "../models/http-validation-error.js";
import { testMessageResponseSchema, type TestMessageResponse } from "../models/test-message-response.js";
import { testMessageSchema, type TestMessage } from "../models/test-message.js";
import type { Servers } from "../servers.js";

/**
 * Operations for testing agents with live text. These endpoints allow sending messages to an agent
 * and receiving its responses.
 */
export class AgentsTest {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Send New Message
   *
   * @remarks
   * Send a new message
   *
   * @returns Successful Response
   *
   * @throws {@link AgentsTest.SendTestMessageError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link SyllableSdkError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  sendTestMessage(
    request: AgentsTest.SendTestMessageRequest,
    options?: RequestOptions,
  ): ApiPromise<TestMessageResponse, AgentsTest.SendTestMessageError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/api/v1/agents/test/messages"),
        auth: this.#auth.apiKeyHeader,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: testMessageSchema },
      },
      {
        success: { kind: "json", schema: testMessageResponseSchema },
        errorFactory: AgentsTest.SendTestMessageError,
      },
      options,
    );
  }
}

export namespace AgentsTest {
  export type SendTestMessageRequest = {
    body: TestMessage;
  };

  export class SendTestMessageError extends ApiError {
    declare readonly payload: Declared<"httpValidationError", HttpValidationError> | Undeclared;

    static readonly errors: ErrorDecoders<SendTestMessageError> = [
      { on: 422, kind: "httpValidationError", decode: { kind: "json", schema: httpValidationErrorSchema } },
    ];
  }
}
