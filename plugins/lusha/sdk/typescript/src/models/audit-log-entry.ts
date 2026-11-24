import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { statusLushaWebhooksApiSchema, type StatusLushaWebhooksApi } from "./status-lusha-webhooks-api.js";

export type AuditLogEntry = {
  id: string;
  subscriptionId: string;
  payloadId: string;
  status: StatusLushaWebhooksApi;
  statusCode?: number;
  url: string;
  deliveredAt: Date;
  durationMs?: number;
  error?: string | null;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const auditLogEntryProperties: s.Shape<AuditLogEntry> = {
  id: s.string(),
  subscriptionId: s.string(),
  payloadId: s.string(),
  status: statusLushaWebhooksApiSchema,
  statusCode: s.optional(s.int()),
  url: s.string(),
  deliveredAt: s.dateTime(),
  durationMs: s.optional(s.int()),
  error: s.optionalNullable(s.string()),
};

export const auditLogEntryInternalSchema: Schema<AuditLogEntry> = s.object<AuditLogEntry>(
  auditLogEntryProperties,
  { additionalProperties: s.json() },
);

export const auditLogEntrySchema: Schema<AuditLogEntry> = s.lazySchema(() =>
  s.object<AuditLogEntry>(
    {
      ...auditLogEntryProperties,
      url: s.string().check(s.url()),
    },
    { additionalProperties: s.json() },
  ),
);
