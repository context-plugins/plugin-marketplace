import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  v1WebhooksDeliveriesResponseSchema,
  type V1WebhooksDeliveriesResponse,
} from "../models/v1-webhooks-deliveries-response.js";
import { v1WebhooksResponseInternalSchema, type V1WebhooksResponse } from "../models/v1-webhooks-response.js";
import {
  v1WebhooksResponse1InternalSchema,
  type V1WebhooksResponse1,
} from "../models/v1-webhooks-response1.js";
import { webhookCreateInternalSchema, type WebhookCreate } from "../models/webhook-create.js";
import type { Servers } from "../servers.js";

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
   * @remarks
   * Register an outbound webhook URL for terminal job events. The signing secret is returned once
   * in the 201 response and never again. If `events` is omitted you receive all four. Control-plane
   * endpoint — free.
   *
   * @returns Created (secret returned once)
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link ZillapiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  createWebhook(
    request: Webhooks.CreateWebhookRequest,
    options?: RequestOptions,
  ): ApiPromise<V1WebhooksResponse1, ApiError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/v1/webhooks"),
        auth: this.#auth.bearerAuth,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: webhookCreateInternalSchema },
      },
      {
        success: { kind: "json", schema: v1WebhooksResponse1InternalSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * List webhook delivery attempts
   *
   * @remarks
   * Return the per-attempt delivery log for a webhook (status code, delivered flag, response
   * preview) for debugging failed deliveries. Control-plane endpoint — free.
   *
   * @returns OK
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link ZillapiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listWebhookDeliveries(
    request: Webhooks.ListWebhookDeliveriesRequest,
    options?: RequestOptions,
  ): ApiPromise<V1WebhooksDeliveriesResponse, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v1/webhooks/{id}/deliveries"),
        auth: this.#auth.bearerAuth,
        pathParams: [{ name: "id", value: request.id, schema: s.string() }],
        query: [{ name: "limit", value: request.limit, schema: s.defaulted(s.int(), 50) }],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: v1WebhooksDeliveriesResponseSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * List webhooks
   *
   * @remarks
   * List registered outbound webhooks. Secrets are never returned on read — only once at creation.
   * Control-plane endpoint — free.
   *
   * @returns OK
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link ZillapiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listWebhooks(options?: RequestOptions): ApiPromise<V1WebhooksResponse, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v1/webhooks"),
        auth: this.#auth.bearerAuth,
        pathParams: [],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: v1WebhooksResponseInternalSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Revoke a webhook
   *
   * @remarks
   * Soft-revoke a webhook; delivery stops immediately. Returns 204 No Content. Control-plane
   * endpoint — free.
   *
   * @returns Revoked
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link ZillapiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  revokeWebhook(
    request: Webhooks.RevokeWebhookRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, ApiError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default("/v1/webhooks/{id}"),
        auth: this.#auth.bearerAuth,
        pathParams: [{ name: "id", value: request.id, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: ApiError,
      },
      options,
    );
  }
}

export namespace Webhooks {
  export type CreateWebhookRequest = {
    body: WebhookCreate;
  };

  export type ListWebhookDeliveriesRequest = {
    /** Webhook UUID. */
    id: string;
    /** Page size (max 200). @default 50 */
    limit?: number;
  };

  export const listWebhookDeliveriesRequestSchema: Schema<ListWebhookDeliveriesRequest> = s.lazySchema(() =>
    s.object<ListWebhookDeliveriesRequest>({
      id: s.string(),
      limit: s.defaulted(s.int().check(s.lte(200)), 50),
    }),
  );

  export type RevokeWebhookRequest = {
    /** Webhook UUID. */
    id: string;
  };
}
