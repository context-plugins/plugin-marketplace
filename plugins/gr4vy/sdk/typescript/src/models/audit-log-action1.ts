import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The action that was performed. */
export const AuditLogAction1 = {
  Created: "created",
  Updated: "updated",
  Deleted: "deleted",
  Voided: "voided",
  Canceled: "canceled",
  Captured: "captured",
} as const;
export type AuditLogAction1 = (typeof AuditLogAction1)[keyof typeof AuditLogAction1] | (string & {});

export const auditLogAction1Schema: EnumSchema<AuditLogAction1> = s.enumOf<AuditLogAction1>(AuditLogAction1);
