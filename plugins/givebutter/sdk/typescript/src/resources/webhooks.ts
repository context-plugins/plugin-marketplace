import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import {
  authorizationException1Schema,
  type AuthorizationException1,
} from "../models/authorization-exception1.js";
import {
  modelNotFoundException1Schema,
  type ModelNotFoundException1,
} from "../models/model-not-found-exception1.js";
import { v1WebhooksRequestInternalSchema, type V1WebhooksRequest } from "../models/v1-webhooks-request.js";
import { v1WebhooksRequest1InternalSchema, type V1WebhooksRequest1 } from "../models/v1-webhooks-request1.js";
import { v1WebhooksResponseInternalSchema, type V1WebhooksResponse } from "../models/v1-webhooks-response.js";
import { validationException1Schema, type ValidationException1 } from "../models/validation-exception1.js";
import { webhookResourceSchema, type WebhookResource } from "../models/webhook-resource.js";
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
   * Delete a webhook
   *
   * @throws {@link Webhooks.WebhooksDestroyError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link GivebutterError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  webhooksDestroy(
    request: Webhooks.WebhooksDestroyRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, Webhooks.WebhooksDestroyError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default("/v1/webhooks/{webhook}"),
        auth: this.#auth.http,
        pathParams: [{ name: "webhook", value: request.webhook, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: Webhooks.WebhooksDestroyError,
      },
      options,
    );
  }

  /**
   * List all webhooks
   *
   * @returns Paginated set of `WebhookResource`
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link GivebutterError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  webhooksIndex(options?: RequestOptions): ApiPromise<V1WebhooksResponse, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v1/webhooks"),
        auth: this.#auth.http,
        pathParams: [],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: v1WebhooksResponseInternalSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Get a webhook
   *
   * @returns `WebhookResource`
   *
   * @throws {@link Webhooks.WebhooksShowError} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link GivebutterError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  webhooksShow(
    request: Webhooks.WebhooksShowRequest,
    options?: RequestOptions,
  ): ApiPromise<WebhookResource, Webhooks.WebhooksShowError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v1/webhooks/{webhook}"),
        auth: this.#auth.http,
        pathParams: [{ name: "webhook", value: request.webhook, schema: s.string() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: webhookResourceSchema },
        errorFactory: Webhooks.WebhooksShowError,
      },
      options,
    );
  }

  /**
   * Create a webhook
   *
   * @returns `WebhookResource`
   *
   * @throws {@link Webhooks.WebhooksStoreError} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link GivebutterError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  webhooksStore(
    request: Webhooks.WebhooksStoreRequest,
    options?: RequestOptions,
  ): ApiPromise<WebhookResource, Webhooks.WebhooksStoreError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/v1/webhooks"),
        auth: this.#auth.http,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: v1WebhooksRequestInternalSchema },
      },
      {
        success: { kind: "json", schema: webhookResourceSchema },
        errorFactory: Webhooks.WebhooksStoreError,
      },
      options,
    );
  }

  /**
   * Update a webhook
   *
   * @returns `WebhookResource`
   *
   * @throws {@link Webhooks.WebhooksUpdateError} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link GivebutterError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  webhooksUpdate(
    request: Webhooks.WebhooksUpdateRequest,
    options?: RequestOptions,
  ): ApiPromise<WebhookResource, Webhooks.WebhooksUpdateError> {
    return this.#rawClient.execute(
      {
        method: "PUT",
        urlTemplate: this.#servers.default("/v1/webhooks/{webhook}"),
        auth: this.#auth.http,
        pathParams: [{ name: "webhook", value: request.webhook, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: v1WebhooksRequest1InternalSchema },
      },
      {
        success: { kind: "json", schema: webhookResourceSchema },
        errorFactory: Webhooks.WebhooksUpdateError,
      },
      options,
    );
  }
}

export namespace Webhooks {
  export type WebhooksDestroyRequest = {
    /** The webhook ID */
    webhook: string;
  };

  export class WebhooksDestroyError extends ApiError {
    declare readonly payload:
      | Declared<"authorizationException1", AuthorizationException1>
      | Declared<"modelNotFoundException1", ModelNotFoundException1>
      | Undeclared;

    static readonly errors: ErrorDecoders<WebhooksDestroyError> = [
      {
        on: 403,
        kind: "authorizationException1",
        decode: { kind: "json", schema: authorizationException1Schema },
      },
      {
        on: 404,
        kind: "modelNotFoundException1",
        decode: { kind: "json", schema: modelNotFoundException1Schema },
      },
    ];
  }

  export type WebhooksShowRequest = {
    /** The webhook ID */
    webhook: string;
  };

  export class WebhooksShowError extends ApiError {
    declare readonly payload:
      | Declared<"authorizationException1", AuthorizationException1>
      | Declared<"modelNotFoundException1", ModelNotFoundException1>
      | Undeclared;

    static readonly errors: ErrorDecoders<WebhooksShowError> = [
      {
        on: 403,
        kind: "authorizationException1",
        decode: { kind: "json", schema: authorizationException1Schema },
      },
      {
        on: 404,
        kind: "modelNotFoundException1",
        decode: { kind: "json", schema: modelNotFoundException1Schema },
      },
    ];
  }

  export type WebhooksStoreRequest = {
    body: V1WebhooksRequest;
  };

  export class WebhooksStoreError extends ApiError {
    declare readonly payload: Declared<"validationException1", ValidationException1> | Undeclared;

    static readonly errors: ErrorDecoders<WebhooksStoreError> = [
      { on: 422, kind: "validationException1", decode: { kind: "json", schema: validationException1Schema } },
    ];
  }

  export type WebhooksUpdateRequest = {
    /** The webhook ID */
    webhook: string;
    body: V1WebhooksRequest1;
  };

  export class WebhooksUpdateError extends ApiError {
    declare readonly payload:
      | Declared<"validationException1", ValidationException1>
      | Declared<"modelNotFoundException1", ModelNotFoundException1>
      | Undeclared;

    static readonly errors: ErrorDecoders<WebhooksUpdateError> = [
      { on: 422, kind: "validationException1", decode: { kind: "json", schema: validationException1Schema } },
      {
        on: 404,
        kind: "modelNotFoundException1",
        decode: { kind: "json", schema: modelNotFoundException1Schema },
      },
    ];
  }
}
