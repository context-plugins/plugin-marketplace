import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import {
  apiV1ManageFormsWebhooksRequestInternalSchema,
  type ApiV1ManageFormsWebhooksRequest,
} from "../models/api-v1-manage-forms-webhooks-request.js";
import {
  apiV1ManageFormsWebhooksRequest1InternalSchema,
  type ApiV1ManageFormsWebhooksRequest1,
} from "../models/api-v1-manage-forms-webhooks-request1.js";
import {
  apiV1ManageFormsWebhooksResponseInternalSchema,
  type ApiV1ManageFormsWebhooksResponse,
} from "../models/api-v1-manage-forms-webhooks-response.js";
import {
  apiV1ManageFormsWebhooksResponse1Schema,
  type ApiV1ManageFormsWebhooksResponse1,
} from "../models/api-v1-manage-forms-webhooks-response1.js";
import {
  apiV1ManageFormsWebhooksResponse2Schema,
  type ApiV1ManageFormsWebhooksResponse2,
} from "../models/api-v1-manage-forms-webhooks-response2.js";
import { errorSchema, type Error } from "../models/error.js";
import { webhookCreatedInternalSchema, type WebhookCreated } from "../models/webhook-created.js";
import type { Servers } from "../servers.js";

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
   * Add a webhook
   *
   * @remarks
   * Register a signed webhook with optional receiver authentication. The response includes the
   * Fillo signing secret ONCE; neither it nor a receiver credential is retrievable again. Delivery
   * URLs are SSRF-guarded and must be http(s). Scope: webhooks:manage.
   *
   * @returns The created webhook, with its signing secret shown once.
   *
   * @throws {@link Webhooks.CreateFormWebhookError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link FilloError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  createFormWebhook(
    request: Webhooks.CreateFormWebhookRequest,
    options?: RequestOptions,
  ): ApiPromise<WebhookCreated, Webhooks.CreateFormWebhookError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/api/v1/manage/forms/{form}/webhooks"),
        auth: this.#auth.bearerAuth,
        pathParams: [{ name: "form", value: request.form, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: apiV1ManageFormsWebhooksRequestInternalSchema },
      },
      {
        success: { kind: "json", schema: webhookCreatedInternalSchema },
        errorFactory: Webhooks.CreateFormWebhookError,
      },
      options,
    );
  }

  /**
   * Delete a webhook
   *
   * @remarks
   * Remove one of the form's signed webhooks. Scope: webhooks:manage.
   *
   * @returns Deleted.
   *
   * @throws {@link Webhooks.DeleteFormWebhookError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link FilloError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  deleteFormWebhook(
    request: Webhooks.DeleteFormWebhookRequest,
    options?: RequestOptions,
  ): ApiPromise<ApiV1ManageFormsWebhooksResponse2, Webhooks.DeleteFormWebhookError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default("/api/v1/manage/forms/{form}/webhooks/{id}"),
        auth: this.#auth.bearerAuth,
        pathParams: [
          { name: "form", value: request.form, schema: s.string() },
          { name: "id", value: request.id, schema: s.string() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: apiV1ManageFormsWebhooksResponse2Schema },
        errorFactory: Webhooks.DeleteFormWebhookError,
      },
      options,
    );
  }

  /**
   * List a form's webhooks
   *
   * @remarks
   * The form's signed webhooks (Zapier subscriptions excluded). Signing and receiver-authentication
   * secrets are never returned. Scope: webhooks:manage.
   *
   * @returns The form's webhooks.
   *
   * @throws {@link Webhooks.ListFormWebhooksError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link FilloError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listFormWebhooks(
    request: Webhooks.ListFormWebhooksRequest,
    options?: RequestOptions,
  ): ApiPromise<ApiV1ManageFormsWebhooksResponse, Webhooks.ListFormWebhooksError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/v1/manage/forms/{form}/webhooks"),
        auth: this.#auth.bearerAuth,
        pathParams: [{ name: "form", value: request.form, schema: s.string() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: apiV1ManageFormsWebhooksResponseInternalSchema },
        errorFactory: Webhooks.ListFormWebhooksError,
      },
      options,
    );
  }

  /**
   * Update a webhook
   *
   * @remarks
   * Turn draft.abandoned delivery on or off, replace receiver authentication, or remove it with
   * authentication.type none. Receiver credentials remain write-only. Scope: webhooks:manage.
   *
   * @returns The webhook's updated event set.
   *
   * @throws {@link Webhooks.UpdateFormWebhookError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link FilloError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  updateFormWebhook(
    request: Webhooks.UpdateFormWebhookRequest,
    options?: RequestOptions,
  ): ApiPromise<ApiV1ManageFormsWebhooksResponse1, Webhooks.UpdateFormWebhookError> {
    return this.#rawClient.execute(
      {
        method: "PATCH",
        urlTemplate: this.#servers.default("/api/v1/manage/forms/{form}/webhooks/{id}"),
        auth: this.#auth.bearerAuth,
        pathParams: [
          { name: "form", value: request.form, schema: s.string() },
          { name: "id", value: request.id, schema: s.string() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: apiV1ManageFormsWebhooksRequest1InternalSchema },
      },
      {
        success: { kind: "json", schema: apiV1ManageFormsWebhooksResponse1Schema },
        errorFactory: Webhooks.UpdateFormWebhookError,
      },
      options,
    );
  }
}

export namespace Webhooks {
  export type CreateFormWebhookRequest = {
    /** A form id or slug. */
    form: string;
    body: ApiV1ManageFormsWebhooksRequest;
  };

  export class CreateFormWebhookError extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"error3", Error>
      | Declared<"error4", Error>
      | Declared<"error5", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<CreateFormWebhookError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 403, kind: "error3", decode: { kind: "json", schema: errorSchema } },
      { on: 404, kind: "error4", decode: { kind: "json", schema: errorSchema } },
      { on: 429, kind: "error5", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type DeleteFormWebhookRequest = {
    /** A form id or slug. */
    form: string;
    /** A webhook id. */
    id: string;
  };

  export class DeleteFormWebhookError extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"error3", Error>
      | Declared<"error4", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<DeleteFormWebhookError> = [
      { on: 401, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 403, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 404, kind: "error3", decode: { kind: "json", schema: errorSchema } },
      { on: 429, kind: "error4", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type ListFormWebhooksRequest = {
    /** A form id or slug. */
    form: string;
  };

  export class ListFormWebhooksError extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"error3", Error>
      | Declared<"error4", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<ListFormWebhooksError> = [
      { on: 401, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 403, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 404, kind: "error3", decode: { kind: "json", schema: errorSchema } },
      { on: 429, kind: "error4", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type UpdateFormWebhookRequest = {
    /** A form id or slug. */
    form: string;
    /** A webhook id. */
    id: string;
    body: ApiV1ManageFormsWebhooksRequest1;
  };

  export class UpdateFormWebhookError extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"error3", Error>
      | Declared<"error4", Error>
      | Declared<"error5", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<UpdateFormWebhookError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 403, kind: "error3", decode: { kind: "json", schema: errorSchema } },
      { on: 404, kind: "error4", decode: { kind: "json", schema: errorSchema } },
      { on: 429, kind: "error5", decode: { kind: "json", schema: errorSchema } },
    ];
  }
}
