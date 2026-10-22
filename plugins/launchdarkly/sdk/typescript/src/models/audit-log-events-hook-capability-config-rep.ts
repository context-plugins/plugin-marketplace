import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { statementSchema, type Statement } from "./statement.js";

export type AuditLogEventsHookCapabilityConfigRep = {
  /** The set of resources you wish to subscribe to audit log notifications for. */
  statements?: Statement[];
};

export const auditLogEventsHookCapabilityConfigRepSchema: Schema<AuditLogEventsHookCapabilityConfigRep> =
  s.object<AuditLogEventsHookCapabilityConfigRep>({
    statements: s.optional(s.array(s.lazy(() => statementSchema))),
  });
