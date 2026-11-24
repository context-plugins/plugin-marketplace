import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { anyAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { errorSchema, type Error } from "../models/error.js";
import { subscriptionInternalSchema, type Subscription } from "../models/subscription.js";
import {
  subscriptionsCancelRequestSchema,
  type SubscriptionsCancelRequest,
} from "../models/subscriptions-cancel-request.js";
import {
  subscriptionsPauseRequestSchema,
  type SubscriptionsPauseRequest,
} from "../models/subscriptions-pause-request.js";
import {
  subscriptionsRequestInternalSchema,
  type SubscriptionsRequest,
} from "../models/subscriptions-request.js";
import {
  subscriptionsRequest1InternalSchema,
  type SubscriptionsRequest1,
} from "../models/subscriptions-request1.js";
import {
  subscriptionsResponseInternalSchema,
  type SubscriptionsResponse,
} from "../models/subscriptions-response.js";
import {
  subscriptionsResumeRequestSchema,
  type SubscriptionsResumeRequest,
} from "../models/subscriptions-resume-request.js";
import {
  subscriptionsRetrieveScheduledChangesResponseSchema,
  type SubscriptionsRetrieveScheduledChangesResponse,
} from "../models/subscriptions-retrieve-scheduled-changes-response.js";
import type { Servers } from "../servers.js";

/**
 * Recurring billing subscriptions. Customers must authorize a payment mandate (UPI Autopay, NACH,
 * or card-on-file) via the short_url before charges begin. Supports pause/resume, plan changes,
 * add-ons, and indefinite billing cycles.
 */
export class Subscriptions {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Cancel a subscription
   *
   * @remarks
   * Cancel an active or authenticated subscription. Use cancel_at_cycle_end=1 to continue service
   * until the end of the current cycle before cancelling.
   *
   * @returns Subscription cancelled.
   *
   * @throws {@link Subscriptions.CancelSubscriptionError} when the API answers with an error status
   * — narrow on `err.payload.kind`
   *
   * @throws {@link CurlecError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  cancelSubscription(
    request: Subscriptions.CancelSubscriptionRequest,
    options?: RequestOptions,
  ): ApiPromise<Subscription, Subscriptions.CancelSubscriptionError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/subscriptions/{id}/cancel"),
        auth: anyAuth(
          this.#auth.basicAuth,
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials.forScopes("read_only"),
        ),
        pathParams: [{ name: "id", value: request.id, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => subscriptionsCancelRequestSchema)),
        },
      },
      {
        success: { kind: "json", schema: subscriptionInternalSchema },
        errorFactory: Subscriptions.CancelSubscriptionError,
      },
      options,
    );
  }

  /**
   * Cancel scheduled changes
   *
   * @remarks
   * Cancel any pending plan or quantity changes that were scheduled for the next billing cycle.
   *
   * @returns Scheduled changes cancelled.
   *
   * @throws {@link Subscriptions.CancelSubscriptionScheduledChangesError} when the API answers with
   * an error status — narrow on `err.payload.kind`
   *
   * @throws {@link CurlecError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  cancelSubscriptionScheduledChanges(
    request: Subscriptions.CancelSubscriptionScheduledChangesRequest,
    options?: RequestOptions,
  ): ApiPromise<Subscription, Subscriptions.CancelSubscriptionScheduledChangesError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/subscriptions/{id}/cancel_scheduled_changes"),
        auth: anyAuth(
          this.#auth.basicAuth,
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials.forScopes("read_only"),
        ),
        pathParams: [{ name: "id", value: request.id, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: subscriptionInternalSchema },
        errorFactory: Subscriptions.CancelSubscriptionScheduledChangesError,
      },
      options,
    );
  }

  /**
   * Create a subscription
   *
   * @remarks
   * Subscribe a customer to a plan. Returns a short_url that the customer MUST open to authorize
   * the payment mandate (UPI Autopay, NACH, or card-on-file). The subscription will not charge
   * until the mandate is authorized. Set notify_info to send the auth link via SMS/email
   * automatically. Requires Subscriptions feature enabled on your Razorpay account.
   *
   * @returns Subscription created. Send short_url to the customer for mandate authorization.
   *
   * @throws {@link Subscriptions.CreateSubscriptionError} when the API answers with an error status
   * — narrow on `err.payload.kind`
   *
   * @throws {@link CurlecError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  createSubscription(
    request: Subscriptions.CreateSubscriptionRequest,
    options?: RequestOptions,
  ): ApiPromise<Subscription, Subscriptions.CreateSubscriptionError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/subscriptions"),
        auth: anyAuth(
          this.#auth.basicAuth,
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials.forScopes("read_only"),
        ),
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: subscriptionsRequestInternalSchema },
      },
      {
        success: { kind: "json", schema: subscriptionInternalSchema },
        errorFactory: Subscriptions.CreateSubscriptionError,
      },
      options,
    );
  }

  /**
   * Delete an offer from a subscription
   *
   * @remarks
   * Remove an applied offer/coupon from a subscription. The offer will no longer apply from the
   * next billing cycle.
   *
   * @returns Offer removed from subscription.
   *
   * @throws {@link Subscriptions.DeleteSubscriptionOfferError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link CurlecError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  deleteSubscriptionOffer(
    request: Subscriptions.DeleteSubscriptionOfferRequest,
    options?: RequestOptions,
  ): ApiPromise<Record<string, unknown>, Subscriptions.DeleteSubscriptionOfferError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default("/subscriptions/{sub_id}/{offer_id}"),
        auth: anyAuth(
          this.#auth.basicAuth,
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials.forScopes("read_only"),
        ),
        pathParams: [
          { name: "sub_id", value: request.subId, schema: s.string() },
          { name: "offer_id", value: request.offerId, schema: s.string() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.record(s.string(), s.unknown()) },
        errorFactory: Subscriptions.DeleteSubscriptionOfferError,
      },
      options,
    );
  }

  /**
   * Fetch a subscription
   *
   * @remarks
   * Get current status and full details of a subscription.
   *
   * @returns Subscription details.
   *
   * @throws {@link Subscriptions.FetchSubscriptionError} when the API answers with an error status
   * — narrow on `err.payload.kind`
   *
   * @throws {@link CurlecError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  fetchSubscription(
    request: Subscriptions.FetchSubscriptionRequest,
    options?: RequestOptions,
  ): ApiPromise<Subscription, Subscriptions.FetchSubscriptionError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/subscriptions/{id}"),
        auth: anyAuth(
          this.#auth.basicAuth,
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials.forScopes("read_only"),
        ),
        pathParams: [{ name: "id", value: request.id, schema: s.string() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: subscriptionInternalSchema },
        errorFactory: Subscriptions.FetchSubscriptionError,
      },
      options,
    );
  }

  /**
   * Fetch scheduled changes
   *
   * @remarks
   * Retrieve any pending plan or quantity changes scheduled for the next billing cycle.
   *
   * @returns Scheduled changes for the subscription.
   *
   * @throws {@link Subscriptions.FetchSubscriptionScheduledChangesError} when the API answers with
   * an error status — narrow on `err.payload.kind`
   *
   * @throws {@link CurlecError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  fetchSubscriptionScheduledChanges(
    request: Subscriptions.FetchSubscriptionScheduledChangesRequest,
    options?: RequestOptions,
  ): ApiPromise<
    SubscriptionsRetrieveScheduledChangesResponse,
    Subscriptions.FetchSubscriptionScheduledChangesError
  > {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/subscriptions/{id}/retrieve_scheduled_changes"),
        auth: anyAuth(
          this.#auth.basicAuth,
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials.forScopes("read_only"),
        ),
        pathParams: [{ name: "id", value: request.id, schema: s.string() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: subscriptionsRetrieveScheduledChangesResponseSchema },
        errorFactory: Subscriptions.FetchSubscriptionScheduledChangesError,
      },
      options,
    );
  }

  /**
   * List all subscriptions
   *
   * @remarks
   * Retrieve all subscriptions. Filter by plan_id or status. Returns up to 100 per call.
   *
   * @returns Collection of subscriptions.
   *
   * @throws {@link Subscriptions.ListSubscriptionsError} when the API answers with an error status
   * — narrow on `err.payload.kind`
   *
   * @throws {@link CurlecError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listSubscriptions(
    request: Subscriptions.ListSubscriptionsRequest = {},
    options?: RequestOptions,
  ): ApiPromise<SubscriptionsResponse, Subscriptions.ListSubscriptionsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/subscriptions"),
        auth: anyAuth(
          this.#auth.basicAuth,
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials.forScopes("read_only"),
        ),
        pathParams: [],
        query: [
          { name: "plan_id", value: request.planId, schema: s.optional(s.string()) },
          { name: "from", value: request.from, schema: s.optional(s.int()) },
          { name: "to", value: request.to, schema: s.optional(s.int()) },
          { name: "count", value: request.count, schema: s.defaulted(s.int(), 10) },
          { name: "skip", value: request.skip, schema: s.defaulted(s.int(), 0) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: subscriptionsResponseInternalSchema },
        errorFactory: Subscriptions.ListSubscriptionsError,
      },
      options,
    );
  }

  /**
   * Pause a subscription
   *
   * @remarks
   * Pause an active subscription. No charges will be attempted while paused. Resume with POST
   * /subscriptions/{id}/resume.
   *
   * @returns Subscription paused.
   *
   * @throws {@link Subscriptions.PauseSubscriptionError} when the API answers with an error status
   * — narrow on `err.payload.kind`
   *
   * @throws {@link CurlecError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  pauseSubscription(
    request: Subscriptions.PauseSubscriptionRequest,
    options?: RequestOptions,
  ): ApiPromise<Subscription, Subscriptions.PauseSubscriptionError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/subscriptions/{id}/pause"),
        auth: anyAuth(
          this.#auth.basicAuth,
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials.forScopes("read_only"),
        ),
        pathParams: [{ name: "id", value: request.id, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => subscriptionsPauseRequestSchema)),
        },
      },
      {
        success: { kind: "json", schema: subscriptionInternalSchema },
        errorFactory: Subscriptions.PauseSubscriptionError,
      },
      options,
    );
  }

  /**
   * Resume a paused subscription
   *
   * @remarks
   * Resume a paused subscription. Charging resumes on the next scheduled cycle.
   *
   * @returns Subscription resumed.
   *
   * @throws {@link Subscriptions.ResumeSubscriptionError} when the API answers with an error status
   * — narrow on `err.payload.kind`
   *
   * @throws {@link CurlecError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  resumeSubscription(
    request: Subscriptions.ResumeSubscriptionRequest,
    options?: RequestOptions,
  ): ApiPromise<Subscription, Subscriptions.ResumeSubscriptionError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/subscriptions/{id}/resume"),
        auth: anyAuth(
          this.#auth.basicAuth,
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials.forScopes("read_only"),
        ),
        pathParams: [{ name: "id", value: request.id, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => subscriptionsResumeRequestSchema)),
        },
      },
      {
        success: { kind: "json", schema: subscriptionInternalSchema },
        errorFactory: Subscriptions.ResumeSubscriptionError,
      },
      options,
    );
  }

  /**
   * Update a subscription
   *
   * @remarks
   * Update plan, quantity, or schedule future changes for a subscription. Use
   * schedule_change_at='now' for immediate effect (creates a new billing cycle) or 'cycle_end' to
   * defer until the current cycle ends. Cannot change plan mid-cycle without creating a new cycle.
   *
   * @returns Subscription updated.
   *
   * @throws {@link Subscriptions.UpdateSubscriptionError} when the API answers with an error status
   * — narrow on `err.payload.kind`
   *
   * @throws {@link CurlecError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  updateSubscription(
    request: Subscriptions.UpdateSubscriptionRequest,
    options?: RequestOptions,
  ): ApiPromise<Subscription, Subscriptions.UpdateSubscriptionError> {
    return this.#rawClient.execute(
      {
        method: "PATCH",
        urlTemplate: this.#servers.default("/subscriptions/{id}"),
        auth: anyAuth(
          this.#auth.basicAuth,
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials.forScopes("read_only"),
        ),
        pathParams: [{ name: "id", value: request.id, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: subscriptionsRequest1InternalSchema },
      },
      {
        success: { kind: "json", schema: subscriptionInternalSchema },
        errorFactory: Subscriptions.UpdateSubscriptionError,
      },
      options,
    );
  }
}

export namespace Subscriptions {
  export type CancelSubscriptionRequest = {
    /** Subscription ID (sub_*). */
    id: string;
    body?: SubscriptionsCancelRequest;
  };

  export class CancelSubscriptionError extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"error3", Error>
      | Declared<"error4", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<CancelSubscriptionError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 404, kind: "error3", decode: { kind: "json", schema: errorSchema } },
      { on: 429, kind: "error4", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type CancelSubscriptionScheduledChangesRequest = {
    /** Subscription ID (sub_*). */
    id: string;
  };

  export class CancelSubscriptionScheduledChangesError extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"error3", Error>
      | Declared<"error4", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<CancelSubscriptionScheduledChangesError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 404, kind: "error3", decode: { kind: "json", schema: errorSchema } },
      { on: 429, kind: "error4", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type CreateSubscriptionRequest = {
    body: SubscriptionsRequest;
  };

  export class CreateSubscriptionError extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"error3", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<CreateSubscriptionError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 429, kind: "error3", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type DeleteSubscriptionOfferRequest = {
    /** Subscription ID (sub_*). */
    subId: string;
    /** Offer ID to remove. */
    offerId: string;
  };

  export class DeleteSubscriptionOfferError extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"error3", Error>
      | Declared<"error4", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<DeleteSubscriptionOfferError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 404, kind: "error3", decode: { kind: "json", schema: errorSchema } },
      { on: 429, kind: "error4", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type FetchSubscriptionRequest = {
    /** Subscription ID (sub_*). */
    id: string;
  };

  export class FetchSubscriptionError extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"error3", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<FetchSubscriptionError> = [
      { on: 401, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 404, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 429, kind: "error3", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type FetchSubscriptionScheduledChangesRequest = {
    /** Subscription ID (sub_*). */
    id: string;
  };

  export class FetchSubscriptionScheduledChangesError extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"error3", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<FetchSubscriptionScheduledChangesError> = [
      { on: 401, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 404, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 429, kind: "error3", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type ListSubscriptionsRequest = {
    /** Filter by plan ID. */
    planId?: string;
    /** Unix timestamp (seconds). Fetch records created on or after this time. */
    from?: number;
    /** Unix timestamp (seconds). Fetch records created on or before this time. */
    to?: number;
    /** Number of records to return per call. Maximum 100. Default 10. @default 10 */
    count?: number;
    /** Number of records to skip. Use with count for pagination. Default 0. @default 0 */
    skip?: number;
  };

  export const listSubscriptionsRequestSchema: Schema<ListSubscriptionsRequest> = s.lazySchema(() =>
    s.object<ListSubscriptionsRequest>({
      planId: s.optional(s.string()),
      from: s.optional(s.int()),
      to: s.optional(s.int()),
      count: s.defaulted(s.int().check(s.gte(1), s.lte(100)), 10),
      skip: s.defaulted(s.int().check(s.gte(0)), 0),
    }),
  );

  export class ListSubscriptionsError extends ApiError {
    declare readonly payload: Declared<"error", Error> | Declared<"error2", Error> | Undeclared;

    static readonly errors: ErrorDecoders<ListSubscriptionsError> = [
      { on: 401, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 429, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type PauseSubscriptionRequest = {
    /** Subscription ID (sub_*). */
    id: string;
    body?: SubscriptionsPauseRequest;
  };

  export class PauseSubscriptionError extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"error3", Error>
      | Declared<"error4", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<PauseSubscriptionError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 404, kind: "error3", decode: { kind: "json", schema: errorSchema } },
      { on: 429, kind: "error4", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type ResumeSubscriptionRequest = {
    /** Subscription ID (sub_*). */
    id: string;
    body?: SubscriptionsResumeRequest;
  };

  export class ResumeSubscriptionError extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"error3", Error>
      | Declared<"error4", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<ResumeSubscriptionError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 404, kind: "error3", decode: { kind: "json", schema: errorSchema } },
      { on: 429, kind: "error4", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type UpdateSubscriptionRequest = {
    /** Subscription ID (sub_*). */
    id: string;
    body: SubscriptionsRequest1;
  };

  export class UpdateSubscriptionError extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"error3", Error>
      | Declared<"error4", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<UpdateSubscriptionError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 404, kind: "error3", decode: { kind: "json", schema: errorSchema } },
      { on: 429, kind: "error4", decode: { kind: "json", schema: errorSchema } },
    ];
  }
}
