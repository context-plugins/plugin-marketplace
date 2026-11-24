import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { clientInfoSchema, type ClientInfo } from "./client-info.js";
import { statusSchema, type Status } from "./status.js";

/** A single audit event record */
export type AuditEvent = {
  /** Unique identifier of the audit event */
  id?: string;
  /** ISO 8601 timestamp when the event occurred */
  createdOn?: Date;
  /** Identifier of the organization in which the event occurred */
  organizationId?: string;
  /** Identifier of the user or service that performed the action */
  actorId?: string;
  /** Email address of the actor who performed the action */
  actorEmail?: string;
  /** Type identifier of the audit event */
  eventType?: string;
  /** Service that generated the audit event */
  eventSource?: string;
  /** Category of resource targeted by the action */
  eventTarget?: string;
  /** Detailed payload of the audit event in service-specific format */
  eventDetails?: Record<string, unknown>;
  /** Human-readable summary of the audit event */
  eventSummary?: string;
  /** Outcome status (0 = success, 1 = failed) */
  status?: Status;
  /** Client connection information for an audit event */
  clientInfo?: ClientInfo;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const auditEventProperties: s.Shape<AuditEvent> = {
  id: s.optional(s.string()),
  createdOn: s.optional(s.dateTime()),
  organizationId: s.optional(s.string()),
  actorId: s.optional(s.string()),
  actorEmail: s.optional(s.string()),
  eventType: s.optional(s.string()),
  eventSource: s.optional(s.string()),
  eventTarget: s.optional(s.string()),
  eventDetails: s.optional(s.record(s.string(), s.unknown())),
  eventSummary: s.optional(s.string()),
  status: s.optional(s.lazy(() => statusSchema)),
  clientInfo: s.optional(s.lazy(() => clientInfoSchema)),
};

export const auditEventInternalSchema: Schema<AuditEvent> = s.object<AuditEvent>(auditEventProperties, {
  additionalProperties: s.json(),
});

export const auditEventSchema: Schema<AuditEvent> = s.lazySchema(() =>
  s.object<AuditEvent>(
    {
      ...auditEventProperties,
      actorEmail: s.optional(s.string().check(s.email())),
    },
    { additionalProperties: s.json() },
  ),
);
