import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { personSchema, type Person } from "./person.js";

export type PerUserInsight = {
  person?: Person;
  /** Total number of searches by this user over the specified time period. */
  numSearches?: number;
  /** Total number of chats by this user over the specified time period. */
  numChats?: number;
  /**
   * Total number of active sessions by this user in a Glean client over the specified time period.
   */
  numActiveSessions?: number;
  /**
   * Total number of Gleanbot responses marked useful by this user over the specified time period.
   */
  numGleanbotUsefulResponses?: number;
  /** Total number of days this user was an Active User over the specified time period. */
  numDaysActive?: number;
  /** Total number of summarized items by this user over the specified time period. */
  numSummarizations?: number;
  /** Total number of AI Answers interacted with by this user over the specified time period. */
  numAiAnswers?: number;
  /** Total number of agent runs for this user over the specified time period. */
  numAgentRuns?: number;
  /** Total number of MCP calls for this user over the specified time period. */
  numMcpCalls?: number;
};

export const perUserInsightSchema: Schema<PerUserInsight> = s.object<PerUserInsight>({
  person: s.optional(s.lazy(() => personSchema)),
  numSearches: s.optional(s.int()),
  numChats: s.optional(s.int()),
  numActiveSessions: s.optional(s.int()),
  numGleanbotUsefulResponses: s.optional(s.int()),
  numDaysActive: s.optional(s.int()),
  numSummarizations: s.optional(s.int()),
  numAiAnswers: s.optional(s.int()),
  numAgentRuns: s.optional(s.int()),
  numMcpCalls: s.optional(s.int()),
});
