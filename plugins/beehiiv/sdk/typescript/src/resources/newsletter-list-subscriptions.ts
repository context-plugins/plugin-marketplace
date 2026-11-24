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
  newsletterListSubscriptionIndexResponseSchema,
  type NewsletterListSubscriptionIndexResponse,
} from "../models/newsletter-list-subscription-index-response.js";
import {
  newsletterListSubscriptionResponseSchema,
  type NewsletterListSubscriptionResponse,
} from "../models/newsletter-list-subscription-response.js";
import {
  publicationsNewsletterListsSubscriptionsBySubscriptionIdSubscriptionIdRequestSchema,
  type PublicationsNewsletterListsSubscriptionsBySubscriptionIdSubscriptionIdRequest,
} from "../models/publications-newsletter-lists-subscriptions-by-subscription-id-subscription-id-request.js";
import {
  publicationsNewsletterListsSubscriptionsNewsletterListSubscriptionIdRequestSchema,
  type PublicationsNewsletterListsSubscriptionsNewsletterListSubscriptionIdRequest,
} from "../models/publications-newsletter-lists-subscriptions-newsletter-list-subscription-id-request.js";
import {
  publicationsNewsletterListsSubscriptionsRequestSchema,
  type PublicationsNewsletterListsSubscriptionsRequest,
} from "../models/publications-newsletter-lists-subscriptions-request.js";
import { RequestDirection, requestDirectionSchema } from "../models/request-direction.js";
import type { Servers } from "../servers.js";

export class NewsletterListSubscriptions {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;

  constructor(rawClient: RawClient, servers: Servers) {
    this.#rawClient = rawClient;
    this.#servers = servers;
  }

