import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { agentUseCaseInsightSchema, type AgentUseCaseInsight } from "./agent-use-case-insight.js";
import { agentUsersInsightSchema, type AgentUsersInsight } from "./agent-users-insight.js";
import { agentsTimeSavedInsightSchema, type AgentsTimeSavedInsight } from "./agents-time-saved-insight.js";
import {
  agentsUsageByDepartmentInsightSchema,
  type AgentsUsageByDepartmentInsight,
} from "./agents-usage-by-department-insight.js";
import { labeledCountInfoSchema, type LabeledCountInfo } from "./labeled-count-info.js";
import { perAgentInsightSchema, type PerAgentInsight } from "./per-agent-insight.js";

export type AgentsInsightsV2Response = {
  /** Number of current Monthly Active Users. */
  monthlyActiveUsers?: number;
  /** Number of current Weekly Active Users. */
  weeklyActiveUsers?: number;
  monthlyActiveUserTimeseries?: LabeledCountInfo;
  weeklyActiveUserTimeseries?: LabeledCountInfo;
  dailyActiveUserTimeseries?: LabeledCountInfo;
  /** Total number of shared agents. */
  sharedAgentsCount?: number;
  topAgentsInsights?: PerAgentInsight[];
  topUseCasesInsights?: AgentUseCaseInsight[];
  agentsUsageByDepartmentInsights?: AgentsUsageByDepartmentInsight[];
  agentUsersInsights?: AgentUsersInsight[];
  /** Insights for agents time saved over the specified time period. */
  agentsTimeSavedInsights?: AgentsTimeSavedInsight[];
  dailyAgentRunsTimeseries?: LabeledCountInfo;
  successfulRunsTimeseries?: LabeledCountInfo;
  failedRunsTimeseries?: LabeledCountInfo;
  pausedRunsTimeseries?: LabeledCountInfo;
  upvotesTimeseries?: LabeledCountInfo;
  downvotesTimeseries?: LabeledCountInfo;
};

export const agentsInsightsV2ResponseSchema: Schema<AgentsInsightsV2Response> =
  s.object<AgentsInsightsV2Response>({
    monthlyActiveUsers: s.optional(s.int()),
    weeklyActiveUsers: s.optional(s.int()),
    monthlyActiveUserTimeseries: s.optional(s.lazy(() => labeledCountInfoSchema)),
    weeklyActiveUserTimeseries: s.optional(s.lazy(() => labeledCountInfoSchema)),
    dailyActiveUserTimeseries: s.optional(s.lazy(() => labeledCountInfoSchema)),
    sharedAgentsCount: s.optional(s.int()),
    topAgentsInsights: s.optional(s.array(s.lazy(() => perAgentInsightSchema))),
    topUseCasesInsights: s.optional(s.array(s.lazy(() => agentUseCaseInsightSchema))),
    agentsUsageByDepartmentInsights: s.optional(s.array(s.lazy(() => agentsUsageByDepartmentInsightSchema))),
    agentUsersInsights: s.optional(s.array(s.lazy(() => agentUsersInsightSchema))),
    agentsTimeSavedInsights: s.optional(s.array(s.lazy(() => agentsTimeSavedInsightSchema))),
    dailyAgentRunsTimeseries: s.optional(s.lazy(() => labeledCountInfoSchema)),
    successfulRunsTimeseries: s.optional(s.lazy(() => labeledCountInfoSchema)),
    failedRunsTimeseries: s.optional(s.lazy(() => labeledCountInfoSchema)),
    pausedRunsTimeseries: s.optional(s.lazy(() => labeledCountInfoSchema)),
    upvotesTimeseries: s.optional(s.lazy(() => labeledCountInfoSchema)),
    downvotesTimeseries: s.optional(s.lazy(() => labeledCountInfoSchema)),
  });
