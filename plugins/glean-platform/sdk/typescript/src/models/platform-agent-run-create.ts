import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { platformMessageSchema, type PlatformMessage } from "./platform-message.js";

export type PlatformAgentRunCreate = {
  /** ID of the agent being run. */
  agentId: string;
  /** Input fields for an input-form triggered agent. */
  input?: Record<string, unknown>;
  /** Messages passed to the agent. */
  messages?: PlatformMessage[];
  /** Metadata passed to the agent. */
  metadata?: Record<string, unknown>;
};

export const platformAgentRunCreateSchema: Schema<PlatformAgentRunCreate> = s.object<PlatformAgentRunCreate>({
  agentId: s.string(),
  input: s.optional(s.record(s.string(), s.unknown())),
  messages: s.optional(s.array(s.lazy(() => platformMessageSchema))),
  metadata: s.optional(s.record(s.string(), s.unknown())),
  _keysMap: {
    agentId: "agent_id",
  },
});
