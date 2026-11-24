import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/**
 * The result data for this resource. Which fields are populated depends on the resultType. For
 * security_risk: critical, high, medium, low. For potential_daily_savings: value. For
 * potential_daily_savings_with_recommendation: value, current, recommendation. For
 * potential_daily_savings_with_cluster_agent: value, agentInstalled.
 */
export type Result = {
  /** the daily saving amount for this result */
  value?: number;
  /** number of critical security risks */
  critical?: number;
  /** number of high security risks */
  high?: number;
  /** number of medium security risks */
  medium?: number;
  /** number of low security risks */
  low?: number;
  /** the current state (i.e. current instance type) */
  current?: string;
  /** the recommended state (i.e. recommended instance type) */
  recommendation?: string;
  /** true if the agent is installed */
  agentInstalled?: boolean;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const resultSchema: Schema<Result> = s.object<Result>(
  {
    value: s.optional(s.float64()),
    critical: s.optional(s.int()),
    high: s.optional(s.int()),
    medium: s.optional(s.int()),
    low: s.optional(s.int()),
    current: s.optional(s.string()),
    recommendation: s.optional(s.string()),
    agentInstalled: s.optional(s.boolean()),
  },
  { additionalProperties: s.json() },
);
