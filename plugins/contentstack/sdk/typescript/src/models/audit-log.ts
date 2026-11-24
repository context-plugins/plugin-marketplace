import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** An audit log entry recording an administrative action. */
export type AuditLog = {
  /** Unique identifier of the audit log entry. */
  uid?: string;
  /** The administrative action that was performed. */
  action?: string;
  /** UID of the user who performed the action. */
  performedBy?: string;
  /** ISO 8601 timestamp when the action was performed. */
  createdAt?: Date;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const auditLogSchema: Schema<AuditLog> = s.object<AuditLog>(
  {
    uid: s.optional(s.string()),
    action: s.optional(s.string()),
    performedBy: s.optional(s.string()),
    createdAt: s.optional(s.dateTime()),
    _keysMap: {
      performedBy: "performed_by",
      createdAt: "created_at",
    },
  },
  { additionalProperties: s.json() },
);
