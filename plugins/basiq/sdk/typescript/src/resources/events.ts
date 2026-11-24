import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import * as s from "../core/validation/index.js";
import {
  eventsGetResponseResourceSchema,
  type EventsGetResponseResource,
} from "../models/events-get-response-resource.js";
import { eventsResponseSchema, type EventsResponse } from "../models/events-response.js";
import { eventsTypesResponseSchema, type EventsTypesResponse } from "../models/events-types-response.js";
import { eventsTypesResponse1Schema, type EventsTypesResponse1 } from "../models/events-types-response1.js";
import { eventsTypes400Error1Schema, type EventsTypes400Error1 } from "../models/events-types400-error1.js";
import { eventsTypes401Error1Schema, type EventsTypes401Error1 } from "../models/events-types401-error1.js";
import { eventsTypes403Error1Schema, type EventsTypes403Error1 } from "../models/events-types403-error1.js";
import { eventsTypes404Error1Schema, type EventsTypes404Error1 } from "../models/events-types404-error1.js";
import { eventsTypes429Error1Schema, type EventsTypes429Error1 } from "../models/events-types429-error1.js";
import { eventsTypes500Error1Schema, type EventsTypes500Error1 } from "../models/events-types500-error1.js";
import { eventsTypes503Error1Schema, type EventsTypes503Error1 } from "../models/events-types503-error1.js";
import { events400Error1Schema, type Events400Error1 } from "../models/events400-error1.js";
import { events400Error21Schema, type Events400Error21 } from "../models/events400-error21.js";
import { events401Error1Schema, type Events401Error1 } from "../models/events401-error1.js";
import { events401Error21Schema, type Events401Error21 } from "../models/events401-error21.js";
import { events403Error1Schema, type Events403Error1 } from "../models/events403-error1.js";
import { events403Error21Schema, type Events403Error21 } from "../models/events403-error21.js";
import { events404Error1Schema, type Events404Error1 } from "../models/events404-error1.js";
import { events404Error21Schema, type Events404Error21 } from "../models/events404-error21.js";
import { events429Error1Schema, type Events429Error1 } from "../models/events429-error1.js";
import { events500Error1Schema, type Events500Error1 } from "../models/events500-error1.js";
import { events500Error21Schema, type Events500Error21 } from "../models/events500-error21.js";
import { events503Error1Schema, type Events503Error1 } from "../models/events503-error1.js";
import { events503Error21Schema, type Events503Error21 } from "../models/events503-error21.js";
import type { Servers } from "../servers.js";

