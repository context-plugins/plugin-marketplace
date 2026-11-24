import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { subagentEventIdSchema, type SubagentEventId } from "./unions/subagent-event-id.js";
import { toolCallIdSchema, type ToolCallId } from "./unions/tool-call-id.js";

/**
 * A tool invocation embedded inside an assistant message.
 *
 * Distinct from ``ToolCallEvent``: this is the *intent* the agent surfaced in its response, before
 * the MCP call actually happened. The matching ``ToolCallEvent`` carries the result.
 */
export type AgentToolCall = {
  toolCallId?: ToolCallId;
  name: string;
  arguments?: Record<string, unknown>;
  subagentEventId?: SubagentEventId;
};

export const agentToolCallSchema: Schema<AgentToolCall> = s.object<AgentToolCall>({
  toolCallId: s.optional(s.lazy(() => toolCallIdSchema)),
  name: s.string(),
  arguments: s.optional(s.record(s.string(), s.unknown())),
  subagentEventId: s.optional(s.lazy(() => subagentEventIdSchema)),
  _keysMap: {
    toolCallId: "tool_call_id",
    subagentEventId: "subagent_event_id",
  },
});
