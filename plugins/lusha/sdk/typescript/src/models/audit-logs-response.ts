import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { auditLogEntryInternalSchema, auditLogEntrySchema, type AuditLogEntry } from "./audit-log-entry.js";
import { paginationResponseSchema, type PaginationResponse } from "./pagination-response.js";

export type AuditLogsResponse = {
  data: AuditLogEntry[];
  pagination: PaginationResponse;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const auditLogsResponseProperties: s.Shape<AuditLogsResponse> = {
  data: s.array(s.lazy(() => auditLogEntryInternalSchema)),
  pagination: paginationResponseSchema,
};

export const auditLogsResponseInternalSchema: Schema<AuditLogsResponse> = s.object<AuditLogsResponse>(
  auditLogsResponseProperties,
  { additionalProperties: s.json() },
);

export const auditLogsResponseSchema: Schema<AuditLogsResponse> = s.lazySchema(() =>
  s.object<AuditLogsResponse>(
    {
      ...auditLogsResponseProperties,
      data: s.array(s.lazy(() => auditLogEntrySchema)),
    },
    { additionalProperties: s.json() },
  ),
);
