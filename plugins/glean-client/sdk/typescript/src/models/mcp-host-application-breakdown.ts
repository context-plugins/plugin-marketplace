import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type McpHostApplicationBreakdown = {
  /** Host application name. */
  hostApplication?: string;
  /** Total number of MCP calls made from this host application in the specified time period. */
  totalCalls?: number;
  /** Total number of active users from this host application in the specified time period. */
  activeUsers?: number;
};

export const mcpHostApplicationBreakdownSchema: Schema<McpHostApplicationBreakdown> =
  s.object<McpHostApplicationBreakdown>({
    hostApplication: s.optional(s.string()),
    totalCalls: s.optional(s.int()),
    activeUsers: s.optional(s.int()),
  });
