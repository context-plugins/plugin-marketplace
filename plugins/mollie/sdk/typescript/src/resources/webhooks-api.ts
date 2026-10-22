import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { anyAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import * as s from "../core/validation/index.js";
import { sortingSchema, type Sorting } from "../models/sorting.js";
import {
  v2WebhooksPingRequestSchema,
  type V2WebhooksPingRequest,
} from "../models/v2-webhooks-ping-request.js";
import { v2WebhooksRequestSchema, type V2WebhooksRequest } from "../models/v2-webhooks-request.js";
import { v2WebhooksRequest1Schema, type V2WebhooksRequest1 } from "../models/v2-webhooks-request1.js";
import { v2WebhooksRequest2Schema, type V2WebhooksRequest2 } from "../models/v2-webhooks-request2.js";
import { webhookEventTypesSchema, type WebhookEventTypes } from "../models/webhook-event-types.js";
import type { Servers } from "../servers.js";

/**
 * Operations related to the Webhooks API
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
   * Create a webhook
   *
   * @remarks
   * A webhook must have a name, an url and a list of event types. You can also create webhooks in
   * the webhooks settings section of the Dashboard.
   *
   * @returns The webhook object.
   *
   * @throws {@link WebhooksApi.CreateWebhookError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link MollieApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  createWebhook(
    request: WebhooksApi.CreateWebhookRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, WebhooksApi.CreateWebhookError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/v2/webhooks"),
        auth: anyAuth(this.#auth.advancedAccessToken, this.#auth.oAuth),
        pathParams: [],
        query: [],
        headers: [{ name: "idempotency-key", value: request.idempotencyKey, schema: s.optional(s.string()) }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => v2WebhooksRequestSchema)),
        },
      },
      {
        success: { kind: "empty" },
        errorFactory: WebhooksApi.CreateWebhookError,
      },
      options,
    );
  }

  /**
   * Delete a webhook
   *
   * @remarks
   * Delete a single webhook object by its webhook ID.
   *
   * @returns No content.
   *
   * @throws {@link WebhooksApi.DeleteWebhookError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link MollieApiError} when no usable response was produced: a connection failure, a
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
        urlTemplate: this.#servers.default("/v2/webhooks/{webhookId}"),
        auth: anyAuth(this.#auth.advancedAccessToken, this.#auth.oAuth),
        pathParams: [{ name: "webhookId", value: request.webhookId, schema: s.string() }],
        query: [],
        headers: [{ name: "idempotency-key", value: request.idempotencyKey, schema: s.optional(s.string()) }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => v2WebhooksRequest2Schema)),
        },
      },
      {
        success: { kind: "empty" },
        errorFactory: WebhooksApi.DeleteWebhookError,
      },
      options,
    );
  }

  /**
   * Get a webhook
   *
   * @remarks
   * Retrieve a single webhook object by its ID.
   *
   * @returns The webhook object.
   *
   * @throws {@link WebhooksApi.GetWebhookError} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link MollieApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getWebhook(
    request: WebhooksApi.GetWebhookRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, WebhooksApi.GetWebhookError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v2/webhooks/{webhookId}"),
        auth: anyAuth(this.#auth.advancedAccessToken, this.#auth.oAuth),
        pathParams: [{ name: "webhookId", value: request.webhookId, schema: s.string() }],
        query: [{ name: "testmode", value: request.testmode, schema: s.optional(s.boolean()) }],
        headers: [{ name: "idempotency-key", value: request.idempotencyKey, schema: s.optional(s.string()) }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: WebhooksApi.GetWebhookError,
      },
      options,
    );
  }

  /**
   * List all webhooks
   *
   * @remarks
   * Returns a paginated list of your webhooks. If no webhook endpoints are available, the resulting
   * array will be empty. This request should never throw an error.
   *
   * @returns A list of webhooks. For a complete reference of the webhook object, refer to the [Get
   * hook endpoint](get-webhook) documentation.
   *
   * @throws {@link WebhooksApi.ListWebhooksError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link MollieApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listWebhooks(
    request: WebhooksApi.ListWebhooksRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, WebhooksApi.ListWebhooksError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v2/webhooks"),
        auth: anyAuth(this.#auth.advancedAccessToken, this.#auth.oAuth),
        pathParams: [],
        query: [
          { name: "from", value: request.from, schema: s.optionalNullable(s.string()) },
          { name: "limit", value: request.limit, schema: s.optionalNullable(s.int()) },
          { name: "sort", value: request.sort, schema: s.optional(s.lazy(() => sortingSchema)) },
          {
            name: "eventTypes",
            value: request.eventTypes,
            schema: s.optional(s.lazy(() => webhookEventTypesSchema)),
          },
          { name: "testmode", value: request.testmode, schema: s.optional(s.boolean()) },
        ],
        headers: [{ name: "idempotency-key", value: request.idempotencyKey, schema: s.optional(s.string()) }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: WebhooksApi.ListWebhooksError,
      },
      options,
    );
  }

  /**
   * Test a webhook
   *
   * @remarks
   * Sends a test event to the webhook to verify the endpoint is working as expected.
   *
   * @returns Accepted.
   *
   * @throws {@link WebhooksApi.TestWebhookError} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link MollieApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  testWebhook(
    request: WebhooksApi.TestWebhookRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, WebhooksApi.TestWebhookError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/v2/webhooks/{webhookId}/ping"),
        auth: anyAuth(this.#auth.advancedAccessToken, this.#auth.oAuth),
        pathParams: [{ name: "webhookId", value: request.webhookId, schema: s.string() }],
        query: [],
        headers: [{ name: "idempotency-key", value: request.idempotencyKey, schema: s.optional(s.string()) }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => v2WebhooksPingRequestSchema)),
        },
      },
      {
        success: { kind: "empty" },
        errorFactory: WebhooksApi.TestWebhookError,
      },
      options,
    );
  }

  /**
   * Update a webhook
   *
   * @remarks
   * Updates the webhook. You may edit the name, url and the list of subscribed event types.
   *
   * @returns The webhook object.
   *
   * @throws {@link WebhooksApi.UpdateWebhookError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link MollieApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  updateWebhook(
    request: WebhooksApi.UpdateWebhookRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, WebhooksApi.UpdateWebhookError> {
    return this.#rawClient.execute(
      {
        method: "PATCH",
        urlTemplate: this.#servers.default("/v2/webhooks/{webhookId}"),
        auth: anyAuth(this.#auth.advancedAccessToken, this.#auth.oAuth),
        pathParams: [{ name: "webhookId", value: request.webhookId, schema: s.string() }],
        query: [],
        headers: [{ name: "idempotency-key", value: request.idempotencyKey, schema: s.optional(s.string()) }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => v2WebhooksRequest1Schema)),
        },
      },
      {
        success: { kind: "empty" },
        errorFactory: WebhooksApi.UpdateWebhookError,
      },
      options,
    );
  }
}

export namespace WebhooksApi {
  export type CreateWebhookRequest = {
    /** A unique key to ensure idempotent requests. This key should be a UUID v4 string. */
    idempotencyKey?: string;
    body?: V2WebhooksRequest;
  };

  export class CreateWebhookError extends ApiError {
    declare readonly payload: Declared<"error422", undefined> | Declared<"error429", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<CreateWebhookError> = [
      { on: 422, kind: "error422", decode: { kind: "empty" } },
      { on: 429, kind: "error429", decode: { kind: "empty" } },
    ];
  }

  export type DeleteWebhookRequest = {
    /** Provide the ID of the related webhook. */
    webhookId: string;
    /** A unique key to ensure idempotent requests. This key should be a UUID v4 string. */
    idempotencyKey?: string;
    body?: V2WebhooksRequest2;
  };

  export class DeleteWebhookError extends ApiError {
    declare readonly payload:
      | Declared<"error404", undefined>
      | Declared<"error422", undefined>
      | Declared<"error429", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<DeleteWebhookError> = [
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 422, kind: "error422", decode: { kind: "empty" } },
      { on: 429, kind: "error429", decode: { kind: "empty" } },
    ];
  }

  export type GetWebhookRequest = {
    /** Provide the ID of the related webhook. */
    webhookId: string;
    /**
     * You can enable test mode by setting the `testmode` query parameter to `true`.
     *
     * Test entities cannot be retrieved when the endpoint is set to live mode, and vice versa.
     */
    testmode?: boolean;
    /** A unique key to ensure idempotent requests. This key should be a UUID v4 string. */
    idempotencyKey?: string;
  };

  export class GetWebhookError extends ApiError {
    declare readonly payload:
      | Declared<"error404", undefined>
      | Declared<"error422", undefined>
      | Declared<"error429", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetWebhookError> = [
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 422, kind: "error422", decode: { kind: "empty" } },
      { on: 429, kind: "error429", decode: { kind: "empty" } },
    ];
  }

  export type ListWebhooksRequest = {
    /**
     * Provide an ID to start the result set from the item with the given ID and onwards. This
     * allows you to paginate the result set.
     */
    from?: string | null;
    /** The maximum number of items to return. Defaults to 50 items. */
    limit?: number | null;
    /**
     * Used for setting the direction of the result set. Defaults to descending order, meaning the
     * results are ordered from newest to oldest.
     */
    sort?: Sorting;
    /** Used to filter out only the webhooks that are subscribed to certain types of events. */
    eventTypes?: WebhookEventTypes;
    /**
     * You can enable test mode by setting the `testmode` query parameter to `true`.
     *
     * Test entities cannot be retrieved when the endpoint is set to live mode, and vice versa.
     */
    testmode?: boolean;
    /** A unique key to ensure idempotent requests. This key should be a UUID v4 string. */
    idempotencyKey?: string;
  };

  export class ListWebhooksError extends ApiError {
    declare readonly payload: Declared<"error400", undefined> | Declared<"error429", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<ListWebhooksError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 429, kind: "error429", decode: { kind: "empty" } },
    ];
  }

  export type TestWebhookRequest = {
    /** Provide the ID of the related webhook. */
    webhookId: string;
    /** A unique key to ensure idempotent requests. This key should be a UUID v4 string. */
    idempotencyKey?: string;
    body?: V2WebhooksPingRequest;
  };

  export class TestWebhookError extends ApiError {
    declare readonly payload:
      | Declared<"error404", undefined>
      | Declared<"error422", undefined>
      | Declared<"error429", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<TestWebhookError> = [
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 422, kind: "error422", decode: { kind: "empty" } },
      { on: 429, kind: "error429", decode: { kind: "empty" } },
    ];
  }

  export type UpdateWebhookRequest = {
    /** Provide the ID of the related webhook. */
    webhookId: string;
    /** A unique key to ensure idempotent requests. This key should be a UUID v4 string. */
    idempotencyKey?: string;
    body?: V2WebhooksRequest1;
  };

  export class UpdateWebhookError extends ApiError {
    declare readonly payload:
      | Declared<"error404", undefined>
      | Declared<"error422", undefined>
      | Declared<"error429", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<UpdateWebhookError> = [
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 422, kind: "error422", decode: { kind: "empty" } },
      { on: 429, kind: "error429", decode: { kind: "empty" } },
    ];
  }
}
