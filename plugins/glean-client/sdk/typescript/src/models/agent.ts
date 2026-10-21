import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { agentCapabilitiesSchema, type AgentCapabilities } from "./agent-capabilities.js";

export type Agent = {
  /** The ID of the agent. */
  agentId: string;
  /** The name of the agent */
  name: string;
  /** The description of the agent. */
  description?: string;
  /** The agent metadata. Currently not implemented. */
  metadata?: Record<string, unknown>;
  /**
   * Describes features that the agent supports. example: { "ap.io.messages": true,
   * "ap.io.streaming": true }
   */
  capabilities: AgentCapabilities;
};

export const agentSchema: Schema<Agent> = s.object<Agent>({
  agentId: s.string(),
  name: s.string(),
  description: s.optional(s.string()),
  metadata: s.optional(s.record(s.string(), s.unknown())),
  capabilities: agentCapabilitiesSchema,
  _keysMap: {
    agentId: "agent_id",
  },
});
