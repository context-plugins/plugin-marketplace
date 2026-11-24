import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type AuditLogEntity = {
  date: Date;
  a0User: string;
  changes: Record<string, unknown>[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const auditLogEntitySchema: Schema<AuditLogEntity> = s.object<AuditLogEntity>(
  {
    date: s.dateTime(),
    a0User: s.string(),
    changes: s.array(s.record(s.string(), s.unknown())),
    _keysMap: {
      a0User: "a0_user",
    },
  },
  { additionalProperties: s.json() },
);
