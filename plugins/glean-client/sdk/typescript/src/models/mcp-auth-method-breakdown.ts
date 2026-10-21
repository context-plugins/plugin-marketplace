import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type McpAuthMethodBreakdown = {
  /**
   * Authentication method the MCP client presented, for example OAUTH_GLEAN, OAUTH_XAA (Cross App
   * Access), or API_TOKEN.
   */
  authMethod?: string;
  /** Total number of MCP calls for this authentication method in the specified time period. */
  totalCalls?: number;
  /** Total number of active users for this authentication method in the specified time period. */
  activeUsers?: number;
  /** Host applications using this authentication method in the specified time period. */
  hostApplications?: string[];
};

export const mcpAuthMethodBreakdownSchema: Schema<McpAuthMethodBreakdown> = s.object<McpAuthMethodBreakdown>({
  authMethod: s.optional(s.string()),
  totalCalls: s.optional(s.int()),
  activeUsers: s.optional(s.int()),
  hostApplications: s.optional(s.array(s.string())),
});
