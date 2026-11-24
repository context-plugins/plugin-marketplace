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
  publicationsSubscriptionsByEmailRequestSchema,
  type PublicationsSubscriptionsByEmailRequest,
} from "../models/publications-subscriptions-by-email-request.js";
import {
  publicationsSubscriptionsRequestReferenceSubscriptionsApiSchema,
  type PublicationsSubscriptionsRequestReferenceSubscriptionsApi,
} from "../models/publications-subscriptions-request-reference-subscriptions-api.js";
import {
  publicationsSubscriptionsRequest1Schema,
  type PublicationsSubscriptionsRequest1,
} from "../models/publications-subscriptions-request1.js";
import { RequestDirection, requestDirectionSchema } from "../models/request-direction.js";
import {
  subscriptionDeleteResponseSchema,
  type SubscriptionDeleteResponse,
} from "../models/subscription-delete-response.js";
import { subscriptionRequestSchema, type SubscriptionRequest } from "../models/subscription-request.js";
import {
  subscriptionResponseInternalSchema,
  type SubscriptionResponse,
} from "../models/subscription-response.js";
import {
  subscriptionsGetRequestExpandItemSchema,
  type SubscriptionsGetRequestExpandItem,
} from "../models/subscriptions-get-request-expand-item.js";
import {
  subscriptionsListRequestExpandItemSchema,
  type SubscriptionsListRequestExpandItem,
} from "../models/subscriptions-list-request-expand-item.js";
import {
  SubscriptionsListRequestOrderBy,
  subscriptionsListRequestOrderBySchema,
} from "../models/subscriptions-list-request-order-by.js";
import {
  SubscriptionsListRequestStatus,
  subscriptionsListRequestStatusSchema,
} from "../models/subscriptions-list-request-status.js";
import {
  SubscriptionsListRequestTier,
  subscriptionsListRequestTierSchema,
} from "../models/subscriptions-list-request-tier.js";
import {
  subscriptionsListResponseInternalSchema,
  type SubscriptionsListResponse,
} from "../models/subscriptions-list-response.js";
import type { Servers } from "../servers.js";

export class Subscriptions {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;

  constructor(rawClient: RawClient, servers: Servers) {
    this.#rawClient = rawClient;
    this.#servers = servers;
  }

