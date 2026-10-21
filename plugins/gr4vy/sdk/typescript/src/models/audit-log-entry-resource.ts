import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type AuditLogEntryResource = {
  /** The type of the resource. */
  type: string;
  /** The ID of the resource. */
  id: string;
  /** The descriptive name of the resource. */
  name: string;
};

export const auditLogEntryResourceSchema: Schema<AuditLogEntryResource> = s.object<AuditLogEntryResource>({
  type: s.string(),
  id: s.string(),
  name: s.string(),
});
