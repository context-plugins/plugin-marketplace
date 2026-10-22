import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { agentsInsightsV2RequestSchema, type AgentsInsightsV2Request } from "./agents-insights-v2-request.js";
import {
  insightsAssistantRequestSchema,
  type InsightsAssistantRequest,
} from "./insights-assistant-request.js";
import { insightsOverviewRequestSchema, type InsightsOverviewRequest } from "./insights-overview-request.js";
import {
  mcpBreakdownInsightsRequestSchema,
  type McpBreakdownInsightsRequest,
} from "./mcp-breakdown-insights-request.js";
import { mcpInsightsRequestSchema, type McpInsightsRequest } from "./mcp-insights-request.js";

export type InsightsRequest = {
  overviewRequest?: InsightsOverviewRequest;
  assistantRequest?: InsightsAssistantRequest;
  agentsRequest?: AgentsInsightsV2Request;
  mcpRequest?: McpInsightsRequest;
  mcpBreakdownRequest?: McpBreakdownInsightsRequest;
  /** If true, suppresses the generation of per-user Insights in the response. Default is false. */
  disablePerUserInsights?: boolean;
};

export const insightsRequestSchema: Schema<InsightsRequest> = s.object<InsightsRequest>({
  overviewRequest: s.optional(s.lazy(() => insightsOverviewRequestSchema)),
  assistantRequest: s.optional(s.lazy(() => insightsAssistantRequestSchema)),
  agentsRequest: s.optional(s.lazy(() => agentsInsightsV2RequestSchema)),
  mcpRequest: s.optional(s.lazy(() => mcpInsightsRequestSchema)),
  mcpBreakdownRequest: s.optional(s.lazy(() => mcpBreakdownInsightsRequestSchema)),
  disablePerUserInsights: s.optional(s.boolean()),
});
