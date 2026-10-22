import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { personSchema, type Person } from "./person.js";

export type McpUserBreakdown = {
  person?: Person;
  /** Total number of MCP calls made by this user in the specified time period. */
  totalCalls?: number;
  /** Host applications used by this user in the specified time period. */
  hostApplications?: string[];
  /** MCP tools used by this user in the specified time period. */
  tools?: string[];
  /** MCP servers used by this user in the specified time period. */
  servers?: string[];
  /**
   * Authentication methods this user's MCP clients presented in the specified time period, for
   * example OAUTH_XAA for Cross App Access.
   */
  authMethods?: string[];
};

export const mcpUserBreakdownSchema: Schema<McpUserBreakdown> = s.object<McpUserBreakdown>({
  person: s.optional(s.lazy(() => personSchema)),
  totalCalls: s.optional(s.int()),
  hostApplications: s.optional(s.array(s.string())),
  tools: s.optional(s.array(s.string())),
  servers: s.optional(s.array(s.string())),
  authMethods: s.optional(s.array(s.string())),
});
