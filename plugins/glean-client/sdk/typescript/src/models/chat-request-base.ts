import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { agentConfigSchema, type AgentConfig } from "./agent-config.js";
import { chatMessageSchema, type ChatMessage } from "./chat-message.js";
import { sessionInfoSchema, type SessionInfo } from "./session-info.js";

/** The minimal set of fields that form a chat request. */
export type ChatRequestBase = {
  /**
   * A list of chat messages, from most recent to least recent. At least one message must specify a
   * USER author.
   */
  messages: ChatMessage[];
  sessionInfo?: SessionInfo;
  /**
   * Save the current interaction as a Chat for the user to access and potentially continue later.
   */
  saveChat?: boolean;
  /**
   * The id of the Chat that context should be retrieved from and messages added to. An empty id
   * starts a new Chat, and the Chat is saved if saveChat is true.
   */
  chatId?: string;
  /** Describes the agent that executes the request. */
  agentConfig?: AgentConfig;
};

export const chatRequestBaseSchema: Schema<ChatRequestBase> = s.object<ChatRequestBase>({
  messages: s.array(s.lazy(() => chatMessageSchema)),
  sessionInfo: s.optional(s.lazy(() => sessionInfoSchema)),
  saveChat: s.optional(s.boolean()),
  chatId: s.optional(s.string()),
  agentConfig: s.optional(s.lazy(() => agentConfigSchema)),
});
