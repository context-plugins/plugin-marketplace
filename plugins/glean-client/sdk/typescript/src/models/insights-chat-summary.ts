import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type InsightsChatSummary = {
  /** Number of current Monthly Active Users. */
  monthlyActiveUsers?: number;
  /** Number of current Weekly Active Users. */
  weeklyActiveUsers?: number;
  /** Total number of chats by users over the specified time period. */
  numChats?: number;
  /** Total number of distinct users who used Chat over the specified time period. */
  numChatUsers?: number;
};

export const insightsChatSummarySchema: Schema<InsightsChatSummary> = s.object<InsightsChatSummary>({
  monthlyActiveUsers: s.optional(s.int()),
  weeklyActiveUsers: s.optional(s.int()),
  numChats: s.optional(s.int()),
  numChatUsers: s.optional(s.int()),
});
