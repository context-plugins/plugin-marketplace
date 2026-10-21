import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import {
  messagesResponseTextBlockSchema,
  type MessagesResponseTextBlock,
} from "../messages-response-text-block.js";
import {
  messagesResponseThinkingBlockSchema,
  type MessagesResponseThinkingBlock,
} from "../messages-response-thinking-block.js";
import {
  messagesResponseToolUseBlockSchema,
  type MessagesResponseToolUseBlock,
} from "../messages-response-tool-use-block.js";

export type MessagesResponseContentBlock =
  | (MessagesResponseTextBlock & { type: "text" })
  | (MessagesResponseThinkingBlock & { type: "thinking" })
  | (MessagesResponseToolUseBlock & { type: "tool_use" });

export const messagesResponseContentBlockSchema: Schema<MessagesResponseContentBlock> =
  s.discriminatedUnion<MessagesResponseContentBlock>("type", {
    text: messagesResponseTextBlockSchema,
    thinking: messagesResponseThinkingBlockSchema,
    tool_use: messagesResponseToolUseBlockSchema,
  });
