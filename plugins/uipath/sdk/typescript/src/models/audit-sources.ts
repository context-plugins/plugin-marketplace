import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { auditSourceSchema, type AuditSource } from "./audit-source.js";

/** Available audit event sources and categories */
export type AuditSources = {
  sources?: AuditSource[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const auditSourcesSchema: Schema<AuditSources> = s.object<AuditSources>(
  {
    sources: s.optional(s.array(s.lazy(() => auditSourceSchema))),
  },
  { additionalProperties: s.json() },
);
