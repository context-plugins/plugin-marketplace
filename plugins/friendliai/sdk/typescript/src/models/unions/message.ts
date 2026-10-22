import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { assistantMessageSchema, type AssistantMessage } from "../assistant-message.js";
import { systemMessageSchema, type SystemMessage } from "../system-message.js";
import { toolMessageSchema, type ToolMessage } from "../tool-message.js";
import { userMessageSchema, type UserMessage } from "../user-message.js";

export type Message =
  | (AssistantMessage & { role: "assistant" })
  | (SystemMessage & { role: "system" })
  | (ToolMessage & { role: "tool" })
  | (UserMessage & { role: "user" });

export const messageSchema: Schema<Message> = s.discriminatedUnion<Message>("role", {
  assistant: assistantMessageSchema,
  system: systemMessageSchema,
  tool: toolMessageSchema,
  user: userMessageSchema,
});
