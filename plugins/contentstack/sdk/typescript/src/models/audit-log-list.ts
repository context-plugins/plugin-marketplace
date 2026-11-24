import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { auditLogSchema, type AuditLog } from "./audit-log.js";

/** A list of audit log entries. */
export type AuditLogList = {
  /** Array of audit log objects. */
  data?: AuditLog[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const auditLogListSchema: Schema<AuditLogList> = s.object<AuditLogList>(
  {
    data: s.optional(s.array(s.lazy(() => auditLogSchema))),
  },
  { additionalProperties: s.json() },
);
