import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Type of message:
 * - `user_query` - User's question or input
 * - `bot_response` - AI-generated response
 * - `error` - Error message from the system
 * - `feedback` - User feedback on a response
 * - `system` - System notification or status
 * - `tool_call` - Tool invocation turn; details are on `tools`
 */
export const MessageType = {
  UserQuery: "user_query",
  BotResponse: "bot_response",
  Error: "error",
  Feedback: "feedback",
  System: "system",
  ToolCall: "tool_call",
} as const;
export type MessageType = (typeof MessageType)[keyof typeof MessageType] | (string & {});

export const messageTypeSchema: EnumSchema<MessageType> = s.enumOf<MessageType>(MessageType);
