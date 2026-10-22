import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** The resource that was changed. */
export type AuditLogEntryResource2 = {
  /** The type of the resource. */
  type: string;
  /** The ID of the resource. */
  id: string;
  /** The descriptive name of the resource. */
  name: string;
};

export const auditLogEntryResource2Schema: Schema<AuditLogEntryResource2> = s.object<AuditLogEntryResource2>({
  type: s.string(),
  id: s.string(),
  name: s.string(),
});
