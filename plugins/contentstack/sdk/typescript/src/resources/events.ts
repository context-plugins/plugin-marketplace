import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { noneAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import {
  errorContentstackPersonalizeManagementAttributesApiSchema,
  type ErrorContentstackPersonalizeManagementAttributesApi,
} from "../models/error-contentstack-personalize-management-attributes-api.js";
import { eventListSchema, type EventList } from "../models/event-list.js";
import { trackEventSchema, type TrackEvent } from "../models/track-event.js";
import type { Servers } from "../servers.js";

/**
 * The events endpoint allows applications to track user actions and behavioral events for
 * experience analytics and audience rule evaluation.
 */
export class Events {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;

  constructor(rawClient: RawClient, servers: Servers) {
    this.#rawClient = rawClient;
    this.#servers = servers;
  }

  /**
   * Get all events
   *
   * @remarks
   * Retrieves all custom event definitions in the Personalize project. Events are used to track
   * user interactions and trigger audience membership updates.
   *
   * @returns A list of all events in the project.
   *
   * @throws {@link Events.GetAllEventsError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link ContentstackError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getAllEvents(
    request: Events.GetAllEventsRequest,
    options?: RequestOptions,
  ): ApiPromise<EventList, Events.GetAllEventsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.defaultContentstackEventsApi("/events"),
        auth: noneAuth,
        pathParams: [],
        query: [],
        headers: [{ name: "x-project-uid", value: request.xProjectUid, schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: eventListSchema },
        errorFactory: Events.GetAllEventsError,
      },
      options,
    );
  }

  /**
   * Track user events
   *
   * @remarks
   * Records one or more user behavior events for experience analytics and audience evaluation.
   * Supports both impression events (automatic tracking when experiences are shown) and custom
   * events (defined in the Personalize Management API and triggered by specific user actions).
   *
   * @returns Events accepted for processing.
   *
   * @throws {@link Events.TrackEventsError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link ContentstackError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  trackEvents(
    request: Events.TrackEventsRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, Events.TrackEventsError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.defaultContentstackEventsApi("/events"),
        auth: noneAuth,
        pathParams: [],
        query: [],
        headers: [
          { name: "x-project-uid", value: request.xProjectUid, schema: s.string() },
          { name: "x-cs-personalize-user-uid", value: request.xCsPersonalizeUserUid, schema: s.string() },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "json", value: request.body, schema: s.array(s.lazy(() => trackEventSchema)) },
      },
      {
        success: { kind: "empty" },
        errorFactory: Events.TrackEventsError,
      },
      options,
    );
  }
}

export namespace Events {
  export type GetAllEventsRequest = {
    /** The UID of the Contentstack Personalize project. */
    xProjectUid: string;
  };

  export class GetAllEventsError extends ApiError {
    declare readonly payload:
      | Declared<
          "errorContentstackPersonalizeManagementAttributesApi",
          ErrorContentstackPersonalizeManagementAttributesApi
        >
      | Undeclared;

    static readonly errors: ErrorDecoders<GetAllEventsError> = [
      {
        on: 401,
        kind: "errorContentstackPersonalizeManagementAttributesApi",
        decode: { kind: "json", schema: errorContentstackPersonalizeManagementAttributesApiSchema },
      },
    ];
  }

  export type TrackEventsRequest = {
    /** The UID of the Contentstack Personalize project. */
    xProjectUid: string;
    /** The unique identifier for the end user whose events are being tracked. */
    xCsPersonalizeUserUid: string;
    body: TrackEvent[];
  };

  export class TrackEventsError extends ApiError {
    declare readonly payload:
      | Declared<
          "errorContentstackPersonalizeManagementAttributesApi",
          ErrorContentstackPersonalizeManagementAttributesApi
        >
      | Declared<
          "errorContentstackPersonalizeManagementAttributesApi2",
          ErrorContentstackPersonalizeManagementAttributesApi
        >
      | Undeclared;

    static readonly errors: ErrorDecoders<TrackEventsError> = [
      {
        on: 400,
        kind: "errorContentstackPersonalizeManagementAttributesApi",
        decode: { kind: "json", schema: errorContentstackPersonalizeManagementAttributesApiSchema },
      },
      {
        on: 403,
        kind: "errorContentstackPersonalizeManagementAttributesApi2",
        decode: { kind: "json", schema: errorContentstackPersonalizeManagementAttributesApiSchema },
      },
    ];
  }
}
