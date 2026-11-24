import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import {
  apiV2WebhooksExampleResponseSchema,
  type ApiV2WebhooksExampleResponse,
} from "../models/api-v2-webhooks-example-response.js";
import { apiV2WebhooksRequestSchema, type ApiV2WebhooksRequest } from "../models/api-v2-webhooks-request.js";
import {
  apiV2WebhooksRequest1Schema,
  type ApiV2WebhooksRequest1,
} from "../models/api-v2-webhooks-request1.js";
import {
  apiV2WebhooksTestRequestSchema,
  type ApiV2WebhooksTestRequest,
} from "../models/api-v2-webhooks-test-request.js";
import {
  apiV2WebhooksTestResponseSchema,
  type ApiV2WebhooksTestResponse,
} from "../models/api-v2-webhooks-test-response.js";
import {
  apiV2WebhooksTest400Error1Schema,
  type ApiV2WebhooksTest400Error1,
} from "../models/api-v2-webhooks-test400-error1.js";
import {
  apiV2WebhooksTokenResponseSchema,
  type ApiV2WebhooksTokenResponse,
} from "../models/api-v2-webhooks-token-response.js";
import { Event1, event1Schema } from "../models/event1.js";
import type { Servers } from "../servers.js";

/**
 * Create, read, update and delete webhook subscriptions; fetch the signing token, sample payloads
 * and test deliveries.
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
   * Create Webhook Subscription
   *
   * @returns 200
   *
   * @throws {@link Webhooks.CreateWebhookSubscriptionError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link PostscriptError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  createWebhookSubscription(
    request: Webhooks.CreateWebhookSubscriptionRequest = {},
    options?: RequestOptions,
  ): ApiPromise<unknown, Webhooks.CreateWebhookSubscriptionError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/api/v2/webhooks"),
        auth: this.#auth.sec0,
        pathParams: [],
        query: [],
        headers: [
          {
            name: "X-Postscript-Shop-Token",
            value: request.xPostscriptShopToken,
            schema: s.optional(s.string()),
          },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => apiV2WebhooksRequestSchema)),
        },
      },
      {
        success: { kind: "json", schema: s.unknown() },
        errorFactory: Webhooks.CreateWebhookSubscriptionError,
      },
      options,
    );
  }

  /**
   * Delete Webhook Subscription
   *
   * @returns 200
   *
   * @throws {@link Webhooks.DeleteWebhookSubscriptionError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link PostscriptError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  deleteWebhookSubscription(
    request: Webhooks.DeleteWebhookSubscriptionRequest,
    options?: RequestOptions,
  ): ApiPromise<Record<string, unknown>, Webhooks.DeleteWebhookSubscriptionError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default("/api/v2/webhooks/{id}"),
        auth: this.#auth.sec0,
        pathParams: [{ name: "id", value: request.id, schema: s.string() }],
        query: [],
        headers: [
          {
            name: "X-Postscript-Shop-Token",
            value: request.xPostscriptShopToken,
            schema: s.optional(s.string()),
          },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.record(s.string(), s.unknown()) },
        errorFactory: Webhooks.DeleteWebhookSubscriptionError,
      },
      options,
    );
  }

  /**
   * Example Event
   *
   * @returns 200
   *
   * @throws {@link Webhooks.ExampleEventError} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link PostscriptError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  exampleEvent(
    request: Webhooks.ExampleEventRequest = {},
    options?: RequestOptions,
  ): ApiPromise<ApiV2WebhooksExampleResponse, Webhooks.ExampleEventError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/v2/webhooks/example"),
        auth: this.#auth.sec0,
        pathParams: [],
        query: [{ name: "event", value: request.event, schema: s.defaulted(event1Schema, Event1.ShopTest) }],
        headers: [
          {
            name: "X-Postscript-Shop-Token",
            value: request.xPostscriptShopToken,
            schema: s.optional(s.string()),
          },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: apiV2WebhooksExampleResponseSchema },
        errorFactory: Webhooks.ExampleEventError,
      },
      options,
    );
  }

  /**
   * Get Webhook Signing Token
   *
   * @returns 200
   *
   * @throws {@link Webhooks.GetWebhookSigningTokenError} when the API answers with an error status
   * — narrow on `err.payload.kind`
   *
   * @throws {@link PostscriptError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getWebhookSigningToken(
    request: Webhooks.GetWebhookSigningTokenRequest = {},
    options?: RequestOptions,
  ): ApiPromise<ApiV2WebhooksTokenResponse, Webhooks.GetWebhookSigningTokenError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/v2/webhooks/token"),
        auth: this.#auth.sec0,
        pathParams: [],
        query: [],
        headers: [
          {
            name: "X-Postscript-Shop-Token",
            value: request.xPostscriptShopToken,
            schema: s.optional(s.string()),
          },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: apiV2WebhooksTokenResponseSchema },
        errorFactory: Webhooks.GetWebhookSigningTokenError,
      },
      options,
    );
  }

  /**
   * Get Webhook Subscription
   *
   * @returns 200
   *
   * @throws {@link Webhooks.GetWebhookSubscriptionError} when the API answers with an error status
   * — narrow on `err.payload.kind`
   *
   * @throws {@link PostscriptError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getWebhookSubscription(
    request: Webhooks.GetWebhookSubscriptionRequest,
    options?: RequestOptions,
  ): ApiPromise<unknown, Webhooks.GetWebhookSubscriptionError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/v2/webhooks/{id}"),
        auth: this.#auth.sec0,
        pathParams: [{ name: "id", value: request.id, schema: s.string() }],
        query: [],
        headers: [
          {
            name: "X-Postscript-Shop-Token",
            value: request.xPostscriptShopToken,
            schema: s.optional(s.string()),
          },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.unknown() },
        errorFactory: Webhooks.GetWebhookSubscriptionError,
      },
      options,
    );
  }

  /**
   * List Webhook Subscriptions
   *
   * @returns 200
   *
   * @throws {@link Webhooks.ListWebhookSubscriptionsError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link PostscriptError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listWebhookSubscriptions(
    request: Webhooks.ListWebhookSubscriptionsRequest = {},
    options?: RequestOptions,
  ): ApiPromise<unknown, Webhooks.ListWebhookSubscriptionsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/v2/webhooks"),
        auth: this.#auth.sec0,
        pathParams: [],
        query: [],
        headers: [
          {
            name: "X-Postscript-Shop-Token",
            value: request.xPostscriptShopToken,
            schema: s.optional(s.string()),
          },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.unknown() },
        errorFactory: Webhooks.ListWebhookSubscriptionsError,
      },
      options,
    );
  }

  /**
   * Test Shop Webhook
   *
   * @returns 202
   *
   * @throws {@link Webhooks.TestShopWebhookError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link PostscriptError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  testShopWebhook(
    request: Webhooks.TestShopWebhookRequest = {},
    options?: RequestOptions,
  ): ApiPromise<ApiV2WebhooksTestResponse, Webhooks.TestShopWebhookError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/api/v2/webhooks/test"),
        auth: this.#auth.sec0,
        pathParams: [],
        query: [],
        headers: [
          {
            name: "X-Postscript-Shop-Token",
            value: request.xPostscriptShopToken,
            schema: s.optional(s.string()),
          },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => apiV2WebhooksTestRequestSchema)),
        },
      },
      {
        success: { kind: "json", schema: apiV2WebhooksTestResponseSchema },
        errorFactory: Webhooks.TestShopWebhookError,
      },
      options,
    );
  }

  /**
   * Update Webhook Subscription
   *
   * @returns 200
   *
   * @throws {@link Webhooks.UpdateWebhookSubscriptionError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link PostscriptError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  updateWebhookSubscription(
    request: Webhooks.UpdateWebhookSubscriptionRequest,
    options?: RequestOptions,
  ): ApiPromise<unknown, Webhooks.UpdateWebhookSubscriptionError> {
    return this.#rawClient.execute(
      {
        method: "PATCH",
        urlTemplate: this.#servers.default("/api/v2/webhooks/{id}"),
        auth: this.#auth.sec0,
        pathParams: [{ name: "id", value: request.id, schema: s.string() }],
        query: [],
        headers: [
          {
            name: "X-Postscript-Shop-Token",
            value: request.xPostscriptShopToken,
            schema: s.optional(s.string()),
          },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => apiV2WebhooksRequest1Schema)),
        },
      },
      {
        success: { kind: "json", schema: s.unknown() },
        errorFactory: Webhooks.UpdateWebhookSubscriptionError,
      },
      options,
    );
  }
}

export namespace Webhooks {
  export type CreateWebhookSubscriptionRequest = {
    /**
     * Shop API Token. **Required for partners**. This header should be used only by partners. Shops
     * should include their API token in the *Authorization* header.
     */
    xPostscriptShopToken?: string;
    body?: ApiV2WebhooksRequest;
  };

  export class CreateWebhookSubscriptionError extends ApiError {
    declare readonly payload: Declared<"error400", Record<string, unknown>> | Undeclared;

    static readonly errors: ErrorDecoders<CreateWebhookSubscriptionError> = [
      { on: 400, kind: "error400", decode: { kind: "json", schema: s.record(s.string(), s.unknown()) } },
    ];
  }

  export type DeleteWebhookSubscriptionRequest = {
    /** The ID of the webhook subscription to delete. */
    id: string;
    /**
     * Shop API Token. **Required for partners**. This header should be used only by partners. Shops
     * should include their API token in the *Authorization* header.
     */
    xPostscriptShopToken?: string;
  };

  export class DeleteWebhookSubscriptionError extends ApiError {
    declare readonly payload: Declared<"error400", Record<string, unknown>> | Undeclared;

    static readonly errors: ErrorDecoders<DeleteWebhookSubscriptionError> = [
      { on: 400, kind: "error400", decode: { kind: "json", schema: s.record(s.string(), s.unknown()) } },
    ];
  }

  export type ExampleEventRequest = {
    /** Webhook subscription `event` type. @default Event1.ShopTest */
    event?: Event1;
    /**
     * Shop API Token. **Required for partners**. This header should be used only by partners. Shops
     * should include their API token in the *Authorization* header.
     */
    xPostscriptShopToken?: string;
  };

  export class ExampleEventError extends ApiError {
    declare readonly payload: Declared<"error400", Record<string, unknown>> | Undeclared;

    static readonly errors: ErrorDecoders<ExampleEventError> = [
      { on: 400, kind: "error400", decode: { kind: "json", schema: s.record(s.string(), s.unknown()) } },
    ];
  }

  export type GetWebhookSigningTokenRequest = {
    /**
     * Shop API Token. **Required for partners**. This header should be used only by partners. Shops
     * should include their API token in the *Authorization* header.
     */
    xPostscriptShopToken?: string;
  };

  export class GetWebhookSigningTokenError extends ApiError {
    declare readonly payload: Declared<"error400", Record<string, unknown>> | Undeclared;

    static readonly errors: ErrorDecoders<GetWebhookSigningTokenError> = [
      { on: 400, kind: "error400", decode: { kind: "json", schema: s.record(s.string(), s.unknown()) } },
    ];
  }

  export type GetWebhookSubscriptionRequest = {
    /** ID of the webhook subscription to fetch. */
    id: string;
    /**
     * Shop API Token. **Required for partners**. This header should be used only by partners. Shops
     * should include their API token in the *Authorization* header.
     */
    xPostscriptShopToken?: string;
  };

  export class GetWebhookSubscriptionError extends ApiError {
    declare readonly payload: Declared<"error400", Record<string, unknown>> | Undeclared;

    static readonly errors: ErrorDecoders<GetWebhookSubscriptionError> = [
      { on: 400, kind: "error400", decode: { kind: "json", schema: s.record(s.string(), s.unknown()) } },
    ];
  }

  export type ListWebhookSubscriptionsRequest = {
    /**
     * Shop API Token. **Required for partners**. This header should be used only by partners. Shops
     * should include their API token in the *Authorization* header.
     */
    xPostscriptShopToken?: string;
  };

  export class ListWebhookSubscriptionsError extends ApiError {
    declare readonly payload: Declared<"error400", Record<string, unknown>> | Undeclared;

    static readonly errors: ErrorDecoders<ListWebhookSubscriptionsError> = [
      { on: 400, kind: "error400", decode: { kind: "json", schema: s.record(s.string(), s.unknown()) } },
    ];
  }

  export type TestShopWebhookRequest = {
    /**
     * Shop API Token. **Required for partners**. This header should be used *only* by partners.
     * Shops should include their API token in the *Authorization* header.
     */
    xPostscriptShopToken?: string;
    body?: ApiV2WebhooksTestRequest;
  };

  export class TestShopWebhookError extends ApiError {
    declare readonly payload: Declared<"apiV2WebhooksTest400Error1", ApiV2WebhooksTest400Error1> | Undeclared;

    static readonly errors: ErrorDecoders<TestShopWebhookError> = [
      {
        on: 400,
        kind: "apiV2WebhooksTest400Error1",
        decode: { kind: "json", schema: apiV2WebhooksTest400Error1Schema },
      },
    ];
  }

  export type UpdateWebhookSubscriptionRequest = {
    /** ID of the webhook subscription to update. */
    id: string;
    /**
     * Shop API Token. **Required for partners**. This header should be used only by partners. Shops
     * should include their API token in the *Authorization* header.
     */
    xPostscriptShopToken?: string;
    body?: ApiV2WebhooksRequest1;
  };

  export class UpdateWebhookSubscriptionError extends ApiError {
    declare readonly payload: Declared<"error400", Record<string, unknown>> | Undeclared;

    static readonly errors: ErrorDecoders<UpdateWebhookSubscriptionError> = [
      { on: 400, kind: "error400", decode: { kind: "json", schema: s.record(s.string(), s.unknown()) } },
    ];
  }
}
