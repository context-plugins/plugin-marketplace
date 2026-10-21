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

/** Initial content block payload. */
export type MessagesStreamContentBlockStartPayload =
  | (MessagesStreamStartTextBlock & { type: "text" })
  | (MessagesStreamStartThinkingBlock & { type: "thinking" })
  | (MessagesStreamStartToolUseBlock & { type: "tool_use" });

export const messagesStreamContentBlockStartPayloadSchema: Schema<MessagesStreamContentBlockStartPayload> =
  s.discriminatedUnion<MessagesStreamContentBlockStartPayload>("type", {
    text: messagesStreamStartTextBlockSchema,
    thinking: messagesStreamStartThinkingBlockSchema,
    tool_use: messagesStreamStartToolUseBlockSchema,
  });
