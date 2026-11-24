import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { auditLogEventSchema, type AuditLogEvent } from "./audit-log-event.js";

export type WorkspacesAuditLogEventsResponse = {
  data?: AuditLogEvent[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const workspacesAuditLogEventsResponseSchema: Schema<WorkspacesAuditLogEventsResponse> =
  s.object<WorkspacesAuditLogEventsResponse>(
    {
      data: s.optional(s.array(s.lazy(() => auditLogEventSchema))),
    },
    { additionalProperties: s.json() },
  );
