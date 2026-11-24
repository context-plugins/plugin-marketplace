import { buildAuthSchemes, type AuthSchemes } from "./auth-schemes.js";
import type { ClientOptions } from "./client-options.js";
import { ApiError, type Declared, type Undeclared } from "./core/api-error.js";
import type { ApiPromise } from "./core/api-promise.js";
import type { RequestOptions } from "./core/api-request.js";
import { buildCoreClientOptions } from "./core/client-options.js";
import { RawClient } from "./core/raw-client.js";
import type { ErrorDecoders } from "./core/response-decoder.js";
import * as host from "./core/runtime-environment.js";
import { uuid } from "./core/uuid.js";
import * as s from "./core/validation/index.js";
import { webhookSchema, type Webhook } from "./models/webhook.js";
import { buildServers, type Servers } from "./servers.js";

export class MailerLiteClient {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(options: ClientOptions = {}) {
    this.#rawClient = new RawClient({
      ...buildCoreClientOptions(options, "MAILER_LITE_LOG"),
      defaultHeaders: [
        { name: "User-Agent", value: "MailerLiteClient/2.0.0 TypeScript", schema: s.string() },
        { name: "X-APIMatic-Lang", value: "TypeScript", schema: s.string() },
        { name: "X-APIMatic-Package-Version", value: "2.0.0", schema: s.string() },
        { name: "X-APIMatic-Gen-Version", value: "4.0.0", schema: s.string() },
        { name: "X-APIMatic-OS", value: host.operatingSystem(), schema: s.optional(s.string()) },
        { name: "X-APIMatic-Runtime", value: host.runtimeDescription(), schema: s.optional(s.string()) },
      ],
      defaultQuery: [],
      defaultPathParams: [],
    });

    this.#servers = buildServers(options);

    this.#auth = buildAuthSchemes(options);
  }

  /**
   * Get the list of webhooks
   *
   * @returns successful operation
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link MailerLiteError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  createWebhook(
    request: MailerLiteClient.CreateWebhookRequest = {},
    options?: RequestOptions,
  ): ApiPromise<undefined, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/webhooks"),
        auth: this.#auth.apiKey,
        pathParams: [],
        query: [
          { name: "limit", value: request.limit, schema: s.defaulted(s.int(), 100) },
          { name: "offset", value: request.offset, schema: s.defaulted(s.int(), 0) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Delete a webhook
   *
   * @returns successful operation
   *
   * @throws {@link MailerLiteClient.DeleteWebhookError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link MailerLiteError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  deleteWebhook(
    request: MailerLiteClient.DeleteWebhookRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, MailerLiteClient.DeleteWebhookError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default("/webhooks/{webhookId}"),
        auth: this.#auth.apiKey,
        pathParams: [{ name: "webhookId", value: request.webhookId, schema: s.int() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: MailerLiteClient.DeleteWebhookError,
      },
      options,
    );
  }

  /**
   * Get the count of webhooks
   *
   * @returns successful operation
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link MailerLiteError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getCountOfWebhooks(options?: RequestOptions): ApiPromise<undefined, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/webhooks/count"),
        auth: this.#auth.apiKey,
        pathParams: [],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Create a webhook
   *
   * @returns successful operation
   *
   * @throws {@link MailerLiteClient.PostWebhooksError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link MailerLiteError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  postWebhooks(
    request: MailerLiteClient.PostWebhooksRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, MailerLiteClient.PostWebhooksError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/webhooks"),
        auth: this.#auth.apiKey,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: webhookSchema },
      },
      {
        success: { kind: "empty" },
        errorFactory: MailerLiteClient.PostWebhooksError,
      },
      options,
    );
  }

  /**
   * Info for a specific webhook
   *
   * @returns Expected response to a valid request
   *
   * @throws {@link MailerLiteClient.ShowWebhookByIdError} when the API answers with an error status
   * — narrow on `err.payload.kind`
   *
   * @throws {@link MailerLiteError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  showWebhookById(
    request: MailerLiteClient.ShowWebhookByIdRequest,
    options?: RequestOptions,
  ): ApiPromise<Webhook, MailerLiteClient.ShowWebhookByIdError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/webhooks/{webhookId}"),
        auth: this.#auth.apiKey,
        pathParams: [{ name: "webhookId", value: request.webhookId, schema: s.int() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: webhookSchema },
        errorFactory: MailerLiteClient.ShowWebhookByIdError,
      },
      options,
    );
  }

  /**
   * Update the specific webhook
   *
   * @returns successful operation
   *
   * @throws {@link MailerLiteClient.UpdateWebhookError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link MailerLiteError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  updateWebhook(
    request: MailerLiteClient.UpdateWebhookRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, MailerLiteClient.UpdateWebhookError> {
    return this.#rawClient.execute(
      {
        method: "PUT",
        urlTemplate: this.#servers.default("/webhooks/{webhookId}"),
        auth: this.#auth.apiKey,
        pathParams: [{ name: "webhookId", value: request.webhookId, schema: s.int() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: MailerLiteClient.UpdateWebhookError,
      },
      options,
    );
  }
}

export namespace MailerLiteClient {
  export type CreateWebhookRequest = {
    /** max records to return @default 100 */
    limit?: number;
    /** number of items to skip @default 0 */
    offset?: number;
  };

  export type DeleteWebhookRequest = {
    /** The id of the webhook to delete */
    webhookId: number;
  };

  export class DeleteWebhookError extends ApiError {
    declare readonly payload: Declared<"error404", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<DeleteWebhookError> = [
      { on: 404, kind: "error404", decode: { kind: "empty" } },
    ];
  }

  export type PostWebhooksRequest = {
    /** Created webhook object */
    body: Webhook;
  };

  export class PostWebhooksError extends ApiError {
    declare readonly payload: Declared<"error400", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<PostWebhooksError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
    ];
  }

  export type ShowWebhookByIdRequest = {
    /** The id of the webhook to retrieve */
    webhookId: number;
  };

  export class ShowWebhookByIdError extends ApiError {
    declare readonly payload: Declared<"error404", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<ShowWebhookByIdError> = [
      { on: 404, kind: "error404", decode: { kind: "empty" } },
    ];
  }

  export type UpdateWebhookRequest = {
    /** The id of the webhook to update */
    webhookId: number;
  };

  export class UpdateWebhookError extends ApiError {
    declare readonly payload: Declared<"error400", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<UpdateWebhookError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
    ];
  }
}
