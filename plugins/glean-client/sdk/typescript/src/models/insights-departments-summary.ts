import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { currentActiveUsersSchema, type CurrentActiveUsers } from "./current-active-users.js";
import { insightsChatSummarySchema, type InsightsChatSummary } from "./insights-chat-summary.js";
import { insightsSearchSummarySchema, type InsightsSearchSummary } from "./insights-search-summary.js";

export type InsightsDepartmentsSummary = {
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
};

export const insightsDepartmentsSummarySchema: Schema<InsightsDepartmentsSummary> =
  s.object<InsightsDepartmentsSummary>({
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
  });
