import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { mcpToolCallSchema, type McpToolCall } from "../mcp-tool-call.js";

/** MCP tool calls made by the task. */
export type McpToolCalls = McpToolCall[];

export const mcpToolCallsSchema: Schema<McpToolCalls> = s.of<McpToolCalls>(
  s.union([s.array(s.lazy(() => mcpToolCallSchema))]),
);
