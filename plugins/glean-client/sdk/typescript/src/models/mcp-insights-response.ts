import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { labeledCountInfoSchema, type LabeledCountInfo } from "./labeled-count-info.js";

export type McpInsightsResponse = {
  /** Number of current Monthly Active Users. */
  monthlyActiveUsers?: number;
  /** Number of current Weekly Active Users. */
  weeklyActiveUsers?: number;
  /** Number of current Daily Active Users. */
  dailyActiveUsers?: number;
  monthlyActiveUserTimeseries?: LabeledCountInfo;
  weeklyActiveUserTimeseries?: LabeledCountInfo;
  dailyActiveUserTimeseries?: LabeledCountInfo;
  overallDailyActiveUserTimeseries?: LabeledCountInfo;
  topHostApplicationsActiveUserTimeseries?: LabeledCountInfo[];
};

export const mcpInsightsResponseSchema: Schema<McpInsightsResponse> = s.object<McpInsightsResponse>({
  monthlyActiveUsers: s.optional(s.int()),
  weeklyActiveUsers: s.optional(s.int()),
  dailyActiveUsers: s.optional(s.int()),
  monthlyActiveUserTimeseries: s.optional(s.lazy(() => labeledCountInfoSchema)),
  weeklyActiveUserTimeseries: s.optional(s.lazy(() => labeledCountInfoSchema)),
  dailyActiveUserTimeseries: s.optional(s.lazy(() => labeledCountInfoSchema)),
  overallDailyActiveUserTimeseries: s.optional(s.lazy(() => labeledCountInfoSchema)),
  topHostApplicationsActiveUserTimeseries: s.optional(s.array(s.lazy(() => labeledCountInfoSchema))),
});
