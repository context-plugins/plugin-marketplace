import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import { Accept, acceptSchema } from "../models/accept.js";
import {
  webhookSubscriptionsRequestSchema,
  type WebhookSubscriptionsRequest,
} from "../models/webhook-subscriptions-request.js";
import {
  webhookSubscriptionsRequest1Schema,
  type WebhookSubscriptionsRequest1,
} from "../models/webhook-subscriptions-request1.js";
import type { Servers } from "../servers.js";

/**
 * Operations related to Webhook Subscriptions
 */
export class WebhookSubscriptions {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Create a webhook subscription
   *
   * @remarks
   * Create a webhook subscription to deliver webhook notifications to a specified URL endpoint for
   * your application. Requires a destination URL where Dwolla will send notifications and a secret
   * key for webhook validation and security. Returns the location of the created subscription
   * resource. Essential for establishing real-time event notifications and automated integrations
   * with Dwolla's payment processing events.
   *
   * @returns create
   *
   * @throws {@link WebhookSubscriptions.CreateWebhookSubscriptionError} when the API answers with
   * an error status — narrow on `err.payload.kind`
   *
   * @throws {@link DwollaApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  createWebhookSubscription(
    request: WebhookSubscriptions.CreateWebhookSubscriptionRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, WebhookSubscriptions.CreateWebhookSubscriptionError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/webhook-subscriptions"),
        auth: this.#auth.clientCredentials,
        pathParams: [],
        query: [],
        headers: [
          {
            name: "Accept",
            value: request.accept,
            schema: s.defaulted(acceptSchema, Accept.ApplicationVndDwollaV1HalJson),
          },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "json", value: request.body, schema: webhookSubscriptionsRequestSchema },
      },
      {
        success: { kind: "empty" },
        errorFactory: WebhookSubscriptions.CreateWebhookSubscriptionError,
      },
      options,
    );
  }

  /**
   * Delete a webhook subscription
   *
   * @remarks
   * Delete a webhook subscription to permanently remove webhook notifications for your application.
   * This action stops all future webhook deliveries and cannot be undone. Returns the deleted
   * subscription resource for confirmation. Use this endpoint when webhook notifications are no
   * longer needed or when cleaning up unused subscriptions.
   *
   * @returns successful operation
   *
   * @throws {@link WebhookSubscriptions.DeleteError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link DwollaApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  delete(
    request: WebhookSubscriptions.DeleteRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, WebhookSubscriptions.DeleteError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default("/webhook-subscriptions/{id}"),
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
        errorFactory: WebhookSubscriptions.DeleteError,
      },
      options,
    );
  }

  /**
   * Retrieve a webhook subscription
   *
   * @remarks
   * Retrieve detailed information for a specific webhook subscription by its unique identifier.
   * Returns subscription configuration including URL endpoint, creation date, and links to
   * associated webhooks for comprehensive subscription management. Essential for monitoring webhook
   * subscription status and accessing webhook delivery history.
   *
   * @returns successful operation
   *
   * @throws {@link WebhookSubscriptions.GetWebhookSubscriptionError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link DwollaApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getWebhookSubscription(
    request: WebhookSubscriptions.GetWebhookSubscriptionRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, WebhookSubscriptions.GetWebhookSubscriptionError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/webhook-subscriptions/{id}"),
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
        errorFactory: WebhookSubscriptions.GetWebhookSubscriptionError,
      },
      options,
    );
  }

  /**
   * List webhook subscriptions
   *
   * @remarks
   * Retrieve all webhook subscriptions that belong to an application including their configuration
   * details and status. Returns subscription details including webhook endpoints, status, creation
   * dates, and links to associated webhooks with total count. Essential for webhook management and
   * monitoring subscription health.
   *
   * @returns successful operation
   *
   * @throws {@link WebhookSubscriptions.ListWebhookSubscriptionsError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link DwollaApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listWebhookSubscriptions(
    request: WebhookSubscriptions.ListWebhookSubscriptionsRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, WebhookSubscriptions.ListWebhookSubscriptionsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/webhook-subscriptions"),
        auth: this.#auth.clientCredentials,
        pathParams: [],
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
        errorFactory: WebhookSubscriptions.ListWebhookSubscriptionsError,
      },
      options,
    );
  }

  /**
   * List webhooks for a webhook subscription
   *
   * @remarks
   * Retrieve all fired webhooks for a specific webhook subscription with comprehensive filtering
   * and pagination support. Returns webhook delivery history including topics, attempts,
   * request/response details, and delivery status over a rolling 30-day period. Supports filtering
   * by resource ID, date ranges, and pagination parameters for detailed webhook delivery analysis.
   * Critical for debugging webhook delivery issues and monitoring event notification success rates.
   *
   * @returns successful operation
   *
   * @throws {@link WebhookSubscriptions.ListWebhooksError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link DwollaApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listWebhooks(
    request: WebhookSubscriptions.ListWebhooksRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, WebhookSubscriptions.ListWebhooksError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/webhook-subscriptions/{id}/webhooks"),
        auth: this.#auth.clientCredentials,
        pathParams: [{ name: "id", value: request.id, schema: s.string() }],
        query: [
          { name: "limit", value: request.limit, schema: s.optional(s.string()) },
          { name: "offset", value: request.offset, schema: s.optional(s.string()) },
          { name: "startDate", value: request.startDate, schema: s.optional(s.string()) },
          { name: "endDate", value: request.endDate, schema: s.optional(s.string()) },
        ],
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
        errorFactory: WebhookSubscriptions.ListWebhooksError,
      },
      options,
    );
  }

  /**
   * Update a webhook subscription
   *
   * @remarks
   * Update a webhook subscription to pause or resume webhook delivery notifications. Allows
   * toggling the paused status to temporarily stop webhook notifications without deleting the
   * subscription. Returns the updated subscription resource with the new paused status. Use this
   * endpoint to manage webhook delivery during maintenance or troubleshooting periods.
   *
   * @returns successful operation
   *
   * @throws {@link WebhookSubscriptions.UpdateWebhookSubscriptionError} when the API answers with
   * an error status — narrow on `err.payload.kind`
   *
   * @throws {@link DwollaApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  updateWebhookSubscription(
    request: WebhookSubscriptions.UpdateWebhookSubscriptionRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, WebhookSubscriptions.UpdateWebhookSubscriptionError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/webhook-subscriptions/{id}"),
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
        body: { kind: "json", value: request.body, schema: webhookSubscriptionsRequest1Schema },
      },
      {
        success: { kind: "empty" },
        errorFactory: WebhookSubscriptions.UpdateWebhookSubscriptionError,
      },
      options,
    );
  }
}

export namespace WebhookSubscriptions {
  export type CreateWebhookSubscriptionRequest = {
    /**
     * The media type of the response. Must be application/vnd.dwolla.v1.hal+json
     *
     * @default Accept.ApplicationVndDwollaV1HalJson
     */
    accept?: Accept;
    /** Parameters to create a webhook subscriptions */
    body: WebhookSubscriptionsRequest;
  };

  export class CreateWebhookSubscriptionError extends ApiError {
    declare readonly payload:
      | Declared<"error400", undefined>
      | Declared<"error403", undefined>
      | Declared<"error404", undefined>
      | Declared<"error429", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<CreateWebhookSubscriptionError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 403, kind: "error403", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 429, kind: "error429", decode: { kind: "empty" } },
    ];
  }

  export type DeleteRequest = {
    /** Webhook unique identifier */
    id: string;
    /**
     * The media type of the response. Must be application/vnd.dwolla.v1.hal+json
     *
     * @default Accept.ApplicationVndDwollaV1HalJson
     */
    accept?: Accept;
  };

  export class DeleteError extends ApiError {
    declare readonly payload: Declared<"error404", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<DeleteError> = [
      { on: 404, kind: "error404", decode: { kind: "empty" } },
    ];
  }

  export type GetWebhookSubscriptionRequest = {
    /** Webhook subscription unique identifier */
    id: string;
    /**
     * The media type of the response. Must be application/vnd.dwolla.v1.hal+json
     *
     * @default Accept.ApplicationVndDwollaV1HalJson
     */
    accept?: Accept;
  };

  export class GetWebhookSubscriptionError extends ApiError {
    declare readonly payload: Declared<"error404", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<GetWebhookSubscriptionError> = [
      { on: 404, kind: "error404", decode: { kind: "empty" } },
    ];
  }

  export type ListWebhookSubscriptionsRequest = {
    /**
     * The media type of the response. Must be application/vnd.dwolla.v1.hal+json
     *
     * @default Accept.ApplicationVndDwollaV1HalJson
     */
    accept?: Accept;
  };

  export class ListWebhookSubscriptionsError extends ApiError {
    declare readonly payload: Declared<"error403", undefined> | Declared<"error404", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<ListWebhookSubscriptionsError> = [
      { on: 403, kind: "error403", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
    ];
  }

  export type ListWebhooksRequest = {
    /** Webhook subscription unique identifier */
    id: string;
    /** How many results to return */
    limit?: string;
    /** How many results to skip */
    offset?: string;
    /** Only include webhooks created after this date. ISO-8601 format `YYYY-MM-DD` */
    startDate?: string;
    /** Only include webhooks created before this date. ISO-8601 format `YYYY-MM-DD` */
    endDate?: string;
    /**
     * The media type of the response. Must be application/vnd.dwolla.v1.hal+json
     *
     * @default Accept.ApplicationVndDwollaV1HalJson
     */
    accept?: Accept;
  };

  export class ListWebhooksError extends ApiError {
    declare readonly payload: Declared<"error403", undefined> | Declared<"error404", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<ListWebhooksError> = [
      { on: 403, kind: "error403", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
    ];
  }

  export type UpdateWebhookSubscriptionRequest = {
    /** Webhook unique identifier */
    id: string;
    /**
     * The media type of the response. Must be application/vnd.dwolla.v1.hal+json
     *
     * @default Accept.ApplicationVndDwollaV1HalJson
     */
    accept?: Accept;
    /** Parameters to update a webhook subscription */
    body: WebhookSubscriptionsRequest1;
  };

  export class UpdateWebhookSubscriptionError extends ApiError {
    declare readonly payload: Declared<"error400", undefined> | Declared<"error404", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<UpdateWebhookSubscriptionError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
    ];
  }
}
