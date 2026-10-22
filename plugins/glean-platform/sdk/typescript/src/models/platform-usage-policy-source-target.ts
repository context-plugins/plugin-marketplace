import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  platformUsageTargetType3Schema,
  type PlatformUsageTargetType3,
} from "./platform-usage-target-type3.js";

/**
 * Population that supplied an evaluated policy. IdP groups and departments are response-only
 * sources, not limit-management or direct evaluation targets.
 */
export type PlatformUsagePolicySourceTarget = {
  /** Kind of configured policy source. */
  type: PlatformUsageTargetType3;
  /** Canonical user ID for a user-specific policy. */
  userId?: string;
  /**
   * Directory email of the user for a user-specific policy; omitted when the directory has no email
   * for the user.
   */
  email?: string;
  /** Canonical agent ID for an agent-specific policy. */
  agentId?: string;
  /** Canonical IdP group ID; returned only by administrative evaluation. */
  groupId?: string;
  /** Department whose per-user policy supplied the limit. */
  departmentName?: string;
  /** True when non-admin evaluation withholds an IdP-group source identity. */
  isIdentityRestricted?: boolean;
};

export const platformUsagePolicySourceTargetSchema: Schema<PlatformUsagePolicySourceTarget> =
  s.object<PlatformUsagePolicySourceTarget>({
    type: platformUsageTargetType3Schema,
    userId: s.optional(s.string()),
    email: s.optional(s.string()),
    agentId: s.optional(s.string()),
    groupId: s.optional(s.string()),
    departmentName: s.optional(s.string()),
    isIdentityRestricted: s.optional(s.boolean()),
    _keysMap: {
      userId: "user_id",
      agentId: "agent_id",
      groupId: "group_id",
      departmentName: "department_name",
      isIdentityRestricted: "is_identity_restricted",
    },
  });