export class Events {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Retrieve an event type
   *
   * @remarks
   * Returns a single event type based on the parameter input.
   *
   * @returns OK
   *
   * @throws {@link Events.GetEventTypeByIdError} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link BasiqError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getEventTypeById(
    request: Events.GetEventTypeByIdRequest,
    options?: RequestOptions,
  ): ApiPromise<EventsTypesResponse1, Events.GetEventTypeByIdError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/events/types/{id}"),
        auth: this.#auth.servicesToken,
        pathParams: [{ name: "id", value: request.id, schema: s.string() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: eventsTypesResponse1Schema },
        errorFactory: Events.GetEventTypeByIdError,
      },
      options,
    );
  }

  /**
   * List all events
   *
   * @remarks
   * Returns a list of all events that have taken place.
   *
   * @returns Returns details of events.
   *
   * @throws {@link Events.GetEventsError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link BasiqError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getEvents(
    request: Events.GetEventsRequest = {},
    options?: RequestOptions,
  ): ApiPromise<EventsGetResponseResource, Events.GetEventsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/events"),
        auth: this.#auth.servicesToken,
        pathParams: [],
        query: [{ name: "filter", value: request.filter, schema: s.optional(s.string()) }],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: eventsGetResponseResourceSchema },
        errorFactory: Events.GetEventsError,
      },
      options,
    );
  }

  /**
   * Retrieve an event
   *
   * @remarks
   * Returns a single event type based on the parameter input.
   *
   * @returns Returns the ID of an event.
   *
   * @throws {@link Events.GetTypeByIdError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link BasiqError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getTypeById(
    request: Events.GetTypeByIdRequest,
    options?: RequestOptions,
  ): ApiPromise<EventsResponse, Events.GetTypeByIdError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/events/{id}"),
        auth: this.#auth.servicesToken,
        pathParams: [{ name: "id", value: request.id, schema: s.string() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: eventsResponseSchema },
        errorFactory: Events.GetTypeByIdError,
      },
      options,
    );
  }

  /**
   * List event types
   *
   * @remarks
   * Returns a list of event types.
   *
   * @returns OK
   *
   * @throws {@link Events.ListEventTypesError} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link BasiqError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listEventTypes(options?: RequestOptions): ApiPromise<EventsTypesResponse, Events.ListEventTypesError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/events/types"),
        auth: this.#auth.servicesToken,
        pathParams: [],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: eventsTypesResponseSchema },
        errorFactory: Events.ListEventTypesError,
      },
      options,
    );
  }
}

export namespace Events {
  export type GetEventTypeByIdRequest = {
    id: string;
  };

  export class GetEventTypeByIdError extends ApiError {
    declare readonly payload:
      | Declared<"eventsTypes400Error1", EventsTypes400Error1>
      | Declared<"eventsTypes401Error1", EventsTypes401Error1>
      | Declared<"eventsTypes403Error1", EventsTypes403Error1>
      | Declared<"eventsTypes404Error1", EventsTypes404Error1>
      | Declared<"eventsTypes429Error1", EventsTypes429Error1>
      | Declared<"eventsTypes500Error1", EventsTypes500Error1>
      | Declared<"eventsTypes503Error1", EventsTypes503Error1>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetEventTypeByIdError> = [
      { on: 400, kind: "eventsTypes400Error1", decode: { kind: "json", schema: eventsTypes400Error1Schema } },
      { on: 401, kind: "eventsTypes401Error1", decode: { kind: "json", schema: eventsTypes401Error1Schema } },
      { on: 403, kind: "eventsTypes403Error1", decode: { kind: "json", schema: eventsTypes403Error1Schema } },
      { on: 404, kind: "eventsTypes404Error1", decode: { kind: "json", schema: eventsTypes404Error1Schema } },
      { on: 429, kind: "eventsTypes429Error1", decode: { kind: "json", schema: eventsTypes429Error1Schema } },
      { on: 500, kind: "eventsTypes500Error1", decode: { kind: "json", schema: eventsTypes500Error1Schema } },
      { on: 503, kind: "eventsTypes503Error1", decode: { kind: "json", schema: eventsTypes503Error1Schema } },
    ];
  }

  export type GetEventsRequest = {
    /**
     * Retrieves the details of all events associated with a user.
     *
     * **Note:** This endpoint only returns events that happened in the last 7 days.
     *
     * **Filtering Options:**
     * - `userId`: User ID for the specific user you wish to retrieve events for. e.g.,
     *   `user.id.eq(userId)`
     * - `entity`: Filter events by entity type. e.g., `event.entity.eq(entity)`
     * - `type`: Filter events by event type. e.g., `event.type.eq(type)`
     */
    filter?: string;
  };

  export class GetEventsError extends ApiError {
    declare readonly payload:
      | Declared<"events400Error1", Events400Error1>
      | Declared<"events401Error1", Events401Error1>
      | Declared<"events403Error1", Events403Error1>
      | Declared<"events404Error1", Events404Error1>
      | Declared<"events500Error1", Events500Error1>
      | Declared<"events503Error1", Events503Error1>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetEventsError> = [
      { on: 400, kind: "events400Error1", decode: { kind: "json", schema: events400Error1Schema } },
      { on: 401, kind: "events401Error1", decode: { kind: "json", schema: events401Error1Schema } },
      { on: 403, kind: "events403Error1", decode: { kind: "json", schema: events403Error1Schema } },
      { on: 404, kind: "events404Error1", decode: { kind: "json", schema: events404Error1Schema } },
      { on: 500, kind: "events500Error1", decode: { kind: "json", schema: events500Error1Schema } },
      { on: 503, kind: "events503Error1", decode: { kind: "json", schema: events503Error1Schema } },
    ];
  }

  export type GetTypeByIdRequest = {
    id: string;
  };

  export class GetTypeByIdError extends ApiError {
    declare readonly payload:
      | Declared<"events400Error21", Events400Error21>
      | Declared<"events401Error21", Events401Error21>
      | Declared<"events403Error21", Events403Error21>
      | Declared<"events404Error21", Events404Error21>
      | Declared<"events429Error1", Events429Error1>
      | Declared<"events500Error21", Events500Error21>
      | Declared<"events503Error21", Events503Error21>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetTypeByIdError> = [
      { on: 400, kind: "events400Error21", decode: { kind: "json", schema: events400Error21Schema } },
      { on: 401, kind: "events401Error21", decode: { kind: "json", schema: events401Error21Schema } },
      { on: 403, kind: "events403Error21", decode: { kind: "json", schema: events403Error21Schema } },
      { on: 404, kind: "events404Error21", decode: { kind: "json", schema: events404Error21Schema } },
      { on: 429, kind: "events429Error1", decode: { kind: "json", schema: events429Error1Schema } },
      { on: 500, kind: "events500Error21", decode: { kind: "json", schema: events500Error21Schema } },
      { on: 503, kind: "events503Error21", decode: { kind: "json", schema: events503Error21Schema } },
    ];
  }

  export class ListEventTypesError extends ApiError {
    declare readonly payload:
      | Declared<"eventsTypes401Error1", EventsTypes401Error1>
      | Declared<"eventsTypes403Error1", EventsTypes403Error1>
      | Declared<"eventsTypes429Error1", EventsTypes429Error1>
      | Declared<"eventsTypes500Error1", EventsTypes500Error1>
      | Declared<"eventsTypes503Error1", EventsTypes503Error1>
      | Undeclared;

    static readonly errors: ErrorDecoders<ListEventTypesError> = [
      { on: 401, kind: "eventsTypes401Error1", decode: { kind: "json", schema: eventsTypes401Error1Schema } },
      { on: 403, kind: "eventsTypes403Error1", decode: { kind: "json", schema: eventsTypes403Error1Schema } },
      { on: 429, kind: "eventsTypes429Error1", decode: { kind: "json", schema: eventsTypes429Error1Schema } },
      { on: 500, kind: "eventsTypes500Error1", decode: { kind: "json", schema: eventsTypes500Error1Schema } },
      { on: 503, kind: "eventsTypes503Error1", decode: { kind: "json", schema: eventsTypes503Error1Schema } },
    ];
  }
}
