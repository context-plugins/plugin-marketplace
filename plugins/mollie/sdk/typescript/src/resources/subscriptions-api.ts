import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { anyAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import * as s from "../core/validation/index.js";
import {
  deleteValuesSalesInvoiceSchema,
  type DeleteValuesSalesInvoice,
} from "../models/delete-values-sales-invoice.js";
import { sortingSchema, type Sorting } from "../models/sorting.js";
import { subscriptionRequestSchema, type SubscriptionRequest } from "../models/subscription-request.js";
import {
  v2CustomersSubscriptionsRequestSchema,
  type V2CustomersSubscriptionsRequest,
} from "../models/v2-customers-subscriptions-request.js";
import type { Servers } from "../servers.js";

/**
 * Operations related to the Subscriptions API
 */
export class SubscriptionsApi {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Cancel subscription
   *
   * @remarks
   * Cancel an existing subscription. Canceling a subscription has no effect on the mandates of the
   * customer.
   *
   * @returns The updated subscription object with status `canceled`. For a complete reference of
   * the subscription object, refer to the [Get subscription endpoint](get-subscription)
   * documentation.
   *
   * @throws {@link SubscriptionsApi.CancelSubscriptionError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link MollieApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  cancelSubscription(
    request: SubscriptionsApi.CancelSubscriptionRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, SubscriptionsApi.CancelSubscriptionError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default("/v2/customers/{customerId}/subscriptions/{subscriptionId}"),
        auth: anyAuth(this.#auth.apiKey, this.#auth.advancedAccessToken, this.#auth.oAuth),
        pathParams: [
          { name: "customerId", value: request.customerId, schema: s.string() },
          { name: "subscriptionId", value: request.subscriptionId, schema: s.string() },
        ],
        query: [],
        headers: [{ name: "idempotency-key", value: request.idempotencyKey, schema: s.optional(s.string()) }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => deleteValuesSalesInvoiceSchema)),
        },
      },
      {
        success: { kind: "empty" },
        errorFactory: SubscriptionsApi.CancelSubscriptionError,
      },
      options,
    );
  }

  /**
   * Create subscription
   *
   * @remarks
   * With subscriptions, you can schedule recurring payments to take place at regular intervals.
   *
   * For example, by simply specifying an `amount` and an `interval`, you can create an endless
   * subscription to charge a monthly fee, until you cancel the subscription.
   *
   * Or, you could use the times parameter to only charge a limited number of times, for example to
   * split a big transaction in multiple parts.
   *
   * A few example usages:
   *
   * `amount[currency]="EUR"` `amount[value]="5.00"` `interval="2 weeks"` Your customer will be
   * charged €5 once every two weeks.
   *
   * `amount[currency]="EUR"` `amount[value]="20.00"` `interval="1 day" times=5` Your customer will
   * be charged €20 every day, for five consecutive days.
   *
   * `amount[currency]="EUR"` `amount[value]="10.00"` `interval="1 month"` `startDate="2018-04-30"`
   * Your customer will be charged €10 on the last day of each month, starting in April 2018.
   *
   * @returns The newly created subscription object.
   *
   * @throws {@link SubscriptionsApi.CreateSubscriptionError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link MollieApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  createSubscription(
    request: SubscriptionsApi.CreateSubscriptionRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, SubscriptionsApi.CreateSubscriptionError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/v2/customers/{customerId}/subscriptions"),
        auth: anyAuth(this.#auth.apiKey, this.#auth.advancedAccessToken, this.#auth.oAuth),
        pathParams: [{ name: "customerId", value: request.customerId, schema: s.string() }],
        query: [],
        headers: [{ name: "idempotency-key", value: request.idempotencyKey, schema: s.optional(s.string()) }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => subscriptionRequestSchema)),
        },
      },
      {
        success: { kind: "empty" },
        errorFactory: SubscriptionsApi.CreateSubscriptionError,
      },
      options,
    );
  }

  /**
   * Get subscription
   *
   * @remarks
   * Retrieve a single subscription by its ID and the ID of its parent customer.
   *
   * @returns The subscription object.
   *
   * @throws {@link SubscriptionsApi.GetSubscriptionError} when the API answers with an error status
   * — narrow on `err.payload.kind`
   *
   * @throws {@link MollieApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getSubscription(
    request: SubscriptionsApi.GetSubscriptionRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, SubscriptionsApi.GetSubscriptionError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v2/customers/{customerId}/subscriptions/{subscriptionId}"),
        auth: anyAuth(this.#auth.apiKey, this.#auth.advancedAccessToken, this.#auth.oAuth),
        pathParams: [
          { name: "customerId", value: request.customerId, schema: s.string() },
          { name: "subscriptionId", value: request.subscriptionId, schema: s.string() },
        ],
        query: [{ name: "testmode", value: request.testmode, schema: s.optional(s.boolean()) }],
        headers: [{ name: "idempotency-key", value: request.idempotencyKey, schema: s.optional(s.string()) }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: SubscriptionsApi.GetSubscriptionError,
      },
      options,
    );
  }

  /**
   * List all subscriptions
   *
   * @remarks
   * Retrieve all subscriptions initiated across all your customers.
   *
   * The results are paginated.
   *
   * @returns A list of subscription objects.
   *
   * @throws {@link SubscriptionsApi.ListAllSubscriptionsError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link MollieApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listAllSubscriptions(
    request: SubscriptionsApi.ListAllSubscriptionsRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, SubscriptionsApi.ListAllSubscriptionsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v2/subscriptions"),
        auth: anyAuth(this.#auth.apiKey, this.#auth.advancedAccessToken, this.#auth.oAuth),
        pathParams: [],
        query: [
          { name: "from", value: request.from, schema: s.optionalNullable(s.string()) },
          { name: "limit", value: request.limit, schema: s.optionalNullable(s.int()) },
          { name: "profileId", value: request.profileId, schema: s.optionalNullable(s.string()) },
          { name: "testmode", value: request.testmode, schema: s.optional(s.boolean()) },
        ],
        headers: [{ name: "idempotency-key", value: request.idempotencyKey, schema: s.optional(s.string()) }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: SubscriptionsApi.ListAllSubscriptionsError,
      },
      options,
    );
  }

  /**
   * List subscription payments
   *
   * @remarks
   * Retrieve all payments of a specific subscription.
   *
   * The results are paginated.
   *
   * @returns A list of payment objects.
   *
   * @throws {@link SubscriptionsApi.ListSubscriptionPaymentsError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link MollieApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listSubscriptionPayments(
    request: SubscriptionsApi.ListSubscriptionPaymentsRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, SubscriptionsApi.ListSubscriptionPaymentsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default(
          "/v2/customers/{customerId}/subscriptions/{subscriptionId}/payments",
        ),
        auth: anyAuth(this.#auth.apiKey, this.#auth.advancedAccessToken, this.#auth.oAuth),
        pathParams: [
          { name: "customerId", value: request.customerId, schema: s.string() },
          { name: "subscriptionId", value: request.subscriptionId, schema: s.string() },
        ],
        query: [
          { name: "from", value: request.from, schema: s.optional(s.string()) },
          { name: "limit", value: request.limit, schema: s.optionalNullable(s.int()) },
          { name: "sort", value: request.sort, schema: s.optional(s.lazy(() => sortingSchema)) },
          { name: "profileId", value: request.profileId, schema: s.optional(s.string()) },
          { name: "testmode", value: request.testmode, schema: s.optional(s.boolean()) },
        ],
        headers: [{ name: "idempotency-key", value: request.idempotencyKey, schema: s.optional(s.string()) }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: SubscriptionsApi.ListSubscriptionPaymentsError,
      },
      options,
    );
  }

  /**
   * List customer subscriptions
   *
   * @remarks
   * Retrieve all subscriptions of a customer.
   *
   * The results are paginated.
   *
   * @returns A list of subscription objects.
   *
   * @throws {@link SubscriptionsApi.ListSubscriptionsError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link MollieApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listSubscriptions(
    request: SubscriptionsApi.ListSubscriptionsRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, SubscriptionsApi.ListSubscriptionsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v2/customers/{customerId}/subscriptions"),
        auth: anyAuth(this.#auth.apiKey, this.#auth.advancedAccessToken, this.#auth.oAuth),
        pathParams: [{ name: "customerId", value: request.customerId, schema: s.string() }],
        query: [
          { name: "from", value: request.from, schema: s.optional(s.string()) },
          { name: "limit", value: request.limit, schema: s.optionalNullable(s.int()) },
          { name: "sort", value: request.sort, schema: s.optional(s.lazy(() => sortingSchema)) },
          { name: "testmode", value: request.testmode, schema: s.optional(s.boolean()) },
        ],
        headers: [{ name: "idempotency-key", value: request.idempotencyKey, schema: s.optional(s.string()) }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: SubscriptionsApi.ListSubscriptionsError,
      },
      options,
    );
  }

  /**
   * Update subscription
   *
   * @remarks
   * Update an existing subscription.
   *
   * Canceled subscriptions cannot be updated.
   *
   * For an in-depth explanation of each parameter, refer to the [Create
   * subscription](create-subscription) endpoint.
   *
   * @returns The updated subscription object.
   *
   * @throws {@link SubscriptionsApi.UpdateSubscriptionError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link MollieApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  updateSubscription(
    request: SubscriptionsApi.UpdateSubscriptionRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, SubscriptionsApi.UpdateSubscriptionError> {
    return this.#rawClient.execute(
      {
        method: "PATCH",
        urlTemplate: this.#servers.default("/v2/customers/{customerId}/subscriptions/{subscriptionId}"),
        auth: anyAuth(this.#auth.apiKey, this.#auth.advancedAccessToken, this.#auth.oAuth),
        pathParams: [
          { name: "customerId", value: request.customerId, schema: s.string() },
          { name: "subscriptionId", value: request.subscriptionId, schema: s.string() },
        ],
        query: [],
        headers: [{ name: "idempotency-key", value: request.idempotencyKey, schema: s.optional(s.string()) }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => v2CustomersSubscriptionsRequestSchema)),
        },
      },
      {
        success: { kind: "empty" },
        errorFactory: SubscriptionsApi.UpdateSubscriptionError,
      },
      options,
    );
  }
}

export namespace SubscriptionsApi {
  export type CancelSubscriptionRequest = {
    /** Provide the ID of the related customer. */
    customerId: string;
    /** Provide the ID of the related subscription. */
    subscriptionId: string;
    /** A unique key to ensure idempotent requests. This key should be a UUID v4 string. */
    idempotencyKey?: string;
    body?: DeleteValuesSalesInvoice;
  };

  export class CancelSubscriptionError extends ApiError {
    declare readonly payload: Declared<"error404", undefined> | Declared<"error429", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<CancelSubscriptionError> = [
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 429, kind: "error429", decode: { kind: "empty" } },
    ];
  }

  export type CreateSubscriptionRequest = {
    /** Provide the ID of the related customer. */
    customerId: string;
    /** A unique key to ensure idempotent requests. This key should be a UUID v4 string. */
    idempotencyKey?: string;
    body?: SubscriptionRequest;
  };

  export class CreateSubscriptionError extends ApiError {
    declare readonly payload: Declared<"error404", undefined> | Declared<"error429", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<CreateSubscriptionError> = [
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 429, kind: "error429", decode: { kind: "empty" } },
    ];
  }

  export type GetSubscriptionRequest = {
    /** Provide the ID of the related customer. */
    customerId: string;
    /** Provide the ID of the related subscription. */
    subscriptionId: string;
    /**
     * Most API credentials are specifically created for either live mode or test mode. In those
     * cases the `testmode` query parameter must not be sent. For organization-level credentials
     * such as OAuth access tokens, you can enable test mode by setting the `testmode` query
     * parameter to `true`.
     *
     * Test entities cannot be retrieved when the endpoint is set to live mode, and vice versa.
     */
    testmode?: boolean;
    /** A unique key to ensure idempotent requests. This key should be a UUID v4 string. */
    idempotencyKey?: string;
  };

  export class GetSubscriptionError extends ApiError {
    declare readonly payload: Declared<"error404", undefined> | Declared<"error429", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<GetSubscriptionError> = [
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 429, kind: "error429", decode: { kind: "empty" } },
    ];
  }

  export type ListAllSubscriptionsRequest = {
    /**
     * Provide an ID to start the result set from the item with the given ID and onwards. This
     * allows you to paginate the result set.
     */
    from?: string | null;
    /** The maximum number of items to return. Defaults to 50 items. */
    limit?: number | null;
    /**
     * The identifier referring to the [profile](get-profile) you wish to retrieve subscriptions
     * for.
     *
     * Most API credentials are linked to a single profile. In these cases the `profileId` is
     * already implied.
     *
     * To retrieve all subscriptions across the organization, use an organization-level API
     * credential and omit the `profileId` parameter.
     */
    profileId?: string | null;
    /**
     * Most API credentials are specifically created for either live mode or test mode. In those
     * cases the `testmode` query parameter must not be sent. For organization-level credentials
     * such as OAuth access tokens, you can enable test mode by setting the `testmode` query
     * parameter to `true`.
     *
     * Test entities cannot be retrieved when the endpoint is set to live mode, and vice versa.
     */
    testmode?: boolean;
    /** A unique key to ensure idempotent requests. This key should be a UUID v4 string. */
    idempotencyKey?: string;
  };

  export class ListAllSubscriptionsError extends ApiError {
    declare readonly payload:
      | Declared<"error400", undefined>
      | Declared<"error404", undefined>
      | Declared<"error429", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<ListAllSubscriptionsError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 429, kind: "error429", decode: { kind: "empty" } },
    ];
  }

  export type ListSubscriptionPaymentsRequest = {
    /** Provide the ID of the related customer. */
    customerId: string;
    /** Provide the ID of the related subscription. */
    subscriptionId: string;
    /**
     * Provide an ID to start the result set from the item with the given ID and onwards. This
     * allows you to paginate the result set.
     */
    from?: string;
    /** The maximum number of items to return. Defaults to 50 items. */
    limit?: number | null;
    /**
     * Used for setting the direction of the result set. Defaults to descending order, meaning the
     * results are ordered from newest to oldest.
     */
    sort?: Sorting;
    /**
     * The identifier referring to the [profile](get-profile) you wish to retrieve the resources
     * for.
     *
     * Most API credentials are linked to a single profile. In these cases the `profileId` must not
     * be sent. For organization-level credentials such as OAuth access tokens however, the
     * `profileId` parameter is required.
     */
    profileId?: string;
    /**
     * Most API credentials are specifically created for either live mode or test mode. In those
     * cases the `testmode` query parameter must not be sent. For organization-level credentials
     * such as OAuth access tokens, you can enable test mode by setting the `testmode` query
     * parameter to `true`.
     *
     * Test entities cannot be retrieved when the endpoint is set to live mode, and vice versa.
     */
    testmode?: boolean;
    /** A unique key to ensure idempotent requests. This key should be a UUID v4 string. */
    idempotencyKey?: string;
  };

  export class ListSubscriptionPaymentsError extends ApiError {
    declare readonly payload: Declared<"error400", undefined> | Declared<"error429", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<ListSubscriptionPaymentsError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 429, kind: "error429", decode: { kind: "empty" } },
    ];
  }

  export type ListSubscriptionsRequest = {
    /** Provide the ID of the related customer. */
    customerId: string;
    /**
     * Provide an ID to start the result set from the item with the given ID and onwards. This
     * allows you to paginate the result set.
     */
    from?: string;
    /** The maximum number of items to return. Defaults to 50 items. */
    limit?: number | null;
    /**
     * Used for setting the direction of the result set. Defaults to descending order, meaning the
     * results are ordered from newest to oldest.
     */
    sort?: Sorting;
    /**
     * Most API credentials are specifically created for either live mode or test mode. In those
     * cases the `testmode` query parameter must not be sent. For organization-level credentials
     * such as OAuth access tokens, you can enable test mode by setting the `testmode` query
     * parameter to `true`.
     *
     * Test entities cannot be retrieved when the endpoint is set to live mode, and vice versa.
     */
    testmode?: boolean;
    /** A unique key to ensure idempotent requests. This key should be a UUID v4 string. */
    idempotencyKey?: string;
  };

  export class ListSubscriptionsError extends ApiError {
    declare readonly payload:
      | Declared<"error400", undefined>
      | Declared<"error404", undefined>
      | Declared<"error429", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<ListSubscriptionsError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 429, kind: "error429", decode: { kind: "empty" } },
    ];
  }

  export type UpdateSubscriptionRequest = {
    /** Provide the ID of the related customer. */
    customerId: string;
    /** Provide the ID of the related subscription. */
    subscriptionId: string;
    /** A unique key to ensure idempotent requests. This key should be a UUID v4 string. */
    idempotencyKey?: string;
    body?: V2CustomersSubscriptionsRequest;
  };

  export class UpdateSubscriptionError extends ApiError {
    declare readonly payload: Declared<"error404", undefined> | Declared<"error429", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<UpdateSubscriptionError> = [
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 429, kind: "error429", decode: { kind: "empty" } },
    ];
  }
}
