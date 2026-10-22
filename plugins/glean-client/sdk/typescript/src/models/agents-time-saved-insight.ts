import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { iconConfigSchema, type IconConfig } from "./icon-config.js";

export type AgentsTimeSavedInsight = {
  /** Agent ID */
  agentId?: string;
  /** Agent name */
  agentName?: string;
  /** Defines how to render an icon */
  icon?: IconConfig;
  /** Indicates whether the agent has been deleted */
  isDeleted?: boolean;
  /** Total number of runs for this agent over the specified time period. */
  runCount?: number;
  /** Average minutes saved per run for this agent over the specified time period. */
  minsPerRun?: number;
  /**
   * Total number of users who provided feedback on time saved for this agent over the specified
   * time period.
   */
  feedbackUserCount?: number;
};

export const agentsTimeSavedInsightSchema: Schema<AgentsTimeSavedInsight> = s.object<AgentsTimeSavedInsight>({
  agentId: s.optional(s.string()),
  agentName: s.optional(s.string()),
  icon: s.optional(s.lazy(() => iconConfigSchema)),
  isDeleted: s.optional(s.boolean()),
  runCount: s.optional(s.int()),
  minsPerRun: s.optional(s.float64()),
  feedbackUserCount: s.optional(s.int()),
});
