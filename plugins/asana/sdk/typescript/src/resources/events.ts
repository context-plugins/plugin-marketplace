import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { anyAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import * as s from "../core/validation/index.js";
import { errorResponseSchema, type ErrorResponse } from "../models/error-response.js";
import { eventsResponseSchema, type EventsResponse } from "../models/events-response.js";
import type { Servers } from "../servers.js";

/**
 * An event is an object representing a change to a resource that was observed by an event
 * subscription. Event streams rely on the same infrastructure as webhooks, which ensures events are
 * delivered within a minute (on average). This system is designed for at most once delivery,
 * meaning in exceptional circumstances a small number of events may be missing from the stream. For
 * this reason, if your use case requires strong guarantees about processing all changes on a
 * resource and cannot tolerate any missing events, regardless of how rare that might be, we
 * recommend building a fallback polling system that fetches the resource periodically as well. Note
 * that while webhooks cannot be replayed once delivered, events are retrievable from the event
 * stream for 24 hours after being processed.
 *
 * In general, requesting events on a resource is faster and subject to higher rate limits than
 * requesting the resource itself. Additionally, change events "bubble up" (e.g., listening to
 * events on a project would include when stories are added to tasks in the project, and even to
 * subtasks).
 *
 * Establish an initial sync token by making a request with no sync token. The response will be a
 * `412 Precondition Failed` error - the same as if the sync token had expired.
 *
 * Subsequent requests should always provide the sync token from the immediately preceding call.
 *
 * Sync tokens may not be valid if you attempt to go "backward" in the history by requesting
 * previous tokens, though re-requesting the current sync token is generally safe, and will always
 * return the same results.
 *
 * When you receive a `412 Precondition Failed` error, it means that the sync token is either
 * invalid or expired. If you are attempting to keep a set of data in sync, this signals you may
 * need to re-crawl the data.
 *
 * Sync tokens always expire after 24 hours, but may expire sooner, depending on load on the
 * service.
 */
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
   * Get events on a resource
   *
   * @remarks
   * Returns the full record for all events that have occurred since the sync token was created.
   *
   * A `GET` request to the endpoint `/[path_to_resource]/events` can be made in lieu of including
   * the resource ID in the data for the request.
   *
   * Asana limits a single sync token to 100 events. If more than 100 events exist for a given
   * resource, `has_more: true` will be returned in the response, indicating that there are more
   * events to pull.
   *
   * *Note: The resource returned will be the resource that triggered the event. This may be
   * different from the one that the events were requested for. For example, a subscription to a
   * project will contain events for tasks contained within the project.*
   *
   * @returns Successfully retrieved events.
   *
   * @throws {@link Events.GetEventsError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link AsanaError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getEvents(
    request: Events.GetEventsRequest,
    options?: RequestOptions,
  ): ApiPromise<EventsResponse, Events.GetEventsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/events"),
        auth: anyAuth(this.#auth.personalAccessToken, this.#auth.oauth2),
        pathParams: [],
        query: [
          { name: "resource", value: request.resource, schema: s.string() },
          { name: "sync", value: request.sync, schema: s.optional(s.string()) },
          { name: "opt_pretty", value: request.optPretty, schema: s.optionalNullable(s.boolean()) },
          {
            name: "opt_fields",
            value: request.optFields,
            schema: s.optional(s.array(s.string())),
            style: "csv",
          },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: eventsResponseSchema },
        errorFactory: Events.GetEventsError,
      },
      options,
    );
  }
}

export namespace Events {
  export type GetEventsRequest = {
    /** A resource ID to subscribe to. The resource can be a task or project. */
    resource: string;
    /**
     * A sync token received from the last request, or none on first sync. Events will be returned
     * from the point in time that the sync token was generated. *Note: On your first request, omit
     * the sync token. The response will be the same as for an expired sync token, and will include
     * a new valid sync token.If the sync token is too old (which may happen from time to time) the
     * API will return a `412 Precondition Failed` error, and include a fresh sync token in the
     * response.*
     */
    sync?: string;
    /**
     * Provides “pretty” output. Provides the response in a “pretty” format. In the case of JSON
     * this means doing proper line breaking and indentation to make it readable. This will take
     * extra time and increase the response size so it is advisable only to use this during
     * debugging.
     */
    optPretty?: boolean | null;
    /**
     * Defines fields to return. Some requests return *compact* representations of objects in order
     * to conserve resources and complete the request more efficiently. Other times requests return
     * more information than you may need. This option allows you to list the exact set of fields
     * that the API should be sure to return for the objects. The field names should be provided as
     * paths, described below. The id of included objects will always be returned, regardless of the
     * field options.
     */
    optFields?: string[];
  };

  export class GetEventsError extends ApiError {
    declare readonly payload:
      | Declared<"errorResponse", ErrorResponse>
      | Declared<"errorResponse2", ErrorResponse>
      | Declared<"errorResponse3", ErrorResponse>
      | Declared<"errorResponse4", ErrorResponse>
      | Declared<"errorResponse5", ErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetEventsError> = [
      { on: 400, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 401, kind: "errorResponse2", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 403, kind: "errorResponse3", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 404, kind: "errorResponse4", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 500, kind: "errorResponse5", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }
}
