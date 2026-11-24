import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { actorTypeSchema, type ActorType } from "../models/actor-type.js";
import {
  apiV1AuditEventsResponseSchema,
  type ApiV1AuditEventsResponse,
} from "../models/api-v1-audit-events-response.js";
import type { Servers } from "../servers.js";

export class AuditEvents {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * List audit events
   *
   * @remarks
   * The organisation's audit trail, newest first, a page at a time, for a SIEM, a warehouse or an
   * auditor's script. Each entry carries its position in the organisation's hash chain
   * (`chainSeq`), the hash before it (`prevHash`) and its own (`rowHash`). Needs `audit:read` and a
   * key bound to an owner, an administrator or a security administrator, read on every call; an
   * agent key is refused (`403 agent_not_permitted`), as is anybody else (`403 not_permitted`). To
   * tail the log, pass `afterSeq` (the last `chainSeq` you have): entries then come oldest first by
   * chain position, which cannot miss an entry written late with an earlier time, as `since` can.
   * For a live feed, subscribe a webhook endpoint to `audit.event` instead.
   *
   * @returns Entries, newest first
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link DeliverdError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getApiV1AuditEvents(
    request: AuditEvents.GetApiV1AuditEventsRequest = {},
    options?: RequestOptions,
  ): ApiPromise<ApiV1AuditEventsResponse, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/v1/audit-events"),
        auth: this.#auth.bearerAuth,
        pathParams: [],
        query: [
          { name: "limit", value: request.limit, schema: s.optional(s.int()) },
          { name: "cursor", value: request.cursor, schema: s.optional(s.string()) },
          { name: "since", value: request.since, schema: s.optional(s.dateTime()) },
          { name: "until", value: request.until, schema: s.optional(s.dateTime()) },
          { name: "eventType", value: request.eventType, schema: s.optional(s.string()) },
          { name: "actorId", value: request.actorId, schema: s.optional(s.string()) },
          { name: "actorType", value: request.actorType, schema: s.optional(s.lazy(() => actorTypeSchema)) },
          { name: "resourceType", value: request.resourceType, schema: s.optional(s.string()) },
          { name: "resourceId", value: request.resourceId, schema: s.optional(s.string()) },
          { name: "flowId", value: request.flowId, schema: s.optional(s.string()) },
          { name: "afterSeq", value: request.afterSeq, schema: s.optionalNullable(s.int()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: apiV1AuditEventsResponseSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }
}

export namespace AuditEvents {
  export type GetApiV1AuditEventsRequest = {
    /** Rows per page. Above the maximum you get the maximum, not an error. */
    limit?: number;
    /** nextCursor from a previous response. One we did not issue is refused. */
    cursor?: string;
    /** Entries at or after this time (ISO 8601). */
    since?: Date;
    /** Entries at or before this time (ISO 8601). */
    until?: Date;
    /** An event type (`report.published`), or a family ending in a dot (`legal_hold.`). */
    eventType?: string;
    /** The person, agent or key that acted. */
    actorId?: string;
    /** What kind of actor. */
    actorType?: ActorType;
    /** What the entry is about, e.g. `report`. */
    resourceType?: string;
    /** The id of what it is about. */
    resourceId?: string;
    /**
     * Entries about this flow (project) and everything attached to it: its approvals, reviews,
     * requests and reports.
     */
    flowId?: string;
    /**
     * Entries after this chain position, oldest first: the way to tail the log. Pass the last
     * chainSeq you have; 0 starts at the first chained entry. Unlike since, it cannot miss an entry
     * written late with an earlier time.
     */
    afterSeq?: number | null;
  };

  export const getApiV1AuditEventsRequestSchema: Schema<GetApiV1AuditEventsRequest> = s.lazySchema(() =>
    s.object<GetApiV1AuditEventsRequest>({
      limit: s.optional(s.int().check(s.gte(1), s.lte(200))),
      cursor: s.optional(s.string()),
      since: s.optional(s.dateTime()),
      until: s.optional(s.dateTime()),
      eventType: s.optional(s.string().check(s.maxLength(100))),
      actorId: s.optional(s.string()),
      actorType: s.optional(s.lazy(() => actorTypeSchema)),
      resourceType: s.optional(s.string().check(s.maxLength(100))),
      resourceId: s.optional(s.string().check(s.maxLength(200))),
      flowId: s.optional(s.string()),
      afterSeq: s.optionalNullable(s.int().check(s.gte(0))),
    }),
  );
}
