import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import { error400Schema, type Error400 } from "../models/error400.js";
import { error401Schema, type Error401 } from "../models/error401.js";
import { error403Schema, type Error403 } from "../models/error403.js";
import { error404Schema, type Error404 } from "../models/error404.js";
import { error405Schema, type Error405 } from "../models/error405.js";
import { error409Schema, type Error409 } from "../models/error409.js";
import { error425Schema, type Error425 } from "../models/error425.js";
import { error429Schema, type Error429 } from "../models/error429.js";
import { error500Schema, type Error500 } from "../models/error500.js";
import { error502Schema, type Error502 } from "../models/error502.js";
import { error504Schema, type Error504 } from "../models/error504.js";
import { httpValidationErrorSchema, type HttpValidationError } from "../models/http-validation-error.js";
import { cursor2Schema, type Cursor2 } from "../models/unions/cursor2.js";
import {
  xGr4VyMerchantAccountIdSchema,
  type XGr4VyMerchantAccountId,
} from "../models/unions/xgr4-vy-merchant-account-id.js";
import {
  webhookSubscriptionCreateSchema,
  type WebhookSubscriptionCreate,
} from "../models/webhook-subscription-create.js";
import {
  webhookSubscriptionRotateSecretSchema,
  type WebhookSubscriptionRotateSecret,
} from "../models/webhook-subscription-rotate-secret.js";
import {
  webhookSubscriptionUpdateSchema,
  type WebhookSubscriptionUpdate,
} from "../models/webhook-subscription-update.js";
import { webhookSubscriptionSchema, type WebhookSubscription } from "../models/webhook-subscription.js";
import { webhookSubscriptionsSchema, type WebhookSubscriptions } from "../models/webhook-subscriptions.js";
import type { Servers } from "../servers.js";

/**
 * Manage webhook subscriptions.
 */
