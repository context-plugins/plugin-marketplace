import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { agentConversationSchema, type AgentConversation } from "./agent-conversation.js";
import { metaSchema, type Meta } from "./meta.js";

/**
 * Envelope returned by `POST /agents/{agentKey}/conversations`: the persisted agent conversation
 * (initial user message plus the agent's answer) and request metadata.
 */
export type CreateAgentConversationResponse = {
  /**
   * A conversation with a specific AI agent. Similar to regular conversations but tied to an
   * agent's configuration and capabilities.
   */
  conversation: AgentConversation;
  meta: Meta;
};

export const createAgentConversationResponseSchema: Schema<CreateAgentConversationResponse> =
  s.object<CreateAgentConversationResponse>({
    conversation: agentConversationSchema,
    meta: metaSchema,
  });
