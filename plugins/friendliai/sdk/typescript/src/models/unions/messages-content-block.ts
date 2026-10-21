import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import {
  messagesCompatibilityBlockSchema,
  type MessagesCompatibilityBlock,
} from "../messages-compatibility-block.js";
import { messagesImageBlockSchema, type MessagesImageBlock } from "../messages-image-block.js";
import { messagesTextBlockSchema, type MessagesTextBlock } from "../messages-text-block.js";
import { messagesThinkingBlockSchema, type MessagesThinkingBlock } from "../messages-thinking-block.js";
import {
  messagesToolResultBlockSchema,
  type MessagesToolResultBlock,
} from "../messages-tool-result-block.js";
import { messagesToolUseBlockSchema, type MessagesToolUseBlock } from "../messages-tool-use-block.js";

export type MessagesContentBlock =
  | (MessagesCompatibilityBlock & { type: "bash_code_execution_tool_result" })
  | (MessagesCompatibilityBlock & { type: "code_execution_tool_result" })
  | (MessagesCompatibilityBlock & { type: "container_upload" })
  | (MessagesCompatibilityBlock & { type: "document" })
  | (MessagesImageBlock & { type: "image" })
  | (MessagesCompatibilityBlock & { type: "redacted_thinking" })
  | (MessagesCompatibilityBlock & { type: "search_result" })
  | (MessagesCompatibilityBlock & { type: "server_tool_use" })
  | (MessagesTextBlock & { type: "text" })
  | (MessagesCompatibilityBlock & { type: "text_editor_code_execution_tool_result" })
  | (MessagesThinkingBlock & { type: "thinking" })
  | (MessagesToolResultBlock & { type: "tool_result" })
  | (MessagesCompatibilityBlock & { type: "tool_search_tool_result" })
  | (MessagesToolUseBlock & { type: "tool_use" })
  | (MessagesCompatibilityBlock & { type: "web_fetch_tool_result" })
  | (MessagesCompatibilityBlock & { type: "web_search_tool_result" });

export const messagesContentBlockSchema: Schema<MessagesContentBlock> =
  s.discriminatedUnion<MessagesContentBlock>("type", {
    bash_code_execution_tool_result: messagesCompatibilityBlockSchema,
    code_execution_tool_result: messagesCompatibilityBlockSchema,
    container_upload: messagesCompatibilityBlockSchema,
    document: messagesCompatibilityBlockSchema,
    image: messagesImageBlockSchema,
    redacted_thinking: messagesCompatibilityBlockSchema,
    search_result: messagesCompatibilityBlockSchema,
    server_tool_use: messagesCompatibilityBlockSchema,
    text: messagesTextBlockSchema,
    text_editor_code_execution_tool_result: messagesCompatibilityBlockSchema,
    thinking: messagesThinkingBlockSchema,
    tool_result: messagesToolResultBlockSchema,
    tool_search_tool_result: messagesCompatibilityBlockSchema,
    tool_use: messagesToolUseBlockSchema,
    web_fetch_tool_result: messagesCompatibilityBlockSchema,
    web_search_tool_result: messagesCompatibilityBlockSchema,
  });
