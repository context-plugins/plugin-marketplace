import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { mcpServerSchema, type McpServer } from "../mcp-server.js";

/** List of MCP servers to use for the task. */
export type McpServers = McpServer[];

export const mcpServersSchema: Schema<McpServers> = s.of<McpServers>(
  s.union([s.array(s.lazy(() => mcpServerSchema))]),
);
