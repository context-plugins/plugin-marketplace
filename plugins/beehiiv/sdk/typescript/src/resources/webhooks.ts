import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { noneAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import { errorSchema, type Error } from "../models/error.js";
import {
  indexWebhooksResponseInternalSchema,
  type IndexWebhooksResponse,
} from "../models/index-webhooks-response.js";
import {
  publicationsWebhooksRequestInternalSchema,
  type PublicationsWebhooksRequest,
} from "../models/publications-webhooks-request.js";
import {
  publicationsWebhooksRequest1Schema,
  type PublicationsWebhooksRequest1,
} from "../models/publications-webhooks-request1.js";
import { webhookResponseInternalSchema, type WebhookResponse } from "../models/webhook-response.js";
import {
  webhooksDeleteResponseSchema,
  type WebhooksDeleteResponse,
} from "../models/webhooks-delete-response.js";
import type { Servers } from "../servers.js";

export class Webhooks {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;

  constructor(rawClient: RawClient, servers: Servers) {
    this.#rawClient = rawClient;
    this.#servers = servers;
  }

  /**
   * Create a webhook OAuth Scope: webhooks:write
   *
   * @remarks
   * Create a new webhook for a given publication.
   *
   * @returns Webhook created
   *
   * @throws {@link Webhooks.Create13Error} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link BeehiivError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  create13(
    request: Webhooks.Create13Request,
    options?: RequestOptions,
  ): ApiPromise<WebhookResponse, Webhooks.Create13Error> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/publications/{publicationId}/webhooks"),
        auth: noneAuth,
        pathParams: [{ name: "publicationId", value: request.publicationId, schema: s.string() }],
        query: [],
        headers: [
          { name: "Authorization", value: request.authorization, schema: s.string() },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => publicationsWebhooksRequestInternalSchema)),
        },
      },
      {
        success: { kind: "json", schema: webhookResponseInternalSchema },
        errorFactory: Webhooks.Create13Error,
      },
      options,
    );
  }

  /**
   * Delete a webhook OAuth Scope: webhooks:write
   *
   * @remarks
   * Delete a webhook subscription from a publication.
   *
   * @returns No Content
   *
   * @throws {@link Webhooks.Delete6Error} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link BeehiivError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  delete6(
    request: Webhooks.Delete6Request,
    options?: RequestOptions,
  ): ApiPromise<WebhooksDeleteResponse, Webhooks.Delete6Error> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default("/publications/{publicationId}/webhooks/{endpointId}"),
        auth: noneAuth,
        pathParams: [
          { name: "publicationId", value: request.publicationId, schema: s.string() },
          { name: "endpointId", value: request.endpointId, schema: s.string() },
        ],
        query: [],
        headers: [
          { name: "Authorization", value: request.authorization, schema: s.string() },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: webhooksDeleteResponseSchema },
        errorFactory: Webhooks.Delete6Error,
      },
      options,
    );
  }

  /**
   * List webhooks OAuth Scope: webhooks:read
   *
   * @remarks
   * Retrieve all webhooks belonging to a specific publication.
   *
   * @returns OK
   *
   * @throws {@link Webhooks.Index22Error} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link BeehiivError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  index22(
    request: Webhooks.Index22Request,
    options?: RequestOptions,
  ): ApiPromise<IndexWebhooksResponse, Webhooks.Index22Error> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/publications/{publicationId}/webhooks"),
        auth: noneAuth,
        pathParams: [{ name: "publicationId", value: request.publicationId, schema: s.string() }],
        query: [{ name: "limit", value: request.limit, schema: s.optional(s.int()) }],
        headers: [{ name: "Authorization", value: request.authorization, schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: indexWebhooksResponseInternalSchema },
        errorFactory: Webhooks.Index22Error,
      },
      options,
    );
  }

  /**
   * Get webhook OAuth Scope: webhooks:read
   *
   * @remarks
   * Retrieve a specific webhook belonging to a publication.
   *
   * @returns OK
   *
   * @throws {@link Webhooks.Show17Error} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link BeehiivError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  show17(
    request: Webhooks.Show17Request,
    options?: RequestOptions,
  ): ApiPromise<WebhookResponse, Webhooks.Show17Error> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/publications/{publicationId}/webhooks/{endpointId}"),
        auth: noneAuth,
        pathParams: [
          { name: "publicationId", value: request.publicationId, schema: s.string() },
          { name: "endpointId", value: request.endpointId, schema: s.string() },
        ],
        query: [],
        headers: [{ name: "Authorization", value: request.authorization, schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: webhookResponseInternalSchema },
        errorFactory: Webhooks.Show17Error,
      },
      options,
    );
  }

  /**
   * Update webhook OAuth Scope: webhooks:write
   *
   * @remarks
   * Update a webhook subscription for a publication.
   *
   * @returns OK
   *
   * @throws {@link Webhooks.Update4Error} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link BeehiivError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  update4(
    request: Webhooks.Update4Request,
    options?: RequestOptions,
  ): ApiPromise<WebhookResponse, Webhooks.Update4Error> {
    return this.#rawClient.execute(
      {
        method: "PATCH",
        urlTemplate: this.#servers.default("/publications/{publicationId}/webhooks/{endpointId}"),
        auth: noneAuth,
        pathParams: [
          { name: "publicationId", value: request.publicationId, schema: s.string() },
          { name: "endpointId", value: request.endpointId, schema: s.string() },
        ],
        query: [],
        headers: [
          { name: "Authorization", value: request.authorization, schema: s.string() },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => publicationsWebhooksRequest1Schema)),
        },
      },
      {
        success: { kind: "json", schema: webhookResponseInternalSchema },
        errorFactory: Webhooks.Update4Error,
      },
      options,
    );
  }
}

export namespace Webhooks {
  export type Create13Request = {
    /** The prefixed ID of the publication object */
    publicationId: string;
    /** Bearer authentication */
    authorization: string;
    body?: PublicationsWebhooksRequest;
  };

  export class Create13Error extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"error3", Error>
      | Declared<"error4", Error>
      | Declared<"error5", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<Create13Error> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 404, kind: "error3", decode: { kind: "json", schema: errorSchema } },
      { on: 429, kind: "error4", decode: { kind: "json", schema: errorSchema } },
      { on: 500, kind: "error5", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type Delete6Request = {
    /** The prefixed ID of the publication object */
    publicationId: string;
    /** The prefixed ID of the webhook object */
    endpointId: string;
    /** Bearer authentication */
    authorization: string;
  };

  export class Delete6Error extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"error3", Error>
      | Declared<"error4", Error>
      | Declared<"error5", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<Delete6Error> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 404, kind: "error3", decode: { kind: "json", schema: errorSchema } },
      { on: 429, kind: "error4", decode: { kind: "json", schema: errorSchema } },
      { on: 500, kind: "error5", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type Index22Request = {
    /** The prefixed ID of the publication object */
    publicationId: string;
    /**
     * A limit on the number of objects to be returned. The limit can range between 1 and 100, and
     * the default is 10.
     */
    limit?: number;
    /** Bearer authentication */
    authorization: string;
  };

  export class Index22Error extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"error3", Error>
      | Declared<"error4", Error>
      | Declared<"error5", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<Index22Error> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 404, kind: "error3", decode: { kind: "json", schema: errorSchema } },
      { on: 429, kind: "error4", decode: { kind: "json", schema: errorSchema } },
      { on: 500, kind: "error5", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type Show17Request = {
    /** The prefixed ID of the publication object */
    publicationId: string;
    /** The prefixed ID of the webhook object */
    endpointId: string;
    /** Bearer authentication */
    authorization: string;
  };

  export class Show17Error extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"error3", Error>
      | Declared<"error4", Error>
      | Declared<"error5", Error>
      | Declared<"error6", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<Show17Error> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 404, kind: "error3", decode: { kind: "json", schema: errorSchema } },
      { on: 422, kind: "error4", decode: { kind: "json", schema: errorSchema } },
      { on: 429, kind: "error5", decode: { kind: "json", schema: errorSchema } },
      { on: 500, kind: "error6", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type Update4Request = {
    /** The prefixed ID of the publication object */
    publicationId: string;
    /** The prefixed ID of the webhook object */
    endpointId: string;
    /** Bearer authentication */
    authorization: string;
    body?: PublicationsWebhooksRequest1;
  };

  export class Update4Error extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"error3", Error>
      | Declared<"error4", Error>
      | Declared<"error5", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<Update4Error> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 404, kind: "error3", decode: { kind: "json", schema: errorSchema } },
      { on: 429, kind: "error4", decode: { kind: "json", schema: errorSchema } },
      { on: 500, kind: "error5", decode: { kind: "json", schema: errorSchema } },
    ];
  }
}
