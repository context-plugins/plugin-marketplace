import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { auditLogEventActorSchema, type AuditLogEventActor } from "./audit-log-event-actor.js";
import { auditLogEventContextSchema, type AuditLogEventContext } from "./audit-log-event-context.js";
import { auditLogEventResourceSchema, type AuditLogEventResource } from "./audit-log-event-resource.js";

/**
 * An object representing a single event within an Asana domain.
 *
 * Every audit log event is comprised of an `event_type`, `actor`, `resource`, and `context`. Some
 * events will include additional metadata about the event under `details`. See our [currently
 * supported list of events](/docs/supported-auditlogevents) for more details.
 */
export type AuditLogEvent = {
  /** Globally unique identifier of the `AuditLogEvent`, as a string. */
  gid?: string;
  /** The time the event was created. */
  createdAt?: Date;
  /** The type of the event. */
  eventType?: string;
  /** The category that this `event_type` belongs to. */
  eventCategory?: string;
  actor?: AuditLogEventActor;
  resource?: AuditLogEventResource;
  details?: Record<string, unknown>;
  context?: AuditLogEventContext;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const auditLogEventSchema: Schema<AuditLogEvent> = s.object<AuditLogEvent>(
  {
    gid: s.optional(s.string()),
    createdAt: s.optional(s.dateTime()),
    eventType: s.optional(s.string()),
    eventCategory: s.optional(s.string()),
    actor: s.optional(s.lazy(() => auditLogEventActorSchema)),
    resource: s.optional(s.lazy(() => auditLogEventResourceSchema)),
    details: s.optional(s.record(s.string(), s.unknown())),
    context: s.optional(s.lazy(() => auditLogEventContextSchema)),
    _keysMap: {
      createdAt: "created_at",
      eventType: "event_type",
      eventCategory: "event_category",
    },
  },
  { additionalProperties: s.json() },
);
