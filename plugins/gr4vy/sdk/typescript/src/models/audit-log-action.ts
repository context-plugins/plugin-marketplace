import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const AuditLogAction = {
  Created: "created",
  Updated: "updated",
  Deleted: "deleted",
  Voided: "voided",
  Canceled: "canceled",
  Captured: "captured",
} as const;
export type AuditLogAction = (typeof AuditLogAction)[keyof typeof AuditLogAction] | (string & {});

export const auditLogActionSchema: EnumSchema<AuditLogAction> = s.enumOf<AuditLogAction>(AuditLogAction);
