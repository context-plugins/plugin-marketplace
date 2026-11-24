import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** User whose action created Audit Trail Entry. */
export type AuditTrailUser = {
  /** BILL-generated ID of the user. The value begins with `006`. */
  id?: string;
  /** Name of the user */
  name?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const auditTrailUserSchema: Schema<AuditTrailUser> = s.object<AuditTrailUser>(
  {
    id: s.optional(s.string()),
    name: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
