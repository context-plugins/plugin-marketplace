import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import { errorSchema, type Error } from "../models/error.js";
import { partnerWebhookSchema, type PartnerWebhook } from "../models/partner-webhook.js";
import {
  v2AccountsWebhooksRequestSchema,
  type V2AccountsWebhooksRequest,
} from "../models/v2-accounts-webhooks-request.js";
import {
  v2AccountsWebhooksResponseSchema,
  type V2AccountsWebhooksResponse,
} from "../models/v2-accounts-webhooks-response.js";
import type { Servers } from "../servers.js";

/**
 * Configure webhooks for sub-merchant accounts to receive payment events. Maximum 30 per account.
 */
export class PartnerWebhooks {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Create a webhook for a sub-merchant
   *
   * @remarks
   * Create a webhook to receive events for a sub-merchant account. Maximum 30 webhooks per account.
   * Authentication: OAuth access_token.
   *
   * @returns Webhook created
   *
   * @throws {@link PartnerWebhooks.CreatePartnerWebhookError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link CurlecError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  createPartnerWebhook(
    request: PartnerWebhooks.CreatePartnerWebhookRequest,
    options?: RequestOptions,
  ): ApiPromise<PartnerWebhook, PartnerWebhooks.CreatePartnerWebhookError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/v2/accounts/{account_id}/webhooks"),
        auth: this.#auth.basicAuth,
        pathParams: [{ name: "account_id", value: request.accountId, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: v2AccountsWebhooksRequestSchema },
      },
      {
        success: { kind: "json", schema: partnerWebhookSchema },
        errorFactory: PartnerWebhooks.CreatePartnerWebhookError,
      },
      options,
    );
  }

  /**
   * Delete a webhook
   *
   * @remarks
   * Delete a webhook for a sub-merchant account. Returns empty array on success. Authentication:
   * OAuth access_token.
   *
   * @returns Webhook deleted
   *
   * @throws {@link PartnerWebhooks.DeletePartnerWebhookError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link CurlecError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  deletePartnerWebhook(
    request: PartnerWebhooks.DeletePartnerWebhookRequest,
    options?: RequestOptions,
  ): ApiPromise<Record<string, unknown>, PartnerWebhooks.DeletePartnerWebhookError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default("/v2/accounts/{account_id}/webhooks/{webhook_id}"),
        auth: this.#auth.basicAuth,
        pathParams: [
          { name: "account_id", value: request.accountId, schema: s.string() },
          { name: "webhook_id", value: request.webhookId, schema: s.string() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.record(s.string(), s.unknown()) },
        errorFactory: PartnerWebhooks.DeletePartnerWebhookError,
      },
      options,
    );
  }

  /**
   * Fetch a webhook by ID
   *
   * @remarks
   * Retrieve details of a specific webhook for a sub-merchant account. Authentication: OAuth
   * access_token.
   *
   * @returns Webhook details
   *
   * @throws {@link PartnerWebhooks.FetchPartnerWebhookError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link CurlecError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  fetchPartnerWebhook(
    request: PartnerWebhooks.FetchPartnerWebhookRequest,
    options?: RequestOptions,
  ): ApiPromise<PartnerWebhook, PartnerWebhooks.FetchPartnerWebhookError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v2/accounts/{account_id}/webhooks/{webhook_id}"),
        auth: this.#auth.basicAuth,
        pathParams: [
          { name: "account_id", value: request.accountId, schema: s.string() },
          { name: "webhook_id", value: request.webhookId, schema: s.string() },
        ],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: partnerWebhookSchema },
        errorFactory: PartnerWebhooks.FetchPartnerWebhookError,
      },
      options,
    );
  }

  /**
   * List webhooks for a sub-merchant
   *
   * @remarks
   * Retrieve all webhooks configured for a sub-merchant account. Authentication: OAuth
   * access_token.
   *
   * @returns List of webhooks
   *
   * @throws {@link PartnerWebhooks.ListPartnerWebhooksError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link CurlecError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listPartnerWebhooks(
    request: PartnerWebhooks.ListPartnerWebhooksRequest,
    options?: RequestOptions,
  ): ApiPromise<V2AccountsWebhooksResponse, PartnerWebhooks.ListPartnerWebhooksError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v2/accounts/{account_id}/webhooks"),
        auth: this.#auth.basicAuth,
        pathParams: [{ name: "account_id", value: request.accountId, schema: s.string() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: v2AccountsWebhooksResponseSchema },
        errorFactory: PartnerWebhooks.ListPartnerWebhooksError,
      },
      options,
    );
  }

  /**
   * Update a webhook
   *
   * @remarks
   * Update webhook URL, events, secret, or active status for a sub-merchant account.
   * Authentication: OAuth access_token.
   *
   * @returns Webhook updated
   *
   * @throws {@link PartnerWebhooks.UpdatePartnerWebhookError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link CurlecError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  updatePartnerWebhook(
    request: PartnerWebhooks.UpdatePartnerWebhookRequest,
    options?: RequestOptions,
  ): ApiPromise<PartnerWebhook, PartnerWebhooks.UpdatePartnerWebhookError> {
    return this.#rawClient.execute(
      {
        method: "PATCH",
        urlTemplate: this.#servers.default("/v2/accounts/{account_id}/webhooks/{webhook_id}"),
        auth: this.#auth.basicAuth,
        pathParams: [
          { name: "account_id", value: request.accountId, schema: s.string() },
          { name: "webhook_id", value: request.webhookId, schema: s.string() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: partnerWebhookSchema },
      },
      {
        success: { kind: "json", schema: partnerWebhookSchema },
        errorFactory: PartnerWebhooks.UpdatePartnerWebhookError,
      },
      options,
    );
  }
}

export namespace PartnerWebhooks {
  export type CreatePartnerWebhookRequest = {
    /** Unique identifier of the linked merchant account (e.g. `acc_00000000000001`). */
    accountId: string;
    body: V2AccountsWebhooksRequest;
  };

  export class CreatePartnerWebhookError extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"error3", Error>
      | Declared<"error4", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<CreatePartnerWebhookError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 429, kind: "error3", decode: { kind: "json", schema: errorSchema } },
      { on: 500, kind: "error4", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type DeletePartnerWebhookRequest = {
    /** Unique identifier of the linked merchant account (e.g. `acc_00000000000001`). */
    accountId: string;
    /** Unique identifier of the webhook (e.g. `we_00000000000001`). */
    webhookId: string;
  };

  export class DeletePartnerWebhookError extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"error3", Error>
      | Declared<"error4", Error>
      | Declared<"error5", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<DeletePartnerWebhookError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 429, kind: "error3", decode: { kind: "json", schema: errorSchema } },
      { on: 500, kind: "error4", decode: { kind: "json", schema: errorSchema } },
      { on: 404, kind: "error5", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type FetchPartnerWebhookRequest = {
    /** Unique identifier of the linked merchant account (e.g. `acc_00000000000001`). */
    accountId: string;
    /** Unique identifier of the webhook (e.g. `we_00000000000001`). */
    webhookId: string;
  };

  export class FetchPartnerWebhookError extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"error3", Error>
      | Declared<"error4", Error>
      | Declared<"error5", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<FetchPartnerWebhookError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 429, kind: "error3", decode: { kind: "json", schema: errorSchema } },
      { on: 500, kind: "error4", decode: { kind: "json", schema: errorSchema } },
      { on: 404, kind: "error5", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type ListPartnerWebhooksRequest = {
    /** Unique identifier of the linked merchant account (e.g. `acc_00000000000001`). */
    accountId: string;
  };

  export class ListPartnerWebhooksError extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"error3", Error>
      | Declared<"error4", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<ListPartnerWebhooksError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 429, kind: "error3", decode: { kind: "json", schema: errorSchema } },
      { on: 500, kind: "error4", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type UpdatePartnerWebhookRequest = {
    /** Unique identifier of the linked merchant account (e.g. `acc_00000000000001`). */
    accountId: string;
    /** Unique identifier of the webhook (e.g. `we_00000000000001`). */
    webhookId: string;
    body: PartnerWebhook;
  };

  export class UpdatePartnerWebhookError extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"error3", Error>
      | Declared<"error4", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<UpdatePartnerWebhookError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 429, kind: "error3", decode: { kind: "json", schema: errorSchema } },
      { on: 500, kind: "error4", decode: { kind: "json", schema: errorSchema } },
    ];
  }
}
