import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type McpToolBreakdown = {
  /** MCP tool name. */
  tool?: string;
  /** Total number of MCP calls for this tool in the specified time period. */
  totalCalls?: number;
  /** Total number of active users for this tool in the specified time period. */
  activeUsers?: number;
  /** Host applications using this tool in the specified time period. */
  hostApplications?: string[];
};

export const mcpToolBreakdownSchema: Schema<McpToolBreakdown> = s.object<McpToolBreakdown>({
  tool: s.optional(s.string()),
  totalCalls: s.optional(s.int()),
  activeUsers: s.optional(s.int()),
  hostApplications: s.optional(s.array(s.string())),
});
