import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import {
  mcpServerParallelAiTasksApiSchema,
  type McpServerParallelAiTasksApi,
} from "../mcp-server-parallel-ai-tasks-api.js";

/** Optional list of MCP servers to use for the run. */
export type McpServersParallelAiTasksApi = McpServerParallelAiTasksApi[];

export const mcpServersParallelAiTasksApiSchema: Schema<McpServersParallelAiTasksApi> =
  s.of<McpServersParallelAiTasksApi>(s.union([s.array(s.lazy(() => mcpServerParallelAiTasksApiSchema))]));
