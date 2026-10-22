import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import * as s from "../core/validation/index.js";
import { Accept, acceptSchema } from "../models/accept.js";
import type { Servers } from "../servers.js";

/**
 * Operations related to Events
 */
export class EventsApi {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Retrieve event
   *
   * @remarks
   * Returns detailed information for a specific event representing a state change that occurred on
   * a resource in your Dwolla application. Includes the event topic, timestamp, resource links, and
   * correlation ID if applicable.
   *
   * @returns successful operation
   *
   * @throws {@link EventsApi.GetEventError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link DwollaApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getEvent(
    request: EventsApi.GetEventRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, EventsApi.GetEventError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/events/{id}"),
        auth: this.#auth.clientCredentials,
        pathParams: [{ name: "id", value: request.id, schema: s.string() }],
        query: [],
        headers: [
          {
            name: "Accept",
            value: request.accept,
            schema: s.defaulted(acceptSchema, Accept.ApplicationVndDwollaV1HalJson),
          },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: EventsApi.GetEventError,
      },
      options,
    );
  }

  /**
   * List events
   *
   * @remarks
   * Returns a paginated list of events representing state changes to resources in your Dwolla
   * application. Events track actions on customers, transfers, funding sources, and other
   * resources, sorted by creation date (newest first). Events are retained for 30 days and are
   * essential for webhook notifications and system activity monitoring.
   *
   * @returns successful operation
   *
   * @throws {@link EventsApi.ListEventsError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link DwollaApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listEvents(
    request: EventsApi.ListEventsRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, EventsApi.ListEventsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/events"),
        auth: this.#auth.clientCredentials,
        pathParams: [],
        query: [
          { name: "limit", value: request.limit, schema: s.optional(s.int()) },
          { name: "offset", value: request.offset, schema: s.optional(s.int()) },
        ],
        headers: [
          {
            name: "Accept",
            value: request.accept,
            schema: s.defaulted(acceptSchema, Accept.ApplicationVndDwollaV1HalJson),
          },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: EventsApi.ListEventsError,
      },
      options,
    );
  }
}

export namespace EventsApi {
  export type GetEventRequest = {
    /** ID of application event to get */
    id: string;
    /**
     * The media type of the response. Must be application/vnd.dwolla.v1.hal+json
     *
     * @default Accept.ApplicationVndDwollaV1HalJson
     */
    accept?: Accept;
  };

  export class GetEventError extends ApiError {
    declare readonly payload: Declared<"error404", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<GetEventError> = [
      { on: 404, kind: "error404", decode: { kind: "empty" } },
    ];
  }

  export type ListEventsRequest = {
    /** How many results to return */
    limit?: number;
    /** How many results to skip */
    offset?: number;
    /**
     * The media type of the response. Must be application/vnd.dwolla.v1.hal+json
     *
     * @default Accept.ApplicationVndDwollaV1HalJson
     */
    accept?: Accept;
  };

  export class ListEventsError extends ApiError {
    declare readonly payload: Declared<"error404", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<ListEventsError> = [
      { on: 404, kind: "error404", decode: { kind: "empty" } },
    ];
  }
}
