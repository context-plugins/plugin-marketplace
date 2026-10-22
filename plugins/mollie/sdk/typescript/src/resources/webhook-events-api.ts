import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { anyAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import * as s from "../core/validation/index.js";
import type { Servers } from "../servers.js";

/**
 * Operations related to the Webhook Events API
 */
export class WebhookEventsApi {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Get a Webhook Event
   *
   * @remarks
   * Retrieve a single webhook event object by its event ID.
   *
   * @returns The webhook event object.
   *
   * @throws {@link WebhookEventsApi.GetWebhookEventError} when the API answers with an error status
   * — narrow on `err.payload.kind`
   *
   * @throws {@link MollieApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getWebhookEvent(
    request: WebhookEventsApi.GetWebhookEventRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, WebhookEventsApi.GetWebhookEventError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v2/events/{webhookEventId}"),
        auth: anyAuth(this.#auth.advancedAccessToken, this.#auth.oAuth),
        pathParams: [{ name: "webhookEventId", value: request.webhookEventId, schema: s.string() }],
        query: [{ name: "testmode", value: request.testmode, schema: s.optional(s.boolean()) }],
        headers: [{ name: "idempotency-key", value: request.idempotencyKey, schema: s.optional(s.string()) }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: WebhookEventsApi.GetWebhookEventError,
      },
      options,
    );
  }
}

export namespace WebhookEventsApi {
  export type GetWebhookEventRequest = {
    /** Provide the ID of the related webhook event. */
    webhookEventId: string;
    /**
     * You can enable test mode by setting the `testmode` query parameter to `true`.
     *
     * Test entities cannot be retrieved when the endpoint is set to live mode, and vice versa.
     */
    testmode?: boolean;
    /** A unique key to ensure idempotent requests. This key should be a UUID v4 string. */
    idempotencyKey?: string;
  };

  export class GetWebhookEventError extends ApiError {
    declare readonly payload: Declared<"error404", undefined> | Declared<"error429", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<GetWebhookEventError> = [
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 429, kind: "error429", decode: { kind: "empty" } },
    ];
  }
}
