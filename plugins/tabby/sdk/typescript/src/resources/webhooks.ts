import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import { error401AuthorizationSchema, type Error401Authorization } from "../models/error401-authorization.js";
import {
  error401InvalidSecretKeySchema,
  type Error401InvalidSecretKey,
} from "../models/error401-invalid-secret-key.js";
import { error403Schema, type Error403 } from "../models/error403.js";
import {
  error404NoSuchWebhookSchema,
  type Error404NoSuchWebhook,
} from "../models/error404-no-such-webhook.js";
import {
  webhookResponseAllInternalSchema,
  type WebhookResponseAll,
} from "../models/unions/webhook-response-all.js";
import { webhookDeleteSchema, type WebhookDelete } from "../models/webhook-delete.js";
import {
  webhookRegistrationResponseInternalSchema,
  type WebhookRegistrationResponse,
} from "../models/webhook-registration-response.js";
import {
  webhookRegistrationInternalSchema,
  type WebhookRegistration,
} from "../models/webhook-registration.js";
import { webhookUpdateInternalSchema, type WebhookUpdate } from "../models/webhook-update.js";
import { webhookInternalSchema, type Webhook } from "../models/webhook.js";
import type { Servers } from "../servers.js";

/**
 * Manage webhook endpoints.
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
   * Remove a webhook
   *
   * @remarks
   * Removes the specified webhook.
   *
   * @returns Webhook was deleted successfully.
   *
   * @throws {@link Webhooks.DeleteWebhookError} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link TabbyError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  deleteWebhook(
    request: Webhooks.DeleteWebhookRequest,
    options?: RequestOptions,
  ): ApiPromise<WebhookDelete, Webhooks.DeleteWebhookError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default("/api/v1/webhooks/{id}"),
        auth: this.#auth.bearerAuth,
        pathParams: [{ name: "id", value: request.id, schema: s.string() }],
        query: [],
        headers: [
          { name: "X-Merchant-Code", value: request.xMerchantCode, schema: s.string() },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: webhookDeleteSchema },
        errorFactory: Webhooks.DeleteWebhookError,
      },
      options,
    );
  }

  /**
   * Retrieve a webhook
   *
   * @remarks
   * Retrieves the specified webhook.
   *
   * @returns Success. Webhook object is returned.
   *
   * @throws {@link Webhooks.GetWebhookError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link TabbyError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getWebhook(
    request: Webhooks.GetWebhookRequest,
    options?: RequestOptions,
  ): ApiPromise<Webhook, Webhooks.GetWebhookError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/v1/webhooks/{id}"),
        auth: this.#auth.bearerAuth,
        pathParams: [{ name: "id", value: request.id, schema: s.string() }],
        query: [],
        headers: [{ name: "X-Merchant-Code", value: request.xMerchantCode, schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: webhookInternalSchema },
        errorFactory: Webhooks.GetWebhookError,
      },
      options,
    );
  }

  /**
   * Retrieve all webhooks
   *
   * @remarks
   * Retrieves all registred webhooks.
   *
   * @returns Success. Webhook object is returned.
   *
   * @throws {@link Webhooks.GetWebhooksError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link TabbyError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getWebhooks(
    request: Webhooks.GetWebhooksRequest,
    options?: RequestOptions,
  ): ApiPromise<WebhookResponseAll, Webhooks.GetWebhooksError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/v1/webhooks"),
        auth: this.#auth.bearerAuth,
        pathParams: [],
        query: [],
        headers: [{ name: "X-Merchant-Code", value: request.xMerchantCode, schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: webhookResponseAllInternalSchema },
        errorFactory: Webhooks.GetWebhooksError,
      },
      options,
    );
  }

  /**
   * Register a webhook
   *
   * @remarks
   * Creates a new webhook
   *
   * @returns Success. Webhook object is returned.
   *
   * @throws {@link Webhooks.PostWebhookError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link TabbyError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  postWebhook(
    request: Webhooks.PostWebhookRequest,
    options?: RequestOptions,
  ): ApiPromise<WebhookRegistrationResponse, Webhooks.PostWebhookError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/api/v1/webhooks"),
        auth: this.#auth.bearerAuth,
        pathParams: [],
        query: [],
        headers: [
          { name: "X-Merchant-Code", value: request.xMerchantCode, schema: s.string() },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "json", value: request.body, schema: webhookRegistrationInternalSchema },
      },
      {
        success: { kind: "json", schema: webhookRegistrationResponseInternalSchema },
        errorFactory: Webhooks.PostWebhookError,
      },
      options,
    );
  }

  /**
   * Update a webhook
   *
   * @remarks
   * Updates the specified webhook.
   *
   * @returns Success. Webhook object is returned.
   *
   * @throws {@link Webhooks.PutWebhookError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link TabbyError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  putWebhook(
    request: Webhooks.PutWebhookRequest,
    options?: RequestOptions,
  ): ApiPromise<WebhookUpdate, Webhooks.PutWebhookError> {
    return this.#rawClient.execute(
      {
        method: "PUT",
        urlTemplate: this.#servers.default("/api/v1/webhooks/{id}"),
        auth: this.#auth.bearerAuth,
        pathParams: [{ name: "id", value: request.id, schema: s.string() }],
        query: [],
        headers: [
          { name: "X-Merchant-Code", value: request.xMerchantCode, schema: s.string() },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "json", value: request.body, schema: webhookUpdateInternalSchema },
      },
      {
        success: { kind: "json", schema: webhookUpdateInternalSchema },
        errorFactory: Webhooks.PutWebhookError,
      },
      options,
    );
  }
}

export namespace Webhooks {
  export type DeleteWebhookRequest = {
    /** ID of the webhook. */
    id: string;
    /**
     * Used for multi store/countries setup, please contact your Account manager to recognize that
     */
    xMerchantCode: string;
  };

  export class DeleteWebhookError extends ApiError {
    declare readonly payload:
      | Declared<"error401InvalidSecretKey", Error401InvalidSecretKey>
      | Declared<"error404NoSuchWebhook", Error404NoSuchWebhook>
      | Declared<"error500", string>
      | Undeclared;

    static readonly errors: ErrorDecoders<DeleteWebhookError> = [
      {
        on: 401,
        kind: "error401InvalidSecretKey",
        decode: { kind: "json", schema: error401InvalidSecretKeySchema },
      },
      {
        on: 404,
        kind: "error404NoSuchWebhook",
        decode: { kind: "json", schema: error404NoSuchWebhookSchema },
      },
      { on: 500, kind: "error500", decode: { kind: "json", schema: s.string() } },
    ];
  }

  export type GetWebhookRequest = {
    /** ID of the webhook. */
    id: string;
    /**
     * Used for multi store/countries setup, please contact your Account manager to recognize that
     */
    xMerchantCode: string;
  };

  export class GetWebhookError extends ApiError {
    declare readonly payload:
      | Declared<"error401InvalidSecretKey", Error401InvalidSecretKey>
      | Declared<"error404NoSuchWebhook", Error404NoSuchWebhook>
      | Declared<"error500", string>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetWebhookError> = [
      {
        on: 401,
        kind: "error401InvalidSecretKey",
        decode: { kind: "json", schema: error401InvalidSecretKeySchema },
      },
      {
        on: 404,
        kind: "error404NoSuchWebhook",
        decode: { kind: "json", schema: error404NoSuchWebhookSchema },
      },
      { on: 500, kind: "error500", decode: { kind: "json", schema: s.string() } },
    ];
  }

  export type GetWebhooksRequest = {
    /**
     * Used for multi store/countries setup, please contact your Account manager to recognize that
     */
    xMerchantCode: string;
  };

  export class GetWebhooksError extends ApiError {
    declare readonly payload:
      | Declared<"error401Authorization", Error401Authorization>
      | Declared<"error404", string>
      | Declared<"error500", string>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetWebhooksError> = [
      {
        on: 401,
        kind: "error401Authorization",
        decode: { kind: "json", schema: error401AuthorizationSchema },
      },
      { on: 404, kind: "error404", decode: { kind: "json", schema: s.string() } },
      { on: 500, kind: "error500", decode: { kind: "json", schema: s.string() } },
    ];
  }

  export type PostWebhookRequest = {
    /**
     * Used for multi store/countries setup, please contact your Account manager to recognize that
     */
    xMerchantCode: string;
    body: WebhookRegistration;
  };

  export class PostWebhookError extends ApiError {
    declare readonly payload:
      | Declared<"error401InvalidSecretKey", Error401InvalidSecretKey>
      | Declared<"error401Authorization", Error401Authorization>
      | Declared<"error404", string>
      | Declared<"error500", string>
      | Undeclared;

    static readonly errors: ErrorDecoders<PostWebhookError> = [
      {
        on: 400,
        kind: "error401InvalidSecretKey",
        decode: { kind: "json", schema: error401InvalidSecretKeySchema },
      },
      {
        on: 401,
        kind: "error401Authorization",
        decode: { kind: "json", schema: error401AuthorizationSchema },
      },
      { on: 404, kind: "error404", decode: { kind: "json", schema: s.string() } },
      { on: 500, kind: "error500", decode: { kind: "json", schema: s.string() } },
    ];
  }

  export type PutWebhookRequest = {
    /** ID of the webhook. */
    id: string;
    /**
     * Used for multi store/countries setup, please contact your Account manager to recognize that
     */
    xMerchantCode: string;
    body: WebhookUpdate;
  };

  export class PutWebhookError extends ApiError {
    declare readonly payload:
      | Declared<"error401InvalidSecretKey", Error401InvalidSecretKey>
      | Declared<"error401Authorization", Error401Authorization>
      | Declared<"error403", Error403>
      | Declared<"error404NoSuchWebhook", Error404NoSuchWebhook>
      | Declared<"error500", string>
      | Undeclared;

    static readonly errors: ErrorDecoders<PutWebhookError> = [
      {
        on: 400,
        kind: "error401InvalidSecretKey",
        decode: { kind: "json", schema: error401InvalidSecretKeySchema },
      },
      {
        on: 401,
        kind: "error401Authorization",
        decode: { kind: "json", schema: error401AuthorizationSchema },
      },
      { on: 403, kind: "error403", decode: { kind: "json", schema: error403Schema } },
      {
        on: 404,
        kind: "error404NoSuchWebhook",
        decode: { kind: "json", schema: error404NoSuchWebhookSchema },
      },
      { on: 500, kind: "error500", decode: { kind: "json", schema: s.string() } },
    ];
  }
}
