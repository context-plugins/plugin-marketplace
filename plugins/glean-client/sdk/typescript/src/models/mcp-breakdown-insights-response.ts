import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { mcpAuthMethodBreakdownSchema, type McpAuthMethodBreakdown } from "./mcp-auth-method-breakdown.js";
import {
  mcpHostApplicationBreakdownSchema,
  type McpHostApplicationBreakdown,
} from "./mcp-host-application-breakdown.js";
import { mcpServerBreakdownSchema, type McpServerBreakdown } from "./mcp-server-breakdown.js";
import { mcpToolBreakdownSchema, type McpToolBreakdown } from "./mcp-tool-breakdown.js";
import { mcpUserBreakdownSchema, type McpUserBreakdown } from "./mcp-user-breakdown.js";

export type McpBreakdownInsightsResponse = {
  usersBreakdown?: McpUserBreakdown[];
  hostApplicationsBreakdown?: McpHostApplicationBreakdown[];
  toolsBreakdown?: McpToolBreakdown[];
  serversBreakdown?: McpServerBreakdown[];
  authMethodsBreakdown?: McpAuthMethodBreakdown[];
};

export const mcpBreakdownInsightsResponseSchema: Schema<McpBreakdownInsightsResponse> =
  s.object<McpBreakdownInsightsResponse>({
    usersBreakdown: s.optional(s.array(s.lazy(() => mcpUserBreakdownSchema))),
    hostApplicationsBreakdown: s.optional(s.array(s.lazy(() => mcpHostApplicationBreakdownSchema))),
    toolsBreakdown: s.optional(s.array(s.lazy(() => mcpToolBreakdownSchema))),
    serversBreakdown: s.optional(s.array(s.lazy(() => mcpServerBreakdownSchema))),
    authMethodsBreakdown: s.optional(s.array(s.lazy(() => mcpAuthMethodBreakdownSchema))),
  });
