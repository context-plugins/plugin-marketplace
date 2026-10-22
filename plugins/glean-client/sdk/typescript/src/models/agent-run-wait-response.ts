import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { agentRunSchema, type AgentRun } from "./agent-run.js";
import { messageSchema, type Message } from "./message.js";

export type AgentRunWaitResponse = {
  run?: AgentRun;
  /** The messages returned by the run. */
  messages?: Message[];
};

export const agentRunWaitResponseSchema: Schema<AgentRunWaitResponse> = s.object<AgentRunWaitResponse>({
  run: s.optional(s.lazy(() => agentRunSchema)),
  messages: s.optional(s.array(s.lazy(() => messageSchema))),
});
