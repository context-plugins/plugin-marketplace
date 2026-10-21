import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { iconConfigSchema, type IconConfig } from "./icon-config.js";

export type AgentsUsageByDepartmentInsight = {
  /** Name of the department */
  department?: string;
  /**
   * Percentage of employees in the department who have used agents at least once over the specified
   * time period.
   */
  agentAdoptionRate?: number;
  /**
   * Total number of users in this department who have used any agent over the specified time
   * period.
   */
  userCount?: number;
  /** Total number of runs in this department over the specified time period. */
  runCount?: number;
  /**
   * ID of the agent to be shown in the agent column in this department over the specified time
   * period.
   */
  agentId?: string;
  /**
   * Name of the agent to be shown in the agent column in this department over the specified time
   * period.
   */
  agentName?: string;
  /** Defines how to render an icon */
  icon?: IconConfig;
  /** Indicates whether the agent has been deleted */
  isDeleted?: boolean;
};

export const agentsUsageByDepartmentInsightSchema: Schema<AgentsUsageByDepartmentInsight> =
  s.object<AgentsUsageByDepartmentInsight>({
    department: s.optional(s.string()),
    agentAdoptionRate: s.optional(s.float64()),
    userCount: s.optional(s.int()),
    runCount: s.optional(s.int()),
    agentId: s.optional(s.string()),
    agentName: s.optional(s.string()),
    icon: s.optional(s.lazy(() => iconConfigSchema)),
    isDeleted: s.optional(s.boolean()),
  });