  /**
   * Create subscription OAuth Scope: subscriptions:write
   *
   * @remarks
   * Create new subscriptions for a publication.
   *
   * @returns Subscription created
   *
   * @throws {@link Subscriptions.Create11Error} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link BeehiivError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  create11(
    request: Subscriptions.Create11Request,
    options?: RequestOptions,
  ): ApiPromise<SubscriptionResponse, Subscriptions.Create11Error> {
    return this.#rawClient.execute(
      {
        method: "POST",
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
          schema: s.optional(s.lazy(() => subscriptionRequestSchema)),
        },
      },
      {
        success: { kind: "json", schema: subscriptionResponseInternalSchema },
        errorFactory: Subscriptions.Create11Error,
      },
      options,
    );
  }

  /**
   * Delete subscription OAuth Scope: subscriptions:write
   *
   * @remarks
   * This cannot be undone. All data associated with the subscription will also be deleted. We
   * recommend unsubscribing when possible instead of deleting. If a premium subscription is deleted
   * they will no longer be billed. Deletes a subscription.
   *
   * @returns No Content
   *
   * @throws {@link Subscriptions.Delete5Error} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link BeehiivError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  delete5(
    request: Subscriptions.Delete5Request,
    options?: RequestOptions,
  ): ApiPromise<SubscriptionDeleteResponse, Subscriptions.Delete5Error> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default("/publications/{publicationId}/subscriptions/{subscriptionId}"),
        auth: noneAuth,
        pathParams: [
          { name: "publicationId", value: request.publicationId, schema: s.string() },
          { name: "subscriptionId", value: request.subscriptionId, schema: s.string() },
        ],
        query: [],
        headers: [
          { name: "Authorization", value: request.authorization, schema: s.string() },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: subscriptionDeleteResponseSchema },
        errorFactory: Subscriptions.Delete5Error,
      },
      options,
    );
  }

  /**
   * Get subscription by email OAuth Scope: subscriptions:read
   *
   * @remarks
   * Please note that this endpoint requires the email to be URL encoded. Please reference your
   * language's documentation for the correct method of encoding. Retrieve a single subscription
   * belonging to a specific email address in a specific publication.
   *
   * @returns OK
   *
   * @throws {@link Subscriptions.GetByEmailError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link BeehiivError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getByEmail(
    request: Subscriptions.GetByEmailRequest,
    options?: RequestOptions,
  ): ApiPromise<SubscriptionResponse, Subscriptions.GetByEmailError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/publications/{publicationId}/subscriptions/by_email/{email}"),
        auth: noneAuth,
        pathParams: [
          { name: "publicationId", value: request.publicationId, schema: s.string() },
          { name: "email", value: request.email, schema: s.string() },
        ],
        query: [
          {
            name: "expand[]",
            value: request.expand,
            schema: s.optional(s.lazy(() => subscriptionsGetRequestExpandItemSchema)),
          },
        ],
        headers: [{ name: "Authorization", value: request.authorization, schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: subscriptionResponseInternalSchema },
        errorFactory: Subscriptions.GetByEmailError,
      },
      options,
    );
  }

  /**
   * Get subscription by ID OAuth Scope: subscriptions:read
   *
   * @remarks
   * In previous versions of the API, another endpoint existed to retrieve a subscription by the
   * subscriber ID. This endpoint is now deprecated and will be removed in a future version of the
   * API. Please use this endpoint instead. The subscription ID can be found by exporting a list of
   * subscriptions either via the `Settings > Publications > Export Data` or by exporting a CSV in a
   * segment. Retrieve a single subscription belonging to a specific publication.
   *
   * @returns OK
   *
   * @throws {@link Subscriptions.GetByIdError} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link BeehiivError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getById(
    request: Subscriptions.GetByIdRequest,
    options?: RequestOptions,
  ): ApiPromise<SubscriptionResponse, Subscriptions.GetByIdError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/publications/{publicationId}/subscriptions/{subscriptionId}"),
        auth: noneAuth,
        pathParams: [
          { name: "publicationId", value: request.publicationId, schema: s.string() },
          { name: "subscriptionId", value: request.subscriptionId, schema: s.string() },
        ],
        query: [
          {
            name: "expand[]",
            value: request.expand,
            schema: s.optional(s.lazy(() => subscriptionsGetRequestExpandItemSchema)),
          },
        ],
        headers: [{ name: "Authorization", value: request.authorization, schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: subscriptionResponseInternalSchema },
        errorFactory: Subscriptions.GetByIdError,
      },
      options,
    );
  }

  /**
   * List subscriptions OAuth Scope: subscriptions:read
   *
   * @remarks
   * Retrieve all subscriptions belonging to a specific publication.
   *
   * **New**: This endpoint now supports cursor-based pagination for better performance and
   * consistency. Use the `cursor` parameter instead of `page` for new integrations. **Deprecation
   * Notice**: Offset-based pagination (using `page` parameter) is deprecated and limited to 100
   * pages maximum. Please migrate to cursor-based pagination. See our Pagination Guide for details.
   *
   * @returns OK
   *
   * @throws {@link Subscriptions.Index20Error} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link BeehiivError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  index20(
    request: Subscriptions.Index20Request,
    options?: RequestOptions,
  ): ApiPromise<SubscriptionsListResponse, Subscriptions.Index20Error> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/publications/{publicationId}/subscriptions"),
        auth: noneAuth,
        pathParams: [{ name: "publicationId", value: request.publicationId, schema: s.string() }],
        query: [
          {
            name: "expand[]",
            value: request.expand,
            schema: s.optional(s.lazy(() => subscriptionsListRequestExpandItemSchema)),
          },
          {
            name: "status",
            value: request.status,
            schema: s.defaulted(subscriptionsListRequestStatusSchema, SubscriptionsListRequestStatus.All),
          },
          {
            name: "tier",
            value: request.tier,
            schema: s.defaulted(subscriptionsListRequestTierSchema, SubscriptionsListRequestTier.All),
          },
          { name: "premium_tiers[]", value: request.premiumTiers, schema: s.optional(s.string()) },
          { name: "premium_tier_ids[]", value: request.premiumTierIds, schema: s.optional(s.string()) },
          { name: "limit", value: request.limit, schema: s.optional(s.int()) },
          { name: "cursor", value: request.cursor, schema: s.optional(s.string()) },
          { name: "page", value: request.page, schema: s.optional(s.int()) },
          { name: "email", value: request.email, schema: s.optional(s.string()) },
          {
            name: "order_by",
            value: request.orderBy,
            schema: s.defaulted(
              subscriptionsListRequestOrderBySchema,
              SubscriptionsListRequestOrderBy.Created,
            ),
          },
          {
            name: "direction",
            value: request.direction,
            schema: s.defaulted(requestDirectionSchema, RequestDirection.Asc),
          },
          { name: "creation_date", value: request.creationDate, schema: s.optional(s.string()) },
        ],
        headers: [{ name: "Authorization", value: request.authorization, schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: subscriptionsListResponseInternalSchema },
        errorFactory: Subscriptions.Index20Error,
      },
      options,
    );
  }

  /**
   * Update subscription by ID OAuth Scope: subscriptions:write
   *
   * @remarks
   * Update a single subscription.
   *
   * @returns OK
   *
   * @throws {@link Subscriptions.Patch3Error} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link BeehiivError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  patch3(
    request: Subscriptions.Patch3Request,
    options?: RequestOptions,
  ): ApiPromise<SubscriptionResponse, Subscriptions.Patch3Error> {
    return this.#rawClient.execute(
      {
        method: "PATCH",
        urlTemplate: this.#servers.default("/publications/{publicationId}/subscriptions/{subscriptionId}"),
        auth: noneAuth,
        pathParams: [
          { name: "publicationId", value: request.publicationId, schema: s.string() },
          { name: "subscriptionId", value: request.subscriptionId, schema: s.string() },
        ],
        query: [],
        headers: [
          { name: "Authorization", value: request.authorization, schema: s.string() },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => publicationsSubscriptionsRequest1Schema)),
        },
      },
      {
        success: { kind: "json", schema: subscriptionResponseInternalSchema },
        errorFactory: Subscriptions.Patch3Error,
      },
      options,
    );
  }

  /**
   * Update subscription by ID OAuth Scope: subscriptions:write
   *
   * @remarks
   * Update a single subscription.
   *
   * @returns OK
   *
   * @throws {@link Subscriptions.Put3Error} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link BeehiivError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  put3(
    request: Subscriptions.Put3Request,
    options?: RequestOptions,
  ): ApiPromise<SubscriptionResponse, Subscriptions.Put3Error> {
    return this.#rawClient.execute(
      {
        method: "PUT",
        urlTemplate: this.#servers.default("/publications/{publicationId}/subscriptions/{subscriptionId}"),
        auth: noneAuth,
        pathParams: [
          { name: "publicationId", value: request.publicationId, schema: s.string() },
          { name: "subscriptionId", value: request.subscriptionId, schema: s.string() },
        ],
        query: [],
        headers: [
          { name: "Authorization", value: request.authorization, schema: s.string() },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => publicationsSubscriptionsRequestReferenceSubscriptionsApiSchema)),
        },
      },
      {
        success: { kind: "json", schema: subscriptionResponseInternalSchema },
        errorFactory: Subscriptions.Put3Error,
      },
      options,
    );
  }

  /**
   * Update subscription by email OAuth Scope: subscriptions:write
   *
   * @remarks
   * Update a single subscription by email.
   *
   * @returns OK
   *
   * @throws {@link Subscriptions.UpdateByEmailError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link BeehiivError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  updateByEmail(
    request: Subscriptions.UpdateByEmailRequest,
    options?: RequestOptions,
  ): ApiPromise<SubscriptionResponse, Subscriptions.UpdateByEmailError> {
    return this.#rawClient.execute(
      {
        method: "PUT",
        urlTemplate: this.#servers.default("/publications/{publicationId}/subscriptions/by_email/{email}"),
        auth: noneAuth,
        pathParams: [
          { name: "publicationId", value: request.publicationId, schema: s.string() },
          { name: "email", value: request.email, schema: s.string() },
        ],
        query: [],
        headers: [
          { name: "Authorization", value: request.authorization, schema: s.string() },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => publicationsSubscriptionsByEmailRequestSchema)),
        },
      },
      {
        success: { kind: "json", schema: subscriptionResponseInternalSchema },
        errorFactory: Subscriptions.UpdateByEmailError,
      },
      options,
    );
  }
}

export namespace Subscriptions {
  export type Create11Request = {
    /** The prefixed ID of the publication object */
    publicationId: string;
    /** Bearer authentication */
    authorization: string;
    body?: SubscriptionRequest;
  };

  export class Create11Error extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"error3", Error>
      | Declared<"error4", Error>
      | Declared<"error5", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<Create11Error> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 404, kind: "error3", decode: { kind: "json", schema: errorSchema } },
      { on: 429, kind: "error4", decode: { kind: "json", schema: errorSchema } },
      { on: 500, kind: "error5", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type Delete5Request = {
    /** The prefixed ID of the publication object */
    publicationId: string;
    /** The prefixed ID of the subscription object */
    subscriptionId: string;
    /** Bearer authentication */
    authorization: string;
  };

  export class Delete5Error extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"error3", Error>
      | Declared<"error4", Error>
      | Declared<"error5", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<Delete5Error> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 404, kind: "error3", decode: { kind: "json", schema: errorSchema } },
      { on: 429, kind: "error4", decode: { kind: "json", schema: errorSchema } },
      { on: 500, kind: "error5", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type GetByEmailRequest = {
    /** The prefixed ID of the publication object */
    publicationId: string;
    /** The ID of the subscriber object */
    email: string;
    /**
     * Optional list of expandable objects.<br>`subscription_premium_tiers ` - Returns an array of
     * tiers the subscription is associated with.<br>`referrals` - Returns an array of subscriptions
     * with limited data - `id`, `email`, and `status`. These are the subscriptions that were
     * referred by this subscription.<br>`stats` - Returns statistics about the
     * subscription(s).<br>`custom_fields` - Returns an array of custom field values that have been
     * set on the subscription. <br>`tags` - Returns an array of tags that have been set on the
     * subscription.<br>`newsletter_lists` - Returns an array of newsletter list prefixed IDs the
     * subscription is actively subscribed to.
     */
    expand?: SubscriptionsGetRequestExpandItem;
    /** Bearer authentication */
    authorization: string;
  };

  export class GetByEmailError extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"error3", Error>
      | Declared<"error4", Error>
      | Declared<"error5", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetByEmailError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 404, kind: "error3", decode: { kind: "json", schema: errorSchema } },
      { on: 429, kind: "error4", decode: { kind: "json", schema: errorSchema } },
      { on: 500, kind: "error5", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type GetByIdRequest = {
    /** The prefixed ID of the publication object */
    publicationId: string;
    /** The prefixed ID of the subscription object */
    subscriptionId: string;
    /**
     * Optional list of expandable objects.<br>`subscription_premium_tiers` - Returns an array of
     * tiers the subscription is associated with.<br>`referrals` - Returns an array of subscriptions
     * with limited data - `id`, `email`, and `status`. These are the subscriptions that were
     * referred by this subscription.<br>`stats` - Returns statistics about the
     * subscription(s).<br>`custom_fields` - Returns an array of custom field values that have been
     * set on the subscription. <br>`tags` - Returns an array of tags that have been set on the
     * subscription.<br>`newsletter_lists` - Returns an array of newsletter list prefixed IDs the
     * subscription is actively subscribed to.
     */
    expand?: SubscriptionsGetRequestExpandItem;
    /** Bearer authentication */
    authorization: string;
  };

  export class GetByIdError extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"error3", Error>
      | Declared<"error4", Error>
      | Declared<"error5", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetByIdError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 404, kind: "error3", decode: { kind: "json", schema: errorSchema } },
      { on: 429, kind: "error4", decode: { kind: "json", schema: errorSchema } },
      { on: 500, kind: "error5", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type Index20Request = {
    /** The prefixed ID of the publication object */
    publicationId: string;
    /**
     * Optional list of expandable objects.<br>`subscription_premium_tiers ` - Returns an array of
     * tiers the subscription is associated with.<br>`referrals` - Returns an array of subscriptions
     * with limited data - `id`, `email`, and `status`. These are the subscriptions that were
     * referred by this subscription.<br>`stats` - Returns statistics about the
     * subscription(s).<br>`custom_fields` - Returns an array of custom field values that have been
     * set on the subscription. <br>`newsletter_lists` - Returns an array of newsletter list
     * prefixed IDs the subscription is actively subscribed to.
     */
    expand?: SubscriptionsListRequestExpandItem;
    /** Optionally filter the results by a status @default SubscriptionsListRequestStatus.All */
    status?: SubscriptionsListRequestStatus;
    /** Optionally filter the results by a their tier @default SubscriptionsListRequestTier.All */
    tier?: SubscriptionsListRequestTier;
    /** Optionally filter the results by one or multiple premium tiers */
    premiumTiers?: string;
    /** Optionally filter the results by one or multiple premium tier ids */
    premiumTierIds?: string;
    /**
     * A limit on the number of objects to be returned. The limit can range between 1 and 100, and
     * the default is 10.
     */
    limit?: number;
    /**
     * **Cursor-based pagination (recommended)**: Use this opaque cursor token to fetch the next
     * page of results. When provided, pagination will use cursor-based method which is more
     * efficient and consistent than offset-based pagination. See the [Pagination
     * Guide](/welcome/pagination) for more details.
     */
    cursor?: string;
    /**
     * **Offset-based pagination (deprecated)**: Page number for offset-based pagination. This
     * method is deprecated and limited to 100 pages maximum. Please migrate to cursor-based
     * pagination using the `cursor` parameter. If not specified, results 1-10 from page 1 will be
     * returned. See the [Pagination Guide](/welcome/pagination) for migration guidance.
     */
    page?: number;
    /**
     * Optional email address to find a subscription.<br>This param must be an exact match and is
     * case insensitive.
     */
    email?: string;
    /**
     * The field that the results are sorted by. Defaults to created<br> `created` - The time in
     * which the subscription was first created.<br>
     *
     * @default SubscriptionsListRequestOrderBy.Created
     */
    orderBy?: SubscriptionsListRequestOrderBy;
    /**
     * The direction that the results are sorted in. Defaults to asc<br> `asc` - Ascending, sorts
     * from smallest to largest.<br> `desc` - Descending, sorts from largest to smallest.
     *
     * @default RequestDirection.Asc
     */
    direction?: RequestDirection;
    /**
     * Optional date entry (in the format YYYY/MM/DD) that filters returned subscriptions by their
     * creation date.
     */
    creationDate?: string;
    /** Bearer authentication */
    authorization: string;
  };

  export class Index20Error extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"error3", Error>
      | Declared<"error4", Error>
      | Declared<"error5", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<Index20Error> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 404, kind: "error3", decode: { kind: "json", schema: errorSchema } },
      { on: 429, kind: "error4", decode: { kind: "json", schema: errorSchema } },
      { on: 500, kind: "error5", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type Patch3Request = {
    /** The prefixed ID of the publication object */
    publicationId: string;
    /** The prefixed ID of the subscription object */
    subscriptionId: string;
    /** Bearer authentication */
    authorization: string;
    body?: PublicationsSubscriptionsRequest1;
  };

  export class Patch3Error extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"error3", Error>
      | Declared<"error4", Error>
      | Declared<"error5", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<Patch3Error> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 404, kind: "error3", decode: { kind: "json", schema: errorSchema } },
      { on: 429, kind: "error4", decode: { kind: "json", schema: errorSchema } },
      { on: 500, kind: "error5", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type Put3Request = {
    /** The prefixed ID of the publication object */
    publicationId: string;
    /** The prefixed ID of the subscription object */
    subscriptionId: string;
    /** Bearer authentication */
    authorization: string;
    body?: PublicationsSubscriptionsRequestReferenceSubscriptionsApi;
  };

  export class Put3Error extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"error3", Error>
      | Declared<"error4", Error>
      | Declared<"error5", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<Put3Error> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 404, kind: "error3", decode: { kind: "json", schema: errorSchema } },
      { on: 429, kind: "error4", decode: { kind: "json", schema: errorSchema } },
      { on: 500, kind: "error5", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type UpdateByEmailRequest = {
    /** The prefixed ID of the publication object */
    publicationId: string;
    /** The email of the subscription object */
    email: string;
    /** Bearer authentication */
    authorization: string;
    body?: PublicationsSubscriptionsByEmailRequest;
  };

  export class UpdateByEmailError extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"error3", Error>
      | Declared<"error4", Error>
      | Declared<"error5", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<UpdateByEmailError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 404, kind: "error3", decode: { kind: "json", schema: errorSchema } },
      { on: 429, kind: "error4", decode: { kind: "json", schema: errorSchema } },
      { on: 500, kind: "error5", decode: { kind: "json", schema: errorSchema } },
    ];
  }
}
