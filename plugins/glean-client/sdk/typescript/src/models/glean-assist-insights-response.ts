import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { userActivityInsightSchema, type UserActivityInsight } from "./user-activity-insight.js";

export type GleanAssistInsightsResponse = {
  /**
   * Unix timestamp of the last activity processed to make the response (in seconds since epoch
   * UTC).
   */
  lastLogTimestamp?: number;
  /** Insights for all active users with respect to set of actions. */
  activityInsights?: UserActivityInsight[];
  /** Total number of active users in the requested period. */
  totalActiveUsers?: number;
  /** List of datasource instances for which glean assist is enabled. */
  datasourceInstances?: string[];
  /** List of departments applicable for users tab. */
  departments?: string[];
};

export const gleanAssistInsightsResponseSchema: Schema<GleanAssistInsightsResponse> =
  s.object<GleanAssistInsightsResponse>({
    lastLogTimestamp: s.optional(s.int()),
    activityInsights: s.optional(s.array(s.lazy(() => userActivityInsightSchema))),
    totalActiveUsers: s.optional(s.int()),
    datasourceInstances: s.optional(s.array(s.string())),
    departments: s.optional(s.array(s.string())),
  });
