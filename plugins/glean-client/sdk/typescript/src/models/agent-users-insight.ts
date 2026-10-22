import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { personSchema, type Person } from "./person.js";

export type AgentUsersInsight = {
  person?: Person;
  /** Department name */
  departmentName?: string;
  /** Total number of agents used by this user over the specified time period. */
  agentsUsedCount?: number;
  /** Average number of runs per day for this user over the specified time period. */
  averageRunsPerDayCount?: number;
  /** Total number of agents created by this user over the specified time period. */
  agentsCreatedCount?: number;
  /** Total number of agent runs for this user over the specified time period. */
  runCount?: number;
};

export const agentUsersInsightSchema: Schema<AgentUsersInsight> = s.object<AgentUsersInsight>({
  person: s.optional(s.lazy(() => personSchema)),
  departmentName: s.optional(s.string()),
  agentsUsedCount: s.optional(s.int()),
  averageRunsPerDayCount: s.optional(s.float64()),
  agentsCreatedCount: s.optional(s.int()),
  runCount: s.optional(s.int()),
});
