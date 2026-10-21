import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { content2Schema, type Content2 } from "./unions/content2.js";
import { toolCallsSchema, type ToolCalls } from "./unions/tool-calls.js";

export type ChatChoiceMessage = {
  /** The contents of the assistant message. */
  content?: Content2;
  /** Role of the generated message author, in this case `assistant`. */
  role: string;
  toolCalls?: ToolCalls;
};

export const chatChoiceMessageSchema: Schema<ChatChoiceMessage> = s.object<ChatChoiceMessage>({
  content: s.optional(s.lazy(() => content2Schema)),
  role: s.string(),
  toolCalls: s.optional(s.lazy(() => toolCallsSchema)),
  _keysMap: {
    toolCalls: "tool_calls",
  },
});
