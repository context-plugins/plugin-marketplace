import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { breakdownTypeSchema, type BreakdownType } from "./breakdown-type.js";
import { periodSchema, type Period } from "./period.js";

export type McpBreakdownInsightsRequest = {
  /** Departments for which Insights are requested. */
  departments?: string[];
  /** Manager user IDs whose teams should be filtered for. Empty array means no filtering. */
  managerIds?: string[];
  /** Manager emails whose teams should be filtered for. Empty array means no filtering. */
  managerEmails?: string[];
  dayRange?: Period;
  /** Type of breakdown to return. */
  breakdownType?: BreakdownType;
  /** Host applications to filter by. Empty array means all host applications. */
  hostApplications?: string[];
  /** MCP tools to filter by. Empty array means all tools. */
  tools?: string[];
  /** MCP servers to filter by. Empty array means all servers. */
  servers?: string[];
  /**
   * Authentication methods to filter by, for example OAUTH_XAA for Cross App Access traffic. Empty
   * array means all authentication methods.
   */
  authMethods?: string[];
};

export const mcpBreakdownInsightsRequestSchema: Schema<McpBreakdownInsightsRequest> =
  s.object<McpBreakdownInsightsRequest>({
    departments: s.optional(s.array(s.string())),
    managerIds: s.optional(s.array(s.string())),
    managerEmails: s.optional(s.array(s.string())),
    dayRange: s.optional(s.lazy(() => periodSchema)),
    breakdownType: s.optional(s.lazy(() => breakdownTypeSchema)),
    hostApplications: s.optional(s.array(s.string())),
    tools: s.optional(s.array(s.string())),
    servers: s.optional(s.array(s.string())),
    authMethods: s.optional(s.array(s.string())),
  });
