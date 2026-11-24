import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Previous and current values of the field as captured in Audit Trail Entry. */
export type AuditTrailFieldValue = {
  /** Previous value */
  previous?: string;
  /** Current value */
  current?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const auditTrailFieldValueSchema: Schema<AuditTrailFieldValue> = s.object<AuditTrailFieldValue>(
  {
    previous: s.optional(s.string()),
    current: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
