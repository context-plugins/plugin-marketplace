import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { noneAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import {
  bulkSubscriptionUpdatesGetResponseSchema,
  type BulkSubscriptionUpdatesGetResponse,
} from "../models/bulk-subscription-updates-get-response.js";
import {
  bulkSubscriptionUpdatesListResponseSchema,
  type BulkSubscriptionUpdatesListResponse,
} from "../models/bulk-subscription-updates-list-response.js";
import { errorSchema, type Error } from "../models/error.js";
import {
  publicationsSubscriptionsBulkActionsRequestSchema,
  type PublicationsSubscriptionsBulkActionsRequest,
} from "../models/publications-subscriptions-bulk-actions-request.js";
import {
  publicationsSubscriptionsRequestSchema,
  type PublicationsSubscriptionsRequest,
} from "../models/publications-subscriptions-request.js";
import {
  subscriptionsPatchResponseSchema,
  type SubscriptionsPatchResponse,
} from "../models/subscriptions-patch-response.js";
import type { Servers } from "../servers.js";

export class BulkSubscriptionUpdates {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;

  constructor(rawClient: RawClient, servers: Servers) {
    this.#rawClient = rawClient;
    this.#servers = servers;
  }

  /**
   * List subscription updates OAuth Scope: subscriptions:read
   *
   * @remarks
   * Returns a list of Subscription Update objects for a publication.
   *
   * @returns OK
   *
   * @throws {@link BulkSubscriptionUpdates.Index7Error} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link BeehiivError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  index7(
    request: BulkSubscriptionUpdates.Index7Request,
    options?: RequestOptions,
  ): ApiPromise<BulkSubscriptionUpdatesListResponse, BulkSubscriptionUpdates.Index7Error> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/publications/{publicationId}/bulk_subscription_updates"),
        auth: noneAuth,
        pathParams: [{ name: "publicationId", value: request.publicationId, schema: s.string() }],
        query: [],
        headers: [{ name: "Authorization", value: request.authorization, schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: bulkSubscriptionUpdatesListResponseSchema },
        errorFactory: BulkSubscriptionUpdates.Index7Error,
      },
      options,
    );
  }

  /**
   * Update subscriptions OAuth Scope: subscriptions:write
   *
   * @remarks
   * Bulk update multiple subscriptions fields, including status, custom fields, and tiers.
   *
   * @returns OK
   *
   * @throws {@link BulkSubscriptionUpdates.PatchError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link BeehiivError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  patch(
    request: BulkSubscriptionUpdates.PatchRequest,
    options?: RequestOptions,
  ): ApiPromise<SubscriptionsPatchResponse, BulkSubscriptionUpdates.PatchError> {
    return this.#rawClient.execute(
      {
        method: "PATCH",
        urlTemplate: this.#servers.default("/publications/{publicationId}/subscriptions/bulk_actions"),
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
          schema: s.optional(s.lazy(() => publicationsSubscriptionsBulkActionsRequestSchema)),
        },
      },
      {
        success: { kind: "json", schema: subscriptionsPatchResponseSchema },
        errorFactory: BulkSubscriptionUpdates.PatchError,
      },
      options,
    );
  }

  /**
   * Update subscriptions' status OAuth Scope: subscriptions:write
   *
   * @remarks
   * Bulk update subscriptions' status.
   *
   * @returns Successful response
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link BeehiivError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  patchStatus(
    request: BulkSubscriptionUpdates.PatchStatusRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, ApiError> {
    return this.#rawClient.execute(
      {
        method: "PATCH",
        urlTemplate: this.#servers.default("/publications/{publicationId}/subscriptions"),
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
          schema: s.optional(s.lazy(() => publicationsSubscriptionsRequestSchema)),
        },
      },
      {
        success: { kind: "empty" },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Update subscriptions OAuth Scope: subscriptions:write
   *
   * @remarks
   * Bulk update multiple subscriptions fields, including status, custom fields, and tiers.
   *
   * @returns OK
   *
   * @throws {@link BulkSubscriptionUpdates.PutError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link BeehiivError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  put(
    request: BulkSubscriptionUpdates.PutRequest,
    options?: RequestOptions,
  ): ApiPromise<SubscriptionsPatchResponse, BulkSubscriptionUpdates.PutError> {
    return this.#rawClient.execute(
      {
        method: "PUT",
        urlTemplate: this.#servers.default("/publications/{publicationId}/subscriptions/bulk_actions"),
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
          schema: s.optional(s.lazy(() => publicationsSubscriptionsBulkActionsRequestSchema)),
        },
      },
      {
        success: { kind: "json", schema: subscriptionsPatchResponseSchema },
        errorFactory: BulkSubscriptionUpdates.PutError,
      },
      options,
    );
  }

  /**
   * Update subscriptions' status OAuth Scope: subscriptions:write
   *
   * @remarks
   * Bulk update subscriptions' status.
   *
   * @returns Successful response
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link BeehiivError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  putStatus(
    request: BulkSubscriptionUpdates.PutStatusRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, ApiError> {
    return this.#rawClient.execute(
      {
        method: "PUT",
        urlTemplate: this.#servers.default("/publications/{publicationId}/subscriptions"),
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
          schema: s.optional(s.lazy(() => publicationsSubscriptionsRequestSchema)),
        },
      },
      {
        success: { kind: "empty" },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Get subscription update OAuth Scope: subscriptions:read
   *
   * @remarks
   * Returns a single Subscription Update object for a publication.
   *
   * @returns OK
   *
   * @throws {@link BulkSubscriptionUpdates.Show4Error} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link BeehiivError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  show4(
    request: BulkSubscriptionUpdates.Show4Request,
    options?: RequestOptions,
  ): ApiPromise<BulkSubscriptionUpdatesGetResponse, BulkSubscriptionUpdates.Show4Error> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/publications/{publicationId}/bulk_subscription_updates/{id}"),
        auth: noneAuth,
        pathParams: [
          { name: "publicationId", value: request.publicationId, schema: s.string() },
          { name: "id", value: request.id, schema: s.string() },
        ],
        query: [],
        headers: [{ name: "Authorization", value: request.authorization, schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: bulkSubscriptionUpdatesGetResponseSchema },
        errorFactory: BulkSubscriptionUpdates.Show4Error,
      },
      options,
    );
  }
}

export namespace BulkSubscriptionUpdates {
  export type Index7Request = {
    /** The prefixed ID of the publication object */
    publicationId: string;
    /** Bearer authentication */
    authorization: string;
  };

  export class Index7Error extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"error3", Error>
      | Declared<"error4", Error>
      | Declared<"error5", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<Index7Error> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 404, kind: "error3", decode: { kind: "json", schema: errorSchema } },
      { on: 429, kind: "error4", decode: { kind: "json", schema: errorSchema } },
      { on: 500, kind: "error5", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type PatchRequest = {
    /** The prefixed ID of the publication object */
    publicationId: string;
    /** Bearer authentication */
    authorization: string;
    body?: PublicationsSubscriptionsBulkActionsRequest;
  };

  export class PatchError extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"error3", Error>
      | Declared<"error4", Error>
      | Declared<"error5", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<PatchError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 404, kind: "error3", decode: { kind: "json", schema: errorSchema } },
      { on: 429, kind: "error4", decode: { kind: "json", schema: errorSchema } },
      { on: 500, kind: "error5", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type PatchStatusRequest = {
    /** The prefixed ID of the publication object */
    publicationId: string;
    /** Bearer authentication */
    authorization: string;
    body?: PublicationsSubscriptionsRequest;
  };

  export type PutRequest = {
    /** The prefixed ID of the publication object */
    publicationId: string;
    /** Bearer authentication */
    authorization: string;
    body?: PublicationsSubscriptionsBulkActionsRequest;
  };

  export class PutError extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"error3", Error>
      | Declared<"error4", Error>
      | Declared<"error5", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<PutError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 404, kind: "error3", decode: { kind: "json", schema: errorSchema } },
      { on: 429, kind: "error4", decode: { kind: "json", schema: errorSchema } },
      { on: 500, kind: "error5", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type PutStatusRequest = {
    /** The prefixed ID of the publication object */
    publicationId: string;
    /** Bearer authentication */
    authorization: string;
    body?: PublicationsSubscriptionsRequest;
  };

  export type Show4Request = {
    /** The prefixed ID of the publication object */
    publicationId: string;
    /** The ID of the Subscription Update object */
    id: string;
    /** Bearer authentication */
    authorization: string;
  };

  export class Show4Error extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"error3", Error>
      | Declared<"error4", Error>
      | Declared<"error5", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<Show4Error> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 404, kind: "error3", decode: { kind: "json", schema: errorSchema } },
      { on: 429, kind: "error4", decode: { kind: "json", schema: errorSchema } },
      { on: 500, kind: "error5", decode: { kind: "json", schema: errorSchema } },
    ];
  }
}
