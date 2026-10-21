import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { requestMetaSchema, type RequestMeta } from "./request-meta.js";
import { storedAgentConversationSchema, type StoredAgentConversation } from "./stored-agent-conversation.js";

export type AgentConversationTitleUpdateResponse = {
  /** Stored agent conversation document returned by non-list endpoints. */
  conversation: StoredAgentConversation;
  /** Basic request metadata returned by the API. */
  meta: RequestMeta;
};

export const agentConversationTitleUpdateResponseSchema: Schema<AgentConversationTitleUpdateResponse> =
  s.object<AgentConversationTitleUpdateResponse>({
    conversation: storedAgentConversationSchema,
    meta: requestMetaSchema,
  });
