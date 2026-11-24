import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import { errorSchema, type Error } from "../models/error.js";
import {
  notificationsMessagesTestRequestSchema,
  type NotificationsMessagesTestRequest,
} from "../models/notifications-messages-test-request.js";
import {
  notificationsWebhooksMessagesResponseSchema,
  type NotificationsWebhooksMessagesResponse,
} from "../models/notifications-webhooks-messages-response.js";
import {
  notificationsWebhooksMessagesResponse1Schema,
  type NotificationsWebhooksMessagesResponse1,
} from "../models/notifications-webhooks-messages-response1.js";
import {
  notificationsWebhooksRequestSchema,
  type NotificationsWebhooksRequest,
} from "../models/notifications-webhooks-request.js";
import {
  notificationsWebhooksResponseSchema,
  type NotificationsWebhooksResponse,
} from "../models/notifications-webhooks-response.js";
import {
  notificationsWebhooksResponse1Schema,
  type NotificationsWebhooksResponse1,
} from "../models/notifications-webhooks-response1.js";
import { webhookStatsSchema, type WebhookStats } from "../models/webhook-stats.js";
import type { Servers } from "../servers.js";

/**
 * Basiq Webhooks
 */
export class Webhooks {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Create a webhook
   *
   * @returns Created
   *
   * @throws {@link Webhooks.AddWebhookError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link BasiqError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  addWebhook(
    request: Webhooks.AddWebhookRequest = {},
    options?: RequestOptions,
  ): ApiPromise<NotificationsWebhooksResponse, Webhooks.AddWebhookError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/notifications/webhooks"),
        auth: this.#auth.servicesToken,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => notificationsWebhooksRequestSchema)),
        },
      },
      {
        success: { kind: "json", schema: notificationsWebhooksResponseSchema },
        errorFactory: Webhooks.AddWebhookError,
      },
      options,
    );
  }

  /**
   * Delete a webhook
   *
   * @returns Deletion successful (empty body)
   *
   * @throws {@link Webhooks.DeleteWebhookError} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link BasiqError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  deleteWebhook(
    request: Webhooks.DeleteWebhookRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, Webhooks.DeleteWebhookError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default("/notifications/webhooks/{webhookId}"),
        auth: this.#auth.servicesToken,
        pathParams: [{ name: "webhookId", value: request.webhookId, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: Webhooks.DeleteWebhookError,
      },
      options,
    );
  }

  /**
   * Retrieve a webhook
   *
   * @returns Success
   *
   * @throws {@link Webhooks.GetWebhookError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link BasiqError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getWebhook(
    request: Webhooks.GetWebhookRequest,
    options?: RequestOptions,
  ): ApiPromise<NotificationsWebhooksResponse, Webhooks.GetWebhookError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/notifications/webhooks/{webhookId}"),
        auth: this.#auth.servicesToken,
        pathParams: [{ name: "webhookId", value: request.webhookId, schema: s.string() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: notificationsWebhooksResponseSchema },
        errorFactory: Webhooks.GetWebhookError,
      },
      options,
    );
  }

  /**
   * Retrieve a message
   *
   * @returns Success
   *
   * @throws {@link Webhooks.GetWebhookMessageError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link BasiqError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getWebhookMessage(
    request: Webhooks.GetWebhookMessageRequest,
    options?: RequestOptions,
  ): ApiPromise<NotificationsWebhooksMessagesResponse1, Webhooks.GetWebhookMessageError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/notifications/webhooks/{webhookId}/messages/{messageId}"),
        auth: this.#auth.servicesToken,
        pathParams: [
          { name: "webhookId", value: request.webhookId, schema: s.string() },
          { name: "messageId", value: request.messageId, schema: s.string() },
        ],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: notificationsWebhooksMessagesResponse1Schema },
        errorFactory: Webhooks.GetWebhookMessageError,
      },
      options,
    );
  }

  /**
   * Get webhook delivery statistics
   *
   * @returns Success
   *
   * @throws {@link Webhooks.GetWebhookStatsError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link BasiqError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getWebhookStats(
    request: Webhooks.GetWebhookStatsRequest,
    options?: RequestOptions,
  ): ApiPromise<WebhookStats, Webhooks.GetWebhookStatsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/notifications/webhooks/{webhookId}/stats"),
        auth: this.#auth.servicesToken,
        pathParams: [{ name: "webhookId", value: request.webhookId, schema: s.string() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: webhookStatsSchema },
        errorFactory: Webhooks.GetWebhookStatsError,
      },
      options,
    );
  }

  /**
   * List all webhooks
   *
   * @returns Success
   *
   * @throws {@link Webhooks.ListAppWebhooksError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link BasiqError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listAppWebhooks(
    options?: RequestOptions,
  ): ApiPromise<NotificationsWebhooksResponse1, Webhooks.ListAppWebhooksError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/notifications/webhooks"),
        auth: this.#auth.servicesToken,
        pathParams: [],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: notificationsWebhooksResponse1Schema },
        errorFactory: Webhooks.ListAppWebhooksError,
      },
      options,
    );
  }

  /**
   * List all messages
   *
   * @returns Success
   *
   * @throws {@link Webhooks.ListMessagesError} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link BasiqError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listMessages(
    request: Webhooks.ListMessagesRequest,
    options?: RequestOptions,
  ): ApiPromise<NotificationsWebhooksMessagesResponse, Webhooks.ListMessagesError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/notifications/webhooks/{webhookId}/messages"),
        auth: this.#auth.servicesToken,
        pathParams: [{ name: "webhookId", value: request.webhookId, schema: s.string() }],
        query: [
          { name: "limit", value: request.limit, schema: s.optional(s.int()) },
          { name: "filter", value: request.filter, schema: s.optional(s.string()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: notificationsWebhooksMessagesResponseSchema },
        errorFactory: Webhooks.ListMessagesError,
      },
      options,
    );
  }

  /**
   * Post a test message
   *
   * @returns Created
   *
   * @throws {@link Webhooks.TestMessageError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link BasiqError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  testMessage(
    request: Webhooks.TestMessageRequest = {},
    options?: RequestOptions,
  ): ApiPromise<undefined, Webhooks.TestMessageError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/notifications/messages/test"),
        auth: this.#auth.servicesToken,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => notificationsMessagesTestRequestSchema)),
        },
      },
      {
        success: { kind: "empty" },
        errorFactory: Webhooks.TestMessageError,
      },
      options,
    );
  }

  /**
   * Update a webhook
   *
   * @returns Updated
   *
   * @throws {@link Webhooks.UpdateWebhookError} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link BasiqError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  updateWebhook(
    request: Webhooks.UpdateWebhookRequest,
    options?: RequestOptions,
  ): ApiPromise<NotificationsWebhooksResponse, Webhooks.UpdateWebhookError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/notifications/webhooks/{webhookId}"),
        auth: this.#auth.servicesToken,
        pathParams: [{ name: "webhookId", value: request.webhookId, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => notificationsWebhooksRequestSchema)),
        },
      },
      {
        success: { kind: "json", schema: notificationsWebhooksResponseSchema },
        errorFactory: Webhooks.UpdateWebhookError,
      },
      options,
    );
  }
}

export namespace Webhooks {
  export type AddWebhookRequest = {
    /** Webhook request object. */
    body?: NotificationsWebhooksRequest;
  };

  export class AddWebhookError extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"error3", Error>
      | Declared<"error4", Error>
      | Declared<"error5", Error>
      | Declared<"error500", undefined>
      | Declared<"error6", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<AddWebhookError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 403, kind: "error3", decode: { kind: "json", schema: errorSchema } },
      { on: 409, kind: "error4", decode: { kind: "json", schema: errorSchema } },
      { on: 429, kind: "error5", decode: { kind: "json", schema: errorSchema } },
      { on: 500, kind: "error500", decode: { kind: "empty" } },
      { on: 503, kind: "error6", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type DeleteWebhookRequest = {
    webhookId: string;
  };

  export class DeleteWebhookError extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"error3", Error>
      | Declared<"error4", Error>
      | Declared<"error5", Error>
      | Declared<"error6", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<DeleteWebhookError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 403, kind: "error3", decode: { kind: "json", schema: errorSchema } },
      { on: 404, kind: "error4", decode: { kind: "json", schema: errorSchema } },
      { on: 429, kind: "error5", decode: { kind: "json", schema: errorSchema } },
      { on: 503, kind: "error6", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type GetWebhookRequest = {
    webhookId: string;
  };

  export class GetWebhookError extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"error3", Error>
      | Declared<"error4", Error>
      | Declared<"error5", Error>
      | Declared<"error500", undefined>
      | Declared<"error6", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetWebhookError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 403, kind: "error3", decode: { kind: "json", schema: errorSchema } },
      { on: 404, kind: "error4", decode: { kind: "json", schema: errorSchema } },
      { on: 429, kind: "error5", decode: { kind: "json", schema: errorSchema } },
      { on: 500, kind: "error500", decode: { kind: "empty" } },
      { on: 503, kind: "error6", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type GetWebhookMessageRequest = {
    /** webhook Id */
    webhookId: string;
    /** message Id */
    messageId: string;
  };

  export class GetWebhookMessageError extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"error3", Error>
      | Declared<"error4", Error>
      | Declared<"error5", Error>
      | Declared<"error500", undefined>
      | Declared<"error6", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetWebhookMessageError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 403, kind: "error3", decode: { kind: "json", schema: errorSchema } },
      { on: 404, kind: "error4", decode: { kind: "json", schema: errorSchema } },
      { on: 429, kind: "error5", decode: { kind: "json", schema: errorSchema } },
      { on: 500, kind: "error500", decode: { kind: "empty" } },
      { on: 503, kind: "error6", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type GetWebhookStatsRequest = {
    /** webhook Id */
    webhookId: string;
  };

  export class GetWebhookStatsError extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"error3", Error>
      | Declared<"error4", Error>
      | Declared<"error500", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetWebhookStatsError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 403, kind: "error3", decode: { kind: "json", schema: errorSchema } },
      { on: 404, kind: "error4", decode: { kind: "json", schema: errorSchema } },
      { on: 500, kind: "error500", decode: { kind: "empty" } },
    ];
  }

  export class ListAppWebhooksError extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"error3", Error>
      | Declared<"error500", undefined>
      | Declared<"error4", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<ListAppWebhooksError> = [
      { on: 401, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 403, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 429, kind: "error3", decode: { kind: "json", schema: errorSchema } },
      { on: 500, kind: "error500", decode: { kind: "empty" } },
      { on: 503, kind: "error4", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type ListMessagesRequest = {
    /** webhook Id */
    webhookId: string;
    /**
     * Maximum number of items included in the response. Max value = 500 and is the default value if
     * this field is not provided
     */
    limit?: number;
    /** Filter field that allows filtering by date, status, eventTypeId, webhookId, eventId */
    filter?: string;
  };

  export class ListMessagesError extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"error3", Error>
      | Declared<"error4", Error>
      | Declared<"error5", Error>
      | Declared<"error500", undefined>
      | Declared<"error6", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<ListMessagesError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 403, kind: "error3", decode: { kind: "json", schema: errorSchema } },
      { on: 404, kind: "error4", decode: { kind: "json", schema: errorSchema } },
      { on: 429, kind: "error5", decode: { kind: "json", schema: errorSchema } },
      { on: 500, kind: "error500", decode: { kind: "empty" } },
      { on: 503, kind: "error6", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type TestMessageRequest = {
    body?: NotificationsMessagesTestRequest;
  };

  export class TestMessageError extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"error3", Error>
      | Declared<"error4", Error>
      | Declared<"error500", undefined>
      | Declared<"error5", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<TestMessageError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 403, kind: "error3", decode: { kind: "json", schema: errorSchema } },
      { on: 429, kind: "error4", decode: { kind: "json", schema: errorSchema } },
      { on: 500, kind: "error500", decode: { kind: "empty" } },
      { on: 503, kind: "error5", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type UpdateWebhookRequest = {
    webhookId: string;
    /** Webhook request object. */
    body?: NotificationsWebhooksRequest;
  };

  export class UpdateWebhookError extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"error3", Error>
      | Declared<"error4", Error>
      | Declared<"error5", Error>
      | Declared<"error6", Error>
      | Declared<"error500", undefined>
      | Declared<"error7", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<UpdateWebhookError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 403, kind: "error3", decode: { kind: "json", schema: errorSchema } },
      { on: 404, kind: "error4", decode: { kind: "json", schema: errorSchema } },
      { on: 409, kind: "error5", decode: { kind: "json", schema: errorSchema } },
      { on: 429, kind: "error6", decode: { kind: "json", schema: errorSchema } },
      { on: 500, kind: "error500", decode: { kind: "empty" } },
      { on: 503, kind: "error7", decode: { kind: "json", schema: errorSchema } },
    ];
  }
}
