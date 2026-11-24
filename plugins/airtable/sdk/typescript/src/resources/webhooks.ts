import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  basesWebhooksRefreshResponseSchema,
  type BasesWebhooksRefreshResponse,
} from "../models/bases-webhooks-refresh-response.js";
import {
  basesWebhooksResponseInternalSchema,
  type BasesWebhooksResponse,
} from "../models/bases-webhooks-response.js";
import { errorSchema, type Error } from "../models/error.js";
import {
  webhookCreateRequestInternalSchema,
  webhookCreateRequestSchema,
  type WebhookCreateRequest,
} from "../models/webhook-create-request.js";
import {
  webhookCreateResponseSchema,
  type WebhookCreateResponse,
} from "../models/webhook-create-response.js";
import { webhookPayloadListSchema, type WebhookPayloadList } from "../models/webhook-payload-list.js";
import type { Servers } from "../servers.js";

/**
 * Subscribe to real-time change notifications on bases
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
   * Airtable Create a Webhook for a Base
   *
   * @remarks
   * Creates a new webhook subscription for the specified base. Webhooks expire after 7 days and
   * must be refreshed. The response includes a MAC secret used to verify webhook notification
   * payloads. Requires OAuth authentication with the webhook:manage scope.
   *
   * @returns The created webhook with MAC secret.
   *
   * @throws {@link Webhooks.CreateWebhookError} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link AirtableError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  createWebhook(
    request: Webhooks.CreateWebhookRequest,
    options?: RequestOptions,
  ): ApiPromise<WebhookCreateResponse, Webhooks.CreateWebhookError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/bases/{baseId}/webhooks"),
        auth: this.#auth.bearerAuth,
        pathParams: [{ name: "baseId", value: request.baseId, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: webhookCreateRequestInternalSchema },
      },
      {
        success: { kind: "json", schema: webhookCreateResponseSchema },
        errorFactory: Webhooks.CreateWebhookError,
      },
      options,
    );
  }

  /**
   * Airtable Delete a Webhook
   *
   * @remarks
   * Deletes an existing webhook subscription. The webhook will no longer send notifications after
   * deletion.
   *
   * @returns Confirmation that the webhook was deleted.
   *
   * @throws {@link Webhooks.DeleteWebhookError} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link AirtableError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  deleteWebhook(
    request: Webhooks.DeleteWebhookRequest,
    options?: RequestOptions,
  ): ApiPromise<Record<string, unknown>, Webhooks.DeleteWebhookError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default("/bases/{baseId}/webhooks/{webhookId}"),
        auth: this.#auth.bearerAuth,
        pathParams: [
          { name: "baseId", value: request.baseId, schema: s.string() },
          { name: "webhookId", value: request.webhookId, schema: s.string() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.record(s.string(), s.unknown()) },
        errorFactory: Webhooks.DeleteWebhookError,
      },
      options,
    );
  }

  /**
   * Airtable List Webhook Payloads
   *
   * @remarks
   * Returns a list of payloads that have been generated for the specified webhook. Payloads are
   * returned in chronological order and can be paginated using a cursor.
   *
   * @returns A list of webhook payloads.
   *
   * @throws {@link Webhooks.ListWebhookPayloadsError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link AirtableError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listWebhookPayloads(
    request: Webhooks.ListWebhookPayloadsRequest,
    options?: RequestOptions,
  ): ApiPromise<WebhookPayloadList, Webhooks.ListWebhookPayloadsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/bases/{baseId}/webhooks/{webhookId}/payloads"),
        auth: this.#auth.bearerAuth,
        pathParams: [
          { name: "baseId", value: request.baseId, schema: s.string() },
          { name: "webhookId", value: request.webhookId, schema: s.string() },
        ],
        query: [{ name: "cursor", value: request.cursor, schema: s.optional(s.string()) }],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: webhookPayloadListSchema },
        errorFactory: Webhooks.ListWebhookPayloadsError,
      },
      options,
    );
  }

  /**
   * Airtable List Webhooks for a Base
   *
   * @remarks
   * Returns a list of all webhooks registered for the specified base. Includes webhook
   * configuration, status, and expiration information.
   *
   * @returns A list of webhooks.
   *
   * @throws {@link Webhooks.ListWebhooksError} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link AirtableError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listWebhooks(
    request: Webhooks.ListWebhooksRequest,
    options?: RequestOptions,
  ): ApiPromise<BasesWebhooksResponse, Webhooks.ListWebhooksError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/bases/{baseId}/webhooks"),
        auth: this.#auth.bearerAuth,
        pathParams: [{ name: "baseId", value: request.baseId, schema: s.string() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: basesWebhooksResponseInternalSchema },
        errorFactory: Webhooks.ListWebhooksError,
      },
      options,
    );
  }

  /**
   * Airtable Refresh a Webhook
   *
   * @remarks
   * Extends the expiration time of an existing webhook. Webhooks expire after 7 days of inactivity
   * and must be periodically refreshed to remain active.
   *
   * @returns The refreshed webhook with new expiration time.
   *
   * @throws {@link Webhooks.RefreshWebhookError} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link AirtableError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  refreshWebhook(
    request: Webhooks.RefreshWebhookRequest,
    options?: RequestOptions,
  ): ApiPromise<BasesWebhooksRefreshResponse, Webhooks.RefreshWebhookError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/bases/{baseId}/webhooks/{webhookId}/refresh"),
        auth: this.#auth.bearerAuth,
        pathParams: [
          { name: "baseId", value: request.baseId, schema: s.string() },
          { name: "webhookId", value: request.webhookId, schema: s.string() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: basesWebhooksRefreshResponseSchema },
        errorFactory: Webhooks.RefreshWebhookError,
      },
      options,
    );
  }
}

export namespace Webhooks {
  export type CreateWebhookRequest = {
    /** The unique identifier of the base (starts with 'app'). */
    baseId: string;
    body: WebhookCreateRequest;
  };

  export const createWebhookRequestSchema: Schema<CreateWebhookRequest> = s.lazySchema(() =>
    s.object<CreateWebhookRequest>({
      baseId: s.string().check(s.pattern("^app[a-zA-Z0-9]+$")),
      body: webhookCreateRequestSchema,
    }),
  );

  export class CreateWebhookError extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"error3", Error>
      | Declared<"error4", Error>
      | Declared<"error5", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<CreateWebhookError> = [
      { on: 401, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 403, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 404, kind: "error3", decode: { kind: "json", schema: errorSchema } },
      { on: 422, kind: "error4", decode: { kind: "json", schema: errorSchema } },
      { on: 429, kind: "error5", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type DeleteWebhookRequest = {
    /** The unique identifier of the base (starts with 'app'). */
    baseId: string;
    /** The unique identifier of the webhook. */
    webhookId: string;
  };

  export const deleteWebhookRequestSchema: Schema<DeleteWebhookRequest> = s.lazySchema(() =>
    s.object<DeleteWebhookRequest>({
      baseId: s.string().check(s.pattern("^app[a-zA-Z0-9]+$")),
      webhookId: s.string(),
    }),
  );

  export class DeleteWebhookError extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"error3", Error>
      | Declared<"error4", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<DeleteWebhookError> = [
      { on: 401, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 403, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 404, kind: "error3", decode: { kind: "json", schema: errorSchema } },
      { on: 429, kind: "error4", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type ListWebhookPayloadsRequest = {
    /** The unique identifier of the base (starts with 'app'). */
    baseId: string;
    /** The unique identifier of the webhook. */
    webhookId: string;
    /** A cursor for pagination. Pass the cursor from the previous response to get the next page. */
    cursor?: string;
  };

  export const listWebhookPayloadsRequestSchema: Schema<ListWebhookPayloadsRequest> = s.lazySchema(() =>
    s.object<ListWebhookPayloadsRequest>({
      baseId: s.string().check(s.pattern("^app[a-zA-Z0-9]+$")),
      webhookId: s.string(),
      cursor: s.optional(s.string()),
    }),
  );

  export class ListWebhookPayloadsError extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"error3", Error>
      | Declared<"error4", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<ListWebhookPayloadsError> = [
      { on: 401, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 403, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 404, kind: "error3", decode: { kind: "json", schema: errorSchema } },
      { on: 429, kind: "error4", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type ListWebhooksRequest = {
    /** The unique identifier of the base (starts with 'app'). */
    baseId: string;
  };

  export const listWebhooksRequestSchema: Schema<ListWebhooksRequest> = s.lazySchema(() =>
    s.object<ListWebhooksRequest>({
      baseId: s.string().check(s.pattern("^app[a-zA-Z0-9]+$")),
    }),
  );

  export class ListWebhooksError extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"error3", Error>
      | Declared<"error4", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<ListWebhooksError> = [
      { on: 401, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 403, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 404, kind: "error3", decode: { kind: "json", schema: errorSchema } },
      { on: 429, kind: "error4", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type RefreshWebhookRequest = {
    /** The unique identifier of the base (starts with 'app'). */
    baseId: string;
    /** The unique identifier of the webhook. */
    webhookId: string;
  };

  export const refreshWebhookRequestSchema: Schema<RefreshWebhookRequest> = s.lazySchema(() =>
    s.object<RefreshWebhookRequest>({
      baseId: s.string().check(s.pattern("^app[a-zA-Z0-9]+$")),
      webhookId: s.string(),
    }),
  );

  export class RefreshWebhookError extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"error3", Error>
      | Declared<"error4", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<RefreshWebhookError> = [
      { on: 401, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 403, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 404, kind: "error3", decode: { kind: "json", schema: errorSchema } },
      { on: 429, kind: "error4", decode: { kind: "json", schema: errorSchema } },
    ];
  }
}
