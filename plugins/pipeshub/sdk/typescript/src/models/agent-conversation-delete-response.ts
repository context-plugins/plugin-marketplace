import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { conversation11Schema, type Conversation11 } from "./unions/conversation11.js";

/**
 * Envelope returned by `DELETE /agents/{agentKey}/conversations/{conversationId}`. When the
 * conversation does not exist, belongs to a different agent, or was already deleted, the API still
 * returns HTTP 200 with `conversation: null`.
 */
export type AgentConversationDeleteResponse = {
  /** @default "Conversation deleted successfully" */
  message?: "Conversation deleted successfully";
  conversation: Conversation11;
};

export const agentConversationDeleteResponseSchema: Schema<AgentConversationDeleteResponse> =
  s.object<AgentConversationDeleteResponse>({
    message: s.defaulted(s.literal("Conversation deleted successfully"), "Conversation deleted successfully"),
    conversation: conversation11Schema,
  });
