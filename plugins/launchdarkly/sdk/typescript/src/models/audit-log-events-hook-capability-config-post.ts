import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { statementPostSchema, type StatementPost } from "./statement-post.js";

export type AuditLogEventsHookCapabilityConfigPost = {
  statements?: StatementPost[];
};

export const auditLogEventsHookCapabilityConfigPostSchema: Schema<AuditLogEventsHookCapabilityConfigPost> =
  s.object<AuditLogEventsHookCapabilityConfigPost>({
    statements: s.optional(s.array(s.lazy(() => statementPostSchema))),
  });
