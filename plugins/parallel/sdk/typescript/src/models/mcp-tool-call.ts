import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  contentParallelAiMonitorApiSchema,
  type ContentParallelAiMonitorApi,
} from "./unions/content-parallel-ai-monitor-api.js";
import {
  error2ParallelAiMonitorApiSchema,
  type Error2ParallelAiMonitorApi,
} from "./unions/error2-parallel-ai-monitor-api.js";

/** Result of an MCP tool call. */
export type McpToolCall = {
  /** Identifier for the tool call. */
  toolCallId: string;
  /** Name of the MCP server. */
  serverName: string;
  /** Name of the tool being called. */
  toolName: string;
  /** Arguments used to call the MCP tool. */
  arguments: string;
  /** Output received from the tool call, if successful. */
  content?: ContentParallelAiMonitorApi;
  /** Error message if the tool call failed. */
  error?: Error2ParallelAiMonitorApi;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const mcpToolCallSchema: Schema<McpToolCall> = s.object<McpToolCall>(
  {
    toolCallId: s.string(),
    serverName: s.string(),
    toolName: s.string(),
    arguments: s.string(),
    content: s.optional(s.lazy(() => contentParallelAiMonitorApiSchema)),
    error: s.optional(s.lazy(() => error2ParallelAiMonitorApiSchema)),
    _keysMap: {
      toolCallId: "tool_call_id",
      serverName: "server_name",
      toolName: "tool_name",
    },
  },
  { additionalProperties: s.json() },
);
