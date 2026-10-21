import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { currentActiveUsersSchema, type CurrentActiveUsers } from "./current-active-users.js";
import { insightsChatSummarySchema, type InsightsChatSummary } from "./insights-chat-summary.js";
import { insightsSearchSummarySchema, type InsightsSearchSummary } from "./insights-search-summary.js";
import { labeledCountInfoSchema, type LabeledCountInfo } from "./labeled-count-info.js";
import { perUserInsightSchema, type PerUserInsight } from "./per-user-insight.js";

export type InsightsOverviewResponse = {
  /** Number of current Monthly Active Users. */
  monthlyActiveUsers?: number;
  /** Number of current Weekly Active Users. */
  weeklyActiveUsers?: number;
  /** Department name(s). */
  departments?: string[];
  /** Number of current employees in the specified departments, according to the Org Chart. */
  employeeCount?: number;
  /**
   * Number of current signed up employees in the specified departments, according to the Org Chart.
   */
  totalSignups?: number;
  searchSummary?: InsightsSearchSummary;
  chatSummary?: InsightsChatSummary;
  searchActiveUsers?: CurrentActiveUsers;
  assistantActiveUsers?: CurrentActiveUsers;
  agentsActiveUsers?: CurrentActiveUsers;
  mcpActiveUsers?: CurrentActiveUsers;
  extensionSummary?: CurrentActiveUsers;
  ugcSummary?: CurrentActiveUsers;
  /** Unix timestamp of the last update for the insights data in the response. */
  lastUpdatedTs?: number;
  /**
   * Search session satisfaction rate, over the specified time period in the specified departments.
   *
   * @deprecated
   */
  searchSessionSatisfaction?: number;
  monthlyActiveUserTimeseries?: LabeledCountInfo;
  weeklyActiveUserTimeseries?: LabeledCountInfo;
  dailyActiveUserTimeseries?: LabeledCountInfo;
  searchMonthlyActiveUserTimeseries?: LabeledCountInfo;
  searchWeeklyActiveUserTimeseries?: LabeledCountInfo;
  searchDailyActiveUserTimeseries?: LabeledCountInfo;
  assistantMonthlyActiveUserTimeseries?: LabeledCountInfo;
  assistantWeeklyActiveUserTimeseries?: LabeledCountInfo;
  assistantDailyActiveUserTimeseries?: LabeledCountInfo;
  agentsMonthlyActiveUserTimeseries?: LabeledCountInfo;
  agentsWeeklyActiveUserTimeseries?: LabeledCountInfo;
  agentsDailyActiveUserTimeseries?: LabeledCountInfo;
  mcpMonthlyActiveUserTimeseries?: LabeledCountInfo;
  mcpWeeklyActiveUserTimeseries?: LabeledCountInfo;
  mcpDailyActiveUserTimeseries?: LabeledCountInfo;
  searchesTimeseries?: LabeledCountInfo;
  assistantInteractionsTimeseries?: LabeledCountInfo;
  agentRunsTimeseries?: LabeledCountInfo;
  mcpCallsTimeseries?: LabeledCountInfo;
  /**
   * Counts of search result clicks, by datasource, over the specified time period in the specified
   * departments.
   */
  searchDatasourceCounts?: Record<string, number>;
  /**
   * Counts of cited documents in chat, by datasource, over the specified time period in the
   * specified departments.
   */
  chatDatasourceCounts?: Record<string, number>;
  /**
   * Per-user insights, over the specified time period in the specified departments. All current
   * users in the organization who have signed into Glean at least once are included.
   */
  perUserInsights?: PerUserInsight[];
};

export const insightsOverviewResponseSchema: Schema<InsightsOverviewResponse> =
  s.object<InsightsOverviewResponse>({
    monthlyActiveUsers: s.optional(s.int()),
    weeklyActiveUsers: s.optional(s.int()),
    departments: s.optional(s.array(s.string())),
    employeeCount: s.optional(s.int()),
    totalSignups: s.optional(s.int()),
    searchSummary: s.optional(s.lazy(() => insightsSearchSummarySchema)),
    chatSummary: s.optional(s.lazy(() => insightsChatSummarySchema)),
    searchActiveUsers: s.optional(s.lazy(() => currentActiveUsersSchema)),
    assistantActiveUsers: s.optional(s.lazy(() => currentActiveUsersSchema)),
    agentsActiveUsers: s.optional(s.lazy(() => currentActiveUsersSchema)),
    mcpActiveUsers: s.optional(s.lazy(() => currentActiveUsersSchema)),
    extensionSummary: s.optional(s.lazy(() => currentActiveUsersSchema)),
    ugcSummary: s.optional(s.lazy(() => currentActiveUsersSchema)),
    lastUpdatedTs: s.optional(s.int()),
    searchSessionSatisfaction: s.optional(s.float64()),
    monthlyActiveUserTimeseries: s.optional(s.lazy(() => labeledCountInfoSchema)),
    weeklyActiveUserTimeseries: s.optional(s.lazy(() => labeledCountInfoSchema)),
    dailyActiveUserTimeseries: s.optional(s.lazy(() => labeledCountInfoSchema)),
    searchMonthlyActiveUserTimeseries: s.optional(s.lazy(() => labeledCountInfoSchema)),
    searchWeeklyActiveUserTimeseries: s.optional(s.lazy(() => labeledCountInfoSchema)),
    searchDailyActiveUserTimeseries: s.optional(s.lazy(() => labeledCountInfoSchema)),
    assistantMonthlyActiveUserTimeseries: s.optional(s.lazy(() => labeledCountInfoSchema)),
    assistantWeeklyActiveUserTimeseries: s.optional(s.lazy(() => labeledCountInfoSchema)),
    assistantDailyActiveUserTimeseries: s.optional(s.lazy(() => labeledCountInfoSchema)),
    agentsMonthlyActiveUserTimeseries: s.optional(s.lazy(() => labeledCountInfoSchema)),
    agentsWeeklyActiveUserTimeseries: s.optional(s.lazy(() => labeledCountInfoSchema)),
    agentsDailyActiveUserTimeseries: s.optional(s.lazy(() => labeledCountInfoSchema)),
    mcpMonthlyActiveUserTimeseries: s.optional(s.lazy(() => labeledCountInfoSchema)),
    mcpWeeklyActiveUserTimeseries: s.optional(s.lazy(() => labeledCountInfoSchema)),
    mcpDailyActiveUserTimeseries: s.optional(s.lazy(() => labeledCountInfoSchema)),
    searchesTimeseries: s.optional(s.lazy(() => labeledCountInfoSchema)),
    assistantInteractionsTimeseries: s.optional(s.lazy(() => labeledCountInfoSchema)),
    agentRunsTimeseries: s.optional(s.lazy(() => labeledCountInfoSchema)),
    mcpCallsTimeseries: s.optional(s.lazy(() => labeledCountInfoSchema)),
    searchDatasourceCounts: s.optional(s.record(s.string(), s.int())),
    chatDatasourceCounts: s.optional(s.record(s.string(), s.int())),
    perUserInsights: s.optional(s.array(s.lazy(() => perUserInsightSchema))),
  });
