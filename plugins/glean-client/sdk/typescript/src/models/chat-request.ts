import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { agentConfigSchema, type AgentConfig } from "./agent-config.js";
import { chatMessageSchema, type ChatMessage } from "./chat-message.js";
import { chatRestrictionFiltersSchema, type ChatRestrictionFilters } from "./chat-restriction-filters.js";
import { sessionInfoSchema, type SessionInfo } from "./session-info.js";

export type ChatRequest = {
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
  inclusions?: ChatRestrictionFilters;
  exclusions?: ChatRestrictionFilters;
  /**
   * Timeout in milliseconds for the request. A `408` error will be returned if handling the request
   * takes longer.
   */
  timeoutMillis?: number;
  /**
   * The ID of the application this request originates from, used to determine the configuration of
   * underlying chat processes. This should correspond to the ID set during admin setup. If not
   * specified, the default chat experience will be used.
   */
  applicationId?: string;
  /**
   * The ID of the Agent that should process this chat request. Only Agents with trigger set to
   * 'User chat message' are invokable through this API. If not specified, the default chat
   * experience will be used.
   */
  agentId?: string;
  /**
   * If set, response lines will be streamed one-by-one as they become available. Each will be a
   * ChatResponse, formatted as JSON, and separated by a new line. If false, the entire response
   * will be returned at once. Note that if this is set and the model being used does not support
   * streaming, the model's response will not be streamed, but other messages from the endpoint
   * still will be.
   */
  stream?: boolean;
};

export const chatRequestSchema: Schema<ChatRequest> = s.object<ChatRequest>({
  messages: s.array(s.lazy(() => chatMessageSchema)),
  sessionInfo: s.optional(s.lazy(() => sessionInfoSchema)),
  saveChat: s.optional(s.boolean()),
  chatId: s.optional(s.string()),
  agentConfig: s.optional(s.lazy(() => agentConfigSchema)),
  inclusions: s.optional(s.lazy(() => chatRestrictionFiltersSchema)),
  exclusions: s.optional(s.lazy(() => chatRestrictionFiltersSchema)),
  timeoutMillis: s.optional(s.int()),
  applicationId: s.optional(s.string()),
  agentId: s.optional(s.string()),
  stream: s.optional(s.boolean()),
});
