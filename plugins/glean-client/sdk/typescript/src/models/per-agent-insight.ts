import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { iconConfigSchema, type IconConfig } from "./icon-config.js";
import { personSchema, type Person } from "./person.js";

export type PerAgentInsight = {
  /** Agent ID */
  agentId?: string;
  /** Agent name */
  agentName?: string;
  /** Defines how to render an icon */
  icon?: IconConfig;
  /** Indicates whether the agent has been deleted */
  isDeleted?: boolean;
  /** Total number of users for this agent over the specified time period. */
  userCount?: number;
  /** Total number of runs for this agent over the specified time period. */
  runCount?: number;
  /** Total number of upvotes for this agent over the specified time period. */
  upvoteCount?: number;
  /** Total number of downvotes for this agent over the specified time period. */
  downvoteCount?: number;
  owner?: Person;
};

export const perAgentInsightSchema: Schema<PerAgentInsight> = s.object<PerAgentInsight>({
  agentId: s.optional(s.string()),
  agentName: s.optional(s.string()),
  icon: s.optional(s.lazy(() => iconConfigSchema)),
  isDeleted: s.optional(s.boolean()),
  userCount: s.optional(s.int()),
  runCount: s.optional(s.int()),
  upvoteCount: s.optional(s.int()),
  downvoteCount: s.optional(s.int()),
  owner: s.optional(s.lazy(() => personSchema)),
});
