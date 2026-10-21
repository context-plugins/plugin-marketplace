import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type InsightsSearchSummary = {
  /** Number of current Monthly Active Users. */
  monthlyActiveUsers?: number;
  /** Number of current Weekly Active Users. */
  weeklyActiveUsers?: number;
  /** Total number of searches by users over the specified time period. */
  numSearches?: number;
  /** Total number of distinct users who searched over the specified time period. */
  numSearchUsers?: number;
};

export const insightsSearchSummarySchema: Schema<InsightsSearchSummary> = s.object<InsightsSearchSummary>({
  monthlyActiveUsers: s.optional(s.int()),
  weeklyActiveUsers: s.optional(s.int()),
  numSearches: s.optional(s.int()),
  numSearchUsers: s.optional(s.int()),
});
