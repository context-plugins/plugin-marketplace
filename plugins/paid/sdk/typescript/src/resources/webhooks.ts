import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { noneAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import { errorResponseSchema, type ErrorResponse } from "../models/error-response.js";
import {
  rotateWebhookSecretResponseSchema,
  type RotateWebhookSecretResponse,
} from "../models/rotate-webhook-secret-response.js";
import {
  updateWebhookRequestInternalSchema,
  type UpdateWebhookRequest,
} from "../models/update-webhook-request.js";
import { webhookListResponseSchema, type WebhookListResponse } from "../models/webhook-list-response.js";
import { webhookTestResponseSchema, type WebhookTestResponse } from "../models/webhook-test-response.js";
import {
  webhookUpdateResponseSchema,
  type WebhookUpdateResponse,
} from "../models/webhook-update-response.js";
import {
  webhooksWebhookNamePatchParametersWebhookNameSchema,
  type WebhooksWebhookNamePatchParametersWebhookName,
} from "../models/webhooks-webhook-name-patch-parameters-webhook-name.js";
import {
  webhooksWebhookNameTestPostParametersWebhookNameSchema,
  type WebhooksWebhookNameTestPostParametersWebhookName,
} from "../models/webhooks-webhook-name-test-post-parameters-webhook-name.js";
import type { Servers } from "../servers.js";

export class Webhooks {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;

  constructor(rawClient: RawClient, servers: Servers) {
    this.#rawClient = rawClient;
    this.#servers = servers;
  }

  /**
   * List webhooks
   *
   * @remarks
   * List customer-facing billing webhooks for the authenticated organization, along with whether
   * the organization has generated a signing secret.
   *
   * @returns 200
   *
   * @throws {@link Webhooks.ListWebhooksError} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link PaidError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listWebhooks(
    request: Webhooks.ListWebhooksRequest,
    options?: RequestOptions,
  ): ApiPromise<WebhookListResponse, Webhooks.ListWebhooksError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.defaultReferenceAnalyticsExperimentalApi("/webhooks/"),
        auth: noneAuth,
        pathParams: [],
        query: [],
        headers: [{ name: "Authorization", value: request.authorization, schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: webhookListResponseSchema },
        errorFactory: Webhooks.ListWebhooksError,
      },
      options,
    );
  }

  /**
   * Rotate the organization's webhook signing secret
   *
   * @remarks
   * Generate a new HMAC signing secret used by every webhook in this organization and return it
   * exactly once. The previous secret is invalidated immediately on next delivery.
   *
   * @returns 200
   *
   * @throws {@link Webhooks.RotateWebhookSecretError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link PaidError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  rotateWebhookSecret(
    request: Webhooks.RotateWebhookSecretRequest,
    options?: RequestOptions,
  ): ApiPromise<RotateWebhookSecretResponse, Webhooks.RotateWebhookSecretError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.defaultReferenceAnalyticsExperimentalApi("/webhooks/rotate-secret"),
        auth: noneAuth,
        pathParams: [],
        query: [],
        headers: [
          { name: "Authorization", value: request.authorization, schema: s.string() },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "json", value: request.body, schema: s.optional(s.record(s.string(), s.unknown())) },
      },
      {
        success: { kind: "json", schema: rotateWebhookSecretResponseSchema },
        errorFactory: Webhooks.RotateWebhookSecretError,
      },
      options,
    );
  }

  /**
   * Send a test webhook
   *
   * @remarks
   * Send a synthetic webhook delivery to the configured destination for this webhook.
   *
   * @returns 200
   *
   * @throws {@link Webhooks.TestWebhookError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link PaidError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  testWebhook(
    request: Webhooks.TestWebhookRequest,
    options?: RequestOptions,
  ): ApiPromise<WebhookTestResponse, Webhooks.TestWebhookError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.defaultReferenceAnalyticsExperimentalApi("/webhooks/{webhookName}/test"),
        auth: noneAuth,
        pathParams: [
          {
            name: "webhookName",
            value: request.webhookName,
            schema: webhooksWebhookNameTestPostParametersWebhookNameSchema,
          },
        ],
        query: [],
        headers: [
          { name: "Authorization", value: request.authorization, schema: s.string() },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "json", value: request.body, schema: s.optional(s.record(s.string(), s.unknown())) },
      },
      {
        success: { kind: "json", schema: webhookTestResponseSchema },
        errorFactory: Webhooks.TestWebhookError,
      },
      options,
    );
  }

  /**
   * Update a webhook
   *
   * @remarks
   * Enable or disable a webhook and configure the destination URL for the authenticated
   * organization.
   *
   * @returns 200
   *
   * @throws {@link Webhooks.UpdateWebhookError} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link PaidError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  updateWebhook(
    request: Webhooks.UpdateWebhookRequestParams,
    options?: RequestOptions,
  ): ApiPromise<WebhookUpdateResponse, Webhooks.UpdateWebhookError> {
    return this.#rawClient.execute(
      {
        method: "PATCH",
        urlTemplate: this.#servers.defaultReferenceAnalyticsExperimentalApi("/webhooks/{webhookName}"),
        auth: noneAuth,
        pathParams: [
          {
            name: "webhookName",
            value: request.webhookName,
            schema: webhooksWebhookNamePatchParametersWebhookNameSchema,
          },
        ],
        query: [],
        headers: [
          { name: "Authorization", value: request.authorization, schema: s.string() },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => updateWebhookRequestInternalSchema)),
        },
      },
      {
        success: { kind: "json", schema: webhookUpdateResponseSchema },
        errorFactory: Webhooks.UpdateWebhookError,
      },
      options,
    );
  }
}

export namespace Webhooks {
  export type ListWebhooksRequest = {
    /** API Key authentication using Bearer token */
    authorization: string;
  };

  export class ListWebhooksError extends ApiError {
    declare readonly payload:
      | Declared<"errorResponse", ErrorResponse>
      | Declared<"errorResponse2", ErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<ListWebhooksError> = [
      { on: 403, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 500, kind: "errorResponse2", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export type RotateWebhookSecretRequest = {
    /** API Key authentication using Bearer token */
    authorization: string;
    /** Body */
    body?: Record<string, unknown>;
  };

  export class RotateWebhookSecretError extends ApiError {
    declare readonly payload:
      | Declared<"errorResponse", ErrorResponse>
      | Declared<"errorResponse2", ErrorResponse>
      | Declared<"errorResponse3", ErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<RotateWebhookSecretError> = [
      { on: 400, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 403, kind: "errorResponse2", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 500, kind: "errorResponse3", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export type TestWebhookRequest = {
    webhookName: WebhooksWebhookNameTestPostParametersWebhookName;
    /** API Key authentication using Bearer token */
    authorization: string;
    /** Body */
    body?: Record<string, unknown>;
  };

  export class TestWebhookError extends ApiError {
    declare readonly payload:
      | Declared<"errorResponse", ErrorResponse>
      | Declared<"errorResponse2", ErrorResponse>
      | Declared<"errorResponse3", ErrorResponse>
      | Declared<"errorResponse4", ErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<TestWebhookError> = [
      { on: 400, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 403, kind: "errorResponse2", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 404, kind: "errorResponse3", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 500, kind: "errorResponse4", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export type UpdateWebhookRequestParams = {
    webhookName: WebhooksWebhookNamePatchParametersWebhookName;
    /** API Key authentication using Bearer token */
    authorization: string;
    /** Body */
    body?: UpdateWebhookRequest;
  };

  export class UpdateWebhookError extends ApiError {
    declare readonly payload:
      | Declared<"errorResponse", ErrorResponse>
      | Declared<"errorResponse2", ErrorResponse>
      | Declared<"errorResponse3", ErrorResponse>
      | Declared<"errorResponse4", ErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<UpdateWebhookError> = [
      { on: 400, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 403, kind: "errorResponse2", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 404, kind: "errorResponse3", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 500, kind: "errorResponse4", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }
}
