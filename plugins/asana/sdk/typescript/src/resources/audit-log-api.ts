import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { anyAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import * as s from "../core/validation/index.js";
import { actorType1Schema, type ActorType1 } from "../models/actor-type1.js";
import { errorResponseSchema, type ErrorResponse } from "../models/error-response.js";
import {
  workspacesAuditLogEventsResponseSchema,
  type WorkspacesAuditLogEventsResponse,
} from "../models/workspaces-audit-log-events-response.js";
import type { Servers } from "../servers.js";

/**
 * Asana's audit log is an immutable log of important events in your organization's Asana instance.
 *
 * The audit log API allows you to monitor and act upon important security and compliance-related
 * changes. Organizations might use this API endpoint to:
 *
 * * Set up proactive alerting with a Security Information and Event Management (SIEM) tool like
 *   Splunk
 * * Conduct reactive investigations when a security incident takes place
 * * Visualize key domain data in aggregate to identify security trends
 *
 * Note that since the API provides insight into what is happening in an Asana instance, the data is
 * read-only. That is, there are no "write" or "update" endpoints for audit log events.
 *
 * Only Service Accounts in Enterprise Domains can access audit log API endpoints. Authentication
 * with a Service Account's personal access token is required.
 *
 * For a full list of supported events, see supported AuditLogEvents.
 */
export class AuditLogApi {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Get audit log events
   *
   * @remarks
   * Retrieve the audit log events that have been captured in your domain.
   *
   * This endpoint will return a list of AuditLogEvent objects, sorted by creation time in ascending
   * order. Note that the Audit Log API captures events from October 8th, 2021 and later. Queries
   * for events before this date will not return results.
   *
   * There are a number of query parameters (below) that can be used to filter the set of
   * AuditLogEvent objects that are returned in the response. Any combination of query parameters is
   * valid. When no filters are provided, all of the events that have been captured in your domain
   * will match.
   *
   * The list of events will always be paginated. The default limit is 1000 events. The next set of
   * events can be retrieved using the `offset` from the previous response. If there are no events
   * that match the provided filters in your domain, the endpoint will return `null` for the
   * `next_page` field. Querying again with the same filters may return new events if they were
   * captured after the last request. Once a response includes a `next_page` with an `offset`,
   * subsequent requests can be made with the latest `offset` to poll for new events that match the
   * provided filters.
   *
   * When no `offset` is provided, the response will begin with the oldest events that match the
   * provided filters. It is important to note that AuditLogEvent objects will be permanently
   * deleted from our systems after 90 days. If you wish to keep a permanent record of these events,
   * we recommend using a SIEM tool to ingest and store these logs.
   *
   * @returns AuditLogEvents were successfully retrieved.
   *
   * @throws {@link AuditLogApi.GetAuditLogEventsError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link AsanaError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getAuditLogEvents(
    request: AuditLogApi.GetAuditLogEventsRequest,
    options?: RequestOptions,
  ): ApiPromise<WorkspacesAuditLogEventsResponse, AuditLogApi.GetAuditLogEventsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/workspaces/{workspace_gid}/audit_log_events"),
        auth: anyAuth(this.#auth.personalAccessToken, this.#auth.oauth2),
        pathParams: [{ name: "workspace_gid", value: request.workspaceGid, schema: s.string() }],
        query: [
          { name: "start_at", value: request.startAt, schema: s.optional(s.dateTime()) },
          { name: "end_at", value: request.endAt, schema: s.optional(s.dateTime()) },
          { name: "event_type", value: request.eventType, schema: s.optional(s.string()) },
          {
            name: "actor_type",
            value: request.actorType,
            schema: s.optional(s.lazy(() => actorType1Schema)),
          },
          { name: "actor_gid", value: request.actorGid, schema: s.optional(s.string()) },
          { name: "resource_gid", value: request.resourceGid, schema: s.optional(s.string()) },
          { name: "limit", value: request.limit, schema: s.optional(s.int()) },
          { name: "offset", value: request.offset, schema: s.optional(s.string()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: workspacesAuditLogEventsResponseSchema },
        errorFactory: AuditLogApi.GetAuditLogEventsError,
      },
      options,
    );
  }
}

export namespace AuditLogApi {
  export type GetAuditLogEventsRequest = {
    /** Globally unique identifier for the workspace or organization. */
    workspaceGid: string;
    /** Filter to events created after this time (inclusive). */
    startAt?: Date;
    /** Filter to events created before this time (exclusive). */
    endAt?: Date;
    /**
     * Filter to events of this type. Refer to the [Supported
     * AuditLogEvents](/docs/supported-auditlogevents) for a full list of values.
     */
    eventType?: string;
    /**
     * Filter to events with an actor of this type. This only needs to be included if querying for
     * actor types without an ID. If `actor_gid` is included, this should be excluded.
     */
    actorType?: ActorType1;
    /** Filter to events triggered by the actor with this ID. */
    actorGid?: string;
    /** Filter to events with this resource ID. */
    resourceGid?: string;
    /**
     * Results per page. The number of objects to return per page. The value must be between 1 and
     * 100.
     */
    limit?: number;
    /**
     * Offset token. An offset to the next page returned by the API. A pagination request will
     * return an offset token, which can be used as an input parameter to the next request. If an
     * offset is not passed in, the API will return the first page of results. 'Note: You can only
     * pass in an offset that was returned to you via a previously paginated request.'
     */
    offset?: string;
  };

  export class GetAuditLogEventsError extends ApiError {
    declare readonly payload:
      | Declared<"errorResponse", ErrorResponse>
      | Declared<"errorResponse2", ErrorResponse>
      | Declared<"errorResponse3", ErrorResponse>
      | Declared<"errorResponse4", ErrorResponse>
      | Declared<"errorResponse5", ErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetAuditLogEventsError> = [
      { on: 400, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 401, kind: "errorResponse2", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 403, kind: "errorResponse3", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 404, kind: "errorResponse4", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 500, kind: "errorResponse5", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }
}
