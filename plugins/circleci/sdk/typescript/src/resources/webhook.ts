import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import {
  createWebhookRequestInternalSchema,
  type CreateWebhookRequest,
} from "../models/create-webhook-request.js";
import { errorResponseSchema, type ErrorResponse } from "../models/error-response.js";
import { messageResponseSchema, type MessageResponse } from "../models/message-response.js";
import { scopeTypeSchema, type ScopeType } from "../models/scope-type.js";
import {
  updateWebhookRequestInternalSchema,
  type UpdateWebhookRequest,
} from "../models/update-webhook-request.js";
import { webhookInfoInternalSchema, type WebhookInfo } from "../models/webhook-info.js";
import { webhookListInternalSchema, type WebhookList } from "../models/webhook-list.js";
import type { Servers } from "../servers.js";

/**
 * Endpoints for creating, updating, listing, and deleting outbound webhook subscriptions.
 */
export class Webhook {
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
   * Creates a new outbound webhook for the specified scope.
   *
   * @returns Webhook created successfully
   *
   * @throws {@link Webhook.CreateWebhookError} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link CircleCiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  createWebhook(
    request: Webhook.CreateWebhookRequestParams,
    options?: RequestOptions,
  ): ApiPromise<WebhookInfo, Webhook.CreateWebhookError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.defaultCircleCiRestApiV2ContextApi("/webhook"),
        auth: this.#auth.apiToken,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: createWebhookRequestInternalSchema },
      },
      {
        success: { kind: "json", schema: webhookInfoInternalSchema },
        errorFactory: Webhook.CreateWebhookError,
      },
      options,
    );
  }

  /**
   * Delete a webhook
   *
   * @remarks
   * Deletes a webhook by its unique identifier.
   *
   * @returns Webhook deleted successfully
   *
   * @throws {@link Webhook.DeleteWebhookError} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link CircleCiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  deleteWebhook(
    request: Webhook.DeleteWebhookRequest,
    options?: RequestOptions,
  ): ApiPromise<MessageResponse, Webhook.DeleteWebhookError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.defaultCircleCiRestApiV2ContextApi("/webhook/{webhook-id}"),
        auth: this.#auth.apiToken,
        pathParams: [{ name: "webhook-id", value: request.webhookId, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: messageResponseSchema },
        errorFactory: Webhook.DeleteWebhookError,
      },
      options,
    );
  }

  /**
   * Get a webhook by ID
   *
   * @remarks
   * Returns a webhook by its unique identifier.
   *
   * @returns Successfully retrieved webhook
   *
   * @throws {@link Webhook.GetWebhookError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link CircleCiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getWebhook(
    request: Webhook.GetWebhookRequest,
    options?: RequestOptions,
  ): ApiPromise<WebhookInfo, Webhook.GetWebhookError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.defaultCircleCiRestApiV2ContextApi("/webhook/{webhook-id}"),
        auth: this.#auth.apiToken,
        pathParams: [{ name: "webhook-id", value: request.webhookId, schema: s.string() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: webhookInfoInternalSchema },
        errorFactory: Webhook.GetWebhookError,
      },
      options,
    );
  }

  /**
   * List webhooks
   *
   * @remarks
   * Returns a list of outbound webhooks for the specified scope.
   *
   * @returns Successfully retrieved webhooks
   *
   * @throws {@link Webhook.ListWebhooksError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link CircleCiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listWebhooks(
    request: Webhook.ListWebhooksRequest,
    options?: RequestOptions,
  ): ApiPromise<WebhookList, Webhook.ListWebhooksError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.defaultCircleCiRestApiV2ContextApi("/webhook"),
        auth: this.#auth.apiToken,
        pathParams: [],
        query: [
          { name: "scope-id", value: request.scopeId, schema: s.string() },
          { name: "scope-type", value: request.scopeType, schema: scopeTypeSchema },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: webhookListInternalSchema },
        errorFactory: Webhook.ListWebhooksError,
      },
      options,
    );
  }

  /**
   * Update a webhook
   *
   * @remarks
   * Updates an existing webhook with the provided parameters.
   *
   * @returns Webhook updated successfully
   *
   * @throws {@link Webhook.UpdateWebhookError} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link CircleCiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  updateWebhook(
    request: Webhook.UpdateWebhookRequestParams,
    options?: RequestOptions,
  ): ApiPromise<WebhookInfo, Webhook.UpdateWebhookError> {
    return this.#rawClient.execute(
      {
        method: "PUT",
        urlTemplate: this.#servers.defaultCircleCiRestApiV2ContextApi("/webhook/{webhook-id}"),
        auth: this.#auth.apiToken,
        pathParams: [{ name: "webhook-id", value: request.webhookId, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: updateWebhookRequestInternalSchema },
      },
      {
        success: { kind: "json", schema: webhookInfoInternalSchema },
        errorFactory: Webhook.UpdateWebhookError,
      },
      options,
    );
  }
}

export namespace Webhook {
  export type CreateWebhookRequestParams = {
    body: CreateWebhookRequest;
  };

  export class CreateWebhookError extends ApiError {
    declare readonly payload:
      | Declared<"errorResponse", ErrorResponse>
      | Declared<"errorResponse2", ErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<CreateWebhookError> = [
      { on: 400, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 401, kind: "errorResponse2", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export type DeleteWebhookRequest = {
    /** The unique identifier of the webhook */
    webhookId: string;
  };

  export class DeleteWebhookError extends ApiError {
    declare readonly payload: Declared<"errorResponse", ErrorResponse> | Undeclared;

    static readonly errors: ErrorDecoders<DeleteWebhookError> = [
      { on: 401, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export type GetWebhookRequest = {
    /** The unique identifier of the webhook */
    webhookId: string;
  };

  export class GetWebhookError extends ApiError {
    declare readonly payload:
      | Declared<"errorResponse", ErrorResponse>
      | Declared<"errorResponse2", ErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetWebhookError> = [
      { on: 401, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 404, kind: "errorResponse2", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export type ListWebhooksRequest = {
    /** The ID of the scope (project ID) */
    scopeId: string;
    /** The type of scope */
    scopeType: ScopeType;
  };

  export class ListWebhooksError extends ApiError {
    declare readonly payload: Declared<"errorResponse", ErrorResponse> | Undeclared;

    static readonly errors: ErrorDecoders<ListWebhooksError> = [
      { on: 401, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export type UpdateWebhookRequestParams = {
    /** The unique identifier of the webhook */
    webhookId: string;
    body: UpdateWebhookRequest;
  };

  export class UpdateWebhookError extends ApiError {
    declare readonly payload: Declared<"errorResponse", ErrorResponse> | Undeclared;

    static readonly errors: ErrorDecoders<UpdateWebhookError> = [
      { on: 401, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }
}
