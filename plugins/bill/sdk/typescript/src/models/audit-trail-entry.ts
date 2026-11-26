import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { fieldSchema, type Field } from "./field.js";
import { userBillV3ReportsApiSchema, type UserBillV3ReportsApi } from "./user-bill-v3-reports-api.js";

/** Audit trail details response. */
export type AuditTrailEntry = {
  /** Set as `API` when the create or edit operation is completed with the API */
  source?: string;
  /** Operation type (`CREATE` or `EDIT`) */
  type?: string;
  /** Created date and time of the audit trail record */
  createdTime?: string;
  user?: UserBillV3ReportsApi;
  field?: Field;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const auditTrailEntrySchema: Schema<AuditTrailEntry> = s.object<AuditTrailEntry>(
  {
    source: s.optional(s.string()),
    type: s.optional(s.string()),
    createdTime: s.optional(s.string()),
    user: s.optional(s.lazy(() => userBillV3ReportsApiSchema)),
    field: s.optional(s.lazy(() => fieldSchema)),
  },
  { additionalProperties: s.json() },
);
