import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import { messageResponseSchema, type MessageResponse } from "../models/message-response.js";
import { validationError1Schema, type ValidationError1 } from "../models/validation-error1.js";
import { webhooksLogsResponseSchema, type WebhooksLogsResponse } from "../models/webhooks-logs-response.js";
import {
  webhooksRegenerateSecretResponseSchema,
  type WebhooksRegenerateSecretResponse,
} from "../models/webhooks-regenerate-secret-response.js";
import { webhooksRequestInternalSchema, type WebhooksRequest } from "../models/webhooks-request.js";
import { webhooksRequest1InternalSchema, type WebhooksRequest1 } from "../models/webhooks-request1.js";
import { webhooksResponseInternalSchema, type WebhooksResponse } from "../models/webhooks-response.js";
import { webhooksResponse1InternalSchema, type WebhooksResponse1 } from "../models/webhooks-response1.js";
import { webhooksResponse2InternalSchema, type WebhooksResponse2 } from "../models/webhooks-response2.js";
import type { Servers } from "../servers.js";

/**
 * Manage webhook endpoints for event notifications
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
   * Create Webhook Endpoint
   *
   * @remarks
   * Register a new webhook endpoint. The response includes the signing secret which is only shown
   * once.
   *
   * @returns Webhook created (secret shown only once)
   *
   * @throws {@link Webhooks.CreateWebhookError} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link JuriSignError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  createWebhook(
    request: Webhooks.CreateWebhookRequest,
    options?: RequestOptions,
  ): ApiPromise<WebhooksResponse1, Webhooks.CreateWebhookError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/webhooks"),
        auth: this.#auth.bearerAuth,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: webhooksRequestInternalSchema },
      },
      {
        success: { kind: "json", schema: webhooksResponse1InternalSchema },
        errorFactory: Webhooks.CreateWebhookError,
      },
      options,
    );
  }

  /**
   * Delete Webhook Endpoint
   *
   * @remarks
   * Delete a webhook endpoint and all its delivery logs.
   *
   * @returns Webhook deleted
   *
   * @throws {@link Webhooks.DeleteWebhookError} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link JuriSignError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  deleteWebhook(
    request: Webhooks.DeleteWebhookRequest,
    options?: RequestOptions,
  ): ApiPromise<MessageResponse, Webhooks.DeleteWebhookError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default("/webhooks/{id}"),
        auth: this.#auth.bearerAuth,
        pathParams: [{ name: "id", value: request.id, schema: s.int() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: messageResponseSchema },
        errorFactory: Webhooks.DeleteWebhookError,
      },
      options,
    );
  }

  /**
   * Webhook Delivery Logs
   *
   * @remarks
   * View delivery logs for a specific webhook endpoint.
   *
   * @returns Delivery logs
   *
   * @throws {@link Webhooks.GetWebhookLogsError} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link JuriSignError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getWebhookLogs(
    request: Webhooks.GetWebhookLogsRequest,
    options?: RequestOptions,
  ): ApiPromise<WebhooksLogsResponse, Webhooks.GetWebhookLogsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/webhooks/{id}/logs"),
        auth: this.#auth.bearerAuth,
        pathParams: [{ name: "id", value: request.id, schema: s.int() }],
        query: [{ name: "per_page", value: request.perPage, schema: s.defaulted(s.int(), 20) }],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: webhooksLogsResponseSchema },
        errorFactory: Webhooks.GetWebhookLogsError,
      },
      options,
    );
  }

  /**
   * List Webhook Endpoints
   *
   * @remarks
   * List all webhook endpoints for your organization.
   *
   * @returns Webhook endpoints
   *
   * @throws {@link Webhooks.ListWebhooksError} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link JuriSignError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listWebhooks(options?: RequestOptions): ApiPromise<WebhooksResponse, Webhooks.ListWebhooksError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/webhooks"),
        auth: this.#auth.bearerAuth,
        pathParams: [],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: webhooksResponseInternalSchema },
        errorFactory: Webhooks.ListWebhooksError,
      },
      options,
    );
  }

  /**
   * Regenerate Webhook Secret
   *
   * @remarks
   * Generate a new signing secret for the webhook endpoint. The old secret will no longer be valid.
   *
   * @returns New secret generated
   *
   * @throws {@link Webhooks.RegenerateWebhookSecretError} when the API answers with an error status
   * — narrow on `err.payload.kind`
   *
   * @throws {@link JuriSignError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  regenerateWebhookSecret(
    request: Webhooks.RegenerateWebhookSecretRequest,
    options?: RequestOptions,
  ): ApiPromise<WebhooksRegenerateSecretResponse, Webhooks.RegenerateWebhookSecretError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/webhooks/{id}/regenerate-secret"),
        auth: this.#auth.bearerAuth,
        pathParams: [{ name: "id", value: request.id, schema: s.int() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: webhooksRegenerateSecretResponseSchema },
        errorFactory: Webhooks.RegenerateWebhookSecretError,
      },
      options,
    );
  }

  /**
   * Update Webhook Endpoint
   *
   * @remarks
   * Update a webhook endpoint's URL, events, or active status.
   *
   * @returns Webhook updated
   *
   * @throws {@link Webhooks.UpdateWebhookError} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link JuriSignError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  updateWebhook(
    request: Webhooks.UpdateWebhookRequest,
    options?: RequestOptions,
  ): ApiPromise<WebhooksResponse2, Webhooks.UpdateWebhookError> {
    return this.#rawClient.execute(
      {
        method: "PUT",
        urlTemplate: this.#servers.default("/webhooks/{id}"),
        auth: this.#auth.bearerAuth,
        pathParams: [{ name: "id", value: request.id, schema: s.int() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => webhooksRequest1InternalSchema)),
        },
      },
      {
        success: { kind: "json", schema: webhooksResponse2InternalSchema },
        errorFactory: Webhooks.UpdateWebhookError,
      },
      options,
    );
  }
}

export namespace Webhooks {
  export type CreateWebhookRequest = {
    body: WebhooksRequest;
  };

  export class CreateWebhookError extends ApiError {
    declare readonly payload:
      | Declared<"messageResponse", MessageResponse>
      | Declared<"validationError1", ValidationError1>
      | Undeclared;

    static readonly errors: ErrorDecoders<CreateWebhookError> = [
      { on: 401, kind: "messageResponse", decode: { kind: "json", schema: messageResponseSchema } },
      { on: 422, kind: "validationError1", decode: { kind: "json", schema: validationError1Schema } },
    ];
  }

  export type DeleteWebhookRequest = {
    id: number;
  };

  export class DeleteWebhookError extends ApiError {
    declare readonly payload:
      | Declared<"messageResponse", MessageResponse>
      | Declared<"messageResponse2", MessageResponse>
      | Declared<"messageResponse3", MessageResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<DeleteWebhookError> = [
      { on: 401, kind: "messageResponse", decode: { kind: "json", schema: messageResponseSchema } },
      { on: 403, kind: "messageResponse2", decode: { kind: "json", schema: messageResponseSchema } },
      { on: 404, kind: "messageResponse3", decode: { kind: "json", schema: messageResponseSchema } },
    ];
  }

  export type GetWebhookLogsRequest = {
    id: number;
    /** @default 20 */
    perPage?: number;
  };

  export class GetWebhookLogsError extends ApiError {
    declare readonly payload:
      | Declared<"messageResponse", MessageResponse>
      | Declared<"messageResponse2", MessageResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetWebhookLogsError> = [
      { on: 401, kind: "messageResponse", decode: { kind: "json", schema: messageResponseSchema } },
      { on: 403, kind: "messageResponse2", decode: { kind: "json", schema: messageResponseSchema } },
    ];
  }

  export class ListWebhooksError extends ApiError {
    declare readonly payload: Declared<"messageResponse", MessageResponse> | Undeclared;

    static readonly errors: ErrorDecoders<ListWebhooksError> = [
      { on: 401, kind: "messageResponse", decode: { kind: "json", schema: messageResponseSchema } },
    ];
  }

  export type RegenerateWebhookSecretRequest = {
    id: number;
  };

  export class RegenerateWebhookSecretError extends ApiError {
    declare readonly payload:
      | Declared<"messageResponse", MessageResponse>
      | Declared<"messageResponse2", MessageResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<RegenerateWebhookSecretError> = [
      { on: 401, kind: "messageResponse", decode: { kind: "json", schema: messageResponseSchema } },
      { on: 403, kind: "messageResponse2", decode: { kind: "json", schema: messageResponseSchema } },
    ];
  }

  export type UpdateWebhookRequest = {
    id: number;
    body?: WebhooksRequest1;
  };

  export class UpdateWebhookError extends ApiError {
    declare readonly payload:
      | Declared<"messageResponse", MessageResponse>
      | Declared<"messageResponse2", MessageResponse>
      | Declared<"messageResponse3", MessageResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<UpdateWebhookError> = [
      { on: 401, kind: "messageResponse", decode: { kind: "json", schema: messageResponseSchema } },
      { on: 403, kind: "messageResponse2", decode: { kind: "json", schema: messageResponseSchema } },
      { on: 404, kind: "messageResponse3", decode: { kind: "json", schema: messageResponseSchema } },
    ];
  }
}
