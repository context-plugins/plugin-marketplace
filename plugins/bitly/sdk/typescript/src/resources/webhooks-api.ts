import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import { errorSchema, type Error } from "../models/error.js";
import { simplifiedErrorSchema, type SimplifiedError } from "../models/simplified-error.js";
import { webhookCreateSchema, type WebhookCreate } from "../models/webhook-create.js";
import { webhookUpdateSchema, type WebhookUpdate } from "../models/webhook-update.js";
import { webhookSchema, type Webhook } from "../models/webhook.js";
import { webhooksSchema, type Webhooks } from "../models/webhooks.js";
import type { Servers } from "../servers.js";

/**
 * Webhooks are a method of sending information from Bitly to an application outside of Bitly. It's
 * a way to automate actions or updates between two different systems. These endpoints are for
 * configuring your webhooks.
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
   * Create Webhook
   *
   * @remarks
   * Creates a webhook.
   *
   * @returns CREATED
   *
   * @throws {@link WebhooksApi.CreateWebhookError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link BitlyError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  createWebhook(
    request: WebhooksApi.CreateWebhookRequest,
    options?: RequestOptions,
  ): ApiPromise<Webhook, WebhooksApi.CreateWebhookError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/webhooks"),
        auth: this.#auth.bearerAuth,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: webhookCreateSchema },
      },
      {
        success: { kind: "json", schema: webhookSchema },
        errorFactory: WebhooksApi.CreateWebhookError,
      },
      options,
    );
  }

  /**
   * Delete Webhook
   *
   * @remarks
   * Deletes a webhook.
   *
   * @returns SUCCESS
   *
   * @throws {@link WebhooksApi.DeleteWebhookError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link BitlyError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  deleteWebhook(
    request: WebhooksApi.DeleteWebhookRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, WebhooksApi.DeleteWebhookError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default("/webhooks/{webhook_guid}"),
        auth: this.#auth.bearerAuth,
        pathParams: [{ name: "webhook_guid", value: request.webhookGuid, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: WebhooksApi.DeleteWebhookError,
      },
      options,
    );
  }

  /**
   * Retrieve Webhook
   *
   * @remarks
   * Returns a webhook.
   *
   * @returns SUCCESS
   *
   * @throws {@link WebhooksApi.GetWebhookError} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link BitlyError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getWebhook(
    request: WebhooksApi.GetWebhookRequest,
    options?: RequestOptions,
  ): ApiPromise<Webhook, WebhooksApi.GetWebhookError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/webhooks/{webhook_guid}"),
        auth: this.#auth.bearerAuth,
        pathParams: [{ name: "webhook_guid", value: request.webhookGuid, schema: s.string() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: webhookSchema },
        errorFactory: WebhooksApi.GetWebhookError,
      },
      options,
    );
  }

  /**
   * Get Webhooks
   *
   * @remarks
   * Fetch all webhooks available for an Organization
   *
   * @returns SUCCESS
   *
   * @throws {@link WebhooksApi.GetWebhooksError} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link BitlyError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getWebhooks(
    request: WebhooksApi.GetWebhooksRequest,
    options?: RequestOptions,
  ): ApiPromise<Webhooks, WebhooksApi.GetWebhooksError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/organizations/{organization_guid}/webhooks"),
        auth: this.#auth.bearerAuth,
        pathParams: [{ name: "organization_guid", value: request.organizationGuid, schema: s.string() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: webhooksSchema },
        errorFactory: WebhooksApi.GetWebhooksError,
      },
      options,
    );
  }

  /**
   * Update Webhook
   *
   * @remarks
   * Update a webhook
   *
   * @returns SUCCESS
   *
   * @throws {@link WebhooksApi.UpdateWebhookError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link BitlyError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  updateWebhook(
    request: WebhooksApi.UpdateWebhookRequest,
    options?: RequestOptions,
  ): ApiPromise<Webhook, WebhooksApi.UpdateWebhookError> {
    return this.#rawClient.execute(
      {
        method: "PATCH",
        urlTemplate: this.#servers.default("/webhooks/{webhook_guid}"),
        auth: this.#auth.bearerAuth,
        pathParams: [{ name: "webhook_guid", value: request.webhookGuid, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: webhookUpdateSchema },
      },
      {
        success: { kind: "json", schema: webhookSchema },
        errorFactory: WebhooksApi.UpdateWebhookError,
      },
      options,
    );
  }

  /**
   * Verify Webhook
   *
   * @remarks
   * Sends ping event to test webhook configuration.
   *
   * @returns SUCCESS
   *
   * @throws {@link WebhooksApi.VerifyWebhookError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link BitlyError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  verifyWebhook(
    request: WebhooksApi.VerifyWebhookRequest,
    options?: RequestOptions,
  ): ApiPromise<Webhook, WebhooksApi.VerifyWebhookError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/webhooks/{webhook_guid}/verify"),
        auth: this.#auth.bearerAuth,
        pathParams: [{ name: "webhook_guid", value: request.webhookGuid, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: webhookSchema },
        errorFactory: WebhooksApi.VerifyWebhookError,
      },
      options,
    );
  }
}

export namespace WebhooksApi {
  export type CreateWebhookRequest = {
    body: WebhookCreate;
  };

  export class CreateWebhookError extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"error3", Error>
      | Declared<"error4", Error>
      | Declared<"error5", Error>
      | Declared<"simplifiedError", SimplifiedError>
      | Declared<"error6", Error>
      | Declared<"error7", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<CreateWebhookError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 402, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 403, kind: "error3", decode: { kind: "json", schema: errorSchema } },
      { on: 404, kind: "error4", decode: { kind: "json", schema: errorSchema } },
      { on: 422, kind: "error5", decode: { kind: "json", schema: errorSchema } },
      { on: 429, kind: "simplifiedError", decode: { kind: "json", schema: simplifiedErrorSchema } },
      { on: 500, kind: "error6", decode: { kind: "json", schema: errorSchema } },
      { on: 503, kind: "error7", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type DeleteWebhookRequest = {
    /** A GUID for a Bitly webhook */
    webhookGuid: string;
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
      { on: 402, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 403, kind: "error3", decode: { kind: "json", schema: errorSchema } },
      { on: 404, kind: "error4", decode: { kind: "json", schema: errorSchema } },
      { on: 500, kind: "error5", decode: { kind: "json", schema: errorSchema } },
      { on: 503, kind: "error6", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type GetWebhookRequest = {
    /** A GUID for a Bitly webhook */
    webhookGuid: string;
  };

  export class GetWebhookError extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"error3", Error>
      | Declared<"error4", Error>
      | Declared<"simplifiedError", SimplifiedError>
      | Declared<"error5", Error>
      | Declared<"error6", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetWebhookError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 402, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 403, kind: "error3", decode: { kind: "json", schema: errorSchema } },
      { on: 404, kind: "error4", decode: { kind: "json", schema: errorSchema } },
      { on: 429, kind: "simplifiedError", decode: { kind: "json", schema: simplifiedErrorSchema } },
      { on: 500, kind: "error5", decode: { kind: "json", schema: errorSchema } },
      { on: 503, kind: "error6", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type GetWebhooksRequest = {
    /** A GUID for a Bitly organization */
    organizationGuid: string;
  };

  export class GetWebhooksError extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"error3", Error>
      | Declared<"simplifiedError", SimplifiedError>
      | Declared<"error4", Error>
      | Declared<"error5", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetWebhooksError> = [
      { on: 402, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 403, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 404, kind: "error3", decode: { kind: "json", schema: errorSchema } },
      { on: 429, kind: "simplifiedError", decode: { kind: "json", schema: simplifiedErrorSchema } },
      { on: 500, kind: "error4", decode: { kind: "json", schema: errorSchema } },
      { on: 503, kind: "error5", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type UpdateWebhookRequest = {
    /** A GUID for a Bitly webhook */
    webhookGuid: string;
    body: WebhookUpdate;
  };

  export class UpdateWebhookError extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"error3", Error>
      | Declared<"error4", Error>
      | Declared<"error5", Error>
      | Declared<"simplifiedError", SimplifiedError>
      | Declared<"error6", Error>
      | Declared<"error7", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<UpdateWebhookError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 402, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 403, kind: "error3", decode: { kind: "json", schema: errorSchema } },
      { on: 404, kind: "error4", decode: { kind: "json", schema: errorSchema } },
      { on: 422, kind: "error5", decode: { kind: "json", schema: errorSchema } },
      { on: 429, kind: "simplifiedError", decode: { kind: "json", schema: simplifiedErrorSchema } },
      { on: 500, kind: "error6", decode: { kind: "json", schema: errorSchema } },
      { on: 503, kind: "error7", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type VerifyWebhookRequest = {
    /** A GUID for a Bitly webhook */
    webhookGuid: string;
  };

  export class VerifyWebhookError extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"error3", Error>
      | Declared<"error4", Error>
      | Declared<"error5", Error>
      | Declared<"error6", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<VerifyWebhookError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 402, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 403, kind: "error3", decode: { kind: "json", schema: errorSchema } },
      { on: 404, kind: "error4", decode: { kind: "json", schema: errorSchema } },
      { on: 500, kind: "error5", decode: { kind: "json", schema: errorSchema } },
      { on: 503, kind: "error6", decode: { kind: "json", schema: errorSchema } },
    ];
  }
}
