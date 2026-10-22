import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { labeledCountInfoSchema, type LabeledCountInfo } from "./labeled-count-info.js";
import { perUserAssistantInsightSchema, type PerUserAssistantInsight } from "./per-user-assistant-insight.js";

export type AssistantInsightsResponse = {
  /** Number of current Monthly Active Users. */
  monthlyActiveUsers?: number;
  /** Number of current Weekly Active Users. */
  weeklyActiveUsers?: number;
  /** Unix timestamp of the last update for the insights data in the response. */
  lastUpdatedTs?: number;
  monthlyActiveUserTimeseries?: LabeledCountInfo;
  weeklyActiveUserTimeseries?: LabeledCountInfo;
  dailyActiveUserTimeseries?: LabeledCountInfo;
  /**
   * Number of current signed up employees in the specified departments, according to the Org Chart.
   */
  totalSignups?: number;
  chatMessagesTimeseries?: LabeledCountInfo;
  summarizationsTimeseries?: LabeledCountInfo;
  aiAnswersTimeseries?: LabeledCountInfo;
  gleanbotInteractionsTimeseries?: LabeledCountInfo;
  perUserInsights?: PerUserAssistantInsight[];
  upvotesTimeseries?: LabeledCountInfo;
  downvotesTimeseries?: LabeledCountInfo;
};

export const assistantInsightsResponseSchema: Schema<AssistantInsightsResponse> =
  s.object<AssistantInsightsResponse>({
    monthlyActiveUsers: s.optional(s.int()),
    weeklyActiveUsers: s.optional(s.int()),
    lastUpdatedTs: s.optional(s.int()),
    monthlyActiveUserTimeseries: s.optional(s.lazy(() => labeledCountInfoSchema)),
    weeklyActiveUserTimeseries: s.optional(s.lazy(() => labeledCountInfoSchema)),
    dailyActiveUserTimeseries: s.optional(s.lazy(() => labeledCountInfoSchema)),
    totalSignups: s.optional(s.int()),
    chatMessagesTimeseries: s.optional(s.lazy(() => labeledCountInfoSchema)),
    summarizationsTimeseries: s.optional(s.lazy(() => labeledCountInfoSchema)),
    aiAnswersTimeseries: s.optional(s.lazy(() => labeledCountInfoSchema)),
    gleanbotInteractionsTimeseries: s.optional(s.lazy(() => labeledCountInfoSchema)),
    perUserInsights: s.optional(s.array(s.lazy(() => perUserAssistantInsightSchema))),
    upvotesTimeseries: s.optional(s.lazy(() => labeledCountInfoSchema)),
    downvotesTimeseries: s.optional(s.lazy(() => labeledCountInfoSchema)),
  });
