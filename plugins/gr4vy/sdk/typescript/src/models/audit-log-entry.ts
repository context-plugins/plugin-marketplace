import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { auditLogAction1Schema, type AuditLogAction1 } from "./audit-log-action1.js";
import { auditLogEntryResource2Schema, type AuditLogEntryResource2 } from "./audit-log-entry-resource2.js";
import { auditLogEntryUser2Schema, type AuditLogEntryUser2 } from "./audit-log-entry-user2.js";
import { Type5, type5Schema } from "./type5.js";
import { idSchema, type Id } from "./unions/id.js";
import { merchantAccountIdSchema, type MerchantAccountId } from "./unions/merchant-account-id.js";

export type AuditLogEntry = {
  /** Always `audit-log`. @default Type5.AuditLog */
  type?: Type5;
  /** The ID for the audit log entry. */
  id?: Id;
  /** The ID of the merchant account this entry was created for. */
  merchantAccountId?: MerchantAccountId;
  /** The resource that was changed. */
  resource: AuditLogEntryResource2;
  /** The action that was performed. */
  action: AuditLogAction1;
  /** The user who performed the action. */
  user: AuditLogEntryUser2;
  /** The date and time that the action was performed. */
  timestamp: Date;
};

export const auditLogEntrySchema: Schema<AuditLogEntry> = s.object<AuditLogEntry>({
  type: s.defaulted(type5Schema, Type5.AuditLog),
  id: s.optional(s.lazy(() => idSchema)),
  merchantAccountId: s.optional(s.lazy(() => merchantAccountIdSchema)),
  resource: auditLogEntryResource2Schema,
  action: auditLogAction1Schema,
  user: auditLogEntryUser2Schema,
  timestamp: s.dateTime(),
  _keysMap: {
    merchantAccountId: "merchant_account_id",
  },
});
