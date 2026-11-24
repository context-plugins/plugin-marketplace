import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** A service that generates audit events */
export type AuditSource = {
  /** Name identifier of the audit event source service */
  name?: string;
  /** List of event target categories for this source */
  targets?: string[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const auditSourceSchema: Schema<AuditSource> = s.object<AuditSource>(
  {
    name: s.optional(s.string()),
    targets: s.optional(s.array(s.string())),
  },
  { additionalProperties: s.json() },
);
