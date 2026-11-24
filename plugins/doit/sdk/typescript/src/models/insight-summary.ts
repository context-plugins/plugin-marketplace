import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Aggregate summary of risks and savings across all resource results for an insight. */
export type InsightSummary = {
  /** Total number of operational risks. */
  operationalRisks?: number;
  /** Total number of performance risks. */
  performanceRisks?: number;
  /** Total potential daily savings in USD. */
  potentialDailySavings?: number;
  /** Total number of reliability risks. */
  reliabilityRisks?: number;
  /** Total number of security risks. */
  securityRisks?: number;
  /** Total number of sustainability risks. */
  sustainabilityRisks?: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const insightSummarySchema: Schema<InsightSummary> = s.object<InsightSummary>(
  {
    operationalRisks: s.optional(s.float64()),
    performanceRisks: s.optional(s.float64()),
    potentialDailySavings: s.optional(s.float64()),
    reliabilityRisks: s.optional(s.float64()),
    securityRisks: s.optional(s.float64()),
    sustainabilityRisks: s.optional(s.float64()),
  },
  { additionalProperties: s.json() },
);
