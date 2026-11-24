import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import { errorInternalSchema, type Error } from "../models/error.js";
import { v1WebhooksRequestInternalSchema, type V1WebhooksRequest } from "../models/v1-webhooks-request.js";
import { webhookCreatedInternalSchema, type WebhookCreated } from "../models/webhook-created.js";
import { webhookDeletedSchema, type WebhookDeleted } from "../models/webhook-deleted.js";
import { webhookListInternalSchema, type WebhookList } from "../models/webhook-list.js";
import type { Servers } from "../servers.js";

/**
 * Signed event deliveries to your HTTPS endpoints.
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
   * Register a webhook endpoint
   *
   * @remarks
   * Registers an HTTPS endpoint for signed event deliveries. The signing `secret` is returned only
   * in this response. Endpoints belong to the workspace, not to a key: they receive events from
   * both live and test mode. Not idempotent: retrying creates a second endpoint.
   *
   * @returns The endpoint, with its signing secret.
   *
   * @throws {@link Webhooks.CreateWebhookError} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link PrismaReviewsError} when no usable response was produced: a connection failure,
   * a timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  createWebhook(
    request: Webhooks.CreateWebhookRequest,
    options?: RequestOptions,
  ): ApiPromise<WebhookCreated, Webhooks.CreateWebhookError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/v1/webhooks"),
        auth: this.#auth.apiKey,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: v1WebhooksRequestInternalSchema },
      },
      {
        success: { kind: "json", schema: webhookCreatedInternalSchema },
        errorFactory: Webhooks.CreateWebhookError,
      },
      options,
    );
  }

  /**
   * Delete a webhook endpoint
   *
   * @remarks
   * Deletes the endpoint; deliveries still pending for it are dropped. There is no update: create a
   * new endpoint and delete the old one.
   *
   * @returns Deleted.
   *
   * @throws {@link Webhooks.DeleteWebhookError} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link PrismaReviewsError} when no usable response was produced: a connection failure,
   * a timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  deleteWebhook(
    request: Webhooks.DeleteWebhookRequest,
    options?: RequestOptions,
  ): ApiPromise<WebhookDeleted, Webhooks.DeleteWebhookError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default("/v1/webhooks/{id}"),
        auth: this.#auth.apiKey,
        pathParams: [{ name: "id", value: request.id, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: webhookDeletedSchema },
        errorFactory: Webhooks.DeleteWebhookError,
      },
      options,
    );
  }

  /**
   * List webhook endpoints
   *
   * @remarks
   * Every webhook endpoint of the workspace (shared by live and test keys). Secrets are never
   * returned.
   *
   * @returns All endpoints.
   *
   * @throws {@link Webhooks.ListWebhooksError} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link PrismaReviewsError} when no usable response was produced: a connection failure,
   * a timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listWebhooks(options?: RequestOptions): ApiPromise<WebhookList, Webhooks.ListWebhooksError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v1/webhooks"),
        auth: this.#auth.apiKey,
        pathParams: [],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: webhookListInternalSchema },
        errorFactory: Webhooks.ListWebhooksError,
      },
      options,
    );
  }
}

export namespace Webhooks {
  export type CreateWebhookRequest = {
    body: V1WebhooksRequest;
  };

  export class CreateWebhookError extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"error3", Error>
      | Declared<"error4", Error>
      | Declared<"error5", Error>
      | Declared<"error6", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<CreateWebhookError> = [
      { on: 401, kind: "error", decode: { kind: "json", schema: errorInternalSchema } },
      { on: 403, kind: "error2", decode: { kind: "json", schema: errorInternalSchema } },
      { on: 422, kind: "error3", decode: { kind: "json", schema: errorInternalSchema } },
      { on: 429, kind: "error4", decode: { kind: "json", schema: errorInternalSchema } },
      { on: 500, kind: "error5", decode: { kind: "json", schema: errorInternalSchema } },
      { on: 503, kind: "error6", decode: { kind: "json", schema: errorInternalSchema } },
    ];
  }

  export type DeleteWebhookRequest = {
    /** Webhook endpoint ID (`we_…`). */
    id: string;
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
      { on: 401, kind: "error", decode: { kind: "json", schema: errorInternalSchema } },
      { on: 403, kind: "error2", decode: { kind: "json", schema: errorInternalSchema } },
      { on: 404, kind: "error3", decode: { kind: "json", schema: errorInternalSchema } },
      { on: 429, kind: "error4", decode: { kind: "json", schema: errorInternalSchema } },
      { on: 500, kind: "error5", decode: { kind: "json", schema: errorInternalSchema } },
      { on: 503, kind: "error6", decode: { kind: "json", schema: errorInternalSchema } },
    ];
  }

  export class ListWebhooksError extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"error3", Error>
      | Declared<"error4", Error>
      | Declared<"error5", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<ListWebhooksError> = [
      { on: 401, kind: "error", decode: { kind: "json", schema: errorInternalSchema } },
      { on: 403, kind: "error2", decode: { kind: "json", schema: errorInternalSchema } },
      { on: 429, kind: "error3", decode: { kind: "json", schema: errorInternalSchema } },
      { on: 500, kind: "error4", decode: { kind: "json", schema: errorInternalSchema } },
      { on: 503, kind: "error5", decode: { kind: "json", schema: errorInternalSchema } },
    ];
  }
}
