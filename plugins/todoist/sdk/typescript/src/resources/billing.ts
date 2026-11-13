import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  billingPortalUrlResponseInternalSchema,
  type BillingPortalUrlResponse,
} from "../models/billing-portal-url-response.js";
import { body33Schema, type Body33 } from "../models/body33.js";
import { body39Schema, type Body39 } from "../models/body39.js";
import { creditStateResponseSchema, type CreditStateResponse } from "../models/credit-state-response.js";
import { groupBySchema, type GroupBy } from "../models/group-by.js";
import { historyResponseSchema, type HistoryResponse } from "../models/history-response.js";
import { subscriptionInfoSchema, type SubscriptionInfo } from "../models/subscription-info.js";
import { todoistErrorSchema, type TodoistError } from "../models/todoist-error.js";
import { topUpResponseSchema, type TopUpResponse } from "../models/top-up-response.js";
import { usageSummaryResponseSchema, type UsageSummaryResponse } from "../models/usage-summary-response.js";
import type { Servers } from "../servers.js";

export class Billing {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Cancel Plan With Redirect To Stripe
   *
   * @remarks
   * Start a hosted cancellation flow and return the redirect URL.
   *
   * @returns Successful Response
   *
   * @throws {@link
   * Billing.CancelPlanWithRedirectToStripeApiV1PaymentsCancelPlanWithRedirectToStripePostError}
   * when the API answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link TodoistApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  cancelPlanWithRedirectToStripeApiV1PaymentsCancelPlanWithRedirectToStripePost(
    request: Billing.CancelPlanWithRedirectToStripeApiV1PaymentsCancelPlanWithRedirectToStripePostRequest,
    options?: RequestOptions,
  ): ApiPromise<
    BillingPortalUrlResponse,
    Billing.CancelPlanWithRedirectToStripeApiV1PaymentsCancelPlanWithRedirectToStripePostError
  > {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/api/v1/payments/cancel_plan_with_redirect_to_stripe"),
        auth: this.#auth.bearerAuth,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: body39Schema },
      },
      {
        success: { kind: "json", schema: billingPortalUrlResponseInternalSchema },
        errorFactory:
          Billing.CancelPlanWithRedirectToStripeApiV1PaymentsCancelPlanWithRedirectToStripePostError,
      },
      options,
    );
  }

  /**
   * Get Subscription Info
   *
   * @remarks
   * Return the current user's subscription state.
   *
   * @returns Successful Response
   *
   * @throws {@link Billing.GetSubscriptionInfoApiV1PaymentsGetSubscriptionInfoPostError} when the
   * API answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link TodoistApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getSubscriptionInfoApiV1PaymentsGetSubscriptionInfoPost(
    options?: RequestOptions,
  ): ApiPromise<SubscriptionInfo, Billing.GetSubscriptionInfoApiV1PaymentsGetSubscriptionInfoPostError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/api/v1/payments/get_subscription_info"),
        auth: this.#auth.bearerAuth,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: subscriptionInfoSchema },
        errorFactory: Billing.GetSubscriptionInfoApiV1PaymentsGetSubscriptionInfoPostError,
      },
      options,
    );
  }

  /**
   * Reactivate Plan
   *
   * @remarks
   * Reactivate a previously canceled subscription.
   *
   * Returns the fresh `SubscriptionInfo` after reactivation so callers can avoid a follow-up fetch.
   * Raises `NO_CANCELABLE_SUBSCRIPTION` if there is no active subscription to reactivate.
   *
   * @returns Successful Response
   *
   * @throws {@link Billing.ReactivatePlanApiV1PaymentsReactivatePlanPostError} when the API answers
   * with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link TodoistApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  reactivatePlanApiV1PaymentsReactivatePlanPost(
    options?: RequestOptions,
  ): ApiPromise<SubscriptionInfo, Billing.ReactivatePlanApiV1PaymentsReactivatePlanPostError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/api/v1/payments/reactivate_plan"),
        auth: this.#auth.bearerAuth,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: subscriptionInfoSchema },
        errorFactory: Billing.ReactivatePlanApiV1PaymentsReactivatePlanPostError,
      },
      options,
    );
  }

  /**
   * Usage Billing History
   *
   * @remarks
   * List the caller's usage-billing ledger entries, newest first.
   *
   * Use `types` to filter the entries to list. A user who has never topped up gets an empty page.
   *
   * This is a paginated endpoint. See the [Pagination guide](#tag/Pagination) for details on using
   * cursor-based pagination.
   *
   * @returns Successful Response
   *
   * @throws {@link Billing.UsageBillingHistoryApiV1UsageBillingHistoryGetError} when the API
   * answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link TodoistApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  usageBillingHistoryApiV1UsageBillingHistoryGet(
    request: Billing.UsageBillingHistoryApiV1UsageBillingHistoryGetRequest = {},
    options?: RequestOptions,
  ): ApiPromise<HistoryResponse, Billing.UsageBillingHistoryApiV1UsageBillingHistoryGetError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/v1/usage_billing/history"),
        auth: this.#auth.bearerAuth,
        pathParams: [],
        query: [
          { name: "product", value: request.product, schema: s.defaulted(s.string(), "automations") },
          { name: "types", value: request.types, schema: s.optionalNullable(s.string()) },
          { name: "cursor", value: request.cursor, schema: s.optionalNullable(s.string()) },
          { name: "limit", value: request.limit, schema: s.defaulted(s.int(), 50) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: historyResponseSchema },
        errorFactory: Billing.UsageBillingHistoryApiV1UsageBillingHistoryGetError,
      },
      options,
    );
  }

  /**
   * Usage Billing State
   *
   * @remarks
   * Read the caller's usage-billing credit state for a product.
   *
   * A user who has never topped up reads as an empty wallet: `available_units` and
   * `available_amount` are 0, `is_settled_low_balance` is true, and `usage_block_reason` is
   * `insufficient_credit`. There is no separate "no account" answer, because both states send the
   * user to the same top-up screen.
   *
   * @returns Successful Response
   *
   * @throws {@link Billing.UsageBillingStateApiV1UsageBillingStateGetError} when the API answers
   * with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link TodoistApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  usageBillingStateApiV1UsageBillingStateGet(
    request: Billing.UsageBillingStateApiV1UsageBillingStateGetRequest = {},
    options?: RequestOptions,
  ): ApiPromise<CreditStateResponse, Billing.UsageBillingStateApiV1UsageBillingStateGetError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/v1/usage_billing/state"),
        auth: this.#auth.bearerAuth,
        pathParams: [],
        query: [{ name: "product", value: request.product, schema: s.defaulted(s.string(), "automations") }],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: creditStateResponseSchema },
        errorFactory: Billing.UsageBillingStateApiV1UsageBillingStateGetError,
      },
      options,
    );
  }

  /**
   * Usage Billing Top Up
   *
   * @remarks
   * In V1, create a hosted Stripe Checkout session to top up the authenticated user's personal
   * Todoist Wallet.
   *
   * A wallet whose usage is billed on the user's Pro subscription needs a personal Stripe customer
   * and an active personal Todoist Pro subscription. A wallet on its own compute subscription needs
   * Pro of any kind, including Pro gifted by a Business workspace, but not Pro paid only through an
   * app store. A user with no Stripe customer gets one before Checkout opens, unless they only have
   * a legacy one.
   *
   * A refused top-up returns HTTP 400 with one of these error tags:
   *
   * - `USAGE_BILLING_PLAN_REQUIRED` (code `615`): the user doesn't have Pro.
   * - `USAGE_BILLING_CURRENCY_MISMATCH` (code `616`): the currency isn't the one the user pays in,
   *   including an unsupported one.
   * - `USAGE_BILLING_TOP_UP_BELOW_MINIMUM` (code `617`): the amount is below the minimum.
   * - `USAGE_BILLING_TOP_UP_UNAVAILABLE` (code `605`): any other unmet prerequisite, such as a user
   *   with only a legacy Stripe customer.
   *
   * @returns Successful Response
   *
   * @throws {@link Billing.UsageBillingTopUpApiV1UsageBillingTopUpPostError} when the API answers
   * with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link TodoistApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  usageBillingTopUpApiV1UsageBillingTopUpPost(
    request: Billing.UsageBillingTopUpApiV1UsageBillingTopUpPostRequest,
    options?: RequestOptions,
  ): ApiPromise<TopUpResponse, Billing.UsageBillingTopUpApiV1UsageBillingTopUpPostError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/api/v1/usage_billing/top_up"),
        auth: this.#auth.bearerAuth,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: body33Schema },
      },
      {
        success: { kind: "json", schema: topUpResponseSchema },
        errorFactory: Billing.UsageBillingTopUpApiV1UsageBillingTopUpPostError,
      },
      options,
    );
  }

  /**
   * Usage Billing Usage Summary
   *
   * @remarks
   * Total the caller's settled usage over a window.
   *
   * `/history` is a ledger with one row per movement, so a total spanning more than one page cannot
   * come from it. This answers the one question the UI asks of the whole ledger at once: how many
   * runs, and what they cost.
   *
   * Only settled usage counts. `void`, `expiry` and `chargeback` draw the balance down as well, but
   * they reverse a grant rather than report usage.
   *
   * A user who has never topped up reports zero for every field.
   *
   * `group_by=automation` adds `groups`: the same total, one entry per automation. Older usage
   * without an automation id groups by its label.
   *
   * @returns Successful Response
   *
   * @throws {@link Billing.UsageBillingUsageSummaryApiV1UsageBillingUsageSummaryGetError} when the
   * API answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link TodoistApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  usageBillingUsageSummaryApiV1UsageBillingUsageSummaryGet(
    request: Billing.UsageBillingUsageSummaryApiV1UsageBillingUsageSummaryGetRequest = {},
    options?: RequestOptions,
  ): ApiPromise<UsageSummaryResponse, Billing.UsageBillingUsageSummaryApiV1UsageBillingUsageSummaryGetError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/v1/usage_billing/usage_summary"),
        auth: this.#auth.bearerAuth,
        pathParams: [],
        query: [
          { name: "product", value: request.product, schema: s.defaulted(s.string(), "automations") },
          { name: "category", value: request.category, schema: s.optionalNullable(s.string()) },
          { name: "since", value: request.since, schema: s.optionalNullable(s.dateTime()) },
          { name: "until", value: request.until, schema: s.optionalNullable(s.dateTime()) },
          {
            name: "group_by",
            value: request.groupBy,
            schema: s.optionalNullable(s.lazy(() => groupBySchema)),
          },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: usageSummaryResponseSchema },
        errorFactory: Billing.UsageBillingUsageSummaryApiV1UsageBillingUsageSummaryGetError,
      },
      options,
    );
  }
}

export namespace Billing {
  export type CancelPlanWithRedirectToStripeApiV1PaymentsCancelPlanWithRedirectToStripePostRequest = {
    body: Body39;
  };

  export class CancelPlanWithRedirectToStripeApiV1PaymentsCancelPlanWithRedirectToStripePostError extends ApiError {
    declare readonly payload:
      | Declared<"todoistError", TodoistError>
      | Declared<"todoistError2", TodoistError>
      | Declared<"todoistError3", TodoistError>
      | Declared<"todoistError4", TodoistError>
      | Undeclared;

    static readonly errors: ErrorDecoders<CancelPlanWithRedirectToStripeApiV1PaymentsCancelPlanWithRedirectToStripePostError> =
      [
        { on: 400, kind: "todoistError", decode: { kind: "json", schema: todoistErrorSchema } },
        { on: 401, kind: "todoistError2", decode: { kind: "json", schema: todoistErrorSchema } },
        { on: 403, kind: "todoistError3", decode: { kind: "json", schema: todoistErrorSchema } },
        { on: 404, kind: "todoistError4", decode: { kind: "json", schema: todoistErrorSchema } },
      ];
  }

  export class GetSubscriptionInfoApiV1PaymentsGetSubscriptionInfoPostError extends ApiError {
    declare readonly payload:
      | Declared<"todoistError", TodoistError>
      | Declared<"todoistError2", TodoistError>
      | Declared<"todoistError3", TodoistError>
      | Declared<"todoistError4", TodoistError>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetSubscriptionInfoApiV1PaymentsGetSubscriptionInfoPostError> = [
      { on: 400, kind: "todoistError", decode: { kind: "json", schema: todoistErrorSchema } },
      { on: 401, kind: "todoistError2", decode: { kind: "json", schema: todoistErrorSchema } },
      { on: 403, kind: "todoistError3", decode: { kind: "json", schema: todoistErrorSchema } },
      { on: 404, kind: "todoistError4", decode: { kind: "json", schema: todoistErrorSchema } },
    ];
  }

  export class ReactivatePlanApiV1PaymentsReactivatePlanPostError extends ApiError {
    declare readonly payload:
      | Declared<"todoistError", TodoistError>
      | Declared<"todoistError2", TodoistError>
      | Declared<"todoistError3", TodoistError>
      | Declared<"todoistError4", TodoistError>
      | Undeclared;

    static readonly errors: ErrorDecoders<ReactivatePlanApiV1PaymentsReactivatePlanPostError> = [
      { on: 400, kind: "todoistError", decode: { kind: "json", schema: todoistErrorSchema } },
      { on: 401, kind: "todoistError2", decode: { kind: "json", schema: todoistErrorSchema } },
      { on: 403, kind: "todoistError3", decode: { kind: "json", schema: todoistErrorSchema } },
      { on: 404, kind: "todoistError4", decode: { kind: "json", schema: todoistErrorSchema } },
    ];
  }

  export type UsageBillingHistoryApiV1UsageBillingHistoryGetRequest = {
    /** @default "automations" */
    product?: string;
    types?: string | null;
    cursor?: string | null;
    /** @default 50 */
    limit?: number;
  };

  export const usageBillingHistoryApiV1UsageBillingHistoryGetRequestSchema: Schema<UsageBillingHistoryApiV1UsageBillingHistoryGetRequest> =
    s.lazySchema(() =>
      s.object<UsageBillingHistoryApiV1UsageBillingHistoryGetRequest>({
        product: s.defaulted(s.string(), "automations"),
        types: s.optionalNullable(s.string()),
        cursor: s.optionalNullable(
          s.string().check(s.minLength(1), s.pattern("^[0-9a-zA-Z_-]+\\.[0-9a-zA-Z_-]+$")),
        ),
        limit: s.defaulted(s.int().check(s.gt(0), s.lte(200)), 50),
      }),
    );

  export class UsageBillingHistoryApiV1UsageBillingHistoryGetError extends ApiError {
    declare readonly payload:
      | Declared<"todoistError", TodoistError>
      | Declared<"todoistError2", TodoistError>
      | Declared<"todoistError3", TodoistError>
      | Declared<"todoistError4", TodoistError>
      | Undeclared;

    static readonly errors: ErrorDecoders<UsageBillingHistoryApiV1UsageBillingHistoryGetError> = [
      { on: 400, kind: "todoistError", decode: { kind: "json", schema: todoistErrorSchema } },
      { on: 401, kind: "todoistError2", decode: { kind: "json", schema: todoistErrorSchema } },
      { on: 403, kind: "todoistError3", decode: { kind: "json", schema: todoistErrorSchema } },
      { on: 404, kind: "todoistError4", decode: { kind: "json", schema: todoistErrorSchema } },
    ];
  }

  export type UsageBillingStateApiV1UsageBillingStateGetRequest = {
    /** @default "automations" */
    product?: string;
  };

  export class UsageBillingStateApiV1UsageBillingStateGetError extends ApiError {
    declare readonly payload:
      | Declared<"todoistError", TodoistError>
      | Declared<"todoistError2", TodoistError>
      | Declared<"todoistError3", TodoistError>
      | Declared<"todoistError4", TodoistError>
      | Undeclared;

    static readonly errors: ErrorDecoders<UsageBillingStateApiV1UsageBillingStateGetError> = [
      { on: 400, kind: "todoistError", decode: { kind: "json", schema: todoistErrorSchema } },
      { on: 401, kind: "todoistError2", decode: { kind: "json", schema: todoistErrorSchema } },
      { on: 403, kind: "todoistError3", decode: { kind: "json", schema: todoistErrorSchema } },
      { on: 404, kind: "todoistError4", decode: { kind: "json", schema: todoistErrorSchema } },
    ];
  }

  export type UsageBillingTopUpApiV1UsageBillingTopUpPostRequest = {
    body: Body33;
  };

  export class UsageBillingTopUpApiV1UsageBillingTopUpPostError extends ApiError {
    declare readonly payload:
      | Declared<"todoistError", TodoistError>
      | Declared<"todoistError2", TodoistError>
      | Declared<"todoistError3", TodoistError>
      | Declared<"todoistError4", TodoistError>
      | Undeclared;

    static readonly errors: ErrorDecoders<UsageBillingTopUpApiV1UsageBillingTopUpPostError> = [
      { on: 400, kind: "todoistError", decode: { kind: "json", schema: todoistErrorSchema } },
      { on: 401, kind: "todoistError2", decode: { kind: "json", schema: todoistErrorSchema } },
      { on: 403, kind: "todoistError3", decode: { kind: "json", schema: todoistErrorSchema } },
      { on: 404, kind: "todoistError4", decode: { kind: "json", schema: todoistErrorSchema } },
    ];
  }

  export type UsageBillingUsageSummaryApiV1UsageBillingUsageSummaryGetRequest = {
    /** @default "automations" */
    product?: string;
    category?: string | null;
    since?: Date | null;
    until?: Date | null;
    groupBy?: GroupBy | null;
  };

  export class UsageBillingUsageSummaryApiV1UsageBillingUsageSummaryGetError extends ApiError {
    declare readonly payload:
      | Declared<"todoistError", TodoistError>
      | Declared<"todoistError2", TodoistError>
      | Declared<"todoistError3", TodoistError>
      | Declared<"todoistError4", TodoistError>
      | Undeclared;

    static readonly errors: ErrorDecoders<UsageBillingUsageSummaryApiV1UsageBillingUsageSummaryGetError> = [
      { on: 400, kind: "todoistError", decode: { kind: "json", schema: todoistErrorSchema } },
      { on: 401, kind: "todoistError2", decode: { kind: "json", schema: todoistErrorSchema } },
      { on: 403, kind: "todoistError3", decode: { kind: "json", schema: todoistErrorSchema } },
      { on: 404, kind: "todoistError4", decode: { kind: "json", schema: todoistErrorSchema } },
    ];
  }
}
