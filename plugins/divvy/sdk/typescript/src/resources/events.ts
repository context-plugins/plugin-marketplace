import { ApiError } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { noneAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { eventCatalogDtoSchema, type EventCatalogDto } from "../models/event-catalog-dto.js";
import { eventDtoSchema, type EventDto } from "../models/event-dto.js";
import {
  paginationDtoEventWithRetriesDtoSchema,
  type PaginationDtoEventWithRetriesDto,
} from "../models/pagination-dto-event-with-retries-dto.js";
import type { Servers } from "../servers.js";

export class Events {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;

  constructor(rawClient: RawClient, servers: Servers) {
    this.#rawClient = rawClient;
    this.#servers = servers;
  }

  /**
   * Get events catalog
   *
   * @remarks
   * Get the complete list of available events that you can subscribe to.
   *
   * See Webhooks in the Guides section for more information, sample requests, and notification
   * payloads for BILL events.
   *
   * @returns getEventCatalog 200 response
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link DivvyError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getEventCatalog(
    request: Events.GetEventCatalogRequest = {},
    options?: RequestOptions,
  ): ApiPromise<EventCatalogDto[], ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.defaultConnectEventsApi("/v3/events/catalog"),
        auth: noneAuth,
        pathParams: [],
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
        success: { kind: "json", schema: s.array(s.lazy(() => eventCatalogDtoSchema)) },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Get list of event notifications
   *
   * @remarks
   * Get a list of event notifications sent to you for a subscription. You can use this endpoint to
   * address any issues with notification retries.
   *
   * In the request, set `createdTimeFrom` and `createdTimeTo` to get event notifications for the
   * specified time range. If you do not set `createdTimeTo`, the current date and time is used. By
   * default, you get 20 results on one page of results. Set `max` in your request to get up to 100
   * results on one page.
   *
   * **Note**: In this list operation, pagination is available only in one direction. The `nextPage`
   * value is available in the response for you to retrieve the next page of results. However, you
   * cannot retrieve the previous page of results.
   *
   * See Webhooks in the Guides section for more information, sample requests, and notification
   * payloads for BILL events.
   *
   * @returns getEventsForSubscription 200 response
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link DivvyError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getEventsForSubscription(
    request: Events.GetEventsForSubscriptionRequest,
    options?: RequestOptions,
  ): ApiPromise<PaginationDtoEventWithRetriesDto, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.defaultConnectEventsApi("/v3/events/subscription/{subscriptionId}"),
        auth: noneAuth,
        pathParams: [{ name: "subscriptionId", value: request.subscriptionId, schema: s.string() }],
        query: [
          { name: "entityId", value: request.entityId, schema: s.optionalNullable(s.string()) },
          { name: "max", value: request.max, schema: s.optionalNullable(s.int()) },
          { name: "createdTimeFrom", value: request.createdTimeFrom, schema: s.optionalNullable(s.string()) },
          { name: "createdTimeTo", value: request.createdTimeTo, schema: s.optionalNullable(s.string()) },
          { name: "ascending", value: request.ascending, schema: s.optionalNullable(s.boolean()) },
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
        success: { kind: "json", schema: paginationDtoEventWithRetriesDtoSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Resend an event
   *
   * @remarks
   * Resend an existing event notification.
   *
   * **Note**: When an event notification fails, BILL tries to send the notification again with
   * exponential backoff.
   *
   * See Webhooks in the Guides section for more information, sample requests, and notification
   * payloads for BILL events.
   *
   * @returns resendEvent 200 response
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link DivvyError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  resendEvent(request: Events.ResendEventRequest, options?: RequestOptions): ApiPromise<EventDto, ApiError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.defaultConnectEventsApi(
          "/v3/events/subscription/{subscriptionId}/event/{eventId}",
        ),
        auth: noneAuth,
        pathParams: [
          { name: "subscriptionId", value: request.subscriptionId, schema: s.string() },
          { name: "eventId", value: request.eventId, schema: s.string() },
        ],
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
        success: { kind: "json", schema: eventDtoSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }
}

export namespace Events {
  export type GetEventCatalogRequest = {
    sessionId?: string | null;
    devKey?: string | null;
    appKey?: string | null;
    apiToken?: string | null;
  };

  export type GetEventsForSubscriptionRequest = {
    subscriptionId: string;
    entityId?: string | null;
    max?: number | null;
    createdTimeFrom?: string | null;
    createdTimeTo?: string | null;
    ascending?: boolean | null;
    page?: string | null;
    sessionId?: string | null;
    devKey?: string | null;
    appKey?: string | null;
    apiToken?: string | null;
  };

  export const getEventsForSubscriptionRequestSchema: Schema<GetEventsForSubscriptionRequest> = s.lazySchema(
    () =>
      s.object<GetEventsForSubscriptionRequest>({
        subscriptionId: s.string().check(s.minLength(1)),
        entityId: s.optionalNullable(s.string()),
        max: s.optionalNullable(s.int().check(s.gte(1), s.lte(100))),
        createdTimeFrom: s.optionalNullable(s.string()),
        createdTimeTo: s.optionalNullable(s.string()),
        ascending: s.optionalNullable(s.boolean()),
        page: s.optionalNullable(s.string()),
        sessionId: s.optionalNullable(s.string()),
        devKey: s.optionalNullable(s.string()),
        appKey: s.optionalNullable(s.string()),
        apiToken: s.optionalNullable(s.string()),
      }),
  );

  export type ResendEventRequest = {
    subscriptionId: string;
    eventId: string;
    sessionId?: string | null;
    devKey?: string | null;
    appKey?: string | null;
    apiToken?: string | null;
  };

  export const resendEventRequestSchema: Schema<ResendEventRequest> = s.lazySchema(() =>
    s.object<ResendEventRequest>({
      subscriptionId: s.string().check(s.minLength(1)),
      eventId: s.string().check(s.minLength(1)),
      sessionId: s.optionalNullable(s.string()),
      devKey: s.optionalNullable(s.string()),
      appKey: s.optionalNullable(s.string()),
      apiToken: s.optionalNullable(s.string()),
    }),
  );
}
