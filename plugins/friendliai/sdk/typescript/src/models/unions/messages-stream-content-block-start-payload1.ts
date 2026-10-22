import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import {
  messagesStreamStartTextBlockSchema,
  type MessagesStreamStartTextBlock,
} from "../messages-stream-start-text-block.js";
import {
  messagesStreamStartThinkingBlockSchema,
  type MessagesStreamStartThinkingBlock,
} from "../messages-stream-start-thinking-block.js";
import {
  messagesStreamStartToolUseBlockSchema,
  type MessagesStreamStartToolUseBlock,
} from "../messages-stream-start-tool-use-block.js";

export type MessagesStreamContentBlockStartPayload1 =
  | (MessagesStreamStartTextBlock & { type: "text" })
  | (MessagesStreamStartThinkingBlock & { type: "thinking" })
  | (MessagesStreamStartToolUseBlock & { type: "tool_use" });

export const messagesStreamContentBlockStartPayload1Schema: Schema<MessagesStreamContentBlockStartPayload1> =
  s.discriminatedUnion<MessagesStreamContentBlockStartPayload1>("type", {
    text: messagesStreamStartTextBlockSchema,
    thinking: messagesStreamStartThinkingBlockSchema,
    tool_use: messagesStreamStartToolUseBlockSchema,
  });