  /**
   * Create newsletter list subscription OAuth Scope: newsletter_lists:write
   *
   * @remarks
   * Subscribe a subscription to a newsletter list. Accepts either a subscription_id or email to
   * identify the subscription.
   *
   * This endpoint only enrolls **existing** subscriptions. To create a new subscription **and**
   * enroll it in one or more newsletter lists in a single call, use the Create subscription
   * endpoint and pass the `newsletter_list_ids` parameter.
   *
   * @returns Created
   *
   * @throws {@link NewsletterListSubscriptions.Create6Error} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link BeehiivError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  create6(
    request: NewsletterListSubscriptions.Create6Request,
    options?: RequestOptions,
  ): ApiPromise<NewsletterListSubscriptionResponse, NewsletterListSubscriptions.Create6Error> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default(
          "/publications/{publicationId}/newsletter_lists/{newsletterListId}/subscriptions",
        ),
        auth: noneAuth,
        pathParams: [
          { name: "publicationId", value: request.publicationId, schema: s.string() },
          { name: "newsletterListId", value: request.newsletterListId, schema: s.string() },
        ],
        query: [],
        headers: [
          { name: "Authorization", value: request.authorization, schema: s.string() },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => publicationsNewsletterListsSubscriptionsRequestSchema)),
        },
      },
      {
        success: { kind: "json", schema: newsletterListSubscriptionResponseSchema },
        errorFactory: NewsletterListSubscriptions.Create6Error,
      },
      options,
    );
  }

  /**
   * List newsletter list subscriptions OAuth Scope: newsletter_lists:read
   *
   * @remarks
   * List all subscriptions for a newsletter list.
   *
   * @returns OK
   *
   * @throws {@link NewsletterListSubscriptions.Index13Error} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link BeehiivError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  index13(
    request: NewsletterListSubscriptions.Index13Request,
    options?: RequestOptions,
  ): ApiPromise<NewsletterListSubscriptionIndexResponse, NewsletterListSubscriptions.Index13Error> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default(
          "/publications/{publicationId}/newsletter_lists/{newsletterListId}/subscriptions",
        ),
        auth: noneAuth,
        pathParams: [
          { name: "publicationId", value: request.publicationId, schema: s.string() },
          { name: "newsletterListId", value: request.newsletterListId, schema: s.string() },
        ],
        query: [
          { name: "limit", value: request.limit, schema: s.optional(s.int()) },
          { name: "cursor", value: request.cursor, schema: s.optional(s.string()) },
          { name: "page", value: request.page, schema: s.optional(s.int()) },
          {
            name: "direction",
            value: request.direction,
            schema: s.defaulted(requestDirectionSchema, RequestDirection.Asc),
          },
        ],
        headers: [{ name: "Authorization", value: request.authorization, schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: newsletterListSubscriptionIndexResponseSchema },
        errorFactory: NewsletterListSubscriptions.Index13Error,
      },
      options,
    );
  }

  /**
   * Get newsletter list subscription OAuth Scope: newsletter_lists:read
   *
   * @remarks
   * Retrieve a single newsletter list subscription.
   *
   * @returns OK
   *
   * @throws {@link NewsletterListSubscriptions.Show9Error} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link BeehiivError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  show9(
    request: NewsletterListSubscriptions.Show9Request,
    options?: RequestOptions,
  ): ApiPromise<NewsletterListSubscriptionResponse, NewsletterListSubscriptions.Show9Error> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default(
          "/publications/{publicationId}/newsletter_lists/{newsletterListId}/subscriptions/{newsletterListSubscriptionId}",
        ),
        auth: noneAuth,
        pathParams: [
          { name: "publicationId", value: request.publicationId, schema: s.string() },
          { name: "newsletterListId", value: request.newsletterListId, schema: s.string() },
          {
            name: "newsletterListSubscriptionId",
            value: request.newsletterListSubscriptionId,
            schema: s.string(),
          },
        ],
        query: [],
        headers: [{ name: "Authorization", value: request.authorization, schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: newsletterListSubscriptionResponseSchema },
        errorFactory: NewsletterListSubscriptions.Show9Error,
      },
      options,
    );
  }

  /**
   * Update newsletter list subscription OAuth Scope: newsletter_lists:write
   *
   * @remarks
   * Update a newsletter list subscription. Currently supports unsubscribing a subscription from a
   * newsletter list.
   *
   * @returns OK
   *
   * @throws {@link NewsletterListSubscriptions.UpdateError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link BeehiivError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  update(
    request: NewsletterListSubscriptions.UpdateRequest,
    options?: RequestOptions,
  ): ApiPromise<NewsletterListSubscriptionResponse, NewsletterListSubscriptions.UpdateError> {
    return this.#rawClient.execute(
      {
        method: "PATCH",
        urlTemplate: this.#servers.default(
          "/publications/{publicationId}/newsletter_lists/{newsletterListId}/subscriptions/{newsletterListSubscriptionId}",
        ),
        auth: noneAuth,
        pathParams: [
          { name: "publicationId", value: request.publicationId, schema: s.string() },
          { name: "newsletterListId", value: request.newsletterListId, schema: s.string() },
          {
            name: "newsletterListSubscriptionId",
            value: request.newsletterListSubscriptionId,
            schema: s.string(),
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
          schema: s.optional(
            s.lazy(() => publicationsNewsletterListsSubscriptionsNewsletterListSubscriptionIdRequestSchema),
          ),
        },
      },
      {
        success: { kind: "json", schema: newsletterListSubscriptionResponseSchema },
        errorFactory: NewsletterListSubscriptions.UpdateError,
      },
      options,
    );
  }

  /**
   * Update newsletter list subscription by subscription ID OAuth Scope…
   *
   * @remarks
   * Update a newsletter list subscription by subscription ID. An alternative to the update endpoint
   * when you don't have the newsletter list subscription ID. Accepts either a subscription_id or
   * email to identify the subscription. Currently supports unsubscribing a subscription from a
   * newsletter list.
   *
   * @returns OK
   *
   * @throws {@link NewsletterListSubscriptions.UpdateBySubscriptionIdError} when the API answers
   * with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link BeehiivError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  updateBySubscriptionId(
    request: NewsletterListSubscriptions.UpdateBySubscriptionIdRequest,
    options?: RequestOptions,
  ): ApiPromise<NewsletterListSubscriptionResponse, NewsletterListSubscriptions.UpdateBySubscriptionIdError> {
    return this.#rawClient.execute(
      {
        method: "PATCH",
        urlTemplate: this.#servers.default(
          "/publications/{publicationId}/newsletter_lists/{newsletterListId}/subscriptions/by_subscription_id/{subscriptionId}",
        ),
        auth: noneAuth,
        pathParams: [
          { name: "publicationId", value: request.publicationId, schema: s.string() },
          { name: "newsletterListId", value: request.newsletterListId, schema: s.string() },
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
          schema: s.optional(
            s.lazy(() => publicationsNewsletterListsSubscriptionsBySubscriptionIdSubscriptionIdRequestSchema),
          ),
        },
      },
      {
        success: { kind: "json", schema: newsletterListSubscriptionResponseSchema },
        errorFactory: NewsletterListSubscriptions.UpdateBySubscriptionIdError,
      },
      options,
    );
  }
}

export namespace NewsletterListSubscriptions {
  export type Create6Request = {
    /** The prefixed ID of the publication object */
    publicationId: string;
    /** The prefixed ID of the newsletter list object */
    newsletterListId: string;
    /** Bearer authentication */
    authorization: string;
    body?: PublicationsNewsletterListsSubscriptionsRequest;
  };

  export class Create6Error extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"error3", Error>
      | Declared<"error4", Error>
      | Declared<"error5", Error>
      | Declared<"error6", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<Create6Error> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 404, kind: "error3", decode: { kind: "json", schema: errorSchema } },
      { on: 422, kind: "error4", decode: { kind: "json", schema: errorSchema } },
      { on: 429, kind: "error5", decode: { kind: "json", schema: errorSchema } },
      { on: 500, kind: "error6", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type Index13Request = {
    /** The prefixed ID of the publication object */
    publicationId: string;
    /** The prefixed ID of the newsletter list object */
    newsletterListId: string;
    /**
     * A limit on the number of objects to be returned. The limit can range between 1 and 100, and
     * the default is 10.
     */
    limit?: number;
    /**
     * **Cursor-based pagination (recommended)**: Use this opaque cursor token to fetch the next
     * page of results. When provided, pagination will use cursor-based method which is more
     * efficient and consistent than offset-based pagination.
     */
    cursor?: string;
    /**
     * **Offset-based pagination (deprecated)**: Page number for offset-based pagination. Please
     * migrate to cursor-based pagination using the `cursor` parameter. If not specified, results
     * 1-10 from page 1 will be returned.
     */
    page?: number;
    /**
     * The direction that the results are sorted in. Defaults to asc<br> `asc` - Ascending, sorts
     * from smallest to largest.<br> `desc` - Descending, sorts from largest to smallest.
     *
     * @default RequestDirection.Asc
     */
    direction?: RequestDirection;
    /** Bearer authentication */
    authorization: string;
  };

  export class Index13Error extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"error3", Error>
      | Declared<"error4", Error>
      | Declared<"error5", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<Index13Error> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 404, kind: "error3", decode: { kind: "json", schema: errorSchema } },
      { on: 429, kind: "error4", decode: { kind: "json", schema: errorSchema } },
      { on: 500, kind: "error5", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type Show9Request = {
    /** The prefixed ID of the publication object */
    publicationId: string;
    /** The prefixed ID of the newsletter list object */
    newsletterListId: string;
    /** The prefixed ID of the newsletter list subscription object */
    newsletterListSubscriptionId: string;
    /** Bearer authentication */
    authorization: string;
  };

  export class Show9Error extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"error3", Error>
      | Declared<"error4", Error>
      | Declared<"error5", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<Show9Error> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 404, kind: "error3", decode: { kind: "json", schema: errorSchema } },
      { on: 429, kind: "error4", decode: { kind: "json", schema: errorSchema } },
      { on: 500, kind: "error5", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type UpdateRequest = {
    /** The prefixed ID of the publication object */
    publicationId: string;
    /** The prefixed ID of the newsletter list object */
    newsletterListId: string;
    /** The prefixed ID of the newsletter list subscription object */
    newsletterListSubscriptionId: string;
    /** Bearer authentication */
    authorization: string;
    body?: PublicationsNewsletterListsSubscriptionsNewsletterListSubscriptionIdRequest;
  };

  export class UpdateError extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"error3", Error>
      | Declared<"error4", Error>
      | Declared<"error5", Error>
      | Declared<"error6", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<UpdateError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 404, kind: "error3", decode: { kind: "json", schema: errorSchema } },
      { on: 422, kind: "error4", decode: { kind: "json", schema: errorSchema } },
      { on: 429, kind: "error5", decode: { kind: "json", schema: errorSchema } },
      { on: 500, kind: "error6", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type UpdateBySubscriptionIdRequest = {
    /** The prefixed ID of the publication object */
    publicationId: string;
    /** The prefixed ID of the newsletter list object */
    newsletterListId: string;
    /** The prefixed ID of the subscription */
    subscriptionId: string;
    /** Bearer authentication */
    authorization: string;
    body?: PublicationsNewsletterListsSubscriptionsBySubscriptionIdSubscriptionIdRequest;
  };

  export class UpdateBySubscriptionIdError extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"error3", Error>
      | Declared<"error4", Error>
      | Declared<"error5", Error>
      | Declared<"error6", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<UpdateBySubscriptionIdError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 404, kind: "error3", decode: { kind: "json", schema: errorSchema } },
      { on: 422, kind: "error4", decode: { kind: "json", schema: errorSchema } },
      { on: 429, kind: "error5", decode: { kind: "json", schema: errorSchema } },
      { on: 500, kind: "error6", decode: { kind: "json", schema: errorSchema } },
    ];
  }
}
