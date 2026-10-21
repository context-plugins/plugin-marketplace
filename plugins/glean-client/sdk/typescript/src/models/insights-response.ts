import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  agentsInsightsV2ResponseSchema,
  type AgentsInsightsV2Response,
} from "./agents-insights-v2-response.js";
import {
  assistantInsightsResponseSchema,
  type AssistantInsightsResponse,
} from "./assistant-insights-response.js";
import {
  gleanAssistInsightsResponseSchema,
  type GleanAssistInsightsResponse,
} from "./glean-assist-insights-response.js";
import {
  insightsOverviewResponseSchema,
  type InsightsOverviewResponse,
} from "./insights-overview-response.js";
import {
  mcpBreakdownInsightsResponseSchema,
  type McpBreakdownInsightsResponse,
} from "./mcp-breakdown-insights-response.js";
import { mcpInsightsResponseSchema, type McpInsightsResponse } from "./mcp-insights-response.js";

export type InsightsResponse = {
  gleanAssist?: GleanAssistInsightsResponse;
  overviewResponse?: InsightsOverviewResponse;
  assistantResponse?: AssistantInsightsResponse;
  agentsResponse?: AgentsInsightsV2Response;
  mcpResponse?: McpInsightsResponse;
  mcpBreakdownResponse?: McpBreakdownInsightsResponse;
};

export const insightsResponseSchema: Schema<InsightsResponse> = s.object<InsightsResponse>({
  gleanAssist: s.optional(s.lazy(() => gleanAssistInsightsResponseSchema)),
  overviewResponse: s.optional(s.lazy(() => insightsOverviewResponseSchema)),
  assistantResponse: s.optional(s.lazy(() => assistantInsightsResponseSchema)),
  agentsResponse: s.optional(s.lazy(() => agentsInsightsV2ResponseSchema)),
  mcpResponse: s.optional(s.lazy(() => mcpInsightsResponseSchema)),
  mcpBreakdownResponse: s.optional(s.lazy(() => mcpBreakdownInsightsResponseSchema)),
});
