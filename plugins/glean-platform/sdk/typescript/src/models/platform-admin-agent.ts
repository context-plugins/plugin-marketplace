import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** An agent in the workspace. */
export type PlatformAdminAgent = {
  /** Opaque agent ID. Other Platform APIs, such as usage limits, accept and return this ID. */
  agentId: string;
  /** The name that Glean shows for the agent. */
  displayName: string;
  /** Whether the agent is active. A deleted agent is inactive. */
  isActive: boolean;
};

export const platformAdminAgentSchema: Schema<PlatformAdminAgent> = s.object<PlatformAdminAgent>({
  agentId: s.string(),
  displayName: s.string(),
  isActive: s.boolean(),
  _keysMap: {
    agentId: "agent_id",
    displayName: "display_name",
    isActive: "is_active",
  },
});
