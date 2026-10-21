import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { displayResultSchema, type DisplayResult } from "./unions/display-result.js";
import { toolResultSchema, type ToolResult } from "./unions/tool-result.js";

export type DialogToolCall = {
  /** Tool call ID */
  toolCallId: string;
  /** Tool name */
  toolName: string;
  /** Tool arguments */
  toolArguments: Record<string, unknown>;
  /** Tool result data (only included if tool has propagate_tool_result=true) */
  toolResult: ToolResult;
  /** Display-only presentation data for this tool result */
  displayResult?: DisplayResult;
  /** Tool call timestamp */
  timestamp: Date;
};

export const dialogToolCallSchema: Schema<DialogToolCall> = s.object<DialogToolCall>({
  toolCallId: s.string(),
  toolName: s.string(),
  toolArguments: s.record(s.string(), s.unknown()),
  toolResult: toolResultSchema,
  displayResult: s.optional(s.lazy(() => displayResultSchema)),
  timestamp: s.dateTime(),
  _keysMap: {
    toolCallId: "tool_call_id",
    toolName: "tool_name",
    toolArguments: "tool_arguments",
    toolResult: "tool_result",
    displayResult: "display_result",
  },
});
