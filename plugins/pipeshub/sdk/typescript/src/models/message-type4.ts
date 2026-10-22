import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const MessageType4 = {
  UserQuery: "user_query",
  BotResponse: "bot_response",
  Error: "error",
  Feedback: "feedback",
  System: "system",
} as const;
export type MessageType4 = (typeof MessageType4)[keyof typeof MessageType4] | (string & {});

export const messageType4Schema: EnumSchema<MessageType4> = s.enumOf<MessageType4>(MessageType4);
