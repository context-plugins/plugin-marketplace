import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { auditEventSchema, type AuditEvent } from "./audit-event.js";

export type ApiV1AuditEventsResponse = {
  auditEvents: AuditEvent[];
  /** Pass back as ?cursor= for the next page. Null means this is the end. */
  nextCursor: string | null;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const apiV1AuditEventsResponseSchema: Schema<ApiV1AuditEventsResponse> =
  s.object<ApiV1AuditEventsResponse>(
    {
      auditEvents: s.array(s.lazy(() => auditEventSchema)),
      nextCursor: s.nullable(s.string()),
    },
    { additionalProperties: s.json() },
  );
