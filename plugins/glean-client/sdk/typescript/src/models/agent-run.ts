import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { agentExecutionStatusSchema, type AgentExecutionStatus } from "./agent-execution-status.js";
import { messageSchema, type Message } from "./message.js";

export type AgentRun = {
  /** The ID of the agent to run. */
  agentId: string;
  /** The input to the agent. Required when the agent uses an input form trigger. */
  input?: Record<string, unknown>;
  /** The messages to pass an input to the agent. */
  messages?: Message[];
  /** The metadata to pass to the agent. */
  metadata?: Record<string, unknown>;
  /** The status of the run. One of 'error', 'success'. */
  status?: AgentExecutionStatus;
};

export const agentRunSchema: Schema<AgentRun> = s.object<AgentRun>({
  agentId: s.string(),
  input: s.optional(s.record(s.string(), s.unknown())),
  messages: s.optional(s.array(s.lazy(() => messageSchema))),
  metadata: s.optional(s.record(s.string(), s.unknown())),
  status: s.optional(s.lazy(() => agentExecutionStatusSchema)),
  _keysMap: {
    agentId: "agent_id",
  },
});
