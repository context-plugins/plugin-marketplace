import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  platformUsageTargetType1Schema,
  type PlatformUsageTargetType1,
} from "./platform-usage-target-type1.js";

/** Population governed by this limit. */
export type PlatformUsageTarget1 = {
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

export const platformUsageTarget1Schema: Schema<PlatformUsageTarget1> = s.object<PlatformUsageTarget1>({
  type: platformUsageTargetType1Schema,
  userId: s.optional(s.string()),
  email: s.optional(s.string()),
  agentId: s.optional(s.string()),
  _keysMap: {
    userId: "user_id",
    agentId: "agent_id",
  },
});
