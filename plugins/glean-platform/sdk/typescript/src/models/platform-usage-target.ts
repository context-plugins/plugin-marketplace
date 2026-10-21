import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  platformUsageTargetType1Schema,
  type PlatformUsageTargetType1,
} from "./platform-usage-target-type1.js";

/**
 * Population governed by a usage limit. A target identifies policy, not access. Administrative
 * operations require their dedicated scope and billing permissions. Non-admin evaluation accepts
 * the authenticated USER or an AGENT the caller currently has permission to edit. Billing
 * permission does not widen this route. Organization and user limits are scoped to a spend client;
 * agent limits remain aggregate. Subagents cannot be configured or evaluated independently because
 * nested spend can be attributed to the top-level agent. Reset can still remove existing subagent
 * rules. A USER target is identified by user_id, email, or both; email is resolved to the canonical
 * user_id, which responses always return.
 */
export type PlatformUsageTarget = {
  /** Kind of governed population. */
  type: PlatformUsageTargetType1;
  /**
   * Canonical user ID; valid only when type is USER. A USER target requires user_id, email, or
   * both.
   */
  userId?: string;
  /**
   * Email address of the user, including a known alias email; valid only when type is USER.
   * Matching is case-insensitive and resolves to the canonical user_id. When user_id is also
   * supplied, both must identify the same user. Email is never part of the stored limit key.
   * Responses include the user's directory email when one is available.
   */
  email?: string;
  /** Canonical agent ID; required only when type is AGENT. */
  agentId?: string;
};

export const platformUsageTargetSchema: Schema<PlatformUsageTarget> = s.object<PlatformUsageTarget>({
  type: platformUsageTargetType1Schema,
  userId: s.optional(s.string()),
  email: s.optional(s.string()),
  agentId: s.optional(s.string()),
  _keysMap: {
    userId: "user_id",
    agentId: "agent_id",
  },
});
