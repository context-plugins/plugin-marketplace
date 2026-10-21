import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  platformAgentExecutionStatusSchema,
  type PlatformAgentExecutionStatus,
} from "./platform-agent-execution-status.js";
import { platformMessageSchema, type PlatformMessage } from "./platform-message.js";

export type PlatformAgentRun = {
  /** ID of the agent being run. */
  agentId: string;
  /** Input fields for an input-form triggered agent. */
  input?: Record<string, unknown>;
  /** Messages passed to the agent. */
  messages?: PlatformMessage[];
  /** Metadata passed to the agent. */
  metadata?: Record<string, unknown>;
  /** Status of the agent run. */
  status: PlatformAgentExecutionStatus;
};

export const platformAgentRunSchema: Schema<PlatformAgentRun> = s.object<PlatformAgentRun>({
  agentId: s.string(),
  input: s.optional(s.record(s.string(), s.unknown())),
  messages: s.optional(s.array(s.lazy(() => platformMessageSchema))),
  metadata: s.optional(s.record(s.string(), s.unknown())),
  status: platformAgentExecutionStatusSchema,
  _keysMap: {
    agentId: "agent_id",
  },
});
