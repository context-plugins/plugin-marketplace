import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const MessageType1 = {
  UserQuery: "user_query",
  BotResponse: "bot_response",
  Error: "error",
  Feedback: "feedback",
  System: "system",
  ToolCall: "tool_call",
} as const;
export type MessageType1 = (typeof MessageType1)[keyof typeof MessageType1] | (string & {});

export const messageType1Schema: EnumSchema<MessageType1> = s.enumOf<MessageType1>(MessageType1);
