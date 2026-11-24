import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { auditEventInternalSchema, auditEventSchema, type AuditEvent } from "./audit-event.js";

/** Collection of audit events with pagination links */
export type AuditEventCollection = {
  auditEvents?: AuditEvent[];
  /** URL to retrieve newer audit events relative to the current result set */
  next?: string;
  /** URL to retrieve older audit events relative to the current result set */
  previous?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const auditEventCollectionProperties: s.Shape<AuditEventCollection> = {
  auditEvents: s.optional(s.array(s.lazy(() => auditEventInternalSchema))),
  next: s.optional(s.string()),
  previous: s.optional(s.string()),
};

export const auditEventCollectionInternalSchema: Schema<AuditEventCollection> =
  s.object<AuditEventCollection>(auditEventCollectionProperties, { additionalProperties: s.json() });

export const auditEventCollectionSchema: Schema<AuditEventCollection> = s.lazySchema(() =>
  s.object<AuditEventCollection>(
    {
      ...auditEventCollectionProperties,
      auditEvents: s.optional(s.array(s.lazy(() => auditEventSchema))),
      next: s.optional(s.string().check(s.url())),
      previous: s.optional(s.string().check(s.url())),
    },
    { additionalProperties: s.json() },
  ),
);
