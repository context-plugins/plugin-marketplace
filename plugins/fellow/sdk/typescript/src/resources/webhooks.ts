import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import { createWebhookRequestSchema, type CreateWebhookRequest } from "../models/create-webhook-request.js";
import { updateWebhookRequestSchema, type UpdateWebhookRequest } from "../models/update-webhook-request.js";
import {
  webhookCreateResponseSchema,
  type WebhookCreateResponse,
} from "../models/webhook-create-response.js";
import {
  webhookDeleteResponseSchema,
  type WebhookDeleteResponse,
} from "../models/webhook-delete-response.js";
import { webhookResponseSchema, type WebhookResponse } from "../models/webhook-response.js";
import { webhooksListResponseSchema, type WebhooksListResponse } from "../models/webhooks-list-response.js";
import type { Servers } from "../servers.js";

/**
 * Create and manage webhook endpoints to receive real-time notifications when events occur in your
 * Fellow workspace.
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
   * Create Webhook
   *
   * @remarks
   * Create a new webhook endpoint.
   *
   * Creates a webhook that will receive HTTP POST requests when subscribed events occur. The
   * webhook will be associated with the authenticated user.
   *
   * Set `scope` to `workspace` to create an account-wide webhook instead, which receives every
   * matching event in the account and is delivered once per event rather than once per attendee.
   * **Super Admin Access Required** for that value: a key acting through `X-On-Behalf-Of` cannot
   * create one, because impersonation drops privileged access.
   *
   * @returns OK
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link FellowError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  appsDeveloperApiApiCreateWebhook(
    request: Webhooks.AppsDeveloperApiApiCreateWebhookRequest,
    options?: RequestOptions,
  ): ApiPromise<WebhookCreateResponse, ApiError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/api/v1/webhook"),
        auth: this.#auth.developerApiKeyAuth,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: createWebhookRequestSchema },
      },
      {
        success: { kind: "json", schema: webhookCreateResponseSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Delete Webhook
   *
   * @remarks
   * Delete a webhook endpoint by its ID.
   *
   * An account-wide webhook is deleted through this same endpoint, and needs a privileged key:
   * without one its id reads as not found.
   *
   * @returns OK
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link FellowError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  appsDeveloperApiApiDeleteWebhook(
    request: Webhooks.AppsDeveloperApiApiDeleteWebhookRequest,
    options?: RequestOptions,
  ): ApiPromise<WebhookDeleteResponse, ApiError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default("/api/v1/webhook/{webhook_id}"),
        auth: this.#auth.developerApiKeyAuth,
        pathParams: [{ name: "webhook_id", value: request.webhookId, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: webhookDeleteResponseSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Retrieve Webhook
   *
   * @remarks
   * Retrieve a webhook by its ID.
   *
   * @returns OK
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link FellowError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  appsDeveloperApiApiGetWebhookById(
    request: Webhooks.AppsDeveloperApiApiGetWebhookByIdRequest,
    options?: RequestOptions,
  ): ApiPromise<WebhookResponse, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/v1/webhook/{webhook_id}"),
        auth: this.#auth.developerApiKeyAuth,
        pathParams: [{ name: "webhook_id", value: request.webhookId, schema: s.string() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: webhookResponseSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * List Webhooks
   *
   * @remarks
   * List webhooks with optional filters and pagination.
   *
   * Query Parameters:
   * - page_size: Number of results per page (optional, default: 20, max: 50)
   * - cursor: Pagination cursor for next page (optional)
   * - filters: JSON-encoded WebhookFilters (optional) Example:
   *   ?filters={"status":"active","created_at_start":"2024-01-01"}
   *
   * Returns a list of webhooks for the authenticated user. Privileged access allows listing all
   * webhooks for the account.
   *
   * @returns OK
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link FellowError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  appsDeveloperApiApiListWebhooks(
    request: Webhooks.AppsDeveloperApiApiListWebhooksRequest = {},
    options?: RequestOptions,
  ): ApiPromise<WebhooksListResponse, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/v1/webhooks"),
        auth: this.#auth.developerApiKeyAuth,
        pathParams: [],
        query: [
          { name: "page_size", value: request.pageSize, schema: s.optionalNullable(s.int()) },
          { name: "cursor", value: request.cursor, schema: s.optionalNullable(s.string()) },
          { name: "filters", value: request.filters, schema: s.optionalNullable(s.string()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: webhooksListResponseSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Update Webhook
   *
   * @remarks
   * Update an existing webhook endpoint.
   *
   * Allows partial updates - only provided fields will be modified. The webhook must belong to the
   * authenticated user (or account for privileged access).
   *
   * An account-wide webhook is updated through this same endpoint, and needs a privileged key:
   * without one its id reads as not found, the same answer as another user's webhook.
   *
   * `scope` cannot be changed after creation, and is ignored here: a webhook's scope decides which
   * Svix application its endpoint lives in, so converting one means deleting and recreating it.
   *
   * @returns OK
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link FellowError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  appsDeveloperApiApiUpdateWebhook(
    request: Webhooks.AppsDeveloperApiApiUpdateWebhookRequest,
    options?: RequestOptions,
  ): ApiPromise<WebhookResponse, ApiError> {
    return this.#rawClient.execute(
      {
        method: "PATCH",
        urlTemplate: this.#servers.default("/api/v1/webhook/{webhook_id}"),
        auth: this.#auth.developerApiKeyAuth,
        pathParams: [{ name: "webhook_id", value: request.webhookId, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: updateWebhookRequestSchema },
      },
      {
        success: { kind: "json", schema: webhookResponseSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }
}

export namespace Webhooks {
  export type AppsDeveloperApiApiCreateWebhookRequest = {
    body: CreateWebhookRequest;
  };

  export type AppsDeveloperApiApiDeleteWebhookRequest = {
    webhookId: string;
  };

  export type AppsDeveloperApiApiGetWebhookByIdRequest = {
    webhookId: string;
  };

  export type AppsDeveloperApiApiListWebhooksRequest = {
    pageSize?: number | null;
    cursor?: string | null;
    filters?: string | null;
  };

  export type AppsDeveloperApiApiUpdateWebhookRequest = {
    webhookId: string;
    body: UpdateWebhookRequest;
  };
}
