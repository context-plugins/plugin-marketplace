import { ApiError } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { noneAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { eventDtoSchema, type EventDto } from "../models/event-dto.js";
import {
  paginationDtoSubscriptionResponseDtoInternalSchema,
  type PaginationDtoSubscriptionResponseDto,
} from "../models/pagination-dto-subscription-response-dto.js";
import { securityKeyDtoSchema, type SecurityKeyDto } from "../models/security-key-dto.js";
import {
  sendTestEventRequestDtoSchema,
  type SendTestEventRequestDto,
} from "../models/send-test-event-request-dto.js";
import {
  subscriptionRequestDtoInternalSchema,
  subscriptionRequestDtoSchema,
  type SubscriptionRequestDto,
} from "../models/subscription-request-dto.js";
import {
  subscriptionResponseDtoInternalSchema,
  type SubscriptionResponseDto,
} from "../models/subscription-response-dto.js";
import {
  subscriptionUpdateRequestDtoInternalSchema,
  subscriptionUpdateRequestDtoSchema,
  type SubscriptionUpdateRequestDto,
} from "../models/subscription-update-request-dto.js";
import {
  subscriptionWithSecurityKeyResponseDtoInternalSchema,
  type SubscriptionWithSecurityKeyResponseDto,
} from "../models/subscription-with-security-key-response-dto.js";
import type { Servers } from "../servers.js";

export class Subscriptions {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;

  constructor(rawClient: RawClient, servers: Servers) {
    this.#rawClient = rawClient;
    this.#servers = servers;
  }

  /**
   * Create a security key
   *
   * @remarks
   * Create a new security key for your subscription.
   *
   * When you create a new subscription, a one-time `securityKey` is one of the generated values in
   * the response. All event notifications sent to your `notificationUrl` are signed with this key
   * using the HMAC-SHA256 algorithm. The key is sent as the `x-bill-sha-signature` header value in
   * the notification.
   *
   * You can use the security key to verify all notifications sent to you. It is good practice to
   * keep the security key for your subscription updated in a timely manner. You can use this
   * endpoint to generate a new security key based on your desired frequency.
   *
   * See Webhooks in the Guides section for more information, sample requests, and notification
   * payloads for BILL events.
   *
   * @returns createNewSecurityKey 200 response
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link BillError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  createNewSecurityKey(
    request: Subscriptions.CreateNewSecurityKeyRequest,
    options?: RequestOptions,
  ): ApiPromise<SecurityKeyDto, ApiError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.defaultConnectEventsApi("/v3/subscriptions/{subscriptionId}/security_key"),
        auth: noneAuth,
        pathParams: [{ name: "subscriptionId", value: request.subscriptionId, schema: s.string() }],
        query: [],
        headers: [
          { name: "X-Idempotent-Key", value: request.xIdempotentKey, schema: s.string() },
          { name: "sessionId", value: request.sessionId, schema: s.optionalNullable(s.string()) },
          { name: "devKey", value: request.devKey, schema: s.optionalNullable(s.string()) },
          { name: "appKey", value: request.appKey, schema: s.optionalNullable(s.string()) },
          { name: "apiToken", value: request.apiToken, schema: s.optionalNullable(s.string()) },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: securityKeyDtoSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Create a subscription
   *
   * @remarks
   * Create a new event subscription. You can subscribe to multiple events with a single request.
   * You can create up to 10 webhook subscriptions per organization.
   *
   * BILL provides a full catalog of all the events that you can subscribe to with `GET
   * /v3/events/catalog`. See Get events catalog in the API reference for more information.
   *
   * See Webhooks in the Guides section for more information, sample requests, and notification
   * payloads for BILL events.
   *
   * @returns createSubscription 200 response
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link BillError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  createSubscription(
    request: Subscriptions.CreateSubscriptionRequest,
    options?: RequestOptions,
  ): ApiPromise<SubscriptionWithSecurityKeyResponseDto, ApiError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.defaultConnectEventsApi("/v3/subscriptions"),
        auth: noneAuth,
        pathParams: [],
        query: [],
        headers: [
          { name: "X-Idempotent-Key", value: request.xIdempotentKey, schema: s.string() },
          { name: "sessionId", value: request.sessionId, schema: s.optionalNullable(s.string()) },
          { name: "devKey", value: request.devKey, schema: s.optionalNullable(s.string()) },
          { name: "appKey", value: request.appKey, schema: s.optionalNullable(s.string()) },
          { name: "apiToken", value: request.apiToken, schema: s.optionalNullable(s.string()) },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "json", value: request.body, schema: subscriptionRequestDtoInternalSchema },
      },
      {
        success: { kind: "json", schema: subscriptionWithSecurityKeyResponseDtoInternalSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Delete a subscription
   *
   * @remarks
   * Delete an existing subscription.
   *
   * @returns deleteSubscription 200 response
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link BillError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  deleteSubscription(
    request: Subscriptions.DeleteSubscriptionRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, ApiError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.defaultConnectEventsApi("/v3/subscriptions/{subscriptionId}"),
        auth: noneAuth,
        pathParams: [{ name: "subscriptionId", value: request.subscriptionId, schema: s.string() }],
        query: [],
        headers: [
          { name: "sessionId", value: request.sessionId, schema: s.optionalNullable(s.string()) },
          { name: "devKey", value: request.devKey, schema: s.optionalNullable(s.string()) },
          { name: "appKey", value: request.appKey, schema: s.optionalNullable(s.string()) },
          { name: "apiToken", value: request.apiToken, schema: s.optionalNullable(s.string()) },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Get list of subscriptions
   *
   * @remarks
   * Get a list of all your created subscriptions.
   *
   * By default, you get 20 results on one page of results. Set `max` in your request to get up to
   * 100 results on one page.
   *
   * **Note**: In this list operation, pagination is available only in one direction. The `nextPage`
   * value is available in the response for you to retrieve the next page of results. However, you
   * cannot retrieve the previous page of results.
   *
   * See Webhooks in the Guides section for more information, sample requests, and notification
   * payloads for BILL events.
   *
   * @returns getAllSubscriptions 200 response
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link BillError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getAllSubscriptions(
    request: Subscriptions.GetAllSubscriptionsRequest = {},
    options?: RequestOptions,
  ): ApiPromise<PaginationDtoSubscriptionResponseDto, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.defaultConnectEventsApi("/v3/subscriptions"),
        auth: noneAuth,
        pathParams: [],
        query: [
          { name: "max", value: request.max, schema: s.optionalNullable(s.int()) },
          { name: "page", value: request.page, schema: s.optionalNullable(s.string()) },
        ],
        headers: [
          { name: "sessionId", value: request.sessionId, schema: s.optionalNullable(s.string()) },
          { name: "devKey", value: request.devKey, schema: s.optionalNullable(s.string()) },
          { name: "appKey", value: request.appKey, schema: s.optionalNullable(s.string()) },
          { name: "apiToken", value: request.apiToken, schema: s.optionalNullable(s.string()) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: paginationDtoSubscriptionResponseDtoInternalSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Get subscription details
   *
   * @remarks
   * Get details about an existing subscription.
   *
   * @returns getSubscription 200 response
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link BillError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getSubscription(
    request: Subscriptions.GetSubscriptionRequest,
    options?: RequestOptions,
  ): ApiPromise<SubscriptionResponseDto, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.defaultConnectEventsApi("/v3/subscriptions/{subscriptionId}"),
        auth: noneAuth,
        pathParams: [{ name: "subscriptionId", value: request.subscriptionId, schema: s.string() }],
        query: [],
        headers: [
          { name: "sessionId", value: request.sessionId, schema: s.optionalNullable(s.string()) },
          { name: "devKey", value: request.devKey, schema: s.optionalNullable(s.string()) },
          { name: "appKey", value: request.appKey, schema: s.optionalNullable(s.string()) },
          { name: "apiToken", value: request.apiToken, schema: s.optionalNullable(s.string()) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: subscriptionResponseDtoInternalSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Replace a subscription
   *
   * @remarks
   * Update the events that you are subscribed to.
   *
   * You can use the PUT operation to add, remove, or replace events in a subscription. For example,
   * you can replace the `bill.created` event with `bill.updated` in your subscription.
   *
   * @returns replaceSubscription 200 response
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link BillError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  replaceSubscription(
    request: Subscriptions.ReplaceSubscriptionRequest,
    options?: RequestOptions,
  ): ApiPromise<SubscriptionResponseDto, ApiError> {
    return this.#rawClient.execute(
      {
        method: "PUT",
        urlTemplate: this.#servers.defaultConnectEventsApi("/v3/subscriptions/{subscriptionId}"),
        auth: noneAuth,
        pathParams: [{ name: "subscriptionId", value: request.subscriptionId, schema: s.string() }],
        query: [],
        headers: [
          { name: "sessionId", value: request.sessionId, schema: s.optionalNullable(s.string()) },
          { name: "devKey", value: request.devKey, schema: s.optionalNullable(s.string()) },
          { name: "appKey", value: request.appKey, schema: s.optionalNullable(s.string()) },
          { name: "apiToken", value: request.apiToken, schema: s.optionalNullable(s.string()) },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "json", value: request.body, schema: subscriptionRequestDtoInternalSchema },
      },
      {
        success: { kind: "json", schema: subscriptionResponseDtoInternalSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Generate a test event notification
   *
   * @remarks
   * Generate a new test event notification. After you create a subscription, use this endpoint for
   * BILL to send a test event notification to your specified notification URL.
   *
   * In your request, all the fields are optional. To see specific information in the test event
   * notification, you can set `eventType`, `version`, and any details. You can get the BILL events
   * catalog with `GET /v3/events/catalog`.
   *
   * **Note**: All the fields in the test event notification are test values. You cannot use any of
   * the test values for any other operation.
   *
   * See Webhooks in the Guides section for more information, sample requests, and notification
   * payloads for BILL events.
   *
   * @returns sendTestEvent 200 response
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link BillError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  sendTestEvent(
    request: Subscriptions.SendTestEventRequest,
    options?: RequestOptions,
  ): ApiPromise<EventDto, ApiError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.defaultConnectEventsApi("/v3/subscriptions/{subscriptionId}/test"),
        auth: noneAuth,
        pathParams: [{ name: "subscriptionId", value: request.subscriptionId, schema: s.string() }],
        query: [],
        headers: [
          { name: "sessionId", value: request.sessionId, schema: s.optionalNullable(s.string()) },
          { name: "devKey", value: request.devKey, schema: s.optionalNullable(s.string()) },
          { name: "appKey", value: request.appKey, schema: s.optionalNullable(s.string()) },
          { name: "apiToken", value: request.apiToken, schema: s.optionalNullable(s.string()) },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "json", value: request.body, schema: sendTestEventRequestDtoSchema },
      },
      {
        success: { kind: "json", schema: eventDtoSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Update a subscription
   *
   * @remarks
   * Update details about a subscription.
   *
   * You can use the PATCH operation to modify existing subscription details, such as `name`,
   * `status`, and `notificationUrl`.
   *
   * @returns updateSubscription 200 response
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link BillError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  updateSubscription(
    request: Subscriptions.UpdateSubscriptionRequest,
    options?: RequestOptions,
  ): ApiPromise<SubscriptionResponseDto, ApiError> {
    return this.#rawClient.execute(
      {
        method: "PATCH",
        urlTemplate: this.#servers.defaultConnectEventsApi("/v3/subscriptions/{subscriptionId}"),
        auth: noneAuth,
        pathParams: [{ name: "subscriptionId", value: request.subscriptionId, schema: s.string() }],
        query: [],
        headers: [
          { name: "sessionId", value: request.sessionId, schema: s.optionalNullable(s.string()) },
          { name: "devKey", value: request.devKey, schema: s.optionalNullable(s.string()) },
          { name: "appKey", value: request.appKey, schema: s.optionalNullable(s.string()) },
          { name: "apiToken", value: request.apiToken, schema: s.optionalNullable(s.string()) },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "json", value: request.body, schema: subscriptionUpdateRequestDtoInternalSchema },
      },
      {
        success: { kind: "json", schema: subscriptionResponseDtoInternalSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }
}

export namespace Subscriptions {
  export type CreateNewSecurityKeyRequest = {
    subscriptionId: string;
    /** Idempotency key. The key must be in the UUID4 format. */
    xIdempotentKey: string;
    sessionId?: string | null;
    devKey?: string | null;
    appKey?: string | null;
    apiToken?: string | null;
  };

  export const createNewSecurityKeyRequestSchema: Schema<CreateNewSecurityKeyRequest> = s.lazySchema(() =>
    s.object<CreateNewSecurityKeyRequest>({
      subscriptionId: s.string().check(s.minLength(1)),
      xIdempotentKey: s.string(),
      sessionId: s.optionalNullable(s.string()),
      devKey: s.optionalNullable(s.string()),
      appKey: s.optionalNullable(s.string()),
      apiToken: s.optionalNullable(s.string()),
    }),
  );

  export type CreateSubscriptionRequest = {
    /** Idempotency key. The key must be in the UUID4 format. */
    xIdempotentKey: string;
    sessionId?: string | null;
    devKey?: string | null;
    appKey?: string | null;
    apiToken?: string | null;
    body: SubscriptionRequestDto;
  };

  export type DeleteSubscriptionRequest = {
    subscriptionId: string;
    sessionId?: string | null;
    devKey?: string | null;
    appKey?: string | null;
    apiToken?: string | null;
  };

  export const deleteSubscriptionRequestSchema: Schema<DeleteSubscriptionRequest> = s.lazySchema(() =>
    s.object<DeleteSubscriptionRequest>({
      subscriptionId: s.string().check(s.minLength(1)),
      sessionId: s.optionalNullable(s.string()),
      devKey: s.optionalNullable(s.string()),
      appKey: s.optionalNullable(s.string()),
      apiToken: s.optionalNullable(s.string()),
    }),
  );

  export type GetAllSubscriptionsRequest = {
    max?: number | null;
    page?: string | null;
    sessionId?: string | null;
    devKey?: string | null;
    appKey?: string | null;
    apiToken?: string | null;
  };

  export const getAllSubscriptionsRequestSchema: Schema<GetAllSubscriptionsRequest> = s.lazySchema(() =>
    s.object<GetAllSubscriptionsRequest>({
      max: s.optionalNullable(s.int().check(s.gte(1), s.lte(100))),
      page: s.optionalNullable(s.string()),
      sessionId: s.optionalNullable(s.string()),
      devKey: s.optionalNullable(s.string()),
      appKey: s.optionalNullable(s.string()),
      apiToken: s.optionalNullable(s.string()),
    }),
  );

  export type GetSubscriptionRequest = {
    subscriptionId: string;
    sessionId?: string | null;
    devKey?: string | null;
    appKey?: string | null;
    apiToken?: string | null;
  };

  export const getSubscriptionRequestSchema: Schema<GetSubscriptionRequest> = s.lazySchema(() =>
    s.object<GetSubscriptionRequest>({
      subscriptionId: s.string().check(s.minLength(1)),
      sessionId: s.optionalNullable(s.string()),
      devKey: s.optionalNullable(s.string()),
      appKey: s.optionalNullable(s.string()),
      apiToken: s.optionalNullable(s.string()),
    }),
  );

  export type ReplaceSubscriptionRequest = {
    subscriptionId: string;
    sessionId?: string | null;
    devKey?: string | null;
    appKey?: string | null;
    apiToken?: string | null;
    body: SubscriptionRequestDto;
  };

  export const replaceSubscriptionRequestSchema: Schema<ReplaceSubscriptionRequest> = s.lazySchema(() =>
    s.object<ReplaceSubscriptionRequest>({
      subscriptionId: s.string().check(s.minLength(1)),
      sessionId: s.optionalNullable(s.string()),
      devKey: s.optionalNullable(s.string()),
      appKey: s.optionalNullable(s.string()),
      apiToken: s.optionalNullable(s.string()),
      body: subscriptionRequestDtoSchema,
    }),
  );

  export type SendTestEventRequest = {
    subscriptionId: string;
    sessionId?: string | null;
    devKey?: string | null;
    appKey?: string | null;
    apiToken?: string | null;
    body: SendTestEventRequestDto;
  };

  export const sendTestEventRequestSchema: Schema<SendTestEventRequest> = s.lazySchema(() =>
    s.object<SendTestEventRequest>({
      subscriptionId: s.string().check(s.minLength(1)),
      sessionId: s.optionalNullable(s.string()),
      devKey: s.optionalNullable(s.string()),
      appKey: s.optionalNullable(s.string()),
      apiToken: s.optionalNullable(s.string()),
      body: sendTestEventRequestDtoSchema,
    }),
  );

  export type UpdateSubscriptionRequest = {
    subscriptionId: string;
    sessionId?: string | null;
    devKey?: string | null;
    appKey?: string | null;
    apiToken?: string | null;
    body: SubscriptionUpdateRequestDto;
  };

  export const updateSubscriptionRequestSchema: Schema<UpdateSubscriptionRequest> = s.lazySchema(() =>
    s.object<UpdateSubscriptionRequest>({
      subscriptionId: s.string().check(s.minLength(1)),
      sessionId: s.optionalNullable(s.string()),
      devKey: s.optionalNullable(s.string()),
      appKey: s.optionalNullable(s.string()),
      apiToken: s.optionalNullable(s.string()),
      body: subscriptionUpdateRequestDtoSchema,
    }),
  );
}
