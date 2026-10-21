import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const ConversationSource = {
  AgentChat: "agent_chat",
} as const;
export type ConversationSource = (typeof ConversationSource)[keyof typeof ConversationSource] | (string & {});

export const conversationSourceSchema: EnumSchema<ConversationSource> =
  s.enumOf<ConversationSource>(ConversationSource);
