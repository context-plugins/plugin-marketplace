import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  approvalsCapabilityConfigSchema,
  type ApprovalsCapabilityConfig,
} from "./approvals-capability-config.js";
import {
  auditLogEventsHookCapabilityConfigPostSchema,
  type AuditLogEventsHookCapabilityConfigPost,
} from "./audit-log-events-hook-capability-config-post.js";

export type CapabilityConfigPost = {
  approvals?: ApprovalsCapabilityConfig;
  auditLogEventsHook?: AuditLogEventsHookCapabilityConfigPost;
};

export const capabilityConfigPostSchema: Schema<CapabilityConfigPost> = s.object<CapabilityConfigPost>({
  approvals: s.optional(s.lazy(() => approvalsCapabilityConfigSchema)),
  auditLogEventsHook: s.optional(s.lazy(() => auditLogEventsHookCapabilityConfigPostSchema)),
});
