import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  approvalsCapabilityConfigSchema,
  type ApprovalsCapabilityConfig,
} from "./approvals-capability-config.js";
import {
  auditLogEventsHookCapabilityConfigRepSchema,
  type AuditLogEventsHookCapabilityConfigRep,
} from "./audit-log-events-hook-capability-config-rep.js";

export type CapabilityConfigRep = {
  approvals?: ApprovalsCapabilityConfig;
  auditLogEventsHook?: AuditLogEventsHookCapabilityConfigRep;
};

export const capabilityConfigRepSchema: Schema<CapabilityConfigRep> = s.object<CapabilityConfigRep>({
  approvals: s.optional(s.lazy(() => approvalsCapabilityConfigSchema)),
  auditLogEventsHook: s.optional(s.lazy(() => auditLogEventsHookCapabilityConfigRepSchema)),
});
