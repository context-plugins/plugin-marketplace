import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { iconConfigSchema, type IconConfig } from "./icon-config.js";

export type AgentUseCaseInsight = {
  /** Use case name */
  useCase?: string;
  /** Total number of runs for this use case over the specified time period. */
  runCount?: number;
  /** Percentage change in runs compared to the previous equivalent time period. */
  trend?: number;
  /** Comma-separated list of the top departments using this use case. */
  topDepartments?: string;
  /** ID of the most-used agent for this use case. */
  topAgentId?: string;
  /** Name of the most-used agent for this use case. */
  topAgentName?: string;
  /** Defines how to render an icon */
  topAgentIcon?: IconConfig;
  /** Indicates whether the top agent has been deleted. */
  topAgentIsDeleted?: boolean;
};

export const agentUseCaseInsightSchema: Schema<AgentUseCaseInsight> = s.object<AgentUseCaseInsight>({
  useCase: s.optional(s.string()),
  runCount: s.optional(s.int()),
  trend: s.optional(s.float64()),
  topDepartments: s.optional(s.string()),
  topAgentId: s.optional(s.string()),
  topAgentName: s.optional(s.string()),
  topAgentIcon: s.optional(s.lazy(() => iconConfigSchema)),
  topAgentIsDeleted: s.optional(s.boolean()),
});
