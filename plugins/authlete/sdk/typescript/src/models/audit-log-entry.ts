import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { statusSchema, type Status } from "./status.js";

export type AuditLogEntry = {
  /** The audit event type (e.g. service.create, security.login). */
  event?: string;
  /** Whether the action completed successfully or failed. */
  status?: Status;
  /**
   * When the event occurred (ISO 8601). May be null for entries without a recorded timestamp; such
   * entries are only returned on the first page of results.
   */
  timestamp?: Date | null;
  /** The cluster or region where the event occurred. */
  cluster?: string;
  /** The API path that triggered the event. */
  path?: string;
  /** The IP address of the client that performed the action. */
  remoteAddr?: string;
  /** The user agent of the client. */
  userAgent?: string;
  /** The user or token that performed the action. */
  user?: string;
  /** Additional event-specific metadata. */
  details?: Record<string, unknown>;
};

export const auditLogEntrySchema: Schema<AuditLogEntry> = s.object<AuditLogEntry>({
  event: s.optional(s.string()),
  status: s.optional(s.lazy(() => statusSchema)),
  timestamp: s.optionalNullable(s.dateTime()),
  cluster: s.optional(s.string()),
  path: s.optional(s.string()),
  remoteAddr: s.optional(s.string()),
  userAgent: s.optional(s.string()),
  user: s.optional(s.string()),
  details: s.optional(s.record(s.string(), s.unknown())),
});
