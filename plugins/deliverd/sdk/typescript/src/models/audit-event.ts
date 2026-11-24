import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type AuditEvent = {
  id: string;
  eventType: string;
  actorType: string;
  actorId: string | null;
  actorLabel: string | null;
  resourceType: string | null;
  resourceId: string | null;
  metadata: Record<string, unknown>;
  ip: string | null;
  requestId: string | null;
  createdAt: string;
  /** Position in the organisation's hash chain. Null on entries written before the chain began. */
  chainSeq: number | null;
  /** The hash of the entry before this one in the chain. */
  prevHash: string | null;
  /** sha256 over prevHash and this entry's fields. */
  rowHash: string | null;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const auditEventSchema: Schema<AuditEvent> = s.object<AuditEvent>(
  {
    id: s.string(),
    eventType: s.string(),
    actorType: s.string(),
    actorId: s.nullable(s.string()),
    actorLabel: s.nullable(s.string()),
    resourceType: s.nullable(s.string()),
    resourceId: s.nullable(s.string()),
    metadata: s.record(s.string(), s.unknown()),
    ip: s.nullable(s.string()),
    requestId: s.nullable(s.string()),
    createdAt: s.string(),
    chainSeq: s.nullable(s.int()),
    prevHash: s.nullable(s.string()),
    rowHash: s.nullable(s.string()),
  },
  { additionalProperties: s.json() },
);
