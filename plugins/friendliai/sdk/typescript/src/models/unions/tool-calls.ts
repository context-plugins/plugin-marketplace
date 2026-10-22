import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import {
  assistantMessageToolCallSchema,
  type AssistantMessageToolCall,
} from "../assistant-message-tool-call.js";

export type ToolCalls = AssistantMessageToolCall[];

export const toolCallsSchema: Schema<ToolCalls> = s.of<ToolCalls>(
  s.union([s.array(s.lazy(() => assistantMessageToolCallSchema))]),
);
