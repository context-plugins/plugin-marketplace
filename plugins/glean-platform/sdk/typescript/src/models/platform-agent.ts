import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  platformAgentCapabilitiesSchema,
  type PlatformAgentCapabilities,
} from "./platform-agent-capabilities.js";

export type PlatformAgent = {
  /** ID of the agent. */
  agentId: string;
  /** Name of the agent. */
  name: string;
  /** Description of the agent. */
  description?: string;
  /** Agent metadata. */
  metadata?: Record<string, unknown>;
  capabilities: PlatformAgentCapabilities;
};

export const platformAgentSchema: Schema<PlatformAgent> = s.object<PlatformAgent>({
  agentId: s.string(),
  name: s.string(),
  description: s.optional(s.string()),
  metadata: s.optional(s.record(s.string(), s.unknown())),
  capabilities: platformAgentCapabilitiesSchema,
  _keysMap: {
    agentId: "agent_id",
  },
});
