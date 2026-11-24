import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import { errorResponseDtoSchema, type ErrorResponseDto } from "../models/error-response-dto.js";
import type { Servers } from "../servers.js";

export class IncomingWebhooksRestController {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * An invocation of an inbound webhook
   *
   * @remarks
   * Third parties can call these inbound webhooks to dothings within compass, like create
   * deployment events for webhooks coming from github
   *
   * @returns Returned if the process of invoking a webhook with a payload has been enqueud.
   *
   * @throws {@link IncomingWebhooksRestController.HandleWebhookInvocationError} when the API
   * answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link AtlassianCompassError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  handleWebhookInvocation(
    request: IncomingWebhooksRestController.HandleWebhookInvocationRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, IncomingWebhooksRestController.HandleWebhookInvocationError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/compass/v1/webhooks/{webhookId}"),
        auth: this.#auth.basicAuth,
        pathParams: [{ name: "webhookId", value: request.webhookId, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: s.string() },
      },
      {
        success: { kind: "empty" },
        errorFactory: IncomingWebhooksRestController.HandleWebhookInvocationError,
      },
      options,
    );
  }
}

export namespace IncomingWebhooksRestController {
  export type HandleWebhookInvocationRequest = {
    webhookId: string;
    body: string;
  };

  export class HandleWebhookInvocationError extends ApiError {
    declare readonly payload:
      | Declared<"errorResponseDto", ErrorResponseDto>
      | Declared<"errorResponseDto2", ErrorResponseDto>
      | Declared<"errorResponseDto3", ErrorResponseDto>
      | Declared<"errorResponseDto4", ErrorResponseDto>
      | Declared<"error429", string>
      | Undeclared;

    static readonly errors: ErrorDecoders<HandleWebhookInvocationError> = [
      { on: 400, kind: "errorResponseDto", decode: { kind: "json", schema: errorResponseDtoSchema } },
      { on: 401, kind: "errorResponseDto2", decode: { kind: "json", schema: errorResponseDtoSchema } },
      { on: 404, kind: "errorResponseDto3", decode: { kind: "json", schema: errorResponseDtoSchema } },
      { on: 405, kind: "errorResponseDto4", decode: { kind: "json", schema: errorResponseDtoSchema } },
      { on: 429, kind: "error429", decode: { kind: "json", schema: s.string() } },
    ];
  }
}
