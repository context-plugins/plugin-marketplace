import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import { forbiddenErrorRepSchema, type ForbiddenErrorRep } from "../models/forbidden-error-rep.js";
import {
  invalidRequestErrorRepSchema,
  type InvalidRequestErrorRep,
} from "../models/invalid-request-error-rep.js";
import { notFoundErrorRepSchema, type NotFoundErrorRep } from "../models/not-found-error-rep.js";
import { patchOperationSchema, type PatchOperation } from "../models/patch-operation.js";
import { rateLimitedErrorRepSchema, type RateLimitedErrorRep } from "../models/rate-limited-error-rep.js";
import { unauthorizedErrorRepSchema, type UnauthorizedErrorRep } from "../models/unauthorized-error-rep.js";
import { webhookPostSchema, type WebhookPost } from "../models/webhook-post.js";
import { webhookSchema, type Webhook } from "../models/webhook.js";
import { webhooksSchema, type Webhooks } from "../models/webhooks.js";
import type { Servers } from "../servers.js";

/**
 * The webhooks API lets you build your own integrations that subscribe to activities in
 * LaunchDarkly. When you generate an activity in LaunchDarkly, such as when you change a flag or
 * you create a project, LaunchDarkly sends an HTTP POST payload to the webhook's URL. Use webhooks
 * to update external issue trackers, update support tickets, notify customers of new feature
 * rollouts, and more.
 *
 * Several of the endpoints in the webhooks API require a webhook ID. The webhook ID is returned as
 * part of the [Creates a webhook](https://launchdarkly.com/docs/api/webhooks/post-webhook) and
 * [List webhooks](https://launchdarkly.com/docs/api/webhooks/get-all-webhooks) responses. It is the
 * `_id` field, or the `_id` field of each element in the `items` array.
 *
 * ## Designating the payload
 *
 * The webhook payload is identical to an audit log entry. To learn more, read [Get audit log
 * entry](https://launchdarkly.com/docs/api/audit-log/get-audit-log-entry).
 *
 * Here's a sample payload:
 *
 * > ### Webhook delivery order > > Webhooks may not be delivered in chronological order. We
 * recommend using the payload's "date" field as a timestamp to reorder webhooks as they are
 * received.
 *
 * ```json
 * {
 *   "_links": {
 *     "canonical": {
 *       "href": "/api/v2/projects/alexis/environments/test",
 *       "type": "application/json"
 *     },
 *     "parent": {
 *       "href": "/api/v2/auditlog",
 *       "type": "application/json"
 *     },
 *     "self": {
 *       "href": "/api/v2/auditlog/57c0a8e29969090743529965",
 *       "type": "application/json"
 *     },
 *     "site": {
 *       "href": "/settings#/projects",
 *       "type": "text/html"
 *     }
 *   },
 *   "_id": "57c0a8e29969090743529965",
 *   "date": 1472243938774,
 *   "accesses": [
 *     {
 *       "action": "updateName",
 *       "resource": "proj/alexis:env/test"
 *     }
 *   ],
 *   "kind": "environment",
 *   "name": "Testing",
 *   "description": "- Changed the name from ~~Test~~ to *Testing*",
 *   "member": {
 *     "_links": {
 *       "parent": {
 *         "href": "/internal/account/members",
 *         "type": "application/json"
 *       },
 *       "self": {
 *         "href": "/internal/account/members/548f6741c1efad40031b18ae",
 *         "type": "application/json"
 *       }
 *     },
 *     "_id": "548f6741c1efad40031b18ae",
 *     "email": "ariel@acme.com",
 *     "firstName": "Ariel",
 *     "lastName": "Flores"
 *   },
 *   "titleVerb": "changed the name of",
 *   "title": "[Ariel Flores](mailto:ariel@acme.com) changed the name of [Testing](https://app.launchdarkly.com/settings#/projects)",
 *   "target": {
 *     "_links": {
 *       "canonical": {
 *         "href": "/api/v2/projects/alexis/environments/test",
 *         "type": "application/json"
 *       },
 *       "site": {
 *         "href": "/settings#/projects",
 *         "type": "text/html"
 *       }
 *     },
 *     "name": "Testing",
 *     "resources": ["proj/alexis:env/test"]
 *   }
 * }
 * ```
 *
 * ## Signing the webhook
 *
 * Optionally, you can define a `secret` when you create a webhook. If you define the secret, the
 * webhook `POST` request will include an `X-LD-Signature header`, whose value will contain an HMAC
 * SHA256 hex digest of the webhook payload, using the `secret` as the key.
 *
 * Compute the signature of the payload using the same shared secret in your code to verify that the
 * webhook was triggered by LaunchDarkly.
 *
 * ## Understanding connection retries
 *
 * If LaunchDarkly receives a non-`2xx` response to a webhook `POST`, it will retry the delivery one
 * time. Webhook delivery is not guaranteed. If you build an integration on webhooks, make sure it
 * is tolerant of delivery failures.
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
   * Delete webhook
   *
   * @remarks
   * Delete a webhook by ID.
   *
   * @returns Action succeeded
   *
   * @throws {@link WebhooksApi.DeleteWebhookError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link LaunchDarklyRestApiError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  deleteWebhook(
    request: WebhooksApi.DeleteWebhookRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, WebhooksApi.DeleteWebhookError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default("/api/v2/webhooks/{id}"),
        auth: this.#auth.apiKey,
        pathParams: [{ name: "id", value: request.id, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: WebhooksApi.DeleteWebhookError,
      },
      options,
    );
  }

  /**
   * List webhooks
   *
   * @remarks
   * Fetch a list of all webhooks.
   *
   * @returns Webhooks response
   *
   * @throws {@link WebhooksApi.GetAllWebhooksError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link LaunchDarklyRestApiError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  getAllWebhooks(options?: RequestOptions): ApiPromise<Webhooks, WebhooksApi.GetAllWebhooksError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/v2/webhooks"),
        auth: this.#auth.apiKey,
        pathParams: [],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: webhooksSchema },
        errorFactory: WebhooksApi.GetAllWebhooksError,
      },
      options,
    );
  }

  /**
   * Get webhook
   *
   * @remarks
   * Get a single webhook by ID.
   *
   * @returns Webhook response
   *
   * @throws {@link WebhooksApi.GetWebhookError} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link LaunchDarklyRestApiError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  getWebhook(
    request: WebhooksApi.GetWebhookRequest,
    options?: RequestOptions,
  ): ApiPromise<Webhook, WebhooksApi.GetWebhookError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/v2/webhooks/{id}"),
        auth: this.#auth.apiKey,
        pathParams: [{ name: "id", value: request.id, schema: s.string() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: webhookSchema },
        errorFactory: WebhooksApi.GetWebhookError,
      },
      options,
    );
  }

  /**
   * Update webhook
   *
   * @remarks
   * Update a webhook's settings. Updating webhook settings uses a [JSON
   * patch](https://datatracker.ietf.org/doc/html/rfc6902) representation of the desired changes. To
   * learn more, read [Updates](https://launchdarkly.com/docs/api#updates).
   *
   * @returns Webhook response
   *
   * @throws {@link WebhooksApi.PatchWebhookError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link LaunchDarklyRestApiError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  patchWebhook(
    request: WebhooksApi.PatchWebhookRequest,
    options?: RequestOptions,
  ): ApiPromise<Webhook, WebhooksApi.PatchWebhookError> {
    return this.#rawClient.execute(
      {
        method: "PATCH",
        urlTemplate: this.#servers.default("/api/v2/webhooks/{id}"),
        auth: this.#auth.apiKey,
        pathParams: [{ name: "id", value: request.id, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: s.array(s.lazy(() => patchOperationSchema)) },
      },
      {
        success: { kind: "json", schema: webhookSchema },
        errorFactory: WebhooksApi.PatchWebhookError,
      },
      options,
    );
  }

  /**
   * Creates a webhook
   *
   * @remarks
   * Create a new webhook.
   *
   * @returns Webhook response
   *
   * @throws {@link WebhooksApi.PostWebhookError} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link LaunchDarklyRestApiError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  postWebhook(
    request: WebhooksApi.PostWebhookRequest,
    options?: RequestOptions,
  ): ApiPromise<Webhook, WebhooksApi.PostWebhookError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/api/v2/webhooks"),
        auth: this.#auth.apiKey,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: webhookPostSchema },
      },
      {
        success: { kind: "json", schema: webhookSchema },
        errorFactory: WebhooksApi.PostWebhookError,
      },
      options,
    );
  }
}

export namespace WebhooksApi {
  export type DeleteWebhookRequest = {
    /** The ID of the webhook to delete */
    id: string;
  };

  export class DeleteWebhookError extends ApiError {
    declare readonly payload:
      | Declared<"unauthorizedErrorRep", UnauthorizedErrorRep>
      | Declared<"forbiddenErrorRep", ForbiddenErrorRep>
      | Declared<"notFoundErrorRep", NotFoundErrorRep>
      | Declared<"rateLimitedErrorRep", RateLimitedErrorRep>
      | Undeclared;

    static readonly errors: ErrorDecoders<DeleteWebhookError> = [
      { on: 401, kind: "unauthorizedErrorRep", decode: { kind: "json", schema: unauthorizedErrorRepSchema } },
      { on: 403, kind: "forbiddenErrorRep", decode: { kind: "json", schema: forbiddenErrorRepSchema } },
      { on: 404, kind: "notFoundErrorRep", decode: { kind: "json", schema: notFoundErrorRepSchema } },
      { on: 429, kind: "rateLimitedErrorRep", decode: { kind: "json", schema: rateLimitedErrorRepSchema } },
    ];
  }

  export class GetAllWebhooksError extends ApiError {
    declare readonly payload:
      | Declared<"unauthorizedErrorRep", UnauthorizedErrorRep>
      | Declared<"forbiddenErrorRep", ForbiddenErrorRep>
      | Declared<"rateLimitedErrorRep", RateLimitedErrorRep>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetAllWebhooksError> = [
      { on: 401, kind: "unauthorizedErrorRep", decode: { kind: "json", schema: unauthorizedErrorRepSchema } },
      { on: 403, kind: "forbiddenErrorRep", decode: { kind: "json", schema: forbiddenErrorRepSchema } },
      { on: 429, kind: "rateLimitedErrorRep", decode: { kind: "json", schema: rateLimitedErrorRepSchema } },
    ];
  }

  export type GetWebhookRequest = {
    /** The ID of the webhook */
    id: string;
  };

  export class GetWebhookError extends ApiError {
    declare readonly payload:
      | Declared<"unauthorizedErrorRep", UnauthorizedErrorRep>
      | Declared<"forbiddenErrorRep", ForbiddenErrorRep>
      | Declared<"notFoundErrorRep", NotFoundErrorRep>
      | Declared<"rateLimitedErrorRep", RateLimitedErrorRep>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetWebhookError> = [
      { on: 401, kind: "unauthorizedErrorRep", decode: { kind: "json", schema: unauthorizedErrorRepSchema } },
      { on: 403, kind: "forbiddenErrorRep", decode: { kind: "json", schema: forbiddenErrorRepSchema } },
      { on: 404, kind: "notFoundErrorRep", decode: { kind: "json", schema: notFoundErrorRepSchema } },
      { on: 429, kind: "rateLimitedErrorRep", decode: { kind: "json", schema: rateLimitedErrorRepSchema } },
    ];
  }

  export type PatchWebhookRequest = {
    /** The ID of the webhook to update */
    id: string;
    body: PatchOperation[];
  };

  export class PatchWebhookError extends ApiError {
    declare readonly payload:
      | Declared<"invalidRequestErrorRep", InvalidRequestErrorRep>
      | Declared<"unauthorizedErrorRep", UnauthorizedErrorRep>
      | Declared<"forbiddenErrorRep", ForbiddenErrorRep>
      | Declared<"notFoundErrorRep", NotFoundErrorRep>
      | Declared<"rateLimitedErrorRep", RateLimitedErrorRep>
      | Undeclared;

    static readonly errors: ErrorDecoders<PatchWebhookError> = [
      {
        on: 400,
        kind: "invalidRequestErrorRep",
        decode: { kind: "json", schema: invalidRequestErrorRepSchema },
      },
      { on: 401, kind: "unauthorizedErrorRep", decode: { kind: "json", schema: unauthorizedErrorRepSchema } },
      { on: 403, kind: "forbiddenErrorRep", decode: { kind: "json", schema: forbiddenErrorRepSchema } },
      { on: 404, kind: "notFoundErrorRep", decode: { kind: "json", schema: notFoundErrorRepSchema } },
      { on: 429, kind: "rateLimitedErrorRep", decode: { kind: "json", schema: rateLimitedErrorRepSchema } },
    ];
  }

  export type PostWebhookRequest = {
    body: WebhookPost;
  };

  export class PostWebhookError extends ApiError {
    declare readonly payload:
      | Declared<"invalidRequestErrorRep", InvalidRequestErrorRep>
      | Declared<"unauthorizedErrorRep", UnauthorizedErrorRep>
      | Declared<"forbiddenErrorRep", ForbiddenErrorRep>
      | Declared<"rateLimitedErrorRep", RateLimitedErrorRep>
      | Undeclared;

    static readonly errors: ErrorDecoders<PostWebhookError> = [
      {
        on: 400,
        kind: "invalidRequestErrorRep",
        decode: { kind: "json", schema: invalidRequestErrorRepSchema },
      },
      { on: 401, kind: "unauthorizedErrorRep", decode: { kind: "json", schema: unauthorizedErrorRepSchema } },
      { on: 403, kind: "forbiddenErrorRep", decode: { kind: "json", schema: forbiddenErrorRepSchema } },
      { on: 429, kind: "rateLimitedErrorRep", decode: { kind: "json", schema: rateLimitedErrorRepSchema } },
    ];
  }
}
