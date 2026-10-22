import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import { Accept, acceptSchema } from "../models/accept.js";
import type { Servers } from "../servers.js";

/**
 * Operations related to Webhooks
 */
export class WebhooksApi {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Retrieve a webhook
   *
   * @remarks
   * Retrieve detailed information for a specific webhook by its unique identifier including
   * delivery attempts and response data. Returns webhook details with topic, account information,
   * delivery attempts containing request/response history, and links to subscription and retry
   * resources. Essential for debugging webhook delivery issues, analyzing response data, and
   * monitoring notification processing status.
   *
   * @returns successful operation
   *
   * @throws {@link WebhooksApi.GetWebhookError} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link DwollaApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getWebhook(
    request: WebhooksApi.GetWebhookRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, WebhooksApi.GetWebhookError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/webhooks/{id}"),
        auth: this.#auth.clientCredentials,
        pathParams: [{ name: "id", value: request.id, schema: s.string() }],
        query: [],
        headers: [
          {
            name: "Accept",
            value: request.accept,
            schema: s.defaulted(acceptSchema, Accept.ApplicationVndDwollaV1HalJson),
          },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: WebhooksApi.GetWebhookError,
      },
      options,
    );
  }

  /**
   * List retries for a webhook
   *
   * @remarks
   * Retrieve all retry attempts for a specific webhook including timestamps and delivery details.
   * Returns a list of retry attempts with unique identifiers, timestamps, and links to the parent
   * webhook with total count. Essential for tracking webhook delivery failures, analyzing retry
   * patterns, and debugging webhook notification issues to ensure reliable event processing.
   *
   * @returns successful operation
   *
   * @throws {@link WebhooksApi.ListWebhookRetriesError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link DwollaApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listWebhookRetries(
    request: WebhooksApi.ListWebhookRetriesRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, WebhooksApi.ListWebhookRetriesError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/webhooks/{id}/retries"),
        auth: this.#auth.clientCredentials,
        pathParams: [{ name: "id", value: request.id, schema: s.string() }],
        query: [],
        headers: [
          {
            name: "Accept",
            value: request.accept,
            schema: s.defaulted(acceptSchema, Accept.ApplicationVndDwollaV1HalJson),
          },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: WebhooksApi.ListWebhookRetriesError,
      },
      options,
    );
  }

  /**
   * Retry a webhook
   *
   * @remarks
   * Retry a webhook by its unique identifier to redeliver the notification to your endpoint.
   * Creates a new retry attempt and returns the location of the new webhook resource. Essential for
   * recovering from webhook delivery failures and ensuring reliable event notification processing
   * in your application.
   *
   * @returns created
   *
   * @throws {@link WebhooksApi.RetryWebhookError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link DwollaApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  retryWebhook(
    request: WebhooksApi.RetryWebhookRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, WebhooksApi.RetryWebhookError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/webhooks/{id}/retries"),
        auth: this.#auth.clientCredentials,
        pathParams: [{ name: "id", value: request.id, schema: s.string() }],
        query: [],
        headers: [
          {
            name: "Accept",
            value: request.accept,
            schema: s.defaulted(acceptSchema, Accept.ApplicationVndDwollaV1HalJson),
          },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: WebhooksApi.RetryWebhookError,
      },
      options,
    );
  }
}

export namespace WebhooksApi {
  export type GetWebhookRequest = {
    /** Webhook unique identifier */
    id: string;
    /**
     * The media type of the response. Must be application/vnd.dwolla.v1.hal+json
     *
     * @default Accept.ApplicationVndDwollaV1HalJson
     */
    accept?: Accept;
  };

  export class GetWebhookError extends ApiError {
    declare readonly payload: Declared<"error404", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<GetWebhookError> = [
      { on: 404, kind: "error404", decode: { kind: "empty" } },
    ];
  }

  export type ListWebhookRetriesRequest = {
    /** Webhook unique identifier */
    id: string;
    /**
     * The media type of the response. Must be application/vnd.dwolla.v1.hal+json
     *
     * @default Accept.ApplicationVndDwollaV1HalJson
     */
    accept?: Accept;
  };

  export class ListWebhookRetriesError extends ApiError {
    declare readonly payload: Declared<"error404", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<ListWebhookRetriesError> = [
      { on: 404, kind: "error404", decode: { kind: "empty" } },
    ];
  }

  export type RetryWebhookRequest = {
    /** Webhook unique identifier */
    id: string;
    /**
     * The media type of the response. Must be application/vnd.dwolla.v1.hal+json
     *
     * @default Accept.ApplicationVndDwollaV1HalJson
     */
    accept?: Accept;
  };

  export class RetryWebhookError extends ApiError {
    declare readonly payload: Declared<"error404", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<RetryWebhookError> = [
      { on: 404, kind: "error404", decode: { kind: "empty" } },
    ];
  }
}
