import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { agentToolCallSchema, type AgentToolCall } from "./agent-tool-call.js";
import { endedAtSchema, type EndedAt } from "./unions/ended-at.js";
import { finishReasonSchema, type FinishReason } from "./unions/finish-reason.js";
import { parentIdSchema, type ParentId } from "./unions/parent-id.js";
import { reasoningSchema, type Reasoning } from "./unions/reasoning.js";
import { refusalSchema, type Refusal } from "./unions/refusal.js";
import { startedAtSchema, type StartedAt } from "./unions/started-at.js";
import { textSchema, type Text } from "./unions/text.js";

export type AgentMessageEvent = {
  id: string;
  parentId?: ParentId;
  startedAt?: StartedAt;
  endedAt?: EndedAt;
  /** @default 0 */
  seq?: number;
  /** @default "agent_message" */
  kind?: "agent_message";
  text?: Text;
  reasoning?: Reasoning;
  toolCalls?: AgentToolCall[];
  finishReason?: FinishReason;
  refusal?: Refusal;
};

export const agentMessageEventSchema: Schema<AgentMessageEvent> = s.object<AgentMessageEvent>({
  id: s.string(),
  parentId: s.optional(s.lazy(() => parentIdSchema)),
  startedAt: s.optional(s.lazy(() => startedAtSchema)),
  endedAt: s.optional(s.lazy(() => endedAtSchema)),
  seq: s.defaulted(s.int(), 0),
  kind: s.defaulted(s.literal("agent_message"), "agent_message"),
  text: s.optional(s.lazy(() => textSchema)),
  reasoning: s.optional(s.lazy(() => reasoningSchema)),
  toolCalls: s.optional(s.array(s.lazy(() => agentToolCallSchema))),
  finishReason: s.optional(s.lazy(() => finishReasonSchema)),
  refusal: s.optional(s.lazy(() => refusalSchema)),
  _keysMap: {
    parentId: "parent_id",
    startedAt: "started_at",
    endedAt: "ended_at",
    toolCalls: "tool_calls",
    finishReason: "finish_reason",
  },
});
