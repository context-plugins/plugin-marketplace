import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type McpServerBreakdown = {
  /** MCP server name. */
  server?: string;
  /** Total number of MCP calls for this server in the specified time period. */
  totalCalls?: number;
  /** Total number of active users for this server in the specified time period. */
  activeUsers?: number;
  /** Host applications using this server in the specified time period. */
  hostApplications?: string[];
};

export const mcpServerBreakdownSchema: Schema<McpServerBreakdown> = s.object<McpServerBreakdown>({
  server: s.optional(s.string()),
  totalCalls: s.optional(s.int()),
  activeUsers: s.optional(s.int()),
  hostApplications: s.optional(s.array(s.string())),
});