export class WebhookSubscriptionsApi {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Create webhook subscription
   *
   * @remarks
   * Create a new webhook subscription to receive event notifications. Subscriptions allow you to
   * specify a URL where webhook events will be delivered and configure authentication credentials
   * to secure the webhook communication.
   *
   * @returns Successful Response
   *
   * @throws {@link WebhookSubscriptionsApi.CreateWebhookSubscriptionError} when the API answers
   * with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link Gr4VyError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  createWebhookSubscription(
    request: WebhookSubscriptionsApi.CreateWebhookSubscriptionRequest,
    options?: RequestOptions,
  ): ApiPromise<WebhookSubscription, WebhookSubscriptionsApi.CreateWebhookSubscriptionError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/webhook-subscriptions"),
        auth: this.#auth.oAuth2PasswordBearer,
        pathParams: [],
        query: [],
        headers: [
          {
            name: "x-gr4vy-merchant-account-id",
            value: request.xGr4VyMerchantAccountId,
            schema: s.optional(s.lazy(() => xGr4VyMerchantAccountIdSchema)),
          },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "json", value: request.body, schema: webhookSubscriptionCreateSchema },
      },
      {
        success: { kind: "json", schema: webhookSubscriptionSchema },
        errorFactory: WebhookSubscriptionsApi.CreateWebhookSubscriptionError,
      },
      options,
    );
  }

  /**
   * Delete webhook subscription
   *
   * @remarks
   * Permanently removes a webhook subscription from your account. Once deleted, you will no longer
   * receive event notifications at the subscription's URL. This action cannot be undone, and you'll
   * need to create a new subscription if you want to receive webhooks at this endpoint again in the
   * future.
   *
   * @returns Successful Response
   *
   * @throws {@link WebhookSubscriptionsApi.DeleteWebhookSubscriptionError} when the API answers
   * with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link Gr4VyError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  deleteWebhookSubscription(
    request: WebhookSubscriptionsApi.DeleteWebhookSubscriptionRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, WebhookSubscriptionsApi.DeleteWebhookSubscriptionError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default("/webhook-subscriptions/{subscription_id}"),
        auth: this.#auth.oAuth2PasswordBearer,
        pathParams: [{ name: "subscription_id", value: request.subscriptionId, schema: s.string() }],
        query: [],
        headers: [
          {
            name: "x-gr4vy-merchant-account-id",
            value: request.xGr4VyMerchantAccountId,
            schema: s.optional(s.lazy(() => xGr4VyMerchantAccountIdSchema)),
          },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: WebhookSubscriptionsApi.DeleteWebhookSubscriptionError,
      },
      options,
    );
  }

  /**
   * List webhook subscriptions
   *
   * @remarks
   * Retrieve a paginated list of all webhook subscriptions for your account. This endpoint returns
   * subscription details including URLs, authentication methods, and active status. Use pagination
   * parameters to navigate through large collections of subscriptions. Results are sorted by
   * creation date, with the most recent subscriptions appearing first.
   *
   * @returns Successful Response
   *
   * @throws {@link WebhookSubscriptionsApi.ListWebhookSubscriptionError} when the API answers with
   * an error status — narrow on `err.payload.kind`
   *
   * @throws {@link Gr4VyError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listWebhookSubscription(
    request: WebhookSubscriptionsApi.ListWebhookSubscriptionRequest,
    options?: RequestOptions,
  ): ApiPromise<WebhookSubscriptions, WebhookSubscriptionsApi.ListWebhookSubscriptionError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/webhook-subscriptions"),
        auth: this.#auth.oAuth2PasswordBearer,
        pathParams: [],
        query: [
          { name: "limit", value: request.limit, schema: s.defaulted(s.int(), 20) },
          { name: "cursor", value: request.cursor, schema: s.optional(s.lazy(() => cursor2Schema)) },
        ],
        headers: [
          {
            name: "x-gr4vy-merchant-account-id",
            value: request.xGr4VyMerchantAccountId,
            schema: s.optional(s.lazy(() => xGr4VyMerchantAccountIdSchema)),
          },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: webhookSubscriptionsSchema },
        errorFactory: WebhookSubscriptionsApi.ListWebhookSubscriptionError,
      },
      options,
    );
  }

  /**
   * Get webhook subscription
   *
   * @remarks
   * Retrieve detailed information about a specific webhook subscription. This endpoint returns the
   * full configuration of a subscription including its URL, authentication details, active status,
   * and signing secret information. Use this to verify your webhook subscription settings or
   * retrieve details needed for webhook verification.
   *
   * @returns Successful Response
   *
   * @throws {@link WebhookSubscriptionsApi.ReadWebhookSubscriptionError} when the API answers with
   * an error status — narrow on `err.payload.kind`
   *
   * @throws {@link Gr4VyError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  readWebhookSubscription(
    request: WebhookSubscriptionsApi.ReadWebhookSubscriptionRequest,
    options?: RequestOptions,
  ): ApiPromise<WebhookSubscription, WebhookSubscriptionsApi.ReadWebhookSubscriptionError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/webhook-subscriptions/{subscription_id}"),
        auth: this.#auth.oAuth2PasswordBearer,
        pathParams: [{ name: "subscription_id", value: request.subscriptionId, schema: s.string() }],
        query: [],
        headers: [
          {
            name: "x-gr4vy-merchant-account-id",
            value: request.xGr4VyMerchantAccountId,
            schema: s.optional(s.lazy(() => xGr4VyMerchantAccountIdSchema)),
          },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: webhookSubscriptionSchema },
        errorFactory: WebhookSubscriptionsApi.ReadWebhookSubscriptionError,
      },
      options,
    );
  }

  /**
   * Rotate webhook subscription secret
   *
   * @remarks
   * Rotate the secret used to sign webhook payloads for improved security. This creates a new
   * secret while keeping the old one valid for a specified grace period, allowing you to update
   * your systems without disruption. The old secret will automatically expire after the specified
   * transition period.
   *
   * @returns Successful Response
   *
   * @throws {@link WebhookSubscriptionsApi.RotateWebhookSubscriptionSecretError} when the API
   * answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link Gr4VyError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  rotateWebhookSubscriptionSecret(
    request: WebhookSubscriptionsApi.RotateWebhookSubscriptionSecretRequest,
    options?: RequestOptions,
  ): ApiPromise<WebhookSubscription, WebhookSubscriptionsApi.RotateWebhookSubscriptionSecretError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/webhook-subscriptions/{subscription_id}/rotate-secret"),
        auth: this.#auth.oAuth2PasswordBearer,
        pathParams: [{ name: "subscription_id", value: request.subscriptionId, schema: s.string() }],
        query: [],
        headers: [
          {
            name: "x-gr4vy-merchant-account-id",
            value: request.xGr4VyMerchantAccountId,
            schema: s.optional(s.lazy(() => xGr4VyMerchantAccountIdSchema)),
          },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "json", value: request.body, schema: webhookSubscriptionRotateSecretSchema },
      },
      {
        success: { kind: "json", schema: webhookSubscriptionSchema },
        errorFactory: WebhookSubscriptionsApi.RotateWebhookSubscriptionSecretError,
      },
      options,
    );
  }

  /**
   * Update webhook subscription
   *
   * @remarks
   * Update an existing webhook subscription's properties. You can modify the subscription URL,
   * authentication details, or toggle the active status. Only the fields you include in your
   * request will be updated, and all other properties will remain unchanged.
   *
   * @returns Successful Response
   *
   * @throws {@link WebhookSubscriptionsApi.UpdateWebhookSubscriptionError} when the API answers
   * with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link Gr4VyError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  updateWebhookSubscription(
    request: WebhookSubscriptionsApi.UpdateWebhookSubscriptionRequest,
    options?: RequestOptions,
  ): ApiPromise<WebhookSubscription, WebhookSubscriptionsApi.UpdateWebhookSubscriptionError> {
    return this.#rawClient.execute(
      {
        method: "PUT",
        urlTemplate: this.#servers.default("/webhook-subscriptions/{subscription_id}"),
        auth: this.#auth.oAuth2PasswordBearer,
        pathParams: [{ name: "subscription_id", value: request.subscriptionId, schema: s.string() }],
        query: [],
        headers: [
          {
            name: "x-gr4vy-merchant-account-id",
            value: request.xGr4VyMerchantAccountId,
            schema: s.optional(s.lazy(() => xGr4VyMerchantAccountIdSchema)),
          },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "json", value: request.body, schema: webhookSubscriptionUpdateSchema },
      },
      {
        success: { kind: "json", schema: webhookSubscriptionSchema },
        errorFactory: WebhookSubscriptionsApi.UpdateWebhookSubscriptionError,
      },
      options,
    );
  }
}

export namespace WebhookSubscriptionsApi {
  export type CreateWebhookSubscriptionRequest = {
    /** The ID of the merchant account to use for this request. */
    xGr4VyMerchantAccountId?: XGr4VyMerchantAccountId;
    body: WebhookSubscriptionCreate;
  };

  export class CreateWebhookSubscriptionError extends ApiError {
    declare readonly payload:
      | Declared<"error400", Error400>
      | Declared<"error401", Error401>
      | Declared<"error403", Error403>
      | Declared<"error404", Error404>
      | Declared<"error405", Error405>
      | Declared<"error409", Error409>
      | Declared<"error425", Error425>
      | Declared<"error429", Error429>
      | Declared<"error500", Error500>
      | Declared<"error502", Error502>
      | Declared<"error504", Error504>
      | Declared<"httpValidationError", HttpValidationError>
      | Undeclared;

    static readonly errors: ErrorDecoders<CreateWebhookSubscriptionError> = [
      { on: 400, kind: "error400", decode: { kind: "json", schema: error400Schema } },
      { on: 401, kind: "error401", decode: { kind: "json", schema: error401Schema } },
      { on: 403, kind: "error403", decode: { kind: "json", schema: error403Schema } },
      { on: 404, kind: "error404", decode: { kind: "json", schema: error404Schema } },
      { on: 405, kind: "error405", decode: { kind: "json", schema: error405Schema } },
      { on: 409, kind: "error409", decode: { kind: "json", schema: error409Schema } },
      { on: 425, kind: "error425", decode: { kind: "json", schema: error425Schema } },
      { on: 429, kind: "error429", decode: { kind: "json", schema: error429Schema } },
      { on: 500, kind: "error500", decode: { kind: "json", schema: error500Schema } },
      { on: 502, kind: "error502", decode: { kind: "json", schema: error502Schema } },
      { on: 504, kind: "error504", decode: { kind: "json", schema: error504Schema } },
      { on: 422, kind: "httpValidationError", decode: { kind: "json", schema: httpValidationErrorSchema } },
    ];
  }

  export type DeleteWebhookSubscriptionRequest = {
    /** The ID of the webhook subscription */
    subscriptionId: string;
    /** The ID of the merchant account to use for this request. */
    xGr4VyMerchantAccountId?: XGr4VyMerchantAccountId;
  };

  export class DeleteWebhookSubscriptionError extends ApiError {
    declare readonly payload:
      | Declared<"error400", Error400>
      | Declared<"error401", Error401>
      | Declared<"error403", Error403>
      | Declared<"error404", Error404>
      | Declared<"error405", Error405>
      | Declared<"error409", Error409>
      | Declared<"error425", Error425>
      | Declared<"error429", Error429>
      | Declared<"error500", Error500>
      | Declared<"error502", Error502>
      | Declared<"error504", Error504>
      | Declared<"httpValidationError", HttpValidationError>
      | Undeclared;

    static readonly errors: ErrorDecoders<DeleteWebhookSubscriptionError> = [
      { on: 400, kind: "error400", decode: { kind: "json", schema: error400Schema } },
      { on: 401, kind: "error401", decode: { kind: "json", schema: error401Schema } },
      { on: 403, kind: "error403", decode: { kind: "json", schema: error403Schema } },
      { on: 404, kind: "error404", decode: { kind: "json", schema: error404Schema } },
      { on: 405, kind: "error405", decode: { kind: "json", schema: error405Schema } },
      { on: 409, kind: "error409", decode: { kind: "json", schema: error409Schema } },
      { on: 425, kind: "error425", decode: { kind: "json", schema: error425Schema } },
      { on: 429, kind: "error429", decode: { kind: "json", schema: error429Schema } },
      { on: 500, kind: "error500", decode: { kind: "json", schema: error500Schema } },
      { on: 502, kind: "error502", decode: { kind: "json", schema: error502Schema } },
      { on: 504, kind: "error504", decode: { kind: "json", schema: error504Schema } },
      { on: 422, kind: "httpValidationError", decode: { kind: "json", schema: httpValidationErrorSchema } },
    ];
  }

  export type ListWebhookSubscriptionRequest = {
    /** @default 20 */
    limit?: number;
    cursor?: Cursor2;
    /** The ID of the merchant account to use for this request. */
    xGr4VyMerchantAccountId?: XGr4VyMerchantAccountId;
  };

  export class ListWebhookSubscriptionError extends ApiError {
    declare readonly payload:
      | Declared<"error400", Error400>
      | Declared<"error401", Error401>
      | Declared<"error403", Error403>
      | Declared<"error404", Error404>
      | Declared<"error405", Error405>
      | Declared<"error409", Error409>
      | Declared<"error425", Error425>
      | Declared<"error429", Error429>
      | Declared<"error500", Error500>
      | Declared<"error502", Error502>
      | Declared<"error504", Error504>
      | Declared<"httpValidationError", HttpValidationError>
      | Undeclared;

    static readonly errors: ErrorDecoders<ListWebhookSubscriptionError> = [
      { on: 400, kind: "error400", decode: { kind: "json", schema: error400Schema } },
      { on: 401, kind: "error401", decode: { kind: "json", schema: error401Schema } },
      { on: 403, kind: "error403", decode: { kind: "json", schema: error403Schema } },
      { on: 404, kind: "error404", decode: { kind: "json", schema: error404Schema } },
      { on: 405, kind: "error405", decode: { kind: "json", schema: error405Schema } },
      { on: 409, kind: "error409", decode: { kind: "json", schema: error409Schema } },
      { on: 425, kind: "error425", decode: { kind: "json", schema: error425Schema } },
      { on: 429, kind: "error429", decode: { kind: "json", schema: error429Schema } },
      { on: 500, kind: "error500", decode: { kind: "json", schema: error500Schema } },
      { on: 502, kind: "error502", decode: { kind: "json", schema: error502Schema } },
      { on: 504, kind: "error504", decode: { kind: "json", schema: error504Schema } },
      { on: 422, kind: "httpValidationError", decode: { kind: "json", schema: httpValidationErrorSchema } },
    ];
  }

  export type ReadWebhookSubscriptionRequest = {
    /** The ID of the webhook subscription */
    subscriptionId: string;
    /** The ID of the merchant account to use for this request. */
    xGr4VyMerchantAccountId?: XGr4VyMerchantAccountId;
  };

  export class ReadWebhookSubscriptionError extends ApiError {
    declare readonly payload:
      | Declared<"error400", Error400>
      | Declared<"error401", Error401>
      | Declared<"error403", Error403>
      | Declared<"error404", Error404>
      | Declared<"error405", Error405>
      | Declared<"error409", Error409>
      | Declared<"error425", Error425>
      | Declared<"error429", Error429>
      | Declared<"error500", Error500>
      | Declared<"error502", Error502>
      | Declared<"error504", Error504>
      | Declared<"httpValidationError", HttpValidationError>
      | Undeclared;

    static readonly errors: ErrorDecoders<ReadWebhookSubscriptionError> = [
      { on: 400, kind: "error400", decode: { kind: "json", schema: error400Schema } },
      { on: 401, kind: "error401", decode: { kind: "json", schema: error401Schema } },
      { on: 403, kind: "error403", decode: { kind: "json", schema: error403Schema } },
      { on: 404, kind: "error404", decode: { kind: "json", schema: error404Schema } },
      { on: 405, kind: "error405", decode: { kind: "json", schema: error405Schema } },
      { on: 409, kind: "error409", decode: { kind: "json", schema: error409Schema } },
      { on: 425, kind: "error425", decode: { kind: "json", schema: error425Schema } },
      { on: 429, kind: "error429", decode: { kind: "json", schema: error429Schema } },
      { on: 500, kind: "error500", decode: { kind: "json", schema: error500Schema } },
      { on: 502, kind: "error502", decode: { kind: "json", schema: error502Schema } },
      { on: 504, kind: "error504", decode: { kind: "json", schema: error504Schema } },
      { on: 422, kind: "httpValidationError", decode: { kind: "json", schema: httpValidationErrorSchema } },
    ];
  }

  export type RotateWebhookSubscriptionSecretRequest = {
    /** The ID of the webhook subscription */
    subscriptionId: string;
    /** The ID of the merchant account to use for this request. */
    xGr4VyMerchantAccountId?: XGr4VyMerchantAccountId;
    body: WebhookSubscriptionRotateSecret;
  };

  export class RotateWebhookSubscriptionSecretError extends ApiError {
    declare readonly payload:
      | Declared<"error400", Error400>
      | Declared<"error401", Error401>
      | Declared<"error403", Error403>
      | Declared<"error404", Error404>
      | Declared<"error405", Error405>
      | Declared<"error409", Error409>
      | Declared<"error425", Error425>
      | Declared<"error429", Error429>
      | Declared<"error500", Error500>
      | Declared<"error502", Error502>
      | Declared<"error504", Error504>
      | Declared<"httpValidationError", HttpValidationError>
      | Undeclared;

    static readonly errors: ErrorDecoders<RotateWebhookSubscriptionSecretError> = [
      { on: 400, kind: "error400", decode: { kind: "json", schema: error400Schema } },
      { on: 401, kind: "error401", decode: { kind: "json", schema: error401Schema } },
      { on: 403, kind: "error403", decode: { kind: "json", schema: error403Schema } },
      { on: 404, kind: "error404", decode: { kind: "json", schema: error404Schema } },
      { on: 405, kind: "error405", decode: { kind: "json", schema: error405Schema } },
      { on: 409, kind: "error409", decode: { kind: "json", schema: error409Schema } },
      { on: 425, kind: "error425", decode: { kind: "json", schema: error425Schema } },
      { on: 429, kind: "error429", decode: { kind: "json", schema: error429Schema } },
      { on: 500, kind: "error500", decode: { kind: "json", schema: error500Schema } },
      { on: 502, kind: "error502", decode: { kind: "json", schema: error502Schema } },
      { on: 504, kind: "error504", decode: { kind: "json", schema: error504Schema } },
      { on: 422, kind: "httpValidationError", decode: { kind: "json", schema: httpValidationErrorSchema } },
    ];
  }

  export type UpdateWebhookSubscriptionRequest = {
    /** The ID of the webhook subscription */
    subscriptionId: string;
    /** The ID of the merchant account to use for this request. */
    xGr4VyMerchantAccountId?: XGr4VyMerchantAccountId;
    body: WebhookSubscriptionUpdate;
  };

  export class UpdateWebhookSubscriptionError extends ApiError {
    declare readonly payload:
      | Declared<"error400", Error400>
      | Declared<"error401", Error401>
      | Declared<"error403", Error403>
      | Declared<"error404", Error404>
      | Declared<"error405", Error405>
      | Declared<"error409", Error409>
      | Declared<"error425", Error425>
      | Declared<"error429", Error429>
      | Declared<"error500", Error500>
      | Declared<"error502", Error502>
      | Declared<"error504", Error504>
      | Declared<"httpValidationError", HttpValidationError>
      | Undeclared;

    static readonly errors: ErrorDecoders<UpdateWebhookSubscriptionError> = [
      { on: 400, kind: "error400", decode: { kind: "json", schema: error400Schema } },
      { on: 401, kind: "error401", decode: { kind: "json", schema: error401Schema } },
      { on: 403, kind: "error403", decode: { kind: "json", schema: error403Schema } },
      { on: 404, kind: "error404", decode: { kind: "json", schema: error404Schema } },
      { on: 405, kind: "error405", decode: { kind: "json", schema: error405Schema } },
      { on: 409, kind: "error409", decode: { kind: "json", schema: error409Schema } },
      { on: 425, kind: "error425", decode: { kind: "json", schema: error425Schema } },
      { on: 429, kind: "error429", decode: { kind: "json", schema: error429Schema } },
      { on: 500, kind: "error500", decode: { kind: "json", schema: error500Schema } },
      { on: 502, kind: "error502", decode: { kind: "json", schema: error502Schema } },
      { on: 504, kind: "error504", decode: { kind: "json", schema: error504Schema } },
      { on: 422, kind: "httpValidationError", decode: { kind: "json", schema: httpValidationErrorSchema } },
    ];
  }
}
