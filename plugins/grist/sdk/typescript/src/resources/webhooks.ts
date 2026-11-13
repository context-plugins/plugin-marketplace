import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { anyAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import {
  docsWebhooksQueueResponseSchema,
  type DocsWebhooksQueueResponse,
} from "../models/docs-webhooks-queue-response.js";
import {
  docsWebhooksRequestInternalSchema,
  type DocsWebhooksRequest,
} from "../models/docs-webhooks-request.js";
import {
  docsWebhooksResponseInternalSchema,
  type DocsWebhooksResponse,
} from "../models/docs-webhooks-response.js";
import {
  docsWebhooksResponse1Schema,
  type DocsWebhooksResponse1,
} from "../models/docs-webhooks-response1.js";
import {
  docsWebhooksResponse2Schema,
  type DocsWebhooksResponse2,
} from "../models/docs-webhooks-response2.js";
import {
  docsWebhooksQueueResponse1Schema,
  type DocsWebhooksQueueResponse1,
} from "../models/unions/docs-webhooks-queue-response1.js";
import {
  docsWebhooksResponse21Schema,
  type DocsWebhooksResponse21,
} from "../models/unions/docs-webhooks-response21.js";
import {
  webhookPartialFieldsInternalSchema,
  type WebhookPartialFields,
} from "../models/webhook-partial-fields.js";
import type { Servers } from "../servers.js";

/**
 * Document changes can trigger requests to URLs called webhooks.
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
   * Empty a document's queue of undelivered payloads
   *
   * @remarks
   * Clear all pending webhook deliveries for this document. Use this if the queue has built up due
   * to unreachable endpoints.
   *
   * @returns Queue cleared successfully. Returns empty body.
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link GristApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  clearWebhookQueue(
    request: Webhooks.ClearWebhookQueueRequest,
    options?: RequestOptions,
  ): ApiPromise<DocsWebhooksQueueResponse1, ApiError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default("/docs/{docId}/webhooks/queue"),
        auth: anyAuth(this.#auth.apiKey, this.#auth.oAuth2),
        pathParams: [{ name: "docId", value: request.docId, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: docsWebhooksQueueResponse1Schema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Clear queue for a specific webhook
   *
   * @remarks
   * Clear the queue of pending payloads for a specific webhook. Only document owners can call this
   * endpoint.
   *
   * @returns Queue cleared
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link GristApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  clearWebhookQueueForWebhook(
    request: Webhooks.ClearWebhookQueueForWebhookRequest,
    options?: RequestOptions,
  ): ApiPromise<DocsWebhooksQueueResponse, ApiError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default("/docs/{docId}/webhooks/queue/{webhookId}"),
        auth: anyAuth(this.#auth.apiKey, this.#auth.oAuth2),
        pathParams: [
          { name: "docId", value: request.docId, schema: s.string() },
          { name: "webhookId", value: request.webhookId, schema: s.string() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: docsWebhooksQueueResponseSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Create new webhooks for a document
   *
   * @remarks
   * Creates one or more webhooks that will POST to specified URLs when data in the document
   * changes. Returns the IDs of the created webhooks.
   *
   * @returns Success
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link GristApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  createWebhooks(
    request: Webhooks.CreateWebhooksRequest,
    options?: RequestOptions,
  ): ApiPromise<DocsWebhooksResponse1, ApiError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/docs/{docId}/webhooks"),
        auth: anyAuth(this.#auth.apiKey, this.#auth.oAuth2),
        pathParams: [{ name: "docId", value: request.docId, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => docsWebhooksRequestInternalSchema)),
        },
      },
      {
        success: { kind: "json", schema: docsWebhooksResponse1Schema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Remove a webhook
   *
   * @remarks
   * Permanently delete a webhook. Any pending deliveries in the queue for this webhook will also be
   * removed.
   *
   * @returns Webhook deleted successfully.
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link GristApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  deleteWebhook(
    request: Webhooks.DeleteWebhookRequest,
    options?: RequestOptions,
  ): ApiPromise<DocsWebhooksResponse2, ApiError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default("/docs/{docId}/webhooks/{webhookId}"),
        auth: anyAuth(this.#auth.apiKey, this.#auth.oAuth2),
        pathParams: [
          { name: "docId", value: request.docId, schema: s.string() },
          { name: "webhookId", value: request.webhookId, schema: s.string() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: docsWebhooksResponse2Schema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Webhooks associated with a document
   *
   * @remarks
   * Returns all webhooks configured for this document, including their settings and delivery
   * statistics.
   *
   * @returns A list of webhooks.
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link GristApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listWebhooks(
    request: Webhooks.ListWebhooksRequest,
    options?: RequestOptions,
  ): ApiPromise<DocsWebhooksResponse, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/docs/{docId}/webhooks"),
        auth: anyAuth(this.#auth.apiKey, this.#auth.oAuth2),
        pathParams: [{ name: "docId", value: request.docId, schema: s.string() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: docsWebhooksResponseInternalSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Modify a webhook
   *
   * @remarks
   * Update the configuration of an existing webhook, such as its URL, enabled state, or event
   * types.
   *
   * @returns Webhook updated successfully. Returns empty body.
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link GristApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  modifyWebhook(
    request: Webhooks.ModifyWebhookRequest,
    options?: RequestOptions,
  ): ApiPromise<DocsWebhooksResponse21, ApiError> {
    return this.#rawClient.execute(
      {
        method: "PATCH",
        urlTemplate: this.#servers.default("/docs/{docId}/webhooks/{webhookId}"),
        auth: anyAuth(this.#auth.apiKey, this.#auth.oAuth2),
        pathParams: [
          { name: "docId", value: request.docId, schema: s.string() },
          { name: "webhookId", value: request.webhookId, schema: s.string() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => webhookPartialFieldsInternalSchema)),
        },
      },
      {
        success: { kind: "json", schema: docsWebhooksResponse21Schema },
        errorFactory: ApiError,
      },
      options,
    );
  }
}

export namespace Webhooks {
  export type ClearWebhookQueueRequest = {
    /** A string id (UUID) */
    docId: string;
  };

  export type ClearWebhookQueueForWebhookRequest = {
    /** A string id (UUID) */
    docId: string;
    /** ID of the webhook */
    webhookId: string;
  };

  export type CreateWebhooksRequest = {
    /** A string id (UUID) */
    docId: string;
    /** an array of webhook settings */
    body?: DocsWebhooksRequest;
  };

  export type DeleteWebhookRequest = {
    /** A string id (UUID) */
    docId: string;
    webhookId: string;
  };

  export type ListWebhooksRequest = {
    /** A string id (UUID) */
    docId: string;
  };

  export type ModifyWebhookRequest = {
    /** A string id (UUID) */
    docId: string;
    webhookId: string;
    /** the changes to make */
    body?: WebhookPartialFields;
  };
}
