import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { contentSchema, type Content } from "./unions/content.js";
import { name1Schema, type Name1 } from "./unions/name1.js";
import { reasoningContentSchema, type ReasoningContent } from "./unions/reasoning-content.js";
import { reasoningSchema, type Reasoning } from "./unions/reasoning.js";
import { toolCallsSchema, type ToolCalls } from "./unions/tool-calls.js";

export type AssistantMessage = {
  /** The role of the messages author. @default "assistant" */
  role?: "assistant";
  /** The content of assistant message. Required unless `tool_calls` is specified. */
  content?: Content;
  /** The intermediate reasoning content of assistant message. */
  reasoningContent?: ReasoningContent;
  /**
   * The intermediate reasoning content of assistant message. This field is a compatible option for
   * the 'reasoning_content' field.
   */
  reasoning?: Reasoning;
  /** The name for the participant to distinguish between participants with the same role. */
  name?: Name1;
  toolCalls?: ToolCalls;
};

export const assistantMessageSchema: Schema<AssistantMessage> = s.object<AssistantMessage>({
  role: s.defaulted(s.literal("assistant"), "assistant"),
  content: s.optional(s.lazy(() => contentSchema)),
  reasoningContent: s.optional(s.lazy(() => reasoningContentSchema)),
  reasoning: s.optional(s.lazy(() => reasoningSchema)),
  name: s.optional(s.lazy(() => name1Schema)),
  toolCalls: s.optional(s.lazy(() => toolCallsSchema)),
  _keysMap: {
    reasoningContent: "reasoning_content",
    toolCalls: "tool_calls",
  },
});
